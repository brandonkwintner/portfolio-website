import React from 'react';
import {
  VerticalTimeline as Timeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { MdWorkOutline, MdSchool } from 'react-icons/md';

const VerticalTimeline: React.FC = () => {
  return (
    <Timeline className="timeline-root" layout="1-column-left">
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#22313F', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #22313F' }}
        iconStyle={{ background: '#ff0080', color: '#fff' }}
        date="May 2022 - Present"
        icon={<MdWorkOutline />}
      >
        <h3 className="vertical-timeline-element-title">Front End Engineer</h3>
        <h4 className="vertical-timeline-element-subtitle">Goldman Sachs</h4>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#22313F', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #22313F' }}
        iconStyle={{ background: '#ff0080', color: '#fff' }}
        date="August 2021 - May 2022"
        icon={<MdWorkOutline />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer Consultant</h3>
        <h4 className="vertical-timeline-element-subtitle">Capco</h4>
        <p>
          Front End Developer on the Tech4Ops Corporate Bank Automation as a Service project at
          Deutsche Bank. Building micro-frontend React applications to help assist business users in
          automation of validating workflow items. I implemented a central location for work items
          to be viewed with Ag-grid and have reduced the time users are spending validating
          anti-financial crime items by 200%. These projects were built with React, TypeScript,
          Bootstrap, and Webpack.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#22313F', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #22313F' }}
        iconStyle={{ background: '#ff0080', color: '#fff' }}
        iconClassName="skill"
        date="August 2020 - July 2021"
        icon={<MdWorkOutline />}
      >
        <h3 className="vertical-timeline-element-title">Full Stack Web Developer</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Maryland - ESSIC</h4>
        <p>
          Developed a website and dashboard tool for DAWN, Dashboard for Agricultural Water use and
          Nutrient management, a USDA sponsered project. I designed and implemented a simple,
          user-friendly UI / UX using HTML, CSS, Javascript, React, and Material-UI. I have also
          implemented a RESTful API and database connectivity on the server On the dashboard, I
          worked with NASA / NOAA data which I manipulated and visualized with Chart.js.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#22313F', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #22313F' }}
        iconStyle={{ background: '#ff0080', color: '#fff' }}
        iconClassName="skill"
        date="August 2019 - July 2021"
        icon={<MdWorkOutline />}
      >
        <h3 className="vertical-timeline-element-title">Teaching Assistant</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Maryland</h4>
        <p>
          Taught material including from object-oriented programming with Java, low level
          programming with C, and frontend / backend / fullstack with React, Node, Express, and
          MongoDB.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#22313F', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #22313F' }}
        iconStyle={{ background: '#ff0080', color: '#fff' }}
        iconClassName="skill"
        date="June 2019 - August 2019"
        icon={<MdWorkOutline />}
      >
        <h3 className="vertical-timeline-element-title">Software Engineer Intern</h3>
        <h4 className="vertical-timeline-element-subtitle">Sparta Systems</h4>
        <p>
          Responsible for contributing to the design and development of their Salesforce AppExchange
          product. Worked on frontend development using the Aura / Lightning framework as well as
          backend development using Apex and SOQL. My most rewarding achievement was enabling
          multi-language usage by fixing page render failures due to invalid HTML / Javascript
          encodings for the entire application.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: '#22313F', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  #22313F' }}
        iconStyle={{ background: '#ff0080', color: '#fff' }}
        iconClassName="skill"
        date="August 2017 - May 2021"
        icon={<MdSchool />}
      >
        <h3 className="vertical-timeline-element-title">B.S. in Computer Science</h3>
        <h4 className="vertical-timeline-element-subtitle">University of Maryland</h4>
        <p>
          GPA - 3.61, Dean's List spring 2019, fall 2020, Sigma Alpha Epsilon fraternity member.
        </p>
      </VerticalTimelineElement>
    </Timeline>
  );
};

export default VerticalTimeline;
