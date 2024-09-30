<script setup lang="ts">

import HeaderNav from '../components/home/HeaderNav.vue'
import HeaderIntro from '../components/home/HeaderIntro.vue'

import Footer from '../components/home/Footer.vue'

</script>

<template>
  <section class="container container__grid">
    <HeaderNav greeting="&#x2018;Sup" />
    <HeaderIntro />
    <Footer />
  </section>
</template>
