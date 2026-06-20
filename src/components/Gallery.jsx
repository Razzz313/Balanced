import React, { useEffect, useRef, useState } from 'react'
import './Gallery.css'

const items = [
  { emoji: '🥗', color: 'linear-gradient(135deg,#163829,#56A66A)', size: 'tall', label: 'Fresh Salads' },
  { emoji: '🍱', color: 'linear-gradient(135deg,#2E7D57,#EAF3EC)', size: 'mid', label: 'Meal Boxes' },
  { emoji: '🥑', color: 'linear-gradient(135deg,#56A66A,#2E7D57)', size: 'wide', label: 'Wellness Bowls' },
  { emoji: '🌿', color: 'linear-gradient(135deg,#EAF3EC,#56A66A)', size: 'mid', label: 'Fresh Herbs' },
  { emoji: '🍋', color: 'linear-gradient(135deg,#56A66A,#163829)', size: 'tall', label: 'Citrus Infusions' },
  { emoji: '🫐', color: 'linear-gradient(135deg,#2E7D57,#56A66A)', size: 'wide', label: 'Superfood Bowls' },
  { emoji: '🥩', color: 'linear-gradient(135deg,#163829,#2E7D57)', size: 'mid', label: 'Protein Plates' },
  { emoji: '🍓', color: 'linear-gradient(135deg,#56A66A,#EAF3EC)', size: 'wide', label: 'Fruit Platters' },
  { emoji: '🥦', color: 'linear-gradient(135deg,#2E7D57,#163829)', size: 'mid', label: 'Green Cuisine' },
]

export default function Gallery() {
  const sectionRef = useRef(null)
  const [active, setActive] = useState(null)

  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    section.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery" className="gallery" ref={sectionRef}>
      <div className="gallery-inner">
        <div className="gallery-header">
          <span className="eyebrow reveal">Our Craft</span>
          <h2 className="section-title reveal delay-1">Made with <em>Intention</em></h2>
          <p className="section-body reveal delay-2">
            Every dish is photographed exactly as served — no styling tricks, just honest beautiful food.
          </p>
        </div>

        <div className="masonry">
          {items.map((item, i) => (
            <div
              key={i}
              className={`masonry-item ${item.size} reveal delay-${(i % 4) + 1}`}
              style={{ background: item.color }}
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
            >
              <div className="masonry-emoji">{item.emoji}</div>
              <div className={`masonry-overlay${active === i ? ' active' : ''}`}>
                <span className="masonry-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
