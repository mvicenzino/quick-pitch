import { motion } from 'framer-motion'
import { ArrowRight, Play } from 'lucide-react'
import { fadeInUp, fadeInRight, staggerContainer } from '../utils/animations'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden mesh-gradient">
      {/* Animated gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-accent-blue/10 blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-accent-violet/10 blur-3xl animate-pulse [animation-delay:1s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-accent-cyan/5 blur-3xl animate-pulse [animation-delay:2s]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-20">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* Left content */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="mb-4">
              <span className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-medium bg-accent-blue/10 text-accent-blue border border-accent-blue/20">
                Introducing QuickPitch
              </span>
            </motion.div>

            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight tracking-tight"
            >
              Your Content.{' '}
              <span className="gradient-text">Organized. Reusable. Powerful.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="mt-6 text-lg sm:text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed"
            >
              QuickPitch transforms how financial and enterprise teams manage,
              share, and reuse critical content across Microsoft Office — saving
              hours every week.
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
            >
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-accent-blue to-accent-violet text-sm font-semibold text-white hover:shadow-lg hover:shadow-accent-blue/25 transition-all"
              >
                Request a Demo
                <ArrowRight className="h-4 w-4" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full border border-white/15 text-sm font-semibold text-slate-300 hover:bg-white/5 hover:text-white transition-all"
              >
                <Play className="h-4 w-4" />
                See How It Works
              </a>
            </motion.div>
          </motion.div>

          {/* Right side - abstract product illustration */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            animate="visible"
            className="hidden lg:flex justify-center"
          >
            <div className="relative w-full max-w-lg">
              {/* Main card */}
              <div className="glass-card rounded-2xl p-8 relative z-10">
                <div className="space-y-4">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-3 h-3 rounded-full bg-red-400/80" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                    <div className="w-3 h-3 rounded-full bg-green-400/80" />
                  </div>
                  {/* Simulated content rows */}
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-blue/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded bg-accent-blue/50" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-white/15 rounded-full w-3/4" />
                      <div className="h-2 bg-white/8 rounded-full w-1/2 mt-2" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-accent-blue/20 text-xs text-accent-blue">
                      Published
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-violet/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded bg-accent-violet/50" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-white/15 rounded-full w-2/3" />
                      <div className="h-2 bg-white/8 rounded-full w-2/5 mt-2" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-accent-cyan/20 text-xs text-accent-cyan">
                      Tagged
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-accent-cyan/20 flex items-center justify-center">
                      <div className="w-5 h-5 rounded bg-accent-cyan/50" />
                    </div>
                    <div className="flex-1">
                      <div className="h-3 bg-white/15 rounded-full w-4/5" />
                      <div className="h-2 bg-white/8 rounded-full w-1/3 mt-2" />
                    </div>
                    <div className="px-3 py-1 rounded-full bg-green-500/20 text-xs text-green-400">
                      Secured
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating accent cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -right-6 glass-card rounded-xl p-4 z-20"
              >
                <div className="text-2xl font-bold gradient-text">1,200+</div>
                <div className="text-xs text-slate-400">Content items managed</div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-4 -left-6 glass-card rounded-xl p-4 z-20"
              >
                <div className="text-2xl font-bold text-accent-cyan">4.2 hrs</div>
                <div className="text-xs text-slate-400">Saved per week</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
