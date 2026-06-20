import React, { useEffect, useRef } from 'react'
import './About.css'

const values = [
  { icon: '🌱', title: 'Farm-Fresh Sourcing', desc: 'Direct from certified local UAE farms and premium importers daily.' },
  { icon: '⚖️', title: 'Balanced Nutrition', desc: 'Every meal crafted with macros and micronutrients in mind.' },
  { icon: '👨‍🍳', title: 'Certified Chefs', desc: 'International culinary expertise from Michelin-trained professionals.' },
  { icon: '🚚', title: 'Reliable Delivery', desc: 'Punctual delivery across Dubai, Abu Dhabi, and Sharjah — guaranteed.' },
]

export default function About() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.12 }
    )
    section.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" className="about section--white" ref={sectionRef}>
      <div className="about-grid">
        <div className="about-visual reveal">
          <div className="about-img-main">
            <div className="about-food-bg">🌿</div>
          </div>
          <div className="about-img-accent">
            <div className="about-food-accent">🍋</div>
          </div>
          <div className="about-pill">
            <span className="pill-num">10+</span>
            <span className="pill-text">Years of Excellence</span>
          </div>
          <div className="about-pill-2">
            <span className="pill-num-2">🏆</span>
            <span className="pill-text-2">Award Winning</span>
          </div>
        </div>

        <div className="about-text">
          <span className="eyebrow reveal">Our Philosophy</span>
          <h2 className="section-title reveal delay-1">
            Food That <em>Nourishes</em><br />and Inspires
          </h2>
          <p className="section-body reveal delay-2">
            At Balance, we believe exceptional food is the foundation of a healthy, fulfilled life. Every dish begins with the finest fresh ingredients, guided by certified nutritionists and executed by our master chefs.
          </p>
          <p className="section-body about-body-2 reveal delay-2">
            From intimate wellness retreats to large-scale corporate events, we bring the same relentless commitment to quality, freshness, and beautiful presentation — making every meal an experience worth remembering.
          </p>

          <div className="about-values reveal delay-3">
            {values.map(v => (
              <div key={v.title} className="value-card">
                <span className="value-icon">{v.icon}</span>
                <strong className="value-title">{v.title}</strong>
                <p className="value-desc">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
