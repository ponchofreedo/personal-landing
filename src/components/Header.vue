<template>
  <header class="container">
    <div class="container__header container__grid">
      <article class="container__content">
        <Donut />
        <ul>
          <li>Product designerd.</li>
          <li>Maker of tasty things.</li>
          <li>Mediocre funny man.</li>
        </ul>
        <CircleArrow arrowClass="circle-arrow__down" svgFill="var(--primary__background)" />
      </article>
    </div>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    components: {
      CircleArrow,
      Donut
    },
    props: {}
  }

  import CircleArrow from '../components/CircleArrow.vue'
  import Donut from '../components/Donut.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

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

  header {
    @include rem-fallback(margin-top, 1);
    background-color: var(--primary__color);
    color: var(--primary__background);
  }

  article {
    @include rem-fallback(padding, 24, 0, 12);
  }

  .employment-status {
    box-sizing: border-box;
    position: absolute;
    top: 0;
    @include rem-fallback(margin-top, 4);
    border: 0.25rem solid var(--base__color--dark);
    @include rem-fallback(border-radius, 1.5);
    @include rem-fallback(padding, 0.75, 1);
    @include rem-fallback(font-size, 1);
    font-weight: var(--font-weight--bold);
    @include rem-fallback(line-height, 1);
    text-align: center;
    @include rem-fallback(letter-spacing, -0.032);
  }

  ul {
    @include rem-fallback(margin, 2.5, 0);
  }

  li {
    font-weight: var(--font-weight--bold);
    @include rem-fallback(font-size, 4);
    @include rem-fallback(line-height, 5.6);
    @include rem-fallback(letter-spacing, -0.12);
  }
</style>
