<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import HeaderNav from '../components/HeaderNav.vue'
</script>

<template>
  <section class="container__grid">
    <HeaderNav greeting="'Sup" />
    <TheWelcome />
  </section>
</template>
