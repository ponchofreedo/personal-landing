<script setup lang="ts">
  import { ref } from 'vue'
  import Button from '../global/Button.vue'

  const links = ref([
    { id: 1, name: 'LinkedIn', href:'https://www.linkedin.com/in/zpfreed', location: '_blank', size: 'md' },
    { id: 2, name: 'Figma', href:'https://www.figma.com/@ponchofreedo', location:'_blank', size: 'md' },
    { id: 3, name: 'GitHub', href:'https://www.github.com/ponchofreedo', location:'_blank', size: 'md' },
    { id: 4, name: 'Dribbble', href:'https://www.dribbble.com/ponchofreedo', location:'_blank', size: 'md' },
    { id: 5, name: 'Instagram', href:'https://www.instagram.com/ponchofreedo', location:'_blank', size: 'md' }
  ])
</script>

<template>
  <article class="container__simple">
    <h2>Talk to me, Goose.</h2>
    <p class="container__tight">You've come this far on these here interwebs to find me. Unfortunately, the IKEA instructions for the bat signal are pretty rough &emdash; definitely missing a wooden peg and cam screw &emdash; and my Rebel transponder code is a bit older and just barely "checks out," so in spite of those, feel free to take a gander at my <a href="" target="_blank">r&eacute;sum&eacute;</a> or just <a href="mailto:zach.freed@gmail.com?subject=sup">drop me a line</a>.</p>
    <p class="container__tight">Or, technical snafoos aside, you can find me doing something at one of these spots below.</p>
    <section class="container__links">
      <Button
        v-for="link in links"
        :id="link.id"
        :name="link.name"
        :href="link.href"
        :location="link.location"
        :size="link.size"
        :hasIcon="link.hasIcon"
        :iconName="link.iconName"
      />
    </section>
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
  }
  
  .list__brands > * {
    display: inline-flex;
    margin-right: 8px;
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