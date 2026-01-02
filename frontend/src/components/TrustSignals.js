import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import AnimatedCounter from './AnimatedCounter';

const TrustContainer = styled.section`
  padding: 60px 20px;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 40px;
  margin-bottom: 60px;
`;

const StatItem = styled(motion.div)`
  text-align: center;
`;

const StatNumber = styled.h3`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 10px;
  background: linear-gradient(135deg, #60a5fa 0%, #34d399 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const StatLabel = styled.p`
  font-size: 1.1rem;
  opacity: 0.9;
`;

const ClientsSection = styled.div`
  text-align: center;
`;

const ClientsTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 40px;
  opacity: 0.9;
`;

const ClientsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 30px;
  align-items: center;
`;

const ClientLogo = styled.div`
  background: rgba(255,255,255,0.1);
  padding: 20px;
  border-radius: 12px;
  text-align: center;
  font-weight: 600;
  opacity: 0.8;
  transition: opacity 0.3s ease;
  
  &:hover {
    opacity: 1;
  }
`;

const TrustSignals = () => {
  const stats = [
    { number: 500, suffix: '+', label: 'Happy Clients' },
    { number: 1200, suffix: '+', label: 'Projects Completed' },
    { number: 99, suffix: '%', label: 'Client Satisfaction' },
    { number: 5, suffix: '+', label: 'Years Experience' }
  ];

  const clients = [
    'TechCorp', 'InnovateLab', 'DigitalFlow', 'StartupHub', 
    'CloudTech', 'DataSoft', 'WebSolutions', 'AppMakers'
  ];

  return (
    <TrustContainer>
      <Container>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <StatNumber>
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>

        <ClientsSection>
          <ClientsTitle>Trusted by Leading Companies</ClientsTitle>
          <ClientsGrid>
            {clients.map((client, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ClientLogo>{client}</ClientLogo>
              </motion.div>
            ))}
          </ClientsGrid>
        </ClientsSection>
      </Container>
    </TrustContainer>
  );
};

export default TrustSignals;