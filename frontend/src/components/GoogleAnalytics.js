import { useEffect } from 'react';

const GoogleAnalytics = ({ measurementId = 'G-XXXXXXXXXX' }) => {
  useEffect(() => {
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${measurementId}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);

    // Track page views
    const trackPageView = () => {
      if (window.gtag) {
        window.gtag('config', measurementId, {
          page_title: document.title,
          page_location: window.location.href
        });
      }
    };

    // Track initial page view
    trackPageView();

    // Clean up
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, [measurementId]);

  return null;
};

export default GoogleAnalytics;