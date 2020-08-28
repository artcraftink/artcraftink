import * as React from 'react';

import './index.scss';

interface HeaderProps {
  siteTitle?: string;
}

export const Header = ({ siteTitle = '' }: HeaderProps) => <header className="aci-Header">{siteTitle}</header>;
