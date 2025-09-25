<script setup lang="ts">

</script>

<template>
  <!-- <Navigation /> -->
  <RouterView />
</template>

<style lang="scss">

  main#app {
    display: flex;
    flex-direction: column;
    margin: auto;
    max-width: 1080px;
    max-width: 67.5rem;
  }

  @media (max-width: 960px) {
    main#app {
      width: 100%;
      padding: 0 24px;
      padding: 0 1.5rem;
    }
  }

</style>
