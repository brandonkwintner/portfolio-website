import React from 'react';
import ParticlesBg from 'particles-bg';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import PageWrapper from '../components/PageWrapper';
import WelcomeText from '../components/WelcomeText';
import PageScrollButton from '../components/PageScrollButton';

const Landing = () => {
    const classes = useStyles();

    return (
        <>
            <ParticlesBg 
                type="lines"
                bg={true}
            />
            <PageWrapper>
                <Grid
                    item
                    xs={12}
                >
                    <div className={classes.root}>
                        <WelcomeText />
                    </div>
                    <div className={classes.bottomContainer}>
                        <PageScrollButton section="About" />
                    </div>
                </Grid>
            </PageWrapper>
        </>
    );
}

const useStyles = makeStyles(theme => ({
    bottomContainer: {
        marginTop: '-60px',
        verticalAlign: "bottom",
        textAlign: "center"
    },
    container: {
        verticalAlign: "middle",
        textAlign: "left"
    },
    root: {
        display: "table-cell",
        height: "100vh",
        verticalAlign:"middle"
    }
}));

export default Landing;