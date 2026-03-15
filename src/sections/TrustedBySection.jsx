import { FadeIn } from '../animations/FadeIn'
import { LogoMarquee } from '../components/LogoMarquee'

export const TrustedBySection = () => (
  <section className="section" aria-label="Trusted by">
    <div className="mx-auto max-w-6xl px-6">
      <FadeIn className="space-y-6">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
          Trusted by teams shipping AI at scale
        </p>
        <LogoMarquee />
      </FadeIn>
    </div>
  </section>
)

