import { useEffect } from 'react';

const SEOSchema = ({ type, data }) => {
  useEffect(() => {
    const generateSchema = () => {
      const baseSchema = {
        "@context": "https://schema.org",
        "@graph": []
      };

      // Organization Schema
      const organizationSchema = {
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
        "foundingDate": "2020",
        "numberOfEmployees": "50-100",
        "industry": "Technology",
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "telephone": "+1-555-INITX-TECH",
            "contactType": "customer service",
            "availableLanguage": ["English", "Spanish", "French"],
            "areaServed": "Worldwide"
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
          "addressLocality": "San Francisco",
          "postalCode": "94102",
          "streetAddress": "123 Tech Street"
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
          "DevOps",
          "Cybersecurity",
          "Data Analytics",
          "Blockchain"
        ],
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
      };

      // Website Schema
      const websiteSchema = {
        "@type": "WebSite",
        "@id": "https://initx.com/#website",
        "url": "https://initx.com",
        "name": "INITX Technology Solutions",
        "description": "Leading technology solutions platform for AI development, cloud infrastructure, and digital transformation",
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
      };

      // Service Schema
      const serviceSchema = {
        "@type": "Service",
        "name": "Technology Solutions",
        "description": "Comprehensive technology services including AI development, cloud infrastructure, and digital transformation",
        "provider": {
          "@id": "https://initx.com/#organization"
        },
        "serviceType": "Technology Consulting",
        "areaServed": "Worldwide",
        "audience": {
          "@type": "Audience",
          "audienceType": "Business"
        }
      };

      // LocalBusiness Schema
      const localBusinessSchema = {
        "@type": "LocalBusiness",
        "@id": "https://initx.com/#localbusiness",
        "name": "INITX Technology Solutions",
        "image": "https://initx.com/logo.png",
        "telephone": "+1-555-INITX-TECH",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "123 Tech Street",
          "addressLocality": "San Francisco",
          "addressRegion": "CA",
          "postalCode": "94102",
          "addressCountry": "US"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 37.7749,
          "longitude": -122.4194
        },
        "url": "https://initx.com",
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "09:00",
            "closes": "18:00"
          }
        ],
        "priceRange": "$$$$"
      };

      baseSchema["@graph"] = [organizationSchema, websiteSchema, serviceSchema, localBusinessSchema];

      // Add specific schema based on type
      if (type === 'article' && data) {
        const articleSchema = {
          "@type": "Article",
          "headline": data.title,
          "description": data.description,
          "author": {
            "@type": "Organization",
            "name": "INITX Technology Solutions"
          },
          "publisher": {
            "@id": "https://initx.com/#organization"
          },
          "datePublished": data.publishedDate || new Date().toISOString(),
          "dateModified": data.modifiedDate || new Date().toISOString(),
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": window.location.href
          }
        };
        baseSchema["@graph"].push(articleSchema);
      }

      return baseSchema;
    };

    const schema = generateSchema();
    
    // Update or create schema script
    let schemaScript = document.querySelector('script[data-schema="advanced"]');
    if (!schemaScript) {
      schemaScript = document.createElement('script');
      schemaScript.type = 'application/ld+json';
      schemaScript.setAttribute('data-schema', 'advanced');
      document.head.appendChild(schemaScript);
    }
    schemaScript.textContent = JSON.stringify(schema);

  }, [type, data]);

  return null;
};

export default SEOSchema;