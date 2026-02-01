import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../utils/animations'

const stats = [
  { value: '30+', label: 'Years' },
  { value: '1000s', label: 'of Users' },
  { value: '100%', label: 'Office Integration' },
  { value: 'Enterprise', label: 'Grade Security' },
]

export default function About() {
  return (
    <section id="about" className="relative py-14 md:py-20 overflow-hidden">
      {/* Subtle background shift */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-blue/3 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            <span className="gradient-text">30+ Years</span> of Financial
            Technology Innovation
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed text-lg">
            Based in New York City, OneTree Technologies brings deep domain
            expertise in financial services technology. We've spent decades
            understanding how investment banks, asset managers, and advisory
            firms create and share critical business content — and we built
            QuickPitch to solve that challenge once and for all.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map(({ value, label }) => (
            <motion.div
              key={label}
              variants={fadeInUp}
              className="glass-card rounded-2xl p-7 text-center"
            >
              <div className="text-3xl sm:text-4xl font-extrabold gradient-text mb-2">
                {value}
              </div>
              <div className="text-sm text-slate-400 font-medium">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
