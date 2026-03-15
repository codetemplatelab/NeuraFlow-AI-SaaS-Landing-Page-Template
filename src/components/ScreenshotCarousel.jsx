import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Dialog, DialogContent, IconButton } from '@mui/material'
import { X } from 'lucide-react'
import { demoSlides } from '../data/demoSlides'
import { Button } from '../ui/Button'
import { DemoChart } from './DemoChart'
import { useThemeMode } from '../contexts/ThemeContext'

const gradients = [
  'from-[#14082e] via-[#1d1b4b] to-[#1d4ed8]',
  'from-[#1a1033] via-[#27186b] to-[#3b82f6]',
  'from-[#0b0617] via-[#1d4ed8] to-[#0b0617]',
]

const lightGradients = [
  'from-[#f7f5ff] via-[#eef2ff] to-[#e0f2fe]',
  'from-[#eef2ff] via-[#e0e7ff] to-[#d0ffe8]',
  'from-[#f1f5ff] via-[#e0f2fe] to-[#f0fdf4]',
]

export const ScreenshotCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [open, setOpen] = useState(false)
  const { mode } = useThemeMode()

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % demoSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const activeSlide = demoSlides[activeIndex]
  const palette = mode === 'dark' ? gradients : lightGradients
  const activeGradient = palette[activeIndex % palette.length]

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
            Live dashboard
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
            {activeSlide.title}
          </h3>
        </div>
        <Button variant="secondary" className="w-full sm:w-auto" onClick={() => setOpen(true)}>
          Full preview
        </Button>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-ink-200/60 bg-white/95 p-6 shadow-soft dark:border-white/10 dark:bg-slate-900/70">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${activeGradient} opacity-70 dark:opacity-80`}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.title}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.4 }}
            className="relative space-y-6"
          >
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                  {activeSlide.description}
                </p>
                <p className="mt-3 text-3xl font-semibold text-slate-900 dark:text-white">
                  {activeSlide.kpi}
                </p>
              </div>
              <div className="self-start rounded-2xl border border-ink-200/60 bg-white/80 px-4 py-3 text-xs text-slate-600 dark:border-white/10 dark:bg-white/5 dark:text-slate-300 sm:self-auto">
                Updated 2m ago
              </div>
            </div>

            <DemoChart />

            <div className="grid gap-3 sm:grid-cols-3">
              {['AI accuracy', 'Automation latency', 'Cost savings'].map(
                (label, index) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-ink-200/60 bg-white/80 px-4 py-3 dark:border-white/10 dark:bg-white/5"
                  >
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {label}
                    </p>
                    <p className="mt-2 text-lg font-semibold text-slate-900 dark:text-white">
                      {index === 0 ? '99.1%' : index === 1 ? '1.2s' : '?8.2L'}
                    </p>
                  </div>
                ),
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center gap-3">
        {demoSlides.map((slide, index) => (
          <button
            key={slide.title}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2 flex-1 rounded-full transition-all ${
              index === activeIndex
                ? 'bg-neon-400'
                : 'bg-ink-200/70 hover:bg-slateblue-300 dark:bg-slate-700 dark:hover:bg-slate-600'
            }`}
            aria-label={`Show ${slide.title}`}
          />
        ))}
      </div>

      <Dialog
        open={open}
        onClose={() => setOpen(false)}
        fullWidth
        maxWidth="lg"
        PaperProps={{
          sx: (theme) => ({
            borderRadius: '28px',
            backgroundColor:
              theme.palette.mode === 'dark'
                ? 'rgba(11, 6, 23, 0.95)'
                : 'rgba(248, 250, 252, 0.98)',
            border:
              theme.palette.mode === 'dark'
                ? '1px solid rgba(99,102,241,0.25)'
                : '1px solid rgba(99,102,241,0.35)',
            backdropFilter: 'blur(18px)',
          }),
        }}
      >
        <DialogContent sx={{ padding: 0 }}>
          <div className="relative">
            <IconButton
              onClick={() => setOpen(false)}
              sx={(theme) => ({
                position: 'absolute',
                top: 16,
                right: 16,
                color: theme.palette.mode === 'dark' ? '#fff' : '#0f172a',
                border:
                  theme.palette.mode === 'dark'
                    ? '1px solid rgba(99,102,241,0.3)'
                    : '1px solid rgba(99,102,241,0.45)',
                backgroundColor:
                  theme.palette.mode === 'dark'
                    ? 'rgba(15,23,42,0.6)'
                    : 'rgba(255,255,255,0.85)',
                backdropFilter: 'blur(12px)',
              })}
            >
              <X size={18} />
            </IconButton>
            <div className="space-y-6 p-6 sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                NeuraFlow AI - Platform Preview
              </p>
              <h3 className="text-3xl font-semibold text-slate-900 dark:text-white">
                {activeSlide.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                {activeSlide.description}
              </p>
              <div className="rounded-3xl border border-ink-200/60 bg-gradient-to-br from-[#f7f5ff] via-[#eef2ff] to-[#e0f2fe] p-6 dark:border-white/10 dark:from-[#14082e] dark:via-[#1d1b4b] dark:to-[#1d4ed8]">
                <DemoChart />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}
