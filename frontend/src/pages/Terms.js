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

const Terms = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Title>Terms of Service</Title>
      <p><strong>Last updated:</strong> January 15, 2024</p>
      
      <Section>
        <h2>Acceptance of Terms</h2>
        <p>By accessing and using INITX Technology Solutions services, you accept and agree to be bound by the terms and provision of this agreement.</p>
      </Section>

      <Section>
        <h2>Services</h2>
        <p>INITX provides technology solutions including AI development, cloud solutions, web development, and digital transformation services.</p>
      </Section>

      <Section>
        <h2>User Responsibilities</h2>
        <p>You are responsible for maintaining the confidentiality of your account and password and for restricting access to your computer.</p>
      </Section>

      <Section>
        <h2>Intellectual Property</h2>
        <p>The service and its original content, features, and functionality are and will remain the exclusive property of INITX Technology Solutions.</p>
      </Section>

      <Section>
        <h2>Limitation of Liability</h2>
        <p>In no event shall INITX Technology Solutions be liable for any indirect, incidental, special, consequential, or punitive damages.</p>
      </Section>

      <Section>
        <h2>Contact Information</h2>
        <p>Questions about the Terms of Service should be sent to us at:</p>
        <p>Email: legal@initx.online<br/>
        Address: 123 Tech Street, Vadodara, Gujarat 390001, India</p>
      </Section>
    </Container>
  );
};

export default Terms;