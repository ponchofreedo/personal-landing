<script setup lang="ts">
  import { onMounted } from 'vue'

    onMounted(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'auto'
        })
    })
</script>

<script lang="ts">
    export default {
        methods: {
            scrollToWorks() {
                const id = "works"!;
                if (id !== null) {
                    const offsetValue = -160;
                    const section = document.getElementById(id)!;
                    const sectionWithOffset = section.getBoundingClientRect().top + window.scrollY + offsetValue;
                    window.scrollTo({
                        top: sectionWithOffset,
                        behavior: 'smooth'
                    });
                    console.log('scrolling to ' + id);
                } else {
                    console.log('works section doesnt exist');
                }
            }
        }
    };
</script>

<template>
  <!-- <Navigation /> -->
  <RouterView />
</template>

<style lang="scss">

  main#app {
    display: flex;
    flex-direction: column;
    height: initial;
    max-width: convertRem(1280px);
    margin: auto;
  }

  @media (max-width: 960px) {
    main#app {
      width: 100%;
      padding: 0 convertRem(24px);
    }
  }

</style>
