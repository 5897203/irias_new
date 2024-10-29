import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOHelmetProps {
  title: string;
  description: string;
}

export const SEOHelmet: React.FC<SEOHelmetProps> = ({ title, description }) => (
  <Helmet>
    <title>{title}</title>
    <meta name="description" content={description} />
  </Helmet>
);