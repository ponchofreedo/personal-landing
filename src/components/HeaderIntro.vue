<template>
  <header class="container__simple">
    <h2>I'm Zach &mdash; a designer and front-end guy who likes to find solutions for people and teams of all shapes and sizes. Currently, I'm building property management experiences at <a href="https://hubspot.com" target="_blank">HubSpot</a>.</h2>
    <ul>
      <li>
        <button type="button">1</button>
      </li>
      <li>
        <button type="button">1</button>
      </li>
      <li>
        <button type="button">1</button>
      </li>
      <li>
        <button type="button">1</button>
      </li>
      <li>
        <button type="button">1</button>
      </li>
      <li>
        <button type="button">1</button>
      </li>
    </ul>
  </header>
</template>

<style scoped>
  header {
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
    text-decoration-thickness: 8px;
  }
</style>