<script setup lang="ts">
import GlobalNavigation from '@global/GlobalNavigation.vue'
import Header from '@components/works/Header.vue'
import WorksList from '@components/works/WorksList.vue'
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
  <Header />
  <!-- header end -->

  <!-- works list start -->
  <WorksList />
  <!-- works list end -->

  <!-- footer start -->
  <GlobalFooter />
  <!-- footer end -->
</template>

<style lang="scss" scoped>
@use 'sass:math';

#works__list,
#footer {
  @include container-inner-grid;
}
</style>
