import { useResume } from "../../Hooks/resume";
import * as React from 'react';
import { Typography, Theme, Divider, Avatar, Grid } from "@material-ui/core";
import { GitHubIcon } from "../Icons/GitHubIcon";
import { Email, Phone } from '@material-ui/icons';
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        color: 'inherit',
        position: 'relative',
        top: -6,
        width: 24,
        height: 24
    },
    detail: {
        color: 'inherit',
        fontSize: 14
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    },
    divider: {
        marginBottom: theme.spacing.unit * 2
    },
    header: {
        textAlign: 'center'
    },
    avatar: {
        height: 128,
        width: 128,
        margin: '0 auto'
    }
}));

export const Details: React.FC = () => {
    
    const { bio: { name, position, email, gitHub, phoneNumber } } = useResume();

    const classes = useStyles();

    return (
        <React.Fragment>
            <div className={classes.header}>
                <Avatar className={classes.avatar} alt={name} src="/photo.jpg" />
                <Typography variant="h6" color="inherit" gutterBottom>{name}</Typography>
                <Typography variant="subtitle1" color="inherit" gutterBottom>{position}</Typography>
            </div>
            <Divider className={classes.divider} color="inherit" />
            <Grid container justify="space-around" alignItems="center" spacing={0}>
                <Grid item xs='auto'>
                    <a className={classes.link} href={`mailto:${email}`}>
                        <Email className={classes.icon} />
                    </a>
                </Grid>
                <Grid item xs='auto'>
                    <a className={classes.link} href={`https://github.com/${gitHub}`}>
                        <GitHubIcon className={classes.icon} />
                    </a>
                </Grid>
                <Grid item xs='auto'>
                    <a className={classes.link} href={`tel://${phoneNumber}`}>
                        <Phone className={classes.icon} />
                    </a>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}