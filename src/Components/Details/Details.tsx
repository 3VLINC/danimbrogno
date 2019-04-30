import { useResume } from "../../Hooks/resume";
import * as React from 'react';
import { Typography, Theme } from "@material-ui/core";
import { AddressDisplay } from "../AddressDisplay";
import { GitHubIcon } from "../Icons/GitHubIcon";
import { Email, Phone, LocationCity } from '@material-ui/icons';
import { makeStyles } from "@material-ui/styles";
import { IconButton } from "../IconButton";

const useStyles = makeStyles((theme: Theme) => ({
    icon: {
        color: 'inherit',
        position: 'relative',
        top: -6
    },
    detail: {
        color: theme.palette.text.primary
    },
    link: {
        color: 'inherit',
        textDecoration: 'none'
    }
}));

export const Details: React.FC = () => {
    
    const { bio: { name, position, address, email, gitHub, phoneNumber } } = useResume();

    const classes = useStyles();

    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>{name}</Typography>
            <Typography variant="subtitle1" gutterBottom>{position}</Typography>
            <IconButton 
                icon={<LocationCity className={classes.icon} />} 
                text={
                (<Typography className={classes.detail} variant="body1" gutterBottom={true}>
                    <AddressDisplay address={address} />
                </Typography>)
                } 
            />
            <a className={classes.link} href={`mailto:${email}`}>
                <IconButton 
                icon={<Email className={classes.icon} />} 
                text={
                    <Typography className={classes.detail} variant="body1" gutterBottom={true}>{email}</Typography>
                } 
                />
            </a>
            <a className={classes.link} href={`https://github.com/${gitHub}`}>
                <IconButton 
                    icon={<GitHubIcon className={classes.icon} />} 
                    text={<Typography className={classes.detail} variant="body1" gutterBottom={true}>{gitHub}</Typography>} 
                />
            </a>
            <a className={classes.link} href={`tel://${phoneNumber}`}>
                <IconButton 
                    icon={<Phone className={classes.icon} />} 
                    text={<Typography className={classes.detail} variant="body1" gutterBottom={true}>{phoneNumber}</Typography>} />
            </a>
        </React.Fragment>
    )
}