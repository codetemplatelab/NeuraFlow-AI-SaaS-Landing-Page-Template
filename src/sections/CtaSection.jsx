import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/Button'

export const CtaSection = () => (
  <section className="section">
    <div className="mx-auto max-w-6xl px-6">
      <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white/80 p-10 shadow-soft dark:border-white/10 dark:bg-white/5">
        <div className="absolute inset-0 bg-cta-glow opacity-70" />
        <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <p className="pill">Ready to launch</p>
            <h2 className="text-3xl font-semibold text-slate-900 dark:text-white sm:text-4xl">
              Bring your AI SaaS to market in days, not months
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              NeuraFlow AI is a premium landing page template built for
              developers, founders, and agencies. Swap content, ship faster, and
              wow your customers.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4">
            <Button className="w-full justify-center sm:w-auto">
              Get early access
              <ArrowRight size={16} />
            </Button>
            <Button variant="secondary" className="w-full justify-center sm:w-auto">
              Talk to sales
            </Button>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Includes documentation, reusable components, and lifetime updates.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

