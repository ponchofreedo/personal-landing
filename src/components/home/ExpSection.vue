<script setup lang="ts">
  import { ref } from 'vue'
  // import ExpListItem from '@home/exp/ExpListItem.vue'
  import Button from '@global/Button.vue'
  import Link from '@global/Link.vue'

  const roles = ref([
    {  
      brand: 'HubSpot',
      title:'Senior Product Designer',
      startDate: 'June 2023',
      endDate:'August 2024',
      location:'Remote',
      content:'Recently I was a design lead building property management experiences on the CRM Data Management team <a href="https://hubspot.com" target="_blank" class="link link--inline">@HubSpot</a>. Also partnered with the design systems team to adopt some federated process initiatives to improve things like handoff and visibility.'
    },
    {  
      brand: 'Klaviyo',
      title:'Senior Product Designer',
      startDate: 'March 2021',
      endDate:'March 2023',
      location:'Remote',
      content:'I was a design lead for several data infrastructure features <a href="https://klaviyo.com" target="_blank" class="link link--inline">@Klaviyo</a>. My focus was on evolving antiquated core tools and building newer, more powerful tools for marketers.'
    },
    {  
      brand: 'Order',
      title:'Senior Product Designer',
      startDate: 'January 2020',
      endDate:'February 2021',
      location:'NYC and remote',
      content:'<a href="https://order.co" target="_blank" class="link link--inline">@Order</a> was my first lead product design position where I concepted and delivered new flagship products, including invoice submission and bill pay products, that were key to closing their Series B round.'
    }
  ])
</script>

<template>
  <aside class="container--tight left">
    <h2 class="section__title">Exp.</h2>
    <p>(The recent bits.)</p>
  </aside>
  <main class="container--simple right">
    <article class="exp__container">
      <ul class="exp__roles">
        <li v-for="role in roles" class="exp__role">
          <section class="exp__role--info">
            <icon type="brandIcon" :name="'Brand' + role.brand" />
            <h4>{{ role.title }}</h4>
            <div>
              <p>{{ role.startDate }} &ndash; {{role.endDate}}</p>
              <p>{{ role.location }}</p>
            </div>
          </section>
          <section class="exp__role--content">
            <p class="text--as-h4" v-html="role.content"></p>
          </section>
        </li>
      </ul>
      <ul class="exp__btns">
        <!-- CV link goes here later -->
        <li>
          <Button
            label="Resume"
            href="https://1drv.ms/b/s!AiXwFLoNRqBCidwdUMbw_CSpy98XYg?e=SQKXLJ"
            target="_blank"
            type="iconButton"
            iconType="icon"
            iconName="IconDownload"
            size="md"
            classes="btn--secondary" />
        </li>
      </ul>
    </article>
  </main>
</template>

<style scoped>
  .section__title + p {
    color: var(--base__color--gray-1);
  }

  article {
    display: flex;
    flex-direction: column;
    padding-bottom: 2.5rem;
  }

  .exp__roles {
    display: inline-grid;
    row-gap: 2rem;
    padding-top: 0.5rem;
  }

  .exp__roles li {
    display: inherit;
    grid-auto-flow: column;
    grid-template-columns: repeat(6, 1fr);
    gap: 2.5rem;
    padding-bottom: 2rem;
    border-bottom: 0.06225rem solid var(--base__color--gray-3);
  }

  .exp__role--info {
    grid-column: 1 / span 2;
  }

  .exp__role--content {
    grid-column: 3 / span 4;
  }

  .exp__role--info div {
    margin-top: 0.5rem;
  }

  .exp__role--info p {
    line-height: var(--text__line-height--display--mod);
    color: var(--base__color--gray-1);
  }

  .exp__role--content p {
    font-weight: var(--text__font-weight--regular);
    letter-spacing: unset;
  }

  @supports (font-variation-settings: normal) {
    .exp__role--content p {
      font-variation-settings: 'wght' var(--text_-font-weight--regular);
    }
  }

  .exp__btns {
    margin-top: 2.5rem;
  }

  .exp__role svg {
    height: 1.5rem;
    width: auto;
  }

  .exp__role svg,
  .exp__role svg > * {
    color: var(--base__color--black-1);
    fill: currentColor;
  }

  .exp__role h4 {
    color: var(--base__color--black-1);
  }
</style>