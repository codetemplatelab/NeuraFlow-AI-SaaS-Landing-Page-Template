import { cn } from '../utils/cn'

export const Badge = ({ className, ...props }) => (
  <span
    className={cn(
      'inline-flex items-center rounded-full border border-slate-200 bg-white/80 px-3 py-1 text-xs font-semibold uppercase tracking-[0.25em] text-slate-600 shadow-sm backdrop-blur dark:border-white/20 dark:bg-white/10 dark:text-slate-200',
      className,
    )}
    {...props}
  />
)
