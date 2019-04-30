import * as React from 'react';
import { WorkExperience } from '../../../../app.interface';
import { Typography } from '@material-ui/core';
import { DateRangeDisplay } from '../../../DateRangeDisplay';
import { AddressDisplay } from '../../../AddressDisplay';
import { ExperiencePanel } from './ExperiencePanel';

export const WorkExperienceDisplay: React.FC<{ experience: WorkExperience}> = (props) => {

    const { experience: { company, position, address, dateRange, summary } } = props;

    return (
        <ExperiencePanel
            topLeft={
                <React.Fragment>
                    <Typography variant="h2" gutterBottom>
                        {company}
                    </Typography>
                    <Typography variant="h3" gutterBottom>
                        {position}
                    </Typography>
                </React.Fragment>
            }
            topRight={
                <React.Fragment>
                    <Typography variant="body1">
                        <DateRangeDisplay dateRange={dateRange} />
                    </Typography>
                    <Typography variant="body1">
                        <AddressDisplay address={address} />
                    </Typography>
                </React.Fragment>
            }
            bottom={
                <React.Fragment>
                    {summary.map(
                        (theSummary, key) => (
                            <Typography key={key} variant="body1" gutterBottom>
                                {theSummary}
                            </Typography>
                        )
                    )}
                </React.Fragment>
            }
        />
    );
    
}