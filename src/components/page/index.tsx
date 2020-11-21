import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
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

const MIN_SCROLL_DISTANCE = 100;

/**
 * Generic Page component encapsulating main layout and site metadata.
 */
export class Page extends React.Component<PageProps> {
  state = { bottomPosition: 10, hasScrolled: false };

  private handleScroll = () => {
    if (document.documentElement.scrollTop > MIN_SCROLL_DISTANCE) {
      this.setState({
        hasScrolled: true,
      });
    } else {
      this.setState({
        hasScrolled: false,
      });
    }
  };

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

    document.addEventListener('scroll', this.handleScroll.bind(this));
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', this.handleScroll);
  }

  toTop = () => {
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  };

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
              {this.state.hasScrolled ? (
                <div className="aci-Page__back-to-top">
                  <FontAwesomeIcon
                    onClick={this.toTop}
                    icon={faChevronUp}
                    size="3x"
                    className="aci-Page__back-to-top-icon"
                    style={{ bottom: `${this.state.bottomPosition}px` }}
                  ></FontAwesomeIcon>
                </div>
              ) : (
                <></>
              )}
            </Layout>
          );
        }}
      />
    );
  }
}
