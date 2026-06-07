# STUDIO — Constitución del substrate

## Qué es esto
El substrate de una máquina de detección, validación y construcción de empresas.
Cada dolor que sobrevive el triage se vuelve una *oportunidad* que corre el playbook
(Idea → MVP → Launch → Scale) dentro de su propia carpeta. Este documento define las
reglas que NO cambian entre oportunidades. Es la fuente de verdad. Vive en el repo,
no en un SaaS.

## Invariantes (lo que lo hace red de seguridad, no un repositorio de docs)
1. **Evidencia append-only y firmada.** Nunca se borra un dato que refuta. `confirms` y
   `refutes` son ciudadanos de primera clase por igual. El antídoto estructural al
   confirmation bias no es "ser objetivo": es que el formato te lo impida.
2. **Objetos de estado versionados, no sobrescritos en silencio.** Cuando la hipótesis
   cambia, la vieja queda en el historial de git con el commit que explica por qué.
3. **Ningún gate se pasa en silencio.** Cada pasaje de gate registra el argumento más
   fuerte del Adversario y cómo se respondió. Esos son los dientes. Y donde hay señal
   genuina, registra también el caso más fuerte del **Campeón** (a favor): el gate se oye en
   estéreo. Nueve escépticos y cero campeones es una máquina que deriva al verdugo; el
   objetivo final es **emprender**, no matar ideas prolijo.
4. **Procedencia en todo.** Fuente + fecha. El `git log` ES la auditoría que el Scale
   stage va a exigir.
5. **Capacidad genérica ≠ contexto de la compañía.** Los roles (skills) son agnósticos
   de la compañía. Lo específico vive acá, en el state. Si horneás la compañía en el
   skill, no podés reusar el equipo para la próxima oportunidad.
6. **El ancla de racionalidad se toma su tiempo y no se precondiciona.** La entidad que
   valida es, por diseño, más lenta y más neutral que el founder: nunca cierra un gate
   apurada ni sobre base fina, no reconstruye de memoria como si fuera verdad, y calibra
   su confianza a la evidencia (la barra para matar es tan alta como para avanzar).
7. **El criterio es la oportunidad, no el founder.** El filtro —descubrimiento, triage y
   todo gate— es el mérito del proyecto en sí: dolor real, wedge defendible, camino probado.
   Nunca es si encaja con la experiencia del founder. El fit del founder no prioriza ni
   excluye una idea: ni sesgo hacia su dominio, ni exclusión de él. Si existe una ventaja de
   ejecución/distribución del founder, se registra **aparte y explícita** (un *unfair
   advantage* que puede o no existir) e informa solo el *cómo* se atacaría — jamás el *si* la
   oportunidad es real o pasa un gate. El dominio del founder es contexto, y como tal vive en
   el state de cada oportunidad, no en el substrate ni en los skills.

## Layout (por oportunidad)
```
/opportunities/opp-NNN-slug/
  CLAUDE.md            arquitectura, decisiones, log de sesión
  /state               un archivo por objeto de estado
    hypothesis.md      ┐
    solution-concept.md│ Gate 1
    market-model.md    │
    competitive-map.md │
    target-profile.md  ┘
    scope.md           ┐ Gate 2 (vacíos hasta que el gate entra en juego)
    metrics-spec.md    │
    security-findings.md┘
    ops-inventory.md   ┐ Gate 3
    gtm-model.md       ┘
    moat-model.md        Gate 4
  evidence.jsonl       ledger append-only, firmado
  decisions.jsonl      gates y decisiones append-only, con el contra del Adversario
  /knowledge           DomainKnowledge, crece para siempre, es el moat de largo plazo
```
El schema es completo y agnóstico de etapa; la *población* es progresiva.

## evidence.jsonl — un objeto JSON por línea
```
{ "id", "date", "source", "bears_on", "sign", "strength", "note" }
```
- `bears_on`: qué hipótesis / supuesto / objeto de estado toca
- `sign`: `confirms` | `refutes` | `surprising`
- `strength`: `anecdote` | `pattern` | `hard_number`
- Regla: append-only. Nunca editar ni borrar una línea. Una corrección es una línea nueva.

## decisions.jsonl — un objeto JSON por línea
```
{ "id", "date", "gate_or_decision", "criteria_status", "adversary_strongest", "champion_strongest", "response", "call", "owner" }
```
- `call`: `advance` | `hold` | `iterate` | `pivot` | `kill`
- `champion_strongest`: el caso más fuerte **a favor** (rol Campeón). Obligatorio cuando hay
  señal genuina; opcional si la evidencia no banca ningún bull case (y eso, dicho, ya es señal).
- Regla: append-only. Todo pasaje de gate genera una línea con `adversary_strongest` no vacío.

## Gates y exit criteria (del playbook)
- **G1 · Problem-Solution Fit** — problema real y específico (quién, cuán seguido, cuán
  severo, qué hace hoy) · la solución ataca el problema que reveló la validación, no el
  que asumiste · señal cualitativa suficiente para justificar construir.
- **G2 · Product-Market Fit** — evidencia genuina de retención / revenue / referral.
  Litmus: Sean Ellis >40% "muy decepcionado" · effort test (el producto empieza a tirar
  solo en vez de que vos empujes).
- **G3 · Crecimiento repetible** — growth por canal con CAC/LTV/payback que conocés y
  defendés · el producto aguanta carga de producción · ops corre sin cuello de botella
  founder.
- **G4 · Scale** — growth sistemático y auditable · moat que aguanta escrutinio externo ·
  org madura y sostenible sin el founder en el día a día.

## Contrato de rol (todo role-skill declara, arriba de todo)
```
reads:        qué objetos de estado consume
writes:       qué objeto(s) de estado produce + qué evidencia escribe
owns_gate:    qué criterio de qué gate es responsable
adversary:    antes de declarar "listo", invoca al Adversario y registra el contra
              más fuerte en decisions.jsonl
```
El rol es agnóstico de la compañía. Lo específico va al state, no al skill.

## V0 — dónde estamos
Una oportunidad a mano, de punta a punta. **Sin** Scout (escaneo continuo), **sin**
Triage/Portfolio, **sin** capa de portfolio. Esa maquinaria —el front-end de detección,
el scoring, el funnel multi-oportunidad— se EXTRAE de esta primera corrida, no se
construye antes. No construimos la fábrica hasta haber hecho una cosa a mano.
