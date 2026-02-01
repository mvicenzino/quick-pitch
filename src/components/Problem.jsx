import { motion } from 'framer-motion'
import { Clock, FolderSearch, ShieldAlert, Sparkles } from 'lucide-react'
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from '../utils/animations'

const painPoints = [
  {
    icon: Clock,
    text: 'Teams waste hours recreating pitch decks and presentations',
  },
  {
    icon: FolderSearch,
    text: 'Critical content scattered across drives, emails, and desktops',
  },
  {
    icon: ShieldAlert,
    text: 'No control over who shares what — compliance risk grows',
  },
]

export default function Problem() {
  return (
    <section className="relative py-14 md:py-20" id="problem">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl sm:text-4xl font-extrabold">
            The Content <span className="gradient-text">Challenge</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-start">
          {/* Pain points */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-5"
          >
            {painPoints.map(({ icon: Icon, text }, i) => (
              <motion.div
                key={i}
                variants={fadeInLeft}
                className="glass-card rounded-2xl p-6 flex items-start gap-5"
              >
                <div className="shrink-0 w-12 h-12 rounded-xl bg-red-500/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-red-400" />
                </div>
                <p className="text-slate-300 text-base leading-relaxed pt-1">
                  {text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Solution */}
          <motion.div
            variants={fadeInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="glass-card rounded-2xl p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent-blue/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-accent-blue" />
                </div>
                <h3 className="text-xl font-bold">The QuickPitch Solution</h3>
              </div>
              <p className="text-slate-400 leading-relaxed mb-4">
                QuickPitch gives your teams a single, secure hub for every piece
                of reusable content — tombstones, bios, case studies, and
                credentials — all accessible directly inside Microsoft Office.
              </p>
              <p className="text-slate-400 leading-relaxed">
                No more digging through shared drives or outdated folders.
                Publish once, reuse everywhere, and maintain full control over
                who accesses what.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
