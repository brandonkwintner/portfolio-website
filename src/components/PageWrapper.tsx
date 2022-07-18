import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

interface IPageWrapperProps {
  children: React.ReactNode;
}

const PageWrapper: React.FC<IPageWrapperProps> = ({ children }) => {
  return (
    <Row className="d-flex justify-content-center">
      <Col xs={11} md={9}>
        {children}
      </Col>
    </Row>
  );
};

export default PageWrapper;
