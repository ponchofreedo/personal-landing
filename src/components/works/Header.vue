<script setup lang="ts">
    import { ref } from 'vue'

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
            href:'',
            target: '_blank',
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
            href:'',
            target: '_blank',
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
            href:'',
            target: '_blank',
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
            href:'',
            target: '_blank',
            team: 'Whalar'
        }
    ])
</script>

<template>
	<header>
        <h1>Selected<span class="highlight"> works.</span></h1>
        <p>A sampling of work that had complex problems to solve and delivered real results...kind of like that time you, or a friend, went to a brewery before knowing the difference between an IPA and a lager, but ended up making friends with at least one crew member before you left.</p>
        <p><a href="mailto:zach.freed+inquiry@gmail.com?subject=%27Sup." target="_blank" class="link link--inline">Drop a messge</a> if you'd like to discuss anything that is labeled <icon class="link" type="icon" name="iconPrivate" /><span class="link">Private</span>.</p>
    </header>
</template>

<style lang="scss" scoped>
    @use "sass:math";

    header {
        @include inner-flex-container;
        margin: convertRem(120px) 0;
        justify-content: center;

        h1 {
            font-weight: $text__font-weight--medium;
            margin-bottom: convertRem(16px);

            @supports (font-variation-settings: normal) {
                font-variation-settings: 'wght' $text__font-weight--medium;
            }
        }

        p {
            @include text-style(h3, book, ui);
            color: $primary__color--text--muted;
            width: clamp(convertRem(480px), 72%, 100%);

            + p {
                margin-top: convertRem(16px);
            }
        }
    }

    a {
        display: inline-flex;
        align-items: center;
        gap: convertRem(4px);
        color: inherit;
    }

    svg {
        display: inline-flex;
        vertical-align: text-top;
        height: convertRem(24px);
        width: auto;
        margin-top: convertRem(1px);
        margin-right: convertRem(2px);
    }
</style>