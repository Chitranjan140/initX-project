import { useEffect } from 'react';

const SEOPerformance = () => {
  useEffect(() => {
    // Preload critical resources
    const preloadResources = [
      { href: '/fonts/inter-var.woff2', as: 'font', type: 'font/woff2', crossorigin: true },
      { href: '/css/critical.css', as: 'style' },
      { href: '/images/hero-bg.webp', as: 'image' },
      { href: '/api/projects/public', as: 'fetch', crossorigin: true }
    ];

    preloadResources.forEach(({ href, as, type, crossorigin }) => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const link = document.createElement('link');
        link.rel = 'preload';
        link.href = href;
        link.as = as;
        if (type) link.type = type;
        if (crossorigin) link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

    // DNS prefetch for external domains
    const dnsPrefetchDomains = [
      '//fonts.googleapis.com',
      '//fonts.gstatic.com',
      '//www.google-analytics.com',
      '//www.googletagmanager.com',
      '//api.initx.com',
      '//cdn.initx.com',
      '//images.unsplash.com',
      '//cdnjs.cloudflare.com'
    ];

    dnsPrefetchDomains.forEach(domain => {
      if (!document.querySelector(`link[href="${domain}"]`)) {
        const link = document.createElement('link');
        link.rel = 'dns-prefetch';
        link.href = domain;
        document.head.appendChild(link);
      }
    });

    // Preconnect to critical domains
    const preconnectDomains = [
      { href: 'https://fonts.googleapis.com' },
      { href: 'https://fonts.gstatic.com', crossorigin: true },
      { href: 'https://api.initx.com', crossorigin: true }
    ];

    preconnectDomains.forEach(({ href, crossorigin }) => {
      if (!document.querySelector(`link[href="${href}"][rel="preconnect"]`)) {
        const link = document.createElement('link');
        link.rel = 'preconnect';
        link.href = href;
        if (crossorigin) link.crossOrigin = 'anonymous';
        document.head.appendChild(link);
      }
    });

    // Add resource hints for better performance
    const resourceHints = [
      { rel: 'prefetch', href: '/services' },
      { rel: 'prefetch', href: '/portfolio' },
      { rel: 'prefetch', href: '/contact' },
      { rel: 'prerender', href: '/services/ai-development' }
    ];

    resourceHints.forEach(({ rel, href }) => {
      if (!document.querySelector(`link[href="${href}"][rel="${rel}"]`)) {
        const link = document.createElement('link');
        link.rel = rel;
        link.href = href;
        document.head.appendChild(link);
      }
    });

    // Add performance monitoring
    if ('PerformanceObserver' in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === 'largest-contentful-paint') {
            console.log('LCP:', entry.startTime);
          }
          if (entry.entryType === 'first-input') {
            console.log('FID:', entry.processingStart - entry.startTime);
          }
          if (entry.entryType === 'layout-shift') {
            if (!entry.hadRecentInput) {
              console.log('CLS:', entry.value);
            }
          }
        }
      });

      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] });
    }

  }, []);

  return null;
};

export default SEOPerformance;