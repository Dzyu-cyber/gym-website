import React from 'react';
import { Link } from 'react-router-dom';
import { Dumbbell, Globe, MessageCircle, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-dark-light">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-logo">
              <Dumbbell className="logo-icon" />
              <span>IRON<span className="text-accent">CORE</span></span>
            </Link>
            <p className="footer-desc">
              Helping people achieve real fitness transformations through expert coaching, structured programs, and proven results.
            </p>
            <div className="social-links">
              <a href="https://instagram.com/ironcorefitness" className="social-icon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
              </a>
              <a href="#" className="social-icon" aria-label="WhatsApp">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="social-icon" aria-label="Website">
                <Globe size={20} />
              </a>
            </div>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              <li><Link to="/about">About Coach</Link></li>
              <li><Link to="/programs">Programs</Link></li>
              <li><Link to="/transformations">Transformations</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Programs</h3>
            <ul className="footer-links">
              <li><Link to="/programs">Fat Loss Program</Link></li>
              <li><Link to="/programs">Muscle Building</Link></li>
              <li><Link to="/programs">Personal Training</Link></li>
              <li><Link to="/programs">Online Coaching</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3 className="footer-title">Contact Info</h3>
            <ul className="contact-info">
              <li><MapPin size={18} className="text-accent" /> <span>123 Fitness Ave, Gym City</span></li>
              <li><Phone size={18} className="text-accent" /> <span>+1 (555) 123-4567</span></li>
              <li><Mail size={18} className="text-accent" /> <span>coach@ironcore.fitness</span></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} IronCore Fitness. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
