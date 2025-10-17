<script setup lang="ts">
    import { ref } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'
    import { selectedWorks } from '@data/constants'
</script>

<script lang="ts">
    export default {
        props: ['id']
    };
</script>

<template>
	<section id="works__list">
        <main>
            <section>
                <article v-for="selectedWork in selectedWorks" :key="selectedWork.id" :team="selectedWork.team">
                    <RouterLink :to="'/works/' + selectedWork.team.toLowerCase() + '/' + selectedWork.slug" :id="selectedWork.id" :target="selectedWork.target">
                        <figure>
                            <img
                                :src="`/img${selectedWork.staticHref}/${selectedWork.heroImg}`"
                                decoding="async" 
                                loading="lazy" 
                                sizes=""
                            />
                        </figure>
                        <div class="tag__snackbar snackbar--no-gap">
                            <span>{{ selectedWork.team }}</span>
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
                                <li class="tag tag--freelance" v-if="selectedWork.freelance">Freelance</li>
                            </ul>
                            <span>{{ selectedWork.date }}</span>
                        </div>
                        <h3>{{ selectedWork.title }}</h3>
                        <p>{{ selectedWork.preview }}</p>
                    </RouterLink>
                </article>
                <footer>
                    <p>More projects coming soon!</p>
                </footer>
            </section>
        </main>
    </section>
</template>

<style lang="scss" scoped>
    @use "sass:math";

    #works__list {
        margin-top: 0!important;
    }

    section {

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
        flex-direction: column;
        gap: convertRem(8px);
        margin-bottom: convertRem(80px);

        &:last-of-type {
            margin-bottom: convertRem(40px);
        }

        a {
            display: inherit;
            flex-direction: inherit;
            gap: inherit;
            text-decoration: none;
            color: inherit;

            &:hover {
                
                figure {
                    opacity: 1.0;
                }
            }
        }
    }

    figure {
        display: flex;
        height: min-content;
        justify-content: center;
        overflow: hidden;
        position: relative;
        aspect-ratio: 2 / 1;
        border-radius: convertRem(16px);
        background-color: $ui__color--neutral;
        opacity: 0.96;
        will-change: transform;
        transition: opacity 0.2s ease-in-out;

        img {
            display: block;
            width: 100%;
            height: 100%;
            border: 0;
            border-radius: inherit;
            object-position: center;
            object-fit: cover;
            aspect-ratio: 2 / 1;
        }
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        gap: convertRem(8px);
    }

    h3 {
        color: $primary__color--text;
    }

    p {
        color: $primary__color--text--muted;
    }

    footer {
        p {
            @include text-style(h3, medium, display);
            color: $primary__color--accent;
            text-align: center;
        }
    }

    @media (max-width: 720px) {
        h4 {
            margin-bottom: convertRem(24px);
        }

        article {
            padding: convertRem(32px) 0 convertRem(40px);
        }

        li:last-child {
            flex-basis: 100%;
            margin-top: convertRem(8px);
            margin-left: 0;

        }

        li:last-child::before {
            display: none;
            margin: 0;
        }
    }
</style>