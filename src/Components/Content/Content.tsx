import * as React from 'react';
import { Experiences } from './Components/Experience/Experiences';
import { Qualifications } from './Components/Qualifications/Qualifications';
import { Technologies } from './Components/Technologies/Technologies';
import { makeStyles } from '@material-ui/styles';
import { References } from './Components/References';

const useStyles = makeStyles(({ spacing }) => ({
    root: {
        maxWidth: 800
    },
    section: {
        '&:not(:last-child)': {
            marginBottom: spacing.unit * 8
        }
    }
}));

export const Content: React.FC = () => {

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div className={classes.section}>
                <Qualifications />
            </div>
            <div className={classes.section}>
                <Experiences />
            </div>
            <div className={classes.section}>
                <Technologies />
            </div>
            <div className={classes.section}>
                <References />
            </div>
        </div>
    )
}