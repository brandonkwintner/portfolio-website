import React from 'react';
import { 
    Grid,
    Typography 
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PageWrapper from '../components/PageWrapper';
import SkillList from '../components/SkillList';
import responsive from '../assets/responsive.gif';

const Skills = () => {
    const classes = useStyles();

    return (
        <div 
            className={classes.root}
            id="Skills"
        >
            <br/><br/><br/><br/><br/><br/><br/><br/><br/>
            <PageWrapper direction="row-reverse">
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <img
                        className={classes.img}
                        alt="responsive"
                        src={responsive}
                    />
                </Grid>
                <Grid
                    item
                    xs={12}
                    md={6}
                >
                    <Typography className={classes.title}>
                        Proficiency
                    </Typography>
                    <hr className={classes.break}/>
                    <SkillList />
                </Grid>
            </PageWrapper>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    break: {
        backgroundColor: 'whitesmoke',
        height: '2px',
        border: 'none'
    },
    img: {
        width: '100%'
    },
    root: {
        backgroundImage: 'linear-gradient(4deg, #22313F 85%, white calc(85% + 2px))',
        marginTop: '-75px'
    },
    title: {
        fontFamily: "'Poppins', sans-serif",
        color: 'whitesmoke',
        fontSize: 40
    },
}));

export default Skills;