import { Moon, Sun } from 'lucide-react'
import { useThemeMode } from '../contexts/ThemeContext'
import { cn } from '../utils/cn'

export const ThemeToggle = ({ className }) => {
  const { mode, toggleMode } = useThemeMode()

  return (
    <button
      type="button"
      onClick={toggleMode}
      className={cn(
        'inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-2 text-xs font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-ink-300/50 hover:bg-white dark:border-white/20 dark:bg-white/10 dark:text-white',
        className,
      )}
      aria-label="Toggle dark mode"
    >
      {mode === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
      <span className="hidden sm:inline">
        {mode === 'dark' ? 'Light' : 'Dark'} mode
      </span>
    </button>
  )
}
