<script setup lang="ts">

import HeaderNav from '../components/home/HeaderNav.vue'
import HeaderIntro from '../components/home/HeaderIntro.vue'

import AboutSection from '../components/home/AboutSection.vue'
import AboutContact from '../components/home/AboutContact.vue'

import Footer from '../components/home/Footer.vue'

</script>

<template>
  <section class="container__grid">
    <HeaderNav greeting="'Sup" />
    <HeaderIntro />
    <AboutSection />
    <AboutContact />
    <Footer />
  </section>
</template>
