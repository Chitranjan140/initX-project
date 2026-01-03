import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Palette, Smartphone, Globe, Package, Zap, Shield } from 'lucide-react';

const ServicesContainer = styled.div`
  padding: 120px 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.section`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  margin: -120px -20px 60px;
  border-radius: 0 0 20px 20px;
`;

const ServicesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`;

const ServiceCard = styled(motion.div)`
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

const ServiceIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 25px;
  color: white;
`;

const PricingSection = styled.section`
  background: #f8fafc;
  padding: 80px 40px;
  margin: 80px -20px;
  text-align: center;
`;

const PricingGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1000px;
  margin: 0 auto;
`;

const PricingCard = styled(motion.div)`
  background: white;
  padding: 40px 30px;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  position: relative;
  
  &.popular {
    border: 3px solid #667eea;
    transform: scale(1.05);
  }
`;

const Services = () => {
  const services = [
    {
      icon: <Globe size={40} />,
      title: "MERN Stack Development",
      description: "Full stack web applications using MongoDB, Express.js, React, and Node.js",
      features: ["React Frontend", "Node.js Backend", "MongoDB Database", "RESTful APIs"]
    },
    {
      icon: <Smartphone size={40} />,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your specific business requirements",
      features: ["Custom Applications", "System Integration", "Database Design", "Performance Optimization"]
    },
    {
      icon: <Package size={40} />,
      title: "Web Application Development",
      description: "Modern, responsive web applications with cutting-edge technologies",
      features: ["Responsive Design", "Progressive Web Apps", "E-commerce Solutions", "CMS Development"]
    },
    {
      icon: <Zap size={40} />,
      title: "API Development & Integration",
      description: "Robust APIs and seamless third-party service integrations",
      features: ["REST APIs", "GraphQL", "Third-party Integrations", "Microservices"]
    },
    {
      icon: <Shield size={40} />,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions",
      features: ["AWS Deployment", "Docker Containers", "CI/CD Pipelines", "Cloud Migration"]
    },
    {
      icon: <Palette size={40} />,
      title: "Technical Consulting",
      description: "Expert technical guidance and architecture planning",
      features: ["Technology Assessment", "Architecture Design", "Code Review", "Performance Audits"]
    }
  ];

  const plans = [
    {
      name: "Starter",
      price: "$29",
      period: "/month",
      features: ["5 Projects", "Basic Support", "Portfolio Showcase", "Client Collaboration"],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "/month",
      features: ["Unlimited Projects", "Priority Support", "Advanced Analytics", "Custom Branding", "Team Collaboration"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "/month",
      features: ["Everything in Pro", "Dedicated Manager", "Custom Integrations", "White-label Solution", "SLA Guarantee"],
      popular: false
    }
  ];

  return (
    <ServicesContainer>
      <Hero>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3rem', marginBottom: '20px' }}
        >
          Our Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1.2rem', opacity: 0.9 }}
        >
          Comprehensive technology solutions for every business need
        </motion.p>
      </Hero>

      <ServicesGrid>
        {services.map((service, index) => (
          <ServiceCard
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ServiceIcon>{service.icon}</ServiceIcon>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>{service.title}</h3>
            <p style={{ color: '#666', marginBottom: '25px', lineHeight: '1.6' }}>{service.description}</p>
            <ul style={{ textAlign: 'left', color: '#555' }}>
              {service.features.map((feature, i) => (
                <li key={i} style={{ marginBottom: '8px', paddingLeft: '20px', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: '0', color: '#667eea' }}>✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </ServiceCard>
        ))}
      </ServicesGrid>

      <PricingSection>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#333' }}>Technology Packages</h2>
        <p style={{ fontSize: '1.2rem', color: '#666', marginBottom: '50px' }}>
          Choose the perfect technology package for your project needs
        </p>
        
        <PricingGrid>
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              className={plan.popular ? 'popular' : ''}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && (
                <div style={{
                  position: 'absolute',
                  top: '-15px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: '#667eea',
                  color: 'white',
                  padding: '8px 20px',
                  borderRadius: '20px',
                  fontSize: '14px',
                  fontWeight: '600'
                }}>
                  Most Popular
                </div>
              )}
              
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#333' }}>{plan.name}</h3>
              <div style={{ marginBottom: '30px' }}>
                <span style={{ fontSize: '3rem', fontWeight: '700', color: '#667eea' }}>{plan.price}</span>
                <span style={{ color: '#666' }}>{plan.period}</span>
              </div>
              
              <ul style={{ textAlign: 'left', marginBottom: '30px' }}>
                {plan.features.map((feature, i) => (
                  <li key={i} style={{ marginBottom: '12px', paddingLeft: '25px', position: 'relative', color: '#555' }}>
                    <span style={{ position: 'absolute', left: '0', color: '#667eea', fontWeight: 'bold' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <button 
                className={`btn ${plan.popular ? 'btn-primary' : ''}`}
                style={!plan.popular ? { background: '#f1f5f9', color: '#334155', border: '1px solid #e2e8f0' } : {}}
                onClick={() => alert(`${plan.name} plan selected! Redirecting to checkout...`)}
              >
                Get Started
              </button>
            </PricingCard>
          ))}
        </PricingGrid>
      </PricingSection>
    </ServicesContainer>
  );
};

export default Services;