export interface SEOData {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  structuredData?: object;
}

export const defaultSEO: SEOData = {
  title: 'Azzamo BoltCard Hub - Lightning Network Payments',
  description: 'Connect your BoltCard in seconds with Azzamo\'s secure Lightning Network infrastructure. Fast, secure, and reliable Bitcoin payments.',
  keywords: 'BoltCard, Lightning Network, Bitcoin, NFC payments, cryptocurrency, contactless payments, Lightning wallet, Bitcoin payments',
  ogType: 'website',
  twitterCard: 'summary_large_image',
};

export const updatePageSEO = (seoData: Partial<SEOData>) => {
  const data = { ...defaultSEO, ...seoData };
  
  // Update title
  document.title = data.title;
  
  // Update or create meta tags
  updateMetaTag('description', data.description);
  if (data.keywords) updateMetaTag('keywords', data.keywords);
  if (data.canonicalUrl) updateCanonicalUrl(data.canonicalUrl);
  
  // Open Graph tags
  updateMetaProperty('og:title', data.ogTitle || data.title);
  updateMetaProperty('og:description', data.ogDescription || data.description);
  updateMetaProperty('og:type', data.ogType || 'website');
  updateMetaProperty('og:url', data.canonicalUrl || window.location.href);
  if (data.ogImage) updateMetaProperty('og:image', data.ogImage);
  
  // Twitter Card tags
  updateMetaProperty('twitter:card', data.twitterCard || 'summary_large_image');
  updateMetaProperty('twitter:title', data.twitterTitle || data.title);
  updateMetaProperty('twitter:description', data.twitterDescription || data.description);
  if (data.twitterImage) updateMetaProperty('twitter:image', data.twitterImage);
  
  // Structured data
  if (data.structuredData) {
    updateStructuredData(data.structuredData);
  }
};

const updateMetaTag = (name: string, content: string) => {
  let meta = document.querySelector(`meta[name="${name}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.name = name;
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const updateMetaProperty = (property: string, content: string) => {
  let meta = document.querySelector(`meta[property="${property}"]`) as HTMLMetaElement;
  if (!meta) {
    meta = document.createElement('meta');
    meta.setAttribute('property', property);
    document.head.appendChild(meta);
  }
  meta.content = content;
};

const updateCanonicalUrl = (url: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  if (!link) {
    link = document.createElement('link');
    link.rel = 'canonical';
    document.head.appendChild(link);
  }
  link.href = url;
};

const updateStructuredData = (data: object) => {
  // Remove existing structured data
  const existing = document.querySelector('script[type="application/ld+json"]');
  if (existing) {
    existing.remove();
  }
  
  // Add new structured data
  const script = document.createElement('script');
  script.type = 'application/ld+json';
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}; 