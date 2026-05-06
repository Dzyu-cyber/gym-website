import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <div className="whatsapp-wrapper">
      <div className="whatsapp-message">Contact us! 😊</div>
      <a 
        href="https://wa.me/919553722793" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="whatsapp-btn"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} />
        <span className="whatsapp-tooltip">Chat with Coach</span>
      </a>
    </div>
  );
};

export default WhatsAppButton;
