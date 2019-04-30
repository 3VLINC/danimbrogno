import * as React from 'react';
import { useResume } from '../../../../Hooks/resume';
import { Experience } from './Experience';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({spacing}) => ({
    section: {
        '&:not(:last-child)': {
            marginBottom: spacing.unit * 8
        }
    }
}) )
export const Experiences: React.FC = () => {

    const { experience } = useResume();

    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h1" gutterBottom>Experience</Typography>
            {experience.map(
                (theExperience, key) => 
                    (
                        <div className={classes.section} key={key}>
                            <Experience experience={theExperience} />
                        </div>
                    )
            )}
        </React.Fragment>
    )
}