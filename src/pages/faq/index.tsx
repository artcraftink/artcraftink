import * as React from 'react';
import { Column, Row } from '../../components/grid';

import { Page } from '../../components/page';
import { faq } from '../../data/faq';
import './index.scss';

const FAQ = () => (
  <Page>
    {(_data) => (
      <>
        <Row className="aci-Faq">
          <Column className="aci-Faq__title">FAQ</Column>
          <Row>
            {faq.map((item, index) => {
              const offset = index % 2 === 1 ? 2 : 0;
              return (
                <>
                  <Column
                    key={index}
                    className="aci-Faq__content"
                    spanMd={5}
                    offsetMd={offset}
                    spanLg={5}
                    offsetLg={offset}
                    spanXl={5}
                    offsetXl={offset}
                  >
                    <div className="aci-Faq__content-question">{item.question}</div>
                    <div className="aci-Faq__content-answer">
                      <p>{item.answer}</p>
                    </div>
                  </Column>
                </>
              );
            })}
          </Row>
        </Row>
      </>
    )}
  </Page>
);

export default FAQ;
