import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

/* 
    Helmet: Allows you to dynamically set the document title, meta tags, and other head elements.
    HelmetProvider: Provides a context that enables Helmet to manage head changes asynchronously and safely across the application.
*/
const SeoComponent = () => (
  <HelmetProvider>
    <Helmet>
      <title>My Portfolio</title>
      <meta name="description" content="Personal portfolio" />
    </Helmet>
  </HelmetProvider>
);

export default SeoComponent;
