import React from 'react';
import styled, { keyframes, css } from 'styled-components';

const glow = keyframes`
  0%, 100% { 
    filter: drop-shadow(0 0 20px rgba(255, 107, 107, 0.8)) drop-shadow(0 0 35px rgba(78, 205, 196, 0.6));
    transform: scale(1) rotate(0deg);
  }
  50% { 
    filter: drop-shadow(0 0 35px rgba(255, 107, 107, 1)) drop-shadow(0 0 50px rgba(78, 205, 196, 0.8)) drop-shadow(0 0 70px rgba(254, 202, 87, 0.4));
    transform: scale(1.1) rotate(5deg);
  }
`;

const miningEffect = keyframes`
  0% { transform: translateY(0) scale(1); opacity: 0.8; }
  25% { transform: translateY(-5px) scale(1.1); opacity: 1; }
  50% { transform: translateY(-10px) scale(1.2); opacity: 0.9; }
  75% { transform: translateY(-5px) scale(1.1); opacity: 1; }
  100% { transform: translateY(0) scale(1); opacity: 0.8; }
`;

const cryptoGlow = keyframes`
  0%, 100% { 
    text-shadow: 0 0 10px #ffd700, 0 0 20px #ffd700, 0 0 30px #ffd700;
    color: #ffd700;
  }
  50% { 
    text-shadow: 0 0 20px #ff6b6b, 0 0 30px #ff6b6b, 0 0 40px #ff6b6b;
    color: #ff6b6b;
  }
`;

const blockchainPulse = keyframes`
  0%, 100% { 
    box-shadow: 0 0 5px #00ff00, inset 0 0 5px rgba(0, 255, 0, 0.2);
    background: rgba(0, 255, 0, 0.1);
  }
  50% { 
    box-shadow: 0 0 15px #00ff00, inset 0 0 10px rgba(0, 255, 0, 0.4);
    background: rgba(0, 255, 0, 0.3);
  }
`;

const hashAnimation = keyframes`
  0% { transform: translateX(-100%) rotate(0deg); opacity: 0; }
  25% { opacity: 1; }
  75% { opacity: 1; }
  100% { transform: translateX(100%) rotate(180deg); opacity: 0; }
`;

const matrixEffect = keyframes`
  0% { opacity: 0; transform: translateY(-20px) scale(0.8); }
  50% { opacity: 1; transform: translateY(0) scale(1.2); }
  100% { opacity: 0; transform: translateY(20px) scale(0.8); }
`;

const electricPulse = keyframes`
  0%, 100% { 
    box-shadow: 0 0 5px #ff6b6b, 0 0 10px #4ecdc4, 0 0 15px #feca57;
    filter: brightness(1);
  }
  50% { 
    box-shadow: 0 0 20px #ff6b6b, 0 0 30px #4ecdc4, 0 0 40px #feca57;
    filter: brightness(1.5);
  }
`;

const dataStream = keyframes`
  0% { transform: translateX(-200%) rotate(0deg); opacity: 0; }
  25% { opacity: 1; }
  75% { opacity: 1; }
  100% { transform: translateX(200%) rotate(360deg); opacity: 0; }
`;

const dataFlow = keyframes`
  0% { transform: translateX(-100%) translateY(0); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(100%) translateY(0); opacity: 0; }
`;

const networkPulse = keyframes`
  0%, 100% { opacity: 0.3; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const binaryRain = keyframes`
  0% { transform: translateY(-100%); opacity: 0; }
  10% { opacity: 1; }
  90% { opacity: 1; }
  100% { transform: translateY(100%); opacity: 0; }
`;

const circuitPulse = keyframes`
  0%, 100% { opacity: 0.7; transform: scale(1); }
  50% { opacity: 1; transform: scale(1.2); }
`;

const rgbAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s ease;
  position: relative;
  
  &:hover .logo-icon {
    transform: scale(1.25) rotate(20deg);
    filter: drop-shadow(0 0 50px rgba(255, 107, 107, 1)) drop-shadow(0 0 80px rgba(78, 205, 196, 0.8)) drop-shadow(0 0 120px rgba(254, 202, 87, 0.6));
  }
  
  &:hover .logo-text {
    transform: scale(1.2);
  }
  
  &::before {
    content: '';
    position: absolute;
    inset: -30px;
    background: radial-gradient(circle, rgba(255, 107, 107, 0.3) 0%, rgba(78, 205, 196, 0.2) 50%, transparent 70%);
    border-radius: 50%;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: -1;
  }
  
  &:hover::before {
    opacity: 1;
    animation: ${circuitPulse} 1s ease-in-out infinite;
  }
`;

const LogoIcon = styled.div`
  width: 100px;
  height: 100px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease;
  
  &::before {
    content: '';
    position: absolute;
    width: 90px;
    height: 90px;
    background: linear-gradient(135deg, #ff6b6b 0%, #4ecdc4 50%, #45b7d1 100%);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    animation: ${glow} 2s ease-in-out infinite;
    border: 3px solid rgba(255, 107, 107, 0.8);
    z-index: 1;
    box-shadow: 0 0 30px rgba(255, 107, 107, 0.5), inset 0 0 25px rgba(78, 205, 196, 0.2);
  }
  
  &::after {
    content: '';
    position: absolute;
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, #96ceb4 0%, #feca57 50%, #ff9ff3 100%);
    clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
    z-index: 2;
    border: 2px solid rgba(254, 202, 87, 0.6);
    animation: ${circuitPulse} 3s ease-in-out infinite;
    box-shadow: 0 0 25px rgba(150, 206, 180, 0.7), inset 0 0 20px rgba(255, 159, 243, 0.3);
  }
`;

const TechGrid = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(90deg, rgba(255, 107, 107, 0.3) 1px, transparent 1px),
    linear-gradient(0deg, rgba(78, 205, 196, 0.3) 1px, transparent 1px),
    radial-gradient(circle at 20% 20%, rgba(254, 202, 87, 0.2) 2px, transparent 2px),
    radial-gradient(circle at 80% 80%, rgba(150, 206, 180, 0.2) 2px, transparent 2px);
  background-size: 6px 6px, 6px 6px, 15px 15px, 15px 15px;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
  animation: ${networkPulse} 3s infinite;
  z-index: 3;
  
  &::before {
    content: '01001010';
    position: absolute;
    top: 15%;
    left: 5%;
    font-size: 5px;
    color: #4ecdc4;
    font-family: 'Courier New', monospace;
    animation: ${matrixEffect} 3s infinite;
    text-shadow: 0 0 5px #4ecdc4;
  }
  
  &::after {
    content: '11010110';
    position: absolute;
    bottom: 15%;
    right: 5%;
    font-size: 5px;
    color: #ff6b6b;
    font-family: 'Courier New', monospace;
    animation: ${matrixEffect} 3s infinite 1.5s;
    text-shadow: 0 0 5px #ff6b6b;
  }
`;

const NetworkNodes = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 4;
  
  .node {
    position: absolute;
    width: 6px;
    height: 6px;
    background: radial-gradient(circle, #feca57, #ff6b6b);
    border-radius: 50%;
    animation: ${electricPulse} 2s infinite;
    
    &:nth-child(1) {
      top: 20%;
      left: 20%;
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      top: 20%;
      right: 20%;
      animation-delay: 0.3s;
    }
    
    &:nth-child(3) {
      bottom: 20%;
      left: 20%;
      animation-delay: 0.6s;
    }
    
    &:nth-child(4) {
      bottom: 20%;
      right: 20%;
      animation-delay: 0.9s;
    }
    
    &:nth-child(5) {
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 8px;
      height: 8px;
      background: radial-gradient(circle, #96ceb4, #4ecdc4);
      animation-delay: 1.2s;
    }
  }
  
  .connection {
    position: absolute;
    height: 2px;
    background: linear-gradient(90deg, transparent, #96ceb4, #4ecdc4, transparent);
    animation: ${dataStream} 4s infinite;
    border-radius: 1px;
    
    &:nth-child(6) {
      top: 22%;
      left: 20%;
      width: 60%;
      animation-delay: 0s;
    }
    
    &:nth-child(7) {
      bottom: 22%;
      left: 20%;
      width: 60%;
      animation-delay: 1s;
    }
    
    &:nth-child(8) {
      top: 20%;
      left: 22%;
      width: 2px;
      height: 60%;
      background: linear-gradient(180deg, transparent, #feca57, #ff6b6b, transparent);
      animation-delay: 2s;
    }
    
    &:nth-child(9) {
      top: 20%;
      right: 22%;
      width: 2px;
      height: 60%;
      background: linear-gradient(180deg, transparent, #ff9ff3, #96ceb4, transparent);
      animation-delay: 3s;
    }
  }
`;

const DataParticles = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 5;
  
  .particle {
    position: absolute;
    width: 2px;
    height: 2px;
    background: #ffffff;
    border-radius: 50%;
    animation: ${dataStream} 6s infinite linear;
    
    &:nth-child(1) {
      top: 30%;
      left: 0;
      animation-delay: 0s;
      background: #ff6b6b;
      box-shadow: 0 0 4px #ff6b6b;
    }
    
    &:nth-child(2) {
      top: 50%;
      left: 0;
      animation-delay: 1s;
      background: #4ecdc4;
      box-shadow: 0 0 4px #4ecdc4;
    }
    
    &:nth-child(3) {
      top: 70%;
      left: 0;
      animation-delay: 2s;
      background: #feca57;
      box-shadow: 0 0 4px #feca57;
    }
    
    &:nth-child(4) {
      top: 40%;
      left: 0;
      animation-delay: 3s;
      background: #96ceb4;
      box-shadow: 0 0 4px #96ceb4;
    }
  }
`;

const MiningBlocks = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 6;
  
  .block {
    position: absolute;
    width: 8px;
    height: 8px;
    border: 1px solid #00ff00;
    animation: ${blockchainPulse} 3s infinite;
    
    &:nth-child(1) {
      top: 10%;
      left: 10%;
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      top: 10%;
      right: 10%;
      animation-delay: 0.5s;
    }
    
    &:nth-child(3) {
      bottom: 10%;
      left: 10%;
      animation-delay: 1s;
    }
    
    &:nth-child(4) {
      bottom: 10%;
      right: 10%;
      animation-delay: 1.5s;
    }
  }
  
  .hash {
    position: absolute;
    font-size: 4px;
    color: #00ff00;
    font-family: 'Courier New', monospace;
    animation: ${hashAnimation} 5s infinite;
    text-shadow: 0 0 3px #00ff00;
    
    &:nth-child(5) {
      top: 35%;
      left: 0;
      animation-delay: 0s;
    }
    
    &:nth-child(6) {
      top: 65%;
      left: 0;
      animation-delay: 2.5s;
    }
  }
`;

const CryptoSymbols = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 7;
  
  .symbol {
    position: absolute;
    font-size: 8px;
    font-weight: bold;
    animation: ${miningEffect} 4s infinite;
    
    &:nth-child(1) {
      top: 5%;
      left: 45%;
      color: #ffd700;
      animation-delay: 0s;
    }
    
    &:nth-child(2) {
      top: 85%;
      left: 45%;
      color: #ff6b6b;
      animation-delay: 1s;
    }
    
    &:nth-child(3) {
      top: 45%;
      left: 5%;
      color: #4ecdc4;
      animation-delay: 2s;
    }
    
    &:nth-child(4) {
      top: 45%;
      right: 5%;
      color: #96ceb4;
      animation-delay: 3s;
    }
  }
`;

const LogoText = styled.div`
  position: absolute;
  z-index: 6;
  font-family: 'Arial Black', 'Helvetica', sans-serif;
  font-weight: 900;
  text-align: center;
  
  .company {
    font-size: 14px;
    letter-spacing: 2px;
    margin-bottom: 4px;
    background: linear-gradient(45deg, #ff6b6b, #ffffff, #4ecdc4, #45b7d1);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${rgbAnimation} 3s linear infinite;
    filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 1)) drop-shadow(0 0 15px rgba(255, 107, 107, 1));
  }
  
  .number {
    font-size: 40px;
    line-height: 1;
    margin: 4px 0;
    background: linear-gradient(45deg, #ffffff, #feca57, #ffffff, #96ceb4, #ffffff);
    background-size: 500% 500%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${rgbAnimation} 2s linear infinite, ${miningEffect} 3s infinite;
    filter: drop-shadow(4px 4px 8px rgba(0, 0, 0, 1)) drop-shadow(0 0 30px rgba(255, 255, 255, 1));
    position: relative;
    
    &::before {
      content: '⛏';
      position: absolute;
      left: -25px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
      animation: ${cryptoGlow} 3s infinite, ${miningEffect} 2s infinite;
    }
    
    &::after {
      content: '₿';
      position: absolute;
      right: -25px;
      top: 50%;
      transform: translateY(-50%);
      font-size: 16px;
      animation: ${cryptoGlow} 3s infinite 1.5s, ${miningEffect} 2s infinite 1s;
    }
  }
  
  .tech {
    font-size: 12px;
    letter-spacing: 3px;
    margin-top: 4px;
    background: linear-gradient(45deg, #ff9ff3, #4ecdc4, #96ceb4, #45b7d1);
    background-size: 400% 400%;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    animation: ${rgbAnimation} 3s linear infinite 1s;
    filter: drop-shadow(3px 3px 6px rgba(0, 0, 0, 1)) drop-shadow(0 0 15px rgba(255, 159, 243, 1));
  }
`;

const INITXLogo = ({ color = 'default', className = '' }) => {
  return (
    <LogoContainer className={className}>
      <LogoIcon className="logo-icon">
        <TechGrid />
        <NetworkNodes>
          <div className="node"></div>
          <div className="node"></div>
          <div className="node"></div>
          <div className="node"></div>
          <div className="node"></div>
          <div className="connection"></div>
          <div className="connection"></div>
          <div className="connection"></div>
          <div className="connection"></div>
        </NetworkNodes>
        <DataParticles>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
          <div className="particle"></div>
        </DataParticles>
        <MiningBlocks>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="block"></div>
          <div className="hash">0x1a2b3c</div>
          <div className="hash">0x4d5e6f</div>
        </MiningBlocks>
        <CryptoSymbols>
          <div className="symbol">₿</div>
          <div className="symbol">Ξ</div>
          <div className="symbol">⛏</div>
          <div className="symbol">◊</div>
        </CryptoSymbols>
        <LogoText className="logo-text">
          <div className="company">INITX</div>
          <div className="number">X</div>
          <div className="tech">TECH</div>
        </LogoText>
      </LogoIcon>
    </LogoContainer>
  );
};

export default INITXLogo;