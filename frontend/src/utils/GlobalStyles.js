import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
    background: linear-gradient(135deg, #0a0a0a 0%, #1a0033 25%, #2d1b69 50%, #001133 75%, #000000 100%);
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
      radial-gradient(circle at 20% 80%, rgba(0, 255, 255, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 0, 128, 0.12) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(138, 43, 226, 0.08) 0%, transparent 50%);
    pointer-events: none;
    z-index: -1;
    animation: backgroundPulse 8s ease-in-out infinite alternate;
  }
  
  @keyframes backgroundPulse {
    0% { opacity: 0.7; }
    100% { opacity: 1; }
  }

  /* Hide scrollbar for webkit browsers */
  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for Firefox */
  html {
    scrollbar-width: none;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
  }

  .card {
    background: rgba(0, 0, 0, 0.7);
    backdrop-filter: blur(15px);
    border-radius: 20px;
    padding: 30px;
    box-shadow: 0 20px 40px rgba(0, 255, 255, 0.2), 0 0 20px rgba(138, 43, 226, 0.1);
    border: 1px solid rgba(0, 255, 255, 0.3);
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
    background: linear-gradient(135deg, #ff0080 0%, #00ffff 50%, #8a2be2 100%);
    color: white;
    box-shadow: 0 0 20px rgba(0, 255, 255, 0.3);
  }

  .btn-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 30px rgba(0, 255, 255, 0.4), 0 0 30px rgba(255, 0, 128, 0.3);
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
    border: 2px solid rgba(0, 255, 255, 0.3);
    border-radius: 12px;
    font-size: 16px;
    background: rgba(0, 0, 0, 0.5);
    color: #ffffff;
    transition: border-color 0.3s ease;
  }

  .form-group input:focus,
  .form-group textarea:focus,
  .form-group select:focus {
    outline: none;
    border-color: #00ffff;
    box-shadow: 0 0 0 3px rgba(0, 255, 255, 0.2);
  }

  /* Accessibility improvements */
  @media (prefers-reduced-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
    }
  }

  /* Focus styles for accessibility */
  button:focus,
  a:focus,
  input:focus,
  textarea:focus,
  select:focus {
    outline: 2px solid #00ffff;
    outline-offset: 2px;
  }
`;

export default GlobalStyles;