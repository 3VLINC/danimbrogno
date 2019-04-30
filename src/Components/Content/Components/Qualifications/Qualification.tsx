import * as React from 'react';
import { Typography } from '@material-ui/core';

export const Qualification: React.FC<{ qualification: string}> = (props) => {

    const { qualification } = props;
    
    return (
        <Typography variant="body1" gutterBottom>
            {qualification}
        </Typography>
    )
}