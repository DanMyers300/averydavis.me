export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type Hero = {
    title?: string;
    text?: string;
    avatar?: Image;
    backgroundImage?: Image;
};

export type Service = {
    title: string;
    description: string;
    image: Image;
    url: string;
};

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    primaryNavLinks?: Link[];
    services?: Service[];
    hero?: Hero;
    postsPerPage?: number;
};

const siteConfig: SiteConfig = {
    logo: {
        src: '/favicon.ico',
        alt: 'Avery Logo'
    },
    title: 'Avery Davis',
    description: 'Avery Davis Tutoring',
    image: {
        src: '/hero.jpg',
        alt: 'Avery Davis Tutoring'
    },
    primaryNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Services',
            href: '/services'
        },
        {
            text: 'Why me?',
            href: '/why_me'
        },
        {
            text: 'Schedule',
            href: '/schedule'
        },
        {
            text: 'Payment',
            href: '/payment'
        }
    ],
    hero: {
        title: 'Hello',
        text: 'I\'m Avery Davis',
        avatar: {
            src: '/avatar.jpg',
            alt: 'Avery Davis'
        },
        backgroundImage: {
            src: '/hero.jpg'
        }
    },
    services: [
        {
            title: 'Academic Tutoring',
            description: ' Academic tutoring is for students struggling with just the material in a class. If your student is doing well in most classes, isn’t forgetting to turn in or submit assignments, and is just struggling with the curriculum, Academic Tutoring will focus on honing their understanding of a particular subject.',
            image: {
                src: 'https://media.pivotalnow.org/190/1.jpeg',
                alt: 'Academic Tutoring'
            },
            url: '/services/academic-tutoring',
        },
        {
            title: 'Academic Coaching',
            description: 'Academic Coaching is for students who need extra help with organization and building executive functioning skills! Executive functioning consists of: Attention, Planning, Organization, Self-Control, Time-Management, and Working Memory. If your student needs more help in these domains, Academic Coaching may be a better fit. We will focus on how the student keeps track of assignments, upcoming exams, and extracurriculars; Study skills and when to start studying for an upcoming exam; and how the student keeps their various classes organized.',
            image: {
                src: 'https://www.academicapproach.com/wp-content/uploads/2023/12/academichabits.png',
                alt: 'Academic Coaching'
            },
            url: '/services/academic-coaching',
        }
    ],
};

export default siteConfig;
