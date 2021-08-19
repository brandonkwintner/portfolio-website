import React from 'react';
import {
    Grid,
    Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PageWrapper from '../components/PageWrapper';
import VerticalTimeline from '../components/VerticalTimeline';

const Experience = () => {
    const classes = useStyles();

    return (
        <div 
            className={classes.root}
            id="Experience"
        >
            <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <div className={classes.extraBreak}>
                <br/><br/><br/><br/><br/><br/><br/><br/>
            </div>
            <PageWrapper direction="row">
                <Grid
                    item
                    xs={12}
                >
                   <Typography className={classes.title}>
                        Experience
                    </Typography>
                    <hr className={classes.break}/>
                    <br/>
                    <VerticalTimeline />
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
    extraBreak: {
        display: 'none',
        [theme.breakpoints.down('xs')]: {
            display: 'block'
        }
    },
    root: {
        backgroundImage: 'linear-gradient(4deg, white 85%, #22313F calc(85% + 2px))',
        marginTop: '-75px',
        [theme.breakpoints.down('xs')]: {
            marginTop: '-200px'
        },
        minHeight: '1500px',
    },
    title: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 40
    },
}));

export default Experience;