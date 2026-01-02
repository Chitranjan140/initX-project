import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const PortfolioContainer = styled.div`
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const ProjectHeader = styled.div`
  text-align: center;
  margin-bottom: 50px;
  color: white;
`;

const ProjectTitle = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 20px;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 30px;
`;

const MetaItem = styled.div`
  text-align: center;
`;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <ProjectHeader>
        <ProjectTitle
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Project Portfolio
        </ProjectTitle>
        <ProjectMeta>
          <MetaItem>
            <h4>Category</h4>
            <p>Web Design</p>
          </MetaItem>
          <MetaItem>
            <h4>Designer</h4>
            <p>John Doe</p>
          </MetaItem>
          <MetaItem>
            <h4>Year</h4>
            <p>2024</p>
          </MetaItem>
        </ProjectMeta>
      </ProjectHeader>

      <div className="card">
        <h2>Project Details</h2>
        <p>This is a placeholder for the portfolio page. In a complete implementation, this would show detailed project information, images, and interactive elements.</p>
      </div>
    </PortfolioContainer>
  );
};

export default Portfolio;