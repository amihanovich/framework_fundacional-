@echo off
cd /d "%~dp0"
echo Conectando y pusheando a GitHub...
git remote add origin https://github.com/amihanovich/framework_fundacional-.git
git branch -M main
git push -u origin main
echo.
echo Listo! Repo publicado en GitHub.
pause
