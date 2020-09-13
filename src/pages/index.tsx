import * as React from 'react';
import { navigate } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import GoogleMap from 'google-map-react';

import { Row, Column } from '../components/grid';
import { Page } from '../components/page';
import { Button } from '../components/button';
import { Input } from '../components/input';
import { Textarea } from '../components/textarea';
import { faq } from '../data/faq';

import './index.scss';

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const IndexPage = () => {
  const [state, setState] = React.useState({});

  const onChange = (event: any) => {
    setState({ ...state, [event.target.name]: event.target.value });
  };

  const onSubmit = (event: any) => {
    event.preventDefault();
    const form = event.target;
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute('action')))
      .catch((error) => alert(error));
  };

  return (
    <Page>
      {(data) => {
        return (
          <>
            <section id="home">
              <Row className="aci-Section aci-Section__home">
                <Column className="aci-Section__home-title">ArtCraft Ink</Column>
                <Column className="aci-Section__home-subtitle">Tattoo Studio</Column>
                <Column className="aci-Section__home-artist">
                  <a href="#artist">{data.siteMetadata.artistName}</a>
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
                <Column className="aci-Section__artist-row aci-Section__artist-bio">
                  {data.siteMetadata.artistBio}
                </Column>
                <Column className="aci-Section__artist-row aci-Section__artist-gallery-link">
                  <Button text="View gallery" />
                  <Button onClick={() => window.open(data.siteMetadata.instagram, '_blank')} text="Follow me" />
                </Column>
              </Row>
            </section>

            <section id="faq">
              <Row className="aci-Section aci-Section__faq">
                <Column className="aci-Section__faq-title" spanSm={12} spanMd={12} spanLg={12} spanXl={12}>
                  FAQ
                </Column>
                {faq.map((item, index) => (
                  <Column key={index} className="aci-Section__faq-content" spanSm={12} spanMd={6} spanLg={6} spanXl={6}>
                    <div className="aci-Section__faq-content-question">{item.question}</div>
                    <div className="aci-Section__faq-content-answer">{item.answer}</div>
                  </Column>
                ))}
              </Row>
            </section>

            <section id="contact">
              <Row className="aci-Section aci-Section__contact">
                <Column className="aci-Section__contact-title" spanSm={12} spanMd={12} spanLg={12} spanXl={12}>
                  Contact
                </Column>
                <Column className="aci-Section__contact-info" spanSm={12} spanMd={6} spanLg={6} spanXl={6}>
                  <Row>
                    <Column className="aci-Section__contact-info-title">Find us</Column>
                  </Row>
                  <Row>
                    <a href="#location">
                      <Column className="aci-Section__contact-info-value">{data.siteMetadata.addressLine1}</Column>
                      <Column className="aci-Section__contact-info-value">{data.siteMetadata.addressLine2}</Column>
                    </a>
                  </Row>
                  <Row>
                    <Column className="aci-Section__contact-info-title">Contact us</Column>
                  </Row>
                  <Row>
                    <Column className="aci-Section__contact-info-value">
                      <a href={`mailto:${data.siteMetadata.email}`}>{data.siteMetadata.email}</a>
                    </Column>
                    <Column className="aci-Section__contact-info-value">
                      <a href={`tel:${data.siteMetadata.phone}`}>{data.siteMetadata.phone}</a>
                    </Column>
                    <Column className="aci-Section__contact-info-value">
                      <a href={data.siteMetadata.instagram} target="_blank" rel="noopener noreferrer">
                        Instagram
                      </a>
                    </Column>
                    <Column className="aci-Section__contact-info-value">
                      <a href={data.siteMetadata.facebook} target="_blank" rel="noopener noreferrer">
                        Facebook
                      </a>
                    </Column>
                  </Row>
                </Column>
                <Column className="aci-Section__contact-form" spanSm={12} spanMd={6} spanLg={6} spanXl={6}>
                  <form
                    name="contact"
                    method="post"
                    action="/thanks/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={onSubmit}
                  >
                    <input type="hidden" name="form-name" value="contact" />
                    <Row>
                      <Column className="aci-Section__contact-form-row">
                        <label htmlFor="name">
                          Name <sup>*</sup>
                        </label>
                        <Input name="name" required={true} maxLength={120} onChange={onChange} />
                      </Column>
                      <Column className="aci-Section__contact-form-row">
                        <label htmlFor="email">
                          Email <sup>*</sup>
                        </label>
                        <Input name="email" type="email" required={true} maxLength={254} onChange={onChange} />
                      </Column>
                      <Column className="aci-Section__contact-form-row">
                        <label htmlFor="message">
                          Message <sup>*</sup>
                        </label>
                        <Textarea name="message" required={true} maxLength={256} onChange={onChange} />
                      </Column>
                      <Column className="aci-Section__contact-form-row aci-Section__contact-form-submit-button">
                        <Button text="Send" type="submit" />
                      </Column>
                    </Row>
                  </form>
                </Column>
              </Row>
            </section>

            <section id="location">
              <Row className="aci-Section aci-Section__location">
                <Column className="aci-Section__location-title" spanSm={12} spanMd={12} spanLg={12} spanXl={12}>
                  Location
                </Column>
                <Column className="aci-Section__location-map" spanSm={12} spanMd={12} spanLg={12} spanXl={12}>
                  <div className="aci-Section__location-map-wrapper">
                    <GoogleMap
                      bootstrapURLKeys={{ key: data.siteMetadata.map.apiKey }}
                      defaultCenter={data.siteMetadata.map.center}
                      defaultZoom={data.siteMetadata.map.zoom}
                    ></GoogleMap>
                  </div>
                </Column>
              </Row>
            </section>
          </>
        );
      }}
    </Page>
  );
};

export default IndexPage;
