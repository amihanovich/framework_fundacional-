#!/usr/bin/env bash
set -euo pipefail

# Inicializa el repo del studio con un primer commit.
# La creacion del repo remoto y el push los haces vos (requieren credenciales).

git init
git add .
git commit -m "Studio substrate V0: STUDIO.md, opp-001 (Cinefilo, Gate 1 hold), skill estrategia-validacion"

echo ""
echo "Listo el commit inicial. Pasos manuales (tuyos):"
echo "  1. Crea un repo PRIVADO en GitHub (es memoria de compania + estrategia)."
echo "  2. git remote add origin <url-del-repo>"
echo "  3. git branch -M main && git push -u origin main"
