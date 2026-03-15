import { motion } from 'framer-motion'

const particles = [
  { id: 1, top: '12%', left: '18%', size: 2, opacity: 0.5, delay: 0 },
  { id: 2, top: '22%', left: '42%', size: 3, opacity: 0.6, delay: 1.2 },
  { id: 3, top: '28%', left: '72%', size: 2, opacity: 0.4, delay: 0.4 },
  { id: 4, top: '40%', left: '8%', size: 2, opacity: 0.5, delay: 1.6 },
  { id: 5, top: '52%', left: '28%', size: 3, opacity: 0.55, delay: 0.8 },
  { id: 6, top: '60%', left: '58%', size: 2, opacity: 0.45, delay: 1.4 },
  { id: 7, top: '68%', left: '82%', size: 3, opacity: 0.6, delay: 0.2 },
  { id: 8, top: '78%', left: '16%', size: 2, opacity: 0.45, delay: 1.1 },
  { id: 9, top: '86%', left: '44%', size: 3, opacity: 0.55, delay: 0.6 },
  { id: 10, top: '18%', left: '90%', size: 2, opacity: 0.5, delay: 1.8 },
  { id: 11, top: '34%', left: '56%', size: 2, opacity: 0.45, delay: 0.9 },
  { id: 12, top: '72%', left: '66%', size: 3, opacity: 0.6, delay: 1.3 },
]

export const ParticleField = () => (
  <div className="pointer-events-none absolute inset-0 overflow-hidden">
    {particles.map((particle) => (
      <motion.span
        key={particle.id}
        className="absolute rounded-full bg-slateblue-300/50 shadow-[0_0_12px_rgba(59,130,246,0.6)] dark:bg-neon-400/60"
        style={{
          top: particle.top,
          left: particle.left,
          width: `${particle.size * 4}px`,
          height: `${particle.size * 4}px`,
          opacity: particle.opacity,
        }}
        animate={{ y: [0, -14, 0], x: [0, 8, 0] }}
        transition={{
          duration: 8 + particle.size,
          delay: particle.delay,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    ))}
  </div>
)
