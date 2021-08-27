import React from 'react';
import { 
    Button,
    Grid,
    Typography
} from '@material-ui/core';
import {
    Phone,
    Email,
    LinkedIn
} from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import PageWrapper from '../components/PageWrapper';

import send from '../assets/send.gif';
import resume from "../assets/Resume_Brandon_Kwintner.pdf";


const Contact = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <PageWrapper direction="row-reverse">
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <br/>
                    <img
                        className={classes.img}
                        alt="send"
                        src={send}
                    />
                    <br/><br/>
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <br/><br/><br/>
                    <Typography className={classes.title}>
                        Connect With Me
                    </Typography>
                    <hr className={classes.break} />
                    <div style={{display: 'flex'}}>
                        <Phone className={classes.icon}/>
                        <Typography className={classes.pg}>
                            (732) 513-2795
                        </Typography>
                    </div>
                    <br/>
                    <div style={{display: 'flex'}}>
                        <Email className={classes.icon}/>
                        <Typography className={classes.pg}>
                            brandon.kwintner@gmail.com
                        </Typography>
                    </div>
                    <br/>
                    <div style={{display: 'flex'}}>
                        <a className={classes.icon} href="https://www.linkedin.com/in/brandonkwintner/" rel="noreferrer" target="_blank">
                            <LinkedIn className={classes.icon}/>
                        </a>
                        <br/>
                        <Button
                            className={classes.button}
                            variant="contained"
                        >
                            <a className={classes.buttonText} href={resume} download>
                                Resume
                            </a>
                        </Button>
                    </div>
                    <br/>
                    <div className={classes.quoteWrapper}>
                        <Typography className={classes.quote}>
                            “<i>Learning is not attained by chance. It must be sought for with ardor and attended with diligence.</i>” - Abigail Adams
                        </Typography>
                    </div>
                    <br/><br/>
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
    button: {
        backgroundColor: '#ff0080',
        padding: '5px 20px',
        height: '30px',
        marginLeft: '25px',
        marginTop: '5px',
        '&:hover': {
            backgroundColor: '#ff0080',
        }
    },
    buttonText: {
        color: '#22313F',
        fontFamily: "'Poppins', sans-serif",
        textDecoration: 'none',
        fontWeight: 900
    },
    icon: {
        color: '#ff0080',
        fontSize: '40px'
    },
    img: {
        width: '60%',
        [theme.breakpoints.down('xs')]: {
            width: '80%'
        },
        display: 'block',
        margin: '0 auto'
    },
    pg: {
        fontSize: '15px',
        color: 'whitesmoke',
        fontFamily: "'Poppins', sans-serif",
        marginLeft: '10px',
        marginTop: '10px'
    },
    quote: {
        fontFamily: "'Poppins', sans-serif",
        color: 'whitesmoke',
        fontSize: 25,
    },
    quoteWrapper: {
        paddingRight: 20
    },
    root: {
        backgroundColor: '#22313F',
    },
    title: {
        color: 'whitesmoke',
        fontFamily: "'Poppins', sans-serif",
        fontSize: 40
    },
}));

export default Contact;