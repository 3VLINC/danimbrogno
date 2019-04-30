import * as React from 'react';
import { useResume } from '../../../../Hooks/resume';
import { Qualification } from './Qualification';
import { Typography } from '@material-ui/core';

export const Qualifications: React.FC = () => {

    const { qualifications } = useResume();

    return (
        <React.Fragment>
            <Typography variant="h1" gutterBottom>Qualifications</Typography>
            {qualifications.map(
                (qualification, key) => <Qualification qualification={qualification} key={key} />
            )}
        </React.Fragment>
    )
}