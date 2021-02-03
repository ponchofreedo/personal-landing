<template>
  <div id="app">
    <Header />
    <Body />
    <Footer />
  </div>
</template>

<script>
// import meyer css reset
import 'reset-css';

import Header from './components/Header.vue'
import Body from './components/Body.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Body,
    Footer
  }
}
</script>

<style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');</style>

<style lang="scss">
  // global variables
  $base__colors: (
    "steel": #A0B1BA,
    "psychic": #E065FF,
    "electric": #FFCD1C,
    "poison": #16D48E,
    "fire": #E26D18,
    "ice": #2CE0D7,
    "dark": #1B2F3A,
    "ghost": #FAFAFF,
    "water": #1499FF
  );

  // global mixins

  // thanks Karl Merkli (https://css-tricks.com/snippets/css/less-mixin-for-rem-font-sizing/)
  @function strip-unit($num) {
    @return $num / ($num * 0 + 1);
  }

  @mixin rem-fallback($property, $values...) {
    $max: length($values);
    $pxValues: '';
    $remValues: '';

    @for $i from 1 through $max {
      $value: strip-unit(nth($values, $i));
      $pxValues: #{$pxValues + $value*16}px;

      @if $i < $max {
        $pxValues: #{$pxValues + " "};
      }
    }

    @for $i from 1 through $max {
      $value: strip-unit(nth($values, $i));
      $remValues: #{$remValues + $value}rem;

      @if $i < $max {
        $remValues: #{$remValues + " "};
      }
    }

    #{$property}: $pxValues;
    #{$property}: $remValues;
  }

  // @function color($key: 'dark') {
  //   @return map-get($base__colors, $key);
  // }

  // set up the round-robin vars and classes
  :root {
    --base__multiplier: 8px;
    --base__font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    --base__font-weight: var(--font-weight--normal);
    --base__font-size: calc(var(--base__multiplier)*2);

    --base__color--steel: #A0B1BA;
    --base__color--psychic: #D775F0;
    --base__color--electric: #FFCD1C;
    --base__color--poison: #16D48E;
    --base__color--fire: #E26D18;
    --base__color--ice: #2CE0D7;
    --base__color--dark: #1B2F3A;
    --base__color--ghost: #FAFAFF;
    --base__color--water: #1499FF;

    --base__spacing-1: calc(var(--base__multiplier)*1);
    --base__spacing-2: calc(var(--base__multiplier)*2);

    --primary__color: var(--base__color--poison);
    --primary__background: var(--base__color--dark);
    --primary__text-color: var(--base__color--ghost);

    --font-weight--normal: 400;
    --font-weight--medium: 500;
    --font-weight--semi: 600;
    --font-weight--bold: 700;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--base__font-family);
    font-weight: var(--base__font-weight);
    @include rem-fallback(font-size, 1);    // equivalent to 1rem / 16px
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

  a {
    color: var(--primary__color);
    font-weight: var(--font-weight--bold);
  }

  .container {
    display: grid;
    justify-content: center;
  }

  .container__grid {
    grid-template-columns: repeat(8, 1fr);
    @include rem-fallback(column-gap, 2.5);
    width: calc(100vw - 10rem);
    max-width: 1440px
  }

  .container__content {
    @include rem-fallback(max-width, 80);
    @include rem-fallback(padding-top, 12);
    grid-column-start: 3;
    grid-column-end: 8;   // 8 cols, 9 lines
  }

  .container__inner-container {
    display: inherit;
    align-self: flex-start;
    position: relative;
  }

  .container__header,
  .container__body,
  .container__footer {
    @extend .container__inner-container;
  }

  .container__header {
    grid-area: header;
  }

  .container__body {
    grid-area: body;
  }

  .container__footer {
    grid-area: footer;
  }

  h1,
  .text--h1 {
    @include rem-fallback(font-size, 2);
    @include rem-fallback(line-height, 3.2);
    font-weight: var(--font-weight--medium);
  }

  h2,
  .text--h2 {
    @include rem-fallback(font-size, 2.5);
    @include rem-fallback(line-height, 4);
    font-weight: var(--font-weight--bold);
    @include rem-fallback(letter-spacing, -0.064);
  }

  h4,
  .text--h4 {
    font-weight: var(--font-weight--bold);
  }

  p {
    @include rem-fallback(font-size, 1.5);
    @include rem-fallback(line-height, 2.4);
    @include rem-fallback(margin-top, 2.5);
    @include rem-fallback(margin-bottom, 2);

    &:first-of-type {
      margin-bottom: 0;
    }

    + p {
      @include rem-fallback(margin-top, 1.25);
    }
  }
</style>
