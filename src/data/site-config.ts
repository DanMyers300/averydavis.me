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

export type SiteConfig = {
    logo?: Image;
    title: string;
    description: string;
    image?: Image;
    primaryNavLinks?: Link[];
    secondaryNavLinks?: Link[];
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
            text: 'About',
            href: '/about'
        },
        {
            text: 'FAQ',
            href: '/faq'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Services',
            href: '/services'
        },
    ],
    hero: {
        title: 'Hello, I\'m Avery Davis',
        text: "I'm an academic tutor and coach based in Dallas, TX, with two years of experience dedicated to helping students boost their confidence and improve their academic abilities",
        avatar: {
            src: '/avatar.jpg',
            alt: 'Avery Davis'
        },
        backgroundImage: {
            src: '/hero.jpg'
        }
    },
};

export default siteConfig;
