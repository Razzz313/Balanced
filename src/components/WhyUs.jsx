import React, { useEffect, useRef } from 'react'
import './WhyUs.css'

const reasons = [
  { num: '01', title: 'Fresh Ingredients Only', desc: 'Every ingredient sourced daily from certified local UAE farms and premium suppliers. No frozen. No shortcuts. Ever.' },
  { num: '02', title: 'Certified Executive Chefs', desc: 'Our culinary team trained at Michelin-level restaurants across Europe and Asia, bringing world-class technique to every plate.' },
  { num: '03', title: 'Fully Customized Plans', desc: 'No two clients are the same. Every meal plan is built around your health goals, dietary restrictions, and preferences.' },
  { num: '04', title: 'On-Time, Every Time', desc: 'Our logistics team guarantees punctual delivery across Dubai, Abu Dhabi, and Sharjah — or your meal is on us.' },
  { num: '05', title: 'Premium Presentation', desc: 'We believe beautiful food tastes better. Every dish is plated and packaged as if it were restaurant-ready.' },
  { num: '06', title: 'Nutrition-First Approach', desc: 'Our in-house dietitians review every menu for optimal macro balance, micronutrient density, and dietary compliance.' },
]

export default function WhyUs() {
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

  return (
    <section id="why" className="why section--white" ref={sectionRef}>
      <div className="why-inner">
        <div className="why-header">
          <span className="eyebrow reveal">Why Balance</span>
          <h2 className="section-title reveal delay-1">The Standard We <em>Never Compromise</em></h2>
        </div>
        <div className="why-grid">
          {reasons.map((r, i) => (
            <div key={r.num} className={`why-card reveal delay-${(i % 3) + 1}`}>
              <div className="why-num">{r.num}</div>
              <h3 className="why-title">{r.title}</h3>
              <p className="why-desc">{r.desc}</p>
              <div className="why-bar" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
