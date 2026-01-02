import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { ChevronRight, Home } from 'lucide-react';

const BreadcrumbContainer = styled.nav`
  padding: 20px 0;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
`;

const BreadcrumbList = styled.ol`
  display: flex;
  align-items: center;
  gap: 8px;
  list-style: none;
  padding: 0;
  margin: 0;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const BreadcrumbItem = styled.li`
  display: flex;
  align-items: center;
  gap: 8px;
  
  &:not(:last-child)::after {
    content: '';
    display: flex;
    align-items: center;
  }
`;

const BreadcrumbLink = styled(Link)`
  color: #64748b;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
  gap: 5px;
  
  &:hover {
    color: #1e293b;
  }
`;

const BreadcrumbCurrent = styled.span`
  color: #1e293b;
  font-size: 14px;
  font-weight: 500;
`;

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  const breadcrumbNameMap = {
    '': 'Home',
    'about': 'About',
    'products': 'Products & Services',
    'company': 'Company Info',
    'news': 'News',
    'careers': 'Careers',
    'contact': 'Contact',
    'dashboard': 'Dashboard',
    'login': 'Login',
    'register': 'Register'
  };

  if (pathnames.length === 0) return null;

  return (
    <BreadcrumbContainer>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink to="/">
            <Home size={16} />
            Home
          </BreadcrumbLink>
          {pathnames.length > 0 && <ChevronRight size={16} color="#94a3b8" />}
        </BreadcrumbItem>
        
        {pathnames.map((pathname, index) => {
          const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const name = breadcrumbNameMap[pathname] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

          return (
            <BreadcrumbItem key={pathname}>
              {isLast ? (
                <BreadcrumbCurrent>{name}</BreadcrumbCurrent>
              ) : (
                <>
                  <BreadcrumbLink to={routeTo}>{name}</BreadcrumbLink>
                  <ChevronRight size={16} color="#94a3b8" />
                </>
              )}
            </BreadcrumbItem>
          );
        })}
      </BreadcrumbList>
    </BreadcrumbContainer>
  );
};

export default Breadcrumb;