import * as React from 'react';
import { graphql, StaticQuery } from 'gatsby';

import { SiteMetadata } from '../../data';
import { ContainerFluid } from '../grid';
import { SEO } from '../seo';
import { Layout } from '../layout';
import './index.scss';

interface PageProps {
  children(props: { siteMetadata: SiteMetadata }): JSX.Element;
  className?: string;
}

/**
 * Generic Page component encapsulating main layout and site metadata.
 */
export class Page extends React.Component<PageProps> {
  // fix for non-constant height for 100vh on mobile devices
  componentDidMount() {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty('--vh', `${vh}px`);

    // We listen to the resize event
    window.addEventListener('resize', () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    });
  }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query metadataQuery {
            site {
              siteMetadata {
                title
                addressLine1
                addressLine2
                map {
                  apiKey
                  center {
                    lat
                    lng
                  }
                  zoom
                }
                phone
                email
                instagram
                facebook
                artistName
                artistBio
              }
            }
          }
        `}
        render={(data) => {
          const siteMetadata = (data as any).site.siteMetadata as SiteMetadata;
          return (
            <Layout siteMetadata={siteMetadata}>
              <SEO {...siteMetadata} />
              <ContainerFluid className={this.props.className}>
                {this.props.children({
                  siteMetadata,
                })}
              </ContainerFluid>
            </Layout>
          );
        }}
      />
    );
  }
}
