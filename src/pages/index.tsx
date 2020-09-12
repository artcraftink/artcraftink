import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import { Row, Column } from '../components/grid';
import { Page } from '../components/page';
import { Button } from '../components/button';
import { faq } from '../data/faq';

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
            <Row className="aci-Section aci-Section__faq">
              <Column className="aci-Section__faq-title" spanSm={12} spanMd={12} spanLg={12} spanXl={12}>
                FAQ
              </Column>
              {faq.map(({ question, answer }) => (
                <Column className="aci-Section__faq-content" spanSm={12} spanMd={6} spanLg={6} spanXl={6}>
                  <div className="aci-Section__faq-content-question">{question}</div>
                  <div className="aci-Section__faq-content-answer">{answer}</div>
                </Column>
              ))}
            </Row>
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
