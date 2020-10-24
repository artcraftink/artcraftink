import { Link } from 'gatsby';
import * as React from 'react';
import classNames from 'classnames';
// import { useStaticQuery, graphql } from 'gatsby';
// import Img, { FluidObject } from 'gatsby-image';

import { SiteMetadata } from '../../data';

import './index.scss';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// interface ImgData {
//   logo: {
//     childImageSharp: {
//       fluid: FluidObject;
//     };
//   };
// }

interface HeaderProps {
  siteMetadata: SiteMetadata;
}

// TODO: GP - fix the sizing of the logo
export const Header = (_props: HeaderProps) => {
  // const data = useStaticQuery<ImgData>(graphql`
  //   query {
  //     logo: file(relativePath: { eq: "logo/artcraftink-icon.jpg" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 100, maxHeight: 100) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <header className="aci-Header">
      {/* <Img
        fluid={data.logo.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain', objectPosition: 'center top' }}
        fadeIn={true}
      /> */}
      <nav id="nav">
        <ul>
          <li className="special">
            <a
              className="menuToggle"
              onClick={() => {
                setIsMenuOpen(true);
              }}
            >
              <FontAwesomeIcon icon={faBars} />
            </a>
            <div className={classNames('menu', isMenuOpen && 'menu-open')}>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <a href="#artist">Artist</a>
                </li>
                <li>
                  <Link to="/gallery">Gallery</Link>
                </li>
                <li>
                  <Link to="/faq">FAQ</Link>
                </li>
                <li>
                  <a href="#contact">Contact</a>
                </li>
                <li>
                  <a href="#location">Location</a>
                </li>
              </ul>
              <a
                className="close"
                onClick={() => {
                  console.log('close');
                  setIsMenuOpen(false);
                }}
              >
                x
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
