# Daily Check — 2026-06-14

**Ejecutado por:** daiily-manager (scheduled task, retroactivo — escrito 2026-06-16)
**Motivo del retraso:** Las corridas del 14 y 15 fallaron (modelo no disponible) o produjeron output vacío.

---

## Sesiones del día

### 1. "Google Cloud ASR integration" — opp-001-queveo
**Qué pasó:** Ronda masiva de F&F: Paul (cinéfilo, 30s), Joaco (13) + Fran (17), suegra (~55+), suegro (~55+). Agus los observó en tiempo real y registró feedback en el pipeline de evidencia.

**Evidencia registrada:** ev-038 a ev-066 en `state/evidence.jsonl` (29 entradas nuevas, todas 2026-06-14).

**Hallazgos clave consolidados:**

- **Onboarding sistémicamente roto:** ningún tester en toda la ronda F&F entendió qué hacer al entrar. Patrón en TODOS los perfiles.
- **Mic invisible:** 0/N testers descubrió el micrófono por su cuenta. El suegro dijo espontáneamente "le hablaría" como forma preferida y AUN ASÍ no lo vio. Discoverabilidad = 0.
- **Relación teléfono→TV no intuitiva:** el valor central del producto requiere que Agus lo explique en persona. Aplica en 45+ y en teens por igual.
- **Pain del 55+ es distinto:** los suegros NO tienen fricción con discovery en plataformas nativas. Su pain es novedades/estrenos, no fragmentación.
- **Objeción estructural al wedge (patrón):** Paul (el tester más positivo, dispuesto a pagar) terminó preguntando si podría armarse el mismo algo con IA. Idéntico a Rafa (ev-009). Dos perfiles distintos → no es un usuario, es una objeción al wedge.
- **Paul: modelo "push" no "pull":** "no sé qué quiero ver, me hubiera gustado que me proponga." El producto actual invierte el modelo ideal.
- **Teens tienen dolor genuino pero no pagan:** Fran y Joaco expresaron dolor real. El pagador sería el padre, no el usuario → segmento B2C familiar, no individual.
- **Gap percepción velocidad:** Joaco/Fran percibieron la conexión TV-app como "instantánea"; Agus la sintió lenta. La vara de F&F puede estar calibrada más bajo.

**Documentado:** ✅ ev-038 a ev-066 en `state/evidence.jsonl`.

**Problema estructural corregido 2026-06-16:** `evidence.jsonl` root estaba congelado en ev-035 (June 10). Sincronizado con `state/evidence.jsonl` — ambos apuntan ahora a la misma versión completa (ev-001 a ev-066, 66 entradas).

---

## Estado del substrate al cierre del día

| Opp | Gate actual | Pendiente crítico |
|-----|-------------|-------------------|
| opp-001-queveo | Gate 1 · hold | **MUST #1 desbloqueante:** PostHog no instrumentado. Sin datos conductuales, el Grupo B no arranca. |
| opp-002-nueva | Gate 1 · hold | Founder no ha dado el call (park / kill / pivot). Sin actividad. |
| opp-004-cables-usbc | Pre-gate | Sin actividad. |

---

## Pendiente para el próximo chat

- **MUST #1:** PostHog snippet en las 2 páginas + verificar 8 eventos en el panel. Condición bloqueante para Grupo B. Agus declaró que puede hacerlo.
- **Decisión estratégica a discutir:** la objeción "lo hago yo con IA" ya tiene 2 instancias en perfiles distintos (ev-009 + ev-057). Antes de lanzar Grupo B vale decidir si ese patrón cambia algo del wedge o se acepta como ruido de Grupo A.
- **Segmentación del Grupo B:** con el 55+ descartado como segmento primario (pain diferente), aclarar qué perfil recluta para el Grupo B.
- **opp-002:** call pendiente del founder desde 2026-06-05.
