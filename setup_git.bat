@echo off
cd /d "%~dp0"
echo Inicializando repo git...
git init
git config user.email "agustin.mihanovich@gmail.com"
git config user.name "Agus"
git add .
git commit -m "Studio substrate V0: STUDIO.md, opp-001 (Cinefilo, Gate 1 hold), skill estrategia-validacion"
echo.
echo Listo! Primer commit creado.
echo.
echo Proximos pasos (requieren tus credenciales):
echo   1. Crea repo PRIVADO en GitHub (sin README)
echo   2. git remote add origin ^<url-del-repo^>
echo   3. git branch -M main ^&^& git push -u origin main
echo.
pause
