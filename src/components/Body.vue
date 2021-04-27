<template>
  <main class="container">
    <span class="text--h2"><span id="timestamp"></span> min ago</span>
    <span id="pokemon"></span>
    <p>You've come this far on these here interwebs to find me. Unfortunately the IKEA instructions for the bat signal are pretty rough &mdash; definitely missing a wood peg &mdash; and my Rebel transponder code is a bit older and just barely "checks out," so because of those issues, feel free to just <a href="mailto:zach.freed@gmail.com?subject=sup." rel="noreferrer">drop me a line</a>.</p>
    <p>Or, technical issues aside, you can find me at one of these spots below.</p>
    <ul>
      <li><a href="mailto:zach.freed@gmail.com?subject=sup." rel="noreferrer" target="_blank">Drop a line</a></li>
      <li><a href="https://linkedin.com/in/zpfreed" rel="noreferrer" target="_blank">Linkedin</a></li>
      <li><a href="https://github.com/ponchofreedo" rel="noreferrer" target="_blank">Github</a></li>
      <li><a href="https://dribbble.com/ponchofreedo" rel="noreferrer" target="_blank">Dribbble</a></li>
      <li><a href="https://instagram.com/ponchofreedo" rel="noreferrer" target="_blank">Instagram</a></li>
      <li><a href="https://figma.com/@ponchofreedo" rel="noreferrer" target="_blank">Figma</a></li>
    </ul>
    <button v-on:click="toggleMode" aria-label="Toggle for dark mode">test</button>
  </main>
</template>

<script>
  export default {
    name: 'Body',
    props: {},
    data() {
      return {
        mode: '' // will set itself to whatever is set as default
      };
    },
    mounted() {
      let localMode = localStorage.getItem('mode');
      document.body.setAttribute('data-mode', localMode);
      if (localMode == 'dark') {
        console.log('darkness all around me...');
      } else {
        console.log('the light...it burns');
      }
    },
    methods: {
      toggleMode: function () {
        let localMode = localStorage.getItem('mode');
        this.mode = localMode == 'light' ? 'dark' : 'light';
        document.body.setAttribute('data-mode', this.mode);
        localStorage.setItem('mode', this.mode);
        if (this.mode == 'dark') {
          console.log('darkness all around me...');
        } else {
          console.log('the light...it burns');
        }
      }
    }
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
