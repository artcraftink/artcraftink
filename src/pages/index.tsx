import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Row, Column } from '../components/grid';
import { Page } from '../components/page';
import { Button } from '../components/button';

import './index.scss';

const IndexPage = () => {
  return (
    <Page>
      {(data) => (
        <>
          <section id="home">
            <Row className="aci-Section aci-Section__home">
              <Column className="aci-Section__home-title">ArtCraft Ink</Column>
              <Column className="aci-Section__home-subtitle">Tattoo Studio</Column>
              <Column className="aci-Section__home-address">
                <a href="#contact">{data.siteMetadata.address}</a>
              </Column>
              <Column className="aci-Section__home-scroll-down">
                <a href="#artist">
                  <FontAwesomeIcon icon={faChevronDown} size="3x" className="aci-Section__home-scroll-down-icon" />
                </a>
              </Column>
            </Row>
          </section>

          <section id="artist">
            <Row className="aci-Section aci-Section__artist">
              <Column className="aci-Section__artist-row aci-Section__artist-title">Artist</Column>
              <Column className="aci-Section__artist-row aci-Section__artist-image">
                <img src="https://via.placeholder.com/225" />
              </Column>
              <Column className="aci-Section__artist-row aci-Section__artist-name">
                {data.siteMetadata.artistName}
              </Column>
              <Column className="aci-Section__artist-row aci-Section__artist-bio">{data.siteMetadata.artistBio}</Column>
              <Column className="aci-Section__artist-row aci-Section__artist-gallery-link">
                <Button text="View gallery" />
                <Button text="Follow me" />
              </Column>
            </Row>
          </section>

          <section id="faq">
            <Column className="aci-Section aci-Section__faq">FAQ section</Column>
          </section>

          <section id="contact">
            <Column className="aci-Section aci-Section__contact">Contact and location section</Column>
          </section>
        </>
      )}
    </Page>
  );
};

export default IndexPage;
