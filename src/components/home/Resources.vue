<script setup lang="ts">
    import { ref } from 'vue'

    // i should probably convert this to some kind of db entry with an api call, but for now its small enough to just include in the component.
    const resources = ref([
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
    ])
</script>

<template>
    <section id="resources">
        <main>
            <aside>
                <h2>Projects and resources.</h2>
                <small>Giving back is cool, so here's a few things I tinker with for the community.</small>
            </aside>
            <section>
                <article v-for="resource in resources" :key="resource.id" :class="resource.state ? 'resource__wip' : ''">
                    <a :href="resource.url" target="_blank">
                        <header>
                            <figure>
                                <icon type="svg" :name="resource.platformIcon" />
                                <figcaption>{{ resource.platform }}</figcaption>
                            </figure>
                            <h3>{{ resource.name }}</h3>
                            <icon type="icon" name="iconArrowSquareUpRight" />
                        </header>
                        <p>{{ resource.detail }}</p>
                    </a>
                </article>
            </section>
        </main>
    </section>
</template>

<style lang="scss" scoped>
    section {
        
        #resources {
            @include inner-flex-container;
        }

        main {
            @include split-column-layout-container;
        }
    }

    aside {
        @include split-column-layout-side(left);   
    }

    h2 {
        color: $primary__color--text--darker;
        margin-bottom: convertRem(8px);
    }

    small {
        @include text-style(small, book, base);
        color: $primary__color--text--muted;
    }

    section {
        width: 100%;
        @include split-column-layout-side(right);
    }

    article {
        display: flex;
        flex-direction: column;
        gap: convertRem(8px);
        margin-bottom: convertRem(16px); 
        background-color: transparent;
        border-radius: convertRem(24px);
        border-color: $primary__color--border;
        border-width: convertRem(2px);
        border-style: solid;
        transition: background-color 0.12s ease-in-out;

        &:hover {
            background-color: $primary__color--border;
        }


        &:last-of-type {
            margin-bottom: 0;
        }

        a {
            display: inherit;
            flex-direction: inherit;
            gap: inherit;
            text-decoration: none;
            color: inherit;
        }
    }

    .resource__wip {

        transition: none;

        &:hover {
            background-color: transparent;
        }

        a {
            pointer-events: none;
        }

        header,
        p,
        svg {
            color: $primary__color--text--darker!important;
        }

        figure {

            svg {
                fill: $primary__color--text--darker!important;
            }
        }
    }

    header {
        display: flex;
        flex-direction: row;
        align-items: center;
        padding: convertRem(16px) convertRem(24px) 0 convertRem(16px);
        justify-content: space-between;
        gap: convertRem(8px);
        color: $primary__color--accent;

        h3 {
            flex-grow: 1;
        }

        + p {
            padding-left: convertRem(72px);
            padding-right: convertRem(24px);
            padding-bottom: convertRem(24px);
        }
    }

    figure {
        display: flex;
        height: convertRem(48px);
        width: convertRem(48px);
        padding: convertRem(8px);
        justify-content: center;
        align-items: center;

        figcaption {
            display: none;
        }

        svg {
            height: auto;
            width: auto;
            max-height: convertRem(24px);
            max-width: convertRem(32px);
            fill: $primary__color--accent;
            color: inherit;
        }
    }


    h3 {

        + svg {
            height: convertRem(24px);
            width: convertRem(24px);
            color: inherit;
        }
    }

    p {
        color: $primary__color--text--muted;
    }

    @media (max-width: 720px) {
    }
</style>