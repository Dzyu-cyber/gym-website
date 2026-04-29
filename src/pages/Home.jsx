import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, ChevronDown, Trophy, Users, Star, Clock, Target, Zap, Shield, Award } from 'lucide-react';
import './Home.css';

// ── Animated counter ──
const Counter = ({ end, suffix, label }) => {
  const ref = useRef(null);
  useEffect(() => {
    let start = 0;
    const step = end / 80;
    const timer = setInterval(() => {
      start += step;
      if (start >= end) { start = end; clearInterval(timer); }
      if (ref.current) ref.current.textContent = Math.floor(start) + suffix;
    }, 20);
    return () => clearInterval(timer);
  }, [end, suffix]);
  return (
    <div className="stat-item">
      <span className="stat-number text-accent" ref={ref}>0{suffix}</span>
      <span className="stat-label">{label}</span>
    </div>
  );
};

// ── Scroll reveal hook ──
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

const programs = [
  { icon: '🔥', title: 'Fat Loss Program', desc: '12-week science-backed fat burning protocol combining cardio, strength, and nutrition.' },
  { icon: '💪', title: 'Muscle Gain Program', desc: 'Structured hypertrophy training with progressive overload for maximum muscle growth.' },
  { icon: '⚡', title: 'Strength Training', desc: 'Build raw power with compound movements and periodized programming.' },
  { icon: '🏋️', title: 'Personal Training', desc: '1-on-1 sessions tailored to your exact goals, schedule, and fitness level.' },
  { icon: '📱', title: 'Online Coaching', desc: 'Expert coaching from anywhere in the world with weekly check-ins and plan adjustments.' },
  { icon: '🏆', title: 'Competition Prep', desc: 'Periodized peaking protocol for bodybuilding or powerlifting competitions.' },
];

const trustItems = [
  { icon: <Shield size={32} />, title: 'Certified Trainer', desc: 'NASM & ACE certified with specialized strength & conditioning credentials.' },
  { icon: <Trophy size={32} />, title: '5+ Years Experience', desc: 'Coached clients from complete beginners to competitive athletes.' },
  { icon: <Users size={32} />, title: '500+ Transformations', desc: 'Proven track record of delivering life-changing results.' },
  { icon: <Target size={32} />, title: 'Personalized Plans', desc: 'Every program is custom-built around your unique body and goals.' },
  { icon: <Zap size={32} />, title: 'Diet + Workout Support', desc: 'Complete coaching covering both training and nutrition guidance.' },
  { icon: <Award size={32} />, title: 'Proven Results', desc: 'Real client transformations backed by data, not empty promises.' },
];

const testimonials = [
  { name: 'Rahul M.', result: 'Lost 18kg in 4 months', text: 'Coach completely changed my life. I never thought I could look and feel this way. The program is intense but the results speak for themselves.', stars: 5 },
  { name: 'Priya S.', result: 'Dropped 3 dress sizes', text: 'Lost 12kg in 3 months with proper coaching! The diet plan was easy to follow and the workouts were challenging but fun. Best investment I\'ve made.', stars: 5 },
  { name: 'Arjun K.', result: 'Gained 8kg muscle', text: 'Finally put on the muscle I always wanted. The personalized program and weekly check-ins kept me on track every single week.', stars: 5 },
  { name: 'Sneha R.', result: 'Competed first time ever', text: 'Went from never lifting to standing on stage in 6 months. The coach\'s expertise and support made the impossible possible.', stars: 5 },
];

export default function Home() {
  useScrollReveal();

  return (
    <main>
      {/* ── HERO ── */}
      <section className="hero-section" id="home">
        <div className="hero-overlay" />
        <img src="/hero-bg.png" alt="IronCore Fitness gym" className="hero-bg-img" />
        <div className="container hero-content">
          <div className="hero-badge reveal">
            <Trophy size={16} className="text-accent" />
            <span>500+ Client Transformations</span>
          </div>
          <h1 className="hero-title reveal">
            Build Strength.<br />
            <span className="text-accent">Burn Fat.</span><br />
            Transform Your Life.
          </h1>
          <p className="hero-subtitle reveal">
            Helping people achieve real fitness transformations through expert coaching,<br />
            structured programs, and <strong>proven results</strong>.
          </p>
          <div className="hero-cta reveal">
            <Link to="/contact" className="btn btn-primary">
              Book Free Consultation <ArrowRight size={20} />
            </Link>
            <a href="https://wa.me/15551234567" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} /> WhatsApp Now
            </a>
            <Link to="/transformations" className="btn btn-outline">
              View Transformations
            </Link>
          </div>
          <div className="hero-stats reveal">
            <Counter end={500} suffix="+" label="Transformations" />
            <div className="stat-divider" />
            <Counter end={5} suffix="+" label="Years Experience" />
            <div className="stat-divider" />
            <Counter end={98} suffix="%" label="Client Satisfaction" />
            <div className="stat-divider" />
            <Counter end={12} suffix="kg" label="Avg Fat Loss" />
          </div>
        </div>
        <a href="#programs" className="hero-scroll">
          <ChevronDown size={28} />
        </a>
      </section>

      {/* ── PROGRAMS ── */}
      <section className="section bg-dark-light" id="programs">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="section-tag">What We Offer</span>
            <h2 className="section-title">Programs Built for <span className="text-accent">Results</span></h2>
            <p className="section-subtitle">Every program is engineered to deliver maximum results for your specific goal.</p>
          </div>
          <div className="programs-grid">
            {programs.map((p, i) => (
              <div key={i} className="program-card reveal">
                <div className="program-icon">{p.icon}</div>
                <h3>{p.title}</h3>
                <p>{p.desc}</p>
                <Link to="/programs" className="card-link">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
          <div className="text-center reveal" style={{ marginTop: '50px' }}>
            <Link to="/programs" className="btn btn-primary">See All Programs <ArrowRight size={20} /></Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE ME ── */}
      <section className="section bg-dark">
        <div className="container">
          <div className="why-grid">
            <div className="why-left reveal">
              <span className="section-tag">Why Choose IronCore</span>
              <h2 className="section-title">This Is <span className="text-accent">Real Coaching.</span><br />Not Guesswork.</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '30px', fontSize: '1.1rem' }}>
                Every client gets a custom-designed plan built on science, not trends. I work with you every step of the way.
              </p>
              <div className="trust-list">
                {trustItems.map((item, i) => (
                  <div key={i} className="trust-item reveal">
                    <div className="trust-icon text-accent">{item.icon}</div>
                    <div>
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '30px' }}>
                Start Your Journey <ArrowRight size={20} />
              </Link>
            </div>
            <div className="why-right reveal">
              <div className="trainer-img-wrap">
                <img src="/trainer.png" alt="IronCore personal trainer" className="trainer-img" />
                <div className="trainer-badge">
                  <Star size={20} className="text-accent" />
                  <div>
                    <strong>Top Rated Coach</strong>
                    <span>5.0 / 5.0 Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRANSFORMATIONS ── */}
      <section className="section bg-dark-light">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="section-tag">Real Results</span>
            <h2 className="section-title">Client <span className="text-accent">Transformations</span></h2>
            <p className="section-subtitle">These aren't stock photos. These are real people who trusted the process.</p>
          </div>
          <div className="transforms-grid">
            <div className="transform-card reveal">
              <img src="/transformation-1.png" alt="Client transformation 1" />
              <div className="transform-overlay">
                <p>Lost 18kg in 16 weeks</p>
              </div>
            </div>
            <div className="transform-card reveal">
              <img src="/transformation-2.png" alt="Client transformation 2" />
              <div className="transform-overlay">
                <p>Gained 10kg lean muscle</p>
              </div>
            </div>
            <div className="transform-card reveal">
              <img src="/transformation-3.png" alt="Client transformation 3" />
              <div className="transform-overlay">
                <p>Dropped 3 dress sizes in 12 weeks</p>
              </div>
            </div>
          </div>
          <div className="text-center reveal" style={{ marginTop: '50px' }}>
            <Link to="/transformations" className="btn btn-primary">See All Transformations <ArrowRight size={20} /></Link>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="section bg-dark">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="section-tag">What Clients Say</span>
            <h2 className="section-title">Real Words From <span className="text-accent">Real People</span></h2>
          </div>
          <div className="testimonials-grid">
            {testimonials.map((t, i) => (
              <div key={i} className="testimonial-card reveal">
                <div className="stars">{'⭐'.repeat(t.stars)}</div>
                <p className="testimonial-text">"{t.text}"</p>
                <div className="testimonial-author">
                  <div className="author-avatar">{t.name[0]}</div>
                  <div>
                    <strong>{t.name}</strong>
                    <span className="text-accent">{t.result}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section className="cta-section">
        <div className="cta-overlay" />
        <div className="container cta-content text-center">
          <span className="section-tag reveal">Limited Spots Available</span>
          <h2 className="cta-title reveal">Your Transformation <span className="text-accent">Starts Today</span></h2>
          <p className="cta-subtitle reveal">Stop waiting. Every week you delay is a week behind. Book your free consultation and let's build your transformation plan.</p>
          <div className="cta-buttons reveal">
            <Link to="/contact" className="btn btn-primary">Book Free Consultation <ArrowRight size={20} /></Link>
            <a href="https://wa.me/15551234567" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <div className="mobile-sticky-cta">
        <Link to="/contact" className="btn btn-primary" style={{ flex: 1 }}>Book Now</Link>
        <a href="https://wa.me/15551234567" className="btn btn-whatsapp" style={{ flex: 1 }} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={18} /> WhatsApp
        </a>
      </div>
    </main>
  );
}
