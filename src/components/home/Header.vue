<script setup lang="ts">
    import { onMounted } from 'vue'

    onMounted(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        })
    })
</script>

<script lang="ts">
    export default {
        methods: {
            scrollToWorks() {
                let id = "works";
                const offsetValue = -32;
                const section = document.getElementById(id);
                const sectionWithOffset = section.getBoundingClientRect().top + window.scrollY + offsetValue;
                window.scrollTo({
                    top: sectionWithOffset,
                    behavior: 'smooth'
                });
            }
        }
    };
</script>

<template>
	<header>
        <article>
            <img src="@img/it-me.png" alt="it's a rad photo of me that I may never get rid of" loading="lazy" decoding="async" />
            <h1>I&rsquo;m Zach &mdash; an experienced product designer who enjoys crafting frictionless experiences and solving complex problems. Previously <a href="https://hubspot.com" target="_blank" class="link link--inline">@HubSpot</a>, <a href="https://klaviyo.com" target="_blank" class="link link--inline">@Klaviyo</a>, <a href="https://priceline.com" target="_blank" class="link link--inline">@priceline</a>.</h1>
        </article>
        <footer>
            <p>NY born and bred. Based in Stamford, CT.</p>
            <RouterLink to="" v-on:click.native="scrollToWorks()">
                <icon type="icon" name="iconArrowSquareDown" />
            </RouterLink>
        </footer>
    </header>
</template>

<style scoped>
    header {
        display: flex;
        flex-flow: column;
        height: calc(100vh - 192px);
        margin-top: 80px;
        margin-top: 5rem;
    }

    article {
        display: inherit;
        flex-direction: inherit;
        gap: 24px;
        gap: 1.5rem;
        height: fit-content;
        justify-content: flex-start;
    }

    img {
        height: 160px;
        height: 10rem;
        width: 160px;
        width: 10rem;
    }

    h1 {
        color: var(--base__color--neutral-50);
    }

    a {
        color: var(--primary__color--theme);
        text-decoration: underline solid 4px;
        text-decoration: underline solid 0.25rem; 
    }

    footer {
        display: inherit;
        flex-direction: inherit;
        flex: 1;
        justify-content: flex-end;
        margin-top: 32px;
        margin-top: 2rem
    }

    footer p {
        color: var(--base__color--neutral-320);
        margin-bottom: 16px;
        margin-bottom: 1rem;
    }

    footer a {
        width: fit-content;
    }

    footer svg {
        height: 32px;
        height: 2rem;
        width: auto;
    }

    @media (max-height: 800px) {
        header {
            margin-top: 40px;
            margin-top: 2.5rem;
            height: fit-content;
        }

        footer {
            margin-top: 64px;
            margin-top: 4rem
        }
    }
    @media (max-width: 720px) {
        header {
            margin-top: 40px;
            margin-top: 2.5rem;
            height: fit-content;
        }
        img {
            height: 96px;
            height: 6rem;
            width: 96px;
            width: 6rem;
        }

        footer {
            margin-top: 64px;
            margin-top: 4rem
        }
    }
</style>