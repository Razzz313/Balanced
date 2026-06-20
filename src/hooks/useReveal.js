import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      },
      { threshold }
    )
    const elements = el.querySelectorAll('.reveal')
    elements.forEach(e => observer.observe(e))
    if (el.classList.contains('reveal')) observer.observe(el)
    return () => observer.disconnect()
  }, [threshold])
  return ref
}
