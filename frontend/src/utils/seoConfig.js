// SEO Configuration for INITX Technology Solutions
export const seoConfig = {
  // Default SEO settings
  defaultTitle: 'INITX - Leading Technology Solutions & Digital Innovation Platform',
  titleTemplate: '%s | INITX Technology Solutions',
  defaultDescription: 'INITX delivers cutting-edge technology solutions including AI development, cloud infrastructure, web development, mobile apps, and digital transformation services for enterprises and startups.',
  
  // Core tech company keywords
  coreKeywords: [
    'technology solutions', 'AI development', 'artificial intelligence', 'machine learning', 'deep learning', 'neural networks',
    'computer vision', 'natural language processing', 'predictive analytics', 'data science', 'big data analytics',
    'cloud computing', 'cloud infrastructure', 'cloud migration', 'serverless computing', 'edge computing',
    'web development', 'React development', 'Vue.js development', 'Angular development', 'Node.js development',
    'Python development', 'Java development', 'PHP development', '.NET development', 'Ruby on Rails',
    'mobile app development', 'iOS development', 'Android development', 'React Native', 'Flutter development',
    'Xamarin development', 'cross-platform apps', 'native mobile apps', 'progressive web apps',
    'digital transformation', 'enterprise solutions', 'startup technology', 'tech consulting', 'software engineering',
    'custom software development', 'software architecture', 'system design', 'technical consulting',
    'DevOps services', 'CI/CD pipeline', 'continuous integration', 'continuous deployment', 'containerization',
    'Docker', 'Kubernetes', 'microservices architecture', 'serverless architecture', 'infrastructure as code',
    'cybersecurity solutions', 'penetration testing', 'security audit', 'vulnerability assessment', 'compliance consulting',
    'API development', 'REST API', 'GraphQL', 'SOAP services', 'webhook development', 'third-party integrations',
    'database design', 'MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'data modeling',
    'blockchain development', 'cryptocurrency', 'smart contracts', 'DeFi solutions', 'NFT development', 'Web3',
    'IoT solutions', 'Internet of Things', 'embedded systems', 'sensor networks', 'industrial IoT',
    'automation solutions', 'RPA', 'robotic process automation', 'workflow automation', 'business process automation',
    'tech innovation', 'emerging technologies', 'digital solutions', 'technology consulting', 'IT services',
    'managed services', 'cloud consulting', 'digital strategy', 'technology roadmap', 'innovation consulting'
  ],
  
  // Page-specific SEO configurations
  pages: {
    home: {
      title: 'INITX - Leading Technology Solutions & Digital Innovation Platform',
      description: 'Transform your business with INITX\'s cutting-edge technology solutions. We specialize in AI development, cloud infrastructure, web development, and digital transformation services.',
      keywords: 'technology solutions, AI development, cloud computing, digital transformation, web development, mobile apps, enterprise software, startup technology, tech consulting, innovation platform',
      schema: 'WebPage'
    },
    
    services: {
      title: 'Technology Services - AI, Cloud, Web Development | INITX',
      description: 'Comprehensive technology services including AI development, cloud solutions, web development, mobile apps, DevOps, and cybersecurity. Expert tech consulting for enterprises and startups.',
      keywords: 'technology services, AI development services, cloud solutions, web development company, mobile app development, DevOps services, cybersecurity solutions, tech consulting, software engineering',
      schema: 'Service'
    },
    
    aiDevelopment: {
      title: 'AI Development Services - Machine Learning Solutions | INITX',
      description: 'Custom AI and machine learning solutions for businesses. Expert AI development services including natural language processing, computer vision, and predictive analytics.',
      keywords: 'AI development, machine learning, artificial intelligence services, NLP, computer vision, predictive analytics, AI consulting, ML models, deep learning, neural networks',
      schema: 'Service'
    },
    
    cloudSolutions: {
      title: 'Cloud Computing Services - AWS, Azure, GCP Solutions | INITX',
      description: 'Scalable cloud infrastructure solutions on AWS, Azure, and Google Cloud. Cloud migration, DevOps, containerization, and serverless architecture services.',
      keywords: 'cloud computing, AWS services, Azure solutions, Google Cloud Platform, cloud migration, DevOps, containerization, serverless, cloud infrastructure, cloud consulting',
      schema: 'Service'
    },
    
    webDevelopment: {
      title: 'Web Development Services - Modern Web Applications | INITX',
      description: 'Professional web development services using React, Node.js, Python, and modern frameworks. Custom web applications, e-commerce platforms, and progressive web apps.',
      keywords: 'web development, React development, Node.js, Python web development, full-stack development, e-commerce development, progressive web apps, responsive design, web applications',
      schema: 'Service'
    },
    
    mobileDevelopment: {
      title: 'Mobile App Development - iOS & Android Apps | INITX',
      description: 'Native and cross-platform mobile app development for iOS and Android. React Native, Flutter, and native app development services for startups and enterprises.',
      keywords: 'mobile app development, iOS development, Android development, React Native, Flutter, cross-platform apps, native apps, mobile solutions, app development company',
      schema: 'Service'
    },
    
    portfolio: {
      title: 'Technology Portfolio - Our Projects & Case Studies | INITX',
      description: 'Explore INITX\'s technology portfolio featuring successful AI projects, cloud implementations, web applications, and mobile apps for various industries.',
      keywords: 'technology portfolio, AI projects, cloud implementations, web development projects, mobile apps, case studies, tech solutions, project showcase, client success stories',
      schema: 'CollectionPage'
    },
    
    about: {
      title: 'About INITX - Leading Technology Company & Innovation Team',
      description: 'Learn about INITX, a leading technology company specializing in AI, cloud solutions, and digital transformation. Meet our expert team of engineers and consultants.',
      keywords: 'about INITX, technology company, AI experts, cloud specialists, software engineers, tech team, innovation, digital transformation experts, technology consulting',
      schema: 'AboutPage'
    },
    
    contact: {
      title: 'Contact INITX - Get Technology Solutions & Consulting',
      description: 'Contact INITX for technology solutions, AI development, cloud services, and digital transformation consulting. Get a free consultation with our tech experts.',
      keywords: 'contact INITX, technology consulting, AI development consultation, cloud solutions, tech support, digital transformation, free consultation, technology experts',
      schema: 'ContactPage'
    },
    
    blog: {
      title: 'Technology Blog - AI, Cloud, Development Insights | INITX',
      description: 'Stay updated with the latest technology trends, AI developments, cloud computing insights, and software engineering best practices from INITX experts.',
      keywords: 'technology blog, AI trends, cloud computing, software development, tech insights, programming tutorials, technology news, development best practices',
      schema: 'Blog'
    },
    
    careers: {
      title: 'Careers at INITX - Join Our Technology Team',
      description: 'Join INITX\'s innovative technology team. Explore career opportunities in AI development, cloud engineering, software development, and tech consulting.',
      keywords: 'INITX careers, technology jobs, AI developer jobs, cloud engineer positions, software engineer careers, tech consulting jobs, remote tech jobs, startup careers',
      schema: 'JobPosting'
    }
  },
  
  // Industry-specific keywords
  industries: {
    fintech: ['fintech solutions', 'financial technology', 'banking software', 'payment systems', 'blockchain finance'],
    healthcare: ['healthcare technology', 'medical software', 'telemedicine', 'health analytics', 'HIPAA compliance'],
    ecommerce: ['e-commerce platform', 'online marketplace', 'retail technology', 'shopping cart', 'payment gateway'],
    education: ['edtech solutions', 'learning management system', 'educational software', 'online learning platform'],
    logistics: ['logistics software', 'supply chain management', 'inventory management', 'tracking systems'],
    manufacturing: ['manufacturing software', 'industrial IoT', 'automation systems', 'quality management']
  },
  
  // Technology stack keywords
  technologies: {
    frontend: ['React', 'Vue.js', 'Angular', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass'],
    backend: ['Node.js', 'Python', 'Django', 'Flask', 'Express.js', 'Java', 'Spring Boot', 'PHP', 'Laravel'],
    mobile: ['React Native', 'Flutter', 'iOS', 'Android', 'Xamarin', 'Ionic', 'Swift', 'Kotlin'],
    cloud: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Serverless', 'Lambda', 'CloudFormation'],
    database: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Elasticsearch', 'DynamoDB', 'Firebase'],
    ai: ['TensorFlow', 'PyTorch', 'OpenAI', 'Natural Language Processing', 'Computer Vision', 'Deep Learning']
  },
  
  // Social media handles
  social: {
    twitter: '@initxtech',
    linkedin: 'initx-technology-solutions',
    github: 'initxtech',
    youtube: 'c/initxtech',
    facebook: 'initxtech',
    instagram: 'initxtech'
  },
  
  // Company information
  company: {
    name: 'INITX Technology Solutions',
    shortName: 'INITX',
    founded: '2020',
    location: 'San Francisco, CA',
    phone: '+1-555-INITX-TECH',
    email: 'contact@initx.com',
    website: 'https://initx.com'
  },
  
  // OpenGraph defaults
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'INITX Technology Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'INITX Technology Solutions'
      }
    ]
  },
  
  // Twitter Card defaults
  twitter: {
    cardType: 'summary_large_image',
    site: '@initxtech',
    creator: '@initxtech'
  }
};

// Helper function to generate page-specific SEO data
export const generateSEOData = (pageKey, customData = {}) => {
  const pageConfig = seoConfig.pages[pageKey] || seoConfig.pages.home;
  
  return {
    title: customData.title || pageConfig.title,
    description: customData.description || pageConfig.description,
    keywords: customData.keywords || pageConfig.keywords,
    ...customData
  };
};

// Helper function to combine keywords
export const combineKeywords = (...keywordArrays) => {
  return keywordArrays.flat().join(', ');
};

export default seoConfig;