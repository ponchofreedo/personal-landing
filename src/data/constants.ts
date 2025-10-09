// i should probably convert this to some kind of db entry with an api call, but for now its small enough to just include in the component.

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