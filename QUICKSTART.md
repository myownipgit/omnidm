# Quick Start Guide

## Your Next.js site is ready! 🎉

All code has been created and pushed to GitHub at:
**https://github.com/myownipgit/omnidm**

## Deploy to Vercel (3 Easy Steps)

### Step 1: Go to Vercel
Visit: **https://vercel.com/new**

### Step 2: Import Repository
1. Click "Import Project"
2. Select "Import Git Repository"
3. Enter: `https://github.com/myownipgit/omnidm`
4. Click "Import"

### Step 3: Deploy
1. Vercel will auto-detect Next.js
2. Click "Deploy" (no configuration needed!)
3. Wait 2-3 minutes for deployment

## Add Custom Domain (omnidm.ai)

After deployment:

1. Go to your project in Vercel Dashboard
2. Click **Settings** → **Domains**
3. Add domain: `omnidm.ai`
4. Add domain: `www.omnidm.ai`
5. Follow Vercel's DNS instructions

### DNS Configuration

Add these records at your domain registrar:

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Alternative: One-Click Deploy

Click this button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/myownipgit/omnidm)

## Local Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Open http://localhost:3000
```

## Features Included

✅ Next.js 14 with TypeScript
✅ Bilingual support (English/Khmer)
✅ Animated particles and smooth scrolling
✅ Responsive design
✅ All sections from original template
✅ Optimized for production
✅ Ready for Vercel deployment

## Need Help?

- See `DEPLOYMENT.md` for detailed deployment guide
- Run `./deploy.sh` for build verification
- Check Vercel docs: https://vercel.com/docs

---

**Your site is production-ready!** 🚀
