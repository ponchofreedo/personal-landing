<script setup lang="ts">
defineProps<{
  greeting: string
}>()
</script>

<template>
  <nav class="container--fill">
    <h1>{{ greeting }}<span>.</span></h1>
    <ul>
      <li>
        <a href="https://github.com/ponchofreedo/portfolio-projects/" target="_blank">
          <span>Projects</span><icon type="icon" name="IconArrowDown" />
        </a>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
  nav {
    display: inline-grid;
    border-top: calc((var(--base__font-size) * 0.5) * 1px) solid var(--primary__color--theme);
    border-top: calc((var(--base__font-size) * 0.5) / var(--base__font-size) * 1rem) solid var(--primary__color--theme);
    padding-top: calc((var(--base__font-size) * 5) * 1px);
    padding-top: calc((var(--base__font-size) * 5) / var(--base__font-size) * 1rem);
    align-self: flex-start;
    align-content: flex-start;
    justify-content: space-between;
  }

  h1 {
    align-content: center;
    color: var(--base__color--black-1);
  }

  ul {
    justify-self: flex-end;
    align-self: center;
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
    justify-content: center;
    text-align: left;
    margin-right: 16px;
  }

  li a {
    display: flex;
    align-items: center;
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

  a {
    text-decoration: none;
  }
</style>
