import * as React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Layout } from '../components/layout';
import { SEO } from '../components/seo';
import { ContainerFluid, Row, Column } from '../components/grid';
import { SiteMetadata } from '../data';

import './index.scss';

interface SiteDataProps {
  site: {
    siteMetadata: SiteMetadata;
  };
}

const IndexPage = () => {
  const { site } = useStaticQuery<SiteDataProps>(graphql`
    query siteMetadata {
      site {
        siteMetadata {
          title
          address
          phone
          email
          instagram
          facebook
          hoursLine1
          hoursLine2
        }
      }
    }
  `);

  return (
    <Layout siteMetadata={site.siteMetadata}>
      <SEO />
      <ContainerFluid>
        <section id="home">
          <Row className="aci-Section aci-Section__first">
            <Column className="aci-Section__first-title" spanSm={12}>
              ArtCraft Ink
            </Column>
            <Column className="aci-Section__first-subtitle" spanSm={12}>
              Tattoo Studio
            </Column>
            <Column className="aci-Section__first-address" spanSm={12}>
              <a href="#contact">{site.siteMetadata.address}</a>
            </Column>
            <Column className="aci-Section__first-scroll-down">
              <a href="#artist">
                <FontAwesomeIcon icon={faChevronDown} size="3x" className="aci-Section__first-scroll-down-icon" />
              </a>
            </Column>
          </Row>
        </section>
        <section id="artist">
          <Column className="aci-Section aci-Section__artist">Artist section</Column>
        </section>

        <section id="faq">
          <Column className="aci-Section aci-Section__faq">FAQ section</Column>
        </section>

        <section id="contact">
          <Column className="aci-Section aci-Section__contact">Contact and location section</Column>
        </section>
      </ContainerFluid>
    </Layout>
  );
};

export default IndexPage;
