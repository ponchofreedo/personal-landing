<script setup lang="ts">
import { resumeLink, socialLinks } from '@data/constants'
</script>

<script lang="ts"></script>

<template>
  <section id="contact">
    <main>
      <header>
        <h2>Talk to me, Goose.</h2>
      </header>
      <section class="contact__inner-container">
        <article>
          <p class="text--big">
            You've come this far on these here interwebs to find me. Unfortunately the IKEA
            instructions for my Bätssignalen are pretty rough &mdash; definitely missing a wooden
            peg &mdash; and my Rebel transponder code is a bit older and just barely "checks out,"
            so yeah...feel free to
            <a :href="resumeLink" target="_blank" class="link link--inline"
              >grab my résumé<icon class="icon--bigger" type="icon" name="iconArrowSquareUpRight"
            /></a>
            or just
            <a
              href="mailto:zach.freed+inquiry@gmail.com?subject=%27Sup."
              target="_blank"
              class="link link--inline"
              >drop me a line</a
            >.
          </p>
        </article>
        <article>
          <p class="text--big">
            Or, technical issues aside, you can find/follow me at all of these places.
          </p>
          <ul>
            <li v-for="socialLink in socialLinks" :key="socialLink.platform">
              <a :href="socialLink.url" target="_blank" class="link">
                <span>{{ socialLink.platform }}</span>
                <icon type="svg" name="iconArrowSquareUpRight" />
              </a>
            </li>
          </ul>
        </article>
      </section>
    </main>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:math';

#contact {
  @include container-max-width;
  @include container-responsive-padding;
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-block: convertRem(40px);

  @media (max-width: 980px) {
    background-color: $primary__color--background--darker;
    padding-inline: convertRem(24px);
  }
}

main {
  @include container-inner-grid;
  position: relative;
  padding-block: convertRem(80px);
  row-gap: convertRem(40px);

  @media (max-width: 980px) {
    row-gap: convertRem(24px);
    padding-block: 0;
    padding-inline: 0;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: -#{convertRem(80px)}; // 80 + 24 (margin)
    right: -#{convertRem(80px)}; // 80 + 24 (margin)
    z-index: -1;
    background-color: $primary__color--background--darker;
    border-radius: convertRem(48px);
    margin-inline: convertRem(24px);

    // special query to match max-width of content
    @media (min-width: 1600px) {
      left: -#{convertRem(104px)}; // 80 + 24 (margin)
      right: -#{convertRem(104px)}; // 80 + 24 (margin)
      margin-inline: convertRem(24px);
    }

    @media (max-width: 1280px) {
      margin-inline: convertRem(24px);
    }

    @media (max-width: 980px) {
      display: none;
    }
  }

  .contact__inner-container {
    display: grid;
    grid-column: 1 / -1;
    grid-template-columns: subgrid;

    & > :first-child {
      order: 1;
    }

    & > :last-child {
      order: 2;
    }

    @media (max-width: 980px) {
      row-gap: convertRem(24px);
    }

    article {
      grid-column: span 6;

      @media (max-width: 1280px) {
        grid-column: span 4;
      }

      @media (max-width: 980px) {
        grid-column: 1 / -1;
      }

      &:first-child {
        @include multi-column-extra-padding(left);

        @media (max-width: 980px) {
          padding-right: 0;
        }
      }

      &:last-child {
        @include multi-column-extra-padding(right);

        @media (max-width: 980px) {
          padding-left: 0;
        }
      }
    }
  }
}

header {
  display: flex;
  flex-direction: column;
  grid-column: 1 / -1;

  h2 {
    color: $primary__color--text;
  }
}

p {
  color: $primary__color--text--muted;
}

ul {
  display: flex;
  flex-direction: column;
  gap: convertRem(8px);
  margin-top: convertRem(16px);
}

li {
  @include text-style(h4, bold, ui);

  a {
    display: inline-flex;
    align-items: center;
    color: inherit;
    text-decoration: none;
    gap: convertRem(8px);
  }

  svg {
    @include svgProps(
      $height: convertRem(24px),
      $width: convertRem(24px),
      $scale: 1,
      $stroke: 3,
      $color: inherit
    );
  }
}
</style>
