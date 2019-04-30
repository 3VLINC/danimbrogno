import * as React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Grid } from '@material-ui/core';
import { Content } from './Content/Content';
import { Details } from './Details/Details';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        height: '100%',
        minHeight: 0,
        '@media print': {
            height: 'auto'
        }
    },
    insideLeft: {
        height: '100%',
        padding: spacing.unit * 4,
        paddingRight: spacing.unit * 2
    },
    insideRight: {
        height: '100%',
        padding: spacing.unit * 4,
        paddingLeft: spacing.unit * 2
    },
    details: {
        height: '100%',
        minHeight: 0,
        overflowY: 'auto',
        '@media print': {
            height: 'auto'
        }
    },
    content: {
        height: '100%',
        minHeight: 0,
        overflowY: 'auto',
        '@media print': {
            height: 'auto'
        }
    }
}));

export const Page: React.FC = (props) => {

    const classes = useStyles();

    return (
        
        <Grid className={classes.root} container spacing={16} alignItems="stretch">
            <Grid className={classes.details} item xs={4}>
                <div className={classes.insideLeft}>
                    <Details />
                </div>
            </Grid>
            <Grid className={classes.content} item xs={8}>
                <div className={classes.insideRight}>
                    <Content />
                </div>
            </Grid>
        </Grid>
    );

}