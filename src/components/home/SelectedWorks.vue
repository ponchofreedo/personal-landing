<script setup lang="ts">
    import { ref } from 'vue'
    import { selectedWorks } from '@data/constants'
</script>

<template>
	<section id="works">
        <main>
            <aside>
                <h2>Selected works.</h2>
            </aside>
            <section>
                <article v-for="selectedWork in selectedWorks" :key="selectedWork.id" :team="selectedWork.team">
                    <a :href="'/works/' + selectedWork.team.toLowerCase() + '/' + selectedWork.slug" :target="selectedWork.target">
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
                    </a>
                </article>
                <footer>
                    <p>See all available projects on <a href="https://github.com/ponchofreedo/portfolio-projects/" target="_blank" class="link link--inline">GitHub<icon type="svg" name="brandGithub" /><icon type="icon" name="iconArrowSquareUpRight" /></a> or <a href="mailto:zach.freed+inquiry@gmail.com?subject=%27Sup." target="_blank" class="link link--inline">drop a messge</a> if you'd like to discuss anything that is labeled <icon class="link link--display" type="icon" name="iconPrivate" /><span class="link link--display">Private</span>.</p>
                </footer>
            </section>
        </main>
    </section>
</template>

<style lang="scss" scoped>
    @use "sass:math";

    section {
        
        #works__list {
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
                    opacity: 0.8;
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
        opacity: 1.0;
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
        display: flex;
        flex-direction: column;
        margin-top: convertRem(32px);

        p {
            color: $primary__color--text;
        }
    }

    footer p + p {
        margin-top: convertRem(16px);
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