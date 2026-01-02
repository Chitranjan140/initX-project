import { useEffect } from 'react';
import { seoConfig, generateSEOData } from '../utils/seoConfig';

// Custom hook for SEO optimization
export const useSEO = (pageKey, customSEOData = {}) => {
  const seoData = generateSEOData(pageKey, customSEOData);
  
  useEffect(() => {
    // Update document title
    document.title = seoData.title;
    
    // Helper function to update meta tags
    const updateMetaTag = (name, content, property = false) => {
      const selector = property ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let element = document.querySelector(selector);
      
      if (!element) {
        element = document.createElement('meta');
        if (property) {
          element.setAttribute('property', name);
        } else {
          element.setAttribute('name', name);
        }
        document.head.appendChild(element);
      }
      
      element.setAttribute('content', content);
    };

    // Update basic SEO meta tags
    updateMetaTag('description', seoData.description);
    updateMetaTag('keywords', seoData.keywords);
    updateMetaTag('author', seoConfig.company.name);
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Update Open Graph tags
    updateMetaTag('og:title', seoData.title, true);
    updateMetaTag('og:description', seoData.description, true);
    updateMetaTag('og:type', seoData.schema || 'website', true);
    updateMetaTag('og:site_name', seoConfig.company.name, true);
    updateMetaTag('og:url', window.location.href, true);
    
    // Update Twitter Card tags
    updateMetaTag('twitter:title', seoData.title);
    updateMetaTag('twitter:description', seoData.description);
    updateMetaTag('twitter:site', seoConfig.social.twitter);
    
    // Update canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = window.location.href;
    
  }, [seoData]);
  
  return seoData;
};

// Hook for structured data
export const useStructuredData = (schemaType, data) => {
  useEffect(() => {
    const generateStructuredData = () => {
      switch (schemaType) {
        case 'Service':
          return {
            "@context": "https://schema.org",
            "@type": "Service",
            "name": data.name,
            "description": data.description,
            "provider": {
              "@type": "Organization",
              "name": seoConfig.company.name,
              "url": seoConfig.company.website
            },
            "serviceType": data.serviceType || "Technology Service",
            "areaServed": "Worldwide",
            "url": window.location.href
          };
          
        case 'Article':
          return {
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": data.title,
            "description": data.description,
            "author": {
              "@type": "Organization",
              "name": seoConfig.company.name
            },
            "publisher": {
              "@type": "Organization",
              "name": seoConfig.company.name,
              "logo": {
                "@type": "ImageObject",
                "url": `${seoConfig.company.website}/logo.png`
              }
            },
            "datePublished": data.publishedDate,
            "dateModified": data.modifiedDate || data.publishedDate,
            "url": window.location.href
          };
          
        case 'Product':
          return {
            "@context": "https://schema.org",
            "@type": "Product",
            "name": data.name,
            "description": data.description,
            "brand": {
              "@type": "Brand",
              "name": seoConfig.company.name
            },
            "manufacturer": {
              "@type": "Organization",
              "name": seoConfig.company.name
            },
            "url": window.location.href
          };
          
        default:
          return {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": data.title,
            "description": data.description,
            "url": window.location.href,
            "isPartOf": {
              "@type": "WebSite",
              "name": seoConfig.company.name,
              "url": seoConfig.company.website
            }
          };
      }
    };
    
    const structuredData = generateStructuredData();
    
    // Update structured data script
    let scriptElement = document.querySelector(`script[data-schema="${schemaType}"]`);
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.type = 'application/ld+json';
      scriptElement.setAttribute('data-schema', schemaType);
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(structuredData);
    
  }, [schemaType, data]);
};

// Hook for breadcrumb structured data
export const useBreadcrumbs = (breadcrumbs) => {
  useEffect(() => {
    const breadcrumbStructuredData = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": crumb.name,
        "item": crumb.url
      }))
    };
    
    let scriptElement = document.querySelector('script[data-schema="breadcrumb"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.type = 'application/ld+json';
      scriptElement.setAttribute('data-schema', 'breadcrumb');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(breadcrumbStructuredData);
    
  }, [breadcrumbs]);
};

// Hook for FAQ structured data
export const useFAQStructuredData = (faqs) => {
  useEffect(() => {
    if (!faqs || faqs.length === 0) return;
    
    const faqStructuredData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    
    let scriptElement = document.querySelector('script[data-schema="faq"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.type = 'application/ld+json';
      scriptElement.setAttribute('data-schema', 'faq');
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(faqStructuredData);
    
  }, [faqs]);
};

export default {
  useSEO,
  useStructuredData,
  useBreadcrumbs,
  useFAQStructuredData
};