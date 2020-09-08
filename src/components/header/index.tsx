import * as React from 'react';
// import { useStaticQuery, graphql } from 'gatsby';
// import Img, { FluidObject } from 'gatsby-image';

import { SiteMetadata } from '../../data';

import './index.scss';

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

  return (
    <header className="aci-Header">
      {/* <Img
        fluid={data.logo.childImageSharp.fluid}
        imgStyle={{ objectFit: 'contain', objectPosition: 'center top' }}
        fadeIn={true}
      /> */}
    </header>
  );
};
