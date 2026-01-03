import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%);
    background-attachment: fixed;
    min-height: 100vh;
    color: #ffffff;
    scroll-behavior: smooth;
    overflow-x: hidden;
    position: relative;
  }
  
  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: 
      radial-gradient(circle at 20% 80%, rgba(0, 212, 255, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(59, 130, 246, 0.06) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(99, 102, 241, 0.04) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
  }

  ::-webkit-scrollbar {
    display: none;
  }

  html {
    scrollbar-width: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .card {
    background: rgba(15, 23, 42, 0.8);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 20px rgba(0, 212, 255, 0.1);
    border: 1px solid rgba(0, 212, 255, 0.2);
    color: #ffffff;
  }

  .btn {
    padding: 12px 24px;
    border: none;
    border-radius: 12px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
    text-align: center;
    font-family: inherit;
  }

  .btn-primary {
    background: linear-gradient(135deg, #0ea5e9 0%, #00d4ff 50%, #3b82f6 100%);
    color: white;
    box-shadow: 0 0 20px rgba(0, 212, 255, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 212, 255, 0.4), 0 0 30px rgba(14, 165, 233, 0.3);
  }

  .form-group {
    margin-bottom: 20px;
  }

  .form-group label {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #ffffff;
  }

  .form-group input,
  .form-group textarea,
  .form-group select {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid rgba(0, 212, 255, 0.3);
    border-radius: 12px;
    font-size: 16px;
    background: rgba(15, 23, 42, 0.5);
    color: #ffffff;
    transition: border-color 0.3s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    outline: none;
    border-color: #00d4ff;
    box-shadow: 0 0 0 3px rgba(0, 212, 255, 0.2);
  }

  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  button:focus,
  a:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid #00d4ff;
    outline-offset: 2px;
  }
`;

export default GlobalStyles;