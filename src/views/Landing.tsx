import React from 'react';
import ParticlesBg from 'particles-bg';
import { Container } from 'react-bootstrap';

import PageWrapper from '../components/PageWrapper';
import WelcomeText from '../components/WelcomeText';

const Landing: React.FC = () => {
  return (
    <div className="align-middle d-table-cell vh-100 vw-100">
      <ParticlesBg type="lines" bg={true} />
      <PageWrapper>
        <Container fluid>
          <div className="text-left align-middle">
            <WelcomeText />
          </div>
        </Container>
      </PageWrapper>
    </div>
  );
};

export default Landing;
