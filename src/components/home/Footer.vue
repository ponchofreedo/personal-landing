<script setup lang="ts">
  const isHome = "true"
</script>

<template>
  <footer class="container--fill" v-if="isHome === 'true'">
    <p>&copy; 2024. NY born and bred. Based in Stamford, CT.</p>
  </footer>
</template>

<style scoped>
  footer {
    display: inherit;
    padding-bottom: calc((var(--base__font-size) * 1.5) * 1px);
    padding-bottom: calc((var(--base__font-size) * 1.5) / var(--base__font-size) * 1rem);
    height: fit-content;
    align-self: flex-end;
  }

  p {
    color: var(--primary__color--text);
  }
</style>
