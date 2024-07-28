<script setup lang="ts">
  const isHome = "true"
</script>

<template>
  <footer class="container__simple footer--home" v-if="isHome === 'true'">
    <p>
      <small><b>Colophon</b></small>
      <small>This site is meant to be a playground for experimentation. Designed in <a href="https://figma.com" target="_blank">Figma</a>, built with <a href="https://vuejs.org/" target="_blank">Vue</a> + <a href="https://vitejs.dev/" target="_blank">Vite</a>, authored in <a href="https://www.sublimetext.com/" target="_blank">Sublime Text</a>, and shipped with <a href="https://vercel.com/" target="_blank">Vercel</a>. Type set in <a href="https://pangrampangram.com/products/neue-montreal" target="_blank">Neue Montreal</a> by Mats Desjardins from <a href="https://pangrampangram.com/" target="_blank">Pangram Pangram Foundry</a>. Built with love and several plates of J. Kenji Lopez-Alt’s <a href="https://www.youtube.com/watch?v=Bt8YgEr-9is" target="_blank">pan-seared chicken + spring veg</a> recipe.</small>
    </p>
    <p>
      <small>&copy; 2024. Fuck the 'Rona.</small>
    </p>
  </footer>
  <footer class="container__simple footer--cv" v-else-if="isHome === 'false'">
    <p>im the cv footer</p>
  </footer>
</template>

<style scoped>
  footer {
    display: grid;
    grid-template-columns: subgrid;
    border-bottom: calc((var(--base__font-size) * 0.5) * 1px) solid;
    border-bottom: calc((var(--base__font-size) * 0.5) / var(--base__font-size) * 1rem) solid;
    padding-bottom: calc((var(--base__font-size) * 5) * 1px);
    padding-bottom: calc((var(--base__font-size) * 5) / var(--base__font-size) * 1rem);
    height: fit-content; /* eventually ill figure out where that height issue comes from */
  }

  .footer--home {
    border-bottom-color: var(--primary__color--theme);
  }

  .footer--cv {
    border-bottom-color: var(--primary__color--background);
  }

  .footer--home p {
    grid-column: 1 / 6;
  }

  .footer--cv p {
    grid-column: 1 / 8;
  }

  p + p {
    margin-top: 80px;
  }

  small {
    display: inherit;
  }

  small:first-of-type {
    margin-bottom: 8px;
  }

  a {
    text-decoration: underline;
    text-decoration-thickness: 2px;
    color: inherit;
  }

  a:hover {
    color: var(--base__color--steel)!important;
  }
</style>
