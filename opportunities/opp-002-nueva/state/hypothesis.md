# Hipótesis — opp-002 · Navegación/gestión conversacional de contenido (nombre tentativo)

> status: **draft / hold-por-desambiguar** — extraída de la primera conversación con el
> founder (2026-06-06). Es su entendimiento ACTUAL, a corregir; no es verdad asentada.
> Problema central sin resolver: opp-002 hoy es **tres dolores empaquetados** y hay que
> elegir cuál ES la oportunidad antes de validar.

## El problema de raíz: tres dolores bundled
La idea entró como "manejar el TV con un agente porque el control remoto es limitado", pero
al afilar, el founder reubicó el scope: **el agente controla la app de recomendación, no el
TV físico**. Con eso, lo que queda son tres dolores distintos mezclados:

1. **Discovery** — "encontrar lo que buscás más fácil". → Esto **es el dolor de opp-001**
   (parkeado). Si opp-002 es esto, no es nueva: es opp-001 reentrando.
2. **Navegación con el control remoto del smart TV** — "navegar con el control es un dolor
   de cabeza". → Pero el founder ya sacó el control del TV físico del scope, así que este
   dolor queda sin solución dentro de la idea actual (es UX de la plataforma, no controlable
   desde afuera).
3. **Fragmentación cross-plataforma** — "todo disperso en cuatro plataformas" + "no puedo
   gestionar esa búsqueda fácil a través de ellas". → **El único hilo genuinamente nuevo**,
   distinto de discovery. Job = agregación + gestión conversacional a través de plataformas.

## Convergencia (2026-06-06): el founder lee el dolor como capas apiladas
El founder rechaza elegir uno solo: dice que es combinado (fragmentación + mala navegación +
discovery subyacente). Eso es una observación honesta sobre el **dolor**, PERO "atacar todas
las capas" es la trampa de scope (= producto vago). Regla del studio: buscar el **un job que,
si se resuelve, colapsa la mayor parte de la pila** = el wedge.

**Wedge candidato (más filoso que discovery):** expresar **intención dirigida** sobre
superficies fragmentadas sin barrer menú por menú ("de todo esto, andá a buscar X en cada una,
y cross-plataforma"). NO es recomendación por gusto (eso es opp-001, cementerio); es búsqueda/
navegación dirigida agregada. Discovery por gusto queda como capa **secundaria y parkeada**.
Ver ev-006.

**Dientes (sin resolver):** este wedge ya está parcialmente ocupado — JustWatch/Reelgood YA
hacen búsqueda cross-plataforma de "dónde verlo". El único sliver nuevo sería la capa
**conversacional/agéntica** de intención dirigida, y no sabemos si es painkiller o vitamina.
Y el "actuá por mí en cada plataforma" choca con el bloqueo de deep-linking/OS de las dueñas.

## Problema (forma testeable) — PENDIENTE de elegir cuál
- **Quién** exactamente lo tiene: sin segmento real. El founder dice "gente como yo" =
  su propio dolor sesgado (viewer intenso/asiduo). "Le pasa a todos" no es segmento. (ev-003)
- **Cuán seguido**: 2–3 veces por semana en viewer asiduo (autoreporte founder). (ev-002)
- **Cuán severo**: **contradicción** — "hasta pagaría" vs "qué hago hoy: me acostumbré, vivo
  con eso". El comportamiento revelado marca dolor **tolerable**. (ev-002)
- **Qué hacen hoy**: se acostumbran y conviven con la mala experiencia. (ev-002)

## Solución — núcleo vs derivas
- **Núcleo (propuesto):** agente en el móvil que gestiona contenido/búsqueda dentro de la app
  por lenguaje natural, sin tipear; el teléfono como control conversacional.
- **Derivas / scope creep a vigilar:**
  - Control del **TV físico / reproducción** (play, buscar, cambiar de app en la tele real):
    requiere integración a nivel OS que el dueño de la plataforma bloquea. Sacado del scope
    por el founder; si vuelve, es otra oportunidad con su propio Gate 1.
  - Recaer en **discovery** (= opp-001 parkeado) y llamarlo nuevo.

## Supuestos de los que más depende
1. Existe un dolor de **gestión/navegación** separable del de **discovery** (si no, es opp-001).
2. La **fragmentación cross-plataforma** es un dolor agudo y pagable para un segmento real,
   no un fastidio al que la gente ya se acostumbró.
3. Hay un wedge defendible frente a los agregadores existentes (JustWatch/Reelgood) y al
   bloqueo de deep-linking de las plataformas dueñas del cliente.

## Gate
G1 · Problem-Solution Fit — **park (provisional, dec-001)**, esperando el call del founder.
La caza de refutación (competitive-map.md, market-model.md, ev-007..ev-012) volteó el wedge:
el diferenciador conversacional/dirigido/cross-plataforma ya es feature nativo y gratis de los
cuatro dueños del OS, el único modelo que paga es B2B (no B2C, probado 2 veces), y la capa de
acción cross-plataforma está bloqueada estructuralmente. El Adversario dejó el caso para matar
(dominante) y el de matar-prematuro (más débil, sostiene park-con-carry-forward) en dec-001.

**El founder es dueño del call.** Opciones: park-con-carry-forward · pivot a un job más angosto
y validable · kill · hold para una sola ronda de customer discovery antes de decidir.

**Carry-forward candidato (si park):** el momento más filoso del founder ("me canso de barrer
menús, no tengo cómo decir 'de todo esto andá a buscar X'") podría sembrar una oportunidad
distinta — un job más angosto que NO dependa del playback cross-plataforma bloqueado ni compita
de frente con las features nativas. Cada uno sería su propio Gate 1 desde cero. No enamorarse.
