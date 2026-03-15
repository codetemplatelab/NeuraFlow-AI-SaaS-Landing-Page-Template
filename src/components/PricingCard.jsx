import { Check } from 'lucide-react'
import { Button } from '../ui/Button'
import { cn } from '../utils/cn'

export const PricingCard = ({ plan, selected, onSelect }) => (
  <div
    className={cn(
      'relative flex h-full flex-col rounded-3xl border bg-white/80 p-8 shadow-soft transition-all dark:bg-white/5',
      plan.highlight
        ? 'border-ink-400/60 shadow-glow'
        : 'border-slate-200 dark:border-white/10',
      selected && 'ring-2 ring-ink-400/70',
    )}
  >
    {plan.highlight && (
      <span className="absolute -top-3 left-8 rounded-full bg-ink-500 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white">
        Most Popular
      </span>
    )}
    <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
      {plan.name}
    </h3>
    <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
      {plan.description}
    </p>
    <p className="mt-6 text-4xl font-semibold text-slate-900 dark:text-white">
      {plan.price}
      <span className="text-sm font-medium text-slate-500 dark:text-slate-400">
        /month
      </span>
    </p>
    <ul className="mt-6 space-y-3 text-sm text-slate-600 dark:text-slate-300">
      {plan.features.map((feature) => (
        <li key={feature} className="flex items-start gap-3">
          <Check size={16} className="mt-0.5 text-ink-400" />
          {feature}
        </li>
      ))}
    </ul>
    <Button
      className="mt-8 w-full"
      variant={plan.highlight ? 'primary' : 'secondary'}
      onClick={() => onSelect(plan.name)}
    >
      Choose {plan.name}
    </Button>
  </div>
)

