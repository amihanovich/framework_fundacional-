@echo off
cd /d "%~dp0"
echo Guardando cambios del studio en git...
git add .
git commit -m "Cierra la matriz: 6 roles G2-G4 + rol Campeon (contrapeso del Adversario, gate en estereo, champion_strongest en STUDIO.md); corrida opp-002; COMO-USAR.md y _template; README actualizado"
echo.
echo Pusheando a GitHub...
git push
echo.
echo Listo! Cambios guardados y publicados.
pause
