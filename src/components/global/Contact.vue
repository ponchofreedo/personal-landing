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
        }
    ])
</script>

<script lang="ts">
</script>

<template>
	<section id="contact">
        <article>
            <h1>Talk to me, Goose.</h1>
            <main class="contact__blocks">
                <article>
                    <section>
                        <p>You've come this far on these here interwebs to find me. Unfortunately the IKEA instructions for my Bätssignalen are pretty rough &mdash; definitely missing a wooden peg &mdash; and my Rebel transponder code is a bit older and just barely "checks out," so yeah...feel free to take a gander at my <a href="" target="_blank">résumé</a> or just <a href="" target="_blank">drop me a line</a>.</p>
                    </section>
                    <section>
                        <p>Or, technical issues aside, you can find/follow me at all of these places.</p>
                    </section>
                </article>
                <article>
                    <section>
                        <ul>
                            <li v-for="link in links" :id="link.id">
                                <a :href='link.url' target="_blank">
                                    <span>{{ link.platform }}</span>
                                    <icon type="icon" name="iconArrowSquareUpRight" />
                                </a>
                            </li>
                        </ul>
                    </section>
                </article>
            </main>
        </article>   
    </section>
</template>

<style scoped>
    #contact {
        background-color: var(--base__color--dark-960);
        padding: 64px;
        padding: 4rem;
        border-radius: 24px;
        border-radius: 1.5rem;
    }

    h1 {
        font-weight: var(--text__font-weight--medium);
        color: var(--theme__color--accent);
    }

    .contact__blocks {
        display: flex;
        flex-direction: column;
        gap: 1.5rem;
        margin-top: 24px;
        margin-top: 1.25rem;
    }

    .contact__blocks article {
        display: inherit;
        flex-direction: row;
        gap: 40px;
        gap: 2.5rem;
    }

    .contact__blocks section {
        flex-basis: 50%;
    }

    .contact__blocks section:last-child:not(article section:only-child) {
        align-self: flex-end;
    }

    article + article {
        flex-direction: row-reverse!important;
        gap: 0!important;
    }

    section:only-child {
        padding-left: 20px;
        padding-left: 1.25rem;
    }

    p {
        color: var(--base__color--neutral-200);
        font-weight: 400;
    }

    ul li {
        margin-bottom: 1rem;
    }

    li a {
        display: inline-flex;
        align-items: center;
        color: inherit;
        text-decoration: none;
        font-size: 32px;
        font-size: 2rem;
        line-height: 1.4;
        gap: 4px;
        gap: 0.25rem;
    }

    li a svg {
        height: 24px;
        height: 1.5rem;
        width: auto;
    }

    a,
    li a,
    svg,
    li svg {
        color: var(--theme__color--accent);
    }

    p a {
        font-weight: var(--text__font-weight--medium);
        text-decoration: underline solid 2px;
        text-decoration: underline solid 0.125rem;
    }

    @media (max-width: 720px) {
        #contact {
            padding: 24px;
            padding: 1.5rem;
        }

        .content__blocks {
            flex-direction: column;
        }

        .contact__blocks article {
            display: inherit;
            flex-direction: inherit;
            gap: 24px;
            gap: 1.5rem;
        }

        .contact__blocks section {
            height: fit-content;
        }

        article + article {
            flex-direction: inherit!important;
            gap: 0!important;
        }

        .contact__blocks section:last-child:not(article section:only-child) {
            align-self: flex-start;
        }

        section:only-child {
            padding: 0;
        }

    }

</style>