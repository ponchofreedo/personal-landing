<script setup lang="ts">
import { onMounted } from 'vue'
import GlobalNavigation from '@global/GlobalNavigation.vue'
import AboutHeader from '@components/about/AboutHeader.vue'
import GlobalFooter from '@global/GlobalFooter.vue'

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto',
  })
})
</script>

<template>
  <GlobalNavigation />

  <AboutHeader />

  <GlobalFooter />
</template>

<style lang="scss" scoped>
@use 'sass:math';
</style>
