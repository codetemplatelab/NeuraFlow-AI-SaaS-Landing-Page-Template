import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Dialog, DialogContent, IconButton } from '@mui/material'
import { X } from 'lucide-react'
import { demoSlides } from '../data/demoSlides'
import { Button } from '../ui/Button'
import { DemoChart } from './DemoChart'

const gradients = [
  'from-[#1e293b] via-[#0f172a] to-[#111827]',
  'from-[#111827] via-[#0f172a] to-[#1e293b]',
  'from-[#0f172a] via-[#1f2937] to-[#111827]',
]

export const ScreenshotCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % demoSlides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const activeSlide = demoSlides[activeIndex]

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-slate-400">
            Live dashboard
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">
            {activeSlide.title}
          </h3>
        </div>
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Full preview
        </Button>
      </div>

      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br p-6 shadow-soft">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${
            gradients[activeIndex % gradients.length]
          } opacity-80`}
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
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  {activeSlide.description}
                </p>
                <p className="mt-3 text-3xl font-semibold text-white">
                  {activeSlide.kpi}
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-xs text-slate-300">
                Updated 2m ago
              </div>
            </div>

            <DemoChart />

            <div className="grid gap-3 sm:grid-cols-3">
              {['AI accuracy', 'Automation latency', 'Cost savings'].map(
                (label, index) => (
                  <div
                    key={label}
                    className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3"
                  >
                    <p className="text-xs text-slate-400">{label}</p>
                    <p className="mt-2 text-lg font-semibold text-white">
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
                ? 'bg-ink-400'
                : 'bg-slate-700 hover:bg-slate-600'
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
          sx: {
            borderRadius: '28px',
            backgroundColor: 'rgba(15, 23, 42, 0.95)',
            border: '1px solid rgba(148,163,184,0.2)',
            backdropFilter: 'blur(18px)',
          },
        }}
      >
        <DialogContent sx={{ padding: 0 }}>
          <div className="relative">
            <IconButton
              onClick={() => setOpen(false)}
              sx={{
                position: 'absolute',
                top: 16,
                right: 16,
                color: '#fff',
                border: '1px solid rgba(148,163,184,0.3)',
                backgroundColor: 'rgba(15,23,42,0.6)',
              }}
            >
              <X size={18} />
            </IconButton>
            <div className="space-y-6 p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-slate-400">
                NeuraFlow AI — Platform Preview
              </p>
              <h3 className="text-3xl font-semibold text-white">
                {activeSlide.title}
              </h3>
              <p className="text-slate-300">{activeSlide.description}</p>
              <div className="rounded-3xl border border-white/10 bg-gradient-to-br from-[#1e293b] via-[#0f172a] to-[#111827] p-6">
                <DemoChart />
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

