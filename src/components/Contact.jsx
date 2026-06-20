import React, { useEffect, useRef, useState } from 'react'
import './Contact.css'

export default function Contact() {
  const sectionRef = useRef(null)
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name:'', phone:'', email:'', service:'', guests:'', date:'', message:'' })

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

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = e => { e.preventDefault(); setSent(true) }

  return (
    <section id="contact" className="contact" ref={sectionRef}>
      <div className="contact-inner">
        <div className="contact-header reveal">
          <span className="eyebrow">Get in Touch</span>
          <h2 className="section-title">Start Your <em>Wellness Journey</em></h2>
        </div>

        <div className="contact-grid">
          <div className="contact-info reveal">
            <h3>Let's craft something exceptional together.</h3>
            <p>Tell us about your event, team size, or health goals — we'll design a plan that feels made just for you.</p>

            <div className="contact-details">
              {[
                { icon: '📍', label: 'Location', value: 'Dubai & Abu Dhabi, UAE' },
                { icon: '📞', label: 'Phone', value: '+971 4 000 0000' },
                { icon: '✉️', label: 'Email', value: 'hello@balance.ae' },
                { icon: '🕐', label: 'Business Hours', value: 'Sun–Thu · 8am–7pm GST' },
              ].map(d => (
                <div key={d.label} className="contact-detail">
                  <div className="cd-icon">{d.icon}</div>
                  <div>
                    <span className="cd-label">{d.label}</span>
                    <span className="cd-value">{d.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="contact-trust">
              <div className="trust-item"><span>🏆</span><span>Award-winning cuisine</span></div>
              <div className="trust-item"><span>✅</span><span>Halal certified</span></div>
              <div className="trust-item"><span>🌿</span><span>Sustainably sourced</span></div>
            </div>
          </div>

          <div className="contact-form-wrap reveal delay-2">
            {sent ? (
              <div className="form-success">
                <div className="success-icon">✓</div>
                <h3>Message Received!</h3>
                <p>Thank you for reaching out. Our team will contact you within 24 hours to discuss your requirements.</p>
                <button className="btn btn-green" onClick={() => setSent(false)}>Send Another Inquiry</button>
              </div>
            ) : (
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Full Name</label>
                    <input name="name" type="text" placeholder="Your name" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input name="phone" type="tel" placeholder="+971 ..." value={form.phone} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  <input name="email" type="email" placeholder="you@company.com" value={form.email} onChange={handleChange} required />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Service Required</label>
                    <select name="service" value={form.service} onChange={handleChange}>
                      <option value="">Select a service</option>
                      <option>Healthy Catering</option>
                      <option>Corporate Catering</option>
                      <option>Fitness Meal Plans</option>
                      <option>Family Meal Packages</option>
                      <option>Private Events</option>
                      <option>Wedding Catering</option>
                      <option>Weekly Meal Subscription</option>
                      <option>Custom Nutrition Plans</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Number of Guests</label>
                    <input name="guests" type="number" placeholder="e.g. 50" value={form.guests} onChange={handleChange} />
                  </div>
                </div>
                <div className="form-group">
                  <label>Preferred Date</label>
                  <input name="date" type="date" value={form.date} onChange={handleChange} />
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <textarea name="message" placeholder="Tell us more about your event or health goals..." rows={4} value={form.message} onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-green form-submit">
                  Send Inquiry →
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
