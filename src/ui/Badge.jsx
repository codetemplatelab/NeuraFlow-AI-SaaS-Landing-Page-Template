import { cn } from '../utils/cn'

export const Badge = ({ className, ...props }) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full border border-ink-200/60 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-ink-700 shadow-sm backdrop-blur dark:border-ink-400/30 dark:bg-white/10 dark:text-slate-200',
      className,
    )}
    {...props}
  />
)
