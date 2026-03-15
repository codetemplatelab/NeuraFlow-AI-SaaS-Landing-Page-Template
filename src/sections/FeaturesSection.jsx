import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { features } from '../data/features'
import { iconMap } from '../constants/iconMap'

export const FeaturesSection = () => (
  <section id="features" className="section">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="Features"
        title="Everything you need to launch an AI automation platform"
        description="A premium feature set crafted for modern SaaS teams. Every section is customizable and optimized for conversion."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = iconMap[feature.icon]
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="group rounded-3xl border border-ink-200/60 bg-white/80 p-6 shadow-soft transition-all dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slateblue-500/10 text-slateblue-500">
                {Icon && <Icon size={22} />}
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-900 dark:text-white">
                {feature.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {feature.description}
              </p>
              <div className="mt-6 h-1 w-12 rounded-full bg-neon-400/70 transition-all group-hover:w-20" />
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)
