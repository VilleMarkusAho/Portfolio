# PowerShell setup script for Windows

Write-Host "🚀 Setting up React Portfolio Development Environment..." -ForegroundColor Green

# Check if Node.js is installed
try {
    $nodeVersion = node -v
    Write-Host "✅ Node.js version: $nodeVersion" -ForegroundColor Green
} catch {
    Write-Host "❌ Node.js is not installed. Please install Node.js first." -ForegroundColor Red
    Write-Host "Visit: https://nodejs.org/" -ForegroundColor Yellow
    exit 1
}

# Install dependencies
Write-Host "📦 Installing dependencies..." -ForegroundColor Blue
npm install

# Type check
Write-Host "🔍 Running type check..." -ForegroundColor Blue
npm run type-check

# Create .env.local if it doesn't exist
if (!(Test-Path ".env.local")) {
    Write-Host "📝 Creating .env.local file..." -ForegroundColor Blue
    @"
# Development environment variables
VITE_APP_TITLE=React Portfolio
VITE_APP_DESCRIPTION=Modern React Portfolio
"@ | Out-File -FilePath ".env.local" -Encoding UTF8
}

Write-Host "✅ Setup complete!" -ForegroundColor Green
Write-Host ""
Write-Host "🎯 Quick start commands:" -ForegroundColor Yellow
Write-Host "  npm run dev     - Start development server"
Write-Host "  npm run build   - Build for production"
Write-Host "  npm run preview - Preview production build"
Write-Host "  npm run lint    - Run linter"
Write-Host ""
Write-Host "🌐 Development server will be available at:" -ForegroundColor Yellow
Write-Host "  Local:   http://localhost:5173"
Write-Host "  Network: http://[your-ip]:5173"
