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
  render() {
    return (
      <StaticQuery
        query={graphql`
          query metadataQuery {
            site {
              siteMetadata {
                title
                address
                phone
                email
                instagram
                facebook
              }
            }
          }
        `}
        render={(data) => {
          const siteMetadata = (data as any).site.siteMetadata as SiteMetadata;
          return (
            <Layout siteMetadata={siteMetadata}>
              <SEO siteMetadata={siteMetadata} />
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
