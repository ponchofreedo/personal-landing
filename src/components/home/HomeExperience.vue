<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { experienceList, goToExternalLink, resourceList, resumeLink } from '@data/constants'
</script>

<template>
  <section id="experience">
    <article>
      <section class="container__experience">
        <header>
          <h4>Experience.</h4>
        </header>
        <ol>
          <li v-for="experience in experienceList" :key="experience.id" :team="experience.team">
            <figure>
              <icon type="svg" :name="experience.logoFile" />
            </figure>
            <div class="experience__details">
              <header>
                <h5>{{ experience.title }}</h5>
                <span>{{ experience.date }}</span>
              </header>
              <menu>
                <li class="experience__team">{{ experience.team }}</li>
                <li>{{ experience.location }}</li>
                <li v-if="experience.freelance">Contract</li>
                <li v-if="experience.extra">{{ experience.extra }}</li>
              </menu>
            </div>
          </li>
        </ol>
        <footer>
          <p>
            For the rest of the boring bits, check out my
            <RouterLink to="/cv" class="link link--inline"
              >full CV<icon type="icon" name="iconArrowUpRight" /> </RouterLink
            >.
          </p>
          <button
            type="button"
            class="button button--secondary button--has-icon button--icon-right"
            @click="goToExternalLink(resumeLink, '_blank')"
          >
            <span>Grab my r&eacute;sum&eacute;</span>
            <span class="button__icon-container"><icon type="icon" name="iconDownload" /></span>
          </button>
        </footer>
      </section>
      <section class="container__resources">
        <header>
          <h4>Projects and resources.</h4>
          <small>Free community things are cool.</small>
        </header>
        <ul>
          <li
            v-for="resource in resourceList"
            :key="resource.id"
            :class="resource.state ? 'resource__wip' : ''"
          >
            <a :href="resource.url" target="_blank">
              <header>
                <figure>
                  <icon type="svg" :name="resource.platformIcon" />
                  <figcaption>{{ resource.platform }}</figcaption>
                </figure>
                <h3>{{ resource.name }}</h3>
                <icon type="icon" name="iconArrowSquareUpRight" />
              </header>
              <p>{{ resource.detail }}</p>
            </a>
          </li>
        </ul>
      </section>
    </article>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:math';

#experience {
  display: flex;
  flex-direction: column;
  @include container-max-width;
  @include container-responsive-padding;
}

article {
  @include container-inner-grid;
  padding-top: convertRem(120px);
  padding-bottom: convertRem(120px);

  @media (max-width: 1280px) {
  }

  @media (max-width: 980px) {
    padding-bottom: convertRem(80px);
  }

  @media (max-width: 680px) {
    grid-column: span 4;
    row-gap: convertRem(24px);
  }
  section {
    grid-column: inherit;
  }
}

.container__experience {
  order: 1;
  grid-column: span 6;
  padding-right: convertRem(20px);

  @media (max-width: 1280px) {
    grid-column: span 4;
  }

  @media (max-width: 980px) {
    grid-column: 1 / -1;
    padding-right: 0;
    padding-bottom: convertRem(80px);
  }
}

.container__resources {
  order: 2;
  grid-column: span 6;
  padding-left: convertRem(20px);

  @media (max-width: 1280px) {
    grid-column: span 4;
  }

  @media (max-width: 980px) {
    grid-column: 1 / -1;
    padding-left: 0;
    padding-bottom: convertRem(80px);
  }
}

header {
  position: relative;

  h4 {
    color: $primary__color--text--darker;
    padding-bottom: convertRem(40px);
    border-bottom: convertRem(2px) solid $primary__color--border;
    margin-bottom: convertRem(40px);
    position: relative;
  }

  small {
    position: absolute;
    top: convertRem(44px);
    left: 0;
    color: $primary__color--text--darker;
  }
}

h4 {
  color: $primary__color--text--darker;
  padding-bottom: convertRem(40px);
  border-bottom: convertRem(2px) solid $primary__color--border;
  margin-bottom: convertRem(40px);
}

figure {
  display: flex;
  height: convertRem(64px);
  width: convertRem(64px);
  padding: convertRem(16px);
  background-color: $primary__color--background--lighter;
  border-radius: convertRem(12px);
  justify-content: space-around;
  align-items: center;

  svg {
    height: auto;
    max-width: convertRem(32px);
    fill: $primary__color--accent;
    color: $primary__color--accent;
  }

  @media (max-width: 680px) {
    height: convertRem(48px);
    width: convertRem(48px);
    padding: convertRem(8px);
  }
}

ol {
  display: flex;
  flex-direction: column;
  gap: convertRem(32px);

  li {
    display: inline-flex;
    flex-direction: row;
    gap: convertRem(16px);

    &[team='priceline'] {
      position: relative;
      z-index: 1;

      &::after {
        position: absolute;
        content: '';
        top: 50%;
        left: convertRem(32px);
        width: convertRem(2px);
        height: 100%;
        background-color: $primary__color--background--lighter;
        z-index: -1;

        @media (max-width: 480px) {
          left: convertRem(24px);
        }
      }

      &:nth-child(8) {
        &::after {
          display: none;
        }
      }
    }
  }

  .experience__details {
    display: flex;
    flex-direction: column;
    flex: auto;
    gap: convertRem(8px);
    place-self: center;
  }

  header {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 480px) {
      flex-direction: column;
      align-items: flex-start;
      gap: convertRem(4px);
    }

    h5 {
      padding-right: convertRem(16px);
    }

    span {
      font-size: convertRem($text__font-size--p);
      font-weight: $text__font-weight--medium;
      color: $primary__color--text--muted;
      text-align: right;
    }
  }
}

menu {
  display: flex;
  flex-direction: row;
  gap: convertRem(20px);

  li {
    position: relative;
    display: inline-flex;
    @include text-style(p, regular, fixed);
    color: $primary__color--text--darker;

    &:first-child {
      color: $primary__color--text--muted;
    }

    &:last-child {
      &::after {
        display: none;
      }
    }

    &::after {
      position: absolute;
      content: '';
      top: convertRem(6px);
      right: convertRem(-12px);
      display: inline-block;
      vertical-align: middle;
      height: convertRem(4px);
      width: convertRem(4px);
      border-radius: convertRem(999px);
      background-color: $ui__color--neutral;
    }
  }
}

h3 {
  color: $primary__color--text;
}

footer {
  display: flex;
  flex-direction: column;
  margin-top: convertRem(48px);
  color: $primary__color--text--muted;

  p {
    margin-bottom: convertRem(24px);
  }
}
</style>
