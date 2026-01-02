import { useEffect } from 'react';

const GoogleSEOIntegration = () => {
  useEffect(() => {
    // Google Analytics 4
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID';
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `;
    document.head.appendChild(script2);

    // Google Search Console verification
    const searchConsole = document.createElement('meta');
    searchConsole.name = 'google-site-verification';
    searchConsole.content = 'YOUR_VERIFICATION_CODE';
    document.head.appendChild(searchConsole);

    // Bing Webmaster verification
    const bingVerification = document.createElement('meta');
    bingVerification.name = 'msvalidate.01';
    bingVerification.content = 'YOUR_BING_CODE';
    document.head.appendChild(bingVerification);

  }, []);

  return null;
};

export default GoogleSEOIntegration;