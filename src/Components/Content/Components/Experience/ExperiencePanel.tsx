import * as React from 'react';
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

export interface ExperiencePanelProps {
    topLeft: React.ReactNode;
    topRight: React.ReactNode;
    bottom?: React.ReactNode;
}

const useStyles = makeStyles(()=> ({
    root: {
        '@media print': {
            pageBreakAfter: 'always'
        }
    },
    topRight: {
        textAlign: 'right'
    }
}))

export const ExperiencePanel: React.FC<ExperiencePanelProps> = ({ topLeft, topRight, bottom}) => {
   
    const classes = useStyles();

    const bottomArea = (bottom) ?
        (
            <Grid container justify="space-between" spacing={16}>
                <Grid item xs={12}>
                    {bottom}
                </Grid>
            </Grid>
        ): null;

    return (
        <React.Fragment>
            <Grid container justify="space-between" alignItems="center" spacing={16}>
                <Grid item xs={6}>
                    {topLeft}
                </Grid>
                <Grid item xs={6} className={classes.topRight}>
                    {topRight}
                </Grid>
            </Grid>
            {bottomArea}
        </React.Fragment>
    )

}