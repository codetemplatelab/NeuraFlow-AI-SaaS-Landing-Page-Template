import { motion, useScroll, useTransform } from 'framer-motion'

export const FloatingOrbs = () => {
  const { scrollY } = useScroll()
  const ySlow = useTransform(scrollY, [0, 600], [0, -80])
  const yFast = useTransform(scrollY, [0, 600], [0, -140])

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.span
        style={{ y: ySlow }}
        className="absolute left-[8%] top-[20%] h-24 w-24 rounded-full bg-ink-400/25 blur-3xl dark:bg-ink-400/30"
      />
      <motion.span
        style={{ y: yFast }}
        className="absolute right-[12%] top-[10%] h-36 w-36 rounded-full bg-slateblue-400/20 blur-3xl dark:bg-slateblue-400/30"
      />
      <motion.span
        style={{ y: ySlow }}
        className="absolute bottom-[10%] left-[45%] h-32 w-32 rounded-full bg-ink-500/15 blur-3xl dark:bg-ink-500/20"
      />
    </div>
  )
}
