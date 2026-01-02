import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Filter, Bell } from 'lucide-react';

const NewsContainer = styled.div`
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

const SearchSection = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 40px;
  align-items: center;
  flex-wrap: wrap;
`;

const SearchBox = styled.div`
  position: relative;
  flex: 1;
  min-width: 300px;
  
  input {
    width: 100%;
    padding: 15px 50px 15px 20px;
    border: 2px solid #e2e8f0;
    border-radius: 25px;
    font-size: 16px;
    
    &:focus {
      outline: none;
      border-color: #1e293b;
    }
  }
  
  .search-icon {
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    color: #64748b;
  }
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border: 2px solid #e2e8f0;
  background: ${props => props.active ? '#1e293b' : 'white'};
  color: ${props => props.active ? 'white' : '#1e293b'};
  border-radius: 25px;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1e293b;
    color: white;
    border-color: #1e293b;
  }
`;

const NewsGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const MainNews = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const NewsCard = styled(motion.article)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
  
  &.featured {
    grid-column: 1 / -1;
  }
`;

const NewsImage = styled.div`
  height: ${props => props.featured ? '300px' : '200px'};
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
`;

const NewsContent = styled.div`
  padding: 30px;
`;

const NewsCategory = styled.span`
  background: #e0f2fe;
  color: #0369a1;
  padding: 6px 12px;
  border-radius: 15px;
  font-size: 12px;
  font-weight: 600;
  text-transform: uppercase;
`;

const NewsTitle = styled.h2`
  font-size: ${props => props.featured ? '2rem' : '1.3rem'};
  color: #1e293b;
  margin: 15px 0;
  font-weight: 600;
  line-height: 1.3;
`;

const NewsMeta = styled.div`
  display: flex;
  gap: 20px;
  margin: 15px 0;
  color: #64748b;
  font-size: 14px;
`;

const NewsExcerpt = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const ReadMoreButton = styled.button`
  background: transparent;
  color: #1e293b;
  border: 2px solid #1e293b;
  padding: 10px 20px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    background: #1e293b;
    color: white;
  }
`;

const Sidebar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const SidebarCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

const NewsletterCard = styled.div`
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  color: white;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
`;

const News = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const categories = ['All', 'AI & Technology', 'Product Updates', 'Company News', 'Research'];

  const newsArticles = [
    {
      id: 1,
      category: 'AI & Technology',
      title: 'INITX AI Reaches New Milestone in Natural Language Processing',
      excerpt: 'Our latest AI model demonstrates unprecedented understanding of context and nuance in human language.',
      author: 'Dr. Sarah Chen',
      date: 'Jan 15, 2024',
      featured: true,
      image: 'AI Breakthrough'
    },
    {
      id: 2,
      category: 'Product Updates',
      title: 'New Search Features Powered by Advanced AI',
      excerpt: 'Enhanced search capabilities with better understanding of user intent and context.',
      author: 'Mike Johnson',
      date: 'Jan 12, 2024',
      featured: false,
      image: 'Search Update'
    },
    {
      id: 3,
      category: 'Company News',
      title: 'INITX Commits to Carbon Neutrality by 2025',
      excerpt: 'Announcing our comprehensive sustainability initiative and renewable energy investments.',
      author: 'Emma Davis',
      date: 'Jan 10, 2024',
      featured: false,
      image: 'Sustainability'
    },
    {
      id: 4,
      category: 'Research',
      title: 'Breakthrough in Quantum Computing Research',
      excerpt: 'Our research team achieves significant progress in quantum error correction.',
      author: 'Dr. Alex Rodriguez',
      date: 'Jan 8, 2024',
      featured: false,
      image: 'Quantum Research'
    }
  ];

  const filteredNews = newsArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = activeFilter === 'All' || article.category === activeFilter;
    return matchesSearch && matchesFilter;
  });

  const featuredNews = filteredNews.filter(article => article.featured);
  const regularNews = filteredNews.filter(article => !article.featured);

  return (
    <NewsContainer>
      <Hero>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3rem', marginBottom: '20px' }}
        >
          News & Updates
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1.2rem', opacity: 0.9 }}
        >
          Stay updated with the latest developments, research, and innovations from INITX
        </motion.p>
      </Hero>

      <SearchSection>
        <SearchBox>
          <input
            type="text"
            placeholder="Search news and updates..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Search size={20} className="search-icon" />
        </SearchBox>
        
        <FilterButtons>
          {categories.map(category => (
            <FilterButton
              key={category}
              active={activeFilter === category}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterButtons>
      </SearchSection>

      <NewsGrid>
        <MainNews>
          {featuredNews.map((article, index) => (
            <NewsCard
              key={article.id}
              className="featured"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <NewsImage featured>{article.image}</NewsImage>
              <NewsContent>
                <NewsCategory>{article.category}</NewsCategory>
                <NewsTitle featured>{article.title}</NewsTitle>
                <NewsMeta>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <User size={14} />
                    {article.author}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={14} />
                    {article.date}
                  </span>
                </NewsMeta>
                <NewsExcerpt>{article.excerpt}</NewsExcerpt>
                <ReadMoreButton onClick={() => alert(`Reading: ${article.title}`)}>
                  Read More <ArrowRight size={16} />
                </ReadMoreButton>
              </NewsContent>
            </NewsCard>
          ))}

          {regularNews.map((article, index) => (
            <NewsCard
              key={article.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (index + featuredNews.length) * 0.1 }}
            >
              <NewsImage>{article.image}</NewsImage>
              <NewsContent>
                <NewsCategory>{article.category}</NewsCategory>
                <NewsTitle>{article.title}</NewsTitle>
                <NewsMeta>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <User size={14} />
                    {article.author}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <Calendar size={14} />
                    {article.date}
                  </span>
                </NewsMeta>
                <NewsExcerpt>{article.excerpt}</NewsExcerpt>
                <ReadMoreButton onClick={() => alert(`Reading: ${article.title}`)}>
                  Read More <ArrowRight size={16} />
                </ReadMoreButton>
              </NewsContent>
            </NewsCard>
          ))}
        </MainNews>

        <Sidebar>
          <NewsletterCard>
            <Bell size={32} style={{ marginBottom: '20px' }} />
            <h3 style={{ marginBottom: '15px' }}>Stay Updated</h3>
            <p style={{ marginBottom: '20px', opacity: 0.9, fontSize: '14px' }}>
              Get the latest news and updates delivered to your inbox
            </p>
            <input
              type="email"
              placeholder="Your email"
              style={{ 
                width: '100%', 
                padding: '12px', 
                marginBottom: '15px', 
                border: 'none', 
                borderRadius: '8px' 
              }}
            />
            <button 
              style={{ 
                background: 'white', 
                color: '#f97316', 
                border: 'none', 
                padding: '12px 24px', 
                borderRadius: '8px', 
                fontWeight: '600',
                cursor: 'pointer',
                width: '100%'
              }}
              onClick={() => alert('Newsletter subscription coming soon!')}
            >
              Subscribe
            </button>
          </NewsletterCard>

          <SidebarCard>
            <h3 style={{ marginBottom: '20px', color: '#1e293b' }}>Press Resources</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <button 
                style={{ 
                  background: '#f8fafc', 
                  border: '1px solid #e2e8f0', 
                  padding: '12px', 
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
                onClick={() => alert('Press kit coming soon!')}
              >
                Download Press Kit
              </button>
              <button 
                style={{ 
                  background: '#f8fafc', 
                  border: '1px solid #e2e8f0', 
                  padding: '12px', 
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
                onClick={() => alert('Media contact coming soon!')}
              >
                Media Contact
              </button>
              <button 
                style={{ 
                  background: '#f8fafc', 
                  border: '1px solid #e2e8f0', 
                  padding: '12px', 
                  borderRadius: '8px',
                  cursor: 'pointer',
                  textAlign: 'left'
                }}
                onClick={() => alert('Brand assets coming soon!')}
              >
                Brand Assets
              </button>
            </div>
          </SidebarCard>
        </Sidebar>
      </NewsGrid>
    </NewsContainer>
  );
};

export default News;