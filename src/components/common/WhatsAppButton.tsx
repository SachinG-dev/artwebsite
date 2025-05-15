import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const WhatsAppButton: React.FC = () => {
  const location = useLocation();
  const phoneNumber = "1234567890"; // Replace with actual WhatsApp number
  
  const getWhatsAppMessage = () => {
    // Custom message based on current page
    const path = location.pathname;
    
    if (path.includes('/gallery') && location.search) {
      // If there's a query parameter for a specific artwork
      const params = new URLSearchParams(location.search);
      const artworkId = params.get('id');
      if (artworkId) {
        return `Hello, I'm interested in purchasing artwork ${artworkId}. Can you provide more details?`;
      }
    }
    
    if (path.includes('/courses')) {
      return "Hello, I'm interested in your art courses. Can you provide more information?";
    }
    
    if (path.includes('/events')) {
      return "Hello, I'd like to know more about your upcoming events.";
    }
    
    // Default message
    return "Hello, I'm visiting your portfolio website and would like to connect.";
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(getWhatsAppMessage());
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <button 
      onClick={handleWhatsAppClick} 
      className="whatsapp-button"
      aria-label="Contact via WhatsApp"
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default WhatsAppButton;