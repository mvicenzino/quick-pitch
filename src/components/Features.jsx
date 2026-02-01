import { motion } from 'framer-motion'
import {
  Library,
  MonitorSmartphone,
  Tags,
  FileUp,
  Lock,
  ShieldCheck,
} from 'lucide-react'
import { fadeInUp, staggerContainer } from '../utils/animations'

const features = [
  {
    icon: Library,
    title: 'Smart Content Library',
    description:
      'Organize tombstones, bios, case studies, and credentials in one searchable hub.',
  },
  {
    icon: MonitorSmartphone,
    title: 'Office-Native Integration',
    description:
      'Works directly inside Word, PowerPoint, and Excel — no context switching.',
  },
  {
    icon: Tags,
    title: 'Tag & Categorize',
    description:
      'Powerful tagging system to find the right content in seconds.',
  },
  {
    icon: FileUp,
    title: 'Publish from Active Files',
    description:
      'Create and publish content directly from your working document.',
  },
  {
    icon: Lock,
    title: 'Granular Access Control',
    description:
      'Role-based permissions ensure the right people see the right content.',
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise Security',
    description:
      'Bank-grade security model with full audit trails.',
  },
]

export default function Features() {
  return (
    <section id="features" className="relative py-14 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            Everything You Need to{' '}
            <span className="gradient-text">Master Your Content</span>
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto leading-relaxed">
            QuickPitch delivers the tools your team needs to organize, find, and
            reuse content with confidence.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {features.map(({ icon: Icon, title, description }) => (
            <motion.div
              key={title}
              variants={fadeInUp}
              className="glass-card glass-card-hover rounded-2xl p-7 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-blue/20 to-accent-violet/20 flex items-center justify-center mb-4 group-hover:from-accent-blue/30 group-hover:to-accent-violet/30 transition-all">
                <Icon className="h-6 w-6 text-accent-blue" />
              </div>
              <h3 className="text-lg font-bold mb-2">{title}</h3>
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
