import * as React from 'react';

import './index.scss';

export const Footer = () => (
  <footer>
    © {new Date().getFullYear()}
    {` `}
    <a href="https://www.instagram.com/artcraftink/">artcraftink</a>
  </footer>
);
