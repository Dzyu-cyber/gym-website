import React, { useEffect, useState } from 'react';
import { MessageCircle, Phone, Mail, MapPin, Clock, Send, CheckCircle, Globe } from 'lucide-react';

const InstaIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);
import './Contact.css';

const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('revealed'); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

export default function Contact() {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', phone: '', goal: '', message: '' });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    const message = `*New Booking Request*%0A%0A*Name:* ${form.name}%0A*Phone:* ${form.phone}%0A*Email:* ${form.email}%0A*Goal:* ${form.goal}%0A*Message:* ${form.message}`;
    const whatsappUrl = `https://wa.me/919553722793?text=${message}`;
    
    window.open(whatsappUrl, '_blank');
    setSubmitted(true);
  };

  return (
    <main>
      {/* ── Hero ── */}
      <section className="page-hero contact-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content text-center">
          <span className="section-tag reveal">Let's Get Started</span>
          <h1 className="section-title reveal" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            Book Your <span className="text-accent">Free Consultation</span>
          </h1>
          <p className="section-subtitle reveal">
            One conversation could change your life. Book a free 30-minute session — zero commitment, zero pressure.
          </p>
        </div>
      </section>

      {/* ── Quick Contact Buttons ── */}
      <div className="quick-contact-bar reveal">
        <a href="https://wa.me/919553722793" className="quick-btn whatsapp-quick" target="_blank" rel="noopener noreferrer">
          <MessageCircle size={22} />
          <div>
            <strong>WhatsApp</strong>
            <span>Chat instantly</span>
          </div>
        </a>
        <a href="tel:+919553722793" className="quick-btn phone-quick">
          <Phone size={22} />
          <div>
            <strong>Call Us</strong>
            <span>+91 95537 22793</span>
          </div>
        </a>
        <a href="https://instagram.com/ironcorefitness" className="quick-btn insta-quick" target="_blank" rel="noopener noreferrer">
          <InstaIcon />
          <div>
            <strong>Instagram</strong>
            <span>@ironcorefitness</span>
          </div>
        </a>
      </div>

      {/* ── Main Contact Section ── */}
      <section className="section bg-dark">
        <div className="container">
          <div className="contact-grid">
            {/* Form */}
            <div className="contact-form-col reveal">
              <h2 className="section-title" style={{ fontSize: '2rem', marginBottom: '8px' }}>
                Send a <span className="text-accent">Message</span>
              </h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>Fill out the form and the coach will get back to you within 24 hours.</p>

              {submitted ? (
                <div className="success-msg">
                  <CheckCircle size={48} className="text-accent" />
                  <h3>Message Received!</h3>
                  <p>Thanks {form.name}! The coach will reach out within 24 hours. Check your WhatsApp and email.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="name">Full Name *</label>
                      <input id="name" type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} required />
                    </div>
                    <div className="form-group">
                      <label htmlFor="phone">Phone / WhatsApp *</label>
                      <input id="phone" type="tel" name="phone" placeholder="+91 99999 99999" value={form.phone} onChange={handleChange} required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input id="email" type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="goal">Your Primary Goal *</label>
                    <select id="goal" name="goal" value={form.goal} onChange={handleChange} required>
                      <option value="">Select your goal...</option>
                      <option value="fat-loss">Fat Loss / Weight Loss</option>
                      <option value="muscle">Muscle Building</option>
                      <option value="strength">Strength Training</option>
                      <option value="online">Online Coaching</option>
                      <option value="personal">Personal Training (In-Gym)</option>
                      <option value="competition">Competition Prep</option>
                      <option value="diet">Diet Coaching Only</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Tell Me About Yourself</label>
                    <textarea id="message" name="message" placeholder="Current fitness level, past experience, specific challenges..." rows={5} value={form.message} onChange={handleChange} />
                  </div>
                  <button type="submit" id="contact-submit-btn" className="btn btn-primary" style={{ width: '100%' }}>
                    Send Message & Book Consultation <Send size={20} />
                  </button>
                </form>
              )}
            </div>

            {/* Info */}
            <div className="contact-info-col">
              <div className="info-card reveal">
                <h3>Contact Information</h3>
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon text-accent"><Phone size={22} /></div>
                    <div>
                      <strong>Phone</strong>
                      <a href="tel:+919553722793">+91 95537 22793</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon text-accent"><MessageCircle size={22} /></div>
                    <div>
                      <strong>WhatsApp</strong>
                      <a href="https://wa.me/919553722793" target="_blank" rel="noopener noreferrer">Chat Directly</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon text-accent"><Mail size={22} /></div>
                    <div>
                      <strong>Email</strong>
                      <a href="mailto:coach@ironcore.fitness">coach@ironcore.fitness</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon text-accent"><InstaIcon /></div>
                    <div>
                      <strong>Instagram</strong>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">@ironcorefitness</a>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon text-accent"><MapPin size={22} /></div>
                    <div>
                      <strong>Gym Location</strong>
                      <span>123 Fitness Ave, Gym City, NY 10001</span>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon text-accent"><Clock size={22} /></div>
                    <div>
                      <strong>Working Hours</strong>
                      <span>Mon–Sat: 6:00 AM – 9:00 PM<br />Sunday: By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="map-wrap reveal">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304603!3d40.69766374874431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IronCore Fitness Location"
                  className="google-map"
                ></iframe>
              </div>

              {/* WhatsApp CTA */}
              <a href="https://wa.me/919553722793" className="wa-cta-block reveal" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={32} />
                <div>
                  <strong>Prefer WhatsApp?</strong>
                  <p>Message the coach directly. Fast, personal, and effective.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
