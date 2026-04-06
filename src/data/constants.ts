import { defineAsyncComponent } from "vue";

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
  // {
  //     name: 'cv',
  //     label: 'CV',
  //     href: '/cv'
  // }
];

export const socialLinks = [
  {
    platform: 'LinkedIn',
    url: 'https://linkedin.com/in/zpfreed',
  },
  {
    platform: 'Figma',
    url: 'https://figma.com/@ponchofreedo',
  },
  {
    platform: 'GitHub',
    url: 'https://github.com/ponchofreedo',
  },
  {
    platform: 'Dribbble',
    url: 'https://dribbble.com/ponchofreedo',
  },
  {
    platform: 'Instagram',
    url: 'https://instagram.com/ponchofreedo',
  },
  {
    platform: 'Bluesky',
    url: 'https://bsky.app/profile/ponchofreedo.bsky.social',
  }
];

export const resumeLink = 'https://drive.google.com/file/d/1beVtWDtcU1Ltf3YxEQkUtg4Bz2HgocNL/view?usp=sharing';

export const selectedWorks = [
	{
    title: 'Improving the most core data management flow in HubSpot\'s CRM',
    preview: 'Solving customer pain points, driving adoption, and reducing overhead costs by rethinking the way customers create and edit their custom data properties.',
    private: '',
    testing: '',
    inDev: '',
    beta: '',
    shipped: 'true',
    freelance:'',
    date: '2024',
    slug: 'create-edit',
    staticHref:'/works/hubspot/create-edit',
    heroImg: 'list__hero.png',
    target: '_self',
    team: 'HubSpot'
},
// {
//     title: 'Improving retention and trust with a new calculated formula tester',
//     preview: 'Customers couldn\'t validate their work and were going elsewhere, even leaving the platform, so I introduced a solution to build their confidence.',
//     private: '',
//     testing: '',
//     inDev: '',
//     beta: '',
//     shipped: 'true',
//     freelance:'',
//     date: '2023',
//     slug: 'formula-tester',
//     staticHref:'/works/hubspot/formula-tester',
//     target: '_self',
//     team: 'HubSpot'
// }
{
    title: 'Rebuilding Klaviyo\'s profile view to scale with customer needs',
    preview: 'The most central view of the platform had become a hard-to-navigate data dump, so I set out to modernize the experience and unlock how our customers actually use it for both support and discovery.',
    private: '',
    testing: '',
    inDev: '',
    beta: '',
    shipped: 'true',
    freelance:'',
    date: '2023',
    slug: 'customer-profiles',
    staticHref:'/works/klaviyo/customer-profiles',
    heroImg: 'list__hero.png',
    target: '_self',
    team: 'Klaviyo'
},
// {
//     title: 'Bringing spend management full-circle at Order with a new B2B payment product',
//     preview: 'Going from 0 → 1 on a new payment and invoice management product to give customers 360-degree control and visibility over their vendor spend both on and off-platform.',
//     private: '',
//     testing: '',
//     inDev: '',
//     beta: '',
//     shipped: 'true',
//     freelance:'',
//     date: '2021',
//     slug: 'bill-pay',
//     staticHref:'/works/order/bill-pay',
//     heroImg: 'list__hero.png',
//     target: '_self',
//     team: 'Order'
// },
// {
//     title: 'Expanding Order\'s spend management platform with a new product for recurring charges',
//     preview: 'Going from 0 → 1 on a new product and improving the platform ecosystem by giving customers control and visibility over their recurring services and subscriptions.',
//     private: 'true',
//     testing: '',
//     inDev: '',
//     beta: '',
//     shipped: 'true',
//     freelance:'',
//     date: '2020',
//     slug: 'services-subs',
//     staticHref:'/works/order/services-subs',
//     heroImg: 'list__hero.png',
//     target: '_self',
//     team: 'Order'
// },
// {
//     title: 'Negotiating trade-offs to help HubSpot customers maintain cleaner data',
//     preview: 'Iterating on some issues with property management that drove customer churn, starting with a new take on a neglected feature with a lot of upside.',
//     private: 'true',
//     testing: '',
//     inDev: '',
//     beta: 'true',
//     shipped: '',
//     freelance:'',
//     date: '2024',
//     slug: 'property-cleanup',
//     staticHref:'/works/hubspot/property-cleanup',
//     heroImg: 'list__hero.png',
//     target: '_self',
//     team: 'HubSpot'
// },
{
    title: 'Building Buoy, the design system for Whalar\'s Foam CRM platform',
    preview: 'Re-architecting a patchwork system in Figma and v0 to unify design standards, improve velocity, and foster better communication for a globally distributed product and engineering team.',
    private: 'true',
    testing: '',
    inDev: '',
    beta: '',
    shipped: '',
    freelance:'true',
    date: '2025',
    slug: 'buoy-foundations',
    staticHref:'/works/whalar/buoy-foundations',
    heroImg: 'list__hero.png',
    target: '_self',
    team: 'Whalar'
},
{
    title: 'Bringing Copley AI to life to give marketers more confidence',
    preview: 'Jumping in the deep end at the start with the founders of a new startup to help them form a product identity, strategy, and help them define Copley\'s \"special sauce.\"',
    private: 'true',
    testing: '',
    inDev: '',
    beta: '',
    shipped: '',
    freelance:'true',
    date: '2025',
    slug: 'hawk-foundations',
    staticHref:'/works/copley/hawk-foundations',
    heroImg: 'list__hero.png',
    target: '_self',
    team: 'Copley AI'
}
];

export const experienceList = [
  {
      team: 'Whalar',
      title: 'Lead Product Designer',
      date: '2025',
      location:'Remote',
      freelance: 'true',
      logoFile: 'logoWhalar'
  },
  {
      team: 'HubSpot',
      title: 'Senior Product Designer',
      date: '2023 - 2024',
      location:'Remote',
      logoFile: 'logoHubSpot'
  },
  {
      team: 'Klaviyo',
      title: 'Senior Product Designer',
      date: '2021 - 2023',
      location:'Remote',
      logoFile: 'logoKlaviyo'
  },
  {
      team: 'Order.co',
      title: 'Senior Product Designer',
      date: '2020 - 2021',
      location:'NYC + remote',
      logoFile: 'logoOrder'
  },
  {
      team: 'Tentrr',
      title: 'Senior Designer',
      date: '2018 - 2020',
      location:'NYC',
      extra: 'OOB, 2023',
      logoFile: 'logoTentrr'
  },
  {
      team: 'priceline',
      title: 'Designer',
      date: '2015 - 2017',
      location:'NYC + Norwalk, CT',
      logoFile: 'logoPriceline'
  },
  {
      team: 'priceline',
      title: 'Associate Designer',
      date: '2013 - 2015',
      location:'NYC + Norwalk, CT',
      logoFile: 'logoPriceline'
  },
  {
      team: 'priceline',
      title: 'Design Intern',
      date: 'Summer 2013',
      location:'Norwalk, CT',
      logoFile: 'logoPriceline'
  },
  {
      team: 'Digital Surgeons',
      title: 'Design Intern',
      date: 'Summer 2012',
      location:'New Haven, CT',
      logoFile: 'logoDS'
  }
];

export const resourceList = [
  {
      name: 'The UX Gesture Kit',
      platform: 'Figma',
      platformIcon: 'logoFigma',
      detail: 'A simple Figma community library for pointer and touch gestures.',
      url: 'https://www.figma.com/community/file/1098810879785324342',
      state: ''
  },
  {
      name: 'The Lonely UXers Discord',
      platform: 'Discord',
      platformIcon: 'logoDiscord',
      detail: 'What started as a random COVID-era Zoom coffee meetup for solo designers at startups in various countries later became a community for those of us that have been on our own or are starting out in our careers.',
      url: 'https://discord.gg/AdqW5S8',
      state: ''
  },
  {
      name: 'Design Markup Library',
      platform: 'Figma',
      platformIcon: 'logoFigma',
      detail: 'Cards, sections, labels, etc...hopefully all the utils you need to markup a doc for handoff or to start a conversation. Still in progress, but what project isn\'t these days?',
      url: 'https://www.figma.com/design/nn4n2uUKNuucx5M5bga7Ky/Design-Markup-Helpers?node-id=76-3645',
      state: 'wip'
  },
  {
      name: 'Design Operating System',
      platform: 'Figma',
      platformIcon: 'logoFigma',
      detail: 'Sometimes Figma docs are complicated to follow. This one-sheet hopes to provide some clarity and be a source of truth. Still a WIP.',
      url: '',
      state: 'wip'
  }
];

export const goToExternalLink = (url: string, target: string) => {
  window.open(url, target)
}

// save these for a rainy day
// export const projectImages = import.meta.glob('@img/projects/**/*', { eager: true, import: 'default' })

// export const getImageUrl = (company: string, slug: string, fileName: string) => {
//     const path = `/src/assets/img/projects/${company}/${slug}/${fileName}`
//     return projectImages[path] as string
// };
