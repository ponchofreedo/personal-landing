<script setup lang="ts">
  import Navigation from '@global/Navigation.vue'
  import Header from '@components/home/Header.vue'
  import SelectedWorks from '@components/home/SelectedWorks.vue'
  import Experience from '@components/home/Experience.vue'
  import Resources from '@components/home/Resources.vue'
  import Experimental from '@components/home/Experimental.vue'
  import Contact from '@global/Contact.vue'
  import Footer from '@global/Footer.vue'
</script>

<template>
  <Navigation />
  
  <!-- header start -->
  <Header />
  <!-- header end -->

  <!-- works start -->
  <SelectedWorks />
  <!-- works end -->

  <!-- experience start -->
  <Experience />
  <!-- experience end -->

  <!-- resources start -->
  <Resources />
  <!-- resources end -->

  <!-- fun start -->
  <Experimental />
  <!-- fun end -->

  <!-- contact start -->
  <Contact />
  <!-- contact end -->

  <!-- footer start -->
  <Footer />
  <!-- footer end -->

</template>

<style lang="scss" scoped>
  @use "sass:math";

  #works,
  #experience,
  #resources,
  #fun-section,
  #footer {
    @include inner-flex-container;
  }

  @media (max-width: 800px) {
    nav,
    header,
    #works,
    #experience,
    #resources,
    footer {
      padding: 0;
    }
  }
</style>
