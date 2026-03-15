import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import { Button } from '../ui/Button'
import { Badge } from '../ui/Badge'
import { FloatingOrbs } from '../animations/FloatingOrbs'
import { AnimatedBackground } from '../animations/AnimatedBackground'
import { ParticleField } from '../animations/ParticleField'

const Hero3D = lazy(() =>
  import('../components/Hero3D').then((module) => ({
    default: module.Hero3D,
  })),
)

export const HeroSection = () => (
  <section
    id="hero"
    className="relative overflow-hidden pb-24 pt-32 sm:pt-36"
  >
    <AnimatedBackground />
    <FloatingOrbs />
    <ParticleField />
    <div className="mx-auto grid max-w-6xl items-center gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr]">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="space-y-8 text-center lg:text-left"
      >
        <Badge className="mx-auto border-ink-200/60 bg-white/80 text-ink-700 lg:mx-0 dark:border-ink-400/30 dark:bg-white/10 dark:text-slate-200">
          Quantum-ready AI stack
        </Badge>
        <div className="space-y-6">
          <h1 className="text-4xl font-semibold leading-tight text-slate-900 dark:text-white sm:text-5xl lg:text-6xl xl:text-7xl">
            Build a{' '}
            <span className="text-gradient">futuristic AI startup</span>
            <br />
            that moves at light speed.
          </h1>
          <p className="mx-auto max-w-xl text-base text-slate-600 lg:mx-0 sm:text-lg dark:text-slate-300">
            Launch with immersive 3D visuals, real-time intelligence, and an
            automation engine designed for hyperscale teams.
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4 lg:justify-start">
          <Button className="group">
            Start free trial
            <ArrowRight size={16} className="transition group-hover:translate-x-1" />
          </Button>
          <Button variant="secondary">
            <PlayCircle size={16} />
            Watch demo
          </Button>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-600 lg:justify-start dark:text-slate-300">
          {[
            ['200+', 'AI teams onboarded'],
            ['48%', 'Faster model delivery'],
            ['99.98%', 'Uptime score'],
          ].map(([value, label]) => (
            <div key={label} className="space-y-1">
              <p className="text-xl font-semibold text-slate-900 dark:text-white sm:text-2xl">
                {value}
              </p>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
                {label}
              </p>
            </div>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="relative"
      >
        <div className="absolute -right-10 top-10 h-24 w-24 rounded-full bg-neon-400/30 blur-2xl dark:bg-neon-400/40" />
        <Suspense
          fallback={
            <div className="flex h-[280px] w-full items-center justify-center rounded-3xl border border-ink-200/60 bg-white/80 text-sm text-slate-500 shadow-soft sm:h-[320px] dark:border-white/10 dark:bg-white/5 dark:text-slate-300">
              Loading 3D preview...
            </div>
          }
        >
          <Hero3D />
        </Suspense>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-ink-200/40 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Active agents
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
              128
            </p>
          </div>
          <div className="rounded-2xl border border-ink-200/40 bg-white/80 p-4 shadow-sm dark:border-white/10 dark:bg-white/5">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-400">
              Avg. response time
            </p>
            <p className="mt-2 text-2xl font-semibold text-slate-900 dark:text-white">
              0.8s
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
)
