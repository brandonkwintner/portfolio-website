import React from 'react';
import { Link } from "react-scroll";
import { 
    Button,
    Typography 
} from '@material-ui/core';
import { ArrowRightAlt } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import classnames from 'classnames';
import Break from './Break';

const WelcomeText = () => {
    const classes = useStyles();

    return (
        <>
            <Typography className={classnames(classes.text, classes.main)}>
                Hi, I'm Brandon
            </Typography>
            <Break />
            <Typography className={classnames(classes.sub, classes.text)}>
                Full-stack developer with a passion for building elegant and modern web applications.
            </Typography>
            <br/>
            <Link
                to="About"
                spy={true}
                smooth={true}
                duration={1000}
            >
                <Button className={classes.button}>
                    <Typography className={classes.text}>
                        Learn About Me
                    </Typography>
                    <ArrowRightAlt />
                </Button>
            </Link>
        </>
    );
}
// fix hover color and stuff
const useStyles = makeStyles(theme => ({
    button: {
        background: "transparent",
        border: "2px solid whitesmoke",
        color: "whitesmoke",
        transition: "background 0.5s ease-in",
        "-moz-transition": "background 0.5s ease-in",
        "-o-transition": "background 0.5s ease-in",
        "-webkit-transition": "background 0.5s ease-in",
        "&:hover" : {
            background: '#ff0080'
        }
    },
    main: {
        fontSize: 100,
        [theme.breakpoints.down('xs')]: {
            fontSize: 40
        }
    },
    sub: {
        fontSize: 40,
        [theme.breakpoints.down('xs')]: {
            fontSize: 20
        }
    },
    text: {
        color: "whitesmoke",
        fontFamily: "'Poppins', sans-serif",
    }
}));

export default WelcomeText;