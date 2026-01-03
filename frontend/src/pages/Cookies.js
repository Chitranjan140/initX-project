import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  line-height: 1.6;
  color: #fff;
  background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
  min-height: 100vh;
`;

const Title = styled.h1`
  color: #87ceeb;
  margin-bottom: 30px;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const Cookies = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Title>Cookie Policy</Title>
      <p><strong>Last updated:</strong> January 15, 2024</p>
      
      <Section>
        <h2>What Are Cookies</h2>
        <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience.</p>
      </Section>

      <Section>
        <h2>How We Use Cookies</h2>
        <p>INITX Technology Solutions uses cookies to improve your browsing experience, analyze website traffic, and personalize content.</p>
      </Section>

      <Section>
        <h2>Types of Cookies We Use</h2>
        <ul>
          <li><strong>Essential Cookies:</strong> Required for the website to function properly</li>
          <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our website</li>
          <li><strong>Functional Cookies:</strong> Remember your preferences and settings</li>
        </ul>
      </Section>

      <Section>
        <h2>Managing Cookies</h2>
        <p>You can control and manage cookies through your browser settings. Please note that disabling cookies may affect the functionality of our website.</p>
      </Section>

      <Section>
        <h2>Contact Us</h2>
        <p>If you have questions about our Cookie Policy, please contact us at:</p>
        <p>Email: privacy@initx.online<br/>
        Address: 123 Tech Street, Vadodara, Gujarat 390001, India</p>
      </Section>
    </Container>
  );
};

export default Cookies;