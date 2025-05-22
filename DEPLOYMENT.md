# Deployment Guide

This guide will help you deploy your React.js portfolio to GitHub Pages.

## Prerequisites

1. **Git** installed on your computer
2. **GitHub account** 
3. **Node.js** and **npm** installed

## Step 1: Initialize Git Repository

```bash
# Initialize git repository
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Professional portfolio with React.js"
```

## Step 2: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it exactly: `Portfolio`
4. Make it **public**
5. Don't initialize with README (we already have one)
6. Click "Create repository"

## Step 3: Connect Local Repository to GitHub

```bash
# Add remote origin
git remote add origin https://github.com/YongJinYit1214/Portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

## Step 4: Install Deployment Dependencies

```bash
# Install gh-pages for deployment
npm install --save-dev gh-pages
```

## Step 5: Deploy to GitHub Pages

```bash
# Build and deploy
npm run deploy
```

This command will:
1. Build your React app for production
2. Create a `gh-pages` branch
3. Deploy the built files to GitHub Pages

## Step 6: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select branch: `gh-pages`
6. Select folder: `/ (root)`
7. Click "Save"

## Step 7: Access Your Portfolio

Your portfolio will be available at:
```
https://YongJinYit1214.github.io/Portfolio/
```

It may take a few minutes for the site to be live after the first deployment.

## Future Updates

To update your portfolio:

```bash
# Make your changes
# Add and commit changes
git add .
git commit -m "Update portfolio content"

# Push to main branch
git push origin main

# Deploy updated version
npm run deploy
```

## Troubleshooting

### Issue: 404 Error on GitHub Pages
- Make sure the repository name is exactly `Portfolio`
- Check that GitHub Pages is enabled in repository settings
- Verify the `base` path in `vite.config.js` matches your repository name

### Issue: Deployment Fails
- Make sure you have push access to the repository
- Check that all dependencies are installed: `npm install`
- Try clearing npm cache: `npm cache clean --force`

### Issue: Site Not Updating
- GitHub Pages can take up to 10 minutes to update
- Try hard refresh (Ctrl+F5 or Cmd+Shift+R)
- Check the Actions tab in your GitHub repository for deployment status

## Custom Domain (Optional)

If you want to use a custom domain:

1. Add a `CNAME` file to the `public` folder with your domain name
2. Configure DNS settings with your domain provider
3. Update the `homepage` field in `package.json`

## Environment Variables

For production deployment with email functionality:
1. Set up EmailJS account
2. Add environment variables in GitHub repository settings
3. Update the contact form to use EmailJS

---

Your professional portfolio is now live and accessible to potential employers and clients worldwide! 🚀
