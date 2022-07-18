import React from 'react';
import { Element } from 'react-scroll';
import { Col, Row } from 'react-bootstrap';
import classNames from 'classnames';
import computer from '../assets/computer.gif';

import Break from '../components/Break';
import IconList from '../components/IconList';
import PageWrapper from '../components/PageWrapper';

const About: React.FC = () => {
  return (
    <Element name="About">
      <PageWrapper>
        <Row className="d-flex justify-content-center">
          <Col xs={12} md={6}>
            <img className="w-100" alt="computer" src={computer} />
          </Col>
          <Col xs={12} md={6}>
            <p className="display-1">What I do</p>
            <Break />
            <p className="h3">An ambitious web developer with a love for all things programming.</p>
            <IconList />
            <br />
            <br />
            <p className="h4">
              <i className="color fas fa-code" /> Develop dynamic, mobile responsive web
              applications while maintaining a clean, reusable code base.
            </p>
            <br />
            <p className="h4">
              <i className="color fas fa-code" /> Follow modern architectures such as monorepos and
              micro front end module federations.
            </p>
          </Col>
        </Row>
      </PageWrapper>
    </Element>
  );
};

export default About;
