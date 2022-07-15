import React from 'react';
import { 
    Grid,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PageWrapper from '../components/PageWrapper';
import IconList from '../components/IconList';
import classNames from 'classnames';
import computer from '../assets/computer.gif';

const About = () => {
    const classes = useStyles();

    return (
        <div 
            className={classes.root}
            id="About"
        >
            <PageWrapper direction="row">
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <img
                        className={classes.img}
                        alt="computer"
                        src={computer}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <br/><br/>
                    <Typography className={classes.title}>
                        What I do
                    </Typography>
                    <hr className={classes.break}/>
                    <Typography className={classes.sub}>
                        An ambitious web developer with a love for all things programming.
                    </Typography>
                    <br/><br/>
                    <IconList />
                    <br/><br/>
                    <Typography className={classes.sub}>
                        <i className={classNames(classes.icon, "fas fa-code")} /> Develop dynamic, mobile responsive web applications while maintaining a clean, reusable code base.
                    </Typography>
                    <br/>
                    <Typography className={classes.sub}>
                        <i className={classNames(classes.icon, "fas fa-code")} /> Follow modern architectures such as monorepos and micro front end module federations.
                    </Typography>
                </Grid>
            </PageWrapper>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    break: {
        backgroundColor: '#ff0080',
        height: '2px',
        border: 'none'
    },
    icon: {
        color: '#ff0080'
    },
    img: {
        width: '100%'
    },
    
    sub: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 20
    },
    title: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 40
    },
}));

export default About;