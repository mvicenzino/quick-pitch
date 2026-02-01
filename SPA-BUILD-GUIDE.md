# How to Build & Deploy a Modern Single Page App

A step-by-step guide for creating a dark-themed SPA with React, Vite, and Tailwind CSS — then deploying it live with GitHub and Vercel.

This guide replicates the exact flow used to build the OneTree/QuickPitch site. Follow it to build your own single page marketing site from scratch.

---

## Table of Contents

1. [Prerequisites](#1-prerequisites)
2. [Scaffold the Project](#2-scaffold-the-project)
3. [Install Dependencies](#3-install-dependencies)
4. [Configure Tailwind CSS](#4-configure-tailwind-css)
5. [Set Up Global Styles](#5-set-up-global-styles)
6. [Create the App Shell](#6-create-the-app-shell)
7. [Build Your Components](#7-build-your-components)
8. [Add Animations](#8-add-animations)
9. [Add a Contact Form](#9-add-a-contact-form)
10. [Add a Theme Toggle](#10-add-a-theme-toggle)
11. [Test Locally](#11-test-locally)
12. [Push to GitHub](#12-push-to-github)
13. [Deploy to Vercel](#13-deploy-to-vercel)
14. [Custom Domain (Optional)](#14-custom-domain-optional)
15. [Project Structure Reference](#15-project-structure-reference)

---

## 1. Prerequisites

Install these before starting:

- **Node.js** (v18+): https://nodejs.org
- **Git**: https://git-scm.com
- **GitHub account**: https://github.com
- **Vercel account**: https://vercel.com (sign up with your GitHub account for easiest setup)

Optional but recommended:

- **GitHub CLI** (`gh`): Makes repo creation easier from the terminal
  ```bash
  # macOS
  brew install gh

  # Windows
  winget install GitHub.cli

  # Then authenticate
  gh auth login
  ```

- **Vercel CLI**: For deploying from the terminal
  ```bash
  npm install -g vercel
  vercel login
  ```

---

## 2. Scaffold the Project

Create a new React project using Vite:

```bash
npm create vite@latest my-site -- --template react
cd my-site
npm install
```

This gives you a working React app with hot module replacement (HMR) out of the box.

> **Naming tip**: Use lowercase with hyphens for the folder name (e.g., `my-company-site`). This becomes the default project name everywhere.

---

## 3. Install Dependencies

Install the packages you'll need:

```bash
npm install tailwindcss @tailwindcss/vite framer-motion lucide-react react-hook-form
```

| Package | What it does |
|---------|-------------|
| `tailwindcss` | Utility-first CSS framework |
| `@tailwindcss/vite` | Tailwind's Vite plugin (v4) |
| `framer-motion` | Scroll animations and transitions |
| `lucide-react` | Clean icon library |
| `react-hook-form` | Lightweight form validation |

---

## 4. Configure Tailwind CSS

### Update `vite.config.js`

Replace the contents with:

```js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
```

That's it — Tailwind v4 with the Vite plugin requires no `tailwind.config.js` or `postcss.config.js`. Configuration is done in CSS.

---

## 5. Set Up Global Styles

Replace `src/index.css` with:

```css
@import "tailwindcss";

@theme {
  --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;

  /* Define your custom colors */
  --color-navy-950: #0a0f1c;
  --color-navy-900: #111827;
  --color-accent-blue: #3b82f6;
  --color-accent-violet: #6366f1;
  --color-accent-cyan: #06b6d4;
}

html {
  scroll-behavior: smooth;
}

body {
  font-family: var(--font-sans);
  background-color: var(--color-navy-950);
  color: #f8fafc;
  -webkit-font-smoothing: antialiased;
}

/* Gradient text helper */
.gradient-text {
  background: linear-gradient(135deg, #3b82f6, #6366f1, #06b6d4);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Glassmorphism card */
.glass-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(24px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}
```

### Add the Inter font to `index.html`

Add these lines inside `<head>`:

```html
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
```

### Clean up boilerplate

Delete the default files you won't need:

```bash
rm src/App.css src/assets/react.svg public/vite.svg
rmdir src/assets 2>/dev/null
```

---

## 6. Create the App Shell

### `src/main.jsx` (entry point)

```jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

### `src/App.jsx` (page layout)

```jsx
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-h-screen bg-navy-950">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Contact />
      <Footer />
    </div>
  )
}
```

Add or remove sections as needed. Each section is its own component file.

---

## 7. Build Your Components

Create the components directory:

```bash
mkdir -p src/components
```

### Component pattern

Every section follows the same pattern:

```jsx
import { motion } from 'framer-motion'

export default function SectionName() {
  return (
    <section id="section-id" className="py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">
          Your <span className="gradient-text">Heading</span>
        </h2>

        {/* Section content */}
        <div className="grid md:grid-cols-3 gap-6">
          {/* Cards, content, etc. */}
        </div>

      </div>
    </section>
  )
}
```

Key patterns used throughout:

| Pattern | Classes | What it does |
|---------|---------|-------------|
| Section padding | `py-14 md:py-20` | Vertical space between sections |
| Content width | `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` | Centered, responsive container |
| Heading spacing | `mb-10` | Space below section title |
| Card grid | `grid md:grid-cols-3 gap-6` | Responsive column layout |
| Glass card | `glass-card rounded-2xl p-7` | Frosted glass card style |
| Gradient text | `gradient-text` | Blue-to-violet gradient on text |

### Navbar with scroll behavior

The navbar is the most complex component. Key features:
- Fixed position with `fixed top-0 z-50`
- Transparent at top, adds blur on scroll via a `scrolled` state
- Mobile hamburger menu with a slide-in drawer
- Active link tracking using an Intersection Observer or scroll position

```jsx
// Track scroll position for navbar background
const [scrolled, setScrolled] = useState(false)

useEffect(() => {
  const onScroll = () => setScrolled(window.scrollY > 20)
  window.addEventListener('scroll', onScroll, { passive: true })
  return () => window.removeEventListener('scroll', onScroll)
}, [])
```

### Smooth scroll navigation

All nav links use anchor hrefs (`#about`, `#features`, etc.) which work automatically because we set `scroll-behavior: smooth` in CSS. Just make sure each section has a matching `id`:

```jsx
// Nav link
<a href="#features">Features</a>

// Section
<section id="features">...</section>
```

---

## 8. Add Animations

### Create animation variants

Create `src/utils/animations.js`:

```js
export const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}
```

### Use them in components

```jsx
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

// Animate a section heading on scroll
<motion.h2
  variants={fadeInUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true, margin: '-80px' }}
>
  Your Heading
</motion.h2>

// Stagger a grid of cards
<motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  className="grid md:grid-cols-3 gap-6"
>
  {items.map(item => (
    <motion.div key={item.id} variants={fadeInUp}>
      {/* card content */}
    </motion.div>
  ))}
</motion.div>
```

The `viewport={{ once: true }}` prop means animations only play once as you scroll down, not every time the element enters/exits the viewport.

---

## 9. Add a Contact Form

Use React Hook Form for validation:

```jsx
import { useForm } from 'react-hook-form'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, reset, formState: { errors } } = useForm()

  const onSubmit = (data) => {
    console.log(data) // Replace with your API call
    setSubmitted(true)
    reset()
    setTimeout(() => setSubmitted(false), 5000)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input
        {...register('email', {
          required: 'Email is required',
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: 'Enter a valid email',
          },
        })}
        placeholder="you@company.com"
      />
      {errors.email && <p className="text-red-400 text-xs">{errors.email.message}</p>}

      <button type="submit">Send</button>
    </form>
  )
}
```

For a real site, wire the `onSubmit` to a backend (Vercel serverless function, Formspree, etc.).

---

## 10. Add a Theme Toggle

### Create `src/hooks/useTheme.jsx`

```jsx
import { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light'
    }
    return 'light'
  })

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'light') {
      root.classList.add('light')
    } else {
      root.classList.remove('light')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => setTheme(prev => prev === 'dark' ? 'light' : 'dark')

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default function useTheme() {
  return useContext(ThemeContext)
}
```

### Wrap your app

```jsx
// App.jsx
import { ThemeProvider } from './hooks/useTheme.jsx'

export default function App() {
  return (
    <ThemeProvider>
      {/* your sections */}
    </ThemeProvider>
  )
}
```

### Add the toggle button (in Navbar)

```jsx
import { Sun, Moon } from 'lucide-react'
import useTheme from '../hooks/useTheme.jsx'

const { theme, toggleTheme } = useTheme()

<button onClick={toggleTheme} aria-label="Toggle theme">
  {theme === 'light' ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
</button>
```

### Add light theme CSS overrides in `index.css`

```css
html.light body {
  background-color: #f8fafc;
  color: #0f172a;
}

html.light .glass-card {
  background: rgba(255, 255, 255, 0.7);
  border: 1px solid rgba(0, 0, 0, 0.08);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
}

html.light .text-slate-300 { color: #475569; }
html.light .text-slate-400 { color: #64748b; }
html.light .text-slate-500 { color: #94a3b8; }
html.light .bg-navy-950 { background-color: #f8fafc; }
html.light .border-white\/5 { border-color: rgba(0, 0, 0, 0.06); }
html.light .border-white\/10 { border-color: rgba(0, 0, 0, 0.08); }
```

---

## 11. Test Locally

```bash
# Start dev server with hot reload
npm run dev
```

Open the URL shown (usually http://localhost:5173).

### Testing checklist

- [ ] All sections render correctly
- [ ] Nav links scroll smoothly to each section
- [ ] Mobile menu opens/closes (resize browser to <768px)
- [ ] Theme toggle switches between light and dark
- [ ] Contact form validates required fields and email format
- [ ] Animations trigger on scroll
- [ ] No console errors

### Production build test

```bash
npm run build
npm run preview
```

This builds to `dist/` and serves it locally — what Vercel will deploy.

---

## 12. Push to GitHub

### Option A: Using GitHub CLI (recommended)

```bash
# Initialize git
git init

# Create remote repo and link it
gh repo create my-site-name --public --source=. --remote=origin

# Stage and commit
git add .
git commit -m "Initial commit: project description here"

# Push
git push -u origin main
```

### Option B: Manual

1. Go to https://github.com/new
2. Create a new repo (don't initialize with README)
3. Copy the remote URL, then:

```bash
git init
git add .
git commit -m "Initial commit: project description here"
git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git branch -M main
git push -u origin main
```

### What NOT to commit

The `.gitignore` from Vite already excludes `node_modules/` and `dist/`. Make sure you never commit:
- `node_modules/`
- `dist/`
- `.env` files with secrets
- `.vercel/` directory

---

## 13. Deploy to Vercel

### Option A: Vercel CLI (fastest)

```bash
# Install if needed
npm install -g vercel

# Login (one-time)
vercel login

# Deploy to production
vercel --prod --yes
```

Vercel auto-detects Vite, installs dependencies, runs `npm run build`, and deploys the `dist/` folder. It also connects to your GitHub repo for automatic deploys on every push.

### Option B: Vercel Dashboard

1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Select your repo
4. Vercel auto-detects the framework (Vite) — leave defaults as-is
5. Click **Deploy**

### What happens

- Vercel runs `npm install` and `npm run build`
- The `dist/` folder is deployed to a global CDN
- You get a URL like `https://your-project.vercel.app`
- Every push to `main` triggers a new deploy automatically

---

## 14. Custom Domain (Optional)

1. Go to your project on https://vercel.com
2. Click **Settings** > **Domains**
3. Add your domain (e.g., `www.yoursite.com`)
4. Vercel will show DNS records to add at your registrar
5. SSL is automatic

---

## 15. Project Structure Reference

```
my-site/
  index.html              # HTML shell (fonts, meta tags, favicon)
  package.json            # Dependencies and scripts
  vite.config.js          # Vite + Tailwind plugin config
  public/
    favicon.svg           # Site icon
  src/
    main.jsx              # React entry point
    App.jsx               # Page layout (imports all sections)
    index.css             # Tailwind directives + custom theme + light mode
    components/
      Navbar.jsx          # Sticky nav with mobile menu
      Hero.jsx            # Above-the-fold headline + CTAs
      Features.jsx        # Product feature cards grid
      About.jsx           # Company info + stats
      Services.jsx        # Service offering columns
      Testimonials.jsx    # Client quote cards
      Pricing.jsx         # Pricing tier cards
      CtaBanner.jsx       # Full-width call-to-action
      Contact.jsx         # Contact form + company info
      Footer.jsx          # Links, copyright, socials
    hooks/
      useScrollspy.js     # Active nav link tracking
      useTheme.jsx        # Dark/light theme context
    utils/
      animations.js       # Framer Motion animation variants
```

---

## Quick Reference: Common Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Production build
npm run preview          # Preview production build locally

# Git
git add .                # Stage all changes
git commit -m "message"  # Commit
git push                 # Push to GitHub (triggers Vercel deploy)

# Vercel
vercel                   # Deploy preview
vercel --prod            # Deploy to production
vercel domains add X     # Add custom domain

# GitHub CLI
gh repo create NAME      # Create new repo
gh repo view --web       # Open repo in browser
```

---

## Tips

- **Start with content**: Write your section headings and copy before building components. The design follows the content.
- **Mobile first**: Test at 375px width regularly. Tailwind's responsive prefixes (`md:`, `lg:`) build up from mobile.
- **Keep sections independent**: Each component should be self-contained. This makes it easy to reorder, add, or remove sections.
- **Use the glassmorphism pattern**: `glass-card` + `rounded-2xl` + `p-7` gives you a consistent card style everywhere.
- **Commit often**: Small commits with clear messages make it easy to roll back if something breaks.
- **Check Vercel build logs**: If a deploy fails, click the deployment in the Vercel dashboard to see the full build output.
