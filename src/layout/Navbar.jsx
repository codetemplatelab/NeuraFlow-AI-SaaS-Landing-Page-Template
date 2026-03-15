import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navItems } from '../data/navigation'
import { Button } from '../ui/Button'
import { ThemeToggle } from '../components/ThemeToggle'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import { motion, AnimatePresence } from 'framer-motion'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const scrollTo = useSmoothScroll()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12)
      const offsets = navItems
        .map((item) => {
          const element = document.getElementById(item.href)
          if (!element) return null
          return {
            id: item.href,
            top: element.getBoundingClientRect().top,
          }
        })
        .filter(Boolean)

      const current = offsets
        .filter((section) => section.top <= 140)
        .sort((a, b) => b.top - a.top)[0]

      if (current && current.id !== activeSection) {
        setActiveSection(current.id)
      }
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [activeSection])

  const handleNavClick = (id) => {
    scrollTo(id)
    setOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-3 z-50 sm:top-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative rounded-full bg-gradient-to-r from-ink-300/50 via-slateblue-300/40 to-ink-500/50 p-[1px] transition-shadow ${
            scrolled ? 'shadow-glow' : 'shadow-soft'
          }`}
        >
          <div className="flex items-center justify-between gap-3 rounded-full bg-white/90 px-4 py-3 backdrop-blur dark:bg-slate-950/80">
            <button
              type="button"
              onClick={() => handleNavClick('hero')}
              className="flex min-w-0 items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-500/10 text-ink-500 dark:bg-ink-500/20">
                N
              </span>
              <span className="hidden sm:inline truncate">NeuraFlow</span>
              <span className="text-ink-400">AI</span>
            </button>

            <nav className="hidden items-center xl:flex">
              <div className="flex items-center gap-1 rounded-full border border-slate-200/70 bg-slate-100/70 px-2 py-1 text-xs font-semibold text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
                {navItems.map((item) => (
                  <button
                    key={item.href}
                    type="button"
                    onClick={() => handleNavClick(item.href)}
                    aria-current={activeSection === item.href ? 'page' : undefined}
                    className={`rounded-full px-3 py-2 transition ${
                      activeSection === item.href
                        ? 'bg-white text-ink-500 shadow-sm dark:bg-white/10 dark:text-white'
                        : 'hover:bg-white hover:text-ink-500 dark:hover:bg-white/10 dark:hover:text-white'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </nav>

            <div className="hidden items-center gap-3 xl:flex">
              <ThemeToggle />
              <Button variant="secondary">Book a demo</Button>
              <Button>Start free</Button>
            </div>

            <button
              type="button"
              className="xl:hidden"
              onClick={() => setOpen((prev) => !prev)}
              aria-label="Toggle navigation"
            >
              {open ? (
                <X size={24} className="text-slate-900 dark:text-white" />
              ) : (
                <Menu size={24} className="text-slate-900 dark:text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="xl:hidden"
          >
            <div className="mx-auto mt-4 max-w-7xl px-4 sm:px-6 lg:px-8">
              <div className="rounded-3xl border border-slate-200/70 bg-white/90 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-slate-950/80">
                <div className="flex flex-col gap-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className={`text-left transition ${
                        activeSection === item.href
                          ? 'text-ink-500 dark:text-white'
                          : 'hover:text-ink-500 dark:hover:text-white'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <ThemeToggle className="justify-center" />
                  <Button variant="secondary">Book a demo</Button>
                  <Button>Start free</Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
