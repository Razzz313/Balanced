import React, { useEffect, useRef, useState } from 'react'
import './Testimonials.css'

const testimonials = [
  {
    stars: 5, initials: 'SA',
    text: 'Balance transformed our office culture. The team is more energetic, focused, and genuinely excited about lunchtime. Worth every dirham.',
    name: 'Sarah Al-Mansouri', role: 'Head of HR, Emirates Group'
  },
  {
    stars: 5, initials: 'MK',
    text: 'We ordered Balance for our wedding. Every single guest asked for the caterer\'s contact. The presentation was stunning — truly five-star.',
    name: 'Mohammed & Khuloud', role: 'Wedding clients, Abu Dhabi'
  },
  {
    stars: 5, initials: 'RJ',
    text: 'Three months on the Elite Wellness plan and I\'ve hit goals I chased for years. The food is actually delicious — I never feel like I\'m dieting.',
    name: 'Rania Jaafar', role: 'Wellness client, Dubai'
  },
  {
    stars: 5, initials: 'AM',
    text: 'Our 200-person corporate lunch events are stress-free with Balance. The logistics team is as impressive as the food itself.',
    name: 'Ahmed Al-Mazrouei', role: 'CEO, Horizon Holdings'
  },
  {
    stars: 5, initials: 'LS',
    text: 'I have serious dietary restrictions and Balance handles them flawlessly. Finally a catering company that actually listens.',
    name: 'Layla Siddiqui', role: 'Nutrition client, Sharjah'
  },
  {
    stars: 5, initials: 'DK',
    text: 'The weekly subscription plan changed how our family eats. Fresh, healthy, and my kids actually love everything on the menu.',
    name: 'Daniel & Karen',  role: 'Family plan subscribers, Dubai'
  },
]

export default function Testimonials() {
  const sectionRef = useRef(null)
  const [current, setCurrent] = useState(0)
  const perPage = 3

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

  const pages = Math.ceil(testimonials.length / perPage)
  const visible = testimonials.slice(current * perPage, current * perPage + perPage)

  return (
    <section id="testimonials" className="testimonials" ref={sectionRef}>
      <div className="test-inner">
        <div className="test-header">
          <span className="eyebrow eyebrow--light reveal">Client Stories</span>
          <h2 className="section-title section-title--light reveal delay-1">Trusted Across <em>the UAE</em></h2>
        </div>

        <div className="test-grid">
          {visible.map((t, i) => (
            <div key={t.name} className={`test-card reveal delay-${i + 1}`}>
              <div className="test-stars">{'★'.repeat(t.stars)}</div>
              <blockquote className="test-text">"{t.text}"</blockquote>
              <div className="test-author">
                <div className="test-avatar">{t.initials}</div>
                <div className="test-info">
                  <span className="test-name">{t.name}</span>
                  <span className="test-role">{t.role}</span>
                </div>
                <div className="test-badge">✓ Verified</div>
              </div>
            </div>
          ))}
        </div>

        <div className="test-dots">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              className={`test-dot${i === current ? ' active' : ''}`}
              onClick={() => setCurrent(i)}
              aria-label={`Page ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
