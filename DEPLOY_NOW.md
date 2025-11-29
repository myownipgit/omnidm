# Deploy OmniDM to Vercel - Step by Step

## ✅ Your Code is Ready!
- ✓ Code pushed to GitHub: https://github.com/myownipgit/omnidm
- ✓ Google Analytics integrated (G-7MELG373M6)
- ✓ Build tested and passing
- ✓ All features working

## 🚀 Deploy Now (2 Minutes)

### Method 1: Vercel Dashboard (Recommended - Easiest)

1. **Go to Vercel**
   - Open: https://vercel.com/new
   - Sign in with the account for: contact@omnidm.ai

2. **Import Your Repository**
   - Click "Import Git Repository"
   - You should see: `myownipgit/omnidm`
   - Click "Import" next to it

   If you don't see it:
   - Click "Add GitHub Account"
   - Authorize Vercel to access `myownipgit/omnidm`
   - Then click "Import"

3. **Configure Project** (Auto-detected)
   - Project Name: `omnidm-ai-site` (or keep default)
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: `./` (default)
   - Build Command: `npm run build` (default)
   - Output Directory: `.next` (default)
   - Install Command: `npm install` (default)

   **DON'T CHANGE ANYTHING** - Just click "Deploy"

4. **Wait for Deployment**
   - Takes 2-3 minutes
   - You'll see the build logs in real-time
   - ✅ Success message with your site URL

5. **Your Site is Live!**
   - You'll get a URL like: `omnidm-ai-site-xyz.vercel.app`
   - Site is immediately accessible
   - Google Analytics is tracking

### Method 2: One-Click Deploy Button

Click this button:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/myownipgit/omnidm)

This will:
1. Import the repository
2. Auto-configure everything
3. Deploy immediately

## 🌐 Add Custom Domain (omnidm.ai)

After deployment is successful:

1. **In Vercel Dashboard**
   - Go to your project
   - Click "Settings" tab
   - Click "Domains" in sidebar

2. **Add Domain**
   - Type: `omnidm.ai`
   - Click "Add"
   - Type: `www.omnidm.ai`
   - Click "Add"

3. **Configure DNS**

   Vercel will show you DNS records to add. Go to your domain registrar and add:

   **Option A: A Record (Recommended)**
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   TTL: 3600

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

   **Option B: CNAME (Alternative)**
   ```
   Type: CNAME
   Name: @
   Value: cname.vercel-dns.com
   TTL: 3600

   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   TTL: 3600
   ```

4. **Wait for DNS**
   - DNS propagation: 5 minutes to 48 hours (usually ~1 hour)
   - Vercel will auto-issue SSL certificate
   - Your site will be live at omnidm.ai

## 🔄 Automatic Deployments

Once connected, every time you push to the `main` branch on GitHub:
- Vercel automatically deploys
- Takes 2-3 minutes
- Zero downtime

## ✅ Verify Deployment

After deployment:
- [ ] Visit your Vercel URL
- [ ] Check language switcher (EN/KM)
- [ ] Scroll through all sections
- [ ] Test on mobile
- [ ] Check Google Analytics (Realtime view)

## 🆘 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Most common: Missing dependencies (should not happen)

### Domain Not Working
- Check DNS settings at your registrar
- Wait up to 48 hours for propagation
- Use https://dnschecker.org to check propagation

### Need Help?
- Vercel Docs: https://vercel.com/docs
- Vercel Support: https://vercel.com/support

---

**Your site is ready to go live! Follow Method 1 above to deploy now.** 🚀
