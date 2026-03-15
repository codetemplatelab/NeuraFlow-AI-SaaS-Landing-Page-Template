import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'

const formatValue = (value, decimals) => {
  if (decimals === 0) {
    return Math.round(value).toLocaleString()
  }

  return value.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })
}

export const Counter = ({
  value,
  suffix = '',
  prefix = '',
  decimals = 0,
  duration = 1.6,
  className,
}) => {
  const ref = useRef(null)
  const [display, setDisplay] = useState(0)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })

  useEffect(() => {
    if (!isInView) return

    let startTime
    let animationFrame

    const tick = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)
      const nextValue = value * progress
      setDisplay(nextValue)
      if (progress < 1) {
        animationFrame = requestAnimationFrame(tick)
      }
    }

    animationFrame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {formatValue(display, decimals)}
      {suffix}
    </span>
  )
}
