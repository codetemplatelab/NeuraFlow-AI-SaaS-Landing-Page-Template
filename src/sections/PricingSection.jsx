import { SectionHeading } from '../components/SectionHeading'
import { PricingCard } from '../components/PricingCard'
import { pricingComparison, pricingPlans } from '../data/pricing'
import { useLocalStorage } from '../hooks/useLocalStorage'

export const PricingSection = () => {
  const [selectedPlan, setSelectedPlan] = useLocalStorage(
    'neura-pricing-plan',
    'Pro',
  )

  return (
    <section id="pricing" className="section">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Pricing"
          title="Launch with confidence"
          description="Three plans with a premium feel. Use localStorage to demo plan selection in real time."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {pricingPlans.map((plan) => (
            <PricingCard
              key={plan.name}
              plan={plan}
              selected={selectedPlan === plan.name}
              onSelect={setSelectedPlan}
            />
          ))}
        </div>

        <div className="mt-12 overflow-x-auto rounded-3xl border border-ink-200/60 bg-white/80 shadow-soft dark:border-white/10 dark:bg-white/5">
          <div className="min-w-[640px]">
            <div className="grid grid-cols-4 gap-4 border-b border-ink-200/60 px-6 py-4 text-sm font-semibold text-slate-600 dark:border-white/10 dark:text-slate-300">
              <div>Features</div>
              <div>Starter</div>
              <div>Pro</div>
              <div>Enterprise</div>
            </div>
            <div className="divide-y divide-ink-200/60 text-sm dark:divide-white/10">
              {pricingComparison.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-4 gap-4 px-6 py-4 text-slate-600 dark:text-slate-300"
                >
                  <div className="font-semibold text-slate-900 dark:text-white">
                    {row.feature}
                  </div>
                  <div>{row.starter}</div>
                  <div className="text-neon-400">{row.pro}</div>
                  <div>{row.enterprise}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
