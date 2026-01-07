<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth',
  })
})
</script>

<script lang="ts">
export default {
  methods: {
    scrollToWorks() {
      const id = 'works'!
      if (id !== null) {
        const offsetValue = 0 // new layout kinda removes the need for this, but maybe i experiment later
        const section = document.getElementById(id)!
        const sectionWithOffset = section.getBoundingClientRect().top + window.scrollY + offsetValue
        window.scrollTo({
          top: sectionWithOffset,
          behavior: 'smooth',
        })
        console.log('scrolling to ' + id)
      } else {
        console.log('works section doesnt exist')
      }
    },
  },
}
</script>

<template>
  <header>
    <article>
      <section class="header__welcome">
        <!-- <img src="@img/it-me.png" alt="it's a photo of me" /> -->
        <div class="tag tag--availability">
          <icon type="icon" name="iconMegaphone" />
          <span>Available for hire</span>
        </div>
        <h1>
          <span class="highlight--1">Experienced product design nerd. </span>
          <span class="highlight--2">Builder of cool sh*t. </span>
          <span class="highlight--3">Maker of tasty things. </span>
          <span class="highlight--4">Mildly mediocre funny man.</span>
        </h1>
      </section>
      <section class="header__intro">
        <p class="text--big">
          &#128075;&#127996;, I&rsquo;m Zach, a designer crafting thoughtful and usable interfaces
          and experiences for people, products, and platforms. Previously
          <a href="https://hubspot.com" target="_blank" class="link link--inline">@HubSpot</a>,
          <a href="https://klaviyo.com" target="_blank" class="link link--inline">@Klaviyo</a>,
          <a href="https://order.co" target="_blank" class="link link--inline">@Order</a>, and
          <a href="https://priceline.com" target="_blank" class="link link--inline">@priceline</a>.
        </p>
      </section>
      <footer>
        <small>NY born and bred. Based in Stamford, CT. Go Birds.</small>
        <icon type="icon" name="iconArrowSquareDown" v-on:click="scrollToWorks()" />
      </footer>
    </article>
  </header>
</template>

<style lang="scss" scoped>
@use 'sass:math';

header {
  @include container-max-width;
  @include container-inner-grid;
  @include container-responsive-padding;

  height: 100dvh;
  margin-top: convertRem(-120px);
  place-items: flex-end;

  @media only screen and (-webkit-min-device-pixel-ratio: 2) and (min-width: 1280px) and (orientation: landscape) {
    margin-top: inherit;
  }

  @media (max-width: 680px) {
    margin-top: convertRem(-96px);
  }

  @media (max-width: 480px) {
    place-items: center;
    padding-top: convertRem(40px);
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape) {
    place-items: center;
    margin-top: convertRem(40px);
  }

  @media only screen and (-webkit-min-device-pixel-ratio: 2) and (max-width: 400px) and (orientation: portrait) {
    height: 100%;
    place-items: center;
    margin-top: convertRem(48px);
    padding-bottom: convertRem(40px);
  }
}

article {
  display: grid;
  grid-column: col-start / span 8;
  grid-template-rows: 1fr;
  row-gap: convertRem(48px);
  grid-template-columns: subgrid;
  height: fit-content;
  padding-bottom: convertRem(120px);

  @media (max-width: 1280px) {
    grid-column: col-start / span 7;
  }

  @media (max-width: 980px) {
    row-gap: convertRem(32px);
    padding-bottom: convertRem(80px);
  }

  @media (max-width: 680px) {
    grid-column: 1 / -1;
  }

  @media (max-width: 480px) {
    height: min-content;
    padding-bottom: 0;
  }
}

section {
  grid-column: inherit;

  &.header__welcome {
    display: flex;
    flex-direction: column;
    gap: convertRem(32px);
    justify-content: flex-end;
  }

  &.header__intro {
    grid-column: col-start / span 6;

    @media (max-width: 1280px) {
      grid-column: col-start / span 5;
    }

    @media (max-width: 980px) {
      grid-column: col-start / span 5;
    }

    @media (max-width: 680px) {
      grid-column: 1 / -1;
    }
  }
}

footer {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-end;
  grid-column: inherit;
  margin-top: convertRem(24px);

  svg {
    cursor: pointer;
    color: $primary__color--accent;
    height: convertRem(32px);
    width: auto;
  }
}

// img {
//   margin-bottom: convertRem(32px);
//   height: convertRem(160px);
//   width: convertRem(160px);
// }

.tag {
  display: inline-flex;
  width: min-content;
  background-color: $secondary__color--accent--3;
}

small {
  display: inherit;
  margin-bottom: convertRem(16px);
  color: $primary__color--text--darker;
}

h1 {
  font-weight: $text__font-weight--medium;

  @supports (font-variation-settings: normal) {
    font-variation-settings: 'wght' $text__font-weight--medium;
  }
}

.highlight {
  &--1 {
    color: $primary__color--accent;
  }
  &--2 {
    color: $primary__color--text;
  }
  &--3 {
    color: $primary__color--text--muted;
  }
  &--4 {
    color: $primary__color--text--darker;
  }
}

p {
  color: $primary__color--text--muted;
}
</style>
