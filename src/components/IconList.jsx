import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const IconList = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.icon}>
                <i className="fab fa-html5" />   
            </div>
            <div className={classes.icon}>
                <i className="fab fa-css3" />    
            </div>
            <div className={classes.icon}>
                <i className="fab fa-js-square" />    
            </div>
            <div className={classes.icon}>
                <i className="fab fa-react" />    
            </div>
            <div className={classes.icon}>
                <i className="fab fa-node" />    
            </div>
            <div className={classes.icon}>
                <i className="fas fa-database" />    
            </div>
            <div className={classes.icon}>
                <i className="fab fa-java" />    
            </div>
            <div className={classes.icon}>
                <i className="fab fa-python" />    
            </div>
            <div className={classes.icon}>
                <i className="fab fa-atlassian" />    
            </div>
        </div>
    );
}

const useStyles = makeStyles(theme => ({
    icon: {
        fontSize: 50,
        color: '#ff0080',
        marginRight: '25px'
    },
    root: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
}));

export default IconList;