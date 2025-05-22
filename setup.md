# Quick Setup Guide

## 🚀 Getting Started

Your professional portfolio is ready! Here's how to get it running:

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

Your portfolio will be available at: `http://localhost:3000`

### 3. Build for Production
```bash
npm run build
```

## 📁 Project Structure

```
Portfolio/
├── src/
│   ├── components/          # React components
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero section with intro
│   │   ├── About.jsx       # About section
│   │   ├── Education.jsx   # Education details
│   │   ├── Skills.jsx      # Technical skills
│   │   ├── Projects.jsx    # Project showcase
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx             # Main app component
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static assets
├── package.json            # Dependencies
└── README.md              # Documentation
```

## 🎨 Customization

### Update Personal Information

1. **Hero Section** (`src/components/Hero.jsx`)
   - Name and title
   - Contact information
   - Social media links
   - Professional summary

2. **About Section** (`src/components/About.jsx`)
   - Personal description
   - Career objectives
   - Languages and soft skills

3. **Education Section** (`src/components/Education.jsx`)
   - University details
   - CGPA and graduation date
   - Specialization information

4. **Skills Section** (`src/components/Skills.jsx`)
   - Programming languages
   - Frameworks and tools
   - Technical competencies

5. **Projects Section** (`src/components/Projects.jsx`)
   - Project descriptions
   - Technologies used
   - Key features
   - GitHub links

6. **Contact Section** (`src/components/Contact.jsx`)
   - Contact information
   - Social media links
   - Contact form (currently demo mode)

### Styling

- **Colors**: Edit `tailwind.config.js` to change the color scheme
- **Fonts**: Update Google Fonts in `index.html`
- **Layout**: Modify component styles in individual files

## 🌐 Deployment

See `DEPLOYMENT.md` for detailed deployment instructions to GitHub Pages.

Quick deploy:
```bash
npm run deploy
```

## 📧 Contact Form

The contact form is currently in demo mode. To enable email functionality:

1. Sign up for [EmailJS](https://www.emailjs.com/)
2. Configure email templates
3. Update the contact form with EmailJS integration
4. Add environment variables for API keys

## 🔧 Development Commands

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages

## 📱 Features

✅ **Responsive Design** - Works on all devices
✅ **Modern UI/UX** - Clean and professional design
✅ **Smooth Animations** - Framer Motion animations
✅ **SEO Optimized** - Meta tags and semantic HTML
✅ **Fast Loading** - Optimized with Vite
✅ **Accessible** - WCAG compliant
✅ **Cross-browser** - Works on all modern browsers

## 🎯 Next Steps

1. **Test the portfolio** - Check all sections and links
2. **Customize content** - Update with your specific information
3. **Deploy to GitHub Pages** - Make it live
4. **Share your portfolio** - Add the link to your resume and LinkedIn
5. **Keep it updated** - Regular updates with new projects and skills

Your professional portfolio is now ready to impress potential employers! 🌟
