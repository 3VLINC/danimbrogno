import * as React from 'react';
import { EducationExperience } from '../../../../app.interface';
import { Typography } from '@material-ui/core';
import { AddressDisplay } from '../../../AddressDisplay';
import { DateRangeDisplay } from '../../../DateRangeDisplay';
import { ExperiencePanel } from './ExperiencePanel';

export const EducationExperienceDisplay: React.FC<{ experience: EducationExperience}> = (props) => {

    const { experience: { institution, program, address, dateRange } } = props;

    return (
        <ExperiencePanel
            topLeft={
                <React.Fragment>
                    <Typography variant="h2" gutterBottom>
                        {institution}
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        {program}
                    </Typography>
                </React.Fragment>
            }
            topRight={
                <React.Fragment>
                    <Typography variant="body1" gutterBottom>
                        <DateRangeDisplay dateRange={dateRange} />
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        <AddressDisplay address={address} />
                    </Typography>
                </React.Fragment>
            }
        />    
    );
    
}