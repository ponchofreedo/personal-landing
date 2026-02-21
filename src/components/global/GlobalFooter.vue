<script setup lang="ts">
// import { ref } from 'vue'
import { socialLinks } from '@data/constants'
</script>

<script lang="ts">
// leaving here for reference. this needs to be used in the component because its call at runtime, not build.
// this will render a random catchphrase in the footer next to the copyright. later, come back and add the hover interaction to show a gif in the background similar to how Mattan does his.
export default {
  // data() {
  //   return {
  //     catchphrases: ref([
  //       { who: 'Stone Cold Steve Austin', phrase: 'Gimme a Hell Yeah!' },
  //       { who: 'Stone Cold Steve Austin', phrase: 'What?' },
  //       { who: 'Stone Cold Steve Austin', phrase: "And that's the bottom line..." },
  //       { who: 'Mick Foley', phrase: 'Have a nice day!' },
  //       { who: 'Cactus Jack', phrase: 'Bang Bang!' },
  //       { who: 'Dude Love', phrase: 'Oooooow have mercy!' },
  //       { who: 'Booker T', phrase: 'Can you dig it, sucka?' },
  //       { who: 'Bret Hart', phrase: 'The best there is...' },
  //       { who: 'Chris Jericho', phrase: 'You just made the list!' },
  //       { who: 'DX', phrase: "If you're not down with that..." },
  //       { who: 'DX', phrase: '...we got TWO WORDS for ya!' },
  //       { who: 'Hacksaw Jim Duggan', phrase: 'HOOOOOOOOOO!' },
  //       { who: 'Kurt Angle', phrase: "It's true...it's damn true." },
  //       { who: 'NWO', phrase: 'NWO for life.' },
  //       { who: 'Road Dogg', phrase: "Oh, you did't know?" },
  //       { who: 'Ric Flair', phrase: 'WOOOOOOOOOOOOOO!' },
  //       { who: 'Macho Man Randy Savage', phrase: 'OHHHHH YEAAAAAAAAH!' },
  //       { who: 'The Rock', phrase: 'Know your role...' },
  //       { who: 'The Rock', phrase: 'Finally...' },
  //       { who: 'The Rock', phrase: 'IF YA SMELLLLLLlLlLlL oooooooo...' },
  //       { who: 'Ron Simmons', phrase: 'DAMN!' },
  //       { who: 'Dudley Boyz', phrase: 'GET THE TABLES!' },
  //       { who: 'Teddy Long', phrase: 'Holla, holla holla!' },
  //     ]),
  //     randomCatchphrase: '',
  //     randomWrestler: '',
  //   }
  // },
  // mounted() {
  //   this.getRandomCatchphrase()
  // },
  methods: {
    // getRandomCatchphrase() {
    //   if (this.catchphrases.length > 0) {
    //     const randomIndex = Math.floor(Math.random() * this.catchphrases.length)
    //     this.randomWrestler = this.catchphrases[randomIndex].who
    //     this.randomCatchphrase = this.catchphrases[randomIndex].phrase
    //   }
    // },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      })
    },
  },
}
</script>

<template>
  <footer id="footer" :layout="$route.name">
    <article>
      <header>Thanks for scrolling.</header>
      <main>
        <section class="footer__container-colophon">
          <div class="footer__colophon-content">
            <b>Colophon.</b>
            <p>
              This site is meant to be a playground for experimentation. Designed in
              <a class="link link--simple" href="https://figma.com" target="_blank">Figma</a>, built
              with <a class="link link--simple" href="https://vuejs.org" target="_blank">Vue</a>,
              authored in
              <a class="link link--simple" href="https://antigravity.google" target="_blank"
                >Google Antigravity</a
              >
              (RIP Sublime Text, but I'm still a VSCode holdout), and shipped with
              <a class="link link--simple" href="https://vercel.com" target="_blank">Vercel</a>.
              Type set in
              <a
                class="link link--simple"
                href="https://pangrampangram.com/products/radio-grotesk"
                target="_blank"
                >Radio Grotesk</a
              >
              from
              <a class="link link--simple" href="https://pangrampangram.com/" target="_blank"
                >Pangram Pangram Foundry</a
              >. Built with controlled chaos and my take on Thomas Keller's
              <a
                class="link link--simple"
                href="https://www.youtube.com/watch?v=EWLt6G85zC4"
                target="_blank"
                >roast chicken</a
              >
              recipe (yes, <u>that</u> roast chicken from the season 3 finale of The Bear that Carmy
              later cooks for his mom in season 4). Also built with
              <a
                class="link link--simple"
                href="https://instagram.com/obi_dog__kenobi_/"
                target="_blank"
                >my dog, Obi-Dog Kenobi</a
              >
              at my feet.
            </p>
          </div>
          <!-- <div class="footer__colophon-experiments">
            <div>
              <p>&copy; {{ new Date().getFullYear() }} Zach Freed</p>
            </div>
            <div>
              <p>&copy; {{ new Date().getFullYear() }} Zach Freed</p>
            </div>
            <div>
              <p>&copy; {{ new Date().getFullYear() }} Zach Freed</p>
            </div>
          </div> -->
        </section>
        <section class="footer__container-copyright">
          <ul>
            <li>
              <icon id="anchor" type="svg" name="iconArrowSquareUp" v-on:click="scrollToTop()" />
            </li>
            <li v-for="socialLink in socialLinks" :key="socialLink.platform">
              <a :href="socialLink.url" target="_blank">
                <icon type="svg" :name="'logo' + socialLink.platform" />
              </a>
            </li>
          </ul>
          <div class="footer__copyright">
            <p>&copy; {{ new Date().getFullYear() }} Zach Freed</p>
          </div>
        </section>
      </main>
    </article>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  display: flex;
  flex-direction: column;
  width: 100%;
  color: $primary__color--text--darker;
}

article {
  @include container-max-width;
  @include container-responsive-padding;
  display: flex;
  flex-direction: column;
  padding-block: convertRem(120px) convertRem(80px);

  @media (max-width: 980px) {
    padding-bottom: convertRem(40px);
  }
}

header {
  @include text-style(super, medium, display, display);
  color: $primary__color--accent;

  @media (max-width: 980px) {
    @include text-style(h2, inherit, inherit, header);
  }
}

main {
  @include container-inner-grid;
}

section {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid;
}

.footer {
  &__container {
    &-colophon {
      padding: convertRem(80px) 0 convertRem(48px);

      @media (max-width: 980px) {
        padding: convertRem(40px) 0 convertRem(16px);
      }
    }

    &-copyright {
      padding-top: convertRem(80px);
      border-top: convertRem(16px) solid $primary__color--accent;

      @media (max-width: 980px) {
        row-gap: convertRem(40px);
        padding-top: convertRem(40px);
      }

      ul,
      div {
        grid-column: span 6;

        @media (max-width: 1280px) {
          grid-column: span 4;
        }

        @media (max-width: 980px) {
          grid-column: 1 / -1;
        }

        &:first-child {
          padding-right: convertRem(24px);

          @media (max-width: 980px) {
            padding-right: 0;
          }
        }

        &:last-child {
          padding-left: convertRem(24px);

          @media (max-width: 980px) {
            padding-left: 0;
          }
        }
      }

      ul {
        flex-wrap: wrap;
      }
    }
  }

  &__colophon {
    &-content {
      display: flex;
      flex-direction: column;
      gap: convertRem(4px);
      grid-column: span 6; // when ready to add experiments section, change to span 4

      @media (max-width: 1280px) {
        grid-column: 1 / -1;
      }

      &:first-child {
        padding-right: convertRem(24px);

        @media (max-width: 980px) {
          padding-right: 0;
        }
      }

      // &:last-child {
      //   padding-left: convertRem(24px);

      //   @media (max-width: 980px) {
      //     padding-left: 0;
      //   }
      // }

      * {
        @include text-style(small, inherit, ui);
      }
    }

    // &-experiments {
    //   column-gap: inherit;
    //   grid-column-start: 7;
    //   grid-column-end: col-end;
    //   @include text-style(p, regular, ui);

    //   div {
    //     grid-column: span 2;
    //   }
    // }
  }
}

#anchor,
svg#anchor {
  cursor: pointer;
}

svg {
  @include svgProps($height: convertRem(24px), $width: convertRem(24px), $scale: 1, $stroke: 0);

  &#anchor {
    @include svgProps($height: convertRem(24px), $width: convertRem(24px), $scale: 1, $stroke: 3);
  }
}

ul {
  display: flex;
  gap: convertRem(32px);
  list-style: none;
}

li {
  display: inline-flex;
  height: fit-content;
  width: fit-content;
  vertical-align: baseline;
  align-self: center;
  color: $primary__color--accent;
}

a {
  color: inherit;
}
</style>
