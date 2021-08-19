import React from 'react';
import { Grid } from '@material-ui/core';

/**
 * Ensures side margin is consistent throughout application.
 */
const PageWrapper = (props) => {
    return (
        <Grid 
            container
            justifyContent="center"
            alignItems="center"
        >
            <Grid
                item
                xs={11}
                md={9}
            >
                <Grid
                    container
                    direction={props.direction}
                    justifyContent="center"
                >
                    {props.children}
                </Grid>
            </Grid>
        </Grid>
    );
}
export default PageWrapper;