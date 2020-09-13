import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

import { SiteMetadata } from '../../data';
import { ContainerFluid, Row, Column } from '../grid';

import './index.scss';

interface FooterProps {
  siteMetadata: SiteMetadata;
}

export const Footer = ({ siteMetadata }: FooterProps) => {
  return (
    <footer className="aci-Footer">
      <ContainerFluid>
        <Row>
          <Column className="aci-Footer__section" spanXl={4} spanLg={4} spanMd={4} spanSm={12}>
            <div className="aci-Footer__section-title">Location</div>
            <div className="aci-Footer__section-value">
              <a href="#location">
                <p>{siteMetadata.addressLine1}</p>
                <p>{siteMetadata.addressLine2}</p>
              </a>
            </div>
          </Column>
          <Column className="aci-Footer__section" spanXl={4} spanLg={4} spanMd={4} spanSm={12}>
            <div className="aci-Footer__section-title">Contact</div>
            <p className="aci-Footer__section-value">
              <a href={`tel:${siteMetadata.phone}`}>{siteMetadata.phone}</a>
            </p>
            <p className="aci-Footer__section-value">
              <a href={`mailto:${siteMetadata.email}`}>{siteMetadata.email}</a>
            </p>
          </Column>
          <Column className="aci-Footer__section" spanXl={4} spanLg={4} spanMd={4} spanSm={12}>
            <div className="aci-Footer__section-title">Follow</div>
            <p className="aci-Footer__section-value">
              <span className="aci-Footer__section-social-media-link">
                <a href={siteMetadata.instagram} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} size="2x" />
                </a>
              </span>
              <span className="aci-Footer__section-social-media-link">
                <a href={siteMetadata.facebook} target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebookF} size="2x" />
                </a>
              </span>
              <span className="aci-Footer__section-social-media-link">
                <a href={`mailto:${siteMetadata.email}`}>
                  <FontAwesomeIcon icon={faEnvelope} size="2x" />
                </a>
              </span>
            </p>
          </Column>
        </Row>
        <Row>
          <Column className="aci-Footer__copyright">
            Copyright © {siteMetadata.title} {new Date().getFullYear()}. All rights reserved.
          </Column>
        </Row>
      </ContainerFluid>
    </footer>
  );
};
