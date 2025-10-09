// i should probably convert this to some kind of db entry with an api call, but for now its small enough to just include in the component.
export const navLinks = [
        {
            id: 1,
            name: 'home',
            label: 'Sup.',
            href: '/'
        },
        {
            name: 'works',
            label: 'Works',
            href: '/works'
        }
        // {
        //     name: 'about',
        //     label: 'About',
        //     href: '/about'
        // },
        // {
        //     name: 'cv',
        //     label: 'CV',
        //     href: '/cv'
        // }
];

export const selectedWorks = [
	{
        id: 1,
        title: 'Improving admin property creation and editing experiences',
        preview: 'Rethinking the overall workflow of creating and editing properties in HubSpot\'s CRM to reduce CS and operating overhead and prepare for a more integrated and scalable future.',
        private: '',
        testing: '',
        inDev: '',
        beta: 'true',
        shipped: 'true',  
        freelance:'',
        date: '2024',
        slug: 'create-edit',
        staticHref:'/works/hubspot/create-edit',
        target: '_self',
        team: 'HubSpot'
    },
    {
        id: 2,
        title: 'Introducing a custom formular editor for calculated properties',
        preview: 'Reducing years of pain related to creating custom properties in HubSpot by adding a more powerful, flexible, and (soon-ish!) smarter experience.',
        private: '',
        testing: '',
        inDev: '',
        beta: '',
        shipped: 'true',  
        freelance:'',
        date: '2023',
        slug: 'formula-editor',
        staticHref:'/works/hubspot/formula-editor',
        target: '_self',
        team: 'HubSpot'
    },
    {
        id: 3,
        title: 'Remedying the pain of managing custom properties',
        preview: 'Fixing some long-standing, low-risk issues with high rewards on both sides and planning for a future backlog of opportunities with greater rewards.',
        private: '',
        testing: '',
        inDev: '',
        beta: 'true',
        shipped: '',  
        freelance:'',
        date: '2024',
        staticHref:'',
        target: '_self',
        team: 'HubSpot'
    },
    {
        id: 4,
        title: 'Building the foundations for Buoy',
        preview: 'Starting from square one and architecting a system to solve issues related to platform scalability, velocity, communication, and consistency for the distributed product development team at Whalar.',
        private: 'true',
        testing: '',
        inDev: 'true',
        beta: '',
        shipped: '',  
        freelance:'',
        date: '2025',
        staticHref:'',
        target: '_self',
        team: 'Whalar'
    }
];

export const resourceList = [
    {
        id: 1,
        name: 'The UX Gesture Kit',
        platform: 'Figma',
        platformIcon: 'brandFigmaOutlined',
        detail: 'A simple community library for pointer and touch gestures.',
        url: 'https://www.figma.com/community/file/1098810879785324342'
    },
    {
        id: 2,
        name: 'Design Markup Library',
        platform: 'Figma',
        platformIcon: 'brandFigmaOutlined',
        detail: 'Cards, sections, labels, etc...hopefully all the utils you need to markup a doc for handoff or to start a conversation. Still in progress, but what project isn\'t these days?',
        url: 'https://www.figma.com/design/nn4n2uUKNuucx5M5bga7Ky/Design-Markup-Helpers?node-id=76-3645'
    },
    {
        id: 3,
        name: 'The Lonely UXers Discord',
        platform: 'Discord',
        platformIcon: 'brandDiscord',
        detail: 'What started as a random COVID-era Zoom coffee meetup for solo designers at startups in various countries later became a community for those of us that have been on our own or are starting out in our careers.',
        url: 'https://discord.gg/AdqW5S8'
    },
    {
        id: 4,
        name: 'Design Operating System',
        platform: 'Figma',
        platformIcon: 'brandFigmaOutlined',
        detail: 'Sometimes Figma docs are complicated to follow. This one-sheet hopes to provide some clarity and be a source of truth. Still a WIP.',
        url: '',
        state: 'wip'

    }
];