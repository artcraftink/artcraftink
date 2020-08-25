import * as React from 'react';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi from the home page</h1>
    <p>Welcome to the home page</p>
    <br />
  </Layout>
);

export default IndexPage;
