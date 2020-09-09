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
            <Row className="aci-Section aci-Section__faq">
              <Column className="aci-Section__faq-title" spanSm={12} spanMd={12} spanLg={12} spanXl={12}>
                FAQ
              </Column>
              <Column className="aci-Section__faq-content" spanSm={12} spanMd={6} spanLg={6} spanXl={6}>
                <div className="aci-Section__faq-content-question">How do i look after my tattoo?</div>
                <div className="aci-Section__faq-content-answer">
                  No need to worry, we will go through everything with you while in the shop. We have a n aftercare
                  sheet we will supply as well as plastic wrap, tape and aftercare ointment (which we offer for a little
                  extra kuai). You are in good hands, we will not leave you hanging dry.
                </div>
              </Column>
              <Column className="aci-Section__faq-content" spanSm={12} spanMd={6} spanLg={6} spanXl={6}>
                <div className="aci-Section__faq-content-question">Can you remove it for me?</div>
                <div className="aci-Section__faq-content-answer">
                  Sorry but no! We can offer to cover your tattoo up with something you’ll love or give it a good ol’
                  refreshment. Our highly experienced artists here at Shanghai Tattoo are masters of cover ups and that
                  tattoo you once regretted may end up being the tattoo you always wanted and now cant stop looking at
                  because you love so much.
                </div>
              </Column>
              <Column className="aci-Section__faq-content" spanSm={12} spanMd={6} spanLg={6} spanXl={6}>
                <div className="aci-Section__faq-content-question">Do tattoos hurt?</div>
                <div className="aci-Section__faq-content-answer">Yes!</div>
              </Column>
              <Column className="aci-Section__faq-content" spanSm={12} spanMd={6} spanLg={6} spanXl={6}>
                <div className="aci-Section__faq-content-question">Can i get a tattoo if i'm under 18?</div>
                <div className="aci-Section__faq-content-answer">
                  No, Be patient. Tattoos are forever so wait till you are of age.
                </div>
              </Column>
              <Column className="aci-Section__faq-content" spanSm={12} spanMd={6} spanLg={6} spanXl={6}>
                <div className="aci-Section__faq-content-question">Can you remove it for me?</div>
                <div className="aci-Section__faq-content-answer">
                  Sorry but no! We can offer to cover your tattoo up with something you’ll love or give it a good ol’
                  refreshment. Our highly experienced artists here at Shanghai Tattoo are masters of cover ups and that
                  tattoo you once regretted may end up being the tattoo you always wanted and now cant stop looking at
                  because you love so much.
                </div>
              </Column>
              <Column className="aci-Section__faq-content" spanSm={12} spanMd={6} spanLg={6} spanXl={6}>
                <div className="aci-Section__faq-content-question">How do i look after my tattoo?</div>
                <div className="aci-Section__faq-content-answer">
                  No need to worry, we will go through everything with you while in the shop. We have a n aftercare
                  sheet we will supply as well as plastic wrap, tape and aftercare ointment (which we offer for a little
                  extra kuai). You are in good hands, we will not leave you hanging dry.
                </div>
              </Column>
              <Column className="aci-Section__faq-content" spanSm={12} spanMd={6} spanLg={6} spanXl={6}>
                <div className="aci-Section__faq-content-question">Do tattoos hurt?</div>
                <div className="aci-Section__faq-content-answer">Yes!</div>
              </Column>
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
