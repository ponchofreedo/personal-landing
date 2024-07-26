<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
import HeaderNav from '../components/HeaderNav.vue'
import HeaderIntro from '../components/HeaderIntro.vue'
</script>

<template>
  <section class="container__grid">
    <HeaderNav greeting="'Sup" />
    <HeaderIntro />
    <TheWelcome />
  </section>
</template>
