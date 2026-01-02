import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import axios from 'axios';
import { Eye, Heart, User, Star, ArrowRight, CheckCircle, Users, Briefcase, Award, Zap, Search, Mic, Camera } from 'lucide-react';
import FAQ from '../components/FAQ';
import AnimatedCounter from '../components/AnimatedCounter';
import SEO from '../components/SEO';
import AdvancedSEO from '../components/AdvancedSEO';
import SEOSchema from '../components/SEOSchema';
import SEOPerformance from '../components/SEOPerformance';
import WhyChooseUs from '../components/WhyChooseUs';
import TrustSignals from '../components/TrustSignals';
import CTABanner from '../components/CTABanner';
import HeroCarousel from '../components/HeroCarousel';
import { useSEO, useStructuredData, useFAQStructuredData } from '../hooks/useSEO';
import { generateSEOData, combineKeywords } from '../utils/seoConfig';

const Hero = styled.section`
  text-align: center;
  padding: 60px 20px;
  color: white;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled.div`
  max-width: 800px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Title = styled(motion.h1)`
  font-size: 4rem;
  font-weight: 800;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #fff 0%, #f0f0f0 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Subtitle = styled(motion.p)`
  font-size: 1.3rem;
  margin-bottom: 40px;
  opacity: 0.9;
  line-height: 1.6;
`;

const CTAButtons = styled(motion.div)`
  display: flex;
  gap: 20px;
  justify-content: center;
  margin-bottom: 60px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const CTAButton = styled.button`
  padding: 15px 30px;
  border: none;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 10px;
  
  &.primary {
    background: white;
    color: #667eea;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
  }
  
  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid white;
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  }
`;

const Stats = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 40px;
  margin-top: 60px;
`;

const StatItem = styled.div`
  text-align: center;
  
  h3 {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 5px;
  }
  
  p {
    opacity: 0.8;
    font-size: 1.1rem;
  }
`;

const Section = styled.section`
  padding: 80px 20px;
  max-width: 1200px;
  margin: 0 auto;
  background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 20px;
  color: #87ceeb;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  color: #ffffff;
  margin-bottom: 60px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  margin-bottom: 80px;
`;

const FeatureCard = styled(motion.div)`
  background: rgba(135,206,235,0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(135,206,235,0.3);
  padding: 40px 30px;
  border-radius: 25px;
  text-align: center;
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255,153,51,0.1) 0%, 
      rgba(255,255,255,0.1) 50%, 
      rgba(19,136,8,0.1) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-15px) scale(1.02);
    border-color: rgba(135,206,235,0.6);
    box-shadow: 
      0 20px 40px rgba(0,0,0,0.2),
      0 0 30px rgba(135,206,235,0.3),
      inset 0 1px 0 rgba(255,255,255,0.2);
    
    &::before {
      opacity: 1;
    }
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
`;

const FeatureIcon = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #87ceeb 0%, #1e3a8a 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
`;

const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 80px;
`;

const ProjectCard = styled(motion.div)`
  background: rgba(135,206,235,0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(135,206,235,0.3);
  border-radius: 25px;
  overflow: hidden;
  transition: all 0.4s ease;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255,153,51,0.05) 0%, 
      rgba(255,255,255,0.05) 50%, 
      rgba(19,136,8,0.05) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }

  &:hover {
    transform: translateY(-15px) scale(1.02);
    border-color: rgba(135,206,235,0.6);
    box-shadow: 
      0 20px 40px rgba(0,0,0,0.2),
      0 0 30px rgba(135,206,235,0.3),
      inset 0 1px 0 rgba(255,255,255,0.1);
    
    &::before {
      opacity: 1;
    }
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
`;

const ProjectImage = styled.div`
  height: 200px;
  background: linear-gradient(135deg, #87ceeb 0%, #1e3a8a 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
`;

const ProjectContent = styled.div`
  padding: 25px;
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: #87ceeb;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  color: #ffffff;
`;

const TestimonialSection = styled.section`
  background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
  padding: 80px 20px;
  margin: 80px 0;
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
`;

const TestimonialCard = styled(motion.div)`
  background: rgba(135,206,235,0.1);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(135,206,235,0.3);
  padding: 35px;
  border-radius: 20px;
  position: relative;
  overflow: hidden;
  transition: all 0.4s ease;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(135deg, 
      rgba(255,153,51,0.08) 0%, 
      rgba(255,255,255,0.08) 50%, 
      rgba(19,136,8,0.08) 100%);
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 0;
  }
  
  &:hover {
    transform: translateY(-8px) scale(1.02);
    border-color: rgba(135,206,235,0.5);
    box-shadow: 
      0 15px 35px rgba(0,0,0,0.15),
      0 0 25px rgba(135,206,235,0.2),
      inset 0 1px 0 rgba(255,255,255,0.1);
    
    &::before {
      opacity: 1;
    }
  }
  
  > * {
    position: relative;
    z-index: 1;
  }
`;

const TestimonialText = styled.p`
  font-style: italic;
  margin-bottom: 20px;
  color: #ffffff;
  line-height: 1.6;
`;

const TestimonialAuthor = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

const AuthorAvatar = styled.div`
  width: 50px;
  height: 50px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`;

const SearchSection = styled.section`
  padding: 60px 20px 60px;
  text-align: center;
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 25% 25%, rgba(255,153,51,0.08) 0%, transparent 40%),
      radial-gradient(circle at 75% 75%, rgba(19,136,8,0.08) 0%, transparent 40%),
      radial-gradient(circle at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 50%);
    pointer-events: none;
    animation: networkPulse 4s ease-in-out infinite alternate;
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-image: 
      linear-gradient(90deg, rgba(255,153,51,0.05) 1px, transparent 1px),
      linear-gradient(rgba(19,136,8,0.05) 1px, transparent 1px);
    background-size: 60px 60px;
    animation: networkGrid 15s linear infinite;
    pointer-events: none;
    opacity: 0.4;
  }
  
  @keyframes networkPulse {
    0% { opacity: 0.7; }
    100% { opacity: 1; }
  }
  
  @keyframes networkGrid {
    0% { transform: translate(0, 0); }
    100% { transform: translate(60px, 60px); }
  }
`;

const SearchContainer = styled.div`
  max-width: 450px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  
  @media (max-width: 768px) {
    max-width: 90%;
  }
`;

const SearchTitle = styled.h1`
  font-size: 4rem;
  margin-bottom: 25px;
  font-weight: 900;
  font-family: 'Product Sans', Arial, sans-serif;
  position: relative;
  letter-spacing: 3px;
  
  .in { 
    color: #ff9933;
    text-shadow: 0 0 15px rgba(255,153,51,0.5);
    animation: saffronNetwork 2s ease-in-out infinite alternate;
    font-weight: 900;
    display: inline-block;
  }
  .it { 
    color: #ffffff;
    text-shadow: 0 0 15px rgba(255,255,255,0.7);
    animation: whiteNetwork 2s ease-in-out infinite alternate 0.5s;
    font-weight: 900;
    display: inline-block;
  }
  .x { 
    color: #138808;
    text-shadow: 0 0 15px rgba(19,136,8,0.5);
    animation: greenNetwork 2s ease-in-out infinite alternate 1s;
    font-weight: 900;
    display: inline-block;
  }
  
  @keyframes saffronNetwork {
    0% { 
      text-shadow: 0 0 15px rgba(255,153,51,0.5);
      transform: scale(1);
    }
    100% { 
      text-shadow: 0 0 25px rgba(255,153,51,0.7);
      transform: scale(1.02);
    }
  }
  
  @keyframes whiteNetwork {
    0% { 
      text-shadow: 0 0 15px rgba(255,255,255,0.7);
      transform: scale(1);
    }
    100% { 
      text-shadow: 0 0 25px rgba(255,255,255,0.9);
      transform: scale(1.02);
    }
  }
  
  @keyframes greenNetwork {
    0% { 
      text-shadow: 0 0 15px rgba(19,136,8,0.5);
      transform: scale(1);
    }
    100% { 
      text-shadow: 0 0 25px rgba(19,136,8,0.7);
      transform: scale(1.02);
    }
  }
  
  @media (max-width: 768px) {
    font-size: 2.8rem;
    letter-spacing: 2px;
  }
  
  @media (max-width: 480px) {
    font-size: 2.2rem;
    letter-spacing: 1px;
  }
`;

const SearchSubtitle = styled.p`
  display: none;
`;

const SearchBox = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  background: rgba(255,255,255,0.95);
  backdrop-filter: blur(10px);
  border: 2px solid transparent;
  border-radius: 25px;
  padding: 0;
  transition: all 0.3s ease;
  max-width: 100%;
  margin: 0 auto 25px;
  box-shadow: 0 6px 24px rgba(0,0,0,0.1);
  
  &::before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    background: linear-gradient(45deg, 
      #ff9933 0%, 
      #ffffff 25%, 
      #138808 50%, 
      #ff9933 75%, 
      #ffffff 100%);
    border-radius: 27px;
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 32px rgba(0,0,0,0.15);
      
    &::before {
      opacity: 1;
    }
  }
  
  &:focus-within {
    transform: translateY(-2px) scale(1.01);
    box-shadow: 0 10px 32px rgba(0,0,0,0.2);
      
    &::before {
      opacity: 1;
    }
  }
`;

const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 10px 14px;
  font-size: 15px;
  background: transparent;
  color: #3c4043;
  
  &::placeholder {
    color: #9aa0a6;
  }
  
  @media (max-width: 480px) {
    font-size: 14px;
    padding: 8px 12px;
  }
`;

const SearchIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  padding-right: 12px;
`;

const IconButton = styled.button`
  background: none;
  border: none;
  padding: 8px;
  cursor: pointer;
  transition: all 0.2s ease;
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: rgba(66, 133, 244, 0.1);
  }
  
  &.camera {
    color: #ea4335;
    
    &:hover {
      background: rgba(234, 67, 53, 0.1);
    }
  }
  
  &.mic {
    color: #34a853;
    
    &:hover {
      background: rgba(52, 168, 83, 0.1);
    }
  }
`;

const SearchButton = styled.button`
  background: linear-gradient(135deg, #ff9933, #ffffff, #138808);
  border: none;
  border-radius: 20px;
  padding: 12px 24px;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  font-weight: 700;
  margin: 6px;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 3px rgba(255,255,255,0.3);
  position: relative;
  overflow: hidden;
  box-shadow: 0 3px 12px rgba(0,0,0,0.2);
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent);
    transition: left 0.6s;
  }
  
  &:hover {
    transform: translateY(-2px) scale(1.03);
    box-shadow: 0 8px 20px rgba(0,0,0,0.3);
    color: #fff;
    text-shadow: 1px 1px 3px rgba(0,0,0,0.3);
    
    &::before {
      left: 100%;
    }
  }
  
  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 13px;
  }
`;

const SearchButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  margin-bottom: 25px;
  
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const QuickLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  flex-wrap: wrap;
  margin-top: 15px;
  
  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const QuickLink = styled.a`
  color: #87ceeb;
  text-decoration: none;
  font-size: 14px;
  font-weight: 600;
  padding: 8px 16px;
  border-radius: 20px;
  transition: all 0.3s ease;
  position: relative;
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(5px);
  border: 1px solid rgba(255,255,255,0.1);
  
  &:hover {
    color: #fff;
    background: rgba(255,255,255,0.1);
    transform: translateY(-2px) scale(1.03);
    text-shadow: 0 0 12px rgba(255,255,255,0.8);
    box-shadow: 0 6px 20px rgba(0,0,0,0.2);
  }
  
  @media (max-width: 480px) {
    font-size: 13px;
    padding: 6px 12px;
  }
`;

const Home = () => {
  const [projects, setProjects] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [mockStats] = useState(() => ({
    views: Math.floor(Math.random() * 100) + 50,
    likes: Math.floor(Math.random() * 50) + 20
  }));

  // SEO Optimization
  const seoData = {
    title: 'INITX Technologies - Leading Technology Solutions & Digital Innovation Platform',
    description: 'Transform your business with cutting-edge AI development, cloud infrastructure, web development, and digital transformation services. Join thousands of satisfied clients worldwide.',
    keywords: combineKeywords([
      'technology solutions', 'AI development', 'artificial intelligence', 'machine learning', 'deep learning', 'neural networks',
      'computer vision', 'natural language processing', 'speech recognition', 'image recognition', 'predictive modeling',
      'cloud computing', 'cloud infrastructure', 'AWS services', 'Azure solutions', 'Google Cloud Platform', 'cloud migration',
      'serverless computing', 'edge computing', 'hybrid cloud', 'multi-cloud', 'cloud security', 'cloud optimization',
      'web development', 'React development', 'Vue.js', 'Angular', 'Node.js development', 'Express.js', 'Next.js',
      'Python development', 'Django', 'Flask', 'FastAPI', 'Java development', 'Spring Boot', 'PHP development', 'Laravel',
      'mobile app development', 'iOS development', 'Swift', 'Android development', 'Kotlin', 'React Native', 'Flutter development',
      'Xamarin', 'Ionic', 'cross-platform apps', 'native mobile apps', 'progressive web apps', 'hybrid apps',
      'digital transformation', 'enterprise solutions', 'startup technology', 'tech consulting', 'software engineering',
      'custom software development', 'software architecture', 'system design', 'technical consulting', 'IT strategy',
      'DevOps services', 'CI/CD pipeline', 'continuous integration', 'continuous deployment', 'containerization',
      'Docker', 'Kubernetes', 'Jenkins', 'GitLab CI', 'GitHub Actions', 'microservices architecture', 'serverless architecture',
      'cybersecurity solutions', 'penetration testing', 'security audit', 'vulnerability assessment', 'GDPR compliance',
      'data protection', 'encryption', 'firewall', 'intrusion detection', 'security monitoring', 'threat intelligence',
      'data analytics', 'big data', 'business intelligence', 'data science', 'predictive analytics', 'data visualization',
      'machine learning models', 'statistical analysis', 'data mining', 'ETL processes', 'data warehousing',
      'API development', 'REST API', 'GraphQL', 'SOAP services', 'webhook development', 'third-party integrations',
      'microservices', 'API gateway', 'API security', 'API documentation', 'API testing', 'API monitoring',
      'database design', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'Cassandra', 'DynamoDB',
      'data modeling', 'database optimization', 'database migration', 'NoSQL', 'SQL', 'data architecture',
      'blockchain development', 'cryptocurrency', 'smart contracts', 'DeFi solutions', 'NFT development', 'Web3',
      'Ethereum', 'Solidity', 'Bitcoin', 'crypto wallet', 'decentralized applications', 'consensus algorithms',
      'IoT solutions', 'Internet of Things', 'embedded systems', 'sensor networks', 'industrial IoT', 'smart devices',
      'MQTT', 'LoRaWAN', 'edge analytics', 'IoT security', 'device management', 'real-time monitoring',
      'automation solutions', 'RPA', 'robotic process automation', 'workflow automation', 'business process automation',
      'chatbots', 'virtual assistants', 'process optimization', 'digital workflows', 'task automation',
      'tech innovation', 'emerging technologies', 'digital solutions', 'technology consulting', 'IT services',
      'managed services', 'cloud consulting', 'digital strategy', 'technology roadmap', 'innovation consulting',
      'software development company', 'technology partner', 'digital agency', 'innovation lab', 'tech startup',
      'enterprise software', 'B2B solutions', 'B2C applications', 'white-label solutions', 'custom integrations',
      'fintech solutions', 'payment processing', 'digital banking', 'insurtech', 'regtech', 'wealthtech',
      'healthtech', 'telemedicine', 'health informatics', 'medical software', 'HIPAA compliance', 'EHR systems',
      'edtech', 'e-learning platforms', 'LMS', 'educational software', 'online training', 'virtual classrooms',
      'e-commerce development', 'marketplace development', 'shopping cart', 'payment gateway', 'inventory management',
      'SaaS development', 'PaaS solutions', 'IaaS', 'multi-tenant architecture', 'subscription billing',
      'agile development', 'scrum methodology', 'kanban', 'lean startup', 'MVP development', 'prototype development',
      'UI/UX design', 'user experience', 'user interface', 'responsive design', 'mobile-first design', 'accessibility',
      'performance optimization', 'scalability', 'high availability', 'load balancing', 'system architecture',
      'quality assurance', 'software testing', 'automated testing', 'test-driven development', 'code review',
      'technical support', 'maintenance', 'bug fixes', 'feature updates', 'system monitoring', 'performance tuning'
    ])
  };

  useEffect(() => {
    document.title = seoData.title;
    
    // Remove existing favicons first
    const existingFavicons = document.querySelectorAll('link[rel*="icon"]');
    existingFavicons.forEach(icon => icon.remove());
    
    // Add new favicon
    const favicon = document.createElement('link');
    favicon.rel = 'icon';
    favicon.type = 'image/png';
    favicon.href = '/logo.png';
    document.head.appendChild(favicon);
  }, []);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5001';
      const response = await axios.get(`${apiUrl}/api/projects/public`);
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      // TODO: Implement actual search functionality
      console.log(`Searching for: ${searchQuery}`);
    }
  };

  const handleCameraSearch = () => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
          // Create video element for camera preview
          const video = document.createElement('video');
          video.srcObject = stream;
          video.play();
          
          // For demo - in real app you'd implement image recognition
          setTimeout(() => {
            stream.getTracks().forEach(track => track.stop());
            alert('Camera search feature - would analyze image and search');
          }, 3000);
        })
        .catch(err => {
          alert('Camera access denied or not available');
        });
    } else {
      alert('Camera not supported in this browser');
    }
  };

  const handleVoiceSearch = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.onresult = (event) => {
        const transcript = event.results[0][0].transcript;
        setSearchQuery(transcript);
      };
      
      recognition.start();
    } else {
      alert('Voice search not supported in this browser');
    }
  };

  const handleQuickSearch = (query) => {
    setSearchQuery(query);
    // TODO: Implement actual search functionality
    console.log(`Quick search: ${query}`);
  };

  const features = [
    {
      icon: <Briefcase size={40} />,
      title: "AI Development Services",
      description: "Custom artificial intelligence and machine learning solutions that transform your business operations and drive innovation"
    },
    {
      icon: <Users size={40} />,
      title: "Cloud Infrastructure",
      description: "Scalable cloud solutions on AWS, Azure, and Google Cloud with expert migration and DevOps services"
    },
    {
      icon: <Zap size={40} />,
      title: "Web & Mobile Development",
      description: "Modern web applications and native mobile apps built with cutting-edge technologies and best practices"
    },
    {
      icon: <Award size={40} />,
      title: "Digital Transformation",
      description: "Strategic technology consulting to modernize your business processes and accelerate growth"
    }
  ];

  const testimonials = [
    {
      text: "INITX transformed our business with their AI solutions. The machine learning models they developed increased our efficiency by 40% and reduced operational costs significantly.",
      author: "Sarah Johnson",
      role: "CTO, TechCorp"
    },
    {
      text: "Their cloud migration services were exceptional. INITX helped us move to AWS seamlessly, and our application performance improved dramatically with zero downtime.",
      author: "Mike Chen",
      role: "VP Engineering, StartupXYZ"
    },
    {
      text: "The web application INITX built for us is outstanding. Modern, fast, and exactly what we needed to scale our business. Highly recommend their development team.",
      author: "Emma Davis",
      role: "Founder, InnovateLab"
    }
  ];

  return (
    <>
      <SEO 
        title="INITX Technologies - Leading Technology Solutions & Digital Innovation Platform"
        description="Transform your business with cutting-edge AI development, cloud infrastructure, web development, and digital transformation services from INITX Technologies."
        keywords={seoData.keywords}
        type="website"
        siteName="INITX Technologies"
      />
      
      <AdvancedSEO
        title="INITX Technologies - Leading Technology Solutions & Digital Innovation Platform"
        description="Transform your business with cutting-edge AI development, cloud infrastructure, web development, and digital transformation services from INITX Technologies."
        keywords={seoData.keywords}
        url={window.location.href}
        image="https://initx.com/og-image.jpg"
        type="website"
      />
      
      <SEOSchema type="website" data={null} />
      
      <SEOPerformance />
      
      <SearchSection>
        <SearchContainer>
          <SearchTitle>
            <span className="in">IN</span>
            <span className="it">IT</span>
            <span className="x">X</span>
          </SearchTitle>
          
          <SearchBox>
            <SearchInput
              type="text"
              placeholder="Search AI solutions, cloud services, web development..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
            />
            <SearchIcons>
              <IconButton className="camera" onClick={handleCameraSearch} title="Search by image">
                <Camera size={20} />
              </IconButton>
              <IconButton className="mic" onClick={handleVoiceSearch} title="Search by voice">
                <Mic size={20} />
              </IconButton>
            </SearchIcons>
          </SearchBox>
          
          <SearchButtons>
            <SearchButton onClick={handleSearch}>INITX Search</SearchButton>
            <SearchButton onClick={() => handleQuickSearch('AI Development')}>I'm Feeling Lucky</SearchButton>
          </SearchButtons>
          
          <QuickLinks>
            <QuickLink onClick={() => handleQuickSearch('AI Development')}>AI Development</QuickLink>
            <QuickLink onClick={() => handleQuickSearch('Cloud Solutions')}>Cloud Solutions</QuickLink>
            <QuickLink onClick={() => handleQuickSearch('Web Development')}>Web Development</QuickLink>
            <QuickLink onClick={() => handleQuickSearch('Mobile Apps')}>Mobile Apps</QuickLink>
          </QuickLinks>
        </SearchContainer>
      </SearchSection>

      <div className="container">
        <HeroCarousel />
      </div>

      <Section>
        <SectionTitle>Why Choose INITX Technologies?</SectionTitle>
        <SectionSubtitle>
          We deliver cutting-edge technology solutions that transform businesses and drive innovation across industries
        </SectionSubtitle>
        
        {/* Rich Snippets Content */}
        <div itemScope itemType="https://schema.org/TechArticle" style={{display: 'none'}}>
          <h1 itemProp="headline">Best Technology Solutions Company in India - INITX Technologies</h1>
          <div itemProp="author" itemScope itemType="https://schema.org/Organization">
            <span itemProp="name">INITX Technologies</span>
          </div>
          <meta itemProp="datePublished" content="2024-01-01" />
          <meta itemProp="dateModified" content="2024-01-01" />
          <div itemProp="articleBody">
            INITX Technologies is the leading technology solutions provider specializing in AI development, cloud infrastructure, web development, and digital transformation services for enterprises and startups.
          </div>
        </div>
        
        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureIcon>{feature.icon}</FeatureIcon>
              <h3 style={{ marginBottom: '15px', color: '#87ceeb' }}>{feature.title}</h3>
              <p style={{ color: '#ffffff', lineHeight: '1.6' }}>{feature.description}</p>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </Section>

      <Section>
        <SectionTitle>Featured Technology Solutions</SectionTitle>
        <SectionSubtitle>
          Discover our innovative technology projects and successful client implementations
        </SectionSubtitle>

        <ProjectGrid>
          {projects.length > 0 ? projects.slice(0, 6).map((project, index) => (
            <ProjectCard
              key={project._id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <ProjectImage>
                {project.title}
              </ProjectImage>
              <ProjectContent>
                <ProjectTitle>{project.title}</ProjectTitle>
                <p style={{ color: '#ffffff', marginBottom: '15px' }}>{project.description}</p>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                  <span style={{ 
                    background: '#e0e7ff', 
                    color: '#3730a3', 
                    padding: '4px 8px', 
                    borderRadius: '6px', 
                    fontSize: '12px' 
                  }}>
                    {project.category}
                  </span>
                </div>
                <ProjectMeta>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <User size={16} />
                    {project.designer?.name}
                  </div>
                  <div style={{ display: 'flex', gap: '15px' }}>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Eye size={16} />
                      {mockStats.views + index * 10}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Heart size={16} />
                      {mockStats.likes + index * 5}
                    </span>
                  </div>
                </ProjectMeta>
              </ProjectContent>
            </ProjectCard>
          )) : (
            // Placeholder projects when no data
            [1,2,3].map((item, index) => (
              <ProjectCard
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectImage>
                  Sample Project {item}
                </ProjectImage>
                <ProjectContent>
                  <ProjectTitle>Amazing UI Design</ProjectTitle>
                  <p style={{ color: '#ffffff', marginBottom: '15px' }}>Beautiful and modern interface design</p>
                  <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
                    <span style={{ 
                      background: '#e0e7ff', 
                      color: '#3730a3', 
                      padding: '4px 8px', 
                      borderRadius: '6px', 
                      fontSize: '12px' 
                    }}>
                      Web Design
                    </span>
                  </div>
                  <ProjectMeta>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <User size={16} />
                      INITX Designer
                    </div>
                    <div style={{ display: 'flex', gap: '15px' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Eye size={16} />
                        {mockStats.views + (index + 1) * 15}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                        <Heart size={16} />
                        {mockStats.likes + (index + 1) * 8}
                      </span>
                    </div>
                  </ProjectMeta>
                </ProjectContent>
              </ProjectCard>
            ))
          )}
        </ProjectGrid>
      </Section>

      <WhyChooseUs />
      
      <TrustSignals />

      <TestimonialSection>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <SectionTitle>Client Success Stories</SectionTitle>
          <SectionSubtitle>
            See how INITX technology solutions have transformed businesses and accelerated growth
          </SectionSubtitle>
          
          <TestimonialGrid>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div style={{ display: 'flex', marginBottom: '15px' }}>
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#fbbf24" color="#fbbf24" />
                  ))}
                </div>
                <TestimonialText>"{testimonial.text}"</TestimonialText>
                <TestimonialAuthor>
                  <AuthorAvatar>
                    {testimonial.author.charAt(0)}
                  </AuthorAvatar>
                  <div>
                    <div style={{ fontWeight: '600', color: '#87ceeb' }}>{testimonial.author}</div>
                    <div style={{ color: '#ffffff', fontSize: '14px' }}>{testimonial.role}</div>
                  </div>
                </TestimonialAuthor>
              </TestimonialCard>
            ))}
          </TestimonialGrid>
        </div>
      </TestimonialSection>

      <CTABanner />

      <FAQ />
    </>
  );
};

export default Home;