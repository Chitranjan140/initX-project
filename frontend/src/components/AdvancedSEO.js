import { useEffect } from 'react';

const AdvancedSEO = ({ 
  title,
  description,
  keywords,
  url = window.location.href,
  image = '/og-image.jpg',
  type = 'website'
}) => {
  useEffect(() => {
    // Advanced meta tags for higher SEO ranking
    const metaTags = [
      { name: 'title', content: title },
      { name: 'description', content: description },
      { name: 'keywords', content: keywords },
      { name: 'author', content: 'INITX Technology Solutions' },
      { name: 'publisher', content: 'INITX Technology Solutions' },
      { name: 'copyright', content: '© 2024 INITX Technology Solutions' },
      { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'googlebot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'bingbot', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
      { name: 'language', content: 'English' },
      { name: 'revisit-after', content: '3 days' },
      { name: 'distribution', content: 'global' },
      { name: 'rating', content: 'general' },
      { name: 'geo.region', content: 'US-CA' },
      { name: 'geo.placename', content: 'San Francisco' },
      { name: 'geo.position', content: '37.7749;-122.4194' },
      { name: 'ICBM', content: '37.7749, -122.4194' },
      { name: 'content-language', content: 'en-US' },
      { name: 'audience', content: 'all' },
      { name: 'classification', content: 'Technology Solutions, Software Development, AI Services' },
      { name: 'category', content: 'Technology' },
      { name: 'coverage', content: 'Worldwide' },
      { name: 'target', content: 'all' },
      { name: 'theme-color', content: '#8a2be2' },
      { name: 'msapplication-TileColor', content: '#8a2be2' },
      { name: 'format-detection', content: 'telephone=no' },
      { name: 'referrer', content: 'strict-origin-when-cross-origin' }
    ];

    const ogTags = [
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },
      { property: 'og:image:width', content: '1200' },
      { property: 'og:image:height', content: '630' },
      { property: 'og:image:alt', content: 'INITX Technology Solutions' },
      { property: 'og:url', content: url },
      { property: 'og:type', content: type },
      { property: 'og:site_name', content: 'INITX Technology Solutions' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:updated_time', content: new Date().toISOString() }
    ];

    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@initxtech' },
      { name: 'twitter:creator', content: '@initxtech' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
      { name: 'twitter:domain', content: 'initx.com' }
    ];

    // Update document title
    document.title = title;

    // Update meta tags
    [...metaTags, ...twitterTags].forEach(({ name, content }) => {
      let element = document.querySelector(`meta[name="${name}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('name', name);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    });

    // Update Open Graph tags
    ogTags.forEach(({ property, content }) => {
      let element = document.querySelector(`meta[property="${property}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute('property', property);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    });

    // Update canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = url;

  }, [title, description, keywords, url, image, type]);

  return null;
};

export default AdvancedSEO;