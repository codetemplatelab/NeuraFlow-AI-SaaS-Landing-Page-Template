import { useEffect, useRef, useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'
import { navItems } from '../data/navigation'
import { Button } from '../ui/Button'
import { ThemeToggle } from '../components/ThemeToggle'
import { useSmoothScroll } from '../hooks/useSmoothScroll'
import { motion, AnimatePresence } from 'framer-motion'

export const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')
  const [scrolled, setScrolled] = useState(false)
  const [moreOpen, setMoreOpen] = useState(false)
  const scrollTo = useSmoothScroll()
  const moreRef = useRef(null)

  const primaryNav = navItems.filter((item) => item.group === 'primary')
  const overflowNav = navItems.filter((item) => item.group !== 'primary')

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

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!moreRef.current) return
      if (!moreRef.current.contains(event.target)) {
        setMoreOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  const handleNavClick = (id) => {
    scrollTo(id)
    setOpen(false)
    setMoreOpen(false)
  }

  return (
    <header className="fixed left-0 right-0 top-3 z-50 sm:top-4">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          className={`relative rounded-full bg-gradient-to-r from-ink-400/50 via-slateblue-400/40 to-neon-400/40 p-[1px] transition-shadow ${
            scrolled ? 'shadow-glow' : 'shadow-soft'
          }`}
        >
          <div className="flex items-center justify-between gap-3 rounded-full bg-white/90 px-4 py-3 backdrop-blur dark:bg-midnight/80">
            <button
              type="button"
              onClick={() => handleNavClick('hero')}
              className="flex min-w-0 items-center gap-2 text-sm font-semibold text-slate-900 dark:text-white"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-ink-500/10 text-ink-500 dark:bg-ink-500/20">
                N
              </span>
              <span className="hidden sm:inline truncate">NeuraFlow</span>
              <span className="text-neon-400">AI</span>
            </button>

            <nav className="hidden min-w-0 flex-1 items-center justify-center xl:flex">
              <div className="relative flex min-w-0 max-w-full items-center gap-1 rounded-full border border-ink-200/60 bg-white/70 px-1.5 py-1 text-[11px] font-semibold text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-slate-300 2xl:px-2 2xl:py-1.5 2xl:text-xs">
                <div className="flex min-w-0 flex-1 items-center gap-1 overflow-x-auto no-scrollbar">
                  {primaryNav.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      aria-current={activeSection === item.href ? 'page' : undefined}
                      className={`rounded-full px-2.5 py-1.5 transition 2xl:px-3 2xl:py-2 ${
                        activeSection === item.href
                          ? 'bg-white text-slateblue-600 shadow-sm dark:bg-white/10 dark:text-neon-400'
                          : 'hover:bg-white hover:text-slateblue-600 dark:hover:bg-white/10 dark:hover:text-neon-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>

                {overflowNav.length > 0 && (
                  <div ref={moreRef} className="relative shrink-0">
                    <button
                      type="button"
                      onClick={() => setMoreOpen((prev) => !prev)}
                      onKeyDown={(event) => {
                        if (event.key === 'Escape') setMoreOpen(false)
                      }}
                      aria-haspopup="menu"
                      aria-expanded={moreOpen}
                      className={`flex items-center gap-1 rounded-full px-2.5 py-1.5 transition 2xl:px-3 2xl:py-2 ${
                        moreOpen
                          ? 'bg-white text-slateblue-600 shadow-sm dark:bg-white/10 dark:text-neon-400'
                          : 'hover:bg-white hover:text-slateblue-600 dark:hover:bg-white/10 dark:hover:text-neon-400'
                      }`}
                    >
                      More
                      <ChevronDown size={14} />
                    </button>

                    <AnimatePresence>
                      {moreOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute right-0 top-full z-20 mt-2 w-48 rounded-2xl border border-ink-200/60 bg-white/95 p-2 text-xs font-semibold text-slate-600 shadow-soft backdrop-blur dark:border-white/10 dark:bg-midnight/95 dark:text-slate-200"
                          role="menu"
                          aria-label="More navigation"
                        >
                          {overflowNav.map((item) => (
                            <button
                              key={item.href}
                              type="button"
                              role="menuitem"
                              onClick={() => handleNavClick(item.href)}
                              className={`w-full rounded-xl px-3 py-2 text-left transition ${
                                activeSection === item.href
                                  ? 'bg-ink-100 text-slateblue-600 dark:bg-white/10 dark:text-neon-400'
                                  : 'hover:bg-ink-50 hover:text-slateblue-600 dark:hover:bg-white/10 dark:hover:text-neon-400'
                              }`}
                            >
                              {item.label}
                            </button>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )}
              </div>
            </nav>

            <div className="hidden items-center gap-2 xl:flex 2xl:gap-3">
              <ThemeToggle labelClassName="xl:hidden 2xl:inline" />
              <Button variant="secondary" className="hidden 2xl:inline-flex">
                Book a demo
              </Button>
              <Button className="px-4 py-2 text-xs 2xl:px-6 2xl:py-3 2xl:text-sm">
                Start free
              </Button>
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
              <div className="max-h-[calc(100vh-7rem)] overflow-y-auto rounded-3xl border border-ink-200/60 bg-white/90 p-6 shadow-soft backdrop-blur dark:border-white/10 dark:bg-midnight/80">
                <div className="flex flex-col gap-4 text-sm font-semibold text-slate-700 dark:text-slate-200">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      type="button"
                      onClick={() => handleNavClick(item.href)}
                      className={`text-left transition ${
                        activeSection === item.href
                          ? 'text-slateblue-600 dark:text-neon-400'
                          : 'hover:text-slateblue-600 dark:hover:text-neon-400'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <ThemeToggle className="w-full justify-center" />
                  <Button variant="secondary" className="w-full justify-center">
                    Book a demo
                  </Button>
                  <Button className="w-full justify-center">Start free</Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
