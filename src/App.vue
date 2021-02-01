<template>
  <div id="app">
    <Header />
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// import meyer css reset
import 'reset-css';

import Header from './components/Header.vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    Header,
    HelloWorld
  }
}
</script>

<style lang="scss">
  //Global variables
  $base__font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  $base__colors: (
    "steel": #A0B1BA,
    "psychic": #E065FF,
    "electric": #FFCD1C,
    "poison": #0AE394,
    "fire": #F47112,
    "ice": #2CE0D7,
    "dark": #1B2F3A,
    "ghost": #FAFAFF,
    "water": #1499FF
  );

  // @function color($key: 'dark') {
  //   @return map-get($base__colors, $key);
  // }

  // set up the round-robin vars and classes
  :root {
    --base__font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';

    --base__color--steel: #A0B1BA;
    --base__color--psychic: #E065FF;
    --base__color--electric: #FFCD1C;
    --base__color--poison: #0AE394;
    --base__color--fire: #F47112;
    --base__color--ice: #2CE0D7;
    --base__color--dark: #1B2F3A;
    --base__color--ghost: #FAFAFF;
    --base__color--water: #1499FF;

    --base__spacing-multiplier: 8px;
    --base__spacing-1: calc(var(--base__spacing-multiplier)*1);
    --base__spacing-2: calc(var(--base__spacing-multiplier)*2);

    --primary__color: var(--base__color--poison);
    --primary__background: var(--base__color--dark);
    --primary__text-color: var(--base__color--ghost);
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--base__font-family);
    text-align: center;
    margin: 0;
    padding: 0;

    /* influence these based on the data-theme */
    background-color: var(--primary__background);
    color: var(--primary__text-color);

    &[data-theme="steel"] {
      --primary__color: var(--base__color--steel);
    }

    &[data-theme="psychic"] {
      --primary__color: var(--base__color--psychic);
    }

    &[data-theme="electric"] {
      --primary__color: var(--base__color--electric);
    }

    &[data-theme="poison"] {
      --primary__color: var(--base__color--poison);
    }

    &[data-theme="fire"] {
      --primary__color: var(--base__color--fire);
    }

    &[data-theme="ice"] {
      --primary__color: var(--base__color--ice);
    }

    &[data-theme="ghost"] {
      --primary__color: var(--base__color--ghost);
    }

    &[data-theme="water"] {
      --primary__color: var(--base__color--water);
    }
  }

  .conatiner {
    display: grid;
  }
</style>
