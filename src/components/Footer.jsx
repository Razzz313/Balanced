import React, { useState } from 'react'
import Logo from './Logo'
import { COMPANY } from '../config'
import './Footer.css'

const links = {
  Services: [
    { label: 'Healthy Catering', href: '#services' },
    { label: 'Corporate Catering', href: '#services' },
    { label: 'Fitness Meal Plans', href: '#meals' },
    { label: 'Wedding Catering', href: '#services' },
    { label: 'Private Events', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Contact', href: '#contact' },
  ],
}

export default function Footer() {
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const scrollTo = (href) => {
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSubscribe = () => {
    if (email && email.includes('@')) setSubscribed(true)
  }

  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <Logo size={40} />
              <span className="footer-logo-text">Balance</span>
            </div>
            <p className="footer-tagline">
              UAE's most trusted premium healthy catering brand, delivering freshness, nutrition, and elegance to every table.
            </p>

            {/* Clickable contact info in footer */}
            <div className="footer-contacts">
              <a href={`tel:${COMPANY.phoneRaw}`} className="footer-contact-link">
                <span className="fc-icon">📞</span>
                <span>{COMPANY.phone}</span>
              </a>
              <a href={`mailto:${COMPANY.email}`} className="footer-contact-link">
                <span className="fc-icon">✉</span>
                <span>{COMPANY.email}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY.whatsapp}`}
                target="_blank" rel="noopener noreferrer"
                className="footer-contact-link"
              >
                <span className="fc-icon">💬</span>
                <span>WhatsApp Us</span>
              </a>
            </div>

            <div className="footer-social">
              <a href={COMPANY.instagram} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Instagram">ig</a>
              <a href={COMPANY.linkedin}  target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">in</a>
              <a href={COMPANY.facebook}  target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="Facebook">fb</a>
              <a href={`https://wa.me/${COMPANY.whatsapp}`} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="WhatsApp">wa</a>
            </div>
          </div>

          {/* Navigation columns */}
          {Object.entries(links).map(([heading, items]) => (
            <div key={heading} className="footer-col">
              <h4>{heading}</h4>
              {items.map(item => (
                <a key={item.label} href={item.href}
                  onClick={e => { e.preventDefault(); scrollTo(item.href) }}>
                  {item.label}
                </a>
              ))}
            </div>
          ))}

          {/* Contact column */}
          <div className="footer-col">
            <h4>Contact</h4>
            <a href={`tel:${COMPANY.phoneRaw}`} className="footer-col-contact">
              📞 {COMPANY.phone}
            </a>
            <a href={`mailto:${COMPANY.email}`} className="footer-col-contact">
              ✉ {COMPANY.email}
            </a>
            <p className="footer-location">📍 {COMPANY.location}</p>
            <p className="footer-hours">{COMPANY.hours}</p>
          </div>

          {/* Newsletter */}
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
                  onKeyDown={e => e.key === 'Enter' && handleSubscribe()}
                />
                <button className="newsletter-btn" onClick={handleSubscribe}>
                  Subscribe
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Balance Catering LLC. All rights reserved. UAE.</p>
          <div className="footer-bottom-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <button className="back-top" onClick={() => scrollTo('#hero')}>↑ Top</button>
          </div>
        </div>
      </div>
    </footer>
  )
}
