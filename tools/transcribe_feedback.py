#!/usr/bin/env python3
"""
transcribe_feedback.py — Substrate Studio / Framework Fundacional
Convierte grabaciones de sesiones Friends & Family en evidencia estructurada.

Flujo:
  audio AAC/MP4 → chunks FLAC (ffmpeg) → Google STT → transcript.txt
                                                      → signals → evidence.jsonl

Uso:
  python transcribe_feedback.py <audio> <opp-path> "<fuente>"

Ejemplo:
  python transcribe_feedback.py sesion_rafa.aac opportunities/opp-001-queveo "Rafa, F&F 2026-06-13"

Requiere:
  - ffmpeg instalado (brew install ffmpeg / apt install ffmpeg)
  - GOOGLE_API_KEY en .env o variable de entorno
  - ANTHROPIC_API_KEY en .env o variable de entorno (para extracción de señales)
"""

import os, sys, json, base64, datetime, subprocess, tempfile, textwrap, shutil
import requests

# ── Intentar cargar .env si existe ──────────────────────────────────────────
def load_dotenv():
    env_path = os.path.join(os.path.dirname(__file__), ".env")
    if not os.path.exists(env_path):
        return
    # PowerShell crea archivos UTF-16 con BOM al usar "echo > file"; lo detectamos
    with open(env_path, "rb") as f:
        bom = f.read(2)
    encoding = "utf-16" if bom in (b"\xff\xfe", b"\xfe\xff") else "utf-8-sig"
    with open(env_path, encoding=encoding) as f:
        for line in f:
            line = line.strip()
            if line and not line.startswith("#") and "=" in line:
                k, v = line.split("=", 1)
                os.environ.setdefault(k.strip(), v.strip())

load_dotenv()

GOOGLE_API_KEY  = os.environ.get("GOOGLE_API_KEY", "")
ANTHROPIC_API_KEY = os.environ.get("ANTHROPIC_API_KEY", "")
CHUNK_SECS = 55        # Google STT inline limit < 60s
SAMPLE_RATE = 16000
LANGUAGE   = "es-AR"   # cambiar a "es-US" o "en-US" si corresponde


# ── Utilidades ───────────────────────────────────────────────────────────────

def check_deps():
    for cmd in ["ffmpeg", "ffprobe"]:
        if shutil.which(cmd) is None:
            sys.exit(f"ERROR: '{cmd}' no encontrado. Instalá ffmpeg primero.")

def get_duration(path):
    r = subprocess.run(
        ["ffprobe", "-v", "error", "-show_entries", "format=duration",
         "-of", "default=noprint_wrappers=1:nokey=1", path],
        capture_output=True, text=True, check=True
    )
    return float(r.stdout.strip())

def to_flac_chunks(input_path, tmpdir):
    """Divide el audio en chunks FLAC mono 16kHz."""
    duration = get_duration(input_path)
    chunks = []
    start = 0.0
    idx   = 0
    while start < duration:
        out = os.path.join(tmpdir, f"chunk_{idx:03d}.flac")
        subprocess.run([
            "ffmpeg", "-y", "-i", input_path,
            "-ss", str(start), "-t", str(CHUNK_SECS),
            "-ar", str(SAMPLE_RATE), "-ac", "1",
            out
        ], check=True, capture_output=True)
        chunks.append((out, start))
        start += CHUNK_SECS
        idx   += 1
    return chunks, duration

def transcribe_chunk(chunk_path):
    """Manda un chunk FLAC a Google Speech-to-Text v1 (API key)."""
    with open(chunk_path, "rb") as f:
        content = base64.b64encode(f.read()).decode()
    payload = {
        "config": {
            "encoding": "FLAC",
            "sampleRateHertz": SAMPLE_RATE,
            "languageCode": LANGUAGE,
            "enableAutomaticPunctuation": True,
            "model": "latest_long",
        },
        "audio": {"content": content}
    }
    resp = requests.post(
        f"https://speech.googleapis.com/v1/speech:recognize?key={GOOGLE_API_KEY}",
        json=payload, timeout=60
    )
    if not resp.ok:
        print(f"  ⚠️  Google STT error {resp.status_code}: {resp.text[:200]}")
        return ""
    data = resp.json()
    return " ".join(
        alt["transcript"]
        for result in data.get("results", [])
        for alt in result.get("alternatives", [])[:1]
    )

def next_ev_id(evidence_path):
    if not os.path.exists(evidence_path):
        return 1
    with open(evidence_path) as f:
        lines = [l for l in f if l.strip()]
    return len(lines) + 1

def extract_signals(transcript, source_label, evidence_path):
    """Claude extrae entradas de evidencia del transcript."""
    try:
        import anthropic
    except ImportError:
        print("  ⚠️  'anthropic' no instalado. Saltando extracción.")
        print("      pip install anthropic --break-system-packages")
        return []

    if not ANTHROPIC_API_KEY:
        print("  ⚠️  ANTHROPIC_API_KEY no seteada. Saltando extracción.")
        return []

    client = anthropic.Anthropic(api_key=ANTHROPIC_API_KEY)
    today  = datetime.date.today().isoformat()
    start_n = next_ev_id(evidence_path)

    prompt = textwrap.dedent(f"""
        Sos el rol Estrategia/Validación del Substrate Studio.

        Analizá esta transcripción de una sesión Friends & Family y extraé
        SOLO las señales con valor de evidencia: dolores mencionados,
        objeciones, momentos de pull, sorpresas, confirmaciones o refutaciones
        de hipótesis. Ignorá frases de relleno o cortesía sin contenido.

        TRANSCRIPCIÓN:
        {transcript}

        Devolvé un array JSON (sin texto adicional) con entradas de este schema:
        {{
          "id": "ev-NNN",
          "date": "{today}",
          "source": "{source_label}",
          "bears_on": "<hipótesis o supuesto que toca>",
          "sign": "confirms|refutes|surprising",
          "strength": "anecdote|pattern|hard_number",
          "note": "<descripción objetiva en tercera persona; citá textualmente si es posible>"
        }}

        Numerá desde ev-{start_n:03d}.
        Devolvé SOLO el array JSON, sin markdown ni explicación.
    """).strip()

    msg = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=3000,
        messages=[{"role": "user", "content": prompt}]
    )
    raw = msg.content[0].text.strip()
    # quitar posible ```json ... ```
    if raw.startswith("```"):
        raw = raw.split("```")[1]
        if raw.startswith("json"):
            raw = raw[4:]
    return json.loads(raw)


# ── Main ─────────────────────────────────────────────────────────────────────

def main():
    if len(sys.argv) < 3:
        print(__doc__)
        sys.exit(1)

    audio_path  = sys.argv[1]
    opp_path    = sys.argv[2]
    source_label = sys.argv[3] if len(sys.argv) > 3 else f"Audio F&F {datetime.date.today()}"

    if not os.path.exists(audio_path):
        sys.exit(f"ERROR: No existe el archivo '{audio_path}'")
    if not os.path.isdir(opp_path):
        sys.exit(f"ERROR: No existe la carpeta de opp '{opp_path}'")
    if not GOOGLE_API_KEY:
        sys.exit("ERROR: GOOGLE_API_KEY no seteada. Agregala al .env o exportala.")

    check_deps()

    state_dir     = os.path.join(opp_path, "state")
    evidence_path = os.path.join(opp_path, "evidence.jsonl")
    today_str     = datetime.date.today().isoformat()
    transcript_path = os.path.join(opp_path, f"transcript_{today_str}.txt")

    print(f"\n🎙️  Audio:  {audio_path}")
    print(f"📁  Opp:   {opp_path}")
    print(f"👤  Fuente: {source_label}\n")

    with tempfile.TemporaryDirectory() as tmpdir:

        # 1. Convertir a chunks FLAC
        print("⚙️  Convirtiendo a FLAC...")
        chunks, duration = to_flac_chunks(audio_path, tmpdir)
        print(f"   {len(chunks)} chunk(s) · {duration:.0f}s de audio\n")

        # 2. Transcribir
        print("🔤  Transcribiendo con Google STT...")
        full_transcript = ""
        for i, (chunk_path, start) in enumerate(chunks):
            mins = int(start // 60)
            secs = int(start % 60)
            print(f"   [{i+1}/{len(chunks)}] {mins:02d}:{secs:02d} ...", end=" ", flush=True)
            text = transcribe_chunk(chunk_path)
            full_transcript += text + " "
            print("✓")

        full_transcript = full_transcript.strip()

        # 3. Guardar transcript raw
        with open(transcript_path, "w", encoding="utf-8") as f:
            f.write(f"# Transcript — {source_label}\n")
            f.write(f"# Fecha: {today_str}\n\n")
            f.write(full_transcript)
        print(f"\n💾  Transcript: {transcript_path}")

        # 4. Extraer señales y escribir evidence.jsonl
        print("\n🧠  Extrayendo señales con Claude...")
        entries = extract_signals(full_transcript, source_label, evidence_path)

        if entries:
            os.makedirs(state_dir, exist_ok=True)
            with open(evidence_path, "a", encoding="utf-8") as f:
                for entry in entries:
                    f.write(json.dumps(entry, ensure_ascii=False) + "\n")

            print(f"\n✅  {len(entries)} entrada(s) agregada(s) a evidence.jsonl:\n")
            icons = {"confirms": "✅", "refutes": "❌", "surprising": "⚡"}
            for e in entries:
                icon = icons.get(e.get("sign", ""), "•")
                print(f"  {icon} {e['id']} [{e['sign']}] — {e['bears_on'][:65]}")
        else:
            print("  (sin entradas extraídas — revisá el transcript manualmente)")

        print(f"\n🏁  Listo.\n")


if __name__ == "__main__":
    main()
