import React from 'react';
import { makeStyles } from '@material-ui/core';

const Break = () => {
    const classes = useStyles();

    return (
        <hr className={classes.break}/>
    );
}

const useStyles = makeStyles(theme => ({
    break: {
        backgroundColor: '#ff0080',
        height: '2px',
        border: 'none'
    },
}));

export default Break;
