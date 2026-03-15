import { SectionHeading } from '../components/SectionHeading'
import { ScreenshotCarousel } from '../components/ScreenshotCarousel'
import { FadeIn } from '../animations/FadeIn'

export const ProductDemoSection = () => (
  <section id="demo" className="section bg-slate-950">
    <div className="mx-auto max-w-6xl px-6 text-white">
      <SectionHeading
        eyebrow="Product demo"
        title="A cinematic AI operations dashboard"
        description="Showcase your product with animated charts, KPI summaries, and a modal preview that feels production-ready."
        eyebrowClassName="border-white/10 bg-white/10 text-slate-200"
        titleClassName="text-white"
        descriptionClassName="text-slate-300"
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <FadeIn>
          <ScreenshotCarousel />
        </FadeIn>

        <FadeIn className="space-y-6">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              AI command panel
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-white">
              Monitor, orchestrate, and optimize in one place
            </h3>
            <p className="mt-3 text-sm text-slate-300">
              Provide stakeholders with real-time transparency. Highlight
              automation performance, risk alerts, and model accuracy from a
              single unified view.
            </p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {[
                ['Automation health', 'All systems green'],
                ['Active integrations', '24 synced tools'],
                ['Alerts', '2 low priority'],
                ['Monthly ROI', '+?12.4L'],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <p className="text-xs text-slate-400">{label}</p>
                  <p className="mt-2 text-lg font-semibold text-white">
                    {value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
              Demo ready
            </p>
            <p className="mt-3 text-sm text-slate-300">
              Replace with your own product screenshots, videos, or interactive
              walkthroughs. All assets are component-driven for fast editing.
            </p>
          </div>
        </FadeIn>
      </div>
    </div>
  </section>
)

