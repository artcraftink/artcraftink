import * as React from 'react';
import { Link } from 'gatsby';

import { Page } from '../../components/page';

const About = () => {
  return (
    <Page>
      {(_data) => (
        <>
          <h1>Hi from the about page</h1>
          <p>Welcome to the about page of artcraftink</p>
          <Link to="/">Go back to the homepage</Link>
        </>
      )}
    </Page>
  );
};

export default About;
