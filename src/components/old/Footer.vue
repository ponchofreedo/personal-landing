<template>
  <footer class="container">
    <section class="container__footer container__grid">
      <section class="container__content">
        <article class="colophon">
          <span class="text--h4">Colophon</span>
          <p>This site is meant to be a playground for experimentation and a way to catalog some projects. In the future it may also house the inner machinations of my mind. Designed in <a href="https://www.figma.com/" rel="noreferrer" target="_blank">Figma</a>, built with <a href="https://vuejs.org/" rel="noreferrer" target="_blank">Vue</a>, authored in <a href="https://atom.io/" rel="noreferrer" target="_blank">Atom</a>, and shipped with <a href="https://vercel.com" rel="noreferrer" target="_blank">Vercel</a>. Type set in <a href="https://rsms.me/inter/" rel="noreferrer" target="_blank">Inter</a> by <a href="https://rsms.me" rel="noreferrer" target="_blank">Rasmus Anderson</a> and delivered via <a href="https://fonts.google.com/specimen/Inter" rel="noreferrer" target="_blank">Google Fonts</a>. Built with love and a few plates of School of Wok's <a href="https://www.youtube.com/watch?v=L2lBwXh2sVg" rel="noreferrer" target="_blank">General Tso's Chicken</a>.</p>
        </article>
        <article class="happy-fun-time">
          <p>Also...since you're down here...</p>
          <p>Who's that pokemon?</p>
          No <span id="pokemon"></span> were harmed in the making of this page.
        </article>
        <button type="button" onClick="window.scrollTo(0,0)">
          <CircleArrow arrowClass="circle-arrow__up" svgFill="var(--primary__color)" />
        </button>
      </section>
    </section>
  </footer>
</template>

<script>
  export default {
    name: 'Footer',
    components: {
      CircleArrow
    },
    props: {}
  }

  import CircleArrow from '../components/CircleArrow.vue'
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  footer {
    display: grid;
    position: relative;
    grid-area: footer;
    @include rem-fallback(padding-bottom, 2.5);
    border-bottom: 1rem solid var(--primary__color);
    background-color: var(--base__color--dark);
    color: var(--base__color--steel);

    a {
      color: inherit;
    }

    button {
      cursor: pointer;
      display: inline-flex;
      width: min-content;
      appearance: none;
      -webkit-appearance: none;
      border: 0;
      color: var(--primary__color);
      background-color: var(--primary__background);
      display: inline-block;
      padding: 0;
      margin: 0;

      &:focus {
        outline: none;
      }
    }
  }

  .colophon,
  .happy-fun-time {
    @include rem-fallback(margin-bottom, 5);

    span {
      display: inherit;
      @include rem-fallback(margin-bottom, 1);
    }

    p {
      @include rem-fallback(font-size, 1);
      @include rem-fallback(line-height, 1.6);
      @include rem-fallback(margin, 0);
    }

    a {
      color: inherit;
    }
  }

  .happy-fun-time {

    p {
      @include rem-fallback(margin-bottom, 1);

      &:last-of-type {
        @include rem-fallback(margin-bottom, 0.5);
      }
    }
  }

  #pokeHook {
    text-transform: capitalize!important;

    .pokemon {
      color: var(--base__color--steel)!important;
    }
  }
</style>
