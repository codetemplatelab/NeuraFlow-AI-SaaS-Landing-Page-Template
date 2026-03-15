# NeuraFlow AI — AI SaaS Landing Page Template

Premium, production-ready SaaS landing page template with pricing, integrations, animations, and 3D hero visuals. Built for founders, agencies, and developers who want a fast, modern launch.

## Features
- Animated hero with 3D object, floating shapes, and gradient background
- Trusted-by marquee, features grid, integrations, workflow steps
- Product demo with carousel and modal preview
- Pricing plans + comparison table with localStorage selection
- Testimonials, FAQ accordion, and conversion-focused CTA
- Dark/light mode toggle with localStorage
- Responsive, mobile-optimized layout
- SEO-ready metadata and structured data

## Tech Stack
- React (Vite)
- Tailwind CSS
- Material UI
- Framer Motion
- Three.js + React Three Fiber + Drei
- Lucide React icons
- Recharts

## Getting Started
1. Install dependencies
   - `npm install`
2. Start development server
   - `npm run dev`
3. Build for production
   - `npm run build`
4. Preview production build
   - `npm run preview`

## Customization Guide
- **Branding**: Update copy and data in `src/data` (features, pricing, testimonials, FAQs).
- **Theme**: Adjust colors and fonts in `tailwind.config.js` and `src/styles/muiTheme.js`.
- **Navigation**: Edit nav items in `src/data/navigation.js`.
- **Hero 3D**: Tweak the 3D mesh in `src/components/Hero3D.jsx`.
- **Integrations**: Update cards in `src/data/integrations.js`.
- **Pricing**: Modify plan details in `src/data/pricing.js`.
- **SEO**: Update metadata in `index.html`.

## Deployment
This project is compatible with Netlify and Vercel out of the box.
- Build command: `npm run build`
- Output directory: `dist`

## Folder Structure
```
src
  animations
  assets
    icons
    images
  components
  contexts
  data
  hooks
  layout
  pages
  sections
  styles
  ui
  utils
```

## LocalStorage Demo Features
- Dark/light mode toggle: `neura-theme`
- Newsletter form: `neura-newsletter`
- Pricing plan selection: `neura-pricing-plan`

---
If you need help customizing the template for your product, feel free to reach out.

