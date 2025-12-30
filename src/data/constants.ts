// i should probably convert this to some kind of db entry with an api call, but for now its small enough to just include in the component.
export const navLinks = [
  {
      name: 'works',
      label: 'Works',
      href: '/works'
  },
  {
      name: 'about',
      label: 'About',
      href: '/about'
  },
  {
      name: 'cv',
      label: 'CV',
      href: '/cv'
  }
];

export const socialLinks = [
  {
    id: 1,
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/zpfreed',
  },
  {
    id: 2,
    platform: 'Figma',
    url: 'https://figma.com/@ponchofreedo',
  },
  {
    id: 3,
    platform: 'GitHub',
    url: 'https://github.com/ponchofreedo',
  },
  {
    id: 4,
    platform: 'Dribbble',
    url: 'https://dribbble.com/ponchofreedo',
  },
  {
    id: 5,
    platform: 'Instagram',
    url: 'https://instagram.com/ponchofreedo',
  },
  // {
  //   id: 6,
  //   platform: 'Bluesky',
  //   url: 'https://bsky.app/profile/ponchofreedo.bsky.social',
  // },
];

export const selectedWorks = [
	{
    id: 1,
    title: 'Streamlining CRM data property management experiences',
    preview: 'Solving customer pains, driving adoption, and reducing overhead costs by rethinking a core data management workflow in HubSpot\'s CRM.',
    private: '',
    testing: '',
    inDev: '',
    beta: 'true',
    shipped: 'true',
    freelance:'',
    date: '2024',
    slug: 'create-edit',
    staticHref:'/works/hubspot/create-edit',
    heroImg: 'hero__list.jpg',
    target: '_self',
    team: 'HubSpot'
},
{
    id: 2,
    title: 'Improving retention and trust with a new calculated formula tester',
    preview: 'Customers couldn\'t validate their work and were going elsewhere, even leaving the platform, so I introduced a solution to build their confidence.',
    private: '',
    testing: '',
    inDev: '',
    beta: '',
    shipped: 'true',
    freelance:'',
    date: '2023',
    slug: 'formula-tester',
    staticHref:'/works/hubspot/formula-tester',
    target: '_self',
    team: 'HubSpot'
},
// {
//     id: 2,
//     title: 'Introducing a custom formular editor for calculated properties',
//     preview: 'Reducing years of pain related to creating custom properties in HubSpot by adding a more powerful, flexible, and (soon-ish!) smarter experience.',
//     private: '',
//     testing: '',
//     inDev: '',
//     beta: '',
//     shipped: 'true',
//     freelance:'',
//     date: '2023',
//     slug: 'formula-editor',
//     staticHref:'/works/hubspot/formula-editor',
//     target: '_self',
//     team: 'HubSpot'
// },
// {
//     id: 3,
//     title: 'Remedying the pain of managing custom properties',
//     preview: 'Fixing some long-standing, low-risk issues with high rewards on both sides and planning for a future backlog of opportunities with greater rewards.',
//     private: '',
//     testing: '',
//     inDev: '',
//     beta: 'true',
//     shipped: '',
//     freelance:'',
//     date: '2024',
//     staticHref:'',
//     target: '_self',
//     team: 'HubSpot'
// },
// {
//     id: 4,
//     title: 'Building the basics for Buoy, the design system behind Whalar\'s Foam platform',
//     preview: 'Re-architecting a multi-layered mess in Figma to unify design standards, improve velocity, and foster better communication for a globally distributed product development team.',
//     private: '',
//     testing: '',
//     inDev: 'true',
//     beta: '',
//     shipped: '',
//     freelance:'true',
//     date: '2025',
//     slug: 'buoy-foundations',
//     staticHref:'/works/whalar/buoy-foundations',
//     heroImg: 'hero__list.jpg',
//     target: '_self',
//     team: 'Whalar'
// }
];

export const experienceList = [
  {
      id: 1,
      team: 'Whalar',
      title: 'Lead Product Designer',
      date: '2025',
      location:'Remote',
      freelance: 'true',
      extra: '',
      logoFile: 'logo__whalar'
  },
  {
      id: 2,
      team: 'HubSpot',
      title: 'Senior Product Designer',
      date: '2023 - 2024',
      location:'Remote',
      freelance: '',
      extra: '',
      logoFile: 'logo__hubspot'
  },
  {
      id: 3,
      team: 'Klaviyo',
      title: 'Senior Product Designer',
      date: '2021 - 2023',
      location:'Remote',
      freelance: '',
      extra: '',
      logoFile: 'logo__klaviyo'
  },
  {
      id: 4,
      team: 'Order.co',
      title: 'Senior Product Designer',
      date: '2020 - 2021',
      location:'NYC + remote',
      freelance: '',
      extra: '',
      logoFile: 'logo__order'
  },
  {
      id: 5,
      team: 'Tentrr',
      title: 'Senior Designer',
      date: '2018 - 2020',
      location:'NYC',
      freelance: '',
      extra: 'OOB, 2023',
      logoFile: 'logo__tentrr'
  },
  {
      id: 6,
      team: 'priceline',
      title: 'Designer',
      date: '2015 - 2017',
      location:'NYC + Norwalk, CT',
      freelance: '',
      extra: '',
      logoFile: 'logo__priceline'
  },
  {
      id: 7,
      team: 'priceline',
      title: 'Associate Designer',
      date: '2013 - 2015',
      location:'NYC + Norwalk, CT',
      freelance: '',
      extra: '',
      logoFile: 'logo__priceline'
  },
  {
      id: 8,
      team: 'priceline',
      title: 'Design Intern',
      date: 'Summer 2013',
      location:'Norwalk, CT',
      freelance: '',
      extra: '',
      logoFile: 'logo__priceline'
  },
  {
      id: 9,
      team: 'Digital Surgeons',
      title: 'Design Intern',
      date: 'Summer 2012',
      location:'New Haven, CT',
      freelance: '',
      extra: '',
      logoFile: 'logo__ds'
  }
];

export const resourceList = [
  {
      id: 1,
      name: 'The UX Gesture Kit',
      platform: 'Figma',
      platformIcon: 'brandFigmaOutlined',
      detail: 'A simple community library for pointer and touch gestures.',
      url: 'https://www.figma.com/community/file/1098810879785324342',
      state: ''
  },
  {
      id: 2,
      name: 'The Lonely UXers Discord',
      platform: 'Discord',
      platformIcon: 'brandDiscord',
      detail: 'What started as a random COVID-era Zoom coffee meetup for solo designers at startups in various countries later became a community for those of us that have been on our own or are starting out in our careers.',
      url: 'https://discord.gg/AdqW5S8',
      state: ''
  },
  {
      id: 3,
      name: 'Design Markup Library',
      platform: 'Figma',
      platformIcon: 'brandFigmaOutlined',
      detail: 'Cards, sections, labels, etc...hopefully all the utils you need to markup a doc for handoff or to start a conversation. Still in progress, but what project isn\'t these days?',
      url: 'https://www.figma.com/design/nn4n2uUKNuucx5M5bga7Ky/Design-Markup-Helpers?node-id=76-3645',
      state: 'wip'
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

// save these for a rainy day
// export const projectImages = import.meta.glob('@img/projects/**/*', { eager: true, import: 'default' })

// export const getImageUrl = (company: string, slug: string, fileName: string) => {
//     const path = `/src/assets/img/projects/${company}/${slug}/${fileName}`
//     return projectImages[path] as string
// };
