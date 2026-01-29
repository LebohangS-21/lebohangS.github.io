# Data Analyst Portfolio Website

A modern, professional portfolio website for showcasing data analysis projects, skills, and experience.

## 🚀 Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional aesthetic with smooth animations
- **Interactive Elements**: Hover effects, scroll animations, and dynamic counters
- **Performance Optimized**: Fast loading with minimal dependencies
- **Easy to Customize**: Simple HTML structure with CSS variables for easy theming

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All styling and animations
├── script.js           # Interactive features and functionality
└── README.md           # This file
```

## 🛠️ Setup Instructions

### Option 1: GitHub Pages (Recommended)

1. **Create a new repository**
   - Go to GitHub and create a new repository
   - Name it `username.github.io` (replace `username` with your GitHub username)
   - Make it public

2. **Upload your files**
   - Upload `index.html`, `styles.css`, and `script.js` to the repository
   - Commit the changes

3. **Enable GitHub Pages**
   - Go to repository Settings → Pages
   - Under "Source", select "Deploy from a branch"
   - Select "main" branch and "/ (root)" folder
   - Click Save

4. **Access your site**
   - Your site will be live at `https://username.github.io`
   - It may take a few minutes for the first deployment

### Option 2: GitHub Pages with Custom Repository Name

1. Create a repository with any name (e.g., `portfolio`)
2. Upload your files
3. Enable GitHub Pages (as above)
4. Your site will be at `https://username.github.io/repository-name`

## ✏️ Customization Guide

### 1. Personal Information

Open `index.html` and update:

- **Line 7**: Change page title
- **Line 20**: Update logo initials in nav
- **Lines 31-47**: Update hero section text
- **Lines 48-58**: Update statistics
- **Lines 71-94**: Update about section
- **Lines 289-320**: Update contact information (email, LinkedIn, GitHub, phone)
- **Line 343**: Update footer text

### 2. Projects

For each project card (starting around line 178):

- Update project title
- Update project description
- Update project stats (records, regions, dashboards, etc.)
- Update project tags
- Update project links (replace `#` with actual URLs)

### 3. Skills

Update skill lists (lines 131-175):

- Add or remove skills
- Update proficiency levels (Expert, Advanced, Intermediate)
- Modify skill categories

### 4. Colors & Styling

Open `styles.css` and modify CSS variables (lines 1-13):

```css
:root {
    --color-primary: #0066ff;        /* Main brand color */
    --color-secondary: #00d4ff;      /* Accent color */
    --color-accent: #ff3366;         /* Highlight color */
    /* ... more variables */
}
```

### 5. Fonts

The site uses Google Fonts (Syne and Space Mono). To change:

1. Visit [Google Fonts](https://fonts.google.com)
2. Select your fonts
3. Update the font link in `index.html` (line 8)
4. Update CSS variables in `styles.css`:
   - `--font-display` for headings
   - `--font-body` for body text

### 6. Contact Form

The contact form currently shows an alert. To make it functional:

**Option A: Using Formspree**
1. Sign up at [Formspree.io](https://formspree.io)
2. Create a new form and get your endpoint
3. Update `script.js` line 74-95 with Formspree integration

**Option B: Using EmailJS**
1. Sign up at [EmailJS.com](https://www.emailjs.com)
2. Set up an email service
3. Add EmailJS SDK to `index.html`
4. Update form handling in `script.js`

**Option C: Using Netlify Forms**
1. Host on Netlify instead of GitHub Pages
2. Add `netlify` attribute to the form tag
3. Netlify automatically handles form submissions

### 7. Add Your Photo

Replace the placeholder in the About section:

1. Add your photo to the repository (e.g., `profile.jpg`)
2. In `index.html`, find the `.image-placeholder` section (around line 111)
3. Replace the SVG with:
```html
<img src="profile.jpg" alt="Your Name" style="width: 100%; height: 100%; object-fit: cover; border-radius: 20px;">
```

### 8. Add Project Images

For project cards:

1. Add project images to your repository (e.g., `project1.png`)
2. In `index.html`, replace `.project-placeholder` SVG with:
```html
<img src="project1.png" alt="Project Name" style="width: 100%; height: 100%; object-fit: cover;">
```

## 📱 Testing

Before deploying:

1. **Local Testing**
   - Open `index.html` in a web browser
   - Test all links and interactions
   - Check responsive design (use browser dev tools)

2. **Mobile Testing**
   - Test on actual mobile devices
   - Check hamburger menu functionality
   - Verify touch interactions

3. **Cross-Browser Testing**
   - Test in Chrome, Firefox, Safari, and Edge
   - Check for any layout issues

## 🎨 Advanced Customization

### Add More Sections

To add new sections:

1. Add HTML section in `index.html`
2. Add navigation link
3. Style in `styles.css`
4. Add scroll animation in `script.js`

### Add Analytics

To track visitors:

1. Sign up for Google Analytics
2. Add tracking code to `<head>` in `index.html`
3. Or use privacy-friendly alternatives like Plausible or Fathom

### Add SEO

Improve search engine visibility:

1. Add meta tags in `<head>`:
```html
<meta name="description" content="Your description">
<meta name="keywords" content="data analyst, portfolio, ...">
<meta property="og:title" content="Your Name - Data Analyst">
<meta property="og:description" content="...">
<meta property="og:image" content="preview-image.jpg">
```

2. Create and add `sitemap.xml`
3. Add `robots.txt`

## 🐛 Troubleshooting

**Site not loading on GitHub Pages:**
- Wait 5-10 minutes after first deployment
- Check that files are in the root directory
- Verify GitHub Pages is enabled in settings

**Fonts not loading:**
- Check internet connection
- Verify Google Fonts link is correct
- Use fallback fonts in CSS

**Mobile menu not working:**
- Check that `script.js` is properly linked
- Open browser console for JavaScript errors
- Test in different browsers

**Animations not working:**
- Ensure JavaScript is enabled
- Check console for errors
- Test in different browsers

## 📄 License

Feel free to use this template for your own portfolio. No attribution required, but always appreciated!

## 🙋‍♂️ Support

If you have questions or need help:
- Open an issue on GitHub
- Contact me through the portfolio website

## 🎯 Next Steps

1. Customize all personal information
2. Add your actual projects with images
3. Update contact information
4. Add your profile photo
5. Test thoroughly
6. Deploy to GitHub Pages
7. Share your portfolio link!

---

**Pro Tips:**
- Keep project descriptions concise (2-3 sentences)
- Use specific metrics in your project stats
- Update regularly with new projects
- Get feedback from peers before sharing widely
- Consider adding a blog section for data insights

Good luck with your portfolio! 🚀
