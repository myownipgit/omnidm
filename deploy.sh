#!/bin/bash

# OmniDM Deployment Script
# This script helps deploy your Next.js site to Vercel

echo "🚀 OmniDM Deployment Helper"
echo "================================"
echo ""

# Check if vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "❌ Vercel CLI not found. Installing..."
    npm install -g vercel
fi

echo "📦 Building the project..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    echo ""
    echo "🌐 Ready to deploy!"
    echo ""
    echo "Please choose a deployment method:"
    echo ""
    echo "1. Vercel CLI (Recommended)"
    echo "   Run: vercel login"
    echo "   Then: vercel --prod"
    echo ""
    echo "2. Vercel Dashboard (Easiest)"
    echo "   Visit: https://vercel.com/new"
    echo "   Import: https://github.com/myownipgit/omnidm"
    echo ""
    echo "3. Deploy Button"
    echo "   Visit: https://vercel.com/new/clone?repository-url=https://github.com/myownipgit/omnidm"
    echo ""
else
    echo "❌ Build failed. Please check the errors above."
    exit 1
fi
