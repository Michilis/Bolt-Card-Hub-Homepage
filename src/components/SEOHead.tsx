import React from 'react';
import { Helmet } from 'react-helmet-async';
import { SEOData } from '../utils/seo';

interface SEOHeadProps {
  seoData: SEOData;
}

const SEOHead: React.FC<SEOHeadProps> = ({ seoData }) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{seoData.title}</title>
      <meta name="title" content={seoData.title} />
      <meta name="description" content={seoData.description} />
      {seoData.keywords && <meta name="keywords" content={seoData.keywords} />}
      
      {/* Canonical URL */}
      {seoData.canonicalUrl && <link rel="canonical" href={seoData.canonicalUrl} />}
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={seoData.ogType || 'website'} />
      <meta property="og:title" content={seoData.ogTitle || seoData.title} />
      <meta property="og:description" content={seoData.ogDescription || seoData.description} />
      {seoData.canonicalUrl && <meta property="og:url" content={seoData.canonicalUrl} />}
      {seoData.ogImage && <meta property="og:image" content={seoData.ogImage} />}
      
      {/* Twitter */}
      <meta property="twitter:card" content={seoData.twitterCard || 'summary_large_image'} />
      <meta property="twitter:title" content={seoData.twitterTitle || seoData.title} />
      <meta property="twitter:description" content={seoData.twitterDescription || seoData.description} />
      {seoData.twitterImage && <meta property="twitter:image" content={seoData.twitterImage} />}
      
      {/* Structured Data */}
      {seoData.structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(seoData.structuredData)}
        </script>
      )}
    </Helmet>
  );
};

export default SEOHead; 