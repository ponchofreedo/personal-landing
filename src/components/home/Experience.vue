<script setup lang="ts">
    import { ref } from 'vue'
    import { RouterLink, RouterView } from 'vue-router'

    // i should probably convert this to some kind of db entry with an api call, but for now its small enough to just include in the component.
    const recentExp = ref([
        {
            id: 1,
            team: 'Whalar',
            url: 'https://whalar.com',
            title: 'Lead Product Designer',
            detail: 'Recently I joined up with the <a href="https://foam.io" target="_blank" class="link link--inline">Foam</a> product team at <a href="https://www.whalar.com/" target="_blank" class="link link--inline">Whalar</a> to kickstart their design systems efforts and help with some complicated flows.',
            startDate: 'January 2025',
            endDate:'March 2025',
            location:'Remote',
            freelance: 'true',
            iconHeight: 16
        },
        {
            id: 2,
            team: 'HubSpot',
            url: 'https://hubspot.com',
            title: 'Senior Product Designer',
            detail: 'I joined the new CRM Data Management team at <a href="https://hubspot.com" target="_blank" class="link link--inline">HubSpot</a> as a design lead building scalable property management experiences. Also partnered with the design systems team to adopt some federated process initiatives to improve things like handoff and visibility.',
            startDate: 'June 2023',
            endDate:'August 2024',
            location:'Remote',
            iconHeight: 23
        },
        {
            id: 3,
            team: 'Klaviyo',
            url: 'https://klaviyo.com',
            title: 'Senior Product Designer',
            detail: 'Lead designer for several data infrastructure features at <a href="https://klaviyo.com" target="_blank" class="link link--inline">Klaviyo</a> including customer profiles, subscription and consent management, and segmentation. My focus was on evolving antiquated core tools and building newer, more powerful tools for marketers. Also got to help drive our internal design systems initiative and start building out a dedicated team.',
            startDate: 'March 2021',
            endDate:'March 2023',
            location:'Remote',
            iconHeight: 24
        },
        {
            id: 4,
            team: 'Order',
            url: 'https://order.co',
            title: 'Senior Product Designer',
            detail: '<a href="https://order.co" target="_blank" class="link link--inline">Order</a> (fka Negotiatus when I joined) was my first lead product design position where I concepted and delivered new flagship products, including invoice submission and bill pay products, that were key to closing their Series B round.',
            startDate: 'January 2020',
            endDate: 'February 2021',
            location:'New York, NY + remote',
            iconHeight: 23
        }
    ])
</script>

<template>
	<section id="experience">
        <h4>Experience.</h4>
        <small>The recent bits.</small>
        <details name="details" v-for="exp in recentExp" :key="exp.id" :team="exp.team" open>
            <summary>
                <a :href='exp.url' target="_blank">
                    <figure>
                        <icon type="svg" :name='"brand" + exp.team' :height="exp.iconHeight" />
                        <figcaption :alt='"Go to " + exp.team'>Go to {{ exp.team }}</figcaption>
                    </figure>
                </a>
                <section>
                    <h3>{{ exp.title }}</h3>
                    <div class="exp__details">
                        <span>{{ exp.startDate }} &ndash; {{ exp.endDate}}</span>
                        <span>{{ exp.location }}</span>
                        <span v-if="exp.freelance">Freelance</span>
                    </div>
                </section>
                <aside>
                    <icon type="icon" name="iconPlus" class="open" />
                    <icon type="icon" name="iconMinus" class="close" />
                </aside>
            </summary>
            <p v-html="exp.detail"></p>
        </details>
        <!-- <div v-on:click="toggleExpand">
            <p>Click me to expand the card</p>
            <span v-show="isExpanded">i show when expanded</span>
        </div> -->
        <footer>
            <p>For my full history, take a look at my <RouterLink to="/cv" class="link link--inline">CV<icon type="icon" name="iconArrowSquareUpRight" /></RouterLink></p>
            <p>Grab a copy of 
                <a href="https://1drv.ms/b/s!AiXwFLoNRqBCifMJqJtyZbbOOAROcA?e=PPKF25" target="_blank" class="link link--inline">
                    my r&eacute;sum&eacute;
                    <icon type="icon" name="iconDownload" />
                </a>
            </p>
        </footer>
    </section>
</template>

<style lang="scss" scoped>
    #experience {
        display: flex;
        flex-direction: column;
    }

    h4,
    h4 + small {
        color: var(--base__color--green-700);
    }

    h4 {
        margin-bottom: 4px;
        margin-bottom: 0.25rem;
    }

    h4 + small {
        margin-bottom: 40px;
        margin-bottom: 2.5rem;
    }

    details,
    figure,
    aside {
        border-style: solid;
        border-width: 2px;
        border-width: 0.125rem;
        border-radius: 16px;
        border-radius: 1rem;
        border-color: inherit;
    }

    details {
        display: flex;
        flex-direction: column;
        border-radius: 24px;
        border-radius: 1.5rem;
        border-color: var(--base__color--neutral-500);
        padding: 32px;
        padding: 2rem;
        margin-bottom: 16px;
        margin-bottom: 1rem;
        cursor: pointer;
    }

    details > summary {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: flex-start;
        column-gap: 40px;
        column-gap: 2.5rem;
        list-style: none;
    }

    details > summary::marker,
    details > summary::-webkit-details-marker {
        display:none!important;
    }

    details > p {
        margin-top: 8px;
        margin-top: 0.5rem;
        margin-left: 160px;
        margin-left: 10rem;
    }

    summary > aside {
        display: flex;
        justify-self: flex-end;
        padding: 8px;
        padding: 0.5rem;
        border-radius: 8px;
        border-radius: 0.5rem;
        border-color: var(--base__color--green-400);
        color: var(--base__color--green-400);
    }

    summary > aside svg {
        height: 24px;
        height: 1.5rem;
        width: auto;
    }

    details:not([open]) aside svg.close,
    details[open] aside svg.open {
        display: none;
    }

    details:not([open]) aside svg.open,
    details[open] aside svg.close {
        display: revert;
    }

    summary a {
        text-decoration: none;
    }

    summary figure {
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        height: 120px;
        height: 7.5rem;
        width: 120px;
        width: 7.5rem;
        color: var(--base__color--green-100);
        border-radius: 16px;
        border-radius: 1rem;
        border-color: var(--base__color--neutral-500);
    }

    summary figcaption {
        display: none;
        text-align: center;
    }

    figure svg {
        height: auto;
        min-height: 16px;
        min-height: 1rem;
        width: auto;
        margin: 0 auto;
    }

    summary > section {
        display: inherit;
        flex-direction: column;
        flex-grow: 1;
    }

    h3 {
        color: var(--base__color--green-100);
        margin-bottom: 4px;
        margin-botttom: 0.25rem;
    }

    .exp__details {
        display: inherit;
        flex-wrap: wrap;
        gap: 16px;
        gap: 1rem;
        font-size: 16px;
        font-size: 1rem;
        line-height: var(--text__line-height--display--mod);
        color: var(--base__color--neutral-200);
    }

    .exp__details span {
        position: relative;
        margin-left: 24px;
        margin-left: 1.5rem;
    }

    .exp__details span:first-child {
        margin: 0;
    }

    .exp__details span:not(span:last-child)::after {
        position: absolute;
        content: '';
        top: 7px;
        top: 0.425rem;
        right: -24px;
        right: -1.5rem;
        display: inline-block;
        vertical-align: middle;
        height: 8px;
        height: 0.5rem;
        width: 8px;
        width: 0.5rem;
        -moz-border-radius: 999px;
        -webkit-border-radius: 999px;
        border-radius: 999px;
        background-color: var(--base__color--neutral-500);
    }

    p {
        color: var(--base__color--neutral-50);
    }
    
    footer {
        display: flex;
        flex-direction: column;
        margin-top: 24px;
        margin-top: 1.5rem;
        color: var(--base__color--neutral-50);
    }

    footer a {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        gap: 0.25rem;
        color: inherit;
    }

    footer p {
        line-height: var(--text__line-height--fixed);
    }

    footer p + p {
        margin-top: 16px;
        margin-top: 1rem;
    }

    footer svg {
        height: 16px;
        height: 1rem;
        width: auto;
    }

    @media (max-width: 720px) {
        h4 + small {
            margin-bottom: 24px;
            margin-bottom: 1.5rem;
        }

        details {
            padding: 24px;
            padding: 1.5rem;
        }

        details > summary {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
        }

        summary figure {
            align-items: flex-start;
            justify-content: flex-start;
            height: auto;
            height: auto;
            width: auto;
            border: 0;
            border-radius: 0;
            margin-bottom: 16px;
            margin-bottom: 1rem;
        }

        summary > aside {
            justify-self: flex-start;
            padding: 4px;
            padding: 0.25rem;
            margin-top: 16px;
            margin-top: 1rem;
        }

        summary > aside svg {
            height: 16px;
            height: 1rem;
        }

        details > p {
            margin-top: 24px;
            margin-top: 1.5rem;
            margin-left: 0;
        }

        .exp__details {
            flex-direction: column;
            gap: 8px;
            gap: 0.5rem;
            font-size: 14px;
            font-size: 0.875rem;
        }

        .exp__details span {
            margin-left: 0;
        }

        .exp__details span:not(span:last-child)::after {
            display: none;
            margin: 0;
        }

        footer {
            margin-top: 16px;
            margin-top: 1rem;
        }
    }
</style>