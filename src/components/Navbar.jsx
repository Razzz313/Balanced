import React, { useState, useEffect } from 'react'
import Logo from './Logo'
import './Navbar.css'

const services = [
  { icon: '🥗', label: 'Healthy Catering', sub: 'Farm-fresh balanced menus', href: '#services' },
  { icon: '🏢', label: 'Corporate Catering', sub: 'Daily office meal programs', href: '#services' },
  { icon: '💪', label: 'Fitness Meal Plans', sub: 'Macro-optimized packages', href: '#meals' },
  { icon: '👨‍👩‍👧', label: 'Family Meal Packages', sub: 'Wholesome family bundles', href: '#meals' },
  { icon: '🎉', label: 'Private Events', sub: 'Intimate gatherings', href: '#services' },
  { icon: '💍', label: 'Wedding Catering', sub: 'Elegant bridal feasts', href: '#services' },
  { icon: '🍱', label: 'Weekly Meal Subscription', sub: 'Flexible weekly delivery', href: '#meals' },
  { icon: '🥦', label: 'Custom Nutrition Plans', sub: 'Dietitian-crafted menus', href: '#meals' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropOpen, setDropOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (href) => {
    setMenuOpen(false)
    setDropOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-inner">
        <a href="#hero" className="nav-logo" onClick={e => { e.preventDefault(); scrollTo('#hero') }}>
          <Logo size={42} />
          <span className="nav-logo-text">Balance</span>
        </a>

        <ul className="nav-links">
          {['#about','#services','#meals','#gallery','#testimonials'].map((href, i) => {
            const labels = ['About','Services','Meal Plans','Gallery','Testimonials']
            if (href === '#services') return (
              <li key={href} className="nav-item services-item"
                onMouseEnter={() => setDropOpen(true)}
                onMouseLeave={() => setDropOpen(false)}>
                <button className="nav-link" onClick={() => scrollTo(href)}>
                  Services <span className="caret">▾</span>
                </button>
                <div className={`dropdown${dropOpen ? ' open' : ''}`}>
                  {services.map(s => (
                    <a key={s.label} className="drop-item" href={s.href}
                      onClick={e => { e.preventDefault(); scrollTo(s.href) }}>
                      <span className="drop-icon">{s.icon}</span>
                      <span>
                        <span className="drop-label">{s.label}</span>
                        <span className="drop-sub">{s.sub}</span>
                      </span>
                    </a>
                  ))}
                </div>
              </li>
            )
            return (
              <li key={href} className="nav-item">
                <button className="nav-link" onClick={() => scrollTo(href)}>{labels[i]}</button>
              </li>
            )
          })}
          <li className="nav-item">
            <button className="nav-cta btn" onClick={() => scrollTo('#contact')}>Request Quote</button>
          </li>
        </ul>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>

      <div className={`mobile-menu${menuOpen ? ' open' : ''}`}>
        {['About','Services','Meal Plans','Gallery','Testimonials'].map((label, i) => {
          const hrefs = ['#about','#services','#meals','#gallery','#testimonials']
          return <button key={label} className="mobile-link" onClick={() => scrollTo(hrefs[i])}>{label}</button>
        })}
        <button className="mobile-cta" onClick={() => scrollTo('#contact')}>Request Quote</button>
      </div>
    </nav>
  )
}
