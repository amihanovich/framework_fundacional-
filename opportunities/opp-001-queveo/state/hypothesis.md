# Hipótesis — opp-001 · TV Discovery App (pivot desde Cinéfilo / QueVeo)

> status: **v3 / hold** — pivot de form factor registrado en dec-005 (2026-06-10).
> Supersede v2 (skill/integración en IA). Gate 1 en hold: se cierra si el F&F pasa los cinco criterios definidos en state/gtm-model.md.

## Problema (forma testeable)
Viewers con múltiples suscripciones de streaming pierden tiempo real casi cada sesión buscando
qué ver, terminan **conformándose con lo menos peor** en lugar de un match real, y la
**experiencia de navegación en el televisor** (control remoto, interfaces de cada plataforma)
agrava el problema en lugar de resolverlo.

El dolor tiene tres componentes que hoy ningún producto resuelve simultáneamente:
1. **Discovery cross-plataforma**: no sé qué hay disponible en todas mis plataformas juntas.
2. **Fricción del control remoto**: el input method del TV es torpe para navegar y buscar.
3. **Desconexión entre descubrimiento y consumo**: los productos de discovery son mobile-first (JustWatch, el propio ChatGPT), pero el contenido se consume en la TV. El usuario descubre en un dispositivo y consume en otro.

- **Severidad**: "se conforman" en vez de "no miran" = dolor real pero históricamente tolerable.
  La hipótesis es que la fricción del remoto es el escalón que convierte "tolerable" en "frustrante
  suficiente para cambiar de comportamiento". A probar en F&F.
- **Especificidad**: el segmento con dolor más agudo es el viewer con 3+ plataformas activas
  que ve contenido 3–4 veces por semana. "Le pasa a todo el mundo" no es segmento.

## Caveat del founder (registrado, no descartado)
El founder es viewer intenso — su dolor puede estar amplificado. Sus datos cuentan como un
punto sesgado, no como el mercado. El F&F con personas del Grupo B (no familia) es la primera
validación no sesgada.

## Solución — form factor actual
**TV app + teléfono como control.**
- La app vive en el televisor, no en el teléfono. El consumo y el descubrimiento pasan en el
  mismo dispositivo.
- El teléfono reemplaza el control remoto como input method: navegación fluida, recomendaciones
  accionables, redirect directo a la plataforma correspondiente.
- No reproduce contenido: busca, recomienda y redirige.

**Por qué este form factor sobre los anteriores:**
- Standalone en teléfono (QueVeo v1): descartado. La IA de propósito general ya reemplaza ese rol en 2026 (ev-009). El usuario no cambia de app para algo que su ChatGPT ya hace.
- Skill/GPT dentro de IA (Cinéfilo v2): descartado. El GPT especializado destruye el contexto del usuario (ev-017) y el GPT Store tiene distribución rota (ev-016).
- TV app: ataca los tres componentes del dolor simultáneamente. No compite con ChatGPT — vive donde ChatGPT no está: en la pantalla grande, en el momento de consumo.

## Supuestos de los que más depende (en orden de riesgo)
1. El dolor es suficientemente agudo para que alguien instale una app nueva en su TV y aprenda a usarla con el teléfono. (H1 — a probar en F&F, Grupo B)
2. Una vez activado, el usuario vuelve por su propia cuenta. El hábito se forma. (H2 — a probar en F&F, retención D7)
3. El teléfono como control es percibido como mejor experiencia, no como fricción adicional. (H3 — a probar en F&F, entrevistas post-uso)
4. A escala, el dato de intención de búsqueda en TV es negociable con plataformas o monetizable B2B como lo hace JustWatch. (H4 — a probar post-soft launch)

## Gate
G1 · Problem-Solution Fit — **hold**.
Qué lo cierra: F&F pasa los cinco criterios definidos en state/gtm-model.md:
- Activación >60% en Grupo B
- Retención D7 >35% en Grupo B (sin recordatorio)
- ≥5 personas del Grupo B mencionan pain/valor espontáneamente
- Sean Ellis >40% "muy decepcionado" en Grupo B
- ≥5 personas del Grupo B mencionan el TV+teléfono como parte del valor (prueba H3)
