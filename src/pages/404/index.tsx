import * as React from 'react';
import { Column, Row } from '../../components/grid';
import { Page } from '../../components/page';
import './index.scss';

const NotFoundPage = () => {
  return (
    <Page>
      {(_data) => (
        <>
          <Row className="aci-404">
            <Column className="aci-404__title">Not found</Column>
            <Row className="aci-404__content">
              <p>{`You just hit a route that doesn't exist... the sadness.`}</p>
            </Row>
          </Row>
        </>
      )}
    </Page>
  );
};

export default NotFoundPage;
