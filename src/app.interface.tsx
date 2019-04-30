export interface Address {
    city: string;
    province: string;
}

export interface DateRange {
    from: string;
    to: string;
}

export interface Resume {
    bio: {
        name: string;
        position: string;
        address: Address,
        phoneNumber: string;
        email: string;
        gitHub: string;
    },
    qualifications: string[];
    experience: Array<WorkExperience | EducationExperience>;
    technologies: {
        languages: string[];
        databases: string[];
        apis: string[];
        frameworks: string[];
        buildTools: string[];
        deployment: string[];
        cloudServices: string[];
    };
}

export interface WorkExperience {
    company: string;
    position: string;
    dateRange: DateRange;
    address: Address;
    summary: string[];
}

export interface EducationExperience {
    institution: string;
    program: string;
    dateRange: DateRange;
    address: Address
}
