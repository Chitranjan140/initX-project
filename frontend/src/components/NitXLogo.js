import React from 'react';
import styled from 'styled-components';

const LogoPanel = styled.div`
  background: linear-gradient(135deg, #0a0a0a 0%, #000000 25%, #1a1a1a 50%, #000000 75%, #0a0a0a 100%);
  padding: 8px 12px;
  border-radius: 12px;
  box-shadow: 
    0 4px 12px rgba(0, 0, 0, 0.8),
    inset 0 1px 0 rgba(255, 255, 255, 0.02),
    inset 0 -1px 0 rgba(0, 0, 0, 0.7);
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: repeating-linear-gradient(
      -45deg,
      transparent,
      transparent 3px,
      rgba(255, 255, 255, 0.01) 3px,
      rgba(255, 255, 255, 0.01) 6px
    );
    border-radius: 10px;
    pointer-events: none;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const XIcon = styled.div`
  width: 56px;
  height: 56px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  
  .x-lines {
    position: relative;
    width: 44px;
    height: 44px;
    
    &::before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 44px;
      height: 7px;
      background: linear-gradient(135deg, #4a90e2 0%, #1e3a8a 30%, #00d4ff 70%, #66e6ff 100%);
      transform: translate(-50%, -50%) rotate(45deg);
      border-radius: 4px;
      box-shadow: 
        0 4px 8px rgba(0, 0, 0, 0.4),
        0 1px 2px rgba(0, 0, 0, 0.2),
        inset 0 2px 0 rgba(255, 255, 255, 0.3),
        inset 0 -1px 0 rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
    
    &::after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      width: 44px;
      height: 7px;
      background: linear-gradient(135deg, #4a90e2 0%, #1e3a8a 30%, #00d4ff 70%, #66e6ff 100%);
      transform: translate(-50%, -50%) rotate(-45deg);
      border-radius: 4px;
      box-shadow: 
        0 4px 8px rgba(0, 0, 0, 0.4),
        0 1px 2px rgba(0, 0, 0, 0.2),
        inset 0 2px 0 rgba(255, 255, 255, 0.3),
        inset 0 -1px 0 rgba(0, 0, 0, 0.2);
      border: 1px solid rgba(255, 255, 255, 0.1);
    }
  }
  
  .corner-circles {
    position: absolute;
    width: 100%;
    height: 100%;
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 12px;
      height: 12px;
      background: radial-gradient(circle at 25% 25%, #ffffff, #66e6ff 40%, #00d4ff 70%, #0099cc 100%);
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.8);
      box-shadow: 
        0 3px 6px rgba(0, 0, 0, 0.3),
        0 1px 2px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.6),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1);
    }
    
    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      right: 0;
      width: 12px;
      height: 12px;
      background: radial-gradient(circle at 25% 25%, #ffffff, #66e6ff 40%, #00d4ff 70%, #0099cc 100%);
      border-radius: 50%;
      border: 2px solid rgba(255, 255, 255, 0.8);
      box-shadow: 
        0 3px 6px rgba(0, 0, 0, 0.3),
        0 1px 2px rgba(0, 0, 0, 0.2),
        inset 0 1px 0 rgba(255, 255, 255, 0.6),
        inset 0 -1px 0 rgba(0, 0, 0, 0.1);
    }
  }
`;

const TextSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const MainText = styled.div`
  display: flex;
  align-items: center;
  
  .init {
    font-size: 28px;
    font-weight: 900;
    background: linear-gradient(135deg, 
      #ffffff 0%, 
      #f8f8f8 8%,
      #f0f0f0 16%,
      #e8e8e8 24%,
      #d0d0d0 32%,
      #b8b8b8 40%,
      #a0a0a0 48%,
      #c0c0c0 56%,
      #d8d8d8 64%,
      #e8e8e8 72%,
      #f0f0f0 80%,
      #f8f8f8 88%,
      #ffffff 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Arial Black', 'Arial', sans-serif;
    letter-spacing: 0px;
    text-shadow: none;
    filter: none;
    position: relative;
    transform: perspective(100px) rotateX(5deg);
    
    &::before {
      content: 'Init';
      position: absolute;
      top: 2px;
      left: 2px;
      font-size: 28px;
      font-weight: 900;
      background: linear-gradient(135deg, #909090, #707070, #505050);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      z-index: -1;
      filter: blur(2px);
      opacity: 0.7;
    }
    
    &::after {
      content: 'Init';
      position: absolute;
      top: 4px;
      left: 4px;
      font-size: 28px;
      font-weight: 900;
      color: rgba(0, 0, 0, 0.2);
      z-index: -2;
      filter: blur(4px);
      opacity: 0.5;
    }
  }
  
  .x {
    font-size: 32px;
    font-weight: 900;
    background: linear-gradient(135deg, #ff1744 0%, #e91e63 25%, #9c27b0 50%, #00bcd4 75%, #2196f3 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    font-family: 'Arial Black', 'Arial', sans-serif;
    letter-spacing: 0px;
    margin-left: -1px;
    position: relative;
    transform: perspective(300px) rotateX(5deg);
    text-shadow: 
      1px 1px 0 #b71c1c,
      2px 2px 0 #7b1fa2,
      3px 3px 0 #0097a7,
      4px 4px 8px rgba(0, 0, 0, 0.4);
    filter: 
      drop-shadow(0 2px 4px rgba(0, 0, 0, 0.3))
      drop-shadow(0 1px 0 rgba(255, 255, 255, 0.1));
    
    &::before {
      content: 'X';
      position: absolute;
      top: 1px;
      left: 1px;
      font-size: 32px;
      font-weight: 900;
      color: rgba(0, 0, 0, 0.2);
      z-index: -1;
    }
    
    &::after {
      display: none;
    }
  }
`;

const Tagline = styled.div`
  font-size: 12px;
  font-family: 'Arial', sans-serif;
  margin-top: 4px;
  letter-spacing: 0.5px;
  font-weight: 700;
  color: #c0c0c0;
  text-shadow: 
    1px 1px 0 rgba(0, 0, 0, 0.8),
    0 1px 2px rgba(0, 0, 0, 0.3);
  filter: drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2));
`;

const NitXLogo = () => {
  return (
    <LogoPanel>
      <LogoContainer>
        <XIcon>
          <div className="x-lines"></div>
          <div className="corner-circles"></div>
        </XIcon>
        <TextSection>
          <MainText>
            <span className="init">Init</span>
            <span className="x">X</span>
          </MainText>

        </TextSection>
      </LogoContainer>
    </LogoPanel>
  );
};

export default NitXLogo;