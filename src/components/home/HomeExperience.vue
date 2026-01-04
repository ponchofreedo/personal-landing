<script setup lang="ts">
import { experienceList, resourceList } from '@data/constants'
</script>

<template>
  <section id="experience">
    <article>
      <section class="container__experience">
        <ol>
          <li v-for="experience in experienceList" :key="experience.id" :team="experience.team">
            <figure>
              <icon type="svg" :name="experience.logoFile" />
            </figure>
            <div class="experience__details">
              <header>
                <h3>{{ experience.title }}</h3>
                <span>{{ experience.date }}</span>
              </header>
              <ul>
                <li class="experience__team">{{ experience.team }}</li>
                <li>{{ experience.location }}</li>
                <li v-if="experience.freelance">Freelance</li>
                <li v-if="experience.extra">{{ experience.extra }}</li>
              </ul>
            </div>
          </li>
        </ol>
      </section>
      <section class="container__resources">
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
    <footer>
      <p>
        Grab a copy of
        <a
          href="https://drive.google.com/file/d/1Ib9gDFZmR5loB7iczbViQZr49_o_fgfY/view?usp=sharing"
          target="_blank"
          class="link link--inline"
          >my r&eacute;sum&eacute;<icon type="icon" name="iconDownload"
        /></a>
      </p>
    </footer>
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
    height: calc(100dvh - 200px);
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
}

.container__resources {
  order: 2;
  grid-column: span 6;
  padding-left: convertRem(20px);
}

h2 {
  color: $primary__color--text--darker;
}

figure {
  display: flex;
  height: convertRem(64px);
  width: convertRem(64px);
  padding: convertRem(16px);
  background-color: $primary__color--background--darker;
  border-radius: convertRem(12px);
  justify-content: space-around;
  align-items: center;

  svg {
    height: auto;
    max-width: convertRem(32px);
    fill: $primary__color--accent;
    color: $primary__color--accent;
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

  span {
    font-size: convertRem($text__font-size--p);
    font-weight: $text__font-weight--medium;
    color: $primary__color--text--muted;
  }
}

ul {
  display: flex;
  flex-direction: row;
  gap: 20px;

  li {
    position: relative;
    display: inline-flex;
    @include text-style(p, regular, fixed);
    color: $primary__color--text--darker;

    &:first-child {
      color: $primary__color--text;
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
  margin-top: convertRem(40px);
  color: var(--base__color--neutral-50);

  a {
    display: inline-flex;
    align-items: center;
    gap: convertRem(4px);
    color: inherit;
  }

  p {
    line-height: var(--text__line-height--fixed);

    + p {
      margin-top: convertRem(16px);
    }
  }
}

@media (max-width: 720px) {
  footer {
    margin-top: 16px;
    margin-top: 1rem;
  }
}
</style>
