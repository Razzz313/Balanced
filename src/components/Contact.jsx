import React, { useEffect, useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { COMPANY, EMAILJS } from '../config'
import './Contact.css'

const SERVICES = [
  'Healthy Catering',
  'Corporate Catering',
  'Fitness Meal Plans',
  'Family Meal Packages',
  'Private Events',
  'Wedding Catering',
  'Weekly Meal Subscription',
  'Custom Nutrition Plans',
]

const INIT_FORM = {
  from_name: '', from_phone: '', from_email: '',
  service: '', guests: '', event_date: '', message: '',
}

export default function Contact() {
  const sectionRef = useRef(null)
  const formRef = useRef(null)
  const [form, setForm] = useState(INIT_FORM)
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  // Reveal animation
  useEffect(() => {
    const section = sectionRef.current
    if (!section) return
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      }),
      { threshold: 0.08 }
    )
    section.querySelectorAll('.reveal').forEach(el => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const handleChange = e => setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    if (!EMAILJS.serviceId || !EMAILJS.templateId || !EMAILJS.publicKey) {
      // Dev fallback: show success without actually sending
      console.warn('EmailJS not configured. See .env.example for setup instructions.')
      setStatus('success')
      return
    }
    setStatus('sending')
    try {
      await emailjs.sendForm(
        EMAILJS.serviceId,
        EMAILJS.templateId,
        formRef.current,
        EMAILJS.publicKey
      )
      setStatus('success')
      setForm(INIT_FORM)
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  const reset = () => { setStatus('idle'); setForm(INIT_FORM) }

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-inner">
        <div className="contact-header reveal">
          <span className="eyebrow">Get in Touch</span>
          <h2 className="section-title">Start Your <em>Wellness Journey</em></h2>
          <p className="section-body" style={{ margin: '0 auto' }}>
            Ready to bring Balance to your table? Fill in the form and we'll be in touch within 24 hours.
          </p>
        </div>

        <div className="contact-grid">
          {/* ─── INFO COLUMN ─── */}
          <div className="contact-info reveal">
            <h3>Let's craft something<br />exceptional together.</h3>
            <p>Tell us about your event, team size, or health goals — we'll design a plan that feels made just for you.</p>

            <div className="contact-details">
              <a href={`tel:${COMPANY.phoneRaw}`} className="contact-detail contact-detail--link">
                <div className="cd-icon">📞</div>
                <div>
                  <span className="cd-label">Call Us</span>
                  <span className="cd-value">{COMPANY.phone}</span>
                  <span className="cd-action">Tap to call</span>
                </div>
              </a>

              <a href={`mailto:${COMPANY.email}`} className="contact-detail contact-detail--link">
                <div className="cd-icon">✉️</div>
                <div>
                  <span className="cd-label">Email Us</span>
                  <span className="cd-value">{COMPANY.email}</span>
                  <span className="cd-action">Tap to email</span>
                </div>
              </a>

              <a
                href={`https://wa.me/${COMPANY.whatsapp}?text=Hello%20Balance%2C%20I%20would%20like%20to%20enquire%20about%20your%20catering%20services.`}
                target="_blank" rel="noopener noreferrer"
                className="contact-detail contact-detail--link"
              >
                <div className="cd-icon">💬</div>
                <div>
                  <span className="cd-label">WhatsApp</span>
                  <span className="cd-value">{COMPANY.phone}</span>
                  <span className="cd-action">Chat on WhatsApp</span>
                </div>
              </a>

              <div className="contact-detail">
                <div className="cd-icon">📍</div>
                <div>
                  <span className="cd-label">Location</span>
                  <span className="cd-value">{COMPANY.location}</span>
                </div>
              </div>

              <div className="contact-detail">
                <div className="cd-icon">🕐</div>
                <div>
                  <span className="cd-label">Business Hours</span>
                  <span className="cd-value">{COMPANY.hours}</span>
                </div>
              </div>
            </div>

            <div className="contact-trust">
              <div className="trust-item"><span>🏆</span><span>Award-winning cuisine</span></div>
              <div className="trust-item"><span>✅</span><span>Halal certified</span></div>
              <div className="trust-item"><span>🌿</span><span>Sustainably sourced</span></div>
              <div className="trust-item"><span>⚡</span><span>Reply within 24 hours</span></div>
            </div>
          </div>

          {/* ─── FORM COLUMN ─── */}
          <div className="contact-form-wrap reveal delay-2">
            {status === 'success' ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Request Received!</h3>
                <p>
                  Thank you for reaching out to Balance. We've received your inquiry and our team will contact you at <strong>{form.from_email || 'your email'}</strong> within 24 hours to discuss your requirements.
                </p>
                <div className="success-contacts">
                  <p>Need an immediate response?</p>
                  <a href={`tel:${COMPANY.phoneRaw}`} className="btn btn-green">📞 Call {COMPANY.phone}</a>
                  <a href={`mailto:${COMPANY.email}`} className="success-email-link">or email {COMPANY.email}</a>
                </div>
                <button className="btn-reset" onClick={reset}>Submit Another Inquiry</button>
              </div>
            ) : status === 'error' ? (
              <div className="form-error">
                <div className="error-icon">!</div>
                <h3>Something went wrong</h3>
                <p>We couldn't send your message. Please try contacting us directly:</p>
                <a href={`tel:${COMPANY.phoneRaw}`} className="btn btn-green">📞 {COMPANY.phone}</a>
                <a href={`mailto:${COMPANY.email}`} className="btn btn-outline-green">✉ {COMPANY.email}</a>
                <button className="btn-reset" onClick={reset}>Try Again</button>
              </div>
            ) : (
              <form ref={formRef} className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="from_name">Full Name *</label>
                    <input id="from_name" name="from_name" type="text"
                      placeholder="Your full name"
                      value={form.from_name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="from_phone">Phone Number</label>
                    <input id="from_phone" name="from_phone" type="tel"
                      placeholder="+971 ..."
                      value={form.from_phone} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="from_email">Email Address *</label>
                  <input id="from_email" name="from_email" type="email"
                    placeholder="you@company.com"
                    value={form.from_email} onChange={handleChange} required />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="service">Service Required</label>
                    <select id="service" name="service"
                      value={form.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      {SERVICES.map(s => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="guests">Number of Guests</label>
                    <input id="guests" name="guests" type="number"
                      placeholder="e.g. 50"
                      min="1" value={form.guests} onChange={handleChange} />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="event_date">Preferred Date</label>
                  <input id="event_date" name="event_date" type="date"
                    min={new Date().toISOString().split('T')[0]}
                    value={form.event_date} onChange={handleChange} />
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea id="message" name="message"
                    placeholder="Tell us more about your event or health goals..."
                    rows={4} value={form.message} onChange={handleChange} />
                </div>

                {/* Hidden fields that get included in the email */}
                <input type="hidden" name="to_name" value={COMPANY.name} />
                <input type="hidden" name="reply_to" value={form.from_email} />

                <button type="submit" className="btn btn-green form-submit" disabled={status === 'sending'}>
                  {status === 'sending' ? (
                    <span className="btn-loading"><span className="spinner" /> Sending…</span>
                  ) : (
                    'Send Inquiry →'
                  )}
                </button>

                <p className="form-disclaimer">
                  We respect your privacy. Your information will only be used to respond to your inquiry.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
