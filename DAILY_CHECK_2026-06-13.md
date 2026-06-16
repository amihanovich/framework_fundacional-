# Daily Check — 2026-06-13

**Ejecutado por:** daiily-manager (scheduled task)
**Fecha de revisión:** 2026-06-14

---

## Sesiones del día

### 1. "Google Cloud ASR integration" — opp-001-queveo
**Qué pasó:** Primera sesión F&F con Mercedes (esposa, Grupo A). Se corrió el script `tools/transcribe_feedback.py` sobre `Mechi130626.aac`. Dos bugs de Windows fueron corregidos en el script:
- `which` → `shutil.which` (Windows compatibility)
- Manejo de `.env` con BOM UTF-16 creado por PowerShell

Error adicional: Google STT no soporta `latest_long` para `es-AR`; fue corregido en el script. El transcript resultante (`transcript_2026-06-13.txt`) es de calidad baja por los errores de ASR.

**Documentado:** ✅ ev-037 agregado a `evidence.jsonl` con la sesión Mechi + limitaciones críticas explicitadas.

### 2. "Claude focus group capability" — opp-001-queveo
**Qué pasó:** Actualización de `ff-test-plan.md`: la medición de navegación pasó de condición bloqueante a **MUST #1** explícito. Discusión de PostHog + URLs personalizadas (`?i=nombre`) para tracking por persona.

**Documentado:** ✅ cambio ya en `state/ff-test-plan.md`.

### 3. "Queveo GTM model analysis" — opp-001-queveo
**Qué pasó:** Regeneración y actualización del documento GTM/Market Model consolidado (`opp-001-GTM-Market-Model-consolidado.docx`). Se agregó sección TAM/SAM/SOM por región con tablas y escenarios. Campeón y Adversario actualizados con ev-035 (valorización honesta).

**Documentado:** ✅ archivo .docx en `opportunities/opp-001-queveo/`.

---

## Estado del substrate al cierre del día

| Opp | Gate actual | Pendiente crítico |
|-----|-------------|-------------------|
| opp-001-queveo | Gate 1 · hold | **MUST #1**: instrumentar medición de navegación (PostHog) ANTES del próximo F&F. Sin esto no hay datos conductuales. |
| opp-002-nueva | Gate 1 · hold | Founder no ha dado el call (park / kill / pivot). Sin actividad. |
| opp-004-cables-usbc | Pre-gate | Sin actividad registrada. |

---

## Pendiente para el próximo chat

- **MUST #1 desbloqueante:** PostHog snippet en las dos páginas + verificar que los 8 eventos aparecen en el panel. Agus lo puede hacer (declaró que puede con esa parte). Sin esto el Grupo B no arranca.
- El transcript de Mechi (ev-037) tiene calidad baja por ASR. Si hay notas de voz o recuerdos frescos de la sesión, vale registrarlos como evidencia complementaria mientras el audio aún está fresco.
- opp-002: el founder tiene un call pendiente desde 2026-06-05. Próxima oportunidad de resolverlo.
