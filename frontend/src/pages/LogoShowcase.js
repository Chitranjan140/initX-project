import React from 'react';
import styled from 'styled-components';
import INITXLogo from '../components/INITXLogo';

const ShowcaseContainer = styled.div`
  padding: 60px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: #f8fafc;
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  font-size: 3rem;
  color: #1e3a8a;
  margin-bottom: 20px;
  font-weight: 800;
`;

const Subtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 60px;
`;

const LogoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const LogoCard = styled.div`
  background: ${props => props.dark ? '#1e293b' : 'white'};
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: ${props => props.dark ? 'white' : '#1e3a8a'};
  font-weight: 600;
  margin: 0;
`;

const VariationsSection = styled.div`
  background: white;
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  margin-bottom: 40px;
`;

const VariationsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

const VariationCard = styled.div`
  padding: 40px;
  border: 2px solid #e2e8f0;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  transition: all 0.3s ease;
  
  &:hover {
    border-color: #00aaff;
    box-shadow: 0 10px 30px rgba(0, 170, 255, 0.1);
  }
`;

const ColorPalette = styled.div`
  background: white;
  padding: 60px 40px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
`;

const ColorGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const ColorSwatch = styled.div`
  text-align: center;
`;

const ColorBox = styled.div`
  width: 100%;
  height: 80px;
  background: ${props => props.color};
  border-radius: 10px;
  margin-bottom: 15px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.1);
`;

const ColorName = styled.h4`
  font-size: 1.1rem;
  color: #1e3a8a;
  margin: 0 0 5px 0;
  font-weight: 600;
`;

const ColorCode = styled.p`
  font-size: 0.9rem;
  color: #64748b;
  margin: 0;
  font-family: 'Courier New', monospace;
`;

const LogoShowcase = () => {
  return (
    <ShowcaseContainer>
      <Title>INITX</Title>
      <Subtitle>Professional Technology Brand Identity</Subtitle>

      <LogoGrid>
        <LogoCard>
          <CardTitle>Primary Logo - Light Background</CardTitle>
          <INITXLogo size="normal" />
        </LogoCard>

        <LogoCard dark>
          <CardTitle dark>Primary Logo - Dark Background</CardTitle>
          <INITXLogo color="white" size="normal" />
        </LogoCard>

        <LogoCard>
          <CardTitle>Logo with Circuit Animation</CardTitle>
          <INITXLogo size="normal" showCircuits />
        </LogoCard>

        <LogoCard>
          <CardTitle>Compact Version</CardTitle>
          <INITXLogo size="small" />
        </LogoCard>
      </LogoGrid>

      <VariationsSection>
        <h2 style={{ fontSize: '2.5rem', color: '#1e3a8a', textAlign: 'center', marginBottom: '20px' }}>
          Logo Variations
        </h2>
        <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1.1rem' }}>
          Different sizes and contexts for various applications
        </p>
        
        <VariationsGrid>
          <VariationCard>
            <h4 style={{ color: '#1e3a8a', margin: 0 }}>Website Header</h4>
            <INITXLogo size="normal" />
          </VariationCard>
          
          <VariationCard>
            <h4 style={{ color: '#1e3a8a', margin: 0 }}>Mobile App</h4>
            <INITXLogo size="small" />
          </VariationCard>
          
          <VariationCard>
            <h4 style={{ color: '#1e3a8a', margin: 0 }}>Business Card</h4>
            <INITXLogo size="small" />
          </VariationCard>
          
          <VariationCard>
            <h4 style={{ color: '#1e3a8a', margin: 0 }}>Animated Version</h4>
            <INITXLogo size="normal" showCircuits />
          </VariationCard>
        </VariationsGrid>
      </VariationsSection>

      <ColorPalette>
        <h2 style={{ fontSize: '2.5rem', color: '#1e3a8a', textAlign: 'center', marginBottom: '20px' }}>
          Brand Color Palette
        </h2>
        <p style={{ textAlign: 'center', color: '#64748b', fontSize: '1.1rem' }}>
          Professional technology colors with modern gradients
        </p>
        
        <ColorGrid>
          <ColorSwatch>
            <ColorBox color="linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%)" />
            <ColorName>Primary Blue</ColorName>
            <ColorCode>#1e3a8a → #0ea5e9</ColorCode>
          </ColorSwatch>
          
          <ColorSwatch>
            <ColorBox color="linear-gradient(135deg, #00aaff 0%, #00ff88 100%)" />
            <ColorName>Accent Gradient</ColorName>
            <ColorCode>#00aaff → #00ff88</ColorCode>
          </ColorSwatch>
          
          <ColorSwatch>
            <ColorBox color="#00d4aa" />
            <ColorName>Tech Green</ColorName>
            <ColorCode>#00d4aa</ColorCode>
          </ColorSwatch>
          
          <ColorSwatch>
            <ColorBox color="#00aaff" />
            <ColorName>Electric Blue</ColorName>
            <ColorCode>#00aaff</ColorCode>
          </ColorSwatch>
          
          <ColorSwatch>
            <ColorBox color="#1e3a8a" />
            <ColorName>Deep Navy</ColorName>
            <ColorCode>#1e3a8a</ColorCode>
          </ColorSwatch>
          
          <ColorSwatch>
            <ColorBox color="#ffffff" style={{ border: '2px solid #e2e8f0' }} />
            <ColorName>Pure White</ColorName>
            <ColorCode>#ffffff</ColorCode>
          </ColorSwatch>
        </ColorGrid>
      </ColorPalette>

      <div style={{ 
        background: 'linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%)', 
        padding: '60px 40px', 
        borderRadius: '20px', 
        textAlign: 'center',
        color: 'white'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
          Brand Ready Logo
        </h2>
        <p style={{ fontSize: '1.2rem', opacity: 0.9, marginBottom: '40px' }}>
          Professional, scalable, and modern technology brand identity
        </p>
        <INITXLogo color="white" size="normal" showCircuits />
      </div>
    </ShowcaseContainer>
  );
};

export default LogoShowcase;