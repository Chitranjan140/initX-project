import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { MapPin, Clock, DollarSign, Users, Briefcase, Heart, Coffee, Zap } from 'lucide-react';

const CareersContainer = styled.div`
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

const BenefitsSection = styled.section`
  margin-bottom: 80px;
`;

const BenefitsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 40px;
`;

const BenefitCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  text-align: center;
`;

const BenefitIcon = styled.div`
  width: 60px;
  height: 60px;
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
`;

const JobsSection = styled.section`
  margin-bottom: 80px;
`;

const JobCard = styled(motion.div)`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
  margin-bottom: 25px;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
  }
`;

const JobHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 20px;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

const JobInfo = styled.div`
  flex: 1;
`;

const JobMeta = styled.div`
  display: flex;
  gap: 20px;
  margin: 15px 0;
  flex-wrap: wrap;
`;

const MetaItem = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  color: #666;
  font-size: 14px;
`;

const JobTags = styled.div`
  display: flex;
  gap: 10px;
  margin: 15px 0;
  flex-wrap: wrap;
`;

const Tag = styled.span`
  background: #f1f5f9;
  color: #475569;
  padding: 4px 12px;
  border-radius: 15px;
  font-size: 12px;
`;

const ApplyButton = styled.button`
  background: linear-gradient(135deg, #fb923c 0%, #f97316 100%);
  color: white;
  border: none;
  padding: 12px 25px;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
  }
`;

const Careers = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('All');

  const benefits = [
    {
      icon: <Heart size={24} />,
      title: "Health & Wellness",
      description: "Comprehensive health insurance and wellness programs"
    },
    {
      icon: <Coffee size={24} />,
      title: "Work-Life Balance",
      description: "Flexible hours and remote work options"
    },
    {
      icon: <Zap size={24} />,
      title: "Growth Opportunities",
      description: "Continuous learning and career development"
    },
    {
      icon: <Users size={24} />,
      title: "Great Team",
      description: "Work with talented and passionate professionals"
    }
  ];

  const jobs = [
    {
      id: 1,
      title: "Senior UI/UX Designer",
      department: "Design",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$80k - $120k",
      description: "We're looking for a creative UI/UX designer to join our design team and create amazing user experiences.",
      requirements: ["5+ years experience", "Figma/Sketch proficiency", "Portfolio required"],
      tags: ["Design", "UI/UX", "Figma", "Remote OK"]
    },
    {
      id: 2,
      title: "Frontend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$70k - $100k",
      description: "Join our engineering team to build beautiful and responsive web applications using modern technologies.",
      requirements: ["React expertise", "3+ years experience", "JavaScript/TypeScript"],
      tags: ["React", "JavaScript", "Frontend", "Remote"]
    },
    {
      id: 3,
      title: "Product Manager",
      department: "Product",
      location: "New York, NY",
      type: "Full-time",
      salary: "$90k - $130k",
      description: "Lead product strategy and work with cross-functional teams to deliver exceptional products.",
      requirements: ["Product management experience", "Analytical skills", "Leadership experience"],
      tags: ["Product", "Strategy", "Leadership", "Analytics"]
    },
    {
      id: 4,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Los Angeles, CA",
      type: "Full-time",
      salary: "$50k - $70k",
      description: "Drive marketing campaigns and help grow our brand presence across digital channels.",
      requirements: ["Digital marketing experience", "Content creation", "Analytics tools"],
      tags: ["Marketing", "Content", "Digital", "Analytics"]
    },
    {
      id: 5,
      title: "Backend Developer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "$75k - $110k",
      description: "Build scalable backend systems and APIs to power our platform.",
      requirements: ["Node.js/Python", "Database design", "API development"],
      tags: ["Backend", "Node.js", "APIs", "Remote"]
    }
  ];

  const departments = ['All', 'Design', 'Engineering', 'Product', 'Marketing'];

  const filteredJobs = selectedDepartment === 'All' 
    ? jobs 
    : jobs.filter(job => job.department === selectedDepartment);

  return (
    <CareersContainer>
      <Hero>
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          style={{ fontSize: '3rem', marginBottom: '20px' }}
        >
          Join Our Team
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontSize: '1.2rem', opacity: 0.9 }}
        >
          Build the future of design with passionate professionals
        </motion.p>
      </Hero>

      <BenefitsSection>
        <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '20px', color: '#333' }}>
          Why Work With Us?
        </h2>
        <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#666', marginBottom: '40px' }}>
          We offer more than just a job - we provide a platform for growth and innovation
        </p>
        
        <BenefitsGrid>
          {benefits.map((benefit, index) => (
            <BenefitCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <BenefitIcon>{benefit.icon}</BenefitIcon>
              <h3 style={{ marginBottom: '15px', color: '#333' }}>{benefit.title}</h3>
              <p style={{ color: '#666', lineHeight: '1.6' }}>{benefit.description}</p>
            </BenefitCard>
          ))}
        </BenefitsGrid>
      </BenefitsSection>

      <JobsSection>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px', flexWrap: 'wrap', gap: '20px' }}>
          <h2 style={{ fontSize: '2.5rem', color: '#333' }}>Open Positions</h2>
          
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            {departments.map(dept => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                style={{
                  padding: '8px 16px',
                  border: selectedDepartment === dept ? 'none' : '2px solid #e2e8f0',
                  background: selectedDepartment === dept ? 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)' : 'white',
                  color: selectedDepartment === dept ? 'white' : '#666',
                  borderRadius: '20px',
                  cursor: 'pointer',
                  fontWeight: '500',
                  transition: 'all 0.3s ease'
                }}
              >
                {dept}
              </button>
            ))}
          </div>
        </div>

        {filteredJobs.map((job, index) => (
          <JobCard
            key={job.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <JobHeader>
              <JobInfo>
                <h3 style={{ fontSize: '1.5rem', marginBottom: '10px', color: '#333' }}>
                  {job.title}
                </h3>
                
                <JobMeta>
                  <MetaItem>
                    <MapPin size={16} />
                    {job.location}
                  </MetaItem>
                  <MetaItem>
                    <Clock size={16} />
                    {job.type}
                  </MetaItem>
                  <MetaItem>
                    <DollarSign size={16} />
                    {job.salary}
                  </MetaItem>
                  <MetaItem>
                    <Briefcase size={16} />
                    {job.department}
                  </MetaItem>
                </JobMeta>
                
                <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '15px' }}>
                  {job.description}
                </p>
                
                <div style={{ marginBottom: '15px' }}>
                  <strong style={{ color: '#333', fontSize: '14px' }}>Requirements:</strong>
                  <ul style={{ marginTop: '8px', paddingLeft: '20px', color: '#666' }}>
                    {job.requirements.map((req, i) => (
                      <li key={i} style={{ marginBottom: '4px' }}>{req}</li>
                    ))}
                  </ul>
                </div>
                
                <JobTags>
                  {job.tags.map((tag, i) => (
                    <Tag key={i}>{tag}</Tag>
                  ))}
                </JobTags>
              </JobInfo>
              
              <ApplyButton onClick={() => {
                alert(`Application for ${job.title} submitted! We'll review your application and get back to you soon.`);
              }}>
                Apply Now
              </ApplyButton>
            </JobHeader>
          </JobCard>
        ))}
      </JobsSection>

      <div style={{ 
        background: 'linear-gradient(135deg, #fb923c 0%, #f97316 100%)', 
        color: 'white', 
        padding: '60px 40px', 
        borderRadius: '20px', 
        textAlign: 'center' 
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>Don't See Your Role?</h2>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px', opacity: 0.9 }}>
          We're always looking for talented individuals. Send us your resume!
        </p>
        <button 
          style={{ 
            background: 'white', 
            color: '#f97316', 
            border: 'none', 
            padding: '15px 30px', 
            borderRadius: '25px', 
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '1.1rem'
          }}
          onClick={() => {
            const email = prompt('Enter your email to send resume:');
            if (email) {
              alert(`Resume submission feature coming soon! We'll contact you at ${email}`);
            }
          }}
        >
          Send Resume
        </button>
      </div>
    </CareersContainer>
  );
};

export default Careers;