import * as React from 'react';

import { SiteMetadata } from '../../data';
import { Header } from '../header';
import { Footer } from '../footer';

import './index.scss';

interface LayoutProps {
  children: JSX.Element[];
  siteMetadata: SiteMetadata;
}

export const Layout = ({ children, siteMetadata }: LayoutProps) => {
  return (
    <>
      <Header siteMetadata={siteMetadata} />
      <div className="aci-PageWrapper">
        <main>{children}</main>
        <Footer siteMetadata={siteMetadata}></Footer>
      </div>
    </>
  );
};
