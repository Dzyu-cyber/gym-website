import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import './Transformations.css';

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

const transformations = [
  {
    img: '/transformation-1.png',
    name: 'Rahul M.',
    duration: '16 Weeks',
    program: 'Fat Loss Program',
    stat: '-18 kg',
    quote: 'I went from 92kg to 74kg. Coach built a plan around my life — not the other way around. This is the best investment I\'ve ever made.',
  },
  {
    img: '/transformation-2.png',
    name: 'Karan T.',
    duration: '20 Weeks',
    program: 'Muscle Gain Program',
    stat: '+10 kg muscle',
    quote: 'Finally got the physique I always wanted. Progressive overload, proper diet, and consistent weekly check-ins made all the difference.',
  },
  {
    img: '/transformation-3.png',
    name: 'Sneha R.',
    duration: '12 Weeks',
    program: 'Fat Loss + Strength',
    stat: '-14 kg',
    quote: 'Dropped 14kg and completely changed my relationship with food and fitness. I feel powerful for the first time in years.',
  },
  {
    img: '/transformation-1.png',
    name: 'Arjun P.',
    duration: '24 Weeks',
    program: 'Competition Prep',
    stat: 'Stage Ready',
    quote: 'Coach took me from casual gym-goer to stage-ready in 6 months. The programming and nutrition plan were elite level.',
  },
  {
    img: '/transformation-2.png',
    name: 'Priya S.',
    duration: '10 Weeks',
    program: 'Online Coaching',
    stat: '-12 kg',
    quote: 'I was sceptical about online coaching. Now I tell everyone — it\'s even better than in-person. The support is unreal.',
  },
  {
    img: '/transformation-3.png',
    name: 'Meera K.',
    duration: '8 Weeks',
    program: 'Diet Coaching',
    stat: '-8 kg',
    quote: 'Just the nutrition plan alone changed my body. I didn\'t even change my workout — just fixed my diet with the coach\'s guidance.',
  },
];

const stats = [
  { number: '500+', label: 'Total Transformations' },
  { number: '12kg', label: 'Avg Fat Loss' },
  { number: '98%', label: 'Client Satisfaction' },
  { number: '6mo', label: 'Fastest Comp Prep' },
];

export default function Transformations() {
  useScrollReveal();

  return (
    <main>
      {/* ── Hero ── */}
      <section className="page-hero transforms-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content text-center">
          <span className="section-tag reveal">Real Results. Real People.</span>
          <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Client <span className="text-accent">Transformations</span>
          </h1>
          <p className="section-subtitle reveal">
            Not before/after stock photos. These are real clients who trusted the process, showed up every day, and earned their results.
          </p>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="stats-bar reveal">
        {stats.map((s, i) => (
          <div key={i} className="stats-bar-item">
            <span className="stats-bar-number text-accent">{s.number}</span>
            <span className="stats-bar-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* ── Transformations Grid ── */}
      <section className="section bg-dark">
        <div className="container">
          <div className="transforms-big-grid">
            {transformations.map((t, i) => (
              <div key={i} className="transform-big-card reveal">
                <div className="transform-img-wrap">
                  <img src={t.img} alt={`${t.name} transformation`} />
                  <div className="transform-stat-badge">{t.stat}</div>
                </div>
                <div className="transform-info">
                  <div className="transform-meta">
                    <span className="transform-program">{t.program}</span>
                    <span className="transform-duration">{t.duration}</span>
                  </div>
                  <h3 className="transform-name">{t.name}</h3>
                  <p className="transform-quote">"{t.quote}"</p>
                  <div className="stars">⭐⭐⭐⭐⭐</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="section bg-dark-light text-center">
        <div className="container">
          <span className="section-tag reveal">You're Next</span>
          <h2 className="section-title reveal">Ready to Write Your <span className="text-accent">Success Story?</span></h2>
          <p className="section-subtitle reveal">
            Every one of these clients started exactly where you are now. Book your free consultation and let's build your plan.
          </p>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Book Free Consultation <ArrowRight size={20} /></Link>
            <a href="https://wa.me/15551234567" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
