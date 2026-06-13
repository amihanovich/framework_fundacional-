# GTM Model — App de descubrimiento de contenido streaming

**Producto:** App TV (Android TV / Samsung / Apple TV) + control por teléfono. Busca, recomienda y redirige a la plataforma correspondiente. No reproduce contenido.
**Modelo:** Freemium → suscripción premium + eventual modelo afiliado/referral con plataformas de streaming.
**Estado:** MVP en desarrollo final. Sin usuarios actuales.
**Fecha:** 2026-06-10

---

## Evidencia de mercado ya documentada

Antes del F&F, esto ya está sustentado externamente — no es solo intuición de los fundadores:

**El dolor existe y tiene datos:**
- Los viewers gastan en promedio **14 minutos por sesión** buscando qué ver (Gracenote, citado en TV Technology).
- **49% considera cancelar una suscripción** si encontrar contenido es demasiado difícil (PwC Consumer Streaming Survey).
- **39% efectivamente canceló** en los últimos 6 meses porque no encontró contenido que valiera la pena (DesignRush/Ziad Foty study).
- **66% de los viewers quiere una guía única** que agregue contenido de todos sus servicios (Gracenote).
- **19% abandona la sesión completamente** si no encuentra algo rápido; sube a 29% entre 18–24 años.
- **27% dice que las recomendaciones de las plataformas no les son útiles** para descubrir contenido nuevo.

**La fricción del control remoto es real y documentada:**
- El text entry por control remoto es uno de los puntos de dolor más citados en investigación de UX de TV (Wiztivi, 2026; UX Magazine).
- Los fabricantes (incluyendo TiVo) ya experimentan con soluciones de teclado integrado — confirma que el problema existe.

**El mercado LATAM es grande y está creciendo:**
- ~131M suscriptores VOD en LATAM proyectados para 2026.
- Ingresos de media en LATAM: USD 65 billion en 2026, creciendo 10.7% YoY (casi el doble de la tasa de EE.UU.).
- Brasil: 41.5% del mercado regional. Argentina, Brasil, Colombia, México y Puerto Rico = 83% del total.

**El competidor principal valida el modelo de negocio:**
- JustWatch: 20M+ usuarios, USD 68M de revenue anual (2025), rentable desde el primer año, sin funding externo. Su modelo no es la suscripción premium del usuario — es B2B: vende datos de intención de búsqueda a estudios y distribuidoras para targeting de campañas. Eso prueba que el dato de "qué quiere ver la gente" vale plata.

**El mercado es global, no solo LATAM (ev-028, ev-023):**
- ~1.64 billion de suscripciones SVOD globales proyectadas para 2026 (~718M suscriptores únicos, +35% vs 2020).
- EE.UU.: 3.4 servicios promedio por hogar streaming; 57% paga 3+ simultáneos — el segmento target es la *norma* del hogar streaming en mercados maduros, no un nicho.
- 75% de los viewers batalla para encontrar qué ver pese a promediar 4 servicios (AlixPartners).
- LATAM (~131M suscriptores) es el beachhead de validación, no el techo del mercado. Vista completa en state/market-model.md.

---

## Las cuatro hipótesis falsificables

Enumeradas en orden de riesgo. Las primeras dos se prueban en F&F; las últimas dos, en soft launch y más adelante.

**H1 — El dolor es suficientemente agudo para generar acción:**
Las personas con 3+ plataformas de streaming experimentan suficiente fricción en el descubrimiento de contenido como para instalar una app extra en su televisor y aprender a usarla. No es que "estaría bueno tener esto" — el dolor es lo suficientemente real como para que cambien su comportamiento.

*Cómo se refuta:* menos del 60% del cohorte menos sesgado (Grupo B) completa el onboarding. Si la activación es baja, el dolor no es suficientemente agudo — o el costo de adopción supera el beneficio percibido.

**H2 — El producto entrega el "momento mágico" y genera hábito:**
Una vez que el usuario activa, vuelve por su propia cuenta. La experiencia de encontrar buen contenido fácilmente es suficientemente superior a la alternativa como para que la app se convierta en el primer paso antes de abrir Netflix o Disney.

*Cómo se refuta:* retención D7 menor a 35% sin recordatorio en Grupo B. Si vuelven solo cuando se los empuja, no hay hábito.

**H3 — El wedge TV-nativo + control por teléfono es diferenciador real, no fricción adicional:**
La experiencia de buscar y descubrir contenido *en el televisor, controlado desde el teléfono* es percibida como mejor que buscar en el teléfono (JustWatch) o usar la búsqueda nativa del TV. El canal de valor es la pantalla grande, no otra pantalla más del teléfono.

*Cómo se refuta:* en las entrevistas post-F&F, los usuarios no mencionan espontáneamente la experiencia TV+teléfono como parte del valor. Si el valor que citan es solo "las recomendaciones son buenas", el wedge de UX no está funcionando.

**H4 — A escala, el dato de intención es negociable con las plataformas:**
Con una base de usuarios suficientemente grande, el producto se convierte en el primer punto de contacto antes de que el usuario abra cualquier plataforma. Eso tiene valor para Netflix, Disney, Paramount — ya sea en forma afiliada, de datos o de adquisición.

*Cómo se refuta:* JustWatch ya tiene 20M usuarios y $68M de revenue sin haber hecho ningún acuerdo de revenue share con las plataformas (su modelo es publicidad B2B a estudios, no afiliado de plataformas). Esto sugiere que el modelo de monetización podría ser diferente al que se asume hoy.

---

## El Caso Adversario v2 (global) — Por qué podríamos estar equivocados

*El argumento más fuerte EN CONTRA, reforzado con evidencia global 2026-06-10. Simétrico en rigor al Campeón v2.*

**1. El concepto exacto ya escaló y murió: Peel tuvo 100M+ instalaciones (ev-024).**

Peel Smart Remote — teléfono como control de TV — llegó a 120M usuarios registrados, una escala que opp-001 jamás alcanzaría orgánicamente, y cerró en 2018 sin haber encontrado modelo de negocio (degeneró en adware antes de morir). Y no fue un caso aislado: toda la categoría second-screen discovery (Fan TV, Dijit/NextGuide, Miso, GetGlue, IntoNow, i.TV) consolidó o murió en 2013-2014 sin que ninguna monetizara (ev-025). La objeción que esto impone: el form factor no falló por falta de distribución — falló con distribución masiva. La respuesta del Campeón (contexto pre-fragmentación) es plausible pero no probada.

**2. Los dueños del OS están atacando discovery como prioridad 2026, con IA (ev-026, ev-027).**

No es un riesgo futuro — está pasando ahora: Amazon rediseñó Fire TV como "discovery hub" cross-servicio; Google TV agrega con Gemini en el tab "For You"; Samsung lanzó Vision AI Companion con Copilot y Perplexity nativos; LG embebió Copilot + AI Search conversacional en webOS. Dos consecuencias duras: (a) el home screen ya hace discovery agregado *por default*, antes de que el usuario pueda abrir una app de terceros; (b) la IA conversacional por voz nativa ataca el mismo input problem que fundamenta H3 — sin teléfono, sin instalación. El wedge de UX tiene fecha de vencimiento visible: un ciclo de OS.

**3. La super-agregación aprieta desde la capa de billing (ev-029).**

Deloitte proyecta que 60-70% de las suscripciones streaming en mercados maduros se comprarán vía distribución mayorista (Amazon Channels, Roku, telcos). Los dueños de la relación de billing agregan discovery como feature del bundle. Un agregador independiente sin relación de billing queda apretado entre el OS (abajo) y el bundle (arriba).

**4. La categoría es difícil incluso con capital ilimitado: Likewise (ev-030).**

Likewise — backed 100% por Bill Gates, 6-7M usuarios, apps mobile+CTV+AI companion — no logró breakthrough como producto: su tracción celebrada es newsletters, no retención. JustWatch con 20M usuarios en 52 países sigue siendo la excepción, y su propio fundador concluyó que la calidad de recomendación NO es el wedge que gana — la distribución sí (ev-006).

**5. El modelo de revenue del plan no tiene precedente probado (ev-021, ev-005).**

El único modelo que demostradamente paga en discovery independiente es B2B data licensing (JustWatch $68M, Reelgood). El freemium B2C premium no tiene precedente en la categoría, y el afiliado con plataformas no existe: JustWatch con 20M usuarios nunca lo consiguió. El plan apunta a dos modelos no probados, y el probado exige una escala que es justamente lo más difícil de alcanzar compitiendo contra defaults del OS.

**Síntesis adversarial:** la app pide al usuario instalar algo que su TV ya hace por default, con un form factor que ya murió a escala, en una categoría donde ni el capital ilimitado garantiza tracción, para monetizar con modelos sin precedente. Si F&F muestra activación o retención débil, la explicación más simple no será "onboarding mejorable" — será esta.

---

## El Caso Campeón v2 (global) — Por qué esto podría ser enorme

*El argumento más fuerte A FAVOR, reforzado con evidencia global 2026-06-10. Steelman, no hype: cada punto responde al Adversario sin negarlo.*

**1. El dolor es global, masivo y medido en plata — no es intuición (ev-028, ev-019, ev-020).**

1.64 billion de suscripciones SVOD globales en 2026; el hogar con 3+ servicios es la norma en mercados maduros (3.4 promedio en US, 57% con 3+); 75% batalla para encontrar qué ver pese a promediar 4 servicios; 39% canceló una suscripción en 6 meses por no encontrar contenido. El dolor del segmento target no es nicho ni LATAM-only: es la condición estándar del streaming global, y tiene impacto medido en churn — lo que significa que alguien (las plataformas) pierde plata por este problema todos los meses.

**2. El cementerio tiene una explicación de timing que es testeable, no excusa (ev-024, ev-025 vs ev-028).**

Peel y la ola second-screen murieron en 2013-2018, cuando el hogar promedio tenía 1-2 servicios y el dolor de discovery cross-plataforma no existía: eran controles remotos glorificados sin job-to-be-done. El job apareció DESPUÉS, con la fragmentación (3-4+ servicios, 2022 en adelante). Es la diferencia entre "el form factor falló" y "el form factor llegó antes que el problema". Esta es una hipótesis falsable — y F&F la testea directamente con H3.

**3. La respuesta al OS-incumbente existe y es estructural: neutralidad (ev-026, ev-027, ev-006).**

Google TV recomienda lo que le conviene a Google; Fire TV, lo que le conviene a Amazon (sus channels, su ad inventory, sus contenidos). El agente del OS es estructuralmente un agente conflictuado — no puede ser neutral porque su modelo de negocio es el placement pago. JustWatch demostró que el tercero neutral tiene un lugar defendible y rentable ($68M, 52 países, sin funding; ev-021) incluso con universal search nativo existiendo hace años. El wedge defendible no es la UX (copiable) — es ser el agente del usuario, no del vendedor, con el dato de intención como activo.

**4. El dato capturado en el punto de consumo es más rico que el de JustWatch — y el comprador B2B ya existe (ev-021, ev-005).**

JustWatch vende "qué buscó la gente" capturado en el teléfono. Una app en el TV captura "qué eligió ver, en qué plataforma, y qué descartó" en el momento real de decisión. El mercado comprador de ese dato está probado: estudios y distribuidoras pagan $68M/año a JustWatch, y Reelgood licencia a Roku, Microsoft y hedge funds. No hay que inventar el modelo de negocio — hay que capturar un dato mejor para un comprador que ya paga.

**5. La ventana geográfica es real: LATAM como beachhead, global como destino (ev-023, ev-028, ev-029).**

La presión de incumbentes OS-level y super-bundling es máxima HOY en US/EU, pero llega más tarde a LATAM (~131M suscriptores, +10.7% YoY), donde la fragmentación recién se vuelve dolorosa. Validar en la ventana ancha (LATAM) y diseñar para el mercado global desde el día 1 (el comprador B2B del dato es global, como prueba JustWatch en 52 países) es una secuencia coherente, no un consuelo.

**El escenario enorme:** si el producto se vuelve la primera interacción de la sesión de streaming — el lugar donde se decide qué ver, con el dato de decisión como activo — la posición vale por tres caminos independientes: B2B data licensing probado (JustWatch path), adquisición estratégica por una plataforma presionada por churn, o adquisición por un fabricante/OS que prefiere comprar la neutralidad antes que construirla.

**Honestidad final del Campeón:** lo que derrumbaría este caso ya está parcialmente en el ledger — si la IA nativa del TV (ev-027) resuelve el input problem antes de que el producto alcance escala, el punto 3 queda como única defensa, y la neutralidad sin usuarios no vale nada. Por eso el caso Campeón no pide saltear F&F: pide correrlo rápido, porque la ventana es real en ambas direcciones.

---

## Plan Friends & Family

> **2026-06-11:** esta sección fue desarrollada y superseded por `state/ff-test-plan.md` (v1),
> que adapta el plan al form factor web (URL en browser de TV + QR + teléfono como control)
> e incorpora la restricción ev-036 (Google TV sin browser). Los 5 criterios de cierre no cambian.

### Objetivo de la fase
Refutar H1 y H2 con el menor costo posible antes de gastar en distribución.

### Estructura del cohorte (25–50 personas)

**Grupo A — Familia (10–15 personas)**
Alta tolerancia, sesgo alto. Usar exclusivamente para: detectar bugs, confusiones de UX, pasos del onboarding que nadie entiende.
No usar para: validar dolor, medir activación real, ni interpretar retención.

**Grupo B — Conocidos heavy streamers (15–35 personas)**
Perfil: 3+ plataformas activas, ven contenido 3–4 veces por semana, no son desarrolladores ni early adopters por naturaleza. Idealmente no saben que sos el fundador hasta después de usar el producto.
Dónde encontrarlos: entorno laboral, amigos de amigos.
Son el único cohorte que da señal de demanda real.

### Plataforma

**Arrancar solo con Android TV.** Samsung Tizen y Apple TV requieren aprobación de App Store — semanas de fricción antes de tener el producto en manos de las primeras personas. Una plataforma, un set de bugs, un flujo de onboarding.

### Métricas

| Métrica | Definición | Target mínimo | Qué prueba |
|---|---|---|---|
| Activación | % Grupo B que completa onboarding (descarga + conecta teléfono + primera sesión real) | >60% | H1 + fricción de onboarding |
| Retención D7 | % Grupo B que usa la app al menos una vez en 7 días **sin recordatorio** | >35% | H2 — hábito real |
| Uso espontáneo | Alguien del Grupo B menciona la app sin ser preguntado | ≥3 casos | Señal fuerte de valor |
| Sean Ellis proxy | % Grupo B "muy decepcionado" si la app desapareciera | >40% | PMF temprano |
| Wedge UX | En entrevistas, mencionan espontáneamente TV+teléfono como parte del valor | ≥5 casos del Grupo B | H3 — diferenciador real |

### Protocolo de entrevistas

**Antes de instalar (5 min):**
"¿Cómo decidís normalmente qué ver esta noche?" y "¿Cuál es la parte que más te molesta del proceso?" No mencionar la app. Grabar o tomar notas textuales, sin parafrasear.

**Durante la instalación:**
Observar en silencio. No ayudar ni explicar. Cada vez que preguntan "¿qué hago acá?" es un bug de UX. Anotar el paso exacto donde ocurre.

**Check-in día 3 (1 mensaje):**
"¿La usaste desde que la instalamos?" — sí/no. Si no: "¿Por qué no?"

**Entrevista día 10–14 (15 min):**
- ¿La usaste espontáneamente o solo cuando te contacté?
- ¿Qué parte del flujo usás más?
- ¿Qué parte te resulta rara o lenta?
- ¿Seguís usando el remoto tradicional para algo, o usás el teléfono para todo?
- ¿Se la recomendarías a alguien? ¿A quién exactamente?
- Pregunta Sean Ellis: "¿Qué tan decepcionado estarías si esta app desapareciera mañana?"

### Criterios de pasaje a soft launch

Los cinco tienen que cumplirse. Si alguno falla, entender por qué antes de escalar.

1. Activación >60% en Grupo B
2. Retención D7 >35% en Grupo B (sin recordatorio)
3. ≥5 personas del Grupo B mencionan el pain o el valor sin que vos lo sugieras
4. Sean Ellis >40% "muy decepcionado" en Grupo B
5. ≥5 personas del Grupo B mencionan espontáneamente el TV+teléfono como parte del valor (prueba H3)

**Diagnóstico por patrón de fallo:**

- Activación baja + retención alta de los que activaron → problema de onboarding, no de producto. Reducir fricción de setup.
- Activación alta + retención baja → el hábito no se forma. Revisar si el "momento mágico" llega o si se pierde en el flujo.
- Todo bien pero nadie menciona el TV+teléfono → el wedge de UX no está comunicando. El valor percibido es solo "buenas recomendaciones" — eso es JustWatch con mejor algoritmo, no un producto diferente.

---

## Fase 2 — Soft Launch (post-F&F)

Se activa solo si F&F pasa los cinco criterios. Canales candidatos a mapear con economía real:

- App stores (Android TV primary, luego Samsung y Apple TV)
- Comunidades de Reddit y foros especializados (r/cordcutters, r/argentina, comunidades de streaming en español)
- Content seeding en YouTube/TikTok sobre "cómo organizar tus plataformas de streaming"
- Referral orgánico desde usuarios de F&F

La economía de cada canal (CAC/LTV/payback) se define en esta fase con datos reales.

---

## Fase 3 — GTM Full (post-soft launch)

El modelo de plataforma requiere base de usuarios antes de ser negociable con las plataformas. La secuencia es invariante: hábito de usuario → base de usuarios → poder de negociación. Ningún atajo.

Nota sobre el modelo de monetización B2B: el caso de JustWatch sugiere que el camino más rápido a revenue no es la suscripción premium del usuario sino vender los datos de intención a estudios y distribuidoras. Vale la pena tenerlo como hipótesis alternativa a testear en paralelo con el freemium.

---

## Próxima acción
Definir quiénes son las 15–35 personas del Grupo B y el cronograma de onboarding.
