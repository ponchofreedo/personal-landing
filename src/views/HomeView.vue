<script setup lang="ts">

import GlobalNav from '@components/layout/GlobalNav.vue'

import HeaderIntro from '@components/home/HeaderIntro.vue'
import HeaderFooter from '@components/home/HeaderFooter.vue'

import AboutSection from '@components/home/AboutSection.vue'
import ExpSection from '@components/home/ExpSection.vue'

import GlobalFooter from '@components/layout/GlobalFooter.vue'

</script>

<template>
  <!-- header start -->
  <header id="header" class="container container__grid">
    <GlobalNav greeting="&#x2018;Sup" />
    <HeaderIntro />
    <HeaderFooter />
  </header>
  <!-- header end -->
  <!-- works start
  <section id="works" class="container container__grid">
    <WorksSection />
  </section>
  works end -->
  <!-- about start -->
  <section id="about" class="container container__grid">
    <AboutSection />
  </section>
  <!-- about end -->
  <!-- exp start -->
  <section id="exp" class="container container__grid">
    <ExpSection />
  </section>
  <!-- exp end -->
  <!-- footer start -->
  <footer id="footer">
    <GlobalFooter :layout="$route.name" />
  </footer>
  <!-- footer end -->
</template>

<style scoped>
  section + section {
    margin-top: 10rem;
  }

  section[id] {
    min-height: -moz-available;
    min-height: -webkit-fill-available;
    min-height: fill-available;
  }

  #header {
    height: 100vh; /* override the min-height */
    grid-area: header;
    grid-template-rows: auto 1fr auto;
  }

  #works {
    grid-area: works;
  }

  #about {
    grid-area: about;
    margin-top: 10rem;
  }

  #exp {
    grid-area: exp;
  }

  #footer {
    grid-area: footer;
    height: max-content;
    width: 100%;
    margin-top: 10rem;
    background-color: var(--primary__color--theme);
  }

  /* exclude footer from left and right padding */
  #header,
  #works,
  #about,
  #exp {
    padding-left: calc((var(--base__font-size) * 5) * 1px);
    padding-left: calc((var(--base__font-size) * 5) / var(--base__font-size) * 1rem);
    padding-right: calc((var(--base__font-size) * 5) * 1px);
    padding-right: calc((var(--base__font-size) * 5) / var(--base__font-size) * 1rem);
  }

  #works,
  #about,
  #exp {
    height: inherit;
  }

  @media (min-width: 128rem) {
    #works,
    #about,
    #exp {
      justify-self: flex-start;
    }
  }

</style>
