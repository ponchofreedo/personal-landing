<template>
  <section class="container">
    <section class="container__header container__grid">
      <section class="container__content">
        <article>
          <h1>I'm Zach &mdash; a senior product designer based in CT, USA.</h1>
          <p>I focus on crafting thoughtful and scalable design systems, practical design tooling, building accessible experiences that center around real people of all colors, shapes, and sizes, and partnering with engineers to author complex front-end solutions.</p>
          <p>Previously I crafted thoughtful purchasing and spend visibility experiences with the team @<a href="https://negotiatus.com" rel="noreferrer" target="_blank">Negotiatus</a>, went beyond camping @<a href="https://tentrr.com" rel="noreferrer" target="_blank">Tentrr</a>, built best in class travel experiences @<a href="https://priceline.com" rel="noreferrer" target="_blank">priceline</a>, and pushed pixel performance @<a href="https://digitalsurgeons.com" rel="noreferrer" target="_blank">Digital Surgeons</a>.</p>
        </article>
        <article>
          <span class="text--h2">Talk to me, Goose.</span>
          <p>You've come this far on these here interwebs to find me. Unfortunately the IKEA instructions for the bat signal are pretty rough &mdash; definitely missing a wood peg &mdash; and my Rebel transponder code is a bit older and just barely "checks out," so because of those issues, feel free to just <a href="mailto:zach.freed@gmail.com?subject=sup." rel="noreferrer">drop me a line</a>.</p>
          <p>Or, technical issues aside, you can find me at one of these spots below.</p>
          <ul>
            <li><a href="https://linkedin.com/in/zpfreed" rel="noreferrer" target="_blank">Linkedin</a></li>
            <li><a href="https://github.com/ponchofreedo" rel="noreferrer" target="_blank">Github</a></li>
            <li><a href="https://dribbble.com/ponchofreedo" rel="noreferrer" target="_blank">Dribbble</a></li>
            <li><a href="https://twitter.com/ponchofreedo" rel="noreferrer" target="_blank">Twitter</a></li>
            <li><a href="https://instagram.com/ponchofreedo" rel="noreferrer" target="_blank">Instagram</a></li>
          </ul>
        </article>
      </section>
    </section>
  </section>
</template>

<script>
  export default {
    name: 'Body',
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

  article {
    text-align: left;

    + article {
      @include rem-fallback(padding-top, 12);
    }
  }

  h1 {
    color: var(--primary__color);
  }

  .temporary-scenario {
    color: var(--base__color--steel);

    a {
      color: inherit;
    }
  }

  ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    @include rem-fallback(column-gap, 2.5);
  }

  li {
    @include rem-fallback(font-size, 1.5);
    line-height: 1.0;
    @include rem-fallback(margin-bottom, 1.5);
  }

</style>
