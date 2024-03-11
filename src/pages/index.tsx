import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { graphql, Link, navigate, useStaticQuery } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import * as React from 'react';

import { Button } from '../components/button';
import { Column, Row } from '../components/grid';
import { Input } from '../components/input';
import { Page } from '../components/page';
import { Textarea } from '../components/textarea';
import './index.scss';

interface ImgData {
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');
}

const IndexPage = () => {
  const [state, setState] = React.useState({});

  const artistProfilePicture = useStaticQuery<ImgData>(graphql`
    {
      image: file(relativePath: { eq: "artist-profile-picture.jpg" }) {
        childImageSharp {
          gatsbyImageData(width: 240, height: 360, layout: FIXED)
        }
      }
    }
  `);

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

  const navigateToGallery = () => {
    navigate('/gallery');
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
                  <Link to="/#artist">{data.siteMetadata.artistName}</Link>
                </Column>
                <Column className="aci-Section__home-scroll-down">
                  <Link to="/#artist">
                    <FontAwesomeIcon icon={faChevronDown} size="3x" className="aci-Section__home-scroll-down-icon" />
                  </Link>
                </Column>
              </Row>
            </section>

            <section id="artist">
              <Row className="aci-Section aci-Section__artist">
                <Column className="aci-Section__artist-row aci-Section__artist-title">Artist</Column>
                <Column className="aci-Section__artist-row aci-Section__artist-image">
                  <GatsbyImage
                    alt="artist"
                    image={artistProfilePicture.image.childImageSharp.gatsbyImageData}
                    imgStyle={{ objectFit: 'contain' }}
                  />
                </Column>
                <Column className="aci-Section__artist-row aci-Section__artist-name">
                  {data.siteMetadata.artistName}
                </Column>
                <Column spanLg={10} spanXl={10} className="aci-Section__artist-row aci-Section__artist-bio">
                  <p>{data.siteMetadata.artistBio}</p>
                </Column>
                <Column className="aci-Section__artist-row aci-Section__artist-gallery-link">
                  <Button onClick={() => navigateToGallery()} text="View gallery"></Button>
                  <Button onClick={() => window.open(data.siteMetadata.instagram, '_blank')} text="Follow me" />
                </Column>
              </Row>
            </section>

            <section id="contact">
              <Row className="aci-Section aci-Section__contact">
                <Column className="aci-Section__contact-title">Contact</Column>
                <Column className="aci-Section__contact-info" spanSm={12} spanMd={6} spanLg={5} spanXl={5}>
                  <Row>
                    <Column className="aci-Section__contact-info-title">Find us</Column>
                  </Row>
                  <Row>
                    <Link to="/#location">
                      <Column className="aci-Section__contact-info-value">{data.siteMetadata.addressLine1}</Column>
                      <Column className="aci-Section__contact-info-value">{data.siteMetadata.addressLine2}</Column>
                    </Link>
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
                <Column className="aci-Section__contact-form" spanSm={12} spanMd={6} spanLg={5} spanXl={5}>
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
                      <Row>
                        <Column className="aci-Section__contact-info-title">Message us</Column>
                      </Row>
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
                <Column className="aci-Section__location-title">Location</Column>
                <Column className="aci-Section__location-map" spanLg={10} spanXl={10}>
                  <div className="aci-Section__location-map-wrapper">
                    <iframe
                      src={`https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d372.3125852169921!2d22.8545508!3d41.7097137!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14aa13229332b2bf%3A0x13bb7d1eb75f400a!2sArtCraft%20Ink!5e0!3m2!1sen!2smk!4v1710190304012!5m2!1sen!2smk&key=${data.siteMetadata.map.apiKey}`}
                      width="auto"
                      height="auto"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
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
