import React from 'react';
import { Col, Row } from 'react-bootstrap';
import {
  SiCss3,
  SiGit,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiJira,
  SiNodedotjs,
  SiNpm,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVite,
} from 'react-icons/si';

import Break from '../components/Break';
import Skill from '../components/Skill';
import PageWrapper from '../components/PageWrapper';
import { WaveSvgBottom, WaveSvgTop } from '../components/WaveSvg';
import responsive from '../assets/responsive.gif';

const Skills: React.FC = () => {
  return (
    <div id="Skills">
      <WaveSvgTop />
      <div className="bg-color">
        <PageWrapper>
          <Row className="d-flex flex-row-reverse justify-content-center">
            <Col xs={12} md={6}>
              <img className="w-100" alt="responsive" src={responsive} />
            </Col>
            <Col xs={12} md={6}>
              <p className="display-1 text-white">Skillset</p>
              <Break />
              <p className="h3 text-white">Tools and technologies I use in my current role:</p>
              <br />
              <Row>
                <Skill Icon={SiReact} name="React" />
                <Skill Icon={SiJavascript} name="JavaScript" />
                <Skill Icon={SiTypescript} name="TypeScript" />
                <Skill Icon={SiHtml5} name="HTML" />
                <Skill Icon={SiCss3} name="CSS" />
                <Skill Icon={SiGnubash} name="Bash" />
                <Skill Icon={SiVite} name="Vite" />
                <Skill Icon={SiTailwindcss} name="Tailwind" />
                <Skill Icon={SiNodedotjs} name="Node.js" />
                <Skill Icon={SiNpm} name="Npm" />
                <Skill Icon={SiGit} name="Git" />
                <Skill Icon={SiJira} name="Jira" />
              </Row>
            </Col>
          </Row>
        </PageWrapper>
      </div>
      <WaveSvgBottom />
    </div>
  );
};

export default Skills;
