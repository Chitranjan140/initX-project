import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import EmailTemplate from '../components/EmailTemplate';
import { Mail, Settings, Send, Users } from 'lucide-react';

const EmailPageContainer = styled.div`
  padding: 120px 20px 40px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Title = styled.h1`
  font-size: 3rem;
  color: #333;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
`;

const TemplateSelector = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
  flex-wrap: wrap;
`;

const TemplateButton = styled.button`
  padding: 15px 25px;
  border: 2px solid ${props => props.active ? '#667eea' : '#e2e8f0'};
  background: ${props => props.active ? '#667eea' : 'white'};
  color: ${props => props.active ? 'white' : '#333'};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  display: flex;
  align-items: center;
  gap: 10px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #667eea;
    color: white;
    border-color: #667eea;
  }
`;

const EmailSettings = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-bottom: 40px;
`;

const SettingsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
`;

const SettingItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  
  label {
    font-weight: 600;
    color: #333;
  }
  
  input, select {
    padding: 10px;
    border: 2px solid #e2e8f0;
    border-radius: 8px;
    font-size: 14px;
    
    &:focus {
      outline: none;
      border-color: #667eea;
    }
  }
`;

const EmailTemplatesPage = () => {
  const [selectedTemplate, setSelectedTemplate] = useState('welcome');
  const [emailSettings, setEmailSettings] = useState({
    senderName: 'OneStopTech Team',
    senderEmail: 'mailto:hello@onestoptech.com',
    replyTo: 'mailto:support@onestoptech.com',
    companyPhone: '+1 (555) 123-4567',
    companyWebsite: 'https://www.onestoptech.com'
  });

  const templates = [
    { id: 'welcome', name: 'Welcome Email', icon: <Users size={20} /> },
    { id: 'contact', name: 'Contact Response', icon: <Mail size={20} /> },
    { id: 'project', name: 'Project Update', icon: <Settings size={20} /> }
  ];

  const handleSettingChange = (key, value) => {
    setEmailSettings(prev => ({ ...prev, [key]: value }));
  };

  return (
    <EmailPageContainer>
      <Header>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <Title>OneStopTech Email Templates</Title>
          <Subtitle>
            Professional email templates for all your business communications
          </Subtitle>
        </motion.div>
      </Header>

      <EmailSettings>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
          <Settings size={24} />
          Email Configuration
        </h3>
        
        <SettingsGrid>
          <SettingItem>
            <label>Sender Name</label>
            <input
              type="text"
              value={emailSettings.senderName}
              onChange={(e) => handleSettingChange('senderName', e.target.value)}
            />
          </SettingItem>
          
          <SettingItem>
            <label>Sender Email</label>
            <input
              type="email"
              value={emailSettings.senderEmail}
              onChange={(e) => handleSettingChange('senderEmail', e.target.value)}
            />
          </SettingItem>
          
          <SettingItem>
            <label>Reply To</label>
            <input
              type="email"
              value={emailSettings.replyTo}
              onChange={(e) => handleSettingChange('replyTo', e.target.value)}
            />
          </SettingItem>
          
          <SettingItem>
            <label>Company Phone</label>
            <input
              type="tel"
              value={emailSettings.companyPhone}
              onChange={(e) => handleSettingChange('companyPhone', e.target.value)}
            />
          </SettingItem>
        </SettingsGrid>
      </EmailSettings>

      <TemplateSelector>
        {templates.map(template => (
          <TemplateButton
            key={template.id}
            active={selectedTemplate === template.id}
            onClick={() => setSelectedTemplate(template.id)}
          >
            {template.icon}
            {template.name}
          </TemplateButton>
        ))}
      </TemplateSelector>

      <motion.div
        key={selectedTemplate}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <EmailTemplate type={selectedTemplate} settings={emailSettings} />
      </motion.div>

      <div style={{ 
        textAlign: 'center', 
        marginTop: '40px',
        padding: '30px',
        background: '#f8fafc',
        borderRadius: '15px'
      }}>
        <h3 style={{ marginBottom: '15px', color: '#333' }}>Need Custom Email Templates?</h3>
        <p style={{ color: '#666', marginBottom: '20px' }}>
          Our team can create custom email templates tailored to your specific business needs.
        </p>
        <button
          style={{
            background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            color: 'white',
            border: 'none',
            padding: '15px 30px',
            borderRadius: '25px',
            fontWeight: '600',
            cursor: 'pointer',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px'
          }}
          onClick={() => alert('Custom email template service coming soon!')}
        >
          <Send size={20} />
          Request Custom Template
        </button>
      </div>
    </EmailPageContainer>
  );
};

export default EmailTemplatesPage;