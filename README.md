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
- `opp-002` (navegación/gestión conversacional cross-plataforma): Gate 1 · **hold** (dec-002).
  El wedge quedó refutado por el mapa competitivo; concedida una ronda acotada de discovery con
  listón de salida pre-comprometido (ver `target-profile.md`).

### Matriz de roles — los 4 gates cerrados
| Gate | Roles (skills) |
|------|----------------|
| Transversal | `adversario` (caso para matar) · `campeon` (caso a favor) — el gate se oye en estéreo |
| G1 · Problem-Solution Fit | `estrategia-validacion` (dueño) · `competencia-mercado` (insumo) |
| G2 · Product-Market Fit | `metricas` (dueño PMF) · `build` · `seguridad` (veto a producción) |
| G3 · Crecimiento repetible | `gtm` · `operaciones` |
| G4 · Scale | `escala-moat` (dueño) |

Los diez roles son **agnósticos de la compañía** (invariante #5) y juzgan por mérito de la
oportunidad, no por fit con el founder (invariante #7). Cada `<rol>/SKILL.md` tiene su `.skill`
instalable al lado. Cómo correr una idea de punta a punta: ver **`COMO-USAR.md`**.

- **Aún NO construido (a propósito, por la regla V0):** la capa de máquina —Scout (escaneo
  continuo), Triage/scoring, portfolio multi-oportunidad—. Se extrae de corridas reales, no se
  construye antes. Los roles G2–G4 están escritos pero sin pulir con una corrida real de
  construcción/escala todavía.
