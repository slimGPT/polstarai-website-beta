@echo off
echo Stopping existing Node processes...
taskkill /F /IM node.exe >nul 2>&1
timeout /t 1 /nobreak >nul
echo Starting development server...
pnpm dev

