import React from 'react';
import { Col, Row } from 'react-bootstrap';
import PageWrapper from '../components/PageWrapper';

import Break from '../components/Break';
import VerticalTimeline from '../components/VerticalTimeline';

const Experience: React.FC = () => {
  return (
    <>
      <PageWrapper>
        <Row className="mb-5">
          <Col xs={12}>
            <p className="display-1">Experience</p>
            <Break />
            <br />
            <VerticalTimeline />
          </Col>
        </Row>
      </PageWrapper>
    </>
  );
};

export default Experience;
