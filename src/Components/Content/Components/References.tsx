import * as React from 'react';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        textAlign: 'center'
    }
}));

export const References: React.FC = () => {

    const classes = useStyles();

    return (<Typography className={classes.root} variant="body1">References Available Upon Request</Typography>);

}