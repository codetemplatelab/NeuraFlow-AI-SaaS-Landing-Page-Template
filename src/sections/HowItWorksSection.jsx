import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { iconMap } from '../constants/iconMap'

const steps = [
  {
    title: 'Connect your tools',
    description: 'Authenticate SaaS apps, import data sources, and set access controls.',
    icon: 'Plug',
  },
  {
    title: 'Automate workflows',
    description: 'Design AI-powered flows with triggers, approvals, and guardrails.',
    icon: 'Rocket',
  },
  {
    title: 'Analyze insights',
    description: 'Track impact, forecast outcomes, and optimize continuously.',
    icon: 'Gauge',
  },
]

export const HowItWorksSection = () => (
  <section id="workflow" className="section bg-slate-50 dark:bg-midnight">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="How it works"
        title="Three steps to intelligent automation"
        description="Your team can launch AI-driven workflows in minutes. The structure is simple, the execution is powerful."
      />
      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {steps.map((step, index) => {
          const Icon = iconMap[step.icon]
          return (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true, amount: 0.2 }}
              className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-soft dark:border-white/10 dark:bg-white/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-ink-500/10 text-ink-400">
                {Icon && <Icon size={20} />}
              </div>
              <p className="mt-5 text-xs font-semibold uppercase tracking-[0.3em] text-slate-500">
                Step {index + 1}
              </p>
              <h3 className="mt-3 text-xl font-semibold text-slate-900 dark:text-white">
                {step.title}
              </h3>
              <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
                {step.description}
              </p>
              <span className="absolute right-6 top-6 text-4xl font-semibold text-slate-200 dark:text-white/10">
                0{index + 1}
              </span>
            </motion.div>
          )
        })}
      </div>
    </div>
  </section>
)

