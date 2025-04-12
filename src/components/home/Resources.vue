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
            url: 'true'
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

<script lang="ts">

</script>

<template>
    <section id="resources">
        <h4>Projects and resources.</h4>
        <small>Some things I tinker with for the community.</small>
        <article v-for="resource in resources" :key="resource.id">
            <h3>{{ resource.name }}</h3>
            <div>
                <icon type="svg" :name='resource.platformIcon' />
                <span class="text--big">{{ resource.platform }}</span>
            </div>
            <p class="text--big">{{ resource.detail }}</p>
            <a class="resource__cta" v-if="resource.url" :href='resource.url' target="_blank">
                <span>{{ resource.cta }}</span>
                <icon type="icon" name="iconArrowSquareUpRight" />
            </a>
            <span class="resource__cta" v-else>Coming soon.</span>
        </article>
    </section>
</template>

<style scoped>
    a,
    .resource__cta {
        display: inline-flex;
        align-items: center;
        color: inherit;
        text-decoration: none;
        font-size: 16px;
        font-size: 1rem;
        line-height: 16px;
        line-height: 1rem;
        gap: 4px;
        gap: 0.25rem;
    }

    a span,
    .resource__cta {
    }

    a svg {
        height: 16px;
        height: 1rem;
        width: auto;
    }
</style>