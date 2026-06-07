# Cómo usar el Framework Fundacional

Una matriz para correr ideas con disciplina: detectar un dolor, validarlo, construir, escalar
y lanzar — sin enamorarte de la idea. Esta guía es para arrancar de cero (ej. mi socio).

## La idea en una frase
Cada dolor que sobrevive el triage se vuelve una **oportunidad** que corre un playbook de
cuatro gates dentro de su propia carpeta. Un equipo de **roles** (skills) hace el trabajo; un
**substrate** (archivos en git) guarda la memoria de forma append-only y auditable. El sistema
está diseñado para **matar ideas barato**: si una sobrevive un pase honesto, vale oro.

## Las 3 piezas
1. **`STUDIO.md`** — la constitución. Los invariantes, los gates y el contrato de rol que NO
   cambian entre oportunidades. **Leerlo primero.**
2. **`opportunities/opp-NNN-*/`** — una carpeta por idea. Adentro: `state/` (hipótesis, mapa,
   métricas…), `evidence.jsonl` (todo lo que aprendés, firmado), `decisions.jsonl` (los gates,
   con el contra del Adversario).
3. **`skills/`** — los nueve roles, agnósticos de la compañía. Cada uno es un `SKILL.md` con su
   `.skill` instalable al lado.

## Los 10 roles y cuándo se activan
| Rol | Para qué | Gate |
|-----|----------|------|
| `estrategia-validacion` | Afilar el dolor a hipótesis, cazar evidencia que lo refute | G1 (dueño) |
| `competencia-mercado` | Mapear quién ya ocupa el espacio y si el wedge es defendible | G1 (insumo) |
| `adversario` | Antes de cada gate, el caso más fuerte de que te equivocás | Transversal |
| `campeon` | El contrapeso: el caso más fuerte a favor, para que una chispa genuina no muera por escepticismo | Transversal |
| `build` | El MVP más chico que testea el supuesto más riesgoso | G2 |
| `metricas` | ¿Hay PMF de verdad? (retención, Sean Ellis, effort test) | G2 (dueño) |
| `seguridad` | Threat-model y veto a producción con críticos abiertos | G2/G3 |
| `gtm` | Un canal repetible con CAC/LTV/payback que cierra | G3 |
| `operaciones` | Eliminar el cuello de botella founder; aguantar carga | G3 |
| `escala-moat` | ¿El moat aguanta a un competidor con plata? | G4 (dueño) |

No hace falta invocarlos por nombre: cada skill se activa solo cuando la conversación entra en
su terreno. Pero podés pedirlos explícito.

## Cómo correr una idea nueva, paso a paso
1. **Instalar los skills.** Settings → Capabilities → instalar los `.skill` de `skills/`.
   Apuntá Cowork a esta carpeta.
2. **Crear la oportunidad.** Copiá `opportunities/_template/` como `opp-NNN-tu-slug/` (trae el
   scaffolding limpio: `state/hypothesis.md` en blanco, `evidence.jsonl` y `decisions.jsonl`
   vacíos, `CLAUDE.md` con la guía para retomar). Las `opp-001` y `opp-002` ya tienen corridas
   reales adentro — miralas como ejemplo, no las pises.
3. **Contar la idea.** El rol `estrategia-validacion` te va a frenar y exigir los cuatro:
   **quién** exactamente tiene el dolor, **cuán seguido**, **cuán severo**, **qué hace hoy**.
   Si no respondés los cuatro, no está lista para validar.
4. **Cazar refutación.** `competencia-mercado` sale a buscar quién ya ocupa el espacio y si
   alguien gana plata ahí. Default: refutar, no confirmar.
5. **Oír el gate en estéreo y decidir.** Antes del call corren el `adversario` (caso más
   fuerte para matar) y, si hay señal genuina, el `campeon` (caso más fuerte a favor). Vos sos
   dueño del call: `advance` · `hold` · `iterate` · `pivot` · `kill`. Queda firmado en
   `decisions.jsonl` con ambos casos.
6. **Si avanza:** Build → Métricas/Seguridad (G2) → GTM/Operaciones (G3) → Escala/Moat (G4),
   cada uno con su pase por el Adversario. Si se mata, se extrae el problema subyacente como
   posible semilla nueva (carry-forward).

## Las reglas que dan los dientes (de `STUDIO.md`)
- **Evidencia append-only y firmada.** Nunca borrás un dato que refuta. Lo que confirma y lo
  que refuta pesan igual. El formato te impide hacer trampa con vos mismo.
- **Ningún gate se pasa en silencio.** Cada gate registra el argumento más fuerte del Adversario
  y cómo se respondió.
- **El criterio es la oportunidad, no el founder** (invariante #7). Ni sesgo hacia tu dominio,
  ni exclusión. Una idea fuera de tu expertise compite en igualdad; tu ventaja de distribución
  se anota aparte como factor de ejecución.
- **Matar barato = construir caro.** La barra para invalidar es tan alta como la para avanzar.
- **El git log ES la auditoría.** Guardá todo en git (append-only): es versionado y due-diligence
  gratis para cuando escales.

## Estado actual (sé honesto con tu socio)
- G1 está probado con dos corridas reales (`opp-001`, `opp-002`), ambas en hold/park — el
  sistema funcionando: mató/frenó ideas barato.
- Los roles de G2–G4 están escritos y son coherentes con la constitución, pero **todavía no
  pulidos con una corrida real** de construcción y escala. Se afinan con el primer caso que
  cruce a Gate 2.
- La capa de máquina (Scout/Triage/portfolio) **no está construida a propósito**: se extrae de
  corridas reales, no se arma antes (regla V0: no construir la fábrica hasta hacer una a mano).
