import React, { useState } from 'react';
import styled from 'styled-components';
import { Mail, Copy, Check } from 'lucide-react';

const EmailContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  background: white;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  overflow: hidden;
`;

const EmailHeader = styled.div`
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 30px;
  text-align: center;
`;

const EmailBody = styled.div`
  padding: 30px;
  line-height: 1.6;
  color: #333;
`;

const EmailFooter = styled.div`
  background: #f8fafc;
  padding: 20px 30px;
  border-top: 1px solid #e2e8f0;
  font-size: 14px;
  color: #666;
`;

const CopyButton = styled.button`
  background: #667eea;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  margin: 20px auto;
  transition: all 0.3s ease;
  
  &:hover {
    background: #5a67d8;
  }
`;

const EmailTemplate = ({ type = 'welcome' }) => {
  const [copied, setCopied] = useState(false);

  const templates = {
    welcome: {
      subject: 'Welcome to OneStopTech - Your Design Journey Starts Here!',
      body: `
        <h2>Welcome to OneStopTech!</h2>
        <p>Dear Valued Customer,</p>
        <p>Thank you for joining OneStopTech, your one-stop solution for all design and technology needs. We're excited to have you as part of our growing community!</p>
        
        <h3>What's Next?</h3>
        <ul>
          <li>Explore our comprehensive design tools and services</li>
          <li>Connect with our expert team for personalized assistance</li>
          <li>Access exclusive resources and tutorials</li>
          <li>Join our community of designers and developers</li>
        </ul>
        
        <p>If you have any questions or need assistance, our support team is available 24/7 to help you succeed.</p>
        
        <p>Best regards,<br/>
        The OneStopTech Team</p>
      `
    },
    contact: {
      subject: 'Thank You for Contacting OneStopTech',
      body: `
        <h2>Thank You for Reaching Out!</h2>
        <p>Dear Customer,</p>
        <p>We've received your message and appreciate you taking the time to contact OneStopTech. Our team is reviewing your inquiry and will respond within 24 hours.</p>
        
        <h3>What Happens Next?</h3>
        <ul>
          <li>Our expert team will review your requirements</li>
          <li>We'll prepare a customized solution for your needs</li>
          <li>You'll receive a detailed response within 24 hours</li>
          <li>We'll schedule a consultation if needed</li>
        </ul>
        
        <p>In the meantime, feel free to explore our services and resources on our website.</p>
        
        <p>Best regards,<br/>
        OneStopTech Support Team</p>
      `
    },
    project: {
      subject: 'Your OneStopTech Project Update',
      body: `
        <h2>Project Status Update</h2>
        <p>Dear Client,</p>
        <p>We're pleased to provide you with an update on your project with OneStopTech.</p>
        
        <h3>Project Details:</h3>
        <ul>
          <li><strong>Project:</strong> [Project Name]</li>
          <li><strong>Status:</strong> [Current Status]</li>
          <li><strong>Progress:</strong> [Progress Percentage]</li>
          <li><strong>Next Milestone:</strong> [Next Milestone]</li>
        </ul>
        
        <p>Our team continues to work diligently to deliver exceptional results. We'll keep you updated on all major milestones.</p>
        
        <p>If you have any questions or feedback, please don't hesitate to reach out.</p>
        
        <p>Best regards,<br/>
        OneStopTech Project Team</p>
      `
    }
  };

  const currentTemplate = templates[type];

  const copyToClipboard = () => {
    const emailContent = `Subject: ${currentTemplate.subject}\n\n${currentTemplate.body.replace(/<[^>]*>/g, '').replace(/\s+/g, ' ').trim()}`;
    navigator.clipboard.writeText(emailContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <EmailContainer>
      <EmailHeader>
        <Mail size={32} style={{ marginBottom: '15px' }} />
        <h3>OneStopTech</h3>
        <p style={{ opacity: 0.9, margin: 0 }}>Professional Email Template</p>
      </EmailHeader>
      
      <EmailBody>
        <div style={{ marginBottom: '20px', padding: '10px', background: '#f8fafc', borderRadius: '8px' }}>
          <strong>Subject:</strong> {currentTemplate.subject}
        </div>
        
        <div dangerouslySetInnerHTML={{ __html: currentTemplate.body }} />
      </EmailBody>
      
      <EmailFooter>
        <div style={{ textAlign: 'center', marginBottom: '15px' }}>
          <strong>OneStopTech</strong><br/>
          Your Complete Design & Technology Solution<br/>
          📧 <a href="mailto:hello@onestoptech.com" style="color: inherit; text-decoration: none;">hello@onestoptech.com</a> | 📞 +1 (555) 123-4567<br/>
          🌐 www.onestoptech.com
        </div>
        
        <div style={{ textAlign: 'center', fontSize: '12px', opacity: 0.7 }}>
          © 2024 OneStopTech. All rights reserved.<br/>
          This email was sent from OneStopTech. If you no longer wish to receive emails, you can unsubscribe.
        </div>
      </EmailFooter>
      
      <CopyButton onClick={copyToClipboard}>
        {copied ? <Check size={16} /> : <Copy size={16} />}
        {copied ? 'Copied!' : 'Copy Email Template'}
      </CopyButton>
    </EmailContainer>
  );
};

export default EmailTemplate;