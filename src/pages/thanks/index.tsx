import * as React from 'react';
import { Column, Row } from '../../components/grid';
import { Page } from '../../components/page';
import './index.scss';

const Thanks = () => (
  <Page>
    {(_data) => (
      <>
        <Row className="aci-Thanks">
          <Column className="aci-Thanks__title">Thank you</Column>
          <Row className="aci-Thanks__content">
            <p>{`Your message has been successfully sent. We will contact you very soon!`}</p>
          </Row>
        </Row>
      </>
    )}
  </Page>
);

export default Thanks;
