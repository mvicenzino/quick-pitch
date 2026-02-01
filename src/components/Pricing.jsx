import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { fadeInUp, staggerContainer } from '../utils/animations'

const plans = [
  {
    name: 'Starter',
    description: 'For small teams getting started',
    features: [
      'Up to 25 users',
      'Core content library',
      'Office add-in',
      'Email support',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'For growing organizations',
    features: [
      'Up to 200 users',
      'Advanced tagging & search',
      'Custom categories',
      'Priority support',
    ],
    highlighted: true,
  },
  {
    name: 'Enterprise',
    description: 'For large institutions',
    features: [
      'Unlimited users',
      'SSO & advanced security',
      'Custom integrations',
      'Dedicated account manager',
    ],
    highlighted: false,
  },
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Simple, <span className="gradient-text">Transparent Pricing</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Choose the plan that fits your organization. All plans include the
            full QuickPitch platform.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-6 items-start"
        >
          {plans.map(({ name, description, features, highlighted }) => (
            <motion.div
              key={name}
              variants={fadeInUp}
              className={`rounded-2xl p-8 relative transition-all duration-300 ${
                highlighted
                  ? 'glass-card border-accent-blue/30 border shadow-lg shadow-accent-blue/10 md:-mt-4 md:mb-[-16px]'
                  : 'glass-card glass-card-hover'
              }`}
            >
              {highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-gradient-to-r from-accent-blue to-accent-violet text-white">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold mb-2">{name}</h3>
                <p className="text-sm text-slate-400">{description}</p>
              </div>

              <ul className="space-y-3 mb-6">
                {features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-accent-blue shrink-0" />
                    <span className="text-sm text-slate-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className={`block text-center py-3 rounded-full text-sm font-semibold transition-all ${
                  highlighted
                    ? 'bg-gradient-to-r from-accent-blue to-accent-violet text-white hover:shadow-lg hover:shadow-accent-blue/25'
                    : 'border border-white/15 text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                Contact Us for Pricing
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
