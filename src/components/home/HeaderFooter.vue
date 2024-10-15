<script setup lang="ts">
</script>

<template>
  <footer class="container--fill">
    <p>NY born and bred. Based in Stamford, CT.</p>
    <icon type="icon" name="IconArrowDown" />
  </footer>
</template>

<style scoped>
  footer {
    display: flex;
    flex-direction: column;
    margin-bottom: calc((var(--base__font-size) * 1.5) * 1px);
    margin-bottom: calc((var(--base__font-size) * 1.5) / var(--base__font-size) * 1rem);
    align-self: flex-end;
    row-gap: 2rem;
  }

  p {
    padding-bottom: calc((var(--base__font-size) * 1.5) * 1px);
    padding-bottom: calc((var(--base__font-size) * 1.5) / var(--base__font-size) * 1rem);
    border-bottom: calc((var(--base__font-size) * 0.25) * 1px) solid;
    border-bottom: calc((var(--base__font-size) * 0.25) / var(--base__font-size) * 1rem) solid;
    color: var(--primary__color--text);
    border-bottom-color: var(--base__color--gray-2);
  }

  svg {
    height: 2.5rem;
    width: 2.5rem;
    fill: inherit;
    color: var(--primary__color--theme);
  }
</style>
