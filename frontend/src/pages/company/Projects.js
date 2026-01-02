import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Eye, ExternalLink, Filter, Grid, List } from 'lucide-react';

const ProjectsContainer = styled.div`
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

const FilterBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const FilterButton = styled.button`
  padding: 10px 20px;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 25px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: 500;
  
  &.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
  }
  
  &:hover {
    border-color: #667eea;
    color: #667eea;
  }
`;

const ViewToggle = styled.div`
  display: flex;
  gap: 10px;
`;

const ViewButton = styled.button`
  padding: 10px;
  border: 2px solid #e2e8f0;
  background: white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &.active {
    background: #667eea;
    color: white;
    border-color: #667eea;
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: ${props => props.view === 'grid' ? 'repeat(auto-fit, minmax(350px, 1fr))' : '1fr'};
  gap: 30px;
`;

const ProjectCard = styled(motion.div)`
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  transition: transform 0.3s ease;
  display: ${props => props.view === 'list' ? 'flex' : 'block'};
  
  &:hover {
    transform: translateY(-10px);
  }
`;

const ProjectImage = styled.div`
  height: ${props => props.view === 'list' ? '200px' : '250px'};
  width: ${props => props.view === 'list' ? '300px' : '100%'};
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 1.2rem;
  font-weight: 600;
  position: relative;
  flex-shrink: 0;
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0,0,0,0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  opacity: 0;
  transition: opacity 0.3s ease;
  
  ${ProjectCard}:hover & {
    opacity: 1;
  }
`;

const OverlayButton = styled.button`
  padding: 10px;
  background: white;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const ProjectContent = styled.div`
  padding: 25px;
  flex: 1;
`;

const ProjectMeta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 15px;
  color: #666;
  font-size: 14px;
`;

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const projects = [
    {
      id: 1,
      title: "E-commerce Platform",
      category: "Web Development",
      description: "Modern e-commerce solution with advanced features",
      image: "E-commerce Platform",
      client: "TechCorp",
      year: "2024"
    },
    {
      id: 2,
      title: "Mobile Banking App",
      category: "Mobile App",
      description: "Secure and user-friendly banking application",
      image: "Mobile Banking App",
      client: "FinanceBank",
      year: "2024"
    },
    {
      id: 3,
      title: "Brand Identity Design",
      category: "Branding",
      description: "Complete brand identity for startup company",
      image: "Brand Identity",
      client: "StartupXYZ",
      year: "2023"
    },
    {
      id: 4,
      title: "SaaS Dashboard",
      category: "Web Development",
      description: "Analytics dashboard for SaaS platform",
      image: "SaaS Dashboard",
      client: "DataCorp",
      year: "2024"
    },
    {
      id: 5,
      title: "Healthcare App",
      category: "Mobile App",
      description: "Patient management mobile application",
      image: "Healthcare App",
      client: "MedTech",
      year: "2023"
    },
    {
      id: 6,
      title: "Corporate Website",
      category: "Web Development",
      description: "Professional corporate website redesign",
      image: "Corporate Website",
      client: "BigCorp",
      year: "2024"
    }
  ];

  const categories = ['All', 'Web Development', 'Mobile App', 'Branding'];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <ProjectsContainer>
      <Hero>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3rem', marginBottom: '20px' }}
        >
          Our Projects
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1.2rem', opacity: 0.9 }}
        >
          Showcasing our best work and successful client partnerships
        </motion.p>
      </Hero>

      <FilterBar>
        <FilterButtons>
          <Filter size={20} style={{ color: '#667eea', marginRight: '10px' }} />
          {categories.map(category => (
            <FilterButton
              key={category}
              className={activeFilter === category ? 'active' : ''}
              onClick={() => setActiveFilter(category)}
            >
              {category}
            </FilterButton>
          ))}
        </FilterButtons>
        
        <ViewToggle>
          <ViewButton
            className={viewMode === 'grid' ? 'active' : ''}
            onClick={() => setViewMode('grid')}
          >
            <Grid size={20} />
          </ViewButton>
          <ViewButton
            className={viewMode === 'list' ? 'active' : ''}
            onClick={() => setViewMode('list')}
          >
            <List size={20} />
          </ViewButton>
        </ViewToggle>
      </FilterBar>

      <ProjectsGrid view={viewMode}>
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            view={viewMode}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ProjectImage view={viewMode}>
              {project.image}
              <ProjectOverlay>
                <OverlayButton>
                  <Eye size={20} color="#667eea" />
                </OverlayButton>
                <OverlayButton>
                  <ExternalLink size={20} color="#667eea" />
                </OverlayButton>
              </ProjectOverlay>
            </ProjectImage>
            
            <ProjectContent>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
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
              
              <h3 style={{ fontSize: '1.3rem', marginBottom: '10px', color: '#333' }}>
                {project.title}
              </h3>
              
              <p style={{ color: '#666', marginBottom: '15px', lineHeight: '1.6' }}>
                {project.description}
              </p>
              
              <ProjectMeta>
                <span>Client: {project.client}</span>
                <span>{project.year}</span>
              </ProjectMeta>
            </ProjectContent>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;