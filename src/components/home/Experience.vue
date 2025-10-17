<script setup lang="ts">
    import { ref } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    import { experienceList } from '@data/constants'
</script>

<template>
	<section id="experience">
        <main>
            <aside>
                <h2>Experience.</h2>
            </aside>
            <section>
                <article v-for="experience in experienceList" :key="experience.id" :team="experience.team">
                    <figure>
                        <icon type="svg" :name="experience.logoFile" />
                    </figure>
                    <div class="experience__details">
                        <header>
                            <h3>{{ experience.title }}</h3>
                            <span>{{ experience.date }}</span>
                        </header>
                        <ul>
                            <li class="experience__team">{{ experience.team }}</li>
                            <li>{{ experience.location }}</li>
                            <li v-if="experience.freelance">Freelance</li>
                            <li v-if="experience.extra">{{ experience.extra }}</li>
                        </ul>
                    </div>
                </article>
                <footer>
                    <p>Grab a copy of <a href="https://drive.google.com/file/d/1Ib9gDFZmR5loB7iczbViQZr49_o_fgfY/view?usp=sharing" target="_blank" class="link link--inline">my r&eacute;sum&eacute;<icon type="icon" name="iconDownload" /></a></p>
                </footer>
            </section>
        </main>
    </section>
</template>

<style lang="scss" scoped>
    @use "sass:math";

    section {
        
        #experience {
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
    }

    section {
        width: 100%;
        @include split-column-layout-side(right);
    }

    article {
        display: flex;
        flex-direction: row;
        gap: convertRem(16px);
        margin-bottom: convertRem(32px);
    }

    figure {
        display: flex;
        height: convertRem(64px);
        width: convertRem(64px);
        padding: convertRem(16px);
        background-color: $primary__color--background--alt;
        border-radius: convertRem(12px);
        justify-content: space-around;
        align-items: center;

        svg {
            height: auto;
            max-width: convertRem(32px);
            fill: $primary__color--accent;
            color: $primary__color--accent;
        }
    }

    .experience__details {
        display: flex;
        flex-direction: column;
        flex: auto;
        gap: convertRem(8px);
        place-self: center;
    }

    header {
        display: inline-flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        span {
            font-size: convertRem($text__font-size--p);
            font-weight: $text__font-weight--medium;
            color: $primary__color--text--muted;
        }
    }

    ul {
        display: flex;
        flex-direction: row;
        gap: 20px;

        li {
            position: relative;
            display: inline-flex;
            @include text-style(p, book, fixed); 
            color: $primary__color--text--darker;

            &:first-child {
                color: $primary__color--text; 
            }

            &:last-child {

                &::after {
                    display: none;
                }
            }

            &::after {
                position: absolute;
                content: '';
                top: convertRem(6px);
                right: convertRem(-12px);
                display: inline-block;
                vertical-align: middle;
                height: convertRem(4px);
                width: convertRem(4px);
                border-radius: convertRem(999px);
                background-color: $ui__color--neutral;
            }
        }
    }

    h3 {
        color: $primary__color--text;
    }
    
    footer {
        display: flex;
        flex-direction: column;
        margin-top: convertRem(40px);
        color: var(--base__color--neutral-50);
            
        a {
            display: inline-flex;
            align-items: center;
            gap: convertRem(4px);
            color: inherit;
        }

        p {
            line-height: var(--text__line-height--fixed);

            + p {
                margin-top: convertRem(16px);
            }
        }
    }

    @media (max-width: 720px) {

        footer {
            margin-top: 16px;
            margin-top: 1rem;
        }
    }
</style>