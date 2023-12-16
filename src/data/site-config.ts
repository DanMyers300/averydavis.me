export type Image = {
    src: string;
    alt?: string;
};

export type Link = {
    href: string;
    text: string;
};

export type SocialLink = Link & {
    icon: 'codepen' | 'dev' | 'facebook' | 'github' | 'instagram' | 'linkedin' | 'medium' | 'x-twitter';
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
    socialLinks?: SocialLink[];
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
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Payment',
            href: '/payment'
        },
        {
            text: 'Calendar',
            href: '/calendar'
        }
    ],
    secondaryNavLinks: [
        {
            text: 'About',
            href: '/about'
        },
        {
            text: 'Contact',
            href: '/contact'
        },
        {
            text: 'Payment',
            href: '/payment'
        },
        {
            text: 'Calendar',
            href: '/calendar'
        }
    ],
    // socialLinks: [
    //     {
    //         text: 'Follow on Instagram',
    //         href: 'https://instagram.com/',
    //         icon: 'instagram'
    //     },
    // ],
    hero: {
        title: 'Hi there!',
        text: "My name is Avery Davis! I'm a tutor and I love to help students learn.",
        avatar: {
            src: '/avatar.jpg',
            alt: 'Avery Davis'
        },
        backgroundImage: {
            src: '/hero.jpg'
        }
    },
    postsPerPage: 5
};

export default siteConfig;
