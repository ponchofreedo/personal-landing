<script setup lang="ts">

import HeaderNav from '@components/home/HeaderNav.vue'
import HeaderIntro from '@components/home/HeaderIntro.vue'
import HeaderFooter from '@components/home/HeaderFooter.vue'

</script>

<template>
  <!-- header start -->
  <section id="header" class="container container__grid">
    <!-- header nav should become a global component -->
    <HeaderNav greeting="&#x2018;Sup" />
    <HeaderIntro />
    <HeaderFooter />
  </section>
  <!-- header end -->
  <!-- works start -->
  <!-- works end -->
  <!-- about start -->
  <section id="about" class="container container__grid">
    <HeaderIntro />
    <HeaderFooter />
  </section>
  <!-- about end -->
  <!-- exp start -->
  <section id="exp" class="container container__grid">
    <HeaderIntro />
    <HeaderFooter />
  </section>
  <!-- exp end -->
  <!-- footer start -->
  <!-- footer should be a global component -->
  <section id="footer" class="container container__grid">
    <HeaderIntro />
    <HeaderFooter />
  </section>
  <!-- footer end -->
</template>

<style scoped>
  section + section {
    margin-top: 7.5rem;
  }

  #header {
    grid-template-areas: "nav"
                         "intro"
                         "footer";
  }

  #about {

  }
</style>
