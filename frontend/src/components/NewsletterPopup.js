import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Gift } from 'lucide-react';

const PopupOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.6);
  z-index: 3000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const PopupContainer = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 40px;
  max-width: 500px;
  width: 100%;
  position: relative;
  text-align: center;
  box-shadow: 0 20px 60px rgba(0,0,0,0.3);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  cursor: pointer;
  color: #64748b;
  padding: 5px;
  
  &:hover {
    color: #1e293b;
  }
`;

const PopupIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  color: white;
`;

const PopupTitle = styled.h2`
  font-size: 2rem;
  color: #1e293b;
  margin-bottom: 15px;
  font-weight: 700;
`;

const PopupSubtitle = styled.p`
  color: #64748b;
  font-size: 1.1rem;
  margin-bottom: 30px;
  line-height: 1.6;
`;

const NewsletterForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const EmailInput = styled.input`
  padding: 15px 20px;
  border: 2px solid #e2e8f0;
  border-radius: 12px;
  font-size: 16px;
  
  &:focus {
    outline: none;
    border-color: #1e293b;
  }
`;

const SubscribeButton = styled.button`
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  border: none;
  padding: 15px 30px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(30, 41, 59, 0.3);
  }
`;

const Benefits = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 25px;
  padding-top: 25px;
  border-top: 1px solid #e2e8f0;
`;

const Benefit = styled.div`
  text-align: center;
  
  h4 {
    color: #1e293b;
    font-size: 0.9rem;
    margin-bottom: 5px;
  }
  
  p {
    color: #64748b;
    font-size: 0.8rem;
  }
`;

const NewsletterPopup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const hasSeenPopup = localStorage.getItem('newsletter-popup-seen');
    
    if (!hasSeenPopup) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 10000); // Show after 10 seconds
      
      return () => clearTimeout(timer);
    }
  }, []);

  const handleClose = () => {
    setIsVisible(false);
    localStorage.setItem('newsletter-popup-seen', 'true');
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Thank you for subscribing with ${email}!`);
      handleClose();
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <PopupOverlay
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleClose}
        >
          <PopupContainer
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            onClick={(e) => e.stopPropagation()}
          >
            <CloseButton onClick={handleClose}>
              <X size={24} />
            </CloseButton>
            
            <PopupIcon>
              <Gift size={32} />
            </PopupIcon>
            
            <PopupTitle>Stay in the Loop!</PopupTitle>
            <PopupSubtitle>
              Get exclusive updates on our latest AI innovations, product launches, and industry insights delivered to your inbox.
            </PopupSubtitle>
            
            <NewsletterForm onSubmit={handleSubmit}>
              <EmailInput
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <SubscribeButton type="submit">
                Subscribe Now
              </SubscribeButton>
            </NewsletterForm>
            
            <Benefits>
              <Benefit>
                <h4>Weekly Updates</h4>
                <p>Latest news & insights</p>
              </Benefit>
              <Benefit>
                <h4>Early Access</h4>
                <p>New features first</p>
              </Benefit>
              <Benefit>
                <h4>No Spam</h4>
                <p>Unsubscribe anytime</p>
              </Benefit>
            </Benefits>
          </PopupContainer>
        </PopupOverlay>
      )}
    </AnimatePresence>
  );
};

export default NewsletterPopup;