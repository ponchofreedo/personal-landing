<script setup lang="ts">
  import Navigation from '@global/Navigation.vue'
  import Header from '@components/home/Header.vue'
  import SelectedWorks from '@components/home/SelectedWorks.vue'
  import Experience from '@components/home/Experience.vue'
  import Resources from '@components/home/Resources.vue'
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

  <!-- contact start -->
  <Contact />
  <!-- contact end -->

  <!-- footer start -->
  <Footer />
  <!-- footer end -->
</template>

<style lang="scss" scoped>
  header,
  section,
  footer {
    margin-bottom: 120px;
    margin-bottom: 7.5rem;
  }

  nav,
  header,
  #works,
  #experience,
  #resources,
  footer {
    padding: 0 64px;
    padding: 0 4rem;
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
