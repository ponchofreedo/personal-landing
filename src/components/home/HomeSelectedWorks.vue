<script setup lang="ts">
import { selectedWorks } from '@data/constants'
</script>

<template>
  <section id="works">
    <article>
      <header>
        <h4>Selected works.</h4>
      </header>
      <menu>
        <li
          v-for="selectedWork in selectedWorks"
          :key="selectedWork.id"
          :team="selectedWork.team"
          class="selected-work__container"
        >
          <a
            :href="'/works/' + selectedWork.team.toLowerCase() + '/' + selectedWork.slug"
            :target="selectedWork.target"
          >
            <main class="selected-work__inner-container">
              <section class="selected-work__details">
                <h3>{{ selectedWork.title }}</h3>
                <ul class="tag__snackbar snackbar--always-wrap">
                  <li class="tag tag--private" v-if="selectedWork.private">
                    <icon type="icon" name="iconPrivate" />
                    <span>Private</span>
                  </li>
                  <li class="tag tag--testing" v-if="selectedWork.testing">
                    <icon type="icon" name="iconLightning" />
                    <span>Testing</span>
                  </li>
                  <li class="tag tag--in-dev" v-if="selectedWork.inDev">
                    <svg
                      viewBox="0 0 18 18"
                      height="16"
                      width="16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="9"
                        cy="9"
                        r="8"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-dasharray="4"
                        stroke-linecap="square"
                      />
                    </svg>
                    <span>In development</span>
                  </li>
                  <li class="tag tag--beta" v-if="selectedWork.beta">
                    <svg
                      viewBox="0 0 18 18"
                      height="16"
                      width="16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="2" />
                    </svg>
                    <span>Beta</span>
                  </li>
                  <li class="tag tag--shipped" v-if="selectedWork.shipped">
                    <svg
                      viewBox="0 0 18 18"
                      height="16"
                      width="16"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="9" cy="9" r="8" />
                    </svg>
                    <span>Shipped</span>
                  </li>
                  <li class="tag tag--freelance" v-if="selectedWork.freelance">Freelance</li>
                </ul>
                <p>{{ selectedWork.preview }}</p>
                <footer>
                  <span>{{ selectedWork.team }}</span>
                  <span>{{ selectedWork.date }}</span>
                </footer>
              </section>
              <figure class="selected-work__hero">
                <img
                  :src="`/img${selectedWork.staticHref}/${selectedWork.heroImg}`"
                  decoding="async"
                  loading="lazy"
                  sizes=""
                />
              </figure>
            </main>
          </a>
        </li>
      </menu>
    </article>
    <footer>
      <p>
        See all available projects on
        <a
          href="https://github.com/ponchofreedo/portfolio-projects/"
          target="_blank"
          class="link link--inline"
          >GitHub<icon type="svg" name="brandGithub" /><icon
            type="icon"
            name="iconArrowSquareUpRight"
        /></a>
        or
        <a
          href="mailto:zach.freed+inquiry@gmail.com?subject=%27Sup."
          target="_blank"
          class="link link--inline"
          >drop a messge</a
        >
        if you'd like to discuss anything that is labeled
        <span class="link--display"><icon type="icon" name="iconPrivate" />Private</span>.
      </p>
    </footer>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:math';

#works {
  display: flex;
  flex-direction: column;
  padding-top: convertRem(120px);
  padding-bottom: convertRem(120px);
}

article,
footer {
  display: flex;
  flex-direction: column;
}

.selected-work {
  &__container {
    @include container-responsive-padding;
    position: relative;

    &:first-of-type {
      &::before {
        display: none;
      }
    }

    // &::before {
    //   content: '';
    //   position: absolute;
    //   top: convertRem(-42px); // +2px to account for extra gap
    //   bottom: 0;
    //   height: 2px;
    //   background-color: $primary__color--border;
    // }
    // @include psuedo-before-full-width-padding-fix;

    a {
      display: flex;
      flex-direction: inherit;
      gap: inherit;
      text-decoration: none;
      color: inherit;
      position: relative;
      transition: background-color 0.2s ease-in-out;
      z-index: 1;

      h3 {
        @include text-hover-effect(strike, 0s);
        @include text-hover-effect(color, 0.1s);
      }

      &::before {
        content: '';
        position: absolute;
        top: -#{convertRem(40px)};
        bottom: -#{convertRem(40px)};
        left: -#{convertRem(80px)};
        right: -#{convertRem(80px)};
        z-index: -1;
        background-color: $primary__color--background--lighter;
        opacity: 0;
        transition: opacity 0.2s ease-in-out;
        // 16px image radius + 40px padding
        // see...i follow the rules

        @media (max-width: 980px) {
          left: -#{convertRem(24px)};
          right: -#{convertRem(24px)};
        }

        @media (max-width: 680px) {
          display: none;
        }
      }

      &:hover {
        &::before {
          opacity: 1;
        }

        h3 {
          text-decoration-color: inherit;
          color: $primary__color--text--muted;
        }

        figure {
          opacity: 0.8;
        }
      }
    }
  }

  &__inner-container {
    @include container-inner-grid;
    height: 100%;

    @media (max-width: 1280px) {
      grid-column: col-start / span 8;
    }

    @media (max-width: 980px) {
      grid-column: col-start / span 7;
    }

    @media (max-width: 680px) {
      grid-column: 1 / -1;
    }
  }

  &__details {
    display: flex;
    flex-direction: column;
    gap: convertRem(8px);
    align-self: center;
    grid-column: col-start / span 4;

    @media (max-width: 1280px) {
    }

    @media (max-width: 980px) {
      grid-column: 1 / -1;
      order: 2;
    }

    footer {
      display: flex;
      flex-direction: row;
      gap: convertRem(8px);
      margin-top: convertRem(32px);
      color: $primary__color--text--muted;

      span {
        &:first-child {
          @include text-style(small, bold, fixed);
        }
        &:last-child {
          @include text-style(small, regular, fixed);
          color: $primary__color--text--darker;
        }
      }
    }
  }

  &__hero {
    grid-column: 6 / col-end;
    align-self: center;

    @media (max-width: 1280px) {
      grid-column: 5 / col-end;
    }

    @media (max-width: 980px) {
      grid-column: 1 / -1;
      order: 1;
    }
  }
}

header,
footer:not(menu footer) {
  @include container-responsive-padding;
}

h4 {
  color: $primary__color--text--darker;
  padding-bottom: convertRem(40px);
  border-bottom: convertRem(2px) solid $primary__color--border;
  margin-bottom: convertRem(40px);
}

menu {
  list-style: none;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: convertRem(80px);
}

figure {
  height: min-content;
  justify-content: center;
  overflow: hidden;
  position: relative;
  aspect-ratio: 2 / 1;
  border-radius: convertRem(24px);
  background-color: $ui__color--neutral;
  opacity: 1;
  will-change: transform;
  transition: opacity 0.2s ease-in-out;

  img {
    display: block;
    width: 100%;
    height: 100%;
    border: 0;
    border-radius: inherit;
    object-position: center;
    object-fit: cover;
  }
}

h3 {
  color: $primary__color--text;
}

p {
  color: $primary__color--text--muted;
}

footer:not(menu footer) {
  margin-top: convertRem(80px);

  @media (max-width: 980px) {
    margin-top: convertRem(40px);
  }
}
</style>
