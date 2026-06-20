import React, { useEffect, useRef, useState } from 'react'
import './Hero.css'

function Counter({ target, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !animated.current) {
        animated.current = true
        const duration = 2200
        const start = performance.now()
        const step = (now) => {
          const p = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - p, 3)
          setCount(Math.floor(eased * target))
          if (p < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      }
    }, { threshold: 0.5 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [target])

  const display = count >= 1000 ? (count / 1000).toFixed(0) + 'k+' : count + suffix
  return <span ref={ref} className="stat-num">{prefix}{display}</span>
}

export default function Hero() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="hero">
      <div className="hero-bg" />
      <div className="hero-orb orb-1" />
      <div className="hero-orb orb-2" />
      <div className="hero-orb orb-3" />

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span className="eyebrow-dot" />
          UAE's Premier Wellness Catering
        </div>

        <h1 className="hero-title">
          Balance Your<br />
          <em>Lifestyle.</em>
        </h1>

        <p className="hero-sub">
          Premium healthy catering crafted for every occasion — from intimate gatherings to large corporate events across the UAE.
        </p>

        <div className="hero-btns">
          <button className="btn btn-primary" onClick={() => scrollTo('#contact')}>Request a Quote</button>
          <button className="btn btn-outline" onClick={() => scrollTo('#meals')}>Explore Meal Plans</button>
          <button className="btn btn-outline" onClick={() => scrollTo('#contact')}>Book Consultation</button>
        </div>

        <div className="hero-stats">
          <div className="hero-stat">
            <Counter target={15000} />
            <span className="stat-label">Healthy Meals Served</span>
          </div>
          <div className="hero-stat">
            <Counter target={800} suffix="+" />
            <span className="stat-label">Corporate Clients</span>
          </div>
          <div className="hero-stat">
            <Counter target={99} suffix="%" />
            <span className="stat-label">Client Satisfaction</span>
          </div>
        </div>
      </div>

      <div className="hero-visual">
        <div className="hero-card-main">
          <div className="hero-food-hero">
            🥗
            <div className="hero-badge">
              <span className="badge-star">✦</span>
              <div>
                <span className="badge-title">Chef's Special</span>
                <span className="badge-sub">Today's curated menu</span>
              </div>
            </div>
          </div>
          <div className="hero-food-grid">
            <div className="hero-thumb thumb-1">🍱</div>
            <div className="hero-thumb thumb-2">🥑</div>
          </div>
        </div>

        <div className="hero-float-card">
          <span className="float-icon">🌿</span>
          <div>
            <span className="float-title">100% Fresh</span>
            <span className="float-sub">No preservatives</span>
          </div>
        </div>
      </div>

      <div className="hero-scroll">
        <div className="scroll-line" />
        <span>Scroll</span>
      </div>
    </section>
  )
}
