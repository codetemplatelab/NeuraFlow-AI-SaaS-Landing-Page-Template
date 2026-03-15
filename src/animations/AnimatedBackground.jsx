import { motion } from 'framer-motion'

export const AnimatedBackground = () => (
  <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute inset-0 bg-hero-light bg-[length:200%_200%] animate-shimmer dark:bg-hero-gradient" />
    <div className="absolute inset-0 bg-grid opacity-30 dark:opacity-40" />
    <motion.div
      className="absolute left-1/2 top-[-10%] h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-slateblue-500/20 blur-[160px] dark:bg-slateblue-500/25"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
    />
    <motion.div
      className="absolute -left-24 bottom-[-20%] h-[420px] w-[420px] rounded-full bg-neon-400/20 blur-[180px] dark:bg-neon-400/25"
      animate={{ scale: [1, 1.15, 1], x: [0, 40, 0] }}
      transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
    />
  </div>
)
