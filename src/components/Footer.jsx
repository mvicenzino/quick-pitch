import { Linkedin, Twitter } from 'lucide-react'
import TreeLogo from './TreeLogo'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Features', href: '#features' },
  { label: 'Services', href: '#services' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Contact', href: '#contact' },
]

export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo + tagline */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="flex items-center gap-1.5">
              <TreeLogo className="h-6 w-6" />
              <span className="text-lg font-bold tracking-tight">
                One<span className="text-accent-blue">Tree</span>
              </span>
            </a>
            <p className="text-sm text-slate-500">
              Enterprise content management, reimagined.
            </p>
          </div>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                className="text-sm text-slate-500 hover:text-white transition-colors"
              >
                {label}
              </a>
            ))}
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all"
            >
              <Linkedin className="h-4 w-4" />
            </a>
            <a
              href="#"
              aria-label="Twitter"
              className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-white hover:border-white/20 transition-all"
            >
              <Twitter className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-5 border-t border-white/5 text-center">
          <p className="text-xs text-slate-600">
            &copy; 2026 OneTree Technologies, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
