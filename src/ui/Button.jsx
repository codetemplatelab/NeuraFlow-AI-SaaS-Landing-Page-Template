import { cn } from '../utils/cn'

const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slateblue-400 focus-visible:ring-offset-2 dark:focus-visible:ring-neon-400 dark:focus-visible:ring-offset-midnight'

const variants = {
  primary:
    'bg-gradient-to-r from-ink-500 via-slateblue-500 to-neon-400 text-white shadow-glow hover:-translate-y-0.5 hover:brightness-110',
  secondary:
    'border border-ink-200 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-slateblue-300 hover:text-ink-600 dark:border-white/20 dark:bg-white/10 dark:text-white dark:hover:border-neon-400/60 dark:hover:text-white',
  ghost:
    'text-slate-600 hover:text-ink-600 dark:text-slate-300 dark:hover:text-white',
}

export const Button = ({ variant = 'primary', className, ...props }) => (
  <button
    className={cn(baseStyles, variants[variant], className)}
    {...props}
  />
)
