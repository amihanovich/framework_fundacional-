# Arrancá acá — Framework Fundacional

Esto es una **matriz para correr ideas con disciplina**: detectás un dolor, lo validás, lo
construís y lo escalás — con un equipo de roles (skills) que por default intentan *matar la
idea barato*, y un Campeón que asegura que una chispa genuina no muera por escepticismo. La
memoria vive en git, append-only y auditable. El objetivo final es **emprender**, no matar
ideas prolijo.

## Setup en 4 pasos (15 min)

### 1. Quedate con tu propia copia del repo
Forkeá o cloná este repo a **uno tuyo** (privado). No corras tus ideas dentro del repo de
quien te lo pasó: el framework se comparte, pero las `opportunities/` son de cada uno.
Lo compartible: `STUDIO.md`, `COMO-USAR.md`, `skills/`, `opportunities/_template/`.

### 2. Instalá los 10 skills en tu Claude
En tu app de Claude: **Settings → Capabilities** → agregá cada archivo `.skill` de la carpeta
`skills/` (son 10). Quedan instalados globalmente y se activan solos cuando la conversación
entra en su terreno.

Los roles: `estrategia-validacion`, `competencia-mercado`, `adversario`, `campeon`, `build`,
`seguridad`, `metricas`, `operaciones`, `gtm`, `escala-moat`.

### 3. Creá un proyecto en Cowork apuntado a la carpeta del repo
Apuntá tu Cowork a la carpeta del repo clonado (es tu carpeta de trabajo: ahí lee y escribe
el state y la evidencia).

### 4. Pegá estas project-instructions en el proyecto
> Este proyecto corre el **Framework Fundacional**: una matriz de detección, validación,
> construcción y escalado de empresas. Antes de actuar, leé `STUDIO.md` (la constitución:
> invariantes, gates, contrato de rol) y `COMO-USAR.md`. Tu trabajo es ayudarme a encontrar
> dolores reales, afilarlos a hipótesis testeables y correrlos por los gates con disciplina:
> default a refutar barato, pero con el **Campeón** como contrapeso para no matar ideas
> genuinas. Toda evidencia y decisión se **asienta** append-only y firmada (nunca se borra ni
> se edita una línea pasada; una corrección es una línea nueva). **Ningún gate se cierra sin
> oír al Adversario y, si hay señal genuina, al Campeón.** El criterio es siempre la
> oportunidad, no mi perfil profesional. Activá los roles (skills) que correspondan a cada
> etapa, y yo soy dueño del call en cada gate.

## Cómo arrancar tu primera idea
1. Copiá `opportunities/_template/` como `opportunities/opp-001-tu-slug/`.
2. Contale tu idea a Claude. El rol `estrategia-validacion` te va a frenar y exigir los cuatro:
   **quién** exactamente tiene el dolor, **cuán seguido**, **cuán severo**, **qué hace hoy**.
3. Dejá que cace evidencia que la refute (y el Campeón, lo que la sostiene). Vos decidís el
   call: `advance` · `hold` · `iterate` · `pivot` · `kill`.
4. Guardá todo en git (append-only). El `git log` es tu auditoría gratis.

## Qué esperar (sé realista)
- El sistema **no es complaciente**: te va a incomodar. Eso es la señal de que funciona. Si una
  idea sobrevive un pase honesto, vale oro.
- G1 (validación) está probado con corridas reales. Los roles de construcción/escala (G2–G4)
  están completos pero se afinan con el primer caso que los cruce.
- Detalles del flujo, los roles y las reglas: todo en **`COMO-USAR.md`**.
