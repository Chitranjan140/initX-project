import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Globe, Shield, Leaf, Users, Heart, Scale } from 'lucide-react';

const CompanyContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.section`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  margin: -40px -20px 60px;
`;

const Section = styled.section`
  margin-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  color: #1e293b;
  text-align: center;
  margin-bottom: 20px;
  font-weight: 700;
`;

const SectionSubtitle = styled.p`
  font-size: 1.2rem;
  color: #64748b;
  text-align: center;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const InitiativesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
`;

const InitiativeCard = styled(motion.div)`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  text-align: center;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const InitiativeIcon = styled.div`
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

const ValuesSection = styled.section`
  background: #f8fafc;
  padding: 80px 40px;
  margin: 80px -20px;
  border-radius: 20px;
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const ValueCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
`;

const ValueIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #10b981 0%, #059669 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
`;

const TimelineSection = styled.section`
  margin-bottom: 80px;
`;

const Timeline = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const TimelineItem = styled(motion.div)`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const TimelineYear = styled.div`
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 700;
  min-width: 80px;
  text-align: center;
`;

const TimelineContent = styled.div`
  flex: 1;
  background: white;
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

const Company = () => {
  const initiatives = [
    {
      icon: <Shield size={32} />,
      title: "AI Safety & Ethics",
      description: "Developing responsible AI that benefits humanity while ensuring safety and ethical use across all applications."
    },
    {
      icon: <Leaf size={32} />,
      title: "Sustainability",
      description: "Committed to carbon neutrality and sustainable practices in all our operations and product development."
    },
    {
      icon: <Globe size={32} />,
      title: "Digital Accessibility",
      description: "Making technology accessible to everyone, regardless of ability, location, or economic status."
    },
    {
      icon: <Users size={32} />,
      title: "Crisis Response",
      description: "Leveraging our technology and resources to help communities during emergencies and global challenges."
    },
    {
      icon: <Heart size={32} />,
      title: "Human Rights",
      description: "Protecting privacy, promoting digital rights, and supporting human rights advocacy worldwide."
    },
    {
      icon: <Scale size={32} />,
      title: "Public Policy",
      description: "Working with governments and organizations to shape responsible technology policies and regulations."
    }
  ];

  const values = [
    { icon: <Users size={24} />, title: "User First", description: "Everything we build starts with the user in mind" },
    { icon: <Shield size={24} />, title: "Privacy & Security", description: "Protecting user data and maintaining trust" },
    { icon: <Globe size={24} />, title: "Global Impact", description: "Creating positive change worldwide" },
    { icon: <Heart size={24} />, title: "Diversity & Inclusion", description: "Building an inclusive workplace and products" }
  ];

  const milestones = [
    { year: "2020", title: "Company Founded", description: "OnTech was established with a mission to democratize technology and make it accessible to everyone." },
    { year: "2021", title: "First AI Product", description: "Launched our first AI-powered search engine, revolutionizing how people find information online." },
    { year: "2022", title: "Global Expansion", description: "Expanded operations to 15 countries and reached 10 million users worldwide." },
    { year: "2023", title: "Sustainability Milestone", description: "Achieved carbon neutrality across all operations and committed to renewable energy." },
    { year: "2024", title: "AI Innovation", description: "Released next-generation AI platform with advanced capabilities and ethical safeguards." }
  ];

  return (
    <CompanyContainer>
      <Hero>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3rem', marginBottom: '20px' }}
        >
          Company Information
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1.2rem', opacity: 0.9 }}
        >
          Our mission, values, and commitment to making technology work for everyone
        </motion.p>
      </Hero>

      <Section>
        <SectionTitle>Our Initiatives</SectionTitle>
        <SectionSubtitle>
          We're committed to using technology responsibly and creating positive impact in the world
        </SectionSubtitle>
        
        <InitiativesGrid>
          {initiatives.map((initiative, index) => (
            <InitiativeCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <InitiativeIcon>{initiative.icon}</InitiativeIcon>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '15px', color: '#1e293b' }}>
                {initiative.title}
              </h3>
              <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                {initiative.description}
              </p>
            </InitiativeCard>
          ))}
        </InitiativesGrid>
      </Section>

      <ValuesSection>
        <SectionTitle style={{ color: '#1e293b' }}>Our Values</SectionTitle>
        <SectionSubtitle style={{ color: '#64748b' }}>
          The principles that guide everything we do
        </SectionSubtitle>
        
        <ValuesGrid>
          {values.map((value, index) => (
            <ValueCard
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ValueIcon>{value.icon}</ValueIcon>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '10px', color: '#1e293b' }}>
                {value.title}
              </h3>
              <p style={{ color: '#64748b', fontSize: '0.9rem' }}>
                {value.description}
              </p>
            </ValueCard>
          ))}
        </ValuesGrid>
      </ValuesSection>

      <TimelineSection>
        <SectionTitle>Our Journey</SectionTitle>
        <SectionSubtitle>
          Key milestones in our mission to organize the world's information
        </SectionSubtitle>
        
        <Timeline>
          {milestones.map((milestone, index) => (
            <TimelineItem
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <TimelineYear>{milestone.year}</TimelineYear>
              <TimelineContent>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#1e293b' }}>
                  {milestone.title}
                </h3>
                <p style={{ color: '#64748b', lineHeight: '1.6' }}>
                  {milestone.description}
                </p>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </TimelineSection>

      <div style={{ 
        background: 'linear-gradient(135deg, #1e293b 0%, #334155 100%)', 
        color: 'white', 
        padding: '60px 40px', 
        borderRadius: '20px', 
        textAlign: 'center' 
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Join Our Mission</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
          Be part of building technology that makes a positive impact on the world
        </p>
        <button 
          style={{ 
            background: 'white', 
            color: '#1e293b', 
            border: 'none', 
            padding: '15px 30px', 
            borderRadius: '25px', 
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '1.1rem'
          }}
          onClick={() => window.location.href = '/careers'}
        >
          Explore Careers
        </button>
      </div>
    </CompanyContainer>
  );
};

export default Company;