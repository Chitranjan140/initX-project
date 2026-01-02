import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Users, Target, Award, Globe } from 'lucide-react';

const AboutContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.section`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #ffffff 0%, #fb923c 50%, #f97316 100%);
  color: #333;
  margin: 0 -20px 60px;
  border-radius: 0 0 20px 20px;
`;

const Section = styled.section`
  margin-bottom: 80px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 40px;
  margin-top: 40px;
`;

const Card = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
`;

const About = () => {
  const values = [
    { icon: <Target size={24} />, title: "Innovation", desc: "Cutting-edge solutions for modern design challenges" },
    { icon: <Users size={24} />, title: "Collaboration", desc: "Building bridges between designers and clients" },
    { icon: <Award size={24} />, title: "Excellence", desc: "Delivering quality that exceeds expectations" },
    { icon: <Globe size={24} />, title: "Global Reach", desc: "Connecting talent worldwide" }
  ];

  return (
    <AboutContainer>
      <Hero>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3rem', marginBottom: '20px' }}
        >
          About INITX
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1.2rem', opacity: 0.9 }}
        >
          Empowering designers and transforming digital experiences since 2020
        </motion.p>
      </Hero>

      <Section>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '30px', color: '#333' }}>Our Story</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
          <p style={{ marginBottom: '20px' }}>
            INITX was founded with a simple mission: to bridge the gap between talented designers and clients who need exceptional digital experiences. We recognized that the design industry needed a platform that could streamline collaboration while showcasing creativity.
          </p>
          <p>
            Today, we're proud to serve over 10,000 designers and countless clients worldwide, facilitating millions of dollars in design projects and helping shape the future of digital design.
          </p>
        </div>
      </Section>

      <Section>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '30px', color: '#333' }}>Our Values</h2>
        <Grid>
          {values.map((value, index) => (
            <Card
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <IconWrapper>{value.icon}</IconWrapper>
              <h3 style={{ marginBottom: '15px', color: '#333' }}>{value.title}</h3>
              <p style={{ color: '#666' }}>{value.desc}</p>
            </Card>
          ))}
        </Grid>
      </Section>

      <Section style={{ background: '#f8fafc', padding: '60px 40px', borderRadius: '20px', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>Join Our Mission</h2>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '30px' }}>
          Be part of the design revolution. Whether you're a designer or a client, INITX is your gateway to exceptional digital experiences.
        </p>
        <button className="btn btn-primary">Get Started Today</button>
      </Section>
    </AboutContainer>
  );
};

export default About;