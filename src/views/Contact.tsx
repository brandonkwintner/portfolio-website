import React from 'react';
import { AiOutlinePhone, AiOutlineMail, AiOutlineLinkedin } from 'react-icons/ai';
import { Col, Row } from 'react-bootstrap';

import Break from '../components/Break';
import PageWrapper from '../components/PageWrapper';

import send from '../assets/send.gif';
import resume from '../assets/Resume_Brandon_Kwintner.pdf';

const Contact = () => {
  return (
    <div className="bg-color">
      <PageWrapper>
        <Row className="d-flex flex-row-reverse mb-5">
          <Col xs={12} md={6}>
            <img className="w-100" alt="send" src={send} />
          </Col>
          <Col className="mt-5" xs={12} md={6}>
            <p className="display-1 text-white">Connect With Me</p>
            <Break />
            <p className="h3 text-white">
              I am always open to hearing about new exciting opportunites. If you feel that I am a
              good fit for a role, do not hesitate to reach out!
            </p>
            <br />
            <div className="d-flex flex-wrap justify-content-start align-items-center">
              <div className="py-2 d-flex flex-row align-items-center me-3">
                <AiOutlinePhone size={50} color="#ff0080" />
                <p className="my-auto ms-1 h3 text-white">(732) 513-2795</p>
              </div>

              <div className="me-3">
                <button className="py-2 d-flex flex-row align-items-center home-button">
                  <a className="text-decoration-none h4 my-auto text-white" href={resume} download>
                    Resume Download
                  </a>
                </button>
              </div>
              <div className="me-3">
                <div className="py-2 d-flex flex-row align-items-center">
                  <a
                    className="text-decoration-none me-3"
                    href="mailto: brandon.kwintner@gmail.com"
                  >
                    <AiOutlineMail size={50} color="#ff0080" />
                  </a>
                  <a
                    className="text-decoration-none"
                    href="https://www.linkedin.com/in/brandonkwintner/"
                  >
                    <AiOutlineLinkedin size={50} color="#ff0080" />
                  </a>
                </div>
              </div>
              <br />
              <p className="h3 text-white">
                “
                <i>
                  Learning is not attained by chance. It must be sought for with ardor and attended
                  with diligence.
                </i>
                "
              </p>
              <p className="h3 text-white">- Abigail Adams</p>
            </div>
          </Col>
        </Row>
      </PageWrapper>
    </div>
  );
};

export default Contact;
