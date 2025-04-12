<script setup lang="ts">
    import { ref } from 'vue'

    // i should probably convert this to some kind of db entry with an api call, but for now its small enough to just include in the component.
    const recentExp = ref([
        {
            id: 1,
            team: 'Whalar',
            url: 'https://whalar.com',
            title: 'Lead Product Designer',
            detail: 'Recently I joined up with the <a href="https://foam.io" target="_blank">Foam</a> product team at <a href="https://www.whalar.com/" target="_blank">Whalar</a> to kickstart their design systems efforts and help with some complicated flows.',
            startDate: 'January 2025',
            endDate:'March 2025',
            location:'Remote',
            freelance: 'true'
        },
        {
            id: 2,
            team: 'HubSpot',
            url: 'https://hubspot.com',
            title: 'Senior Product Designer',
            detail: 'I joined the new CRM Data Management team at <a href="https://hubspot.com" target="_blank" class="link link--inline">HubSpot</a> as a design lead building scalable property management experiences. Also partnered with the design systems team to adopt some federated process initiatives to improve things like handoff and visibility.',
            startDate: 'June 2023',
            endDate:'August 2024',
            location:'Remote'
        },
        {
            id: 3,
            team: 'Klaviyo',
            url: 'https://klaviyo.com',
            title: 'Senior Product Designer',
            detail: 'Lead design for several data infrastructure features at <a href="https://klaviyo.com" target="_blank" class="link link--inline">Klaviyo</a> including customer profiles, subscription and consent management, and segmentation. My focus was on evolving antiquated core tools and building newer, more powerful tools for marketers. Also got to help drive our internal design systems initiatives and start building that dedicated team.',
            startDate: 'March 2021',
            endDate:'March 2023',
            location:'Remote'
        },
        {
            id: 4,
            team: 'Order',
            url: 'https://order.co',
            title: 'Senior Product Designer',
            detail: '<a href="https://order.co" target="_blank" class="link link--inline">Order</a> (fka Negotiatus when I joined) was my first lead product design position where I concepted and delivered new flagship products, including invoice submission and bill pay products, that were key to closing their Series B round.',
            startDate: 'January 2020',
            endDate: 'February 2021',
            location:'New York, NY + remote'
        }
    ])

    // defineProps ({
    //     toggleIcon: String
    // })
</script>

<script lang="ts">
    // export default {
    //     // setup() {
    //     //     const isExpanded = ref(false);
    //     //     return {
    //     //         isExpanded
    //     //     };
    //     // },
    //     data() {
    //         return {
    //             isExpanded: false,
    //             isOpen: false,
    //             // toggleIcon: "iconPlus"
    //         }
    //     },
    //     methods: {
    //         // changeIcon() {
    //         //     this.toggleIcon = (this.toggleIcon === "iconPlus" ? "iconMinus" : "test")
    //         // },
    //         handleToggle(event) {
    //             this.isOpen = event.target.open;
    //         },
    //         toggleExpand() {
    //             this.isExpanded = !this.isExpanded;
    //         }
    //     }
    // };

    // const details = document.querySelectorAll('details');

    // details.forEach(detail => {
    //     detail.addEventListener('toggle', (event) => {
    //         if (detail.open) {    
    //             details.forEach(otherDetail => {
    //                 if (otherDetail !== detail && otherDetail.open) {
    //                     otherDetail.removeAttribute('open');
    //                 }
    //             });
    //         }
    //     });
    // });

    // export default {
    //     data() {
    //         return {
    //             isOpen: false
    //         };
    //     },
    //     methods: {
    //         toggleAttribute() {
    //             this.isOpen = !this.isOpen;
    //             const element = document.querySelector('details');
    //             if (element.hasAttribute('open')) {
    //                 element.setAttribute('open', this.isOpen);
    //             }
    //         }
    //     },
    //     mounted() {
    //         const element = document.querySelector('details');
    //         if(element.hasAttribute('open')) {
    //             console.log(element.getAttribute('open'));
    //         }
    //     }
    // }

</script>

<template>
	<section id="experience">
        <h4>Experience.</h4>
        <small>The recent bits.</small>
        <details name="details" v-for="exp in recentExp" :id="exp.id" :team="exp.team" v-on:click="toggleAttribute">
            <summary>
                <a :href='exp.url' target="_blank">
                    <figure>
                        <icon type="svg" :name='"brand" + exp.team' />
                        <figcaption>{{ exp.team }}</figcaption>
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
                <!-- <aside>
                    <icon v-show="!exp.isOpen" type="icon" name="iconPlus" />
                    <icon v-show="exp.isOpen" type="icon" name="iconMinus" />
                </aside> -->
            </summary>
            <p v-html="exp.detail"></p>
        </details>
        <!-- <div v-on:click="toggleExpand">
            <p>Click me to expand the card</p>
            <span v-show="isExpanded">i show when expanded</span>
        </div> -->
        <footer>
            <p>For my full history, take a look at my 
                <a href="https://github.com/ponchofreedo/projects/" target="_blank">
                    CV<icon type="icon" name="iconArrowSquareUpRight"/>
                </a>
            </p>
            <p>Or, grab a copy of 
                <a href="https://github.com/ponchofreedo/projects/" target="_blank">
                    my r&eacute;sum&eacute;
                    <icon type="icon" name="iconArrowSquareUpRight" />
                </a>
            </p>
        </footer>
    </section>
</template>

<style scoped>

    details > summary {
        list-style: none;
    }

    details > summary::marker,
    details > summary::-webkit-details-marker {
        display:none!important;
    }
    
    footer {
        display: flex;
        flex-direction: column;
    }

    footer a {
        display: inline-flex;
        align-items: center;
        gap: 4px;
        gap: 0.25rem;
        color: inherit;
        text-decoration: none;
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
</style>