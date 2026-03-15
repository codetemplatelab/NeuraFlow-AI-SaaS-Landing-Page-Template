import { motion } from 'framer-motion'
import { integrations } from '../data/integrations'
import { iconMap } from '../constants/iconMap'
import { SectionHeading } from '../components/SectionHeading'

export const IntegrationsSection = () => (
  <section id="integrations" className="section">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="Integrations"
        title="Connect to the tools your team already trusts"
        description="Prebuilt connectors help you orchestrate your entire stack. Every integration card includes hover motion and accent gradients."
      />
      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {integrations.map((integration, index) => {
          const Icon = iconMap[integration.icon]
          return (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.04 }}
              viewport={{ once: true, amount: 0.2 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-soft dark:border-white/10 dark:bg-white/5"
            >
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-20 bg-gradient-to-br ${integration.accent}`}
              />
              <div className="relative space-y-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/80 text-slate-900 shadow-sm dark:bg-white/10 dark:text-white">
                  {Icon && <Icon size={20} />}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                  {integration.name}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-200">
                  {integration.description}
                </p>
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)

