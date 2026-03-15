import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { useCases } from '../data/useCases'
import { iconMap } from '../constants/iconMap'

export const UseCasesSection = () => (
  <section id="use-cases" className="section bg-ink-50 dark:bg-midnight">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="AI use cases"
        title="Deploy intelligence across every workflow"
        description="From support to security, orchestrate high-impact AI outcomes in the areas that matter most."
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {useCases.map((useCase, index) => {
          const Icon = iconMap[useCase.icon]
          return (
            <motion.div
              key={useCase.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-ink-200/60 bg-white/80 p-6 shadow-soft dark:border-white/10 dark:bg-white/5"
            >
              <div className="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20 bg-gradient-to-br from-ink-500/30 via-slateblue-500/30 to-neon-400/20" />
              <div className="relative space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-500/10 text-slateblue-500">
                  {Icon && <Icon size={20} />}
                </div>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slateblue-500">
                  {useCase.tag}
                </p>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {useCase.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">
                  {useCase.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)
