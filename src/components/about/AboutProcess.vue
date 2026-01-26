<script setup lang="ts"></script>

<template>
  <section class="process__container">
    <header class="process__header">
      <div class="process__tag tag tag--accent">
        <span>How I work</span>
      </div>
      <div class="process__headlines">
        <h2><em>Efficiency</em> whenever possible.</h2>
        <h2><em>Compromise</em> when it makes sense.</h2>
        <h2><em>Always advocate</em>, never discriminate.</h2>
      </div>
      <div class="process__intro">
        <p>
          My role is not to intimidate or dominate...it's to be a partner with my cross-functional
          peers. I advocate for the best possible outcomes that will deliver the most possible
          impact for customers and businesses. Sometimes that means shooting from the hip; sometimes
          that means being methodical and incremental; and sometimes that means compromising to stay
          grounded.
        </p>
      </div>
    </header>
    <main class="process__cards-container">
      <article class="process__card">
        <header>
          <figure>
            <icon type="svg" name="iconDownload" />
          </figure>
          <span>01</span>
        </header>
        <h3>Discover.</h3>
        <p>
          When picking up any task, I start by defining the problem, collating or conducting
          relevant research, and distilling JTBD that are aligned with business goals and user
          needs.
        </p>
      </article>
      <article class="process__card">
        <header>
          <figure>
            <icon type="svg" name="iconDownload" />
          </figure>
          <span>02</span>
        </header>
        <h3>Prioritize.</h3>
        <p>
          I refine and prioritize discovery insights into clear user stories, craft relevant user
          journeys, and identify danger zones and potential pain points.
        </p>
      </article>
      <article class="process__card">
        <header>
          <figure>
            <icon type="svg" name="iconDownload" />
          </figure>
          <span>03</span>
        </header>
        <h3>Re/Build.</h3>
        <p>
          Guerilla prototyping is the name of the game. Depending on task, I go from low-to-high
          fidelity static flows and/or prototypes to validate solutions, and then refine as feedback
          and concerns are communicated.
        </p>
      </article>
      <article class="process__card">
        <header>
          <figure>
            <icon type="svg" name="iconDownload" />
          </figure>
          <span>04</span>
        </header>
        <h3>Share.</h3>
        <p>
          Keep my partners and stakeholders up-to-date and share outcomes, decisions, and anything
          else needed to maintain alignment and, to quote
          <a
            href="https://www.reddit.com/r/nfl/comments/1kreex5/highlight_jalen_hurts_still_keeping_the_main/"
            target="_blank"
            class="link link--inline"
            >QB1</a
          >, "keep the main thing the main thing."
        </p>
      </article>
      <article class="process__card">
        <header>
          <figure>
            <icon type="svg" name="iconDownload" />
          </figure>
          <span>05</span>
        </header>
        <h3>Analyze.</h3>
        <p>
          Towards the end, it's all about gathering data, tracking and measuring successes and
          failures, and keeping those together to help assist with future iterations or related
          projects.
        </p>
      </article>
      <article class="process__card">
        <header>
          <figure>
            <icon type="svg" name="iconDownload" />
          </figure>
          <span>06</span>
        </header>
        <h3>Party time.</h3>
        <p>
          Pretty self-explanatory. Design is never really done and there are always going to be new
          insights to act on. Iteration is inevitable and can be a very, very fun process.
        </p>
      </article>
    </main>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:math';

.process {
  &__container {
    display: flex;
    flex-direction: column;
    @include container-max-width;
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
  }

  &__header {
    @include container-inner-grid;
    place-items: center;
    justify-self: center;
    row-gap: convertRem(16px);
  }

  &__tag {
    grid-column: 1 / -1;
  }

  &__headlines,
  &__intro {
    display: flex;
    flex-direction: column;
  }

  &__headlines {
    grid-column: 1 / -1;
    gap: convertRem(2px);

    @media (max-width: 480px) {
      gap: convertRem(8px);
    }

    h2 {
      @include text-style(h2, medium, display);
      color: $primary__color--text--muted;
      text-align: center;
      text-wrap: balance;

      &:first-of-type {
        em {
          @media (max-width: 480px) {
            display: flex;
            flex-direction: column;
          }
        }
      }
    }

    em {
      color: $primary__color--text;
    }
  }

  &__intro {
    grid-column: 4 / span 6;
    justify-self: center;

    @media (max-width: 1280px) {
      grid-column: 2 / span 6;
    }

    @media (max-width: 980px) {
      grid-column: 1 / -1;
      padding-left: convertRem(40px);
      padding-right: convertRem(40px);
      justify-self: center;
      justify-content: center;
    }

    @media (max-width: 680px) {
      padding: 0;
    }

    p {
      @include text-style(p, regular, body);
      color: $primary__color--text--muted;
    }
  }

  &__cards-container {
    @include container-inner-grid;
    place-items: center;
    justify-self: center;
    row-gap: convertRem(32px);
    margin-top: convertRem(80px);

    @media (max-width: 480px) {
      row-gap: convertRem(16px);
      margin-top: convertRem(40px);
    }
  }

  &__card {
    display: flex;
    flex-direction: column;
    row-gap: convertRem(16px);
    grid-column: span 4;
    border-radius: convertRem(16px);
    border-color: $primary__color--border;
    border-width: convertRem(2px);
    border-style: solid;
    padding: convertRem(40px);
    height: 100%;
    min-height: convertRem(400px);
    transition:
      background-color 0.1s ease-in-out 0s,
      color 0.1s ease-in-out 0s;

    @media (max-width: 680px) {
      min-height: convertRem(320px);
    }

    &:hover {
      background-color: $primary__color--background--lighter;

      svg {
        color: $primary__color--background--lighter;
      }
    }

    header {
      position: relative;

      figure {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        overflow: hidden;
        width: convertRem(64px);
        height: convertRem(64px);
        background-color: $primary__color--border;

        @media (max-width: 680px) {
          width: convertRem(48px);
          height: convertRem(48px);
        }
      }

      svg {
        @include svgProps(
          $height: convertRem(24px),
          $width: convertRem(24px),
          $scale: 1,
          $stroke: 3,
          $color: $primary__color--background
        );
      }

      span {
        position: absolute;
        top: 0;
        right: 0;
        text-align: right;
        @include text-style(big, medium, fixed);
        color: $primary__color--text--darker;

        @media (max-width: 680px) {
          font-size: convertRem(18px);
        }
      }
    }

    h3 {
      color: $primary__color--accent;
    }

    p {
      color: $primary__color--text--muted;
    }
  }
}
</style>
