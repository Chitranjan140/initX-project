import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useAuth } from '../hooks/useAuth';
import { validateForm } from '../utils/validation';
import { LogIn } from 'lucide-react';
import TwoFactorAuth from '../components/TwoFactorAuth';

const LoginContainer = styled.div`
  min-height: calc(100vh - 160px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
`;

const LoginCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const ErrorMessage = styled.div`
  background: #fee;
  color: #c33;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  text-align: center;
`;

const Login = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setErrors({});
    
    const validation = validateForm(formData, {
      email: { required: true, email: true },
      password: { required: true, minLength: 6 }
    });
    
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }
    
    setLoading(true);

    try {
      // Direct 2FA trigger without delay
      setShowTwoFactor(true);
    } catch (error) {
      setError(error.response?.data?.message || 'Login failed');
    }
    setLoading(false);
  };

  const handleTwoFactorVerify = async (code) => {
    try {
      // Complete login with 2FA code
      await login(formData.email, formData.password, code);
      navigate('/dashboard');
    } catch (error) {
      setError('Two-factor authentication failed');
      setShowTwoFactor(false);
    }
  };

  const handleTwoFactorCancel = () => {
    setShowTwoFactor(false);
    setError('');
  };

  return (
    <LoginContainer>
      {showTwoFactor ? (
        <TwoFactorAuth 
          email={formData.email}
          onVerify={handleTwoFactorVerify}
          onCancel={handleTwoFactorCancel}
        />
      ) : (
        <LoginCard
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Title>
            <LogIn size={24} />
            Login
          </Title>

          {error && <ErrorMessage>{error}</ErrorMessage>}

          <Form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn btn-primary"
              disabled={loading}
              style={{ marginBottom: '20px' }}
            >
              {loading ? 'Logging in...' : 'Login'}
            </button>
          </Form>

          <p style={{ textAlign: 'center', color: '#666', marginTop: '20px' }}>
            Don't have an account? <Link to="/register" style={{ color: '#667eea', textDecoration: 'none', fontWeight: '600' }}>Register here</Link>
          </p>
        </LoginCard>
      )}
    </LoginContainer>
  );
};

export default Login;