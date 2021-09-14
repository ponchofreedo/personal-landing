<template>
  <header>
    <span>Sup.</span>
    <p>I'm Zach &mdash; a senior product designer based out of CT, USA, currently building experiences at <a href="#" rel="noreferrer" target="_blank">Klaviyo</a>.</p>
  </header>
</template>

<script>
  export default {
    name: 'Header',
    props: {}
  }
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

  %btn {
    display: initial;
    border: none;
    padding: 0;
    margin: 0;
    text-decoration: none;
    background: inherit;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    line-height: 1.0;
    cursor: pointer;
    text-align: center;
    transition: initial;
    -webkit-appearance: none;
    -moz-appearance: none;

    &:hover,
    &:focus {
      background: inherit;
    }

    &:focus {
      outline: inherit;
      outline-offset: inherit;
    }

    &:active {
      transform: scale(0.99);
    }
  }

  ul {
    display: flex;
  }

  li {
    display: inline-flex;
    @include rem-fallback(margin-right, 0.5);
    @include rem-fallback(margin-bottom, 0.5);

    a {
      @extend %btn;
      @include rem-fallback(font-size, 1);
      line-height: 1.0;

      // scoped theme things

      // size large
      // turn this into a mixin or variant later
      @include rem-fallback(padding-top, 0.75);
      @include rem-fallback(padding-right, 1);
      @include rem-fallback(padding-bottom, 0.75);
      @include rem-fallback(padding-left, 1);

      background: transparent;

      border-style: solid;
      @include rem-fallback(border-width, 0.125);
      border-color: var(--base__color--gray);
      @include rem-fallback(border-radius, 0.25);

      transition: all 80ms ease-in-out, transform 80ms ease;

      &:hover {
        color: var(--primary__color);
        border-color: var(--primary__color);

        // use box-shadow to inset the thicker border without blowing up the height
        // cant use the fallback here, so have to be redundant
        box-shadow: inset 0 0 0 2px var(--primary__color);
        box-shadow: inset 0 0 0 0.125rem var(--primary__color);
      }

      &:focus,
      &:focus-within {
        box-shadow: 1px 1px 0 2px var(--primary__background),
                    1px -1px 0 2px var(--primary__background),
                    -1px -1px 0 2px var(--primary__background),
                    -1px 1px 0 2px var(--primary__background),
                    1px 1px 0 4px var(--primary__color),
                    1px -1px 0 4px var(--primary__color),
                    -1px -1px 0 4px var(--primary__color),
                    -1px 1px 0 4px var(--primary__color),
                    4px 4px 8px 1px rgba(var(--primary__color--hex), 0.64),
                    4px -4px 8px 1px rgba(var(--primary__color--hex), 0.64),
                    -4px -4px 8px 1px rgba(var(--primary__color--hex), 0.64),
                    -4px 4px 8px 1px rgba(var(--primary__color--hex), 0.64);
        box-shadow: 0.0625rem 0.0625rem 0 0.125rem var(--primary__background),
                    0.0625rem -0.0625rem 0 0.125rem var(--primary__background),
                    -0.0625rem -0.0625rem 0 0.125rem var(--primary__background),
                    -0.0625rem 0.0625rem 0 0.125rem var(--primary__background),
                    0.0625rem 0.0625rem 0 0.25rem var(--primary__color),
                    0.0625rem -0.0625rem 0 0.25rem var(--primary__color),
                    -0.0625rem -0.0625rem 0 0.25rem var(--primary__color),
                    -0.0625rem 0.0625rem 0 0.25rem var(--primary__color),
                    0.25rem 0.25rem 0.5rem 0.0625rem rgba(var(--primary__color--hex), 0.64),
                    0.25rem -0.25rem 0.5rem 0.0625rem rgba(var(--primary__color--hex), 0.64),
                    -0.25rem -0.25rem 0.5rem 0.0625rem rgba(var(--primary__color--hex), 0.64),
                    -0.25rem 0.25rem 0.5rem 0.0625rem rgba(var(--primary__color--hex), 0.64)
      }
    }
  }

</style>
