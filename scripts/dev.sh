#!/bin/bash

echo "🚀 Starting React Portfolio Development Server..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Dependencies not found. Installing..."
    npm install
fi

# Start development server
echo "🌐 Starting Vite development server..."
echo "📱 Server will be accessible on your local network"
npm run dev
