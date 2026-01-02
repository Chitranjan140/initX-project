import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Shield, RefreshCw } from 'lucide-react';

const TwoFactorContainer = styled(motion.div)`
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 40px;
  width: 100%;
  max-width: 400px;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  color: #333;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Description = styled.p`
  color: #666;
  margin-bottom: 30px;
  font-size: 14px;
`;

const CodeInputContainer = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-bottom: 30px;
`;

const CodeInput = styled.input`
  width: 50px;
  height: 50px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  border: 2px solid #e1e5e9;
  border-radius: 8px;
  outline: none;
  
  &:focus {
    border-color: #667eea;
  }
  
  &.filled {
    border-color: #10b981;
    background: #f0fdf4;
  }
`;

const ResendButton = styled.button`
  background: none;
  border: none;
  color: #667eea;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
  margin: 0 auto 20px;
  font-size: 14px;
  
  &:hover {
    text-decoration: underline;
  }
  
  &:disabled {
    color: #999;
    cursor: not-allowed;
  }
`;

const ErrorMessage = styled.div`
  background: #fee;
  color: #c33;
  padding: 10px;
  border-radius: 8px;
  margin-bottom: 20px;
  font-size: 14px;
`;

const TwoFactorAuth = ({ email, onVerify, onCancel }) => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const [canResend, setCanResend] = useState(false);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleCodeChange = (index, value) => {
    if (value.length > 1) return;
    
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
    
    // Auto-focus next input
    if (value && index < 5) {
      const nextInput = document.getElementById(`code-${index + 1}`);
      if (nextInput) nextInput.focus();
    }
    
    // Auto-submit when all fields filled
    if (newCode.every(digit => digit !== '') && newCode.join('').length === 6) {
      handleVerify(newCode.join(''));
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      const prevInput = document.getElementById(`code-${index - 1}`);
      if (prevInput) prevInput.focus();
    }
  };

  const handleVerify = async (verificationCode = code.join('')) => {
    if (verificationCode.length !== 6) {
      setError('Please enter the complete 6-digit code');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Direct verification without delay
      onVerify(verificationCode);
    } catch (error) {
      setError('Invalid verification code. Please try again.');
      setCode(['', '', '', '', '', '']);
      document.getElementById('code-0')?.focus();
    }
    
    setLoading(false);
  };

  const handleResend = async () => {
    setCanResend(false);
    setResendTimer(30);
    setError('');
    
    try {
      // Direct resend without delay
      alert('Verification code sent to your email!');
    } catch (error) {
      setError('Failed to resend code. Please try again.');
    }
  };

  return (
    <TwoFactorContainer
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <Title>
        <Shield size={24} />
        Two-Factor Authentication
      </Title>
      
      <Description>
        We've sent a 6-digit verification code to<br />
        <strong>{email}</strong>
      </Description>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <CodeInputContainer>
        {code.map((digit, index) => (
          <CodeInput
            key={index}
            id={`code-${index}`}
            type="text"
            maxLength="1"
            value={digit}
            onChange={(e) => handleCodeChange(index, e.target.value)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className={digit ? 'filled' : ''}
            disabled={loading}
          />
        ))}
      </CodeInputContainer>

      <ResendButton 
        onClick={handleResend} 
        disabled={!canResend || loading}
      >
        <RefreshCw size={14} />
        {canResend ? 'Resend Code' : `Resend in ${resendTimer}s`}
      </ResendButton>

      <button 
        className="btn btn-primary"
        onClick={() => handleVerify()}
        disabled={loading || code.join('').length !== 6}
        style={{ width: '100%', marginBottom: '15px' }}
      >
        {loading ? 'Verifying...' : 'Verify'}
      </button>

      <button 
        onClick={onCancel}
        style={{ 
          background: 'none', 
          border: 'none', 
          color: '#666', 
          cursor: 'pointer',
          fontSize: '14px'
        }}
      >
        Back to Login
      </button>
    </TwoFactorContainer>
  );
};

export default TwoFactorAuth;