import React from 'react';
import { Link } from "react-scroll";
import { IconButton } from '@material-ui/core';
import { ArrowDropDownCircle } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';

const PageScrollButton = ({ section }) => {
    const classes = useStyles();

    return (
        <>
            <Link
                to={section}
                spy={true}
                smooth={true}
                duration={1000}
            >
                <IconButton className={classes.button}>
                    <ArrowDropDownCircle />
                </IconButton>
            </Link>
        </>
    );
}

const useStyles = makeStyles(theme => ({
    button: {
        color: 'whitesmoke',
        transition: "all 0.5s ease-in",
        "-moz-transition": "all 0.5s ease-in",
        "-o-transition": "all 0.5s ease-in",
        "-webkit-transition": "all 0.5s ease-in",
        '&:hover': {
            color: '#ff0080',
        },
        '& .MuiSvgIcon-root': {
            fontSize: '40px',
        }
    }
}));

export default PageScrollButton;