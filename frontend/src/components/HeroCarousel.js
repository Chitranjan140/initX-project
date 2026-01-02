import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Play, ArrowRight } from 'lucide-react';
import INITXLogo from './INITXLogo';

const CarouselContainer = styled.div`
  position: relative;
  height: 600px;
  overflow: hidden;
  border-radius: 20px;
  margin-bottom: 60px;
`;

const CarouselSlide = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, ${props => props.gradient});
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: radial-gradient(circle at 20% 80%, rgba(255, 0, 150, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 80% 20%, rgba(0, 255, 255, 0.3) 0%, transparent 50%),
                radial-gradient(circle at 40% 40%, rgba(138, 43, 226, 0.2) 0%, transparent 50%);
    pointer-events: none;
    animation: pulse 4s ease-in-out infinite alternate;
  }
  
  @keyframes pulse {
    0% { opacity: 0.8; }
    100% { opacity: 1; }
  }
`;

const SlideContent = styled.div`
  text-align: center;
  max-width: 800px;
  padding: 0 40px;
  position: relative;
  z-index: 2;
`;

const LogoContainer = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

const SlideTitle = styled.h1`
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const SlideSubtitle = styled.p`
  font-size: 1.3rem;
  margin-bottom: 40px;
  opacity: 0.9;
  line-height: 1.6;
`;

const SlideActions = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  flex-wrap: wrap;
`;

const SlideButton = styled.button`
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
  position: relative;
  overflow: hidden;
  
  &.primary {
    background: linear-gradient(135deg, #ff0080, #00ffff, #8a2be2);
    color: white;
    box-shadow: 0 10px 25px rgba(255, 0, 128, 0.5), 0 0 20px rgba(0, 255, 255, 0.3);
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
      transition: left 0.5s;
    }
    
    &:hover {
      box-shadow: 0 15px 35px rgba(0, 255, 255, 0.4);
      
      &::before {
        left: 100%;
      }
    }
  }
  
  &.secondary {
    background: transparent;
    color: white;
    border: 2px solid rgba(255,255,255,0.5);
    backdrop-filter: blur(10px);
  }
  
  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 15px 40px rgba(0,0,0,0.3);
  }
`;

const CarouselControls = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 15px;
  align-items: center;
`;

const ControlButton = styled.button`
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: rgba(255,255,255,0.2);
  backdrop-filter: blur(10px);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255,255,255,0.3);
    transform: scale(1.1);
  }
`;

const Indicators = styled.div`
  display: flex;
  gap: 10px;
`;

const Indicator = styled.button`
  width: 12px;
  height: 12px;
  border: none;
  border-radius: 50%;
  background: ${props => props.active ? 'white' : 'rgba(255,255,255,0.5)'};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.2);
  }
`;

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Transform Your Business with AI",
      subtitle: "Harness the power of artificial intelligence and machine learning to revolutionize your operations. Our expert AI development team creates custom solutions that drive innovation and competitive advantage.",
      gradient: "#0a0a0a 0%, #1a0033 30%, #330066 60%, #000000 100%",
      primaryAction: "Explore AI Solutions",
      secondaryAction: "Watch AI Demo",
      showLogo: true,
      keywords: "AI development, machine learning, artificial intelligence, custom AI solutions, business automation"
    },
    {
      id: 2,
      title: "Scalable Cloud Infrastructure",
      subtitle: "Build robust, scalable applications with our cloud-native solutions. From AWS to Azure and Google Cloud, we architect infrastructure that grows with your business needs and ensures maximum uptime.",
      gradient: "#000000 0%, #001122 25%, #003366 50%, #0066cc 75%, #000033 100%",
      primaryAction: "Cloud Solutions",
      secondaryAction: "View Case Studies",
      keywords: "cloud computing, AWS, Azure, Google Cloud, cloud migration, DevOps, scalable infrastructure"
    },
    {
      id: 3,
      title: "Modern Web & Mobile Development",
      subtitle: "Create exceptional digital experiences with our full-stack development expertise. From responsive web applications to native mobile apps, we deliver solutions that engage users and drive results.",
      gradient: "#0d0d0d 0%, #2d0a4e 25%, #5c1a6b 50%, #8b2f8b 75%, #1a0033 100%",
      primaryAction: "Start Your Project",
      secondaryAction: "View Portfolio",
      keywords: "web development, mobile app development, React, Node.js, full-stack development, responsive design"
    },
    {
      id: 4,
      title: "Digital Transformation Excellence",
      subtitle: "Modernize your business processes with cutting-edge technology solutions. We help enterprises and startups navigate digital transformation with strategic consulting and implementation expertise.",
      gradient: "#1a0033 0%, #4a0e4e 25%, #6a1b9a 50%, #8e24aa 75%, #2d0a4e 100%",
      primaryAction: "Get Consultation",
      secondaryAction: "Learn More",
      keywords: "digital transformation, technology consulting, enterprise solutions, business modernization, tech strategy"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <CarouselContainer>
      <AnimatePresence mode="wait">
        <CarouselSlide
          key={currentSlide}
          gradient={slides[currentSlide].gradient}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.8 }}
        >
          <SlideContent>
            {slides[currentSlide].showLogo && (
              <div style={{ display: 'none' }}>
                <INITXLogo color="white" />
              </div>
            )}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <SlideTitle>{slides[currentSlide].title}</SlideTitle>
              <SlideSubtitle>{slides[currentSlide].subtitle}</SlideSubtitle>
              <SlideActions>
                <SlideButton 
                  className="primary"
                  onClick={() => alert(`${slides[currentSlide].primaryAction} clicked!`)}
                >
                  {slides[currentSlide].primaryAction}
                  <ArrowRight size={20} />
                </SlideButton>
                <SlideButton 
                  className="secondary"
                  onClick={() => alert(`${slides[currentSlide].secondaryAction} clicked!`)}
                >
                  <Play size={20} />
                  {slides[currentSlide].secondaryAction}
                </SlideButton>
              </SlideActions>
            </motion.div>
          </SlideContent>
        </CarouselSlide>
      </AnimatePresence>

      <CarouselControls>
        <ControlButton onClick={prevSlide}>
          <ChevronLeft size={24} />
        </ControlButton>
        
        <Indicators>
          {slides.map((_, index) => (
            <Indicator
              key={index}
              active={index === currentSlide}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </Indicators>
        
        <ControlButton onClick={nextSlide}>
          <ChevronRight size={24} />
        </ControlButton>
      </CarouselControls>
    </CarouselContainer>
  );
};

export default HeroCarousel;