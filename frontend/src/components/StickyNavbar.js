import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import INITXLogo from './INITXLogo';

const Nav = styled(motion.nav)`
  background: ${props => props.scrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.9)'};
  backdrop-filter: blur(10px);
  padding: 0.3rem 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: all 0.3s ease;
  box-shadow: ${props => props.scrolled ? '0 2px 20px rgba(0,212,255,0.2)' : 'none'};
  border-bottom: none;
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 8px;
    background: linear-gradient(90deg, 
      transparent 0%, 
      #000000 5%,
      #1e3a8a 15%, 
      #ffffff 30%, 
      #1e3a8a 45%, 
      #000000 60%, 
      #ffffff 75%, 
      #1e3a8a 90%, 
      transparent 100%
    );
    animation: techFlow 3s ease-in-out infinite;
    box-shadow: 
      0 0 20px rgba(30, 58, 138, 0.6),
      0 0 40px rgba(255, 255, 255, 0.4),
      0 0 60px rgba(0, 0, 0, 0.3),
      inset 0 1px 0 rgba(255, 255, 255, 0.5);
    border-radius: 0 0 4px 4px;
  }
  
  &::before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: repeating-linear-gradient(
      90deg,
      #ffffff 0px,
      #ffffff 3px,
      #1e3a8a 3px,
      #1e3a8a 6px,
      #000000 6px,
      #000000 9px,
      transparent 9px,
      transparent 12px
    );
    animation: techPattern 2s linear infinite;
    z-index: 2;
  }
  
  @keyframes techFlow {
    0%, 100% { 
      opacity: 0.8;
      transform: scaleX(1);
    }
    50% { 
      opacity: 1;
      transform: scaleX(1.02);
    }
  }
  
  @keyframes techPattern {
    0% { transform: translateX(0); }
    100% { transform: translateX(16px); }
  }
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Logo = styled(Link)`
  display: flex;
  align-items: center;
  text-decoration: none;
  transition: color 0.3s ease;
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  
  @media (max-width: 768px) {
    display: ${props => props.isOpen ? 'flex' : 'none'};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: white;
    flex-direction: column;
    padding: 20px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    gap: 15px;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  padding: 8px 16px;
  border-radius: 8px;
  transition: all 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(0, 212, 255, 0.1);
    color: #00d4ff;
  }
  
  @media (max-width: 768px) {
    color: #0f172a;
    width: 100%;
    text-align: center;
    padding: 12px 16px;
    
    &:hover {
      background: rgba(0, 212, 255, 0.1);
      color: #0066ff;
    }
  }
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 15px;
  }
`;

const MobileMenuButton = styled.button`
  display: none;
  background: none;
  border: 1px solid rgba(0,212,255,0.3);
  color: white;
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(0,212,255,0.1);
    border-color: #00d4ff;
  }
  
  @media (max-width: 768px) {
    display: block;
  }
`;

const StickyNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <Nav
      scrolled={scrolled}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <NavContainer>
        <Logo to="/" scrolled={scrolled}>
          <INITXLogo color="white" />
        </Logo>
        
        <NavLinks isOpen={mobileMenuOpen}>
          <NavLink to="/" scrolled={scrolled} onClick={handleLinkClick}>Home</NavLink>
          <NavLink to="/about" scrolled={scrolled} onClick={handleLinkClick}>About</NavLink>
          <NavLink to="/products" scrolled={scrolled} onClick={handleLinkClick}>Products</NavLink>
          <NavLink to="/news" scrolled={scrolled} onClick={handleLinkClick}>News</NavLink>
          <NavLink to="/careers" scrolled={scrolled} onClick={handleLinkClick}>Careers</NavLink>
          <NavLink to="/contact" scrolled={scrolled} onClick={handleLinkClick}>Contact</NavLink>
          
          <NavLink to="/dashboard" scrolled={scrolled} onClick={handleLinkClick}>Dashboard</NavLink>
        </NavLinks>

        <MobileMenuButton 
          scrolled={scrolled}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </MobileMenuButton>
      </NavContainer>
    </Nav>
  );
};

export default StickyNavbar;