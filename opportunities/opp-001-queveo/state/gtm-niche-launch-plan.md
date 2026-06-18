# Plan de Lanzamiento de Nicho — opp-001 · queveo / cinéfilo

> Creado: 2026-06-17 · Rol: Go-To-Market (Gate 3 parcial)
> Construye sobre `state/ff-test-plan.md` (metodología F&F, cohortes, MUST #1) y
> `state/gtm-model.md` / `state/market-model.md`. Evidencia trazable en evidence.jsonl.
> Owner del call: Agus.

---

## 0. Tesis del plan en una frase

El segundo F&F y el lanzamiento de nicho **son la misma movida**: reclutar la cohorte
desde adentro de UNA comunidad ya congregada, medir señal limpia de demanda, y probar si
el boca a boca interno de esa comunidad es un canal de adquisición repetible de CAC ~0.
No es "F&F y después lanzo": es "uso el F&F para encender y medir el primer canal".

---

## 1. El beachhead (cerrado)

**Lo que NO es:** "ABC1 de AMBA, mediana edad" no es un beachhead — es un perfil
demográfico. No hay puerta que tocar. Un beachhead es una comunidad concreta, ya reunida,
a la que Agus tiene acceso, donde el referral puede propagarse de miembro a miembro sin que
Agus lo empuje.

**Perfil de target (el quién):** ABC1/C1, AMBA, **38–55** (núcleo 40–52), **2+ (idealmente
3+) plataformas PAGAS activas**. El rango se cierra arriba en ~55 por evidencia propia: el
segmento 55+ no tiene el dolor de discovery (ev-065). Se confirma con data externa: los 35–44
son los que más plataformas tienen (6–11) y más gastan (ev-067).

**El filtro socioeconómico no es arbitrario — es estructural.** El eje del producto es
recomendar contenido sobre LAS plataformas que el usuario ya paga. Por definición:
sin suscripciones pagas activas no hay nada que agregar ni sobre qué recomendar → **quien no
paga plataformas no es mercado para este producto**. Y el valor del producto escala con el
número de plataformas (con 1 sola no hay problema cross-plataforma que resolver). Por eso el
qualifier duro es **≥2 suscripciones pagas activas**, y el poder adquisitivo es el correlato
estructural de ese qualifier — ABC1/C1 es el proxy, no un capricho de targeting.

> Implicación operativa de reclutamiento: el screening de cualquier candidato arm's-length
> incluye una pregunta eliminatoria — **"¿cuántas plataformas de streaming PAGÁS hoy?"**.
> Menos de 2 → fuera de la muestra (no es usuario posible, contaminaría la señal).

Nota de honestidad (no cambia el plan, sí el encuadre): este qualifier estructural también
achica el TAM — refuerza la lectura del market-model de que el TAM de *revenue* es de cientos
de millones, no billions. Acá no importa para el beachhead; importa para no inflar el tamaño
del juego más adelante (Gate 4).

**Puerta de entrada (el cómo) — en orden de prioridad:**

| # | Comunidad | Por qué califica | Riesgo |
|---|---|---|---|
| 1 | **Grupos de WhatsApp de colegio (padres)** | Congregados, hablan entre ellos a diario, ABC1 38–52, son el pagador. Convergen con la hipótesis "hogar con hijos". | Que Agus sea conocido → sesgo. Mitigar (§4). |
| 2 | **Canal de trabajo / ex-empresa** | Congregados, canal propio, franja y poder adquisitivo correctos. | Sesgo techie si la empresa es tech; chequear representatividad. |
| 3 | **Conocidos y amigos** | Fáciles de sumar, sirven de warm-up. | **Sesgo F&F máximo. NO cuentan para la señal de demanda.** Ver §4. |

**Hipótesis de afinamiento (a testear, no asumida):** el beachhead más filoso podría no ser
"ABC1 genérico" sino **hogares con hijos adolescentes**. El dolor más agudo del primer F&F
apareció en teens (ev-060), que no pagan; el pagador con dolor + plata es el padre 38–52,
que es justo quien vive en la puerta #1. Si esto es cierto, el mensaje de entrada no es "una
app para vos" sino "una app para que la familia encuentre qué ver sin pelear". Se valida en
el segundo F&F.

---

## 2. El supuesto más riesgoso que este lanzamiento debe atacar

El primer F&F ya probó que el dolor existe (ev-034, ev-037–040) y que hay disposición a pagar
(ev-043). Lo que **no** está probado, y es lo que mata o salva la oportunidad:

> **No es "¿les duele?" (sí). Es "¿les duele lo suficiente como para instalar una app extra
> y aprender a usarla, en vez de seguir tolerando la recomendación nativa del televisor?"**

Esto es lo que el segundo F&F tiene que refutar o confirmar. La bandera amarilla externa:
la franja 38–55 es la **más tolerante** a la solución nativa — 56% de los 35–44 valora las
recomendaciones de la plataforma y 51% está cómodo con IA nativa (ev-068). El dolor es real
pero hoy es *tolerable*. El producto tiene que volver intolerable lo que hoy se tolera.

---

## 3. Prerrequisito innegociable: arreglar onboarding ANTES de medir demanda

Tu propia evidencia muestra dos problemas sistémicos de cold start:

- **El micrófono (input diferencial) es invisible:** 0 de N testers lo descubrió solo (ev-066).
- **El modelo TV+teléfono no es intuitivo:** patrón "y ahora qué hago" en toda la ronda (ev-064).

Por qué bloquea el plan: si lanzás el segundo F&F sin resolver esto, una activación baja es
**ininterpretable** — no vas a saber si la causa es "no les duele" (señal de negocio) o "no
entendieron la app" (señal de UX). Confundís el supuesto riesgoso del §2 con un bug de onboarding.

**Fixes diseñados (en curso a 2026-06-17):**

- **Wizard inicial de setup** que guía la conexión y explica qué hacer → ataca el modelo
  mental TV+teléfono (ev-064).
- **Interfaz de teléfono centrada en el agente conversacional** (pedir recomendaciones / que
  explique qué podés hacer) → ataca el mic invisible (ev-066) y se apoya en señal positiva
  previa (voz: ev-031; acotado+conversacional: ev-054). Abajo, un comando simple para la TV.
- **La experiencia visual (posters) vive en la TV; el teléfono es input + pedido.**

**Riesgos a vigilar en estos fixes (no festejar antes de medir):**

- El wizard arregla el *primer* uso, no la sesión 2. Verificar que el modelo aguanta en la
  segunda sesión SIN wizard (si se entra por URL cada vez, la fricción reaparece).
- Agente conversacional como interfaz principal acerca el producto a ChatGPT/Gemini (sustituto
  gratis, ev-009/015). El wedge debe seguir siendo el loop **TV-poster + redirect a la
  plataforma**, no la calidad del chat. El agente es el input; el wedge es la pantalla grande.
- Riesgo de que la atención no suba a la TV (patrón ev-064: operó el teléfono, nunca miró la
  TV). El wizard debe enseñar "mirá la tele" explícitamente; observar si los ojos suben.

**Gate de arranque del segundo F&F (los tres, sí o sí):**

- [ ] **MUST #1 — Medición (PostHog) funcionando y verificada** end-to-end. Sin esto no se
  manda un link (ya estaba pendiente en el substrate; sigue siendo el bloqueante #1).
- [ ] El agente/mic se descubre y usa solo. Test: 3 de 5 personas nuevas le piden algo al
  agente sin ayuda en <30s.
- [ ] El modelo TV+teléfono se entiende sin que vos expliques. Test: la primera acción correcta
  (y la mirada hacia la TV) ocurre sin intervención en ≥3 de 5 personas nuevas, en sesión 1 Y sesión 2.

---

## 4. Cómo evitar que el beachhead colapse en el sesgo F&F

El riesgo central de un beachhead basado en tu red: que sea "Grupo A con otro nombre". Reglas:

1. **Solo cuenta como señal de demanda la gente arm's-length** — miembros de la comunidad que
   NO saben que el producto es de Agus (o que lo saben pero no tienen relación personal). Los
   conocidos/amigos directos se etiquetan aparte y se excluyen de los números de activación,
   retención y Sean Ellis. Sirven para detectar bugs, no para decidir el gate.
2. **El referral tiene que propagarse sin Agus.** La pregunta de canal no es "¿cuántos sumé yo?"
   sino "¿cuántos llegaron porque otro miembro de la comunidad lo recomendó, sin que yo intervenga?".
3. **Etiquetar el origen de cada usuario** en PostHog: `seed_directo_agus` / `comunidad_armslength`
   / `referido_por_miembro`. Sin esta segmentación, el dato es ilegible.

---

## 5. Métricas

Se mantienen las 5 de Gate 1/2 (de `ff-test-plan.md` y `gtm-model.md`) **medidas solo sobre
arm's-length**:

| Métrica | Target | Qué prueba |
|---|---|---|
| Activación (onboarding completo) | >60% | Dolor agudo + onboarding (post-fix §3) |
| Retención D7 sin recordatorio | >35% | Hábito real (H2) |
| Sean Ellis ("muy decepcionado si desaparece") | >40% | PMF temprano |
| Mención espontánea del valor | ≥5 casos | Pull genuino |
| Mención espontánea TV+teléfono | ≥5 casos | El wedge comunica (H3) |

**Métricas nuevas, propias del lanzamiento de nicho:**

| Métrica | Target inicial | Qué prueba |
|---|---|---|
| **Test "tolerable→intolerable"** — % que, teniendo la recomendación nativa a mano, igual elige abrir la app | >50% de arm's-length activos | El supuesto del §2: el dolor supera a lo nativo |
| **Coef. de referral interno** — nuevos usuarios traídos por un miembro ÷ miembros activos | ≥0,3 en una comunidad | Si el boca a boca interno es un motor o no |
| **Profundidad de penetración** — % de la comunidad puntual que activó | medir, sin target aún | Si se puede "dominar" un nicho chico |

---

## 6. Secuencia (fases)

**Fase 0 — Arreglar y armar (prerrequisito §3).** Onboarding + mic + PostHog. No se avanza
sin los tres checks verdes.

> **El segundo F&F mide DOS cosas distintas — no confundirlas (decisión 2026-06-17):**
>
> - **Trabajo A — Demanda:** ¿gente calificada y no-cercana retiene y elige la app sobre lo
>   nativo? Para esto un **mix** (padres + amigos + colegas) es aceptable y pragmático para
>   llegar a n rápido, SIEMPRE que: (a) screening duro de ≥2 subs pagas, (b) cada recluta
>   etiquetado por relación (cercano/lejano) y origen, (c) la señal de demanda cuente **solo
>   sobre los lejanos**, (d) se pondere conducta (D7, tolerable→intolerable) sobre palabras.
> - **Trabajo B — Canal:** ¿el boca a boca INTERNO de una comunidad trae usuarios sin Agus?
>   Para esto el mix **no sirve** (tres redes separadas no tienen "interno" donde propagar).
>   Requiere designar UNA comunidad real (el grupo de padres del colegio) como test de canal.
>
> Hacer solo el Trabajo A = terminar sabiendo que la app gusta y nada sobre distribución
> (= cementerio second-screen, market-model §2). Los dos trabajos corren en paralelo.

**Fase 1 — Seedear demanda (Trabajo A) + designar la comunidad de canal (Trabajo B).**
Reclutar 15–35 desde el mix con el screening y etiquetado de arriba; medir las 5 clásicas +
tolerable→intolerable sobre los lejanos. En paralelo, designar **una sola** comunidad real
(grupo de colegio) para el test de canal. Duración: 2–3 semanas.

**Fase 2 — Encender el boca a boca interno (la prueba de canal real).**
Dentro de la comunidad designada, dar a los activos una forma simple de invitar a otro miembro
**de la misma comunidad**. Medir el coef. de referral interno **sin que Agus sume gente**. Acá
se decide si "comunidad" es un canal repetible o solo una lista de contactos.

**Fase 3 — Replicar a una segunda comunidad del mismo tipo.**
Si la Fase 2 funciona, repetir el mismo libreto en otro colegio / otra empresa. Repetible =
metés el mismo libreto y sale ~el mismo resultado. Si solo funcionó en tu comunidad original,
era tu red, no un canal.

---

## 7. Criterios de pasaje (qué tiene que ser verdad para declarar el canal repetible)

Antes de gastar un peso en distribución paga o declarar "tenemos GTM":

1. Las 5 métricas clásicas en verde sobre **arm's-length** (no sobre amigos).
2. Test tolerable→intolerable >50%: la gente elige la app sobre lo nativo.
3. Coef. de referral interno ≥0,3 **sin** intervención de Agus (Fase 2).
4. El libreto funcionó en una **segunda** comunidad del mismo tipo (Fase 3).
5. Economía esbozada: aunque el referral sea ~$0, estimar el techo de penetración por comunidad
   y cuántas comunidades hacen falta para un n que importe (insumo del Gate 3 / market-model SOM).

Si 1–4 se cumplen pero la economía del §7.5 no escala (pocas comunidades alcanzables, saturación
rápida), el canal anda a n chico — honestidad: es tracción, no motor.

---

## 8. El Adversario (correr ANTES de declarar el canal repetible)

Caso más fuerte en contra, para no autoengañarse:

- **"Es F&F disfrazado."** Si la señal vino de gente que te conoce, no probaste nada. Mitigación:
  segmentación arm's-length del §4. Si no podés conseguir arm's-length real en tu comunidad, el
  beachhead no sirve para medir demanda.
- **"El boca a boca no propaga."** La gente usa la app pero no invita a nadie (coef. <0,3).
  Entonces no hay canal: tenés un producto que gusta y cero distribución — el escenario que mató
  a la categoría second-screen (ev-025, market-model §2).
- **"Lo nativo es suficiente."** El test tolerable→intolerable da <50%: les gusta la app pero
  igual abren el For You de Google TV. El dolor no superó al default (ev-068).
- **"No escala más allá de tu burbuja."** Funciona en TU colegio/empresa pero no replica (Fase 3
  falla). Era tu red social, no un canal de mercado.

Registrar el contra más fuerte firmado en `decisions.jsonl` antes de pasar el gate.

---

## 9. Próxima acción

1. Cerrar Fase 0: confirmar estado de PostHog (MUST #1) y agendar los fixes de onboarding/mic.
2. Elegir la UNA comunidad de arranque (recomendado: un grupo de colegio, por la convergencia
   pagador+dolor de la hipótesis "hogar con hijos").
3. Confirmar que podés conseguir 15–35 arm's-length reales en esa comunidad. Si no, el beachhead
   no es válido y volvemos a §1.
