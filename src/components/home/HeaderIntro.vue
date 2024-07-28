<script setup lang="ts">
  import { ref } from 'vue'
  import Button from '../global/Button.vue'

  const links = ref([
    // { id: 1, name: 'About me', href:'#about', location:'', size: 'lg', hasIcon: 'true', iconName: 'arrow-down' },
    { id: 2, name: 'LinkedIn', href:'https://www.linkedin.com/in/zpfreed', location: '_blank', size: 'lg' },
    { id: 3, name: 'Figma', href:'https://www.figma.com/@ponchofreedo', location:'_blank', size: 'lg' },
    { id: 4, name: 'GitHub', href:'https://www.github.com/ponchofreedo', location:'_blank', size: 'lg' },
    { id: 5, name: 'Dribbble', href:'https://www.dribbble.com/ponchofreedo', location:'_blank', size: 'lg' },
    { id: 6, name: 'Instagram', href:'https://www.instagram.com/ponchofreedo', location:'_blank', size: 'lg' }
  ])
</script>

<template>
  <header class="container__simple">
    <h2>I'm Zach &mdash; a designer and front-end guy who likes to find solutions for people and teams of all shapes and sizes. Currently, I'm building property management experiences at <a href="https://hubspot.com" target="_blank">HubSpot</a>.</h2>
    <section class="container__links">
      <Button
        v-for="link in links"
        :id="link.id"
        :name="link.name"
        :href="link.href"
        :location="link.location"
        :size="link.size"
      />
    </section>
  </header>
</template>

<style scoped>
  header {
    display: flex;
    flex-direction: column;
    row-gap: calc((var(--base__font-size) * 4) * 1px);
    row-gap: calc((var(--base__font-size) * 4) / var(--base__font-size) * 1rem);
    padding-top: calc((var(--base__font-size) * 10) * 1px);
    padding-top: calc((var(--base__font-size) * 10) / var(--base__font-size) * 1rem);
    padding-bottom: calc((var(--base__font-size) * 10) * 1px);
    padding-bottom: calc((var(--base__font-size) * 10) / var(--base__font-size) * 1rem);
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