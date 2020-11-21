import { Link } from 'gatsby';
import * as React from 'react';
import classNames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import Img, { FixedObject } from 'gatsby-image';

import { SiteMetadata } from '../../data';

import './index.scss';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ImgData {
  image: {
    childImageSharp: {
      fixed: FixedObject;
    };
  };
}

interface HeaderProps {
  siteMetadata: SiteMetadata;
}

export const Header = (_props: HeaderProps) => {
  const logo = useStaticQuery<ImgData>(graphql`
    query {
      image: file(relativePath: { eq: "logo/artcraftink-transparent.png" }) {
        childImageSharp {
          fixed(width: 100, height: 100) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="aci-Header">
      <div className="aci-Header__logo">
        <Link to="/#home">
          <Img fixed={logo.image.childImageSharp.fixed} imgStyle={{ objectFit: 'contain' }} fadeIn={true} />
        </Link>
      </div>
      <nav id="nav">
        <ul>
          <li className="special">
            {!isMenuOpen && (
              <a
                className="menuToggle"
                onClick={() => {
                  setIsMenuOpen(true);
                }}
              >
                <FontAwesomeIcon icon={faBars} size="2x" />
              </a>
            )}
            <div className={classNames('menu', isMenuOpen && 'menu-open')}>
              <ul>
                <li>
                  <Link
                    to="/#home"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#artist"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Artist
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/faq"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#contact"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/#location"
                    onClick={() => {
                      setIsMenuOpen(false);
                    }}
                  >
                    Location
                  </Link>
                </li>
              </ul>
              {isMenuOpen && (
                <a
                  className="close"
                  onClick={() => {
                    setIsMenuOpen(false);
                  }}
                >
                  <FontAwesomeIcon icon={faTimes} size="2x" />
                </a>
              )}
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
