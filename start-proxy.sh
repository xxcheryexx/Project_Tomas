#!/bin/bash

echo "========================================"
echo "  DeepSeek API Proxy Server"
echo "========================================"
echo ""

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "Installing dependencies..."
    npm install
    echo ""
fi

# Check if .env exists
if [ ! -f ".env" ]; then
    echo "WARNING: .env file not found!"
    echo ""
    echo "Please create a .env file with your DeepSeek API key."
    echo "You can copy env.example.txt to .env and edit it."
    echo ""
    exit 1
fi

echo "Starting proxy server..."
echo ""
npm start

