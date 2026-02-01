import { ThemeProvider } from './hooks/useTheme.jsx'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustedBy from './components/TrustedBy'
import Problem from './components/Problem'
import Features from './components/Features'
import About from './components/About'
import Services from './components/Services'
import Testimonials from './components/Testimonials'
import Pricing from './components/Pricing'
import CtaBanner from './components/CtaBanner'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-navy-950 light:bg-slate-50 transition-colors duration-300">
        <Navbar />
        <Hero />
        <TrustedBy />
        <Problem />
        <Features />
        <About />
        <Services />
        <Testimonials />
        <Pricing />
        <CtaBanner />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  )
}
