#!/bin/bash

echo "🏗️  Building React Portfolio for Production..."

# Clean previous build
if [ -d "dist" ]; then
    echo "🧹 Cleaning previous build..."
    rm -rf dist
fi

# Type check
echo "🔍 Running type check..."
npm run type-check

if [ $? -ne 0 ]; then
    echo "❌ Type check failed. Please fix TypeScript errors."
    exit 1
fi

# Build
echo "📦 Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Build files are in the 'dist' directory"
    echo "🌐 You can preview the build with: npm run preview"
else
    echo "❌ Build failed!"
    exit 1
fi
