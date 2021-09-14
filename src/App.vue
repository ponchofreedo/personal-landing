<template>
  <div id="app">
    <main class="container container__grid">
      <Header />
      <Body />
      <!--<Footer /> -->
    </main>
  </div>
</template>

<script>
// style imports
import 'reset-css';  // import meyer css reset

// component imports
import Header from './components/Header.vue'
import Body from './components/Body.vue'
// import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Body,
    // Footer
  }
}
</script>

<style lang="scss">
  // global mixins

  // thanks Karl Merkli (https://css-tricks.com/snippets/css/less-mixin-for-rem-font-sizing/)
  @function strip-unit($num) {
    @return $num / ($num * 0 + 1);
  }

  // add redundant rem and px properties
  // will fallback to hard pixel value when rem is not supported
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

    --base__color--black: #161616;
    --base__color--black--hex: 22, 22, 22;
    --base__color--white: #FFFFFF; // prefer ghost to white
    --base__color--white--hex: 255, 255, 255;
    --base__color--gray: #A0B1BA;
    --base__color--gray--hex: 160, 177, 186;
    --base__color--yellow: #FFCD1C;
    --base__color--yellow--hex: 255, 205, 28;
    --base__color--orange: #E26D18;
    --base__color--orange--hex: 226, 109, 24;
    --base__color--dk-blue: #18203A;
    --base__color--dk-blue--hex: 24, 32, 58;
    --base__color--blue: #1499FF;
    --base__color--blue--hex: 20, 153, 255;
    --base__color--green: #16D48E;
    --base__color--green--hex: 22, 122, 142;
    --base__color--ghost: #FAFAFF;
    --base__color--ghost--hex: 250, 250, 255;

    --base__spacing-1: calc(var(--base__multiplier)*1);
    --base__spacing-2: calc(var(--base__multiplier)*2);

    --primary__color: initial; // makes it totally agnostic and guaranteed to be overwritten
    --primary__background: var(--base__color--dk-blue);
    --primary__text-color: var(--base__color--ghost);

    --font-weight--normal: 400;
    --font-weight--medium: 500;
    --font-weight--semi: 600;
    --font-weight--bold: 700;
  }

  [data-mode="dark"] {
    --primary__background: var(--base__color--dk-blue);
    --primary__background--hex: var(--base__color--dk-blue--hex);
  }

  [data-mode="light"] {
    --primary__background: var(--base__color--ghost);
    --primary__background--hex: var(--base__color--ghost--hex);
  }

  // because, modern
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

    &[data-theme="blue"] {
      --primary__color: var(--base__color--blue);
      --primary__color--hex: var(--base__color--blue--hex);
    }

    &[data-theme="green"] {
      --primary__color: var(--base__color--green);
      --primary__color--hex: var(--base__color--green--hex);
    }

    &[data-theme="yellow"] {
      --primary__color: var(--base__color--yellow);
      --primary__color--hex: var(--base__color--yellow--hex);
    }

    &[data-theme="orange"] {
      --primary__color: var(--base__color--orange);
      --primary__color--hex: var(--base__color--orange--hex);
    }

    /* influence these based on the data-theme */
    background-color: var(--primary__background);
    color: var(--primary__text-color);
  }

  body {
    @include rem-fallback(font-size, 0.875);
  }

  a {
    color: var(--primary__color);
    font-weight: var(--font-weight--bold);
  }

  header {
    grid-area: header;
  }

  section {
    grid-area: body;
  }

  .container {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-areas: "header"
                          "body"
                          "footer";
    align-items: center;
    padding: 0 2rem;
  }

  header,
  section,
  footer {
    grid-column-start: 3;
    grid-column-end: 7;
  }

  .container__grid {
    @include rem-fallback(column-gap, 2.5);
  }

  .container__content {
    @include rem-fallback(max-width, 80);
    @include rem-fallback(padding-top, 12);
    grid-column-start: 3;
    grid-column-end: 8;   // 8 cols, 9 lines
  }

  %container__inner-container {
    display: inherit;
    align-self: flex-start;
    position: relative;
  }

  .container__header,
  .container__body,
  .container__footer {
    @extend %container__inner-container;
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

  %text-link__effects {
    text-decoration-line: underline;
    text-decoration-style: solid;
    text-decoration-color: var(--base__color--gray);
    text-decoration-thickness: 2px;
    text-underline-offset: 0;

    &:hover {
      text-underline-offset: -2px;
      text-decoration-thickness: 4px;
      text-decoration-color: var(--primary__color);
    }
  }

  p {
    @include rem-fallback(font-size, 0.875);
    @include rem-fallback(line-height, 1.4);

    a {
      transition: color 80ms ease-in-out;
      color: inherit;
      @extend %text-link__effects;

      &:hover {
        color: var(--primary__color);
      }
    }

    &:first-of-type {
      margin-bottom: 0;
    }

    + p {
      @include rem-fallback(margin-top, 1);
    }
  }
</style>
