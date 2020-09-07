import * as React from 'react';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { ContainerFluid, Row, Column } from '../components/grid';

import './index.scss';

const IndexPage = () => (
  <Layout>
    <SEO title="Artcraftink" />
    <ContainerFluid>
      <Row>
        <Column className="aci-Section aci-Section__first">Home section</Column>
        <Column className="aci-Section aci-Section__artist">Artist section</Column>
        <Column className="aci-Section aci-Section__gallery">Gallery section</Column>
        <Column className="aci-Section aci-Section__faq">FAQ section</Column>
        <Column className="aci-Section aci-Section__contact">Contact and location section</Column>
      </Row>
    </ContainerFluid>
  </Layout>
);

export default IndexPage;
