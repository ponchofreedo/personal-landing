<script setup lang="ts">
  import { ref } from 'vue'
  import Button from '@global/Button.vue'
  import Link from '@global/Link.vue'

  const buttonLinks = ref([
    { id: 1, label: 'LinkedIn', href:'https://www.linkedin.com/in/zpfreed', target: '_blank',  size: 'sm', classes:'btn--primary on--dark' },
    { id: 2, label: 'Figma', href:'https://www.figma.com/@ponchofreedo', target: '_blank',  size: 'sm', classes:'btn--primary on--dark' },
    { id: 3, label: 'GitHub', href:'https://www.github.com/ponchofreedo', target: '_blank',  size: 'sm', classes:'btn--primary on--dark' },
    { id: 4, label: 'Dribbble', href:'https://www.dribbble.com/ponchofreedo', target: '_blank',  size: 'sm', classes:'btn--primary on--dark' },
    { id: 5, label: 'Instagram', href:'https://www.instagram.com/ponchofreedo', target: '_blank',  size: 'sm', classes:'btn--primary on--dark' }
  ])
</script>

<template>
  <article>
    <section class="container container__grid">
      <main>
        <h2 class="section__title">Talk to me, Goose.</h2>
        <p>You've come this far on these here interwebs to find me. Unfortunately the IKEA instructions for my B&auml;tssignalen are pretty rough &nbsp; definitely missing a wooden peg &nbsp; and my Rebel transponder code is a bit older and just barely "checks out," so because of those issues, feel free to take a gander at my <Link label="r&eacute;sum&eacute;" href="https://1drv.ms/b/s!AiXwFLoNRqBCifMJqJtyZbbOOAROcA?e=oMsV9w" target="_blank" type="inline" classes="link--on-blue" /> or just <Link label="drop me a line" href="mailto:zach.freed@gmail.com?subject=%27Sup" target="_blank" type="inline" classes="link--on-blue" />.</p>
        <p>Or, technical issues aside, you can find me at one of these places below.</p>
        <ul>
          <li v-for="button in buttonLinks">
            <Button
              :label="button.label"
              :href="button.href"
              :target="button.target"
              :size="button.size"
              :classes="button.classes"
            />
          </li>
        </ul>
        <article class="footer__colophon">
          <small><b>Colophon.</b></small>
          <small>This site is meant to be a playground for experimentation. Designed in <Link label="Figma" href="https://figma.com" target="_blank" type="default" classes="link--inherit" />, written in <Link label="Vue 3" href="https://vuejs.org" target="_blank" type="default" classes="link--inherit" />, authored in <Link label="Sublime Text" href="https://sublimetext.com" target="_blank" type="default" classes="link--inherit" />, and shipped with <Link label="Vercel" href="https://vercel.com" target="_blank" type="default" classes="link--inherit" />. Type set in <Link label="Neue Montreal" href="https://pangrampangram.com/products/neue-montreal" target="_blank" type="default" classes="link--inherit" /> by Mats Desjardins from <Link label="Pangram Pangram Foundry" href="https://pangrampangram.com/" target="_blank" type="default" classes="link--inherit" /> and icons from <Link label="Ionicons" href="https://ionic.io/ionicons" target="_blank" type="default" classes="link--inherit" />. Built with controlled chaos and several plates of Deuki Hong's <Link label="Korean Pan-Fried Chicken" href="https://www.youtube.com/watch?v=Z3gOJF1qnXM" target="_blank" type="default" classes="link--inherit" />. Also, built with my rescue dog, Obi, under my desk keeping my feet warm.</small>
        </article>
      </main>
    </section>
    <footer class="container container__grid">
      <aside>
        <!--<icon type="icon" name="IconArrowUp" />-->
      </aside>
      <main>
        <small>&copy; 2024 Zach Freed &mdash; Have a nice day!</small>
      </main>
    </footer>
  </article>
</template>

<style scoped>
  article {
    display: inline-grid;
    padding: calc((var(--base__font-size) * 5) * 1px);
    padding: calc((var(--base__font-size) * 5) / var(--base__font-size) * 1rem);
    align-self: flex-start;
    align-content: flex-start;
    justify-content: space-between;
  }

  main {
    grid-column: 3 / span 6;
  }

  footer {
    margin-top: 5rem;
    padding-top: 5rem;
    border-top: 0.125rem solid var(--base__color--blue-2);
  }

  h2,
  p,
  a {
    color: white;
  }

  h2 {
    margin-bottom: 1.5rem;
  }

  p + p {
    margin-top: 1.5rem;
  }

  a.link {
    font-weight: var(--text__font-weight--semibold);
  }

  @supports (font-variation-settings: normal) {
    a.link {
      font-variation-settings: 'wght' var(--text__font-weight--semibold);
    }
  }

  ul {
    display: flex;
    margin-top: 1.5rem;
    gap: 0.5rem;
  }

  .footer__colophon {
    padding: 0;
    margin-top: 5rem;
  }

  .footer__colophon span,
  .footer__colophon small,
  footer main small {
    color: var(--base__color--blue-3);
  }

  .footer__colophon small {
    margin-top: 0.5rem;
  }

  footer svg {

  }
</style>
