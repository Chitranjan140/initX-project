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

const Privacy = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <Title>Privacy Policy</Title>
      <p><strong>Last updated:</strong> January 15, 2024</p>
      
      <Section>
        <h2>Information We Collect</h2>
        <p>INITX Technology Solutions ("we," "our," or "us") collects information you provide directly to us, such as when you create an account, contact us, or use our services.</p>
      </Section>

      <Section>
        <h2>How We Use Your Information</h2>
        <p>We use the information we collect to provide, maintain, and improve our services, communicate with you, and comply with legal obligations.</p>
      </Section>

      <Section>
        <h2>Information Sharing</h2>
        <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
      </Section>

      <Section>
        <h2>Data Security</h2>
        <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
      </Section>

      <Section>
        <h2>Contact Us</h2>
        <p>If you have questions about this Privacy Policy, please contact us at:</p>
        <p>Email: privacy@initx.online<br/>
        Address: 123 Tech Street, Vadodara, Gujarat 390001, India</p>
      </Section>
    </Container>
  );
};

export default Privacy;