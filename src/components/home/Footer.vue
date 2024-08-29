<script setup lang="ts">
  const isHome = "true"
</script>

<template>
  <footer class="container--fill" v-if="isHome === 'true'">
    <p>NY born and bred. Based in Stamford, CT.</p>
  </footer>
</template>

<style scoped>
  footer {
    display: inherit;
    border-bottom: calc((var(--base__font-size) * 0.5) * 1px) solid;
    border-bottom: calc((var(--base__font-size) * 0.5) / var(--base__font-size) * 1rem) solid;
    margin-bottom: calc((var(--base__font-size) * 1.5) * 1px);
    margin-bottom: calc((var(--base__font-size) * 1.5) / var(--base__font-size) * 1rem);
    padding-bottom: calc((var(--base__font-size) * 1.5) * 1px);
    padding-bottom: calc((var(--base__font-size) * 1.5) / var(--base__font-size) * 1rem);
    height: fit-content;
    align-self: flex-end;
    border-bottom-color: var(--primary__color--theme);
  }

  p {
    color: var(--primary__color--text);
  }
</style>
