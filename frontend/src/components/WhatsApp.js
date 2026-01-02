import React from 'react';
import styled from 'styled-components';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = styled.a`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 60px;
  height: 60px;
  background: #25d366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  text-decoration: none;
  box-shadow: 0 4px 20px rgba(37, 211, 102, 0.4);
  z-index: 1000;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 25px rgba(37, 211, 102, 0.6);
  }
  
  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
    bottom: 15px;
    right: 15px;
  }
`;

const WhatsApp = ({ phoneNumber = "1234567890", message = "Hello! I'm interested in OneStopTech services." }) => {
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  
  return (
    <WhatsAppButton 
      href={whatsappUrl} 
      target="_blank" 
      rel="noopener noreferrer"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={24} />
    </WhatsAppButton>
  );
};

export default WhatsApp;