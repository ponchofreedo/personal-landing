<script setup lang="ts">
    import { ref } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'

    // i should probably convert this to some kind of db entry with an api call, but for now its small enough to just include in the component.
    const selectedWorks = ref([
        {
            id: 1,
            title: 'Improving admin property creation and editing experiences',
            preview: 'Rethinking the overall workflow of creating and editing properties in HubSpot\'s CRM to reduce CS and operating overhead and prepare for a more integrated and scalable future.',
            private: '',
            testing: '',
            inDev: '',
            beta: 'true',
            shipped: 'true',  
            freelance:'',
            date: '2024',
            slug: 'create-edit',
            staticHref:'/works/hubspot/create-edit',
            target: '_self',
            team: 'HubSpot'
        },
        {
            id: 2,
            title: 'Introducing a custom formular editor for calculated properties',
            preview: 'Reducing years of pain related to creating custom properties in HubSpot by adding a more powerful, flexible, and (soon-ish!) smarter experience.',
            private: '',
            testing: '',
            inDev: '',
            beta: '',
            shipped: 'true',  
            freelance:'',
            date: '2023',
            staticHref:'',
            target: '_self',
            team: 'HubSpot'
        },
        {
            id: 3,
            title: 'Remedying the pain of managing custom properties',
            preview: 'Fixing some long-standing, low-risk issues with high rewards on both sides and planning for a future backlog of opportunities with greater rewards.',
            private: '',
            testing: '',
            inDev: '',
            beta: 'true',
            shipped: '',  
            freelance:'',
            date: '2024',
            staticHref:'',
            target: '_self',
            team: 'HubSpot'
        },
        {
            id: 4,
            title: 'Building the foundations for Buoy',
            preview: 'Starting from square one and architecting a system to solve issues related to platform scalability, velocity, communication, and consistency for the distributed product development team at Whalar.',
            private: 'true',
            testing: '',
            inDev: 'true',
            beta: '',
            shipped: '',  
            freelance:'',
            date: '2025',
            staticHref:'',
            target: '_self',
            team: 'Whalar'
        }
    ])
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
                            <img decoding="async" loading="lazy" width="2560" height="1280" sizes="max(min(100vw - 200px, 1440px) * 0.6, 1px)" />
                        </figure>
                        <div class="snackbar">
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
        opacity: 0.8;
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

    .snackbar {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;


        span:not(li span) {
            position: relative;
            font-size: convertRem($text__font-size--p);
            font-weight: $text__font-weight--normal;
            line-height: $text__line-height--fixed;
            padding: convertRem(8px) 0;
            flex-wrap: inherit;
            color: $primary__color--text--darker;

            &:first-of-type {
                font-weight: $text__font-weight--semibold;

                &:has(+ ul) {
                    margin-right: 32px;

                    &::after {
                        position: absolute;
                        content: '';
                        top: convertRem(14px);
                        right: convertRem(-17px);
                        display: inline-block;
                        vertical-align: middle;
                        height: convertRem(4px);
                        width: convertRem(4px);
                        border-radius: convertRem(999px);
                        background-color: $ui__color--neutral;
                    }
                }
            }

            &:last-of-type {
                flex: auto;
                font-weight: $text__font-weight--medium;
                text-align: right;
            }
        }
    }

    li {
        position: relative;
        height: unset;
        display: inline-flex;
        align-items: center;
        font-size: convertRem($text__font-size--p);
        line-height: $text__line-height--fixed;
        padding-left: convertRem(12px);
        padding-right: convertRem(12px);

        &:first-child {
            padding-left: 0;
        }

        &:last-child {
            padding-right: 0;

            &::after {
                display: none;
            }
        }

        &::after {
            position: absolute;
            content: '';
            top: convertRem(14px);
            right: convertRem(-7px);
            display: inline-block;
            vertical-align: middle;
            height: convertRem(4px);
            width: convertRem(4px);
            border-radius: convertRem(999px);
            background-color: $ui__color--neutral;
        }
    }

    h3 {
        color: $primary__color--text;
    }

    p {
        color: $primary__color--text--muted;
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