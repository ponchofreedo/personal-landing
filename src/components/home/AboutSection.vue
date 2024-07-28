<script setup lang="ts">
  import { ref } from 'vue'
  import Button from '../global/Button.vue'

  const facts = ref([
    { id: 1, content: 'Hardcore Star Wars nerd.' },
    { id: 2, content: 'Casual maker of tasty things.' },
    { id: 3, content: 'Liker of all furry and fluffy four-legged friends.' },
    { id: 4, content: 'Occasionally I still get to grapple and play lacrosse.' }
  ])

  const links = ref([
    { id: 1, name: 'Klaviyo', href: 'https://www.klaviyo.com', location: '_blank', hasBrand: 'true'},
    { id: 2, name: 'Order', href: 'https://www.order.co', location: '_blank', hasBrand: 'true'},
    { id: 3, name: 'Tentrr', href: 'https://www.instagram.com/tentrr', location: '_blank', hasBrand: 'true'},
    { id: 4, name: 'Priceline', href: 'https://www.priceline.com', location: '_blank', hasBrand: 'true'},
    { id: 5, name: 'DigitalSurgeons', href: 'https://www.digitalsurgeons.com', location: '_blank', hasBrand: 'true'}
  ])
</script>

<template>
  <article class="container__simple" id="#about">
    <ul>
      <li v-for="fact in facts"
          :content="fact.content">
          <h3>{{ fact.content }}</h3>
      </li>
    </ul>
  </article>
  <article class="container__simple">
    <h2>Previously.</h2>
    <div class="list__brands">
        <!-- <a href="" aria-label="klaviyo logo"><BrandKlaviyo /></a>
        <a href="" aria-label="order.co logo"><BrandOrder /></a>
        <a href="" aria-label="tentrr logo"></a>
        <a href="" aria-label="priceline logo"></a> -->
        <Button
          v-for="link in links"
          :id="link.id"
          :name="link.name"
          :href="link.href"
          :location="link.location"
          :hasBrand="link.hasBrand"
        />
    </div>
    <!--<p>For more history, <a href="">check out my CV</a>.</p>-->
  </article>
</template>

<style scoped>
  article {
    display: flex;
    flex-direction: column;
    row-gap: calc((var(--base__font-size) * 2) * 1px);
    row-gap: calc((var(--base__font-size) * 2) / var(--base__font-size) * 1rem);
    padding-bottom: calc((var(--base__font-size) * 10) * 1px);
    padding-bottom: calc((var(--base__font-size) * 10) / var(--base__font-size) * 1rem);
  }

  h2,
  h3 {
    color: var(--base__color--steel);
  }

  h3 {
    font-weight: var(--text__font-weight--medium);
  }

  ul:not(.list__brands) > li:first-child h3 {
    font-weight: revert;
    color: var(--primary__color--theme);
  }

  .list__brands {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  
  .list__brands > * {
    display: inline-flex;
    margin-right: 8px;
  }

  @media (max-width: 64rem) {
    .list__brands > * {
      margin-bottom: 8px;
    }
  }

  p,
  p a {
    color: var(--primary__color--text);
  }

  p a {
    text-decoration-color: var(--primary__color--theme);
    text-decoration-thickness: calc((var(--base__font-size) / 4) * 1px);
    transition: color 0.08s ease-in-out;
  }

  p a:hover {
    color: var(--primary__color--theme);
  }
</style>