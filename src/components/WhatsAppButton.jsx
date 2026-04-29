import React from 'react';
import { MessageCircle } from 'lucide-react';
import './WhatsAppButton.css';

const WhatsAppButton = () => {
  return (
    <a 
      href="https://wa.me/15551234567" 
      target="_blank" 
      rel="noopener noreferrer" 
      className="whatsapp-btn"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
      <span className="whatsapp-tooltip">Chat with Coach</span>
    </a>
  );
};

export default WhatsAppButton;
