import { Helmet } from 'react-helmet-async';
import { siteConfig } from '../../config/siteConfig';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogImage?: string;
  ogUrl?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const SEOHead = ({
  title,
  description,
  keywords,
  ogImage,
  ogUrl,
  ogType = 'website',
  canonicalUrl,
}: SEOHeadProps) => {
  const seoConfig = siteConfig.seo;
  
  const finalTitle = title || seoConfig.title;
  const finalDescription = description || seoConfig.description;
  const finalKeywords = keywords || seoConfig.keywords;
  const finalOgImage = ogImage || seoConfig.ogImage;
  const finalOgUrl = ogUrl || seoConfig.ogUrl;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{finalTitle}</title>
      <meta name="description" content={finalDescription} />
      <meta name="keywords" content={finalKeywords} />
      <meta name="author" content={seoConfig.author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph Meta Tags */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={finalTitle} />
      <meta property="og:description" content={finalDescription} />
      <meta property="og:image" content={finalOgImage} />
      <meta property="og:url" content={finalOgUrl} />
      <meta property="og:site_name" content="D'Lula Coliving" />
      
      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={finalTitle} />
      <meta name="twitter:description" content={finalDescription} />
      <meta name="twitter:image" content={finalOgImage} />
      {seoConfig.twitterHandle && (
        <meta name="twitter:creator" content={seoConfig.twitterHandle} />
      )}
      
      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      
      {/* Additional Meta Tags */}
      <meta name="robots" content="index, follow" />
      <meta name="language" content="English" />
    </Helmet>
  );
};

export default SEOHead;
