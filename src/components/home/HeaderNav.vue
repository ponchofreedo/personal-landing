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
          <span>Projects</span><svg></svg>
        </a>
      </li>
      <li>
        <a href="https://1drv.ms/b/s!AiXwFLoNRqBCidpZo0KZEcXaXsfTWg?e=QejLIg" target="_blank">
          <span>CV</span><svg></svg>
        </a>
      </li>
      <li>
        <a aria-label="color mode" href="https://1drv.ms/b/s!AiXwFLoNRqBCidpZo0KZEcXaXsfTWg?e=QejLIg" target="_blank">
          <span class="hidden">mode</span><svg></svg>
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    display: flex;
    border-top: calc((var(--base__font-size) * 0.5) * 1px) solid var(--primary__color--theme);
    border-top: calc((var(--base__font-size) * 0.5) / var(--base__font-size) * 1rem) solid var(--primary__color--theme);
    padding-top: calc((var(--base__font-size) * 5) * 1px);
    padding-top: calc((var(--base__font-size) * 5) / var(--base__font-size) * 1rem);
    height: fit-content; /* eventually ill figure out where that height issue comes from */
    justify-content: space-between;
    align-content: center;
  }

  h1 {
    align-content: center;
  }

  ul {
    display: flex;
    justify-self: flex-end;
    align-items: center;
  }

  ul span {
    font-size: 1rem;
  }

  ul svg {
    height: 20px;
    width: 20px;
    background-color: red;
  }

  @media (max-width: 64rem) {
    h1 {
      grid-column-end: span 3;
    }

    ul {
      grid-column: 4 / fit-content;
    }
  }

  li {
    display: inline-flex;
    justify-content: center;
    text-align: left;
    margin-right: 16px;
  }

  li:last-child {
    margin: 0;
  }

  h4,
  a {
    color: var(--primary__color--text);
  }

  h1 span {
    color: var(--primary__color--theme);
  }

  p {
    color: var(--base__color--steel);
  }

  a {
    text-decoration: none;
  }
</style>
