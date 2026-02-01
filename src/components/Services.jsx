import { motion } from 'framer-motion'
import { Rocket, Settings, HeadphonesIcon } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../utils/animations'

const services = [
  {
    icon: Rocket,
    title: 'Implementation & Onboarding',
    description:
      'White-glove setup tailored to your organization\'s content structure. We handle migration, configuration, and training so your team is productive from day one.',
  },
  {
    icon: Settings,
    title: 'Custom Configuration',
    description:
      'QuickPitch adapts to your industry artifacts — tombstones, deal sheets, profiles, and more. We configure categories, tags, and workflows to match how you work.',
  },
  {
    icon: HeadphonesIcon,
    title: 'Ongoing Support & Training',
    description:
      'Dedicated support with continuous product improvements. Our team is always available to ensure you\'re getting the most out of QuickPitch.',
  },
]

export default function Services() {
  return (
    <section id="services" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            How We <span className="gradient-text">Work With You</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From onboarding to ongoing optimization, we partner with you every
            step of the way.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {services.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="glass-card glass-card-hover rounded-2xl p-7 text-center transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-blue/20 to-accent-cyan/20 flex items-center justify-center mx-auto mb-4">
                <Icon className="h-7 w-7 text-accent-cyan" />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">
                {description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
