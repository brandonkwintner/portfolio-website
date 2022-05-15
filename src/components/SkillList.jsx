import React from 'react';
import ProgressBar from 'react-animated-progress-bar';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const list = [
    {
        skill: "React",
        percentage: "100"
    },
    {
        skill: "JavaScript / TypeScript",
        percentage: "100"
    },
    {
        skill: "Java",
        percentage: "95"
    },
    {
        skill: "UI / UX Design",
        percentage: "90"
    },
    {
        skill: "Node / Express",
        percentage: "90"
    },
    {
        skill: "Python",
        percentage: "80"
    },
    {
        skill: "NoSQL / SQL",
        percentage: "75"
    },
]

const SkillList = () => {
    return (
        <>
            {list.map((curr) => (
                <Skill 
                    percentage={curr.percentage}
                    skill={curr.skill}
                />
            ))}
        </>
    );
}

const Skill = ({ percentage, skill }) => {
    const classes = useStyles();

    return (
        <div>
            <Typography className={classes.skillName}>
                {skill}
            </Typography>
            <ProgressBar
                width="100%"
                height="10px"
                rect
                fontColor="whitesmoke"
                percentage={percentage}
                rectPadding="2px"
                rectBorderRadius="20px"
                trackPathColor="transparent"
                defColor={{
                    fair: '#ff0080',
                    good: '#ff0080',
                    excellent: '#ff0080',
                    poor: '#ff0080',
                }}
                trackBorderColor="whitesmoke"
            />
            <br/>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    skillName: {
        fontFamily: "'Poppins', sans-serif",
        color: 'whitesmoke',
        marginBottom: '-15px'
    }
}))

export default SkillList;