import React from 'react';

import Layout from '../components/layout';
import SEO from '../components/seo';
import InfoBarContainer from '../components/infoBar/infoBarContainer';
import SpringGrid from '../components/springGrid';

const Spring = () => (
  <Layout>
    <SEO title="Spring Produce" />
    <InfoBarContainer season="Spring" />
    <SpringGrid />
  </Layout>
);

export default Spring;
