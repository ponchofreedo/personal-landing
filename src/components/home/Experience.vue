<script setup lang="ts">
    import { ref } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'

    // i should probably convert this to some kind of db entry with an api call, but for now its small enough to just include in the component.
    const exps = ref([
        {
            id: 1,
            team: 'Whalar',
            title: 'Lead Product Designer',
            date: '2025',
            location:'Remote',
            freelance: 'true',
            extra: '',
            logoFile: 'logo__whalar'
        },
        {
            id: 2,
            team: 'HubSpot',
            title: 'Senior Product Designer',
            date: '2023 - 2024',
            location:'Remote',
            freelance: '',
            extra: '',
            logoFile: 'logo__hubspot'
        },
        {
            id: 3,
            team: 'Klaviyo',
            title: 'Senior Product Designer',
            date: '2021 - 2023',
            location:'Remote',
            freelance: '',
            extra: '',
            logoFile: 'logo__klaviyo'
        },
        {
            id: 4,
            team: 'Order.co',
            title: 'Senior Product Designer',
            date: '2020 - 2021',
            location:'NYC + remote',
            freelance: '',
            extra: '',
            logoFile: 'logo__order'
        },
        {
            id: 5,
            team: 'Tentrr',
            title: 'Senior Designer',
            date: '2018 - 2020',
            location:'NYC',
            freelance: '',
            extra: 'OOB, 2023',
            logoFile: 'logo__tentrr'
        },
        {
            id: 6,
            team: 'priceline',
            title: 'Designer',
            date: '2015 - 2017',
            location:'NYC + Norwalk, CT',
            freelance: '',
            extra: '',
            logoFile: 'logo__priceline'
        },
        {
            id: 7,
            team: 'priceline',
            title: 'Associate Designer',
            date: '2013 - 2015',
            location:'NYC + Norwalk, CT',
            freelance: '',
            extra: '',
            logoFile: 'logo__priceline'
        },
        {
            id: 8,
            team: 'priceline',
            title: 'Design Intern',
            date: 'Summer 2013',
            location:'Norwalk, CT',
            freelance: '',
            extra: '',
            logoFile: 'logo__priceline'
        },
        {
            id: 9,
            team: 'Digital Surgeons',
            title: 'Design Intern',
            date: 'Summer 2012',
            location:'New Haven, CT',
            freelance: '',
            extra: '',
            logoFile: 'logo__ds'
        }
    ])
</script>

<template>
	<section id="works">
        <main>
            <aside>
                <h2>Experience.</h2>
            </aside>
            <section>
                <article v-for="exp in exps" :key="exp.id" :team="exp.team">
                    <figure>
                        <icon type="svg" :name="exp.logoFile" />
                    </figure>
                    <div class="exp__details">
                        <header>
                            <h3>{{ exp.title }}</h3>
                            <span>{{ exp.date }}</span>
                        </header>
                        <ul>
                            <li class="exp__team">{{ exp.team }}</li>
                            <li>{{ exp.location }}</li>
                            <li v-if="exp.freelance">Freelance</li>
                            <li v-if="exp.extra">{{ exp.extra }}</li>
                        </ul>
                    </div>
                </article>
                <footer>
                    <p>Grab a copy of <a href="https://drive.google.com/file/d/1TXfsN4rRj39buzPWenTnIZ2tC2Zzx6Qk/view?usp=sharing" target="_blank" class="link link--inline">my r&eacute;sum&eacute;<icon type="icon" name="iconDownload" /></a>.</p>
                </footer>
            </section>
        </main>
    </section>
</template>

<style lang="scss" scoped>
    @use "sass:math";

    section {
        
        #works {
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

    .exp__details {
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

        svg {
            height: convertRem(16px);
            width: auto;
        }
    }

    @media (max-width: 720px) {

        footer {
            margin-top: 16px;
            margin-top: 1rem;
        }
    }
</style>