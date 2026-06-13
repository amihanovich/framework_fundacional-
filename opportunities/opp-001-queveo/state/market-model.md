# Market Model — opp-001 · TV Discovery App (vista GLOBAL)

> Creado: 2026-06-10 · Rol: Competencia/Mercado + Estrategia/Validación
> Complementa state/gtm-model.md. Evidencia trazable en evidence.jsonl (ev-019 a ev-030).

## 1. Tamaño de mercado — global, no solo LATAM

| Capa | Número | Fuente (evidencia) |
|---|---|---|
| Suscripciones SVOD globales 2026 | ~1.64 billion (miles de millones) | ev-028 |
| Suscriptores únicos globales 2026 | ~718M (+35% vs 2020) | ev-028 |
| Promedio servicios por hogar streaming (US) | 3.4 — 57% paga 3+ simultáneos | ev-028 |
| Viewers que batallan para encontrar qué ver pese a promediar 4 servicios | 75% | ev-028 |
| LATAM (beachhead) | ~131M suscriptores VOD, USD 65B revenue, +10.7% YoY | ev-023 |

**Lectura honesta del TAM:** el segmento target (3+ plataformas, viewer frecuente) no es nicho:
es la *norma* del hogar streaming en mercados maduros. El dolor está documentado con números
duros a escala global (ev-019, ev-020, ev-028). El problema de esta oportunidad nunca fue el
tamaño del mercado — es quién más ya está parado encima de él.

## 2. Estructura competitiva global (cinco capas, de arriba hacia abajo)

**Capa OS / fabricante (adyacentes por default — la más peligrosa):**
- Amazon Fire TV: rediseño 2026 convierte el home screen en "discovery hub" cross-servicio con Alexa+ (ev-026).
- Google TV: tab "For You" agrega recomendaciones cross-servicio, universal search, Gemini (ev-026).
- Samsung Vision AI Companion 2026: TV conversacional con Copilot y Perplexity nativos (ev-027).
- LG webOS: Copilot embebido + AI Search con LLM (ev-027).
- Implicación: el discovery agregado **ya es el default del home screen** antes de que el usuario
  abra cualquier app de terceros, y la IA conversacional nativa ataca el input problem (base de H3)
  sin requerir teléfono.

**Capa distribución / billing (super-agregadores):**
- Deloitte: 60-70% de las suscripciones streaming en mercados maduros se comprarán vía
  distribución mayorista — Amazon Channels, Roku, telcos (Verizon +play, Comcast) (ev-029).
- Quien es dueño del billing agrega discovery como feature del bundle. Aprietan desde arriba.

**Capa app independiente (competidores directos):**
- JustWatch: 20M+ usuarios, 52 países, USD 68M revenue 2025, rentable, sin funding. Modelo: B2B
  data licensing a estudios — NO suscripción B2C, NO revenue share con plataformas (ev-021).
- Reelgood: ~5M usuarios US; monetiza licenciando datos a Roku, Microsoft, smart TVs y hedge funds (ev-005).
- Likewise (100% Bill Gates): 6-7M registrados, apps mobile+CTV+AI companion (Pix); su tracción
  celebrada es newsletters, no retención de producto (ev-030).

**Capa IA de propósito general (sustituto gratis):**
- ChatGPT/Claude/Gemini ya son el recomendador por default 2026 (ev-009, ev-015). En el TV, esa
  misma IA está entrando vía Copilot/Perplexity/Gemini nativos (ev-027) — el sustituto gratis
  se muda a la pantalla grande.

**Capa cementerio (comparables fallidos — la lección histórica):**
- Peel Smart Remote: 100M+ instalaciones, 120M usuarios registrados — teléfono-como-control a
  máxima escala. Murió 2018 sin modelo de negocio; degeneró en adware (ev-024).
- Second-screen discovery 2013-2014: Fan TV, Dijit/NextGuide, Miso, GetGlue, IntoNow, i.TV —
  toda la categoría consolidó o murió sin que ninguna monetizara (ev-025).
- Standalone recommendation apps: The Movie App ~500 usuarios, Taranify, TasteRay (ev-001/002/003).

## 3. Modelo de monetización PROBADO del espacio

El único modelo que demostradamente paga en discovery independiente es **B2B data licensing /
publicidad a estudios** (JustWatch $68M, Reelgood; ev-021, ev-005). Requiere escala primero.
- Freemium B2C premium: **sin precedente probado** en la categoría (ev-021 refuta H4-freemium).
- Revenue share / afiliado con plataformas: JustWatch con 20M usuarios nunca lo consiguió (ev-021).
- Implicación: el plan de revenue de opp-001 (freemium → premium + afiliado) apunta a dos
  modelos que el espacio nunca probó; el modelo probado exige una escala que es justamente
  lo más difícil de alcanzar compitiendo contra defaults del OS.

## 4. ¿El wedge es lo que el mercado premia?

El wedge declarado: TV-nativo + teléfono-como-control + discovery en el punto de consumo.
- A favor: la fricción del remoto es real y documentada (ev-022); la desconexión
  descubrimiento(teléfono)/consumo(TV) existe; nadie independiente ocupa bien ese punto exacto.
- En contra: el veterano de la categoría dice que la calidad de discovery NO es el wedge que
  gana — la distribución sí (ev-006). El teléfono-como-control ya escaló y murió (ev-024). Los
  fabricantes están resolviendo el input problem con voz+IA nativa (ev-027).
- Veredicto provisional: el wedge es **una ventana temporal de UX**, no un moat. Si funciona,
  la pregunta inmediata es qué impide que Google/Amazon/Samsung lo copien en un ciclo de OS.
  La única respuesta defendible conocida del espacio es la de JustWatch: neutralidad (el OS
  recomienda lo que le conviene comercialmente; un tercero puede ser agente neutral del usuario)
  + el dato de intención como activo B2B.

## 5. TAM / SAM / SOM por región (Norteamérica, Europa, Sudamérica)

> Agregado 2026-06-10. Unidad: **hogares con 3+ servicios SVOD** (el segmento con dolor agudo
> definido en hypothesis.md), no "viewers" genéricos. Cada número cita su evidencia; los
> supuestos sin fuente dura están marcados. Regla del rol: un número sin procedencia no entra.

### TAM — hogares con dolor agudo (3+ servicios)

| Región | Hogares streaming | % con 3+ servicios | TAM (hogares) | Evidencia |
|---|---|---|---|---|
| Norteamérica | ~105M (US, 91% de hogares con internet) + Canadá | 57% (US) | **~60M** | ev-031 |
| Europa (Occ.) | ~78M (235M suscripciones ÷ ~3.0/hogar) | 45% | **~35M** | ev-032 |
| Sudamérica | ~75M usuarios SVoD 2026 | 20–30% **(supuesto, sin fuente dura)** | **~15–22M** | ev-033 |
| **Total 3 regiones** | | | **~110–117M hogares** | |

### TAM en revenue — la lectura incómoda (ev-035)

El TAM de usuarios es enorme; el TAM de *revenue* no lo es:

| Modelo | ARPU | TAM revenue (3 regiones) | Estado del modelo |
|---|---|---|---|
| B2B data licensing | ~USD 3,4/usuario/año (JustWatch: $68M/20M) | **~USD 380M/año** | ÚNICO probado (ev-021) |
| Freemium → premium | 2% conversión × $30/año | **~USD 68M/año** | Sin precedente en la categoría |

Bajo cualquier modelo conocido, el TAM de revenue es de **cientos de millones, no billions**.
El upside grande no está en el revenue operativo: está en el valor estratégico del dato y la
posición (adquisición por plataforma/OS) o en un modelo nuevo no probado. Esto no mata la
oportunidad — pero define qué juego se está jugando.

### SAM — restricción de plataforma: Android TV / Google TV (ev-034)

Android TV/Google TV: 270M+ dispositivos activos, ~35–43% del share global de OS — pero la
distribución regional es asimétrica (supuesto direccional, sin fuente regional dura):

| Región | Share Android TV estimado | SAM (hogares) |
|---|---|---|
| Norteamérica | 10–15% (Roku/Fire/Samsung dominan) | ~6–9M |
| Europa (Occ.) | 25–35% | ~9–12M |
| Sudamérica | 50–60% (TCL/Sony/Philips/Xiaomi con Google TV) | ~8–12M |
| **Total SAM** | | **~25–32M hogares** |

Lectura: el MVP Android-TV-first tiene su SAM más denso en Sudamérica — el dato técnico
converge con la ventana competitiva (sección 6) en favor del beachhead sudamericano.

### SOM — captura realista a 24–36 meses

Benchmark de techo: JustWatch, líder de la categoría tras ~10 años, capturó ~2,8% de los
suscriptores globales (20M de ~718M; ev-021, ev-028). Un entrante sin distribución no supera
al líder en 3 años:

- Escenario conservador (0,3% del SAM): ~80–100k hogares
- Escenario base (0,5–1% del SAM): ~125–300k hogares
- Escenario agresivo (1,5–2% del SAM, requiere canal repetible probado): ~400–600k hogares

Revenue del SOM al ARPU probado: **USD 0,3–2M/año**. Conclusión honesta: el SOM a 3 años no
financia la compañía por revenue — lo que compra es el activo de datos de intención y la
posición estratégica. La economía del canal (CAC para adquirir un hogar de TV app vs LTV de
$3,4/año B2B) es el número que el Gate 3 va a auditar y hoy no cierra sin un canal orgánico
de costo ~cero.

## 6. Implicación geográfica: ¿target global o LATAM beachhead?

Target global de mercado ≠ go-to-market global simultáneo.
- El dolor y el TAM son globales (ev-028). El modelo B2B de datos vale más con cobertura global
  (el comprador — estudios — es global, como muestra JustWatch en 52 países; ev-021).
- Pero en mercados maduros (US/EU) la presión de incumbentes OS-level y super-agregadores es
  máxima HOY (ev-026/027/029). En LATAM el rollout de AI-TV nativa y super-bundling llega más
  tarde y la fragmentación recién se vuelve dolorosa (ev-023) — la ventana es más ancha.
- Estructura sugerida: **diseñar para global desde el día 1** (catálogo, datos, idiomas en el
  esquema) pero validar F&F y soft launch en LATAM, donde la ventana competitiva es más ancha
  y el costo de testeo más bajo. La decisión es del founder.
