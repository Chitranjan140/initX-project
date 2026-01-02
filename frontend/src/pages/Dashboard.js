import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import api from '../utils/api';
import { Plus, Edit, Eye, Trash2, BarChart3, Users, Calendar, Star, TrendingUp, Download, Share2, Settings, Bell, Search, Filter, Clock, Target, Award, Zap } from 'lucide-react';

const DashboardContainer = styled.div`
  padding: 20px 20px 20px;
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 20px;
`;

const DashboardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 40px;
  flex-wrap: wrap;
  gap: 20px;
`;

const WelcomeSection = styled.div`
  h1 {
    color: #ffffff;
    font-size: 3rem;
    margin-bottom: 10px;
    text-shadow: 0 0 30px rgba(0, 255, 255, 0.5), 0 0 60px rgba(255, 0, 128, 0.3);
    background: linear-gradient(135deg, #00ffff 0%, #ffffff 50%, #ff0080 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    animation: welcomeGlow 3s ease-in-out infinite alternate;
    font-weight: 900;
    letter-spacing: 2px;
  }
  
  p {
    color: #cccccc;
    font-size: 1.2rem;
    text-shadow: 0 0 15px rgba(0, 255, 255, 0.3);
    animation: subtitlePulse 2s ease-in-out infinite alternate;
  }
  
  @keyframes welcomeGlow {
    0% { 
      filter: drop-shadow(0 0 20px rgba(0, 255, 255, 0.5));
      transform: scale(1);
    }
    100% { 
      filter: drop-shadow(0 0 40px rgba(255, 0, 128, 0.7));
      transform: scale(1.02);
    }
  }
  
  @keyframes subtitlePulse {
    0% { opacity: 0.8; }
    100% { opacity: 1; }
  }
`;

const QuickActions = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
`;

const ActionButton = styled.button`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 20px;
  background: rgba(255,255,255,0.1);
  color: white;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 12px;
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255,255,255,0.2);
    transform: translateY(-2px);
  }
  
  &.primary {
    background: white;
    color: #667eea;
  }
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 25px;
  margin-bottom: 40px;
`;

const StatCard = styled(motion.div)`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 255, 255, 0.3);
  padding: 25px;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.2);
  display: flex;
  align-items: center;
  gap: 20px;
`;

const StatIcon = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  
  &.projects { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); }
  &.views { background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); }
  &.clients { background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); }
  &.revenue { background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); }
`;

const StatInfo = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 700;
    color: #ffffff;
    margin-bottom: 5px;
  }
  
  p {
    color: #cccccc;
    font-size: 0.9rem;
  }
  
  .trend {
    display: flex;
    align-items: center;
    gap: 5px;
    color: #00ffff;
    font-size: 0.8rem;
    margin-top: 5px;
  }
`;

const MainContent = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 40px;
  
  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ProjectsSection = styled.div`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 20px;
  padding: 30px;
  box-shadow: 0 20px 40px rgba(0, 255, 255, 0.1);
`;

const SectionHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  
  h2 {
    color: #ffffff;
    font-size: 1.5rem;
  }
`;

const SearchFilter = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

const SearchBox = styled.div`
  position: relative;
  flex: 1;
  
  input {
    width: 100%;
    padding: 10px 40px 10px 16px;
    border: 2px solid #e1e5e9;
    border-radius: 10px;
    font-size: 14px;
  }
  
  .search-icon {
    position: absolute;
    right: 12px;
    top: 50%;
    transform: translateY(-50%);
    color: #666;
  }
`;

const FilterSelect = styled.select`
  padding: 10px 16px;
  border: 2px solid #e1e5e9;
  border-radius: 10px;
  background: white;
  cursor: pointer;
`;

const ProjectGrid = styled.div`
  display: grid;
  gap: 20px;
`;

const ProjectCard = styled(motion.div)`
  background: #f8fafc;
  border-radius: 12px;
  padding: 20px;
  border: 1px solid #e2e8f0;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 25px rgba(0,0,0,0.1);
  }
`;

const ProjectHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 15px;
`;

const ProjectInfo = styled.div`
  flex: 1;
  
  h3 {
    color: #333;
    font-size: 1.1rem;
    margin-bottom: 8px;
  }
  
  p {
    color: #666;
    font-size: 0.9rem;
    line-height: 1.4;
  }
`;

const ProjectMeta = styled.div`
  display: flex;
  gap: 15px;
  margin: 15px 0;
  font-size: 0.8rem;
  color: #666;
`;

const ProjectActions = styled.div`
  display: flex;
  gap: 8px;
`;

const MiniActionButton = styled.button`
  padding: 6px 8px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  transition: all 0.3s ease;

  &.edit { background: #f0f9ff; color: #0369a1; }
  &.view { background: #f0fdf4; color: #166534; }
  &.share { background: #fef3c7; color: #92400e; }
  &.delete { background: #fef2f2; color: #dc2626; }

  &:hover {
    transform: translateY(-1px);
  }
`;

const Sidebar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

const SidebarCard = styled.div`
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(15px);
  border: 1px solid rgba(0, 255, 255, 0.3);
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 10px 30px rgba(0, 255, 255, 0.1);
  color: #ffffff;
`;

const ActivityItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 12px 0;
  border-bottom: 1px solid #f1f5f9;
  
  &:last-child {
    border-bottom: none;
  }
`;

const ActivityIcon = styled.div`
  width: 35px;
  height: 35px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f1f5f9;
  color: #667eea;
`;

const ActivityInfo = styled.div`
  flex: 1;
  
  p {
    font-size: 0.9rem;
    color: #ffffff;
    margin-bottom: 2px;
  }
  
  span {
    font-size: 0.8rem;
    color: #cccccc;
  }
`;

const ProgressBar = styled.div`
  width: 100%;
  height: 8px;
  background: #f1f5f9;
  border-radius: 4px;
  overflow: hidden;
  margin: 10px 0;
`;

const ProgressFill = styled.div`
  height: 100%;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
  transition: width 0.3s ease;
`;

  const Dashboard = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [showNotifications, setShowNotifications] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [notifications, setNotifications] = useState([
    { id: 1, text: 'New client message received', time: '5 min ago', unread: true },
    { id: 2, text: 'Project "Mobile App" was approved', time: '1 hour ago', unread: true },
    { id: 3, text: 'Payment received for completed project', time: '2 hours ago', unread: false }
  ]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: 'web',
    status: 'draft',
    isPublic: false
  });

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = useCallback(async () => {
    try {
      const response = await api.get('/projects/my');
      setProjects(response.data);
    } catch (error) {
      console.error('Error fetching projects:', error);
    }
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    try {
      if (editingProject) {
        await api.put(`/projects/${editingProject._id}`, formData);
      } else {
        await api.post('/projects', formData);
      }
      setShowModal(false);
      setEditingProject(null);
      setFormData({ title: '', description: '', category: 'web', status: 'draft', isPublic: false });
      fetchProjects();
    } catch (error) {
      console.error('Error saving project:', error);
    }
  }, [editingProject, formData, fetchProjects]);

  const handleEdit = (project) => {
    setEditingProject(project);
    setFormData({
      title: project.title,
      description: project.description,
      category: project.category,
      status: project.status,
      isPublic: project.isPublic
    });
    setShowModal(true);
  };

  const handleShare = (project) => {
    if (navigator.share) {
      navigator.share({
        title: project.title,
        text: project.description,
        url: window.location.origin + `/portfolio/${project._id}`
      });
    } else {
      navigator.clipboard.writeText(window.location.origin + `/portfolio/${project._id}`);
      alert('Project link copied to clipboard!');
    }
  };

  const handleExport = () => {
    const csvContent = "data:text/csv;charset=utf-8," + 
      "Title,Description,Category,Status,Created\n" +
      projects.map(p => `"${p.title}","${p.description}","${p.category}","${p.status}","${new Date(p.createdAt).toLocaleDateString()}"`).join("\n");
    
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", "projects.csv");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleAnalytics = () => {
    alert('Analytics feature coming soon! This will show detailed project performance metrics.');
  };

  const handleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const handleSettings = () => {
    setShowSettings(!showSettings);
  };

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setFormData({ ...formData, [e.target.name]: value });
  };

  const handleDelete = useCallback(async (projectId) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await api.delete(`/projects/${projectId}`);
        fetchProjects();
        alert('Project deleted successfully!');
      } catch (error) {
        console.error('Error deleting project:', error);
        alert('Error deleting project. Please try again.');
      }
    }
  }, [fetchProjects]);

  const handleView = (project) => {
    navigate(`/portfolio/${project._id}`);
  };

  const filteredProjects = useMemo(() => {
    return projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFilter = filterStatus === 'all' || project.status === filterStatus;
      return matchesSearch && matchesFilter;
    });
  }, [projects, searchTerm, filterStatus]);

  const stats = useMemo(() => [
    { icon: <Target size={24} />, label: 'Total Projects', value: projects.length, trend: '+12%', class: 'projects' },
    { icon: <Eye size={24} />, label: 'Total Views', value: '2.4K', trend: '+18%', class: 'views' },
    { icon: <Users size={24} />, label: 'Active Clients', value: '8', trend: '+5%', class: 'clients' },
    { icon: <Award size={24} />, label: 'Completed', value: projects.filter(p => p.status === 'completed').length, trend: '+25%', class: 'revenue' }
  ], [projects]);

  const recentActivity = [
    { icon: <Plus size={16} />, text: 'New project created', time: '2 hours ago' },
    { icon: <Eye size={16} />, text: 'Portfolio viewed by client', time: '4 hours ago' },
    { icon: <Star size={16} />, text: 'Received 5-star rating', time: '1 day ago' },
    { icon: <Share2 size={16} />, text: 'Project shared on social media', time: '2 days ago' }
  ];

  if (!projects) return null;

  return (
    <DashboardContainer>
      <DashboardHeader>
        <WelcomeSection>
          <h1>Welcome back initx.tech</h1>
          <p>Advanced Technology Solutions Platform</p>
        </WelcomeSection>
        
        <QuickActions>
          <ActionButton onClick={handleNotifications} style={{ position: 'relative' }}>
            <Bell size={18} />
            Notifications
            {notifications.filter(n => n.unread).length > 0 && (
              <span style={{
                position: 'absolute',
                top: '5px',
                right: '5px',
                background: '#ef4444',
                color: 'white',
                borderRadius: '50%',
                width: '18px',
                height: '18px',
                fontSize: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {notifications.filter(n => n.unread).length}
              </span>
            )}
          </ActionButton>
          <ActionButton onClick={handleSettings}>
            <Settings size={18} />
            Settings
          </ActionButton>
          <ActionButton 
            className="primary"
            onClick={() => setShowModal(true)}
          >
            <Plus size={18} />
            New Project
          </ActionButton>
        </QuickActions>
      </DashboardHeader>

      <StatsGrid>
        {stats.map((stat, index) => (
          <StatCard
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <StatIcon className={stat.class}>
              {stat.icon}
            </StatIcon>
            <StatInfo>
              <h3>{stat.value}</h3>
              <p>{stat.label}</p>
              <div className="trend">
                <TrendingUp size={12} />
                {stat.trend} this month
              </div>
            </StatInfo>
          </StatCard>
        ))}
      </StatsGrid>

      <MainContent>
        <ProjectsSection>
          <SectionHeader>
            <h2>My Projects</h2>
            <div style={{ display: 'flex', gap: '10px' }}>
              <ActionButton onClick={handleExport}>
                <Download size={16} />
                Export
              </ActionButton>
              <ActionButton onClick={handleAnalytics}>
                <BarChart3 size={16} />
                Analytics
              </ActionButton>
            </div>
          </SectionHeader>

          <SearchFilter>
            <SearchBox>
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search size={16} className="search-icon" />
            </SearchBox>
            <FilterSelect value={filterStatus} onChange={(e) => setFilterStatus(e.target.value)}>
              <option value="all">All Status</option>
              <option value="draft">Draft</option>
              <option value="in-progress">In Progress</option>
              <option value="review">Review</option>
              <option value="completed">Completed</option>
            </FilterSelect>
          </SearchFilter>

          <ProjectGrid>
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project._id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <ProjectHeader>
                  <ProjectInfo>
                    <h3>{project.title}</h3>
                    <p>{project.description}</p>
                  </ProjectInfo>
                  <ProjectActions>
                    <MiniActionButton className="edit" onClick={() => handleEdit(project)}>
                      <Edit size={14} />
                    </MiniActionButton>
                    <MiniActionButton className="view" onClick={() => handleView(project)}>
                      <Eye size={14} />
                    </MiniActionButton>
                    <MiniActionButton className="share" onClick={() => handleShare(project)}>
                      <Share2 size={14} />
                    </MiniActionButton>
                    <MiniActionButton className="delete" onClick={() => handleDelete(project._id)}>
                      <Trash2 size={14} />
                    </MiniActionButton>
                  </ProjectActions>
                </ProjectHeader>
                
                <ProjectMeta>
                  <span>Category: {project.category}</span>
                  <span>Status: {project.status}</span>
                  <span>Created: {new Date(project.createdAt).toLocaleDateString()}</span>
                </ProjectMeta>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{
                    background: project.status === 'completed' ? '#dcfce7' : '#fef3c7',
                    color: project.status === 'completed' ? '#166534' : '#92400e',
                    padding: '4px 8px',
                    borderRadius: '6px',
                    fontSize: '12px'
                  }}>
                    {project.status}
                  </span>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12px', color: '#666' }}>
                    <span>Progress: 75%</span>
                  </div>
                </div>
                
                <ProgressBar>
                  <ProgressFill style={{ width: '75%' }} />
                </ProgressBar>
              </ProjectCard>
            ))}
          </ProjectGrid>
        </ProjectsSection>

        <Sidebar>
          <SidebarCard>
            <h3 style={{ marginBottom: '20px', color: '#ffffff' }}>Recent Activity</h3>
            {recentActivity.map((activity, index) => (
              <ActivityItem key={index}>
                <ActivityIcon>
                  {activity.icon}
                </ActivityIcon>
                <ActivityInfo>
                  <p>{activity.text}</p>
                  <span>{activity.time}</span>
                </ActivityInfo>
              </ActivityItem>
            ))}
          </SidebarCard>

          <SidebarCard>
            <h3 style={{ marginBottom: '20px', color: '#ffffff' }}>Quick Stats</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#cccccc' }}>This Week</span>
                <span style={{ fontWeight: '600', color: '#ffffff' }}>3 projects</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#cccccc' }}>Avg. Rating</span>
                <span style={{ fontWeight: '600', color: '#ffffff' }}>4.8 ⭐</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ color: '#cccccc' }}>Response Time</span>
                <span style={{ fontWeight: '600', color: '#ffffff' }}>2.4 hrs</span>
              </div>
            </div>
          </SidebarCard>

          <SidebarCard style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', color: 'white' }}>
            <h3 style={{ marginBottom: '15px' }}>Upgrade to Pro</h3>
            <p style={{ marginBottom: '20px', opacity: 0.9, fontSize: '14px' }}>
              Get unlimited projects, advanced analytics, and priority support.
            </p>
            <button style={{
              background: 'white',
              color: '#667eea',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer',
              width: '100%'
            }} onClick={() => alert('Upgrade feature coming soon! This will redirect to pricing page.')}>
              Upgrade Now
            </button>
          </SidebarCard>
        </Sidebar>
      </MainContent>

      {/* Notifications Dropdown */}
      {showNotifications && (
        <div style={{
          position: 'fixed',
          top: '80px',
          right: '20px',
          background: 'white',
          borderRadius: '15px',
          padding: '20px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          width: '300px',
          zIndex: 1001
        }}>
          <h3 style={{ marginBottom: '15px', color: '#333' }}>Notifications</h3>
          {notifications.map(notification => (
            <div key={notification.id} style={{
              padding: '10px',
              borderBottom: '1px solid #f1f5f9',
              cursor: 'pointer',
              background: notification.unread ? '#f0f9ff' : 'transparent'
            }} onClick={() => markNotificationRead(notification.id)}>
              <p style={{ fontSize: '14px', color: '#333', marginBottom: '5px' }}>
                {notification.text}
              </p>
              <span style={{ fontSize: '12px', color: '#666' }}>
                {notification.time}
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Settings Modal */}
      {showSettings && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '30px',
            width: '90%',
            maxWidth: '500px'
          }}>
            <h2 style={{ marginBottom: '20px' }}>Settings</h2>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '10px', color: '#333' }}>Profile Settings</h3>
              <button className="btn btn-primary" style={{ marginRight: '10px' }}>
                Edit Profile
              </button>
              <button className="btn" style={{ background: '#f1f5f9', color: '#334155' }}>
                Change Password
              </button>
            </div>
            <div style={{ marginBottom: '20px' }}>
              <h3 style={{ marginBottom: '10px', color: '#333' }}>Notifications</h3>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                <input type="checkbox" defaultChecked />
                Email notifications
              </label>
              <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <input type="checkbox" defaultChecked />
                Push notifications
              </label>
            </div>
            <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button 
                onClick={() => setShowSettings(false)}
                style={{ 
                  padding: '10px 20px', 
                  border: '1px solid #ddd', 
                  borderRadius: '8px', 
                  background: 'white' 
                }}
              >
                Close
              </button>
              <button className="btn btn-primary">
                Save Changes
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Project Modal */}
      {showModal && (
        <div style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.5)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          zIndex: 1000
        }}>
          <div style={{
            background: 'white',
            borderRadius: '20px',
            padding: '30px',
            width: '90%',
            maxWidth: '500px',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}>
            <h2 style={{ marginBottom: '20px' }}>
              {editingProject ? 'Edit Project' : 'Create New Project'}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="3"
                />
              </div>
              <div className="form-group">
                <label>Category</label>
                <select name="category" value={formData.category} onChange={handleChange}>
                  <option value="web">Web Design</option>
                  <option value="mobile">Mobile App</option>
                  <option value="branding">Branding</option>
                  <option value="ui-kit">UI Kit</option>
                </select>
              </div>
              <div className="form-group">
                <label>Status</label>
                <select name="status" value={formData.status} onChange={handleChange}>
                  <option value="draft">Draft</option>
                  <option value="in-progress">In Progress</option>
                  <option value="review">Review</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div className="form-group">
                <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input
                    type="checkbox"
                    name="isPublic"
                    checked={formData.isPublic}
                    onChange={handleChange}
                  />
                  Make Public
                </label>
              </div>
              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button 
                  type="button" 
                  onClick={() => {
                    setShowModal(false);
                    setEditingProject(null);
                    setFormData({ title: '', description: '', category: 'web', status: 'draft', isPublic: false });
                  }}
                  style={{ 
                    padding: '10px 20px', 
                    border: '1px solid #ddd', 
                    borderRadius: '8px', 
                    background: 'white' 
                  }}
                >
                  Cancel
                </button>
                <button type="submit" className="btn btn-primary">
                  {editingProject ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </DashboardContainer>
  );
};

export default Dashboard;