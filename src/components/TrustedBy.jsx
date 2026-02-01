import { motion } from 'framer-motion'
import { fadeIn } from '../utils/animations'
import { Building2, Landmark, TrendingUp, Briefcase, Shield, BarChart3 } from 'lucide-react'

const logos = [
  { icon: Landmark, label: 'Global Bank' },
  { icon: TrendingUp, label: 'Capital Markets' },
  { icon: Building2, label: 'Asset Management' },
  { icon: Briefcase, label: 'Advisory Group' },
  { icon: Shield, label: 'Insurance Corp' },
  { icon: BarChart3, label: 'Investment Partners' },
]

export default function TrustedBy() {
  return (
    <section className="relative py-8 border-y border-white/5">
      <motion.div
        variants={fadeIn}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-50px' }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <p className="text-center text-sm font-medium text-slate-500 uppercase tracking-widest mb-6">
          Trusted by leading financial institutions
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center gap-2 text-slate-600 opacity-50 hover:opacity-80 transition-opacity"
            >
              <Icon className="h-7 w-7" strokeWidth={1.5} />
              <span className="text-sm font-medium hidden sm:inline">{label}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
