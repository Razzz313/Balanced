import React, { useEffect, useRef } from 'react'
import './MealPlans.css'

const plans = [
  {
    badge: 'Starter', icon: '🥗', name: 'Wellness Lite',
    desc: '5 balanced meals weekly, perfect for individuals starting their health journey.',
    price: 'AED 299', per: '/ week',
    color: 'linear-gradient(135deg, #163829 0%, #2E7D57 100%)',
    features: ['5 meals per week', 'Calorie-counted menus', 'Free delivery', 'Weekly menu rotation'],
  },
  {
    badge: '⭐ Most Popular', icon: '💪', name: 'Performance Pro',
    desc: '7-day macro-optimized plan with protein-rich meals for active lifestyles.',
    price: 'AED 499', per: '/ week', featured: true,
    color: 'linear-gradient(135deg, #2E7D57 0%, #56A66A 100%)',
    features: ['7 meals per week', 'Macro-tracked menus', 'Priority delivery', 'Nutritionist review', 'Snack box included'],
  },
  {
    badge: 'Premium', icon: '👑', name: 'Elite Wellness',
    desc: 'Fully bespoke plan with personal dietitian, premium ingredients, and daily delivery.',
    price: 'AED 899', per: '/ week',
    color: 'linear-gradient(135deg, #0a1f14 0%, #163829 100%)',
    features: ['Daily fresh delivery', 'Personal dietitian', 'Custom macros', 'Premium ingredients', 'Chef consultation'],
  },
]

export default function MealPlans() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    section.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const scrollTo = (href) => { const el = document.querySelector(href); if (el) el.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <section id="meals" className="meals section--white" ref={sectionRef}>
      <div className="meals-inner">
        <div className="meals-header">
          <div>
            <span className="eyebrow reveal">Curated Plans</span>
            <h2 className="section-title reveal delay-1">Choose Your <em>Balance</em></h2>
          </div>
          <button className="btn btn-green reveal delay-2" onClick={() => scrollTo('#contact')}>
            View All Plans →
          </button>
        </div>

        <div className="plans-grid">
          {plans.map((p, i) => (
            <div key={p.name} className={`plan-card reveal delay-${i + 1}${p.featured ? ' plan-featured' : ''}`}>
              <div className="plan-visual" style={{ background: p.color }}>
                <div className="plan-emoji">{p.icon}</div>
                {p.featured && <div className="plan-glow" />}
              </div>
              <div className="plan-body">
                <span className="plan-badge">{p.badge}</span>
                <h3 className="plan-name">{p.name}</h3>
                <p className="plan-desc">{p.desc}</p>
                <ul className="plan-features">
                  {p.features.map(f => <li key={f}><span className="feat-check">✓</span>{f}</li>)}
                </ul>
                <div className="plan-footer">
                  <div className="plan-price">
                    {p.price} <span>{p.per}</span>
                  </div>
                  <button className="btn btn-primary" onClick={() => scrollTo('#contact')}>
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
