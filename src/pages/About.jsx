import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, Heart, Target, MessageCircle } from 'lucide-react';
import './About.css';

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

const certs = [
  { icon: <Award size={22} />, title: 'NASM Certified', desc: 'National Academy of Sports Medicine - CPT' },
  { icon: <Award size={22} />, title: 'ACE Certified', desc: 'American Council on Exercise - Personal Trainer' },
  { icon: <Award size={22} />, title: 'Precision Nutrition', desc: 'Level 1 Nutrition Coaching Certification' },
  { icon: <Award size={22} />, title: 'CSCS Prep', desc: 'Strength & Conditioning Specialist Training' },
];

const values = [
  { icon: <Heart size={28} />, title: 'Client-First', desc: 'Every decision I make is about YOUR results, not what is easiest.' },
  { icon: <Target size={28} />, title: 'Goal-Oriented', desc: 'We set crystal-clear targets and build every plan around hitting them.' },
  { icon: <BookOpen size={28} />, title: 'Science-Backed', desc: 'No bro-science. Every method is grounded in proven sports science.' },
  { icon: <Award size={28} />, title: 'Accountability', desc: 'I check in, track your progress, and hold you to the standard you deserve.' },
];

export default function About() {
  useScrollReveal();

  return (
    <main>
      <section className="page-hero about-hero">
        <div className="page-hero-overlay" />
        <div className="container page-hero-content text-center">
          <span className="section-tag reveal">Your Coach</span>
          <h1 className="section-title reveal" style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)' }}>
            Meet the <span className="text-accent">Coach</span>
          </h1>
          <p className="section-subtitle reveal">
            The trainer behind 500+ transformations and a mission to change how people think about fitness.
          </p>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <div className="about-story-grid">
            <div className="about-img-col reveal">
              <div className="about-img-wrap">
                <img src="/trainer.png" alt="IronCore fitness coach" className="about-trainer-img" />
                <div className="about-exp-badge">
                  <span className="badge-number text-accent">5+</span>
                  <span className="badge-text">Years of<br />Elite Coaching</span>
                </div>
              </div>
            </div>
            <div className="about-story-col reveal">
              <span className="section-tag">My Story</span>
              <h2 className="section-title">From <span className="text-accent">Struggling</span><br />to Coaching Champions</h2>
              <p>
                I know what it feels like to stare at yourself in the mirror and hate what you see. At 19, I was 94kg, unhappy, and completely lost when it came to fitness. I tried everything - crash diets, random YouTube workouts, detox teas. Nothing worked.
              </p>
              <p>
                Then I found a great coach. Within 8 months I lost 24kg and gained more muscle than I had ever had. I became obsessed - not just with my own transformation, but with understanding <em>why</em> it worked.
              </p>
              <p>
                I spent the next 3 years getting certified, studying sports science, and coaching anyone who let me help them. What started as 5 free clients became a fully-booked practice with a 3-month waitlist.
              </p>
              <p>
                Today I have helped <strong>500+ clients</strong> transform their bodies, boost their confidence, and completely upgrade their lives. And I am just getting started.
              </p>
              <Link to="/contact" className="btn btn-primary" style={{ marginTop: '30px' }}>
                Work With Me <ArrowRight size={20} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark-light">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="section-tag">Credentials</span>
            <h2 className="section-title">Certifications &amp; <span className="text-accent">Credentials</span></h2>
            <p className="section-subtitle">Backed by industry-leading certifications and continuous education.</p>
          </div>
          <div className="certs-grid">
            {certs.map((c, i) => (
              <div key={i} className="cert-card reveal">
                <div className="cert-icon text-accent">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <div className="section-header text-center reveal">
            <span className="section-tag">Coaching Philosophy</span>
            <h2 className="section-title">What I <span className="text-accent">Stand For</span></h2>
          </div>
          <div className="values-grid">
            {values.map((v, i) => (
              <div key={i} className="value-card reveal">
                <div className="value-icon text-accent">{v.icon}</div>
                <h3>{v.title}</h3>
                <p>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <div className="mission-inner reveal">
            <span className="section-tag">My Mission</span>
            <h2 className="section-title" style={{ color: 'white' }}>
              To Make <span style={{ color: '#000' }}>Fitness Transformation</span><br />
              Accessible to <span style={{ color: '#000' }}>Everyone</span>
            </h2>
            <p>
              I believe every person deserves to experience what it feels like to be strong, lean, and confident. Not just athletes. Not just people with good genetics. Everyone.
            </p>
            <div className="mission-cta">
              <Link to="/contact" className="btn" style={{ background: '#000', color: '#fff' }}>
                Book Free Consultation <ArrowRight size={20} />
              </Link>
              <a href="https://wa.me/15551234567" className="btn btn-whatsapp" target="_blank" rel="noopener noreferrer">
                <MessageCircle size={20} /> WhatsApp Me
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
