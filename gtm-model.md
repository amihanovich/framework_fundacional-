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

## El Caso Campeón — Por qué esto podría ser enorme

*Este es el argumento más fuerte A FAVOR, construido desde evidencia.*

**La señal real está en la acumulación de tres dolores simultáneos que hoy ningún producto resuelve juntos:**

1. **Discovery cross-plataforma**: JustWatch resuelve esto, pero en el teléfono. El usuario sigue teniendo que cambiar de dispositivo para ver.
2. **Fricción del control remoto**: ningún producto de discovery lo ataca directamente. Todos asumen que el remote es fijo. El teléfono como control es una solución al input problem, no solo al recommendation problem.
3. **Experiencia en pantalla grande**: el contenido de streaming se consume principalmente en TV, pero todos los productos de discovery son mobile-first. Hay una brecha real entre donde sucede el descubrimiento (teléfono) y donde ocurre el consumo (TV).

**El producto ataca los tres simultáneamente.** Eso no existe hoy.

**El mercado ya demostró que paga por esto:** JustWatch llegó a $68M de revenue sin una sola ronda de funding, solo con el valor de los datos de intención. Si este producto logra ser el punto de entrada antes que JustWatch (porque está en el TV, donde finalmente se consume el contenido), captura un dato más rico: no solo "qué buscó el usuario" sino "qué realmente eligió ver y en qué plataforma."

**El timing es favorable:** el crecimiento de LATAM (10.7% YoY, ~131M suscriptores en 2026) está en el momento donde la fragmentación de plataformas recién empieza a ser dolorosa para el usuario promedio. Es el momento exacto para plantar la bandera de agregador de discovery antes de que un player global (Google, Amazon) lo resuelva nativamente.

**El escenario enorme:** si el producto se convierte en la primera interacción de la sesión de streaming en LATAM — antes que Netflix, antes que Disney — tiene una posición que vale para una adquisición estratégica. Netflix compró Millarworld para tener IP. Disney compró Fox para tener catálogo. El próximo movimiento natural de una plataforma presionada por el churn es comprar el lugar donde los usuarios deciden qué ver.

---

## El Caso Adversario — Por qué podríamos estar equivocados

*Este es el argumento más fuerte EN CONTRA, construido desde evidencia.*

**El problema principal: JustWatch ya existe y tiene 20M usuarios.**

JustWatch hace discovery cross-plataforma + redirect. Es gratis, está en todas las plataformas, tiene 20M usuarios activos en 52 países y $68M de revenue. Si el dolor de discovery es tan agudo como se asume, ¿por qué solo 20M personas adoptaron JustWatch en el mundo? ¿Y por qué alguien instalaría esta app en lugar de (o además de) JustWatch?

La respuesta honesta tiene que ser que el wedge TV-nativo + control por teléfono es suficientemente mejor. Eso no está probado todavía. Es exactamente lo que F&F tiene que testear.

**Android TV ya tiene búsqueda universal nativa.**

En Android TV, Google Assistant permite buscar contenido cross-plataforma por voz, sin instalar nada adicional. Para el segmento que tiene Android TV (que es el mercado inicial propuesto), el dolor de discovery tiene una solución que ya está instalada en el control remoto. El argumento tiene que ser que la recomendación proactiva (sin que el usuario sepa qué quiere) es mejor que la búsqueda reactiva (busca algo que ya tenía en mente). Eso es más difícil de probar.

**El teléfono como control podría ser fricción, no solución.**

El argumento es que el teléfono reduce la fricción del remoto. Pero el usuario ya tiene el remoto en la mano. Agregar el teléfono significa: desbloquear el teléfono, abrir la app, usarla como control. Si la UX no es instantáneamente mejor, el usuario percibe más fricción, no menos. Esto hay que probar en F&F observando si la gente agarra naturalmente el teléfono o si lo deja y vuelve al remoto.

**El modelo freemium en TV apps tiene conversión históricamente baja.**

Apps en smart TV tienen tasas de conversión freemium → premium del orden de 1–3% en categorías de productivity/utility (no hay datos específicos de esta categoría, pero es el benchmark de referencia). Si el LTV de un usuario premium no cubre el CAC de adquisición en el canal que escale, el modelo no cierra. Esto hay que modelar antes del soft launch.

**El modelo de afiliado con plataformas no está probado.**

JustWatch, con 20M usuarios, no tiene un modelo de revenue share con Netflix ni Disney. Su negocio es publicidad B2B a estudios. Eso sugiere que las plataformas de streaming no pagan por el tráfico referido — o al menos no lo han hecho hasta ahora. El supuesto de monetización a futuro podría estar apuntando a un modelo que no existe.

---

## Plan Friends & Family

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
