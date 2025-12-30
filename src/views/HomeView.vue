<script setup lang="ts">
import GlobalNavigation from '@global/GlobalNavigation.vue'
import HomeHeader from '@components/home/HomeHeader.vue'
import SelectedWorks from '@components/home/SelectedWorks.vue'
import Experience from '@components/home/Experience.vue'
import Resources from '@components/home/Resources.vue'
import Experimental from '@components/home/Experimental.vue'
import GlobalContact from '@global/GlobalContact.vue'
import GlobalFooter from '@global/GlobalFooter.vue'
</script>

<script lang="ts">
export default {
  mounted() {
    window.scrollTo(0, 0)
  },
}
</script>

<template>
  <GlobalNavigation />

  <!-- header start -->
  <HomeHeader />
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
  <GlobalContact />
  <!-- contact end -->

  <!-- footer start -->
  <GlobalFooter />
  <!-- footer end -->
</template>

<style lang="scss" scoped>
@use 'sass:math';

#works,
#experience,
#resources,
#fun-section,
#footer {
  @include container-max-width;
  @include inner-flex-container;
}

@media (max-width: 800px) {
  #works,
  #experience,
  #resources,
  footer {
    padding: 0;
  }
}
</style>
