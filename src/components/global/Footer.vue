<script setup lang="ts">
    import { ref } from 'vue'
</script>

<script lang="ts">
</script>

<template>
	<footer :layout="$route.name">
        <article>
            <section>
                <b>Colophon.</b>
                <p>This site is meant to be a playground for experimentation. Designed in <a href="https://figma.com" target="_blank">Figma</a>, built with <a href="https://vuejs.org" target="_blank">Vue</a>, authored in <a href="https://sublimetext.com" target="_blank">Sublime Text</a>, and shipped with <a href="https://vercel.com" target="_blank">Vercel</a>. Type set in <a href="https://pangrampangram.com/products/neue-montreal" target="_blank">Neue Montreal</a> by Mats Desjardins from <a href="https://pangrampangram.com/" target="_blank">Pangram Pangram Foundry</a>. Built with controlled chaos and my take on Thomas Keller's <a href="https://youtube.com/watch?v=Bt8YgEr-9is" target="_blank">roast chicken</a> recipe. Also built with <a href="https://instagram.com/obi_dog__kenobi_/" target="_blank">my dog</a> at my feet.</p>
            </section>
            <section>
                <p>&copy; 2025 Zach Freed &mdash; Bang Bang!</p>
            </section>
        </article>
    </footer>
</template>

<style scoped>
    h1 {
        font-weight: var(--text__font-weight--medium);
    }

    article {
        display: flex;
        flex-direction: row;
        gap: 40px;
        gap: 2.5rem;
        margin-top: 24px;
        margin-top: 1.25rem;
    }

    article section {
        display: inherit;
        flex-direction: column;
        flex-basis: 50%;
        gap: 8px;
        gap: 0.5rem;
    }

    article section+section {
        align-self: flex-end;
        justify-content: right;
        text-align: right;
    }

    b,
    p {
        font-size: 14px;
        font-size: calc((14/16) * 1rem);
    }

    a {
        font-weight: var(--text__font-weight--medium);
    }

    * { 
        color: var(--base__color--green-700)
    }

    @media (max-width: 720px) {
        article {
            flex-direction: column;
            gap: 40px;
            gap: 2.5rem;
        }

        article section {
            display: inherit;
            flex-direction: inherit;
        }

        article section+section {
            align-self: flex-start;
            justify-content: flex-start;
            text-align: left;
        }
    }
</style>