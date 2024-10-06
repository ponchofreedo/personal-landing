<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <main class="main__container" :layout="$route.name">
    <RouterView />
  </main>
</template>

<style scoped>

  .main__container {
    display: grid;
    grid-auto-flow: row;
    grid-auto-columns: initial;
  }

  [layout="home"] {
    grid-template-areas: "nav"
                         "header"
                         "works"
                         "about"
                         "exp"
                         "footer";
  }
</style>
