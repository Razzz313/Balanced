# Balance — Premium Healthy Catering Website

A flagship React/Vite website for **Balance**, UAE's premier healthy catering brand.

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm 9+

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Build for Production

```bash
npm run build
npm run preview
```

## 🌐 Deploy to Vercel

This project is pre-configured for Vercel deployment.

**Option 1 — Vercel CLI:**
```bash
npm install -g vercel
vercel
```

**Option 2 — Vercel Dashboard:**
1. Push to GitHub
2. Import at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Vite → Deploy

The `vercel.json` file handles client-side routing rewrites automatically.

## 📁 Project Structure

```
balance-website/
├── public/
│   └── favicon.svg
├── src/
│   ├── assets/
│   │   └── logos/
│   │       ├── logo-green.svg
│   │       ├── logo-white.svg
│   │       ├── logo-icon.svg
│   │       └── README.md
│   ├── components/
│   │   ├── Navbar.jsx / .css
│   │   ├── Hero.jsx / .css
│   │   ├── About.jsx / .css
│   │   ├── Services.jsx / .css
│   │   ├── MealPlans.jsx / .css
│   │   ├── Gallery.jsx / .css
│   │   ├── WhyUs.jsx / .css
│   │   ├── Testimonials.jsx / .css
│   │   ├── Contact.jsx / .css
│   │   ├── Footer.jsx / .css
│   │   └── Logo.jsx
│   ├── hooks/
│   │   └── useReveal.js
│   ├── styles/
│   │   └── global.css
│   ├── App.jsx
│   └── main.jsx
├── index.html
├── vite.config.js
├── vercel.json
├── package.json
└── README.md
```

## 🎨 Design System

| Token | Value |
|-------|-------|
| Primary Green | `#2E7D57` |
| Secondary Green | `#56A66A` |
| Soft Sage | `#EAF3EC` |
| Warm White | `#FAFBF8` |
| Light Gray | `#F5F6F5` |
| Dark Text | `#1A1A1A` |
| Display Font | Cormorant Garamond |
| Body Font | Inter |

## 📦 Sections

1. **Navbar** — Sticky, transparent → solid on scroll, animated services dropdown, mobile hamburger
2. **Hero** — Full-screen with animated orbs, counting stats, dual-column layout
3. **About** — Storytelling layout with values grid and floating pill cards
4. **Services** — 8 interactive cards with green hover fill animation
5. **Meal Plans** — 3-tier pricing cards (Wellness Lite / Performance Pro / Elite)
6. **Gallery** — Masonry grid with hover overlays
7. **Why Us** — 6 feature cards with animated bottom border reveal
8. **Testimonials** — Paginated carousel on dark green background
9. **Contact** — Full inquiry form with success state
10. **Footer** — 5-column with newsletter signup

## 🔧 Customization

### Update Brand Colors
Edit CSS variables in `src/styles/global.css`:
```css
:root {
  --g1: #2E7D57;  /* Primary green */
  --g2: #56A66A;  /* Secondary green */
}
```

### Add Real Images
Replace emoji placeholders in components with `<img>` tags pointing to your photos. Recommended services:
- Unsplash API for stock photography
- Cloudinary for image optimization

### Connect a Backend
The contact form in `Contact.jsx` is ready to hook up. Replace the `handleSubmit` function with a fetch call to your API or a service like EmailJS, Formspree, or Netlify Forms.

## 📄 License
Built for Balance Catering LLC, UAE. All rights reserved.
