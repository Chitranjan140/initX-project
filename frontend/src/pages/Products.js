import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Search, Brain, Cloud, Smartphone, Code, Globe, ArrowRight, Play } from 'lucide-react';

const ProductsContainer = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.section`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #ffffff 0%, #fb923c 50%, #f97316 100%);
  color: #333;
  margin: 0 -20px 60px;
  border-radius: 0 0 20px 20px;
`;

const CategoryTabs = styled.div`
  display: flex;
  justify-content: center;
  gap: 15px;
  margin-bottom: 50px;
  flex-wrap: wrap;
  
  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const TabButton = styled.button`
  padding: 12px 24px;
  border: 2px solid #e2e8f0;
  background: ${props => props.active ? '#1e293b' : 'white'};
  color: ${props => props.active ? 'white' : '#1e293b'};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1e293b;
    color: white;
    border-color: #1e293b;
  }
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 30px;
  margin-bottom: 60px;
  place-items: center;
  width: 100%;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 10px;
  }
`;

const ProductCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProductIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  margin-bottom: 20px;
`;

const ProductTitle = styled.h3`
  font-size: 1.4rem;
  color: #1e293b;
  margin-bottom: 15px;
  font-weight: 600;
`;

const ProductDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ProductFeatures = styled.ul`
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
`;

const FeatureItem = styled.li`
  color: #475569;
  margin-bottom: 8px;
  padding-left: 20px;
  position: relative;
  
  &:before {
    content: '✓';
    position: absolute;
    left: 0;
    color: #10b981;
    font-weight: bold;
  }
`;

const ProductCTA = styled.button`
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(249, 115, 22, 0.3);
  }
`;

const DemoSection = styled.section`
  background: #f8fafc;
  padding: 80px 40px;
  margin: 80px -20px;
  text-align: center;
  border-radius: 20px;
`;

const Products = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'AI & Search', 'Cloud & Workspace', 'Hardware', 'Developer Tools'];

  const products = [
    {
      id: 1,
      category: 'AI & Search',
      icon: <Search size={24} />,
      title: 'INITX Search',
      description: 'Advanced search engine with AI-powered results and knowledge panels.',
      features: ['AI-powered search', 'Knowledge panels', 'Real-time results', 'Voice search'],
      cta: 'Try Search'
    },
    {
      id: 2,
      category: 'AI & Search',
      icon: <Brain size={24} />,
      title: 'INITX AI',
      description: 'Powerful AI assistant for productivity, creativity, and problem-solving.',
      features: ['Natural language processing', 'Code generation', 'Creative writing', 'Data analysis'],
      cta: 'Explore AI'
    },
    {
      id: 3,
      category: 'Cloud & Workspace',
      icon: <Cloud size={24} />,
      title: 'INITX Cloud',
      description: 'Comprehensive cloud platform for businesses of all sizes.',
      features: ['Scalable infrastructure', 'Data analytics', 'Machine learning', 'Security'],
      cta: 'Get Started'
    },
    {
      id: 4,
      category: 'Cloud & Workspace',
      icon: <Globe size={24} />,
      title: 'INITX Workspace',
      description: 'Collaborative workspace with docs, sheets, and communication tools.',
      features: ['Real-time collaboration', 'Cloud storage', 'Video conferencing', 'Project management'],
      cta: 'Try Workspace'
    },
    {
      id: 5,
      category: 'Hardware',
      icon: <Smartphone size={24} />,
      title: 'INITX Devices',
      description: 'Smart devices and hardware solutions for modern living.',
      features: ['Smart home integration', 'AI-powered features', 'Premium design', 'Long battery life'],
      cta: 'Shop Devices'
    },
    {
      id: 6,
      category: 'Developer Tools',
      icon: <Code size={24} />,
      title: 'INITX APIs',
      description: 'Comprehensive APIs and SDKs for developers and businesses.',
      features: ['RESTful APIs', 'SDKs for all platforms', 'Comprehensive docs', '24/7 support'],
      cta: 'View Docs'
    }
  ];

  const filteredProducts = activeCategory === 'All' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <ProductsContainer>
      <Hero>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3rem', marginBottom: '20px' }}
        >
          Products & Services
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1.2rem', opacity: 0.9 }}
        >
          Innovative solutions powered by AI and designed for the future
        </motion.p>
      </Hero>

      <CategoryTabs>
        {categories.map(category => (
          <TabButton
            key={category}
            active={activeCategory === category}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </TabButton>
        ))}
      </CategoryTabs>

      <ProductsGrid>
        {filteredProducts.map((product, index) => (
          <ProductCard
            key={product.id}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProductIcon>{product.icon}</ProductIcon>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            
            <ProductFeatures>
              {product.features.map((feature, i) => (
                <FeatureItem key={i}>{feature}</FeatureItem>
              ))}
            </ProductFeatures>
            
            <ProductCTA onClick={() => alert(`${product.title} - Coming Soon!`)}>
              {product.cta}
              <ArrowRight size={16} />
            </ProductCTA>
          </ProductCard>
        ))}
      </ProductsGrid>

      <DemoSection>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#1e293b' }}>
          See Our Products in Action
        </h2>
        <p style={{ fontSize: '1.2rem', color: '#64748b', marginBottom: '40px' }}>
          Watch demos and explore interactive features of our latest innovations
        </p>
        
        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button 
            style={{
              background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)',
              color: 'white',
              border: 'none',
              padding: '15px 30px',
              borderRadius: '25px',
              fontWeight: '600',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
            onClick={() => alert('Product demo coming soon!')}
          >
            <Play size={20} />
            Watch Demo
          </button>
          
          <button 
            style={{
              background: 'transparent',
              color: '#1e293b',
              border: '2px solid #1e293b',
              padding: '15px 30px',
              borderRadius: '25px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
            onClick={() => alert('Interactive tour coming soon!')}
          >
            Interactive Tour
          </button>
        </div>
      </DemoSection>
    </ProductsContainer>
  );
};

export default Products;