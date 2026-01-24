@echo off
echo ========================================
echo   DeepSeek API Proxy Server
echo ========================================
echo.

REM Check if node_modules exists
if not exist "node_modules\" (
    echo Installing dependencies...
    call npm install
    echo.
)

REM Check if .env exists
if not exist ".env" (
    echo WARNING: .env file not found!
    echo.
    echo Please create a .env file with your DeepSeek API key.
    echo You can copy env.example.txt to .env and edit it.
    echo.
    pause
    exit /b 1
)

echo Starting proxy server...
echo.
call npm start

