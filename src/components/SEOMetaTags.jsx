import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SEOMetaTags = ({ 
  title, 
  description, 
  keywords, 
  image = '/og-image.png',
  url,
  type = 'website',
  article = null,
  person = null,
  breadcrumbs = null,
  faq = null,
  publishedTime = null,
  modifiedTime = null,
  author = 'Harshpreet Singh',
  section = null,
  locale = 'en_US',
  alternateLocales = [],
  videos = [],
  audio = null,
  isArticle = false,
  tags = [],
  category = null,
  readingTime = null,
  wordCount = null
}) => {
  const location = useLocation();
  const baseUrl = 'https://harshpreetsingh.vercel.app';
  const currentUrl = url || `${baseUrl}${location.pathname}`;

  // Helper function to create or update meta tag
  const updateMetaTag = (selector, attribute, value) => {
    if (!value) return;
    
    let element = document.querySelector(selector);
    if (!element) {
      element = document.createElement('meta');
      if (selector.includes('property')) {
        element.setAttribute('property', selector.match(/\[(.*?)\]/)[1].replace(/['"]/g, ''));
      } else {
        element.setAttribute('name', selector.match(/\[(.*?)\]/)[1].replace(/['"]/g, ''));
      }
      document.head.appendChild(element);
    }
    element.setAttribute('content', value);
  };

  // Helper function to create or update link tag
  const updateLinkTag = (rel, href, attributes = {}) => {
    let element = document.querySelector(`link[rel="${rel}"]`);
    if (!element) {
      element = document.createElement('link');
      element.setAttribute('rel', rel);
      document.head.appendChild(element);
    }
    element.setAttribute('href', href);
    
    Object.entries(attributes).forEach(([key, value]) => {
      element.setAttribute(key, value);
    });
  };

  // Helper function to add structured data
  const addStructuredData = (data) => {
    const existingScript = document.querySelector(`script[type="application/ld+json"][data-identifier="${data['@type']}"]`);
    if (existingScript) {
      existingScript.remove();
    }
    
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-identifier', data['@type']);
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  };

  useEffect(() => {
    // Update title with proper formatting
    if (title) {
      document.title = title;
    }

    // Core Meta Tags
    updateMetaTag('meta[name="description"]', 'content', description);
    updateMetaTag('meta[name="keywords"]', 'content', keywords);
    updateMetaTag('meta[name="author"]', 'content', author);
    updateMetaTag('meta[name="robots"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('meta[name="googlebot"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    updateMetaTag('meta[name="bingbot"]', 'content', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    
    // Enhanced OpenGraph tags
    updateMetaTag('meta[property="og:title"]', 'content', title);
    updateMetaTag('meta[property="og:description"]', 'content', description);
    updateMetaTag('meta[property="og:url"]', 'content', currentUrl);
    updateMetaTag('meta[property="og:type"]', 'content', type);
    updateMetaTag('meta[property="og:image"]', 'content', `${baseUrl}${image}`);
    updateMetaTag('meta[property="og:image:width"]', 'content', '1200');
    updateMetaTag('meta[property="og:image:height"]', 'content', '630');
    updateMetaTag('meta[property="og:image:alt"]', 'content', `${title} - ${description}`);
    updateMetaTag('meta[property="og:site_name"]', 'content', 'Harshpreet Singh Portfolio');
    updateMetaTag('meta[property="og:locale"]', 'content', locale);
    
    // Alternate locales
    alternateLocales.forEach(locale => {
      updateMetaTag(`meta[property="og:locale:alternate"]`, 'content', locale);
    });

    // Article specific OG tags
    if (isArticle && article) {
      updateMetaTag('meta[property="article:author"]', 'content', author);
      updateMetaTag('meta[property="article:published_time"]', 'content', publishedTime);
      updateMetaTag('meta[property="article:modified_time"]', 'content', modifiedTime);
      updateMetaTag('meta[property="article:section"]', 'content', section);
      
      tags.forEach(tag => {
        const tagMeta = document.createElement('meta');
        tagMeta.setAttribute('property', 'article:tag');
        tagMeta.setAttribute('content', tag);
        document.head.appendChild(tagMeta);
      });
    }

    // Enhanced Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', 'content', title);
    updateMetaTag('meta[name="twitter:description"]', 'content', description);
    updateMetaTag('meta[name="twitter:url"]', 'content', currentUrl);
    updateMetaTag('meta[name="twitter:image"]', 'content', `${baseUrl}${image}`);
    updateMetaTag('meta[name="twitter:image:alt"]', 'content', `${title} - Portfolio`);
    updateMetaTag('meta[name="twitter:creator"]', 'content', '@harshpreet931');
    updateMetaTag('meta[name="twitter:site"]', 'content', '@harshpreet931');

    // LinkedIn specific tags
    updateMetaTag('meta[property="linkedin:owner"]', 'content', 'harshpreet-singh');

    // Additional SEO meta tags
    updateMetaTag('meta[name="theme-color"]', 'content', '#1e1b4b');
    updateMetaTag('meta[name="msapplication-TileColor"]', 'content', '#1e1b4b');
    updateMetaTag('meta[name="apple-mobile-web-app-capable"]', 'content', 'yes');
    updateMetaTag('meta[name="apple-mobile-web-app-status-bar-style"]', 'content', 'black-translucent');
    updateMetaTag('meta[name="format-detection"]', 'content', 'telephone=no');
    updateMetaTag('meta[name="mobile-web-app-capable"]', 'content', 'yes');
    
    // Performance and loading hints
    updateMetaTag('meta[http-equiv="x-dns-prefetch-control"]', 'content', 'on');
    updateMetaTag('meta[name="referrer"]', 'content', 'origin-when-cross-origin');

    // Content-specific meta tags
    if (readingTime) {
      updateMetaTag('meta[name="reading-time"]', 'content', readingTime);
    }
    if (wordCount) {
      updateMetaTag('meta[name="word-count"]', 'content', wordCount);
    }
    if (category) {
      updateMetaTag('meta[name="category"]', 'content', category);
    }

    // Canonical URL
    updateLinkTag('canonical', currentUrl);
    
    // Preconnect and DNS prefetch for performance
    updateLinkTag('preconnect', 'https://fonts.googleapis.com');
    updateLinkTag('preconnect', 'https://fonts.gstatic.com', { crossorigin: '' });
    updateLinkTag('dns-prefetch', '//fonts.googleapis.com');
    updateLinkTag('dns-prefetch', '//cdnjs.cloudflare.com');

    // Enhanced Structured Data - WebPage Schema
    const webPageSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${currentUrl}#webpage`,
      "url": currentUrl,
      "name": title,
      "description": description,
      "isPartOf": {
        "@type": "WebSite",
        "@id": `${baseUrl}#website`,
        "name": "Harshpreet Singh Portfolio",
        "url": baseUrl,
        "publisher": {
          "@type": "Person",
          "@id": `${baseUrl}#person`
        }
      },
      "about": {
        "@type": "Person",
        "@id": `${baseUrl}#person`
      },
      "mainEntity": {
        "@type": "Person",
        "@id": `${baseUrl}#person`
      },
      "breadcrumb": {
        "@type": "BreadcrumbList",
        "@id": `${currentUrl}#breadcrumbs`,
        "itemListElement": breadcrumbs || [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": baseUrl
          }
        ]
      },
      "potentialAction": [
        {
          "@type": "ReadAction",
          "target": [currentUrl]
        }
      ],
      "speakable": {
        "@type": "SpeakableSpecification",
        "cssSelector": ["h1", "h2", ".main-content"]
      }
    };

    if (publishedTime) {
      webPageSchema.datePublished = publishedTime;
    }
    if (modifiedTime) {
      webPageSchema.dateModified = modifiedTime;
    }

    addStructuredData(webPageSchema);

    // Enhanced Person Schema
    const personSchema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${baseUrl}#person`,
      "name": "Harshpreet Singh",
      "url": baseUrl,
      "image": {
        "@type": "ImageObject",
        "url": `${baseUrl}/harsh.jpg`,
        "width": 400,
        "height": 400
      },
      "jobTitle": "Full Stack Developer",
      "description": "Passionate Full Stack Developer specializing in React, Node.js, Python, and AI/ML. Computer Science student at Chitkara University with expertise in web development and machine learning.",
      "knowsAbout": [
        "React.js", "Node.js", "Python", "JavaScript", "Machine Learning", 
        "Artificial Intelligence", "Web Development", "Full Stack Development",
        "MongoDB", "Express.js", "Tailwind CSS", "Git", "LeetCode", "Problem Solving"
      ],
      "alumniOf": {
        "@type": "EducationalOrganization",
        "name": "Chitkara University Institute of Engineering & Technology",
        "sameAs": "https://www.chitkara.edu.in/"
      },
      "worksFor": {
        "@type": "Organization",
        "name": "Freelance Developer"
      },
      "sameAs": [
        "https://github.com/harshpreet931",
        "https://linkedin.com/in/harshpreet-singh",
        "https://twitter.com/harshpreet931",
        "https://leetcode.com/harshpreet931"
      ],
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": currentUrl
      },
      "award": [
        "Star Programmer",
        "Dean's List Member",
        "1800+ LeetCode Rating"
      ],
      "hasCredential": [
        {
          "@type": "EducationalOccupationalCredential",
          "name": "Bachelor of Engineering in Computer Science",
          "credentialCategory": "degree",
          "educationalLevel": "undergraduate"
        }
      ]
    };

    addStructuredData(personSchema);

    // FAQ Schema if provided
    if (faq && faq.length > 0) {
      const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faq.map(item => ({
          "@type": "Question",
          "name": item.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.answer
          }
        }))
      };
      addStructuredData(faqSchema);
    }

    // Video Object Schema if videos provided
    if (videos && videos.length > 0) {
      videos.forEach((video, index) => {
        const videoSchema = {
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": video.title,
          "description": video.description,
          "contentUrl": video.url,
          "thumbnailUrl": video.thumbnail,
          "uploadDate": video.uploadDate,
          "duration": video.duration,
          "author": {
            "@type": "Person",
            "name": author
          }
        };
        addStructuredData(videoSchema);
      });
    }

    // Organization Schema for Portfolio
    const organizationSchema = {
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${baseUrl}#organization`,
      "name": "Harshpreet Singh Portfolio",
      "url": baseUrl,
      "logo": {
        "@type": "ImageObject",
        "url": `${baseUrl}/logo.svg`,
        "width": 60,
        "height": 60
      },
      "sameAs": [
        "https://github.com/harshpreet931",
        "https://linkedin.com/in/harshpreet-singh",
        "https://twitter.com/harshpreet931"
      ],
      "founder": {
        "@type": "Person",
        "@id": `${baseUrl}#person`
      }
    };

    addStructuredData(organizationSchema);

  }, [title, description, keywords, image, currentUrl, type, article, person, breadcrumbs, faq, publishedTime, modifiedTime, author, section, locale, alternateLocales, videos, audio, isArticle, tags, category, readingTime, wordCount]);

  return null;
};

export default SEOMetaTags;
