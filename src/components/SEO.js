import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, keywords, canonicalUrl, ogImage }) => {
  const siteUrl = 'https://your-webhosting-guide.com';
  const defaultTitle = 'Web Hosting Guide - Find the Best Hosting Solutions';
  const defaultDescription = 'Discover the best web hosting solutions for your needs. Unbiased reviews, comparisons, and guides to help you make the right choice for your website.';
  const defaultKeywords = 'web hosting, website hosting, hosting guide, best web hosting, compare hosting, affordable hosting';
  const defaultOgImage = `${siteUrl}/images/webhosting-guide.jpg`;

  return (
    <Helmet>
      <title>{title || defaultTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />
      <link rel="canonical" href={canonicalUrl || siteUrl} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl || siteUrl} />
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description || defaultDescription} />
      <meta property="og:image" content={ogImage || defaultOgImage} />
      
      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={canonicalUrl || siteUrl} />
      <meta property="twitter:title" content={title || defaultTitle} />
      <meta property="twitter:description" content={description || defaultDescription} />
      <meta property="twitter:image" content={ogImage || defaultOgImage} />
      
      {/* Structured Data for SEO */}
      <script type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebSite",
            "name": "Web Hosting Guide",
            "url": "${siteUrl}",
            "potentialAction": {
              "@type": "SearchAction",
              "target": "${siteUrl}/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          }
        `}
      </script>
    </Helmet>
  );
};

export default SEO;