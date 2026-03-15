import { motion } from 'framer-motion'
import { SectionHeading } from '../components/SectionHeading'
import { Counter } from '../components/Counter'
import { metrics } from '../data/metrics'

export const MetricsSection = () => (
  <section id="metrics" className="section">
    <div className="mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="Metrics"
        title="Proof of real-world AI impact"
        description="Live performance indicators that showcase operational scale and speed."
        align="center"
      />
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.04 }}
            viewport={{ once: true, amount: 0.2 }}
            className="rounded-3xl border border-ink-200/60 bg-white/80 p-6 shadow-soft dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
              {metric.label}
            </p>
            <div className="mt-4 text-3xl font-semibold">
              <Counter
                value={metric.value}
                prefix={metric.prefix}
                suffix={metric.suffix}
                decimals={metric.decimals ?? 0}
                className="text-gradient"
              />
            </div>
            <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
              {metric.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
)
