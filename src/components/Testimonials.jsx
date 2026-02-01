import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../utils/animations'

const testimonials = [
  {
    quote:
      'QuickPitch cut our pitch deck creation time in half. Our teams finally have a single source of truth for all reusable content.',
    author: 'Sarah Mitchell',
    title: 'Managing Director',
    company: 'Meridian Capital Partners',
  },
  {
    quote:
      'The Office integration is seamless. Our bankers never have to leave PowerPoint to find the latest tombstones and credentials.',
    author: 'James Chen',
    title: 'VP of Business Development',
    company: 'Atlas Financial Group',
  },
  {
    quote:
      'From a compliance perspective, the access controls and audit trails give us complete peace of mind. Exactly what we needed.',
    author: 'Rachel Torres',
    title: 'Chief Compliance Officer',
    company: 'Vanguard Advisory Services',
  },
]

export default function Testimonials() {
  return (
    <section className="relative py-14 md:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent-violet/3 to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map(({ quote, author, title, company }) => (
            <motion.div
              key={author}
              variants={fadeInUp}
              className="glass-card rounded-2xl p-7 relative"
            >
              <Quote className="h-8 w-8 text-accent-blue/20 absolute top-5 right-5" />
              <p className="text-slate-300 leading-relaxed mb-6 relative z-10">
                "{quote}"
              </p>
              <div>
                <div className="font-semibold">{author}</div>
                <div className="text-sm text-slate-500">
                  {title}, {company}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
