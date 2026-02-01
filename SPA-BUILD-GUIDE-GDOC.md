# How to Build & Deploy a Modern Single Page App

A step-by-step guide for creating a single page application with React, Vite, and Tailwind CSS — then deploying it live with GitHub and Vercel.

---

## Overview

This guide walks you through the complete process of building a modern, dark-themed marketing website as a single page app. By the end, you will have a fully responsive site with animations, a theme toggle, and a contact form — deployed live on the internet.

**What you will build:**

- A responsive single page app with multiple sections (hero, features, pricing, contact, etc.)
- Dark and light theme support with a toggle button
- Smooth scroll navigation
- Scroll-triggered animations
- A validated contact form
- Deployed to Vercel with automatic deploys on every GitHub push

**Tech stack:**

- React 18 (UI framework)
- Vite (build tool and dev server)
- Tailwind CSS v4 (utility-first styling)
- Framer Motion (animations)
- Lucide React (icons)
- React Hook Form (form handling)

---

## Prerequisites

Before starting, make sure you have the following installed and set up.

**Required software:**

- Node.js version 18 or higher — download from nodejs.org
- Git — download from git-scm.com
- A GitHub account — sign up at github.com
- A Vercel account — sign up at vercel.com (use your GitHub account for easiest setup)

**Recommended tools:**

- GitHub CLI (gh) — allows creating repos from the terminal
  - macOS: brew install gh
  - Windows: winget install GitHub.cli
  - After installing, run: gh auth login

- Vercel CLI — allows deploying from the terminal
  - Install: npm install -g vercel
  - Then run: vercel login

---

## Step 1: Scaffold the Project

Open your terminal and run the following command to create a new React project using Vite:

    npm create vite@latest my-site -- --template react

Then enter the project folder and install the base dependencies:

    cd my-site
    npm install

This gives you a working React app with hot module replacement out of the box. Replace "my-site" with whatever you want to name your project. Use lowercase with hyphens (for example, "my-company-site").

---

## Step 2: Install Additional Dependencies

Install the packages you will need for styling, animations, icons, and forms:

    npm install tailwindcss @tailwindcss/vite framer-motion lucide-react react-hook-form

Here is what each package does:

- tailwindcss — Utility-first CSS framework for rapid styling
- @tailwindcss/vite — Tailwind's official Vite plugin (version 4)
- framer-motion — Scroll animations and page transitions
- lucide-react — Clean, modern icon library
- react-hook-form — Lightweight form validation

---

## Step 3: Configure Tailwind CSS

Open the file called vite.config.js in your project root and replace its contents with:

    import { defineConfig } from 'vite'
    import react from '@vitejs/plugin-react'
    import tailwindcss from '@tailwindcss/vite'

    export default defineConfig({
      plugins: [
        react(),
        tailwindcss(),
      ],
    })

That is the entire configuration. Tailwind v4 with the Vite plugin does not require a tailwind.config.js or postcss.config.js file. All theme customization is done directly in your CSS file.

---

## Step 4: Set Up Global Styles

Open src/index.css and replace everything with:

    @import "tailwindcss";

    @theme {
      --font-sans: "Inter", ui-sans-serif, system-ui, sans-serif;
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

    .gradient-text {
      background: linear-gradient(135deg, #3b82f6, #6366f1, #06b6d4);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    .glass-card {
      background: rgba(255, 255, 255, 0.05);
      backdrop-filter: blur(24px);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }

The @theme block defines custom colors you can use as Tailwind classes (for example, bg-navy-950 or text-accent-blue). The .gradient-text class creates the blue-to-violet gradient effect on text. The .glass-card class creates a frosted glass card look.

Next, add the Inter font to your index.html file. Open index.html and add these lines inside the head tag:

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />

Finally, clean up the default boilerplate files that Vite created:

    rm src/App.css src/assets/react.svg public/vite.svg

---

## Step 5: Create the App Shell

Your app has two core files: the entry point and the layout.

**src/main.jsx** — This is the entry point. It renders your App component into the page:

    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import './index.css'
    import App from './App.jsx'

    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )

**src/App.jsx** — This is your page layout. It imports and stacks all your sections:

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

Add or remove sections as needed. Each section is its own file in the components folder.

---

## Step 6: Build Your Components

Create the components directory:

    mkdir -p src/components

Every section follows the same basic pattern. Here is the template:

    import { motion } from 'framer-motion'

    export default function SectionName() {
      return (
        <section id="section-id" className="py-14 md:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

            <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-10">
              Your <span className="gradient-text">Heading</span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {/* Your cards or content here */}
            </div>

          </div>
        </section>
      )
    }

**Key patterns to use throughout your components:**

- Section padding: py-14 md:py-20 — gives vertical breathing room between sections
- Content container: max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 — centers content with responsive side padding
- Section heading: text-3xl sm:text-4xl font-extrabold mb-10 — consistent heading style
- Card grid: grid md:grid-cols-3 gap-6 — responsive columns
- Glass card: glass-card rounded-2xl p-7 — frosted card style
- Gradient text: gradient-text — applies the blue-violet gradient to text

**Navbar tips:**

The navbar is the most complex component. Key features to implement:

- Use fixed top-0 z-50 to keep it pinned to the top
- Track scroll position with useState and useEffect to add a blurred background after scrolling
- Add a mobile hamburger menu that slides in for small screens
- Use anchor links (href="#features") for navigation — they work automatically with scroll-behavior: smooth in your CSS

**Smooth scroll navigation:**

All nav links use anchor hrefs like #about, #features, and #contact. Each corresponding section needs a matching id attribute. Because we set scroll-behavior: smooth in the CSS, clicking a nav link automatically scrolls smoothly to that section. No JavaScript library needed.

---

## Step 7: Add Scroll Animations

Create a file at src/utils/animations.js with your animation variants:

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

To use these in a component, wrap elements with Framer Motion's motion components:

**Animate a single element on scroll:**

    <motion.h2
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      Your Heading
    </motion.h2>

**Stagger a grid of cards (each card animates in sequence):**

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

Setting viewport={{ once: true }} means each animation only plays once as you scroll down, which feels cleaner than replaying every time.

---

## Step 8: Add a Contact Form

Use React Hook Form for validation. Here is the pattern:

    import { useState } from 'react'
    import { useForm } from 'react-hook-form'

    export default function Contact() {
      const [submitted, setSubmitted] = useState(false)
      const { register, handleSubmit, reset, formState: { errors } } = useForm()

      const onSubmit = (data) => {
        console.log(data)
        setSubmitted(true)
        reset()
        setTimeout(() => setSubmitted(false), 5000)
      }

      return (
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('name', { required: 'Name is required' })}
            placeholder="Your name"
          />
          {errors.name && <p>{errors.name.message}</p>}

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
          {errors.email && <p>{errors.email.message}</p>}

          <textarea
            {...register('message', { required: 'Message is required' })}
            placeholder="Your message"
          />
          {errors.message && <p>{errors.message.message}</p>}

          <button type="submit">Send Message</button>

          {submitted && <p>Thank you! We will be in touch shortly.</p>}
        </form>
      )
    }

The register function connects each input to the form. Validation rules are passed as the second argument. Error messages display automatically when validation fails. For a production site, replace the console.log in onSubmit with an API call to your backend, Formspree, or a Vercel serverless function.

---

## Step 9: Add a Theme Toggle (Optional)

This adds a dark/light mode switch that persists across page reloads.

**Create src/hooks/useTheme.jsx:**

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

      const toggleTheme = () =>
        setTheme(prev => prev === 'dark' ? 'light' : 'dark')

      return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          {children}
        </ThemeContext.Provider>
      )
    }

    export default function useTheme() {
      return useContext(ThemeContext)
    }

IMPORTANT: This file must have a .jsx extension (not .js) because it contains JSX markup.

**Wrap your App with the provider:**

    import { ThemeProvider } from './hooks/useTheme.jsx'

    export default function App() {
      return (
        <ThemeProvider>
          {/* all your sections */}
        </ThemeProvider>
      )
    }

**Add a toggle button in your Navbar:**

    import { Sun, Moon } from 'lucide-react'
    import useTheme from '../hooks/useTheme.jsx'

    // Inside your Navbar component:
    const { theme, toggleTheme } = useTheme()

    <button onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'light'
        ? <Moon className="h-5 w-5" />
        : <Sun className="h-5 w-5" />}
    </button>

**Add light theme overrides to your index.css:**

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

This approach works by toggling a "light" class on the HTML element. The CSS overrides remap dark-theme colors to light-theme equivalents. The user's choice is saved in localStorage so it persists across visits.

---

## Step 10: Test Locally

Start the development server:

    npm run dev

Open the URL shown in your terminal (usually http://localhost:5173).

**Testing checklist:**

- All sections render correctly
- Nav links scroll smoothly to each section
- Mobile menu opens and closes (resize browser below 768px)
- Theme toggle switches between light and dark
- Contact form shows errors for empty required fields
- Contact form validates email format
- Scroll animations trigger as you scroll down
- No errors in the browser console (right-click, Inspect, Console tab)

**Test the production build:**

    npm run build
    npm run preview

This creates the optimized dist/ folder and serves it locally. This is exactly what Vercel will deploy.

---

## Step 11: Push to GitHub

**Option A — Using GitHub CLI (recommended):**

    git init
    gh repo create my-site-name --public --source=. --remote=origin
    git add .
    git commit -m "Initial commit: my site description"
    git push -u origin main

This creates the repo, links it, and pushes in one flow.

**Option B — Manual setup:**

1. Go to github.com/new
2. Create a new repository (do NOT check "Add a README" or any other initialization option)
3. Copy the repository URL
4. Run these commands:

    git init
    git add .
    git commit -m "Initial commit: my site description"
    git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
    git branch -M main
    git push -u origin main

**Files you should NOT commit:**

The .gitignore file from Vite already handles most of this, but double check that these are never committed:

- node_modules/ (installed dependencies — very large)
- dist/ (build output — Vercel builds this itself)
- .env files (secrets and API keys)
- .vercel/ directory (local Vercel config)

---

## Step 12: Deploy to Vercel

**Option A — Vercel CLI (fastest):**

    npm install -g vercel
    vercel login
    vercel --prod --yes

Vercel automatically detects that you are using Vite, installs dependencies, runs npm run build, and deploys the dist/ folder to its global CDN. It also connects to your GitHub repo so that every future push to main triggers a new deploy automatically.

**Option B — Vercel Dashboard:**

1. Go to vercel.com/new
2. Click "Import Git Repository"
3. Select your repository from the list
4. Vercel auto-detects the framework as Vite — leave all defaults
5. Click "Deploy"

**What happens after deployment:**

- You get a live URL like https://your-project.vercel.app
- SSL/HTTPS is automatic
- Every push to the main branch triggers a new deployment
- Preview deployments are created for pull requests

---

## Step 13: Custom Domain (Optional)

1. Go to your project on vercel.com
2. Click Settings, then Domains
3. Add your domain (for example, www.yourcompany.com)
4. Vercel shows the DNS records you need to add at your domain registrar
5. Once DNS propagates, SSL is provisioned automatically

---

## Quick Reference: Common Commands

**Development:**

    npm run dev — Start the dev server with hot reload
    npm run build — Create a production build
    npm run preview — Preview the production build locally

**Git:**

    git add . — Stage all changes
    git commit -m "message" — Create a commit
    git push — Push to GitHub (triggers Vercel auto-deploy)
    git status — See what has changed

**Vercel:**

    vercel — Deploy a preview
    vercel --prod — Deploy to production
    vercel domains add yourdomain.com — Add a custom domain

**GitHub CLI:**

    gh repo create NAME --public — Create a new public repo
    gh repo view --web — Open the repo in your browser

---

## Project Structure Reference

    my-site/
      index.html              — HTML shell with fonts and meta tags
      package.json            — Dependencies and npm scripts
      vite.config.js          — Vite and Tailwind plugin configuration
      public/
        favicon.svg           — Browser tab icon
      src/
        main.jsx              — React entry point
        App.jsx               — Page layout importing all sections
        index.css             — Tailwind config, custom theme, light mode overrides
        components/
          Navbar.jsx          — Sticky navigation with mobile menu
          Hero.jsx            — Hero section with headline and call-to-action buttons
          Features.jsx        — Product feature cards in a grid
          About.jsx           — Company information and stats
          Services.jsx        — Service offering columns
          Testimonials.jsx    — Client testimonial quote cards
          Pricing.jsx         — Pricing tier comparison cards
          CtaBanner.jsx       — Full-width call-to-action banner
          Contact.jsx         — Contact form with validation
          Footer.jsx          — Footer with links and copyright
        hooks/
          useScrollspy.js     — Tracks which section is in view for active nav links
          useTheme.jsx        — Dark and light theme context provider
        utils/
          animations.js       — Reusable Framer Motion animation variants

---

## Tips for Success

**Start with your content.** Write all your section headings and body copy before you start coding components. The design should follow the content, not the other way around.

**Test on mobile early and often.** Resize your browser to 375px width while building. Tailwind's responsive prefixes (md: and lg:) build upward from mobile, so the mobile layout is your base.

**Keep sections independent.** Each component should be completely self-contained with no dependencies on other sections. This makes it easy to reorder, duplicate, add, or remove sections without breaking anything.

**Use consistent spacing.** Stick to py-14 md:py-20 for section padding and mb-10 for heading spacing throughout. Consistency makes the page feel polished.

**Commit early and often.** Make small commits with clear messages after completing each section. This makes it easy to roll back if something breaks.

**Check Vercel build logs if a deploy fails.** Click on the failed deployment in the Vercel dashboard to see the full build output and error messages.

**Use Claude to generate components.** You can paste this guide into Claude and ask it to generate specific sections. For example: "Following the patterns in this guide, create a Testimonials section with 3 quote cards." Claude will follow the established patterns for consistency.
