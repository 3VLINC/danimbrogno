import * as React from 'react';
import { makeStyles } from "@material-ui/styles";
import { Grid, Theme } from '@material-ui/core';
import { Content } from './Content/Content';
import { Details } from './Details/Details';

const useStyles = makeStyles(({ spacing, palette }: Theme) => ({
    root: {
        height: '100%',
        minHeight: 0,
        '@media print': {
            height: 'auto'
        }
    },
    insideLeft: {
        padding: spacing.unit * 4,
        paddingRight: spacing.unit * 4
    },
    insideRight: {
        padding: spacing.unit * 5,
        paddingLeft: spacing.unit * 4
    },
    details: {
        height: '100%',
        minHeight: 0,
        overflowY: 'scroll',
        overflowX: 'hidden',
        backgroundColor: palette.primary.main,
        color: palette.primary.contrastText,
        '-webkit-overflow-scrolling': 'touch',
        '@media print': {
            height: 'auto',
            flex: 1
        }
    },
    content: {
        height: '100%',
        minHeight: 0,
        overflowY: 'scroll',
        '-webkit-overflow-scrolling': 'touch',
        '@media print': {
            height: 'auto',
            flex: 2
        }
    }
}));

export const Page: React.FC = (props) => {

    const classes = useStyles();

    return (
        
        <Grid className={classes.root} container spacing={0} alignItems="stretch">
            <Grid className={classes.details} item xs={12} sm={4}>
                <div className={classes.insideLeft}>
                    <Details />
                </div>
            </Grid>
            <Grid className={classes.content} item xs={12} sm={8}>
                <div className={classes.insideRight}>
                    <Content />
                </div>
            </Grid>
        </Grid>
    );

}