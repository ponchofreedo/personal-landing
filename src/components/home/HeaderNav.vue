<script setup lang="ts">
defineProps<{
  greeting: string
}>()
</script>

<template>
  <nav class="container__simple">
    <h1>{{ greeting }}<span>.</span></h1>
    <ul>
      <li>
        <a href="https://github.com/ponchofreedo/portfolio-projects/" target="_blank">
          <h4>Work things<span>.</span></h4>
          <p>They're in GitHub.</p>
        </a>
      </li>
      <li>
        <a href="https://1drv.ms/b/s!AiXwFLoNRqBCidpZo0KZEcXaXsfTWg?e=QejLIg" target="_blank">
          <h4>R&eacute;sum&eacute;<span>.</span></h4>
          <p>...and OneDrive.</p>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    display: grid;
    grid-template-columns: subgrid;
    border-top: calc((var(--base__font-size) * 0.5) * 1px) solid var(--primary__color--theme);
    border-top: calc((var(--base__font-size) * 0.5) / var(--base__font-size) * 1rem) solid var(--primary__color--theme);
    padding-top: calc((var(--base__font-size) * 5) * 1px);
    padding-top: calc((var(--base__font-size) * 5) / var(--base__font-size) * 1rem);
    height: fit-content; /* eventually ill figure out where that height issue comes from */
  }

  h1 {
    grid-column: 1 / span 2;
    align-content: center;
  }

  ul {
    display: inherit;
    grid-column: 3 / span 4;
    grid-template-columns: 2fr 2fr;
    -moz-column-gap: calc((var(--base__font-size) * 2.5) * 1px);
    -moz-column-gap: calc((var(--base__font-size) * 2.5) / var(--base__font-size) * 1rem);
    column-gap: calc((var(--base__font-size) * 2.5) * 1px);
    column-gap: calc((var(--base__font-size) * 2.5) / var(--base__font-size) * 1rem);
    border-radius: calc((var(--base__font-size) * 10) * 1px);
    border-radius: calc((var(--base__font-size) * 10) / var(--base__font-size) * 1rem);
    padding: calc((var(--base__font-size) * 2.5) * 1px);
    padding: calc((var(--base__font-size) * 2.5) / var(--base__font-size) * 1rem);
    background-color: #242E32;
  }

  @media (max-width: 64rem) {
    h1 {
      grid-column-end: span 3;
    }

    ul {
      grid-column: 4 / fit-content;
    }
  }

  ul li {
    display: inline-flex;
    justify-content: center;
    text-align: center;
  }

  h1,
  h4,
  a {
    color: var(--primary__color-text);
  }

  h1 span,
  h4 span {
    color: var(--primary__color--theme);
  }

  p {
    color: var(--base__color--steel);
  }

  a {
    text-decoration: none;
  }
</style>
