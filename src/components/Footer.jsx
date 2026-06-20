import React, { useState } from 'react'
import Logo from './Logo'
import './Footer.css'

const links = {
  Services: ['Healthy Catering','Corporate Catering','Fitness Meal Plans','Wedding Catering','Private Events'],
  Company: ['About Us','Our Chefs','Gallery','Testimonials','Contact'],
  Legal: ['Privacy Policy','Terms of Service','Halal Certification','Sustainability'],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  const scrollTo = (href) => { const el = document.querySelector(href); if (el) el.scrollIntoView({ behavior: 'smooth' }) }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <Logo size={40} />
              <span className="footer-logo-text">Balance</span>
            </div>
            <p className="footer-tagline">
              UAE's most trusted premium healthy catering brand, delivering freshness, nutrition, and elegance to every table.
            </p>
            <div className="footer-social">
              {['ig','in','fb','tw'].map(s => (
                <button key={s} className="social-btn" aria-label={s}>{s}</button>
              ))}
            </div>
          </div>

          {Object.entries(links).map(([heading, items]) => (
            <div key={heading} className="footer-col">
              <h4>{heading}</h4>
              {items.map(item => <a key={item} href="#">{item}</a>)}
            </div>
          ))}

          <div className="footer-col footer-newsletter">
            <h4>Stay Inspired</h4>
            <p>Wellness tips, seasonal menus, and exclusive offers.</p>
            {subscribed ? (
              <p className="subscribed">✓ You're on the list!</p>
            ) : (
              <div className="newsletter-form">
                <input
                  type="email" placeholder="your@email.com"
                  value={email} onChange={e => setEmail(e.target.value)}
                  className="newsletter-input"
                />
                <button className="newsletter-btn" onClick={() => email && setSubscribed(true)}>
                  Subscribe
                </button>
              </div>
            )}
            <p className="footer-hours">Sun–Thu · 8am–7pm GST · Dubai, UAE</p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© 2025 Balance Catering LLC. All rights reserved. UAE.</p>
          <button className="back-top" onClick={() => scrollTo('#hero')}>↑ Back to top</button>
        </div>
      </div>
    </footer>
  )
}
