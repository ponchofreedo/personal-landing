<script setup lang="ts">
  import { ref } from 'vue'
  import Button from '../global/Button.vue'

  const links = ref([
    { id: 1, name: 'LinkedIn', href:'https://www.linkedin.com/in/zpfreed', location: '_blank', type:'iconOnlyButton', size: 'lg' },
    { id: 2, name: 'Figma', href:'https://www.figma.com/@ponchofreedo', location:'_blank', type:'iconOnlyButton', size: 'lg' },
    { id: 3, name: 'GitHub', href:'https://www.github.com/ponchofreedo', location:'_blank', type:'iconOnlyButton', size: 'lg' },
    { id: 4, name: 'Dribbble', href:'https://www.dribbble.com/ponchofreedo', location:'_blank', type:'iconOnlyButton', size: 'lg' },
    { id: 5, name: 'Instagram', href:'https://www.instagram.com/ponchofreedo', location:'_blank', type:'iconOnlyButton', size: 'lg' },
    { id: 6, name: 'Resume', href:'https://1drv.ms/b/s!AiXwFLoNRqBCidwdUMbw_CSpy98XYg?e=SQKXLJ', location:'_blank', type:'button', size: 'lg' }
  ])
</script>

<template>
  <header class="container--simple">
    <h2>I'm Zach &mdash; a senior product designer who enjoys crafting frictionless experiences and solving complex problems. Previously <a href="https://hubspot.com" target="_blank">@HubSpot</a>, <a href="https://klaviyo.com" target="_blank">@Klaviyo</a>.</h2>
    <section class="container__links">
      <Button
        v-for="link in links"
        :id="link.id"
        :name="link.name"
        :href="link.href"
        :location="link.location"
        :type="link.type"
        :size="link.size"
      />
    </section>
  </header>
</template>

<style scoped>
  header {
    display: inherit;
    row-gap: calc((var(--base__font-size) * 2) * 1px);
    row-gap: calc((var(--base__font-size) * 2) / var(--base__font-size) * 1rem);
    padding-top: calc((var(--base__font-size) * 4) * 1px);
    padding-top: calc((var(--base__font-size) * 4) / var(--base__font-size) * 1rem);
    padding-bottom: calc((var(--base__font-size) * 4) * 1px);
    padding-bottom: calc((var(--base__font-size) * 4) / var(--base__font-size) * 1rem);
    grid-template-rows: auto 1fr;
    height: fit-content;
    align-self: flex-start;
  }

  h2,
  a {
    color: var(--primary__color--text);
  }

  a {
    text-decoration-color: var(--primary__color--theme);
    text-decoration-thickness: calc((var(--base__font-size) / 2) * 1px);
  }
</style>