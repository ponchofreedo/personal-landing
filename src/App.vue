<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style lang="scss">
  //Global variables
  $base__font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  $base__colors: (
    "steel": #A0B1BA,
    "cyber": #E065FF,
    "sun": #FFCD1C,
    "poison": #0AE394,
    "burn": #F47112,
    "ice": #2CE0D7,
    "dark": #1B2F3A,
    "ghost": #FAFAFF
  );

  @function color($key: 'dark') {
    @return map-get($base__colors, $key);
  }

  // set up the round-robin vars and classes
  :root {
    --base-color__steel: #A0B1BA;
    --base-color__cyber: #E065FF;
    --base-color__sun: #FFCD1C;
    --base-color__poison: #0AE394;
    --base-color__burn: #F47112;
    --base-color__ice: #2CE0D7;
    --base-color__dark: #1B2F3A;
    --base-color__ghost: #FAFAFF;

    --primary-color: var(--base-color__poison);
    --primary-background: var(--base-color__dark);
    --primary-text: var(--base-color__ghost);
  }

  body {
    background-color: var(--primary-background);
    color: var(--primary-text);

    &.theme-1 {
      --primary-color: var(--base-color__steel);
    }

    &.theme-2 {
      --primary-color: var(--base-color__cyber);
    }

    &.theme-3 {
      --primary-color: var(--base-color__sun);
    }

    &.theme-4 {
      --primary-color: var(--base-color__poison);
    }

    &.theme-5 {
      --primary-color: var(--base-color__burn);
    }

    &.theme-6 {
      --primary-color: var(--base-color__ice);
    }
  }

  #app {
    font-family: $base__font-family;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
</style>
