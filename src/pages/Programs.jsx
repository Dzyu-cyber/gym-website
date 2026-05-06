import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Check, Clock, Target, TrendingUp, MessageCircle } from 'lucide-react';
import './Programs.css';

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
  {
    emoji: '🔥',
    tag: 'Most Popular',
    title: 'Fat Loss Program',
    duration: '12 Weeks',
    goal: 'Lose 8–18kg of body fat',
    price: '₹8,999 / month',
    description: 'Our most powerful fat loss protocol combines metabolic strength training, strategic cardio, and a custom nutrition plan to maximize fat burning while preserving hard-earned muscle.',
    benefits: [
      'Custom calorie-deficit diet plan',
      'Full 6-day workout program',
      'Weekly body composition check-in',
      'Supplement guidance',
      'WhatsApp support 7 days a week',
      'Nutrition re-calculation every 2 weeks',
    ],
    outcome: 'Expect 6–12kg fat loss in 12 weeks with visible body recomposition.',
    accent: true,
  },
  {
    emoji: '💪',
    tag: 'Best for Beginners',
    title: 'Muscle Gain Program',
    duration: '16 Weeks',
    goal: 'Build 5–10kg lean muscle',
    price: '₹7,999 / month',
    description: 'A science-backed hypertrophy program designed to stimulate maximum muscle growth through progressive overload, volume management, and optimized protein nutrition.',
    benefits: [
      'Periodized 5-day training split',
      'High-protein meal plan',
      'Progressive overload tracking',
      'Video form corrections',
      'Monthly performance assessment',
      'Rest & recovery protocols',
    ],
    outcome: 'Build 5–10kg of quality muscle in 16 weeks with a strength baseline increase of 30–50%.',
    accent: false,
  },
  {
    emoji: '⚡',
    tag: 'Elite Performance',
    title: 'Strength Training',
    duration: '12 Weeks',
    goal: 'Massively increase raw strength',
    price: '₹7,499 / month',
    description: 'Powerlifting-inspired periodized programming focused on the big compound lifts — Squat, Bench Press, and Deadlift — with accessory work for balanced development.',
    benefits: [
      '4-day powerlifting split',
      'Strength-focused macros',
      'RPE-based training intensity',
      'Technique coaching videos',
      'Peaking block for max lifts',
      'Deload protocol included',
    ],
    outcome: 'Expect 30–50% increase in your main lifts over 12 weeks.',
    accent: false,
  },
  {
    emoji: '🏋️',
    tag: 'Premium',
    title: 'Personal Training',
    duration: 'Ongoing',
    goal: 'Personalized 1-on-1 coaching',
    price: '₹2,499 / session',
    description: 'Work side-by-side with the coach in our premium gym facility. Every session is 100% tailored to your goals with real-time form corrections and progression tracking.',
    benefits: [
      'Private 1-on-1 gym sessions',
      'Real-time form coaching',
      'Session-by-session adjustments',
      'Nutritional guidance',
      'Progress photos & measurements',
      'Flexible scheduling',
    ],
    outcome: 'The fastest path to results with direct expert supervision at every step.',
    accent: false,
  },
  {
    emoji: '📱',
    tag: 'Nationwide',
    title: 'Online Coaching',
    duration: 'Monthly',
    goal: 'Expert coaching, anywhere',
    price: '₹4,999 / month',
    description: 'Get the full IronCore experience delivered digitally. Includes a custom training program, nutrition plan, weekly video check-ins, and unlimited messaging support.',
    benefits: [
      'Custom training & diet plan',
      'Weekly video check-in call',
      'App-based workout tracking',
      'Unlimited WhatsApp support',
      'Plan adjustments every 4 weeks',
      'Blood work & supplement review',
    ],
    outcome: 'Results identical to in-person coaching — delivered anywhere in the world.',
    accent: false,
  },
  {
    emoji: '🥗',
    tag: 'Add-On',
    title: 'Diet Coaching',
    duration: '8 Weeks',
    goal: 'Overhaul your nutrition',
    price: '₹2,999 / month',
    description: 'Nutrition-only coaching for those who want to dial in their diet without a training program. Ideal for adding onto any existing gym routine.',
    benefits: [
      'Full macro & calorie calculation',
      'Meal-by-meal diet plan',
      'Indian food-friendly meal options',
      'Grocery list & meal prep guide',
      'Weekly nutrition check-in',
      'Cheat meal strategy included',
    ],
    outcome: 'Understand and control your nutrition completely for sustainable long-term results.',
    accent: false,
  },
];

export default function Programs() {
  useScrollReveal();

  return (
    <main>
      <section className="page-hero programs-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content text-center">
          <span className="section-tag reveal">Engineered for Results</span>
          <h1 className="section-title reveal" style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}>
            Choose Your <span className="text-accent">Program</span>
          </h1>
          <p className="section-subtitle reveal">
            Every program is precision-built for one goal — your transformation. No cookie-cutter plans. No guesswork.
          </p>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <div className="programs-list">
            {programs.map((p, i) => (
              <div key={i} className={`program-detail-card reveal ${p.accent ? 'featured' : ''}`}>
                {p.accent && <div className="featured-banner">⭐ Most Popular</div>}
                <div className="program-detail-left">
                  <div className="prog-emoji">{p.emoji}</div>
                  <div className="prog-tag">{p.tag}</div>
                  <h2 className="prog-title">{p.title}</h2>
                  <div className="prog-meta">
                    <span><Clock size={16} /> {p.duration}</span>
                    <span><Target size={16} /> {p.goal}</span>
                  </div>
                  <p className="prog-desc">{p.description}</p>
                  <div className="prog-outcome">
                    <TrendingUp size={18} className="text-accent" />
                    <p><strong>Expected Outcome:</strong> {p.outcome}</p>
                  </div>
                  <div className="prog-price">{p.price}</div>
                  <Link to="/contact" className="btn btn-primary">
                    Start This Program <ArrowRight size={20} />
                  </Link>
                </div>
                <div className="program-detail-right">
                  <h3>What's Included</h3>
                  <ul className="prog-benefits">
                    {p.benefits.map((b, j) => (
                      <li key={j}><Check size={18} className="text-accent" /> {b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-dark-light text-center">
        <div className="container">
          <span className="section-tag reveal">Not Sure Which Program?</span>
          <h2 className="section-title reveal">Get a <span className="text-accent">Free Consultation</span></h2>
          <p className="section-subtitle reveal">Book a free 30-minute call with the coach. We'll assess your goals and recommend the perfect program for you.</p>
          <div className="reveal" style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary">Book Free Call <ArrowRight size={20} /></Link>
            <a href="https://wa.me/919553722793" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
              <MessageCircle size={20} /> WhatsApp Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
