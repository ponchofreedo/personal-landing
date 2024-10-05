<script setup lang="ts">
  import Button from '@global/Button.vue'

  defineProps<{
    greeting: string
  }>()
</script>

<template>
  <nav class="container--fill">
    <h1>{{ greeting }}<span>.</span></h1>
    <ul>
      <li>
        <Button
          id="1"
          label="Projects"
          href="https://github.com/ponchofreedo/portfolio-projects/"
          target="_blank"
          type="iconButton"
          iconType="icon"
          iconName="IconArrowLeft"
          size="xs"
          classes="btn--tertiary rotated"
        />
      </li>
      <li id="im__available">
        <span>Available for hire</span><icon type="icon" name="IconAlert" />
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
    display: flex;
    flex-direction: row;
    justify-self: flex-end;
    align-self: center;
  }

  ul li {
    font-size: 1rem;
    line-height: 1.0;
    font-variation-settings: 'wght' var(--text__font-weight--medium);
  }

  ul svg {
    height: 1rem;
    width: 1rem;
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

  /* shameless...un-dry...but necessary */
  #im__available {
    display: flex;
    background-color: var(--primary__color--theme);
    color: var(--base__color--white);
    padding: 0.5rem 0.75rem;
    border-radius: var(--text__font-size--p--px);
    border-radius: var(--text__font-size--p--rem);
    align-items: center;
  }

  #im__available span {
    font-variation-settings: 'wght' var(--text__font-weight--medium);
    margin-right: 0.25rem;
  }

  #im__available svg {
    fill: var(--base__color--blue-3);
  }
</style>
