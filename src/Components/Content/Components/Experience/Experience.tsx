import * as React from 'react';
import { WorkExperience, EducationExperience } from '../../../../app.interface';
import { WorkExperienceDisplay } from './WorkExperienceDisplay';
import { EducationExperienceDisplay } from './EducationExperienceDisplay';

export const Experience: React.FC<{ experience: WorkExperience | EducationExperience}> = (props) => {

    const { experience } = props;
    
    const isWorkExperience = (theExperience: WorkExperience | EducationExperience): theExperience is WorkExperience => {
        
        return ((theExperience as WorkExperience).company) ? true : false;

    }


    return (isWorkExperience(experience)) ?
        <WorkExperienceDisplay experience={experience} /> : <EducationExperienceDisplay experience={experience} />;

}