# Teen Preneur Deployment Guide

This guide provides instructions for deploying the Teen Preneur platform to various hosting providers.

## 🚀 Quick Deploy Options

### Vercel (Recommended)

Vercel is the recommended platform as it's made by the creators of Next.js.

1. **Connect Your Repository**
   - Visit [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository

2. **Configure Build Settings**
   - Framework Preset: Next.js
   - Build Command: `npm run build`
   - Output Directory: `.next`
   - Install Command: `npm install`

3. **Deploy**
   - Click "Deploy"
   - Your site will be live in minutes at `https://your-project.vercel.app`

### Netlify

1. **Connect Repository**
   - Log in to [netlify.com](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect to GitHub and select your repository

2. **Build Settings**
   - Build command: `npm run build`
   - Publish directory: `.next`

3. **Deploy**
   - Click "Deploy site"

### Custom Server (Node.js)

For deploying on your own server:

1. **Build the Application**
   ```bash
   npm run build
   ```

2. **Start Production Server**
   ```bash
   npm start
   ```

3. **Use PM2 for Process Management** (optional)
   ```bash
   npm install -g pm2
   pm2 start npm --name "teen-preneur" -- start
   pm2 save
   pm2 startup
   ```

4. **Set Up Reverse Proxy** (nginx example)
   ```nginx
   server {
       listen 80;
       server_name teenpreneur.com;

       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## 🔧 Environment Variables

Currently, the application doesn't require environment variables. If you add features requiring them (e.g., database, authentication), create a `.env.local` file:

```env
# Example environment variables
# DATABASE_URL=your_database_url
# NEXT_PUBLIC_API_URL=your_api_url
```

## 📊 Performance Optimization

The platform is already optimized with:
- ✅ Static Site Generation (SSG) for all pages
- ✅ Automatic code splitting
- ✅ Image optimization (when images are added)
- ✅ CSS optimization with Tailwind CSS

## 🔐 Security Checklist

Before deploying to production:

- [ ] Review and update all placeholder content
- [ ] Set up proper authentication if needed
- [ ] Configure CORS policies
- [ ] Set up SSL/TLS certificates
- [ ] Configure CSP headers
- [ ] Set up monitoring and logging
- [ ] Enable rate limiting for forms

## 📝 Post-Deployment

1. **Test All Pages**
   - Homepage: `/`
   - Mentor Hub: `/mentor-hub`
   - Alumni Network: `/alumni-network`
   - Incubator: `/incubator`
   - Revenue Tracking: `/revenue-tracking`
   - Profile: `/profile`

2. **Test Mobile Responsiveness**
   - Use browser dev tools to test various screen sizes
   - Test on actual mobile devices

3. **Monitor Performance**
   - Use Vercel Analytics or Google PageSpeed Insights
   - Monitor Core Web Vitals

4. **Set Up Analytics** (optional)
   - Google Analytics
   - Plausible Analytics
   - Vercel Analytics

## 🆘 Troubleshooting

### Build Fails
- Clear `.next` folder: `rm -rf .next`
- Clear node_modules: `rm -rf node_modules && npm install`
- Check Node.js version (requires 18.x or later)

### Pages Not Loading
- Verify all files are committed
- Check build logs for errors
- Ensure all dependencies are in package.json

### Styling Issues
- Clear browser cache
- Verify Tailwind CSS is properly configured
- Check PostCSS configuration

## 📞 Support

For deployment issues:
- Check the [Next.js Deployment Documentation](https://nextjs.org/docs/deployment)
- Review platform-specific guides (Vercel, Netlify)
- Create an issue in the repository

---

**Teen Preneur** - Ready to launch! 🚀
