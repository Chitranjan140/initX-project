// Sitemap Generator for INITX Technology Solutions
import { seoConfig } from './seoConfig.js';

export const generateSitemap = () => {
  const baseUrl = 'https://initx.com';
  const currentDate = new Date().toISOString().split('T')[0];
  
  const staticPages = [
    {
      url: '/',
      changefreq: 'daily',
      priority: '1.0',
      lastmod: currentDate
    },
    {
      url: '/services',
      changefreq: 'weekly',
      priority: '0.9',
      lastmod: currentDate
    },
    {
      url: '/services/ai-development',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/services/cloud-solutions',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/services/web-development',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/services/mobile-development',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/portfolio',
      changefreq: 'weekly',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/about',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate
    },
    {
      url: '/contact',
      changefreq: 'monthly',
      priority: '0.7',
      lastmod: currentDate
    },
    {
      url: '/blog',
      changefreq: 'daily',
      priority: '0.8',
      lastmod: currentDate
    },
    {
      url: '/careers',
      changefreq: 'weekly',
      priority: '0.6',
      lastmod: currentDate
    }
  ];\n\n  const generateUrlEntry = (page) => {\n    return `  <url>\n    <loc>${baseUrl}${page.url}</loc>\n    <lastmod>${page.lastmod}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`;\n  };\n\n  const sitemapContent = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"\n        xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n        xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9\n        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\">\n${staticPages.map(generateUrlEntry).join('\\n')}\n</urlset>`;\n\n  return sitemapContent;\n};\n\n// Generate sitemap index for multiple sitemaps\nexport const generateSitemapIndex = () => {\n  const baseUrl = 'https://initx.com';\n  const currentDate = new Date().toISOString().split('T')[0];\n  \n  const sitemaps = [\n    {\n      url: '/sitemap-main.xml',\n      lastmod: currentDate\n    },\n    {\n      url: '/sitemap-blog.xml',\n      lastmod: currentDate\n    },\n    {\n      url: '/sitemap-portfolio.xml',\n      lastmod: currentDate\n    }\n  ];\n\n  const sitemapIndexContent = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<sitemapindex xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n${sitemaps.map(sitemap => \n  `  <sitemap>\n    <loc>${baseUrl}${sitemap.url}</loc>\n    <lastmod>${sitemap.lastmod}</lastmod>\n  </sitemap>`\n).join('\\n')}\n</sitemapindex>`;\n\n  return sitemapIndexContent;\n};\n\n// Generate blog sitemap (dynamic content)\nexport const generateBlogSitemap = (blogPosts = []) => {\n  const baseUrl = 'https://initx.com';\n  \n  const blogUrls = blogPosts.map(post => ({\n    url: `/blog/${post.slug}`,\n    changefreq: 'monthly',\n    priority: '0.6',\n    lastmod: post.updatedAt || post.createdAt\n  }));\n\n  const generateUrlEntry = (page) => {\n    return `  <url>\n    <loc>${baseUrl}${page.url}</loc>\n    <lastmod>${page.lastmod}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`;\n  };\n\n  const sitemapContent = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n${blogUrls.map(generateUrlEntry).join('\\n')}\n</urlset>`;\n\n  return sitemapContent;\n};\n\n// Generate portfolio sitemap (dynamic content)\nexport const generatePortfolioSitemap = (projects = []) => {\n  const baseUrl = 'https://initx.com';\n  \n  const projectUrls = projects.map(project => ({\n    url: `/portfolio/${project.slug}`,\n    changefreq: 'monthly',\n    priority: '0.7',\n    lastmod: project.updatedAt || project.createdAt\n  }));\n\n  const generateUrlEntry = (page) => {\n    return `  <url>\n    <loc>${baseUrl}${page.url}</loc>\n    <lastmod>${page.lastmod}</lastmod>\n    <changefreq>${page.changefreq}</changefreq>\n    <priority>${page.priority}</priority>\n  </url>`;\n  };\n\n  const sitemapContent = `<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\">\n${projectUrls.map(generateUrlEntry).join('\\n')}\n</urlset>`;\n\n  return sitemapContent;\n};\n\nexport default {\n  generateSitemap,\n  generateSitemapIndex,\n  generateBlogSitemap,\n  generatePortfolioSitemap\n};