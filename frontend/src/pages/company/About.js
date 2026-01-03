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
    { icon: <Target size={24} />, title: "Innovation", desc: "Cutting-edge technology solutions for modern business challenges" },
    { icon: <Users size={24} />, title: "Collaboration", desc: "Working closely with clients to deliver exceptional results" },
    { icon: <Award size={24} />, title: "Excellence", desc: "Delivering high-quality technology solutions that exceed expectations" },
    { icon: <Globe size={24} />, title: "Global Reach", desc: "Serving businesses worldwide with scalable technology solutions" }
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
          Initiating Innovation with Technologies - Empowering businesses with cutting-edge technology solutions since 2020
        </motion.p>
      </Hero>

      <Section>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '30px', color: '#333' }}>Our Story</h2>
        <div style={{ maxWidth: '800px', margin: '0 auto', fontSize: '1.1rem', lineHeight: '1.8', color: '#666' }}>
          <p style={{ marginBottom: '20px' }}>
            INITX was founded with a mission to initiate innovation with technologies. We bridge the gap between businesses and cutting-edge technology solutions, delivering AI development, cloud infrastructure, web development, and digital transformation services.
          </p>
          <p>
            Today, we're proud to serve enterprises and startups worldwide, helping them leverage advanced technologies to achieve their goals and drive digital transformation.
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
          Partner with INITX for your next technology project. Whether you need AI development, cloud solutions, web applications, or digital transformation, INITX is your trusted technology partner.
        </p>
        <button className="btn btn-primary">Get Started Today</button>
      </Section>
    </AboutContainer>
  );
};

export default About;