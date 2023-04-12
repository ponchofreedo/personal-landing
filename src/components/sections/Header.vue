<script>
  //import Button from '@/components/core/Button.vue'

  export default {
    // components: {
    //   Button
    // },
    // data() {
    //   return {
    //     buttonList: [{ 
    //       LinkedIn: { 
    //         label: "LinkedIn",
    //       },
    //       Resume: { 
    //         label: "R&reacute;sum&eacute;",
    //       },
    //     }]
    //   }
    // },
    props: {
    }
  }
  
</script>

<template>
  <div class="theme__highlight"></div>
  <header class="container">
    <h1>'Sup</h1>
    <h2>I'm Zach &mdash; a product designer who enjoys crafting frictionless experiences for real people with real needs. Recently, I was building core data management experiences at <a href="https://www.klaviyo.com" target="_blank">Klaviyo</a>.</h2>
    <ul>
      <li>
        <a href="https://1drv.ms/b/s!AiXwFLoNRqBChfAgVS4nN7C18OcttQ?e=ZEJ7nV" target="_blank" class="btn btn--primary btn__sz--lg">R&eacute;sum&eacute;</a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/zpfreed" target="_blank" class="btn btn--primary btn__sz--lg">LinkedIn</a>
      </li>
      <li>
        <a href="#" target="_blank" class="btn btn--primary btn__sz--lg" aria-label="Jump to selected works">
          <svg>arrow-down</svg>
        </a>
      </li>
    </ul>
  </header>
</template>

<style lang="scss" scoped>

@media (min-width: 1024px) {
}

</style>
