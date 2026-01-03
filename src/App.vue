<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'auto',
  })
})
</script>

<script lang="ts">
export default {
  methods: {
    scrollToWorks() {
      const id = 'works'!
      if (id !== null) {
        const offsetValue = -160
        const section = document.getElementById(id)!
        const sectionWithOffset = section.getBoundingClientRect().top + window.scrollY + offsetValue
        window.scrollTo({
          top: sectionWithOffset,
          behavior: 'smooth',
        })
        console.log('scrolling to ' + id)
      } else {
        console.log('works section doesnt exist')
      }
    },
  },
}
</script>

<template>
  <RouterView />
</template>

<style lang="scss">
main#app {
  display: flex;
  flex-direction: column;
  height: initial;
  width: 100%;
}

// style overrides for the image zoom component
.media__img--hero {
  .vh--holder {
    height: 100%;
    width: 100%;
    max-width: convertRem(1280px) !important;
    border-radius: convertRem(16px) !important;
  }
}
</style>
