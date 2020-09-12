import * as React from 'react';

import { Page } from '../../components/page';

const Thanks = () => (
  <Page>
    {(_data) => (
      <>
        <h1>Thank you!</h1>
        <p>{`Your message has been successfully sent. We will contact you very soon!`}</p>
      </>
    )}
  </Page>
);

export default Thanks;
