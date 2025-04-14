<script setup lang="ts">
    import { ref } from 'vue'

    // i should probably convert this to some kind of db entry with an api call, but for now its small enough to just include in the component.
    const selectedWorks = ref([
        {
            id: 1,
            title: 'Concepting a new mobile sign up and invitation flow',
            preview: 'A design spike to get some meaninfgul user feedback on an extremely common problem for talent managers using the Foam management platform at Whalar.',
            private: 'true',
            testing: 'true',
            inDev: '',
            beta: '',
            shipped: '',  
            freelance:'true',
            date: '2025',
            href:'https://www.figma.com/design/nob8jgXwQ9VzMmlqZDc04F/Spike--Mobile-app-invitations?node-id=0-1&t=F6MX8esnJhSVv61X-1',
            target: '_blank',
            team: 'Whalar'
        },
        {
            id: 2,
            title: 'Building Buoy &ndash; the design system for Foam',
            preview: 'Starting from square one and architecting a design system to solve issues related to scalability, velocity, communication, and consistency for product development at Whalar.',
            private: '',
            testing: '',
            inDev: 'true',
            beta: '',
            shipped: '',  
            freelance:'true',
            date: '2025',
            href:'https://www.linkedin.com/in/zpfreed',
            target: '_blank',
            team: 'Whalar'
        },
        {
            id: 3,
            title: 'New CRM property creation experience',
            preview: 'Rethinking the overall workflow of creating properties in HubSpot’s CRM to reduce CS overhead and to prepare for a more integrated and scalable future.',
            private: 'true',
            testing: '',
            inDev: '',
            beta: 'true',
            shipped: 'true',  
            freelance:'',
            date: '2023 - 2024',
            href:'https://www.linkedin.com/in/zpfreed',
            target: '_blank',
            team: 'HubSpot'
        },
        {
            id: 4,
            title: 'Simplifying property creation for non-admin users',
            preview: 'Seized on an opportunity and built a simplified experience when creating custom properties outside of admin spaces and as a non-admin user in HubSpot to curtail confusion and redundancy.',
            private: 'true',
            testing: '',
            inDev: '',
            beta: '',
            shipped: 'true',  
            freelance:'',
            date: '2023',
            href:'https://www.linkedin.com/in/zpfreed',
            target: '_blank',
            team: 'HubSpot'
        },
        {
            id: 5,
            title: 'Formula editor for calculated properties',
            preview: 'Reducing years of pain related to creating custom properties in HubSpot by introducing a more powerful, flexible, and smarter experience.',
            private: 'true',
            testing: '',
            inDev: '',
            beta: '',
            shipped: 'true',  
            freelance:'',
            date: '2023',
            href:'https://www.linkedin.com/in/zpfreed',
            target: '_blank',
            team: 'HubSpot'
        },
        {
            id: 6,
            title: 'Revisiting customer profiles',
            preview: 'End-to-end redesign of the oldest (by viewing still active Git commits) product space in the Klaviyo app and a lesson in weighing prioritized customer needs against technical and product needs.',
            private: '',
            testing: '',
            inDev: '',
            beta: '',
            shipped: 'true',  
            freelance:'',
            date: '2022 - 2023',
            href:'https://www.linkedin.com/in/zpfreed',
            target: '_blank',
            team: 'Klaviyo'
        }
    ])
</script>

<template>
	<section id="works">
        <h4>Selected works.</h4>
        <article v-for="selectedWork in selectedWorks" :key="selectedWork.id" :team="selectedWork.team">
            <a :href="selectedWork.href" :target="selectedWork.target">
                <h2 v-html="selectedWork.title"></h2>
            </a>
            <p class="text--big">{{ selectedWork.preview }}</p>
            <ul>
                <li class="tag tag--private" v-if="selectedWork.private">
                    <icon type="icon" name="iconPrivate" />
                    <span>Private</span>
                </li>
                <li class="tag tag--testing" v-if="selectedWork.testing">
                    <icon type="icon" name="iconLightning" />
                    <span>Testing</span>
                </li>
                <li class="tag tag--in-dev" v-if="selectedWork.inDev">
                    <svg viewBox="0 0 18 18" height="16" width="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="2" stroke-dasharray="4" stroke-linecap="square" />
                    </svg>
                    <span>In development</span>
                </li>
                <li class="tag tag--beta" v-if="selectedWork.beta">
                    <svg viewBox="0 0 18 18" height="16" width="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="2" />
                    </svg>
                    <span>Beta</span>
                </li>
                <li class="tag tag--shipped" v-if="selectedWork.shipped">
                    <svg viewBox="0 0 18 18" height="16" width="16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="9" cy="9" r="8" />
                    </svg>
                    <span>Shipped</span>
                </li>
                <li class="tag tag--freelance" v-if="selectedWork.freelance">
                    <span>Freelance</span>
                </li>
                <li>{{ selectedWork.date }}</li>
            </ul>
        </article>
        <footer>
            <p>See all available projects on
                <a href="https://github.com/ponchofreedo/portfolio-projects/" target="_blank" class="link link--inline">
                    GitHub
                    <icon type="svg" name="brandGithub" />
                    <icon type="icon" name="iconArrowSquareUpRight" />
                </a>
            </p>
        </footer>
    </section>
</template>

<style scoped>
    article {
        display: flex;
        flex-direction: column;
        gap: 8px;
        gap: 0.5rem;
        padding: 40px 0 48px;
        border-bottom-style: solid;
        border-bottom-width: 2px;
        border-bottom-width: 0.125rem;
        border-bottom-color: var(--base__color--neutral-500);
    }

    article:first-of-type {
        padding-top: 0;
    }

    h4 {
        margin-bottom: 40px;
        margin-bottom: 2.5rem;
        color: var(--base__color--green-700);
    }

    a {
        color: inherit;
        text-decoration: none;
    }

    h2 {
        color: var(--base__color--green-100);
        margin-bottom: 8px;
        margin-bottom: 0.5rem;
    }

    p {
        color: var(--base__color--neutral-200);
    }

    ul {
        display: flex;
        flex-direction: row;
        gap: 8px;
        gap: 0.5rem;
        margin-top: 16px;
        margin-top: 1rem;
        flex-wrap: wrap;
    }

    li {
        position: relative;
        height: unset;
        display: inline-flex;
        align-items: center;
        font-size: var(--text__font-size--p--px);
        font-size: var(--text__font-size--p--rem);
        line-height: var(--text__line-height--fixed);
    }

    li:last-child {
        margin-left: 32px;
        margin-left: 2rem;
        color: var(--base__color--neutral-200);
    }

    li:last-child::before {
        position: absolute;
        content: '';
        top: 15px;
        top: .8375rem;
        left: -24px;
        left: -1.5rem;
        display: inline-block;
        vertical-align: middle;
        height: 8px;
        height: 0.5rem;
        width: 8px;
        width: 0.5rem;
        -moz-border-radius: 999px;
        -webkit-border-radius: 999px;
        border-radius: 999px;
        background-color: var(--base__color--neutral-500);
    }

    footer {
        display: flex;
        margin-top: 32px;
        margin-top: 2rem;
        color: var(--base__color--neutral-50);
    }

    footer a {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        gap: 0.25rem;
        color: inherit;
    }

    footer p {
        line-height: var(--text__line-height--fixed);
    }

    footer svg {
        height: 16px;
        height: 1rem;
        width: auto;
    }

    @media (max-width: 720px) {
        h4 {
            margin-bottom: 24px;
            margin-bottom: 1.5rem;
        }

        article {
            padding: 32px 0 40px;
        }

        li:last-child {
            flex-basis: 100%;
            margin-top: 8px;
            margin-top: 0.5rem;
            margin-left: 0;

        }

        li:last-child::before {
            display: none;
            margin: 0;
        }
    }
</style>