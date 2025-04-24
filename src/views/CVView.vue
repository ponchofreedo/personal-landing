<script setup lang="ts">
  import Navigation from '@global/Navigation.vue'
</script>

<template>
  <Navigation />
  <div class="CV">
    <h1>This is the CV</h1>
  </div>
</template>

<style>
  nav {
    padding: 0 64px;
    padding: 0 4rem;
  }

  @media (max-width: 800px) {
    nav {
      padding: 0;
    }
  }
</style>
