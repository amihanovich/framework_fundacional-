# Hipótesis — opp-004 · Cables USB-C excedentes

> status: **parked** — idea inicial capturada, sin explorar todavía.
> Completar: quién exactamente tiene el dolor, cuán seguido, cuán severo, qué hace hoy.

## Problema (forma testeable)

El fabricante incluye un cable en cada dispositivo porque "así se vende" — aunque el consumidor ya no lo necesita. Eso genera un excedente estructural que no tiene destino. El consumidor acumula cables inútiles; el fabricante paga por algo que termina en un cajón.

- **Quién** exactamente lo tiene: fabricantes de dispositivos USB-C (principal), consumidores (secundario)
- **Cuán seguido** ocurre: cada unidad vendida
- **Cuán severo** es (fabricante): costo directo de incluir cable + presión ESG creciente por residuo electrónico
- **Qué hacen hoy** al respecto: incluirlo igual por convención de mercado (nadie quiere ser el primero en sacarlo salvo Apple)

## Intuición del founder

Compró 8 farolitos de camping recargables → 8 cables incluidos → usa 2. Multiplicado por millones de unidades vendidas, el excedente es masivo y predecible.

## Solución — núcleo vs derivas

- **Núcleo:** programa B2B con fabricantes para que el cable "incluido" se convierta en una donación con impacto medible — el consumidor final activa la donación ("compraste este farol → tu cable va a electrificar un pueblo en África")
- **Componente impacto:** redistribución de cables a zonas sin acceso eléctrico confiable, con narrativa de marca para el fabricante
- **Derivas / scope creep a vigilar:** no convertirse en una ONG; el modelo tiene que tener economía propia (el fabricante paga por el programa, no al revés)

## Arquitectura de valor (draft)

```
Fabricante → paga por el programa (ahorro de cable + valor ESG/marca)
     ↓
Operador del programa → logística de redistribución + narrativa de impacto
     ↓
Consumidor → activa la donación con su compra ("tu cable fue a X")
     ↓
Comunidad destino → recibe cables para electrificación básica
```

## Preguntas abiertas antes de Gate 1

1. ¿Hay fabricantes que ya estén buscando salir del cable incluido pero no encuentran cómo sin perder percepción de valor? (señal de demanda real)
2. ¿Qué organizaciones ya trabajan en electrificación con USB-C / solar en África u otros destinos? (validar que el canal de destino existe)
3. ¿El fabricante ahorra dinero real si elimina el cable? ¿Cuánto por unidad? (cuantificar el incentivo económico, separado del ESG)
4. ¿Hay precedentes de modelos "dona X con tu compra" con tracción B2B con fabricantes, no solo retail? (TOMS, pero en B2B)

## Supuestos de los que más depende

1. Que el fabricante vea valor económico real en eliminar el cable (no solo ESG) — si el ahorro es marginal, no hay deal
2. Que el consumidor valore la narrativa de impacto lo suficiente como para que el fabricante no pierda conversión
3. Que exista infraestructura de destino real donde el cable USB-C sea útil y distribuible

## Gate

G0 · **Parked** — idea capturada, sin evidencia todavía. Próximo paso: responder las 4 preguntas abiertas y buscar si alguien ya intentó esto.
