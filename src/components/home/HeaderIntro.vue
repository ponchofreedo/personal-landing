<script setup lang="ts">
  import { ref } from 'vue'
  import Button from '@global/Button.vue'
  import Link from '@global/Link.vue'

  // just leaving myself a note as a reminder to convert the social link icons to ionicons in the near future
  const buttonLinks = ref([
    { id: 1, label: 'LinkedIn', href:'https://www.linkedin.com/in/zpfreed', target: '_blank', type:'iconOnlyButton', iconType:'socialIcon', iconName:'BrandLinkedIn', size: 'lg' },
    { id: 2, label: 'Figma', href:'https://www.figma.com/@ponchofreedo', target:'_blank', type:'iconOnlyButton', iconType:'socialIcon', iconName: 'BrandFigma', size: 'lg' },
    { id: 3, label: 'GitHub', href:'https://www.github.com/ponchofreedo', target:'_blank', type:'iconOnlyButton', iconType:'socialIcon', iconName: 'BrandGitHub', size: 'lg' },
    { id: 4, label: 'Dribbble', href:'https://www.dribbble.com/ponchofreedo', target:'_blank', type:'iconOnlyButton', iconType:'socialIcon', iconName: 'BrandDribbble', size: 'lg' },
    { id: 5, label: 'Instagram', href:'https://www.instagram.com/ponchofreedo', target:'_blank', type:'iconOnlyButton', iconType:'socialIcon', iconName: 'BrandInstagram', size: 'lg' },
    { id: 6, label: 'Resume', href:'https://1drv.ms/b/s!AiXwFLoNRqBCifMJqJtyZbbOOAROcA?e=oMsV9w', target:'_blank', type:'iconButton', iconType:'icon', iconName: 'IconDownload', size: 'lg', classes: 'btn--secondary' }
  ])

  const textLinks = ref([
    { id: 1, label:'@HubSpot', href:'https://hubspot.com', target:'_blank', type:'default' },
    { id: 2, label:'@Klaviyo', href:'https://klaviyo.com', target:'_blank', type:'default' },
    { id: 3, label:'@priceline', href:'https://priceline.com', target:'_blank', type:'default' }
  ])
</script>

<template>
  <header class="container--simple left">
    <h1>I&#x2019;m Zach &mdash; a friendly neighborhood senior product designerd who enjoys crafting frictionless experiences and solving complex problems. Previously <Link :label="textLinks[0].label" :href="textLinks[0].href" :target="textLinks[0].target" :type="textLinks[0].type" />, <Link :label="textLinks[1].label" :href="textLinks[1].href" :target="textLinks[1].target" :type="textLinks[1].type" />, <Link :label="textLinks[2].label" :href="textLinks[2].href" :target="textLinks[2].target" :type="textLinks[2].type" />.</h1>
    <section class="container__links">
      <Button
        v-for="button in buttonLinks"
        :id="button.id"
        :label="button.label"
        :href="button.href"
        :target="button.target"
        :type="button.type"
        :iconType="button.iconType"
        :iconName="button.iconName"
        :size="button.size"
        :classes="button.classes"
      />
    </section>
  </header>
</template>

<style scoped>
  header {
    display: inline-grid;
    row-gap: calc((var(--base__font-size) * 2) * 1px);
    row-gap: calc((var(--base__font-size) * 2) / var(--base__font-size) * 1rem);
    padding-top: calc((var(--base__font-size) * 4) * 1px);
    padding-top: calc((var(--base__font-size) * 4) / var(--base__font-size) * 1rem);
    padding-bottom: calc((var(--base__font-size) * 4) * 1px);
    padding-bottom: calc((var(--base__font-size) * 4) / var(--base__font-size) * 1rem);
    height: fit-content;
    align-self: flex-start;
  }

  h1 {
    color: var(--primary__color--text);
    font-variation-settings: 'wght' var(--text__font-weight--medium);
  }

  h1 a {
    font-variation-settings: 'wght' 600;
  }

  .container__links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .container__links > *:last-child {
    margin-right: 0;
  }
</style>