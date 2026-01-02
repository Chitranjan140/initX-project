import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Palette, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import INITXLogo from './INITXLogo';

const FooterContainer = styled.footer`
  background: #1e293b;
  color: white;
  padding: 60px 20px 20px;
  margin-top: 80px;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  gap: 40px;
  margin-bottom: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 20px;
    color: white;
  }
  
  p, li {
    color: #94a3b8;
    line-height: 1.6;
    margin-bottom: 10px;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  a {
    color: #94a3b8;
    text-decoration: none;
    transition: color 0.3s ease;
    
    &:hover {
      color: #667eea;
    }
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  color: white;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
  color: #94a3b8;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 20px;
`;

const SocialLink = styled.a`
  width: 40px;
  height: 40px;
  background: #334155;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #94a3b8;
  transition: all 0.3s ease;
  
  &:hover {
    background: #667eea;
    color: white;
    transform: translateY(-2px);
  }
`;

const FooterBottom = styled.div`
  border-top: 1px solid #334155;
  padding-top: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #64748b;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterGrid>
          <FooterSection>
            <INITXLogo color="white" />
            <p>
              Empowering designers and transforming digital experiences. 
              Join thousands of professionals who trust INITX for their design needs.
            </p>
            
            <ContactInfo>
              <Mail size={16} />
              <a href="mailto:hello@initx.com" style={{ color: 'inherit', textDecoration: 'none' }}>hello@initx.com</a>
            </ContactInfo>
            <ContactInfo>
              <Phone size={16} />
              +1 (555) 123-4567
            </ContactInfo>
            <ContactInfo>
              <MapPin size={16} />
              123 Design Street, San Francisco, CA 94102
            </ContactInfo>
            
            <SocialLinks>
              <SocialLink href="#" aria-label="Facebook">
                <Facebook size={20} />
              </SocialLink>
              <SocialLink href="#" aria-label="Twitter">
                <Twitter size={20} />
              </SocialLink>
              <SocialLink href="#" aria-label="Instagram">
                <Instagram size={20} />
              </SocialLink>
              <SocialLink href="#" aria-label="LinkedIn">
                <Linkedin size={20} />
              </SocialLink>
            </SocialLinks>
          </FooterSection>

          <FooterSection>
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/products">Products</Link></li>
              <li><Link to="/news">News</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Platform</h3>
            <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/register">Register</Link></li>
            </ul>
          </FooterSection>

          <FooterSection>
            <h3>Support</h3>
            <ul>
              <li><Link to="/contact">Help Center</Link></li>
              <li><Link to="/contact">Contact Support</Link></li>
            </ul>
          </FooterSection>
        </FooterGrid>

        <FooterBottom>
          <div>
            <p>&copy; 2024 INITX. All rights reserved.</p>
          </div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/privacy" style={{ color: '#64748b', textDecoration: 'none' }}>
              Privacy Policy
            </Link>
            <Link to="/terms" style={{ color: '#64748b', textDecoration: 'none' }}>
              Terms of Service
            </Link>
            <Link to="/cookies" style={{ color: '#64748b', textDecoration: 'none' }}>
              Cookie Policy
            </Link>
          </div>
        </FooterBottom>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;