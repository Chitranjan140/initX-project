import { useEffect } from 'react';

const SEO = ({ 
  title = 'INITX - Leading Technology Solutions & Digital Innovation Platform', 
  description = 'INITX delivers cutting-edge technology solutions including AI development, cloud infrastructure, web development, mobile apps, and digital transformation services for enterprises and startups.',
  keywords = 'technology solutions, AI development, cloud computing, web development, mobile app development, digital transformation, software engineering, tech consulting, enterprise solutions, startup technology, machine learning, data analytics, cybersecurity, DevOps, API development, microservices, blockchain development, IoT solutions, automation, tech innovation',
  image = '/og-image.jpg',
  url = window.location.href,
  type = 'website',
  siteName = 'INITX Technology Solutions'
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;
    
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

    // Advanced SEO Meta Tags for Higher Rankings
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', 'INITX Technology Solutions');
    updateMetaTag('publisher', 'INITX Technology Solutions');
    updateMetaTag('copyright', '© 2024 INITX Technology Solutions');
    updateMetaTag('language', 'English');
    updateMetaTag('revisit-after', '7 days');
    updateMetaTag('distribution', 'global');
    updateMetaTag('rating', 'general');
    updateMetaTag('robots', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('googlebot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    updateMetaTag('bingbot', 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1');
    
    // Geographic and Business Meta Tags
    updateMetaTag('geo.region', 'US-CA');
    updateMetaTag('geo.placename', 'San Francisco');
    updateMetaTag('geo.position', '37.7749;-122.4194');
    updateMetaTag('ICBM', '37.7749, -122.4194');
    
    // Content Classification
    updateMetaTag('content-language', 'en-US');
    updateMetaTag('audience', 'all');
    updateMetaTag('classification', 'Technology Solutions, Software Development, AI Services');
    updateMetaTag('category', 'Technology');
    updateMetaTag('coverage', 'Worldwide');
    
    // Technical SEO
    updateMetaTag('theme-color', '#8a2be2');
    updateMetaTag('msapplication-TileColor', '#8a2be2');
    updateMetaTag('format-detection', 'telephone=no');
    
    // Enhanced Open Graph Tags
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);
    updateMetaTag('og:image:width', '1200', true);
    updateMetaTag('og:image:height', '630', true);
    updateMetaTag('og:image:alt', 'INITX Technology Solutions - AI, Cloud, Web Development', true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:site_name', siteName, true);
    updateMetaTag('og:locale', 'en_US', true);
    updateMetaTag('og:updated_time', new Date().toISOString(), true);
    
    // Enhanced Twitter Card Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:site', '@initxtech');
    updateMetaTag('twitter:creator', '@initxtech');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);
    updateMetaTag('twitter:image:alt', 'INITX Technology Solutions');
    updateMetaTag('twitter:domain', 'initx.com');
    
    // LinkedIn and Pinterest
    updateMetaTag('linkedin:owner', 'initx-technology-solutions');
    updateMetaTag('pinterest-rich-pin', 'true');
    
    // Mobile optimization
    updateMetaTag('mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-capable', 'yes');
    updateMetaTag('apple-mobile-web-app-status-bar-style', 'black-translucent');
    updateMetaTag('apple-mobile-web-app-title', 'INITX Tech');
    updateMetaTag('application-name', 'INITX Technology Solutions');
    
    // Security and Performance
    updateMetaTag('referrer', 'strict-origin-when-cross-origin');
    
    // Canonical URL
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = url;
    
    // Advanced Structured Data for Tech Company
    const structuredData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          "@id": "https://initx.com/#organization",
          "name": "INITX Technology Solutions",
          "alternateName": "INITX",
          "description": "Leading technology company providing AI development, cloud solutions, web development, and digital transformation services",
          "url": "https://initx.com",
          "logo": {
            "@type": "ImageObject",
            "url": "https://initx.com/logo.png",
            "width": 512,
            "height": 512
          },
          "image": "https://initx.com/og-image.jpg",
          "foundingDate": "2020",
          "founders": [
            {
              "@type": "Person",
              "name": "INITX Founder"
            }
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "telephone": "+1-555-INITX-TECH",
              "contactType": "customer service",
              "availableLanguage": ["English", "Spanish", "French"]
            },
            {
              "@type": "ContactPoint",
              "telephone": "+1-555-INITX-SALES",
              "contactType": "sales",
              "availableLanguage": "English"
            }
          ],
          "address": {
            "@type": "PostalAddress",
            "addressCountry": "US",
            "addressRegion": "CA",
            "addressLocality": "San Francisco"
          },
          "sameAs": [
            "https://facebook.com/initxtech",
            "https://twitter.com/initxtech",
            "https://linkedin.com/company/initx-technology",
            "https://github.com/initxtech",
            "https://youtube.com/c/initxtech",
            "https://instagram.com/initxtech"
          ],
          "knowsAbout": [
            "Artificial Intelligence",
            "Machine Learning",
            "Cloud Computing",
            "Web Development",
            "Mobile App Development",
            "Digital Transformation",
            "Software Engineering",
            "DevOps",
            "Cybersecurity",
            "Data Analytics",
            "Blockchain",
            "IoT Solutions"
          ],
          "areaServed": {
            "@type": "GeoCircle",
            "geoMidpoint": {
              "@type": "GeoCoordinates",
              "latitude": "37.7749",
              "longitude": "-122.4194"
            },
            "geoRadius": "50000"
          }
        },
        {
          "@type": "WebSite",
          "@id": "https://initx.com/#website",
          "url": "https://initx.com",
          "name": "INITX Technology Solutions",
          "description": description,
          "publisher": {
            "@id": "https://initx.com/#organization"
          },
          "potentialAction": [
            {
              "@type": "SearchAction",
              "target": {
                "@type": "EntryPoint",
                "urlTemplate": "https://initx.com/search?q={search_term_string}"
              },
              "query-input": "required name=search_term_string"
            }
          ],
          "inLanguage": "en-US"
        },
        {
          "@type": "Service",
          "name": "Technology Solutions",
          "description": "Comprehensive technology services including AI development, cloud infrastructure, and digital transformation",
          "provider": {
            "@id": "https://initx.com/#organization"
          },
          "serviceType": "Technology Consulting",
          "areaServed": "Worldwide",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Technology Services",
            "itemListElement": [
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "AI Development",
                  "description": "Custom AI and machine learning solutions"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Cloud Solutions",
                  "description": "Scalable cloud infrastructure and migration services"
                }
              },
              {
                "@type": "Offer",
                "itemOffered": {
                  "@type": "Service",
                  "name": "Web Development",
                  "description": "Modern web applications and platforms"
                }
              }
            ]
          }
        }
      ]
    };
    
    // Update structured data
    let scriptElement = document.querySelector('script[type="application/ld+json"]');
    if (!scriptElement) {
      scriptElement = document.createElement('script');
      scriptElement.type = 'application/ld+json';
      document.head.appendChild(scriptElement);
    }
    scriptElement.textContent = JSON.stringify(structuredData);
    
    // Add hreflang for international SEO
    const hreflangs = [
      { lang: 'en', href: url },
      { lang: 'es', href: url.replace('.com', '.com/es') },
      { lang: 'fr', href: url.replace('.com', '.com/fr') },
      { lang: 'x-default', href: url }
    ];
    
    hreflangs.forEach(({ lang, href }) => {
      let hreflangLink = document.querySelector(`link[hreflang="${lang}"]`);
      if (!hreflangLink) {
        hreflangLink = document.createElement('link');
        hreflangLink.rel = 'alternate';
        hreflangLink.hreflang = lang;
        document.head.appendChild(hreflangLink);
      }
      hreflangLink.href = href;
    });
    
  }, [title, description, keywords, image, url, type, siteName]);

  return null;
};

export default SEO;