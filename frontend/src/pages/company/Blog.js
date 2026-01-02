import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Search, Tag } from 'lucide-react';

const BlogContainer = styled.div`
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
`;

const Hero = styled.section`
  text-align: center;
  padding: 80px 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  margin: -40px -20px 60px;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 60px;
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const PostsGrid = styled.div`
  display: grid;
  gap: 40px;
`;

const PostCard = styled(motion.article)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const PostImage = styled.div`
  height: 250px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
`;

const PostContent = styled.div`
  padding: 30px;
`;

const PostMeta = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 15px;
  color: #666;
  font-size: 14px;
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

const SearchBox = styled.div`
  position: relative;
  margin-bottom: 20px;
  
  input {
    width: 100%;
    padding: 12px 40px 12px 16px;
    border: 2px solid #e1e5e9;
    border-radius: 12px;
    font-size: 16px;
  }
  
  button {
    position: absolute;
    right: 8px;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    color: #667eea;
    cursor: pointer;
  }
`;

const TagList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TagItem = styled.span`
  background: #f1f5f9;
  color: #475569;
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: #667eea;
    color: white;
  }
`;

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "The Future of UI/UX Design: Trends to Watch in 2024",
      excerpt: "Explore the latest trends shaping the design industry and how they'll impact user experiences.",
      author: "Sarah Johnson",
      date: "Dec 28, 2023",
      category: "Design Trends",
      readTime: "5 min read"
    },
    {
      id: 2,
      title: "Building Effective Design Systems for Scale",
      excerpt: "Learn how to create and maintain design systems that grow with your organization.",
      author: "Mike Chen",
      date: "Dec 25, 2023",
      category: "Design Systems",
      readTime: "8 min read"
    },
    {
      id: 3,
      title: "Client Collaboration: Best Practices for Designers",
      excerpt: "Master the art of working with clients to deliver exceptional design outcomes.",
      author: "Emma Davis",
      date: "Dec 22, 2023",
      category: "Business",
      readTime: "6 min read"
    },
    {
      id: 4,
      title: "Accessibility in Design: Creating Inclusive Experiences",
      excerpt: "Why accessibility matters and how to implement it in your design process.",
      author: "Alex Rodriguez",
      date: "Dec 20, 2023",
      category: "Accessibility",
      readTime: "7 min read"
    }
  ];

  const categories = ["Design Trends", "Design Systems", "Business", "Accessibility", "Tools", "Inspiration"];
  const recentPosts = blogPosts.slice(0, 3);

  return (
    <BlogContainer>
      <Hero>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3rem', marginBottom: '20px' }}
        >
          OnTech Blog
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1.2rem', opacity: 0.9 }}
        >
          Insights, tips, and inspiration for designers and creative professionals
        </motion.p>
      </Hero>

      <BlogGrid>
        <div>
          <PostsGrid>
            {blogPosts.map((post, index) => (
              <PostCard
                key={post.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <PostImage>
                  {post.title}
                </PostImage>
                <PostContent>
                  <PostMeta>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <User size={14} />
                      {post.author}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <Calendar size={14} />
                      {post.date}
                    </span>
                    <span>{post.readTime}</span>
                  </PostMeta>
                  
                  <span style={{
                    background: '#e0e7ff',
                    color: '#3730a3',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '12px',
                    marginBottom: '15px',
                    display: 'inline-block'
                  }}>
                    {post.category}
                  </span>
                  
                  <h2 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#333' }}>
                    {post.title}
                  </h2>
                  
                  <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '20px' }}>
                    {post.excerpt}
                  </p>
                  
                  <button 
                    className="btn"
                    style={{ 
                      background: 'transparent', 
                      color: '#667eea', 
                      border: '1px solid #667eea',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px'
                    }}
                    onClick={() => alert(`Reading: ${post.title}`)}
                  >
                    Read More <ArrowRight size={16} />
                  </button>
                </PostContent>
              </PostCard>
            ))}
          </PostsGrid>
        </div>

        <Sidebar>
          <SidebarCard>
            <h3 style={{ marginBottom: '20px', color: '#333' }}>Search</h3>
            <SearchBox>
              <input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button>
                <Search size={20} />
              </button>
            </SearchBox>
          </SidebarCard>

          <SidebarCard>
            <h3 style={{ marginBottom: '20px', color: '#333' }}>Categories</h3>
            <TagList>
              {categories.map((category, index) => (
                <TagItem key={index}>
                  <Tag size={14} style={{ marginRight: '5px' }} />
                  {category}
                </TagItem>
              ))}
            </TagList>
          </SidebarCard>

          <SidebarCard>
            <h3 style={{ marginBottom: '20px', color: '#333' }}>Recent Posts</h3>
            {recentPosts.map((post, index) => (
              <div key={index} style={{ marginBottom: '20px', paddingBottom: '20px', borderBottom: index < recentPosts.length - 1 ? '1px solid #e2e8f0' : 'none' }}>
                <h4 style={{ fontSize: '14px', marginBottom: '8px', color: '#333', lineHeight: '1.4' }}>
                  {post.title}
                </h4>
                <div style={{ fontSize: '12px', color: '#666', display: 'flex', alignItems: 'center', gap: '5px' }}>
                  <Calendar size={12} />
                  {post.date}
                </div>
              </div>
            ))}
          </SidebarCard>

          <SidebarCard style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white', textAlign: 'center' }}>
            <h3 style={{ marginBottom: '15px' }}>Join Our Newsletter</h3>
            <p style={{ marginBottom: '20px', opacity: 0.9, fontSize: '14px' }}>
              Get the latest design insights delivered to your inbox
            </p>
            <input
              type="email"
              placeholder="Your email"
              style={{ 
                width: '100%', 
                padding: '10px', 
                marginBottom: '15px', 
                border: 'none', 
                borderRadius: '8px' 
              }}
            />
            <button 
              style={{ 
                background: 'white', 
                color: '#667eea', 
                border: 'none', 
                padding: '10px 20px', 
                borderRadius: '8px', 
                fontWeight: '600',
                cursor: 'pointer'
              }}
              onClick={() => {
                const email = prompt('Enter your email for newsletter:');
                if (email) {
                  alert(`Thank you! You've been subscribed with ${email}`);
                }
              }}
            >
              Subscribe
            </button>
          </SidebarCard>
        </Sidebar>
      </BlogGrid>
    </BlogContainer>
  );
};

export default Blog;