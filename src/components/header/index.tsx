import { Link } from 'gatsby';
import * as React from 'react';
import classNames from 'classnames';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, IGatsbyImageData } from 'gatsby-plugin-image';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './index.scss';

interface ImgData {
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData;
    };
  };
}

export const Header = () => {
  const logo = useStaticQuery<ImgData>(graphql`
    {
      image: file(relativePath: { eq: "logo/artcraftink-transparent.png" }) {
        childImageSharp {
          gatsbyImageData(width: 100, height: 100, layout: FIXED)
        }
      }
    }
  `);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="aci-Header">
      <div className="aci-Header__logo">
        <Link to="/#home">
          <GatsbyImage
            alt="logo"
            image={logo.image.childImageSharp.gatsbyImageData}
            imgStyle={{ objectFit: 'contain' }}
          />
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
