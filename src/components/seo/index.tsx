/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import * as React from 'react';
import { Helmet } from 'react-helmet';
import { SiteMetadata } from '../../data';

interface SEOProps {
  title?: string;
  description?: string;
  lang?: string;
  meta?: JSX.IntrinsicElements['meta'][];
  siteMetadata: SiteMetadata;
}

export const SEO = ({ title, description, lang = 'en', meta = [], siteMetadata }: SEOProps) => {
  const metaDescription = description || siteMetadata.description;
  const metaTitle = title || siteMetadata.title;

  return (
    <Helmet
      htmlAttributes={{
        lang: lang,
      }}
      title={metaTitle}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: metaTitle,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: metaTitle,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta as any)}
    />
  );
};
