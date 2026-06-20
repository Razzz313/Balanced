import React, { useEffect, useRef } from 'react'
import './Services.css'

const services = [
  { icon: '🥗', title: 'Healthy Catering', desc: 'Seasonal, whole-ingredient menus designed for vitality and exceptional taste.' },
  { icon: '🏢', title: 'Corporate Catering', desc: 'Daily lunch programs that fuel productive teams across Dubai & Abu Dhabi.' },
  { icon: '💪', title: 'Fitness Meal Plans', desc: 'Macro-tracked, chef-prepared meals for athletes and wellness enthusiasts.' },
  { icon: '👨‍👩‍👧', title: 'Family Packages', desc: 'Wholesome family bundles with variety, nutrition, and everyone\'s favorites.' },
  { icon: '🎉', title: 'Private Events', desc: 'Intimate gatherings elevated with premium food styling and presentation.' },
  { icon: '💍', title: 'Wedding Catering', desc: 'Elegant multi-course feasts that become the heart of your celebration.' },
  { icon: '🍱', title: 'Meal Subscription', desc: 'Flexible weekly delivery plans that adapt to your schedule and health goals.' },
  { icon: '🥦', title: 'Custom Nutrition', desc: 'Dietitian-designed plans tailored to your unique health requirements.' },
]

export default function Services() {
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
    <section id="services" className="services" ref={sectionRef}>
      <div className="services-header">
        <span className="eyebrow reveal">What We Offer</span>
        <h2 className="section-title reveal delay-1">A Service for <em>Every Occasion</em></h2>
        <p className="section-body reveal delay-2" style={{ margin: '0 auto' }}>
          Whether you're planning a daily office lunch or an opulent wedding feast, Balance delivers uncompromising quality at every scale.
        </p>
      </div>

      <div className="services-grid">
        {services.map((s, i) => (
          <div key={s.title} className={`service-card reveal delay-${(i % 4) + 1}`}>
            <div className="sc-icon-bg">{s.icon}</div>
            <h3 className="sc-title">{s.title}</h3>
            <p className="sc-desc">{s.desc}</p>
            <div className="sc-arrow">→</div>
          </div>
        ))}
      </div>
    </section>
  )
}
