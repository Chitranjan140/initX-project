import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Shield, Clock, Award, Users, Zap, HeartHandshake } from 'lucide-react';

const WhyChooseContainer = styled.section`
  padding: 80px 20px;
  background: #f8fafc;
  margin: 80px 0;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: #1e293b;
  margin-bottom: 20px;
  font-weight: 700;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const FeatureCard = styled(motion.div)`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const FeatureIcon = styled.div`
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

const FeatureTitle = styled.h3`
  font-size: 1.3rem;
  color: #1e293b;
  margin-bottom: 15px;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
`;

const WhyChooseUs = () => {
  const features = [
    {
      icon: <Shield size={32} />,
      title: "Trusted & Secure",
      description: "Enterprise-grade security with 99.9% uptime guarantee. Your data and projects are always protected."
    },
    {
      icon: <Clock size={32} />,
      title: "Fast Delivery",
      description: "Quick turnaround times without compromising quality. We deliver projects on time, every time."
    },
    {
      icon: <Award size={32} />,
      title: "Award Winning",
      description: "Recognized industry leader with multiple awards for excellence in design and customer satisfaction."
    },
    {
      icon: <Users size={32} />,
      title: "Expert Team",
      description: "Skilled professionals with 10+ years of experience in design, development, and digital strategy."
    },
    {
      icon: <Zap size={32} />,
      title: "Cutting Edge",
      description: "Latest technologies and modern approaches to keep your business ahead of the competition."
    },
    {
      icon: <HeartHandshake size={32} />,
      title: "24/7 Support",
      description: "Round-the-clock customer support to help you whenever you need assistance or guidance."
    }
  ];

  return (
    <WhyChooseContainer>
      <Container>
        <Title>Why Choose INITX?</Title>
        <Subtitle>
          We combine expertise, innovation, and dedication to deliver exceptional results for your business
        </Subtitle>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Container>
    </WhyChooseContainer>
  );
};

export default WhyChooseUs;