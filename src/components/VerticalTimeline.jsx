import React from 'react';
import { 
    VerticalTimeline as Timeline, 
    VerticalTimelineElement 
}  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { makeStyles } from '@material-ui/core/styles';
import { 
    School,
    Work 
} from '@material-ui/icons';
import classNames from 'classnames';

const VerticalTimeline = () => {
    const classes = useStyles();

    return (
        <Timeline 
            className={classes.root}
            layout="1-column-left"
        >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#22313F', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #22313F' }}
                iconStyle={{ background: '#ff0080', color: '#fff' }}
                date="August 2021 - Present"
                dateClassName={classes.font}
                icon={<Work />}
            >
                <h3 className={classNames("vertical-timeline-element-title", classes.font)}>Associate Consultant</h3>
                <h4 className={classNames("vertical-timeline-element-subtitle", classes.font)}>Capco</h4>
                <p className={classes.font}>
                    Responsible for helping clients transform their applications with a modern technology stack and 
                    agile methodologies.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#22313F', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #22313F' }}
                iconStyle={{ background: '#ff0080', color: '#fff' }}
                iconClassName={classes.color}
                date="August 2020 - July 2021"
                dateClassName={classes.font}
                icon={<Work />}
            >
                <h3 className={classNames("vertical-timeline-element-title", classes.font)}>Full Stack Web Developer</h3>
                <h4 className={classNames("vertical-timeline-element-subtitle", classes.font)}>University of Maryland - ESSIC</h4>
                <p className={classes.font}>
                    Developed a website and dashboard tool for DAWN, Dashboard for Agricultural Water use and Nutrient management, 
                    a USDA sponsered project. I designed and implemented a simple, user-friendly UI / UX using HTML, 
                    CSS, Javascript, React, and Material-UI. I have also implemented a RESTful API and database connectivity on the server 
                    On the dashboard, I worked with NASA / NOAA data which I manipulated and visualized with Chart.js.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#22313F', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #22313F' }}
                iconStyle={{ background: '#ff0080', color: '#fff' }}
                iconClassName={classes.color}
                date="August 2019 - July 2021"
                dateClassName={classes.font}
                icon={<Work />}
            >
                <h3 className={classNames("vertical-timeline-element-title", classes.font)}>Teaching Assistant</h3>
                <h4 className={classNames("vertical-timeline-element-subtitle", classes.font)}>University of Maryland</h4>
                <p className={classes.font}>
                    Taught material including from object-oriented programming with Java, low level programming with C, and
                    frontend / backend / fullstack with React, Node, Express, and MongoDB.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#22313F', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #22313F' }}
                iconStyle={{ background: '#ff0080', color: '#fff' }}
                iconClassName={classes.color}
                date="June 2019 - August 2019"
                dateClassName={classes.font}
                icon={<Work />}
            >
                <h3 className={classNames("vertical-timeline-element-title", classes.font)}>Software Engineer Intern</h3>
                <h4 className={classNames("vertical-timeline-element-subtitle", classes.font)}>Sparta Systems</h4>
                <p className={classes.font}>
                    Responsible for contributing to the design and development of their Salesforce AppExchange product. 
                    Worked on frontend development using the Aura / Lightning framework as well as backend development using 
                    Apex and SOQL. My most rewarding achievement was enabling multi-language usage by fixing page render 
                    failures due to invalid HTML / Javascript encodings for the entire application.
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#22313F', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  #22313F' }}
                iconStyle={{ background: '#ff0080', color: '#fff' }}
                iconClassName={classes.color}
                date="August 2017 - May 2021"
                dateClassName={classes.font}
                icon={<School />}
            >
                <h3 className={classNames("vertical-timeline-element-title", classes.font)}>B.S. in Computer Science</h3>
                <h4 className={classNames("vertical-timeline-element-subtitle", classes.font)}>University of Maryland</h4>
                <p className={classes.font}>
                    GPA - 3.61, Dean's List spring 2019, fall 2020, Sigma Alpha Epsilon fraternity member.
                </p>
            </VerticalTimelineElement>
        </Timeline>
    );
}

const useStyles = makeStyles(theme => ({
    color: {
        backgroundColor: '#ff0080',
        color: '#ff0080'
    },
    font: {
        fontFamily: "'Poppins', sans-serif",
    },
    root: {
        '&:before': {
            background: '#ff0080'
        },
        margin: "0 !important"
    },
}));

export default VerticalTimeline;