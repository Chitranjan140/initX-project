import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { ArrowRight, Phone, Mail } from 'lucide-react';

const CTAContainer = styled.section`
  padding: 80px 20px;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  text-align: center;
`;

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  opacity: 0.9;
  margin-bottom: 40px;
  line-height: 1.6;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const CTAButton = styled(Link)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 15px 30px;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  text-decoration: none;
  transition: all 0.3s ease;
  
  &.primary {
    background: white;
    color: #1e293b;
    
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 30px rgba(255,255,255,0.3);
    }
  }
  
  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
    
    &:hover {
      background: white;
      color: #1e293b;
      transform: translateY(-3px);
    }
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-top: 40px;
  flex-wrap: wrap;
`;

const ContactItem = styled.a`
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  text-decoration: none;
  opacity: 0.9;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const CTABanner = () => {
  return (
    <CTAContainer>
      <Container>
        <Title
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          Ready to Transform Your Business?
        </Title>
        
        <Subtitle
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Let's discuss your project and create something amazing together. 
          Get a free consultation and see how we can help your business grow.
        </Subtitle>
        
        <CTAButtons
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <CTAButton to="/products" className="primary">
            Explore Products
            <ArrowRight size={20} />
          </CTAButton>
          
          <CTAButton to="/contact" className="secondary">
            Get Started
          </CTAButton>
        </CTAButtons>
        
        <ContactInfo
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <ContactItem href="tel:+1234567890">
            <Phone size={18} />
            +1 (555) 123-4567
          </ContactItem>
          
          <ContactItem href="mailto:hello@ontech.com">
            <Mail size={18} />
            hello@ontech.com
          </ContactItem>
        </ContactInfo>
      </Container>
    </CTAContainer>
  );
};

export default CTABanner;