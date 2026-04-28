<script setup lang="ts">
import GlobalNavigation from '@global/GlobalNavigation.vue'
import HomeHeader from '@components/home/HomeHeader.vue'
import HomeSelectedWorks from '@components/home/HomeSelectedWorks.vue'
import HomeExperience from '@components/home/HomeExperience.vue'
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
  <HomeSelectedWorks />
  <!-- works end -->

  <!-- experience start -->
  <HomeExperience />
  <!-- experience end -->

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
#experience {
  @include container-max-width;
}
</style>
