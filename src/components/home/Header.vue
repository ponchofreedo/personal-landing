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
                const id = "works"!;
                if (id !== null) {
                    const offsetValue = -160;
                    const section = document.getElementById(id)!;
                    const sectionWithOffset = section.getBoundingClientRect().top + window.scrollY + offsetValue;
                    window.scrollTo({
                        top: sectionWithOffset,
                        behavior: 'smooth'
                    });
                    console.log('scrolling to ' + id);
                } else {
                    console.log('works section doesnt exist');
                }
            }
        }
    };
</script>

<template>
	<header>
        <article>
            <aside>
                <h1>&#128075;&#127996; I&rsquo;m Zach.</h1>
            </aside>
            <section>
                <h1>An <span class="highlight">experienced product design nerd</span>, creative problem solver, builder of cool sh*t, and mildly mediocre funny man.</h1>
                <p class="text--big">I enjoy crafting frictionless experiences, solving complex problems, and learning about UX engineering. Previously <a href="https://hubspot.com" target="_blank" class="link link--inline">@HubSpot</a>, <a href="https://klaviyo.com" target="_blank" class="link link--inline">@Klaviyo</a>, <a href="https://priceline.com" target="_blank" class="link link--inline">@priceline</a>.</p>
                <footer>
                    <RouterLink to="" v-on:click.native="scrollToWorks()"><icon type="icon" name="iconArrowSquareDown" /></RouterLink>
                </footer>
            </section>
        </article>
    </header>
</template>

<style lang="scss" scoped>
    @use "sass:math";

    header {
        @include inner-flex-container;
        height: calc(100dvh - 120px);
        margin: 0;
        justify-content: center;
    }

    article {
        @include split-column-layout-container;
        margin-top: convertRem(-24px);
    }

    aside {
        @include split-column-layout-side(left);   
    }

    section {
        @include split-column-layout-side(right);
    }

    aside {

        h1 {
            font-weight: $text__font-weight--medium;

            @supports (font-variation-settings: normal) {
                font-variation-settings: 'wght' $text__font-weight--medium;
            }
        }
    }

    section {

        h1 {
            margin-bottom: convertRem(32px);
        }

        p {
            @include text-style(h2, book, ui);
            color: $primary__color--text--darker;
        }
    }

    footer {
        margin-top: convertRem(80px);
    }

    footer a {
        width: fit-content;
    }

    footer svg {
        height: convertRem(32px);
        width: auto;
    }

    h1 {
        color: $primary__color--text;
    }

    a {
        color: $primary__color--accent;
        text-decoration: underline solid 4px;
        text-decoration: underline solid 0.25rem; 
    }
</style>