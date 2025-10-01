<script setup lang="ts">
    import { ref } from 'vue'

    // i should probably convert this to some kind of db entry with an api call, but for now its small enough to just include in the component.
    const links = ref([
        {
            id: 1,
            platform: 'LinkedIn',
            url: 'https://linkedin.com/in/zpfreed'
        },
        {
            id: 2,
            platform: 'Figma',
            url: 'https://figma.com/@ponchofreedo'
        },
        {
            id: 3,
            platform: 'GitHub',
            url: 'https://github.com/ponchofreedo'
        },
        {
            id: 4,
            platform: 'Dribbble',
            url: 'https://dribbble.com/ponchofreedo'
        },
        {
            id: 5,
            platform: 'Instagram',
            url: 'https://instagram.com/ponchofreedo'
        },
        {
            id: 6,
            platform: 'Bluesky',
            url: 'https://bsky.app/profile/ponchofreedo.bsky.social'
        }
    ])
</script>

<script lang="ts">
</script>

<template>
	<section id="contact">
        <main>
            <aside>
                <h2>Talk too me, Goose.</h2>
            </aside>
            <section>
                <article>
                    <section>
                        <p class="text--big">You've come this far on these here interwebs to find me. Unfortunately the IKEA instructions for my Bätssignalen are pretty rough &mdash; definitely missing a wooden peg &mdash; and my Rebel transponder code is a bit older and just barely "checks out," so yeah...feel free to take a gander at my <a href="https://1drv.ms/b/s!AiXwFLoNRqBCifMJqJtyZbbOOAROcA?e=PPKF25" target="_blank" class="link link--inline">résumé</a> or just <a href="mailto:zach.freed+inquiry@gmail.com?subject=%27Sup." target="_blank" class="link link--inline">drop me a line</a>.</p>
                        <p class="text--big">Or, technical issues aside, you can find/follow me at all of these places.</p>
                    </section>
                </article>
                <article>
                    <ul>
                        <li v-for="link in links" :key="link.id">
                            <a :href='link.url' target="_blank" class="link">
                                <span>{{ link.platform }}</span>
                                <icon type="icon" name="iconArrowSquareUpRight" />
                            </a>
                        </li>
                    </ul>
                </article>
            </section>
        </main>   
    </section>
</template>

<style lang="scss" scoped>
    @use "sass:math";

    #contact {
        background-color: $primary__color--background--alt;
        padding: convertRem(120px) 0;
        border-radius: convertRem(24px);
        margin-top: 0;
        margin-bottom: 0;
        place-items: center;
    }

    section {

        main {
            @include split-column-layout-container;
            max-width: convertRem(1060px);
        }
    }

    aside {
        @include split-column-layout-side(left);   
    }

    h2 {
        color: $primary__color--text--darker;
        margin-bottom: convertRem(8px);
    }

    section {
        width: 100%;
        @include split-column-layout-side(right);
    }

    article {
        display: flex;
        flex-direction: column;
        gap: convertRem(16px);
        margin-bottom: convertRem(32px);

        &:last-of-type {
            margin-bottom: 0;
        }
    }

    p {
        color: $primary__color--text--muted;
        font-weight: 400;

        + p {
            margin-top: convertRem(24px);
            margin-bottom: convertRem(32px);
        }
    }

    ul {
        display: flex;
        flex-direction: column;
        gap: convertRem(8px);
    }

    li {

        a {
            display: inline-flex;
            align-items: center;
            color: inherit;
            text-decoration: none;
            @include text-style(h2, normal, ui);
            gap: convertRem(4px);
        }

        svg {
            height: convertRem(24px);
            width: auto;
        }
    }

</style>