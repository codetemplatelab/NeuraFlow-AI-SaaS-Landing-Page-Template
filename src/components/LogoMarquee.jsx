import { logos } from '../data/logos'

export const LogoMarquee = () => (
  <div className="relative overflow-hidden rounded-3xl border border-ink-200/60 bg-white/70 py-6 shadow-soft dark:border-white/10 dark:bg-white/5">
    <div className="flex w-[200%] animate-marquee items-center gap-12">
      {[...logos, ...logos].map((logo, index) => (
        <div
          key={`${logo}-${index}`}
          className="flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.2em] text-slate-500 dark:text-slate-300"
        >
          <span className="h-2 w-2 rounded-full bg-neon-400" />
          {logo}
        </div>
      ))}
    </div>
    <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-white/90 to-transparent dark:from-midnight/90" />
    <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-white/90 to-transparent dark:from-midnight/90" />
  </div>
)
