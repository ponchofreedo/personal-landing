<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="main__container">
    <RouterView />
  </main>
</template>

<style scoped>

  .main__container {
    display: grid;
    padding-left: calc((var(--base__font-size) * 2.5) * 1px);
    padding-left: calc((var(--base__font-size) * 2.5) / var(--base__font-size) * 1rem);
    padding-right: calc((var(--base__font-size) * 2.5) * 1px);
    padding-right: calc((var(--base__font-size) * 2.5) / var(--base__font-size) * 1rem);
    height: 100vh;
  }
</style>
