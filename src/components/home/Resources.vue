<script setup lang="ts">
    import { ref } from 'vue'

    // i should probably convert this to some kind of db entry with an api call, but for now its small enough to just include in the component.
    const resources = ref([
        {
            id: 1,
            name: 'The UX Gesture Kit',
            platform: 'Figma',
            platformIcon: 'brandFigmaOutlined',
            detail: 'A simple community library for simple pointer and touch gestures on desktop and mobile. Fits right into flow and interaction documentation.',
            cta: 'Check it out',
            url: 'https://www.figma.com/community/file/1098810879785324342'
        },
        {
            id: 2,
            name: 'Design Markup Library',
            platform: 'Figma',
            platformIcon: 'brandFigmaOutlined',
            detail: 'Cards, sections, labels, etc...hopefully all the utils you need to markup a doc for handoff or to start a conversation.',
            cta: 'Check it out',
            url: ''
        },
        {
            id: 3,
            name: 'The Lonely UXers Discord',
            platform: 'Discord',
            platformIcon: 'brandDiscord',
            detail: 'What started as a random Zoom coffee meetup for solo designers at startups during peak COVID times later became a community for those of us that have been on our own or are starting out in our careers.',
            cta: 'Grab your invite',
            url: 'https://discord.gg/AdqW5S8'
        }
    ])
</script>

<template>
    <section id="resources">
        <h4>Projects and resources.</h4>
        <small>Some things I tinker with for the community.</small>
        <main>
            <article v-for="resource in resources" :key="resource.id">
                <h3>{{ resource.name }}</h3>
                <div>
                    <icon type="svg" :name='resource.platformIcon' />
                    <span class="text--big">{{ resource.platform }}</span>
                </div>
                <p>{{ resource.detail }}</p>
                <a class="resource__cta" v-if="resource.url" :href='resource.url' target="_blank">
                    <span>{{ resource.cta }}</span>
                    <icon type="icon" name="iconArrowSquareUpRight" />
                </a>
                <span class="resource__cta" v-else>Coming soon.</span>
            </article>
        </main>
    </section>
</template>

<style scoped>
    #resources {
        display: flex;
        flex-direction: column;
    }

    h4,
    h4 + small {
        color: var(--base__color--green-700);
    }

    h4 {
        margin-bottom: 4px;
        margin-bottom: 0.25rem;
    }

    h4 + small {
        margin-bottom: 40px;
        margin-bottom: 2.5rem;
    }

    main {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-auto-rows: unset;
        gap: 16px;
        gap: 1rem;
    }

    article {
        padding: 32px;
        padding: 2rem;
        border-style: solid;
        border-width: 2px;
        border-width: 0.125rem;
        border-color: var(--base__color--neutral-500);
        border-radius: 24px;
        border-radius: 1.5rem;
    }

    h3 {
        color: var(--base__color--green-100);
        margin-bottom: 8px;
        margin-bottom: 0.5rem;
    }

    div {
        display: flex;
        color: var(--base__color--neutral-320);
        margin-bottom: 16px;
        margin-bottom: 1rem;
    }

    p,
    .resource__cta {
        color: var(--base__color--neutral-200);
    }

    div,
    a,
    .resource__cta {
        align-items: center;
        gap: 4px;
        gap: 0.25rem;
        font-size: 20px;
        font-size: 1.25rem;
        line-height: var(--text__line-height--fixed);
    }

    a,
    .resource__cta {
        display: inline-flex;
        margin-top: 16px;
        margin-top: 1rem;
        text-decoration: none;
        font-weight: var(--text__font-weight--medium);
    }

    a {
        color: var(--base__color--green-400)!important;
    }

    div svg,
    a svg {
        width: auto;
    }

    div svg {
        height: 16px;
        height: 1rem;
    }

    a svg {
        height: 20px;
        height: 1.25rem;
    }

    @media (max-width: 720px) {
        main {
            grid-template-columns: 1fr;
        }

        h4 + small {
            margin-bottom: 24px;
            margin-bottom: 1.5rem;
        }

        article {
            padding: 24px;
            padding: 1.5rem;
        }
    }
</style>