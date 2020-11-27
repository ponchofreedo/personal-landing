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
    --base-color--steel: #A0B1BA;
    --base-color--cyber: #E065FF;
    --base-color--sun: #FFCD1C;
    --base-color--poison: #0AE394;
    --base-color--burn: #F47112;
    --base-color--ice: #2CE0D7;
    --base-color--dark: #1B2F3A;
    --base-color--ghost: #FAFAFF;

    --primary-color: var(--base-color--poison);
    --primary-background: var(--base-color--dark);
    --primary-text: var(--base-color--ghost);
  }

  body {
    background-color: var(--primary-background);
    color: var(--primary-text);

    &.theme-1 {
      --primary-color: var(--base-color--steel);
    }

    &.theme-2 {
      --primary-color: var(--base-color--cyber);
    }

    &.theme-3 {
      --primary-color: var(--base-color--sun);
    }

    &.theme-4 {
      --primary-color: var(--base-color--poison);
    }

    &.theme-5 {
      --primary-color: var(--base-color--burn);
    }

    &.theme-6 {
      --primary-color: var(--base-color--ice);
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
