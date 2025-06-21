#!/bin/bash

echo "🚀 Setting up React Portfolio Development Environment..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js first."
    echo "Visit: https://nodejs.org/"
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 16 ]; then
    echo "❌ Node.js version 16 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Type check
echo "🔍 Running type check..."
npm run type-check

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "📝 Creating .env.local file..."
    cat > .env.local << EOL
# Development environment variables
VITE_APP_TITLE=React Portfolio
VITE_APP_DESCRIPTION=Modern React Portfolio
EOL
fi

echo "✅ Setup complete!"
echo ""
echo "🎯 Quick start commands:"
echo "  npm run dev     - Start development server"
echo "  npm run build   - Build for production"
echo "  npm run preview - Preview production build"
echo "  npm run lint    - Run linter"
echo ""
echo "🌐 Development server will be available at:"
echo "  Local:   http://localhost:5173"
echo "  Network: http://[your-ip]:5173"
