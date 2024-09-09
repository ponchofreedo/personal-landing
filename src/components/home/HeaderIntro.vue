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
    <h1>I'm Zach &mdash; a senior product designer who enjoys crafting frictionless experiences and solving complex problems. Previously <a href="https://hubspot.com" target="_blank">@HubSpot</a>, <a href="https://klaviyo.com" target="_blank">@Klaviyo</a>, <a href="https://priceline.com" target="_blank">@priceline</a>.</h1>
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

  h2{
    color: var(--primary__color--text);
  }

  a {
    text-decoration: none;
    text-decoration-color: white;
    text-decoration-thickness: unset;
    text-decoration-skip-ink: none;
    transition: color 80ms ease-in-out,
                text-decoration 80ms ease-in-out;

  }

  a,
  a:active,
  a:link,
  a:visited {
    color: var(--primary__color--theme);
  }

  a:hover {
    /*color: var(--base__color--blue-3);*/
    text-decoration: revert;
    text-decoration-style: solid;
    text-decoration-color: var(--primary__color--theme);
    text-decoration-thickness: from-font;
    text-underline-offset: -1%;
  }

  /*a:hover {
    color: var(--base__color--blue-3);
    outline-color: red;
    outline-style: auto;
  }*/

  .container__links {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .container__links > * {
    margin-top: calc(var(--base__multiplier) * 1px);
    margin-top: calc((var(--base__multiplier) / var(--base__font-size)) * 1rem);
    margin-right: calc(var(--base__multiplier) * 1px);
    margin-right: calc((var(--base__multiplier) / var(--base__font-size)) * 1rem);
  }

  .container__links > *:last-child {
    margin-right: 0;
  }
</style>