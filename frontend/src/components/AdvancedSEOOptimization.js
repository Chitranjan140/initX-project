import { useEffect } from 'react';

const AdvancedSEOOptimization = () => {
  useEffect(() => {
    // Lazy load images for better Core Web Vitals
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    images.forEach(img => imageObserver.observe(img));

    // Preload critical resources
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = '/api/projects/public';
    preloadLink.as = 'fetch';
    preloadLink.crossOrigin = 'anonymous';
    document.head.appendChild(preloadLink);

    // Add structured data for breadcrumbs
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://initx.online"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Services",
          "item": "https://initx.online/services"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "About",
          "item": "https://initx.online/about"
        }
      ]
    };

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(breadcrumbSchema);
    document.head.appendChild(script);

    // Add FAQ structured data for rich snippets
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What services does INITX provide?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "INITX provides AI development, cloud solutions, web development, mobile apps, and digital transformation services."
          }
        },
        {
          "@type": "Question",
          "name": "How can I contact INITX?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Contact INITX at hello@initx.online or visit our contact page for more information."
          }
        }
      ]
    };

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.textContent = JSON.stringify(faqSchema);
    document.head.appendChild(faqScript);

    // Performance monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
        }
      });
      
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input'] });
    }

    return () => {
      images.forEach(img => imageObserver.unobserve(img));
    };
  }, []);

  return null;
};

export default AdvancedSEOOptimization;