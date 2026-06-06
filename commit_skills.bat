@echo off
cd /d "%~dp0"
echo Guardando cambios del studio en git...
git add .
git commit -m "Skills adversario y competencia-mercado; invariante #7 neutralidad founder-fit (STUDIO.md + guards en estrategia-validacion y competencia-mercado)"
echo.
echo Pusheando a GitHub...
git push
echo.
echo Listo! Cambios guardados y publicados.
pause
