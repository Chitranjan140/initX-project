import React, { useState } from 'react';
import styled from 'styled-components';
import { Globe, ChevronDown } from 'lucide-react';

const LanguageContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const LanguageButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  background: none;
  border: none;
  color: ${props => props.scrolled ? '#333' : 'white'};
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${props => props.scrolled ? 'rgba(102, 126, 234, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
  }
`;

const LanguageDropdown = styled.div`
  position: absolute;
  top: 100%;
  right: 0;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  padding: 10px 0;
  min-width: 200px;
  z-index: 1000;
  margin-top: 5px;
`;

const LanguageOption = styled.button`
  width: 100%;
  padding: 12px 20px;
  background: none;
  border: none;
  text-align: left;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &:hover {
    background: #f8fafc;
  }
  
  &.active {
    background: #e0f2fe;
    color: #0369a1;
  }
`;

const LanguageSelector = ({ scrolled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState('English');

  const languages = [
    { code: 'en', name: 'English', flag: '🇺🇸' },
    { code: 'es', name: 'Español', flag: '🇪🇸' },
    { code: 'fr', name: 'Français', flag: '🇫🇷' },
    { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
    { code: 'zh', name: '中文', flag: '🇨🇳' },
    { code: 'ja', name: '日本語', flag: '🇯🇵' },
    { code: 'ko', name: '한국어', flag: '🇰🇷' },
    { code: 'hi', name: 'हिन्दी', flag: '🇮🇳' }
  ];

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language.name);
    setIsOpen(false);
    // Here you would implement actual language switching logic
    alert(`Language changed to ${language.name}`);
  };

  return (
    <LanguageContainer>
      <LanguageButton 
        scrolled={scrolled}
        onClick={() => setIsOpen(!isOpen)}
      >
        <Globe size={16} />
        {selectedLanguage}
        <ChevronDown size={14} />
      </LanguageButton>
      
      {isOpen && (
        <LanguageDropdown>
          {languages.map((language) => (
            <LanguageOption
              key={language.code}
              className={selectedLanguage === language.name ? 'active' : ''}
              onClick={() => handleLanguageSelect(language)}
            >
              <span>{language.flag}</span>
              {language.name}
            </LanguageOption>
          ))}
        </LanguageDropdown>
      )}
    </LanguageContainer>
  );
};

export default LanguageSelector;