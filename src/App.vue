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
    max-width: convertRem(1280px);
  }

  @media (max-width: 960px) {
    main#app {
      width: 100%;
      padding: 0 convertRem(24px);
    }
  }

</style>
