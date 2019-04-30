import * as React from 'react';
import { useResume } from '../../../../Hooks/resume';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(({spacing}) => ({
    section: {
        '&:not(:last-child)': {
            marginBottom: spacing.unit * 2
        }
    }
}));

export const Technologies: React.FC = () => {

    const { technologies: { languages, frameworks, apis, databases, buildTools, cloudServices } } = useResume();

    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h1" gutterBottom>Technologies</Typography>
            <div className={classes.section}>
                <Typography variant="h2" gutterBottom>Languages</Typography>
                <Typography variant="body1">{languages.join(', ')}</Typography>
            </div>
            <div className={classes.section}>
                <Typography variant="h2" gutterBottom>Frameworks</Typography>
                <Typography variant="body1">{frameworks.join(', ')}</Typography>
            </div>
            <div className={classes.section}>
                <Typography variant="h2" gutterBottom>APIs</Typography>
                <Typography variant="body1">{apis.join(', ')}</Typography>
            </div>
            <div className={classes.section}>
                <Typography variant="h2" gutterBottom>Databases</Typography>
                <Typography variant="body1">{databases.join(', ')}</Typography>
            </div>
            <div className={classes.section}>
                <Typography variant="h2" gutterBottom>Build Tools</Typography>
                <Typography variant="body1">{buildTools.join(', ')}</Typography>
            </div>
            <div className={classes.section}>
                <Typography variant="h2" gutterBottom>Cloud Services</Typography>
                <Typography variant="body1">{cloudServices.join(', ')}</Typography>
            </div>
        </React.Fragment>
    )
}