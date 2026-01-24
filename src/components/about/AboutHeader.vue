<script setup lang="ts">
import { goToExternalLink, resumeLink } from '@data/constants'
</script>

<template>
  <header>
    <article class="about__header">
      <section>
        <em>
          I live by the pixels I manipulate, the data I generate, and seek solace in The Force,
          <a
            href="https://www.xianfoods.com/"
            target="_blank"
            class="link link--inline link--super"
            >XFF noodles</a
          >, and the
          <a
            href="https://www.youtube.com/shorts/u0_fGhIZ1-Y"
            target="_blank"
            class="link link--inline link--super"
            >Philly Special</a
          >.
        </em>
      </section>
      <aside class="about__prof-pic">
        <div class="prof-pic__img-container">
          <img src="@img/it-me.png" alt="it's a photo of me" title="it's a photo of me" />
          <img
            src="@img/it-obi.png"
            alt="it's a photo of my dog, Obi"
            title="it's a photo of my dog, Obi"
          />
        </div>
        <div class="prof-pic__action-container">
          <button
            type="button"
            class="button button--secondary button--has-icon button--icon-right"
            @click="goToExternalLink(resumeLink, '_blank')"
          >
            Grab my r&eacute;sum&eacute;<span class="button__icon-container"
              ><icon type="svg" name="iconDownload"
            /></span>
          </button>
          <button
            type="button"
            class="button button--secondary button--has-icon button--icon-right"
            @click="$router.push('/cv')"
          >
            View my CV<span class="button__icon-container"
              ><icon type="svg" name="iconArrowUpRight"
            /></span>
          </button>
        </div>
      </aside>
    </article>
    <article class="about__intro">
      <p>
        I would call myself a reformed graphic/web designer now practicing product design and a
        staunch advocate for better design-developer relations. For the past 10+ years I've been
        learning and applying my hybrid mindset to teams and building great products that solve
        complex problems while reducing friction wherever possible.
      </p>
      <p>
        If it exists on these interwebs, in your pocket as an app, or has interesting typography, I
        want to know how it works. Trying to solve puzzles and engage with emotions are what drives
        me to constantly learn and improve.
      </p>
    </article>
    <div class="prof-pic__action-container--responsive">
      <button
        type="button"
        class="button button--secondary button--has-icon button--icon-right"
        @click="goToExternalLink(resumeLink, '_blank')"
      >
        Grab my r&eacute;sum&eacute;<span class="button__icon-container"
          ><icon type="svg" name="iconDownload"
        /></span>
      </button>
      <button
        type="button"
        class="button button--secondary button--has-icon button--icon-right"
        @click="$router.push('/cv')"
      >
        View my CV<span class="button__icon-container"
          ><icon type="svg" name="iconArrowUpRight"
        /></span>
      </button>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@use 'sass:math';

header {
  @include container-max-width;
  @include container-inner-grid;
  @include container-responsive-padding;
  place-items: flex-start;
  padding-top: convertRem(120px);
  padding-bottom: convertRem(120px);

  @media (max-width: 1280px) {
  }

  @media (max-width: 680px) {
    padding-top: convertRem(80px);
    padding-bottom: convertRem(80px);
  }

  @media (max-width: 480px) {
  }

  article {
    display: grid;
    grid-column: 1 / -1;
    grid-template-rows: 1fr;
    grid-template-columns: subgrid;

    @media (max-width: 980px) {
    }

    @media (max-width: 480px) {
      height: min-content;
      padding-bottom: 0;
    }
  }

  section {
    display: flex;
    flex-direction: column;
    gap: convertRem(32px);
    grid-column: span 8;
    order: 1;

    @media (max-width: 1280px) {
      grid-column: span 5;
    }

    @media (max-width: 680px) {
      grid-column: 1 / -1;
      order: 2;
    }
  }

  aside {
    display: flex;
    flex-direction: column;
    grid-column: span 4;
    order: 2;
    justify-content: center;

    @media (max-width: 1280px) {
      grid-column: span 3;
      justify-content: flex-start;
    }

    @media (max-width: 680px) {
      grid-column: 1 / -1;
      justify-content: flex-start;
      order: 1;
    }
  }

  em {
    @include text-style(super, medium, display, display);
    color: $primary__color--text;

    @media (max-width: 1280px) {
      @include text-style(h1, medium, display, display);
    }

    @media (max-width: 980px) {
      @include text-style(h2, medium, display, display);
    }
  }
}

.about {
  &__header {
    display: inherit;
    justify-content: flex-end;

    @media (max-width: 680px) {
      row-gap: convertRem(24px);
    }
  }

  &__intro {
    grid-column: col-start / span 6;
    row-gap: convertRem(24px);

    @media (max-width: 680px) {
      grid-column: 1 / -1;
    }

    p {
      grid-column: 1 / -1;
      @include text-style(big, regular, body);
      color: $primary__color--text--muted;

      @media (max-width: 680px) {
        @include text-style(p, regular, body);
      }
    }
  }

  &__prof-pic {
    display: flex;
    flex-direction: column;
    gap: convertRem(16px);

    span:not(button span) {
      @include text-style(small, medium, ui);
      text-align: center;
      color: $primary__color--text--darker;
    }
  }
}

.prof-pic {
  &__img-container {
    display: flex;
    flex-direction: column;
    place-items: center;
    align-self: center;
    position: relative;

    @media (max-width: 680px) {
      place-items: flex-start;
      align-self: flex-start;
    }

    img {
      height: auto;
      width: auto;

      &:first-of-type {
        width: 100%;
        max-width: convertRem(320px);
        height: auto;
        object-fit: contain;

        @media (max-width: 1280px) {
          max-width: convertRem(240px);
        }

        @media (max-width: 680px) {
          max-width: convertRem(200px);
        }
      }

      &:last-of-type {
        height: convertRem(120px);
        width: convertRem(120px);
        position: absolute;
        border-radius: 50%;
        bottom: 0;
        left: 0;
        outline: convertRem(8px) solid $primary__color--background;

        @media (max-width: 1280px) {
          height: convertRem(80px);
          width: convertRem(80px);
          outline-width: convertRem(4px);
        }
      }
    }
  }

  &__action-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: convertRem(8px);
    margin-top: convertRem(8px);
    justify-content: center;

    @media (max-width: 980px) {
      display: none;
    }

    &--responsive {
      display: none;

      @media (max-width: 980px) {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        place-self: flex-start;
        gap: convertRem(8px);
        grid-column: 1 / -1;
      }
    }
  }
}
</style>
