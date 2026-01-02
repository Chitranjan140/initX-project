import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './hooks/useAuth';
import StickyNavbar from './components/StickyNavbar';
import Footer from './components/Footer';
import WhatsApp from './components/WhatsApp';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import About from './pages/company/About';
import Products from './pages/Products';
import News from './pages/News';
import Contact from './pages/company/Contact';
import Careers from './pages/company/Careers';
import LogoShowcase from './pages/LogoShowcase';
import GlobalStyles from './utils/GlobalStyles';
import styled from 'styled-components';

const TricolorLine = styled.div`
  position: fixed;
  top: 60px;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(90deg, 
    #ff9933 0%, 
    #ff9933 33.33%, 
    #ffffff 33.33%, 
    #ffffff 66.66%, 
    #138808 66.66%, 
    #138808 100%
  );
  background-size: 300% 100%;
  animation: tricolorFlow 4s linear infinite;
  z-index: 999;
  box-shadow: 
    0 0 15px rgba(255, 153, 51, 0.8),
    0 0 15px rgba(255, 255, 255, 0.6),
    0 0 15px rgba(19, 136, 8, 0.8),
    0 2px 10px rgba(0, 0, 0, 0.3);
  
  @keyframes tricolorFlow {
    0% { background-position: 0% 0%; }
    100% { background-position: 300% 0%; }
  }
`;

function App() {
  return (
    <AuthProvider>
      <Router>
        <GlobalStyles />
        <StickyNavbar />
        <TricolorLine />
        <div style={{ paddingTop: '70px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/news" element={<News />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logo" element={<LogoShowcase />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </div>
        <Footer />
        <WhatsApp />
      </Router>
    </AuthProvider>
  );
}

export default App;