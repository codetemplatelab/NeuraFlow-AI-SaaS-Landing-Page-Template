import { useCallback } from 'react'

export const useSmoothScroll = () => {
  return useCallback((targetId) => {
    const element = document.getElementById(targetId)
    if (!element) return
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }, [])
}

