# Studio — Substrate

Memoria durable de una máquina de detección, validación y construcción de empresas.
Fuente de verdad en **git** (append-only = auditoría y versionado gratis).

## Estructura
- `STUDIO.md` — la constitución: invariantes, gates, contrato de rol. **Leer primero.**
- `opportunities/opp-NNN-*/` — una carpeta por oportunidad:
  - `state/` — objetos de estado (hipótesis, scope, etc.), versionados.
  - `evidence.jsonl` — ledger append-only, firmado.
  - `decisions.jsonl` — gates y decisiones append-only, con el contra del Adversario.
- `skills/` — los roles del studio como SKILL.md, **agnósticos de la compañía**.

## Cómo se usa
1. Apuntar Cowork a esta carpeta; instalar los skills de `skills/`.
2. Toda evidencia y decisión se **asienta** (append-only). Nunca editar ni borrar líneas pasadas; una corrección es una línea nueva.
3. Objetos de estado: versionados vía git, no sobrescritos en silencio.
4. Ningún gate se cierra sin pasar por el Adversario (queda registrado en `decisions.jsonl`).

## Estado V0
- `opp-001` (Cinéfilo, formerly QueVeo): Gate 1 · **hold**. Pendiente: customer discovery + resolver form factor.
- Skills extraídos: `estrategia-validacion` (dueño Gate 1), `adversario` (transversal a todos los gates) y `competencia-mercado` (insumo Gate 1 / dimensionamiento que audita G4).
- Pendiente de extraer (de futuras corridas): Build, Seguridad, Métricas, Operaciones, GTM, y la capa de máquina (Scout, Triage, portfolio).
