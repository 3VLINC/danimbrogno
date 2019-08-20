import { Resume } from "../app.interface";

export const resume: Resume = {
    bio: {
        address: {
            city: 'Chelsea',
            province: 'Quebec'
        },
        email: 'dan.imbrogno@gmail.com',
        name: 'Dan Imbrogno',
        phoneNumber: '289 937-1864',
        position: 'Startup CTO and Full Stack Developer',
        gitHub: '3VLInc'
        
    },
    qualifications: [
        'Ability to apply creative and critical thinking to develop technical solutions to solve problems',
        'Self motivated, early adopter of new technologies, comfortable working independently or in team settings',
        'Excellent communication skills, experience managing people',
        '13 years experience designing, developing and deploying web applications',
        'Demonstrable proficiency in user interface design, development of single page applications, design of APIs, development of scalable backend applications, design of databases, development of build tools for continuous integration and automated deployment'
    ],
    experience: [
        {
            address: {
                city: 'Ottawa',
                province: 'Ontario'
            },
            company: 'FreightPath',
            dateRange: {
                from: '2017',
                to: 'present'
            },
            position: 'CTO / Partner',
            summary: [
                `Designed and developed a commercial freight automation tool which includes web and mobile apps along with a suite of microservices using React, React Native and Node JS`,
                `Developed CI deployment process with test automation, containerization and deployment to docker swarm`,
                `Assisted in project planning, product design, business development`,
                `Hired and mentored the development team`,
            ]   
        },
        {
            address: {
                city: 'Wakefield',
                province: 'Quebec'
            },
            company: 'Independent Study',
            dateRange: {
                from: '2015',
                to: '2017' 
            },
            position: 'Self Employed',
            summary: [
                'Worked on a personal project and improved web application development skills using NodeJS, Postgres, Angular 2, GraphQL and Docker'
            ]
        },
        {
            address: {
                city: 'Toronto',
                province: 'Ontario'
            },
            company: '3VL INC.',
            position: 'Founder',
            summary: [
                `Founded boutique digital experience agency providing web design, application development and social media marketing services to business`,
                `Grew company to > 200k annual revenue. Hired two employees`,
                `Built custom themes, plugins, e-commerce solutions and digital contests primarily using PHP and the WordPress publishing platform`
            ],
            dateRange: {
                from: '2013',
                to: '2015'
            }
        },
        {
            address: {
                city: 'Ottawa',
                province: 'Ontario'
            },
            position: 'Co-founder',
            company: 'Umbrella Network Inc.',
            summary: [
                `Co-founded WordPress agency providing theme and plugin design and development services to business`,
                `Built platform to host movie theatre websites and recruited four theatres to purchase monthly plans`
            ],
            dateRange: {
                from: '2008',
                to: '2012'
            }
        },
        {
            address: {
                city: 'Guanacaste',
                province: 'Costa Rica'
            },
            position: 'Web developer',
            company: 'Unidad 22',
            summary: [
                `8 month co-op placement working for web design agency in Costa Rica`,
                `Developed websites for the tourism and real estate industry built on WordPress and Joomla`,
                `Learned Spanish`
            ],
            dateRange: {
                from: '2008',
                to: '2012'
            }
        },
        {
            address: {
                city: 'Ottawa',
                province: 'Ontario'
            },
            institution: 'Carleton University',
            program: 'Bachelor of Information Technology',
            dateRange: {
                from: '2004',
                to: '2009'
            }
        }
    ],
    technologies: {
        languages: [
            'Javascript',
            'Typescript',
            'NodeJS',
            'PHP',
            'ASP.net',
            'HTMLA',
            'CSS'
        ],
        apis: ['GraphQL', 'Rest'],
        buildTools: ['Webpack', 'Grunt', 'Gulp', 'Babel'],
        databases: ['Postgres', 'Mysql', 'Mongodb'],
        deployment: ['Docker', 'Vagrant', 'SaltStack'],
        cloudServices: ['AWS', 'Digital Ocean', 'Aiven', 'Travis CI', 'Circle CI', 'Cloudflare'],
        frameworks: ['React', 'React Native', 'Expo', 'Angular', 'NestJS', 'Material UI', 'Apollo', 'RabbitMQ', 'Laravel', 'WordPress']

    }
};

export const useResume = () => resume;