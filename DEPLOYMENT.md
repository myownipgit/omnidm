# Deployment Guide for OmniDM

## Quick Deploy to Vercel (Recommended)

### Option 1: Vercel Dashboard (Easiest)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New Project"
3. Import your GitHub repository: `https://github.com/myownipgit/omnidm`
4. Vercel will auto-detect Next.js settings
5. Click "Deploy"
6. Once deployed, add your custom domain:
   - Go to Project Settings → Domains
   - Add `omnidm.ai`
   - Follow the DNS configuration instructions

### Option 2: Deploy Button

Click this button to deploy:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/myownipgit/omnidm)

### Option 3: Vercel CLI

```bash
# Login to Vercel
vercel login

# Deploy to production
vercel --prod

# Add custom domain
vercel domains add omnidm.ai
```

## DNS Configuration for omnidm.ai

After deploying, configure your domain's DNS:

### At your domain registrar:

Add these DNS records:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

Or use Vercel's nameservers:

```
ns1.vercel-dns.com
ns2.vercel-dns.com
```

## Environment Variables

No environment variables are required for the basic deployment.

## Build Configuration

The project uses these settings (already configured):

- **Framework**: Next.js
- **Build Command**: `npm run build`
- **Output Directory**: `.next`
- **Install Command**: `npm install`
- **Development Command**: `npm run dev`

## Post-Deployment Checklist

- [ ] Verify the site loads at the Vercel URL
- [ ] Configure custom domain `omnidm.ai`
- [ ] Test language switching (EN/KM)
- [ ] Test all sections load correctly
- [ ] Verify mobile responsiveness
- [ ] Check all animations work
- [ ] Test smooth scrolling to sections

## Troubleshooting

### Build Fails
- Check the Vercel build logs
- Ensure all dependencies are in package.json
- Verify Node.js version compatibility

### Domain Not Working
- Wait 24-48 hours for DNS propagation
- Verify DNS records are correct
- Check Vercel domain configuration

## Support

For Vercel deployment issues, visit:
- [Vercel Documentation](https://vercel.com/docs)
- [Next.js Deployment Guide](https://nextjs.org/docs/deployment)
