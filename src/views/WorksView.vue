<script setup lang="ts">
  import Navigation from '@global/Navigation.vue'
  import Header from '@components/works/Header.vue'
  import WorksList from '@components/works/WorksList.vue'
  import Footer from '@global/Footer.vue'
</script>

<script lang="ts">
    export default {
        mounted() {
            window.scrollTo(0, 0);
        }
    }
</script>

<template>
  <Navigation />
  
  <!-- header start -->
  <Header />
  <!-- header end -->

  <!-- works list start -->
  <WorksList />
  <!-- works list end -->

  <!-- footer start -->
  <Footer />
  <!-- footer end -->

</template>

<style lang="scss" scoped>
  @use "sass:math";

  #works__list,
  #footer {
    @include inner-flex-container;
  }
</style>
