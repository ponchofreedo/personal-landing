<script setup lang="ts">
// @ts-expect-error:next-line
import { VueImageZoomer } from 'vue-image-zoomer'
import 'vue-image-zoomer/dist/style.css'
import type { Project } from '@interfaces/project.ts'
import { RouterLink } from 'vue-router'
import { goToExternalLink } from '@data/constants'
</script>

<script lang="ts">
import json from '@data/projects.json'

export default {
  data() {
    return {
      projects: json.projects,
      company: this.$route.params.company,
      slug: this.$route.params.slug,
    }
  },
  computed: {
    project(): Project | null {
      const company = typeof this.company === 'string' ? this.company : this.company?.[0]
      const slug = typeof this.slug === 'string' ? this.slug : this.slug?.[0]

      if (!company || !slug) return null

      const companyProjects = json.projects[company as keyof typeof json.projects]
      if (!companyProjects) return null

      const result = companyProjects[slug as keyof typeof companyProjects]
      return result ? (result as Project) : null
    },
  },
  created() {
    if (this.project) {
      console.log('project loaded successfully. excelsior!')
    } else {
      console.log('project not found. booooooo.')
    }
  },
  methods: {
    scrollToId(id: any) {
      const element = document.getElementById(id)
      if (element) {
        const yOffset = element.offsetTop - 40
        window.scrollTo({
          top: yOffset,
          behavior: 'smooth',
        })
        console.log('scrolling to ' + id)
      }
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
      console.log('scrolling back to top')
    },
  },
}
</script>

<template>
  <article v-if="project" class="container__project">
    <!-- header start -->
    <header id="header" class="container__header">
      <h1>{{ project?.title }}</h1>
      <section class="container__header__inner">
        <section class="header__meta">
          <div class="header__meta__item">
            <em class="header__meta__title">Company</em>
            <div class="header__meta__value">
              <a :href="project?.company_url" target="_blank" class="link link--inline"
                >{{ project?.company }}<icon type="icon" name="iconArrowSquareUpRight"
              /></a>
            </div>
          </div>
          <div class="header__meta__item">
            <em class="header__meta__title">Timeline</em>
            <div class="content__timeline__dates">
              {{ project?.meta?.dateStart }} &mdash; {{ project?.meta?.dateEnd }}
              {{ project?.meta?.year }}
            </div>
          </div>
          <div class="header__meta__item">
            <em class="header__meta__title">Status</em>
            <ul class="tag__snackbar snackbar__inline">
              <li v-for="tag in project.meta.tags" :class="'tag' + ' ' + 'tag--' + tag">
                <icon v-if="tag == 'private'" type="icon" name="iconPrivate" />
                <icon v-if="tag == 'testing'" type="icon" name="iconLightning" />
                <svg
                  v-if="tag == 'beta'"
                  viewBox="0 0 18 18"
                  height="16"
                  width="16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9" cy="9" r="8" stroke="currentColor" stroke-width="2" />
                </svg>
                <svg
                  v-if="tag == 'in-dev'"
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
                <svg
                  v-if="tag == 'shipped'"
                  viewBox="0 0 18 18"
                  height="16"
                  width="16"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="9" cy="9" r="8" />
                </svg>
                <span v-if="tag == 'in-dev'">In development</span>
                <span v-else>{{ tag }}</span>
              </li>
            </ul>
          </div>
          <div class="header__meta__item">
            <em class="header__meta__title">Team</em>
            <div class="header__meta__value" v-html="project?.team"></div>
          </div>
        </section>
        <section>
          <div class="header__meta__action">
            <button
              type="button"
              class="button button--secondary button--has-icon button--icon-right"
              @click="scrollToId('results')"
            >
              Jump to results<span class="button__icon-container"
                ><icon type="svg" name="iconArrowDown"
              /></span>
            </button>
          </div>
          <p>{{ project.copy.sections.intro.p1 }}</p>
        </section>
      </section>
      <section class="container__media container__media--hero">
        <figure class="media__img--hero">
          <img
            :src="`/img/works/${company}/${slug}/${project.img[0].fileName}`"
            decoding="async"
            loading="lazy"
            sizes=""
          />
          <button
            type="button"
            class="button button--secondary button--has-icon button--icon-right"
            @click="goToExternalLink(project?.meta?.projectLink, '_blank')"
          >
            Explore Figma<span class="button__icon-container"
              ><icon type="svg" name="logoFigma"
            /></span>
          </button>
        </figure>
      </section>
    </header>
    <!-- header end -->
    <!-- hero start -->
    <!-- hero end -->
    <!-- main content start -->
    <main class="container__main-content">
      <aside class="main-content__nav">
        <nav>
          <ul>
            <li>
              <RouterLink to="" @click="scrollToId('context')" class="link link--subtle"
                >Context<span class="indicator">.</span></RouterLink
              >
            </li>
            <li>
              <RouterLink to="" @click="scrollToId('problem')" class="link link--subtle"
                >The problem<span class="indicator">.</span></RouterLink
              >
            </li>
            <li>
              <RouterLink to="" @click="scrollToId('challenges')" class="link link--subtle"
                >Challenges<span class="indicator">.</span></RouterLink
              >
            </li>
            <li>
              <RouterLink to="" @click="scrollToId('problem-solving')" class="link link--subtle"
                >Problem-solving<span class="indicator">.</span></RouterLink
              >
            </li>
            <li>
              <RouterLink to="" @click="scrollToId('results')" class="link link--subtle"
                >Impact<span class="indicator">.</span></RouterLink
              >
            </li>
            <li>
              <RouterLink to="" @click="scrollToId('retro')" class="link link--subtle"
                >Retro<span class="indicator">.</span></RouterLink
              >
            </li>
          </ul>
          <div class="nav__action">
            <button
              type="button"
              class="button button--tertiary button--has-icon button--icon-left"
              @click="scrollToTop()"
            >
              <span class="button__icon-container"><icon type="svg" name="iconArrowUp" /></span>
              Back to top
            </button>
          </div>
        </nav>
      </aside>
      <section class="main-content__inner">
        <!-- context start -->
        <section class="container__content">
          <article class="container__content__inner">
            <aside>
              <h4>{{ project?.copy?.sections?.context?.title }}</h4>
            </aside>
            <section>
              <p>{{ project?.copy?.sections?.context?.p1 }}</p>
              <p>{{ project?.copy?.sections?.context?.p2 }}</p>
            </section>
          </article>
        </section>
        <!-- context end -->
        <!-- 3-col image start
        <section class="container__feature-images">
          <figure class="media__img--feature">
            <img
              :src="`/img/works/${company}/${slug}/${project.img[1].fileName}`"
              decoding="async"
              loading="lazy"
              sizes=""
            />
          </figure>
          <figure class="media__img--feature">
            <video autoplay muted loop>
              <source
                :src="`/img/works/${company}/${slug}/${project.img[2].fileName}`"
                type="video/mp4"
              />
            </video>
          </figure>
          <figure class="media__img--feature">
            <video autoplay muted loop>
              <source
                :src="`/img/works/${company}/${slug}/${project.img[3].fileName}`"
                type="video/mp4"
              />
            </video>
          </figure>
        </section>
        3-col image end -->
        <!-- problem start -->
        <section class="container__content">
          <article class="container__content__inner">
            <aside>
              <h4>{{ project?.copy?.sections?.problem?.title }}</h4>
            </aside>
            <section>
              <p>{{ project?.copy?.sections?.problem?.p1 }}</p>
              <ul class="content__goals">
                <li class="content__goal" v-for="goal in project?.copy?.sections?.goals">
                  <div>
                    <span>Goal</span>
                    <em>{{ goal.goal }}</em>
                    <span v-html="goal.goalDetail"></span>
                  </div>
                </li>
              </ul>
            </section>
          </article>
        </section>
        <!-- problem end -->
        <!-- hero image start
        <figure class="media__img--hero">
          <vue-image-zoomer
            :regular="`/img/works/${company}/${slug}/${project.img[4].fileName}`"
            :zoom="`/img/works/${company}/${slug}/${project.img[5].fileName}`"
            img-width="1280"
            img-height="100%"
            img-class="media__img--zoom"
          />
        </figure>
        hero image end -->
        <!-- creation part 1 start -->
        <!-- <section class="container__content">
          <article class="container__content__inner">
            <aside>
              <h4>{{ project?.copy?.sections?.creation?.title }}</h4>
            </aside>
            <section>
              <p>{{ project?.copy?.sections?.creation?.p1 }}</p>
            </section>
          </article>
        </section> -->
        <!-- creation part 1 end -->
        <!-- creation part 2 start -->
        <!-- <section class="container__content">
          <article class="container__content__inner">
            <aside>
              <p>{{ project?.copy?.sections?.creation?.p2 }}</p>
              <p>{{ project?.copy?.sections?.creation?.p3 }}</p>
              <p>{{ project?.copy?.sections?.creation?.p4 }}</p>
            </aside>
            <section class="container--stacked">
              <figure
                class="media__video--feature media__video--contained media__video--hasCaption"
              >
                <video autoplay muted loop>
                  <source
                    :src="`/img/works/${company}/${slug}/${project.img[6].fileName}`"
                    type="video/mp4"
                  />
                </video>
                <figcaption class="caption--dark">{{ project?.img[6].alt }}</figcaption>
              </figure>
              <figure
                class="media__video--feature media__video--contained media__video--hasCaption"
              >
                <video autoplay muted loop>
                  <source
                    :src="`/img/works/${company}/${slug}/${project.img[7].fileName}`"
                    type="video/mp4"
                  />
                </video>
                <figcaption class="caption--dark">{{ project?.img[7].alt }}</figcaption>
              </figure>
              <p>{{ project?.copy?.sections?.creation?.p5 }}</p>
            </section>
          </article>
        </section> -->
        <!-- creation part 2 end -->
        <!-- manage start -->
        <!-- <section class="container__content">
          <article class="container__content__inner">
            <aside>
              <h4>{{ project?.copy?.sections?.manage?.title }}</h4>
            </aside>
            <section>
              <p>{{ project?.copy?.sections?.manage?.p1 }}</p>
              <p>{{ project?.copy?.sections?.manage?.p2 }}</p>
            </section>
          </article>
        </section> -->
        <!-- manage end -->
        <!-- hero image start -->
        <!-- <figure class="media__img--hero media__img--hasCaption caption--floating caption--light">
          <vue-image-zoomer
            :regular="`/img/works/${company}/${slug}/${project.img[8].fileName}`"
            :zoom="`/img/works/${company}/${slug}/${project.img[9].fileName}`"
            img-width="1280"
            img-height="100%"
            img-class="media__img--zoom"
          />
          <p>{{ project?.img[8].alt }}</p>
        </figure> -->
        <!-- hero image end -->
        <!-- retro start -->
        <!-- <section id="results" class="container__content">
          <article class="container__content__inner">
            <aside>
              <h4>{{ project?.copy?.sections?.retro?.title }}</h4>
            </aside>
            <section>
              <p>{{ project?.copy?.sections?.retro?.p1 }}</p>
              <ul class="content__goals">
                <li class="content__goal">
                  <div>
                    <em>Goal</em>
                    <span v-html="project?.copy?.sections?.goals[1].goal"></span>
                  </div>
                  <div>
                    <em>Result</em>
                    <span v-html="project?.copy?.sections?.goals[1].result"></span>
                  </div>
                </li>
                <li class="content__goal">
                  <div>
                    <em>Goal</em>
                    <span v-html="project?.copy?.sections?.goals[2].goal"></span>
                  </div>
                  <div>
                    <em>Result</em>
                    <span v-html="project?.copy?.sections?.goals[2].result"></span>
                  </div>
                </li>
              </ul>
              <p>{{ project?.copy?.sections?.retro?.p2 }}</p>
              <ul class="content__goals">
                <li class="content__goal">
                  <div>
                    <em>Goal</em>
                    <span v-html="project?.copy?.sections?.goals[4].goal"></span>
                  </div>
                  <div>
                    <em>Result</em>
                    <span v-html="project?.copy?.sections?.goals[4].result"></span>
                  </div>
                </li>
              </ul>
              <p>{{ project?.copy?.sections?.retro?.p3 }}</p>
              <ul class="content__goals">
                <li class="content__goal">
                  <div>
                    <em>Goal</em>
                    <span v-html="project?.copy?.sections?.goals[3].goal"></span>
                  </div>
                  <div>
                    <em>Result</em>
                    <span v-html="project?.copy?.sections?.goals[3].result"></span>
                  </div>
                </li>
              </ul>
              <p>{{ project?.copy?.sections?.retro?.p4 }}</p>
              <p>{{ project?.copy?.sections?.retro?.p5 }}</p>
            </section>
          </article>
        </section> -->
        <!-- retro end -->
      </section>
    </main>
    <!-- main content end-->
  </article>
  <article v-else>
    <header>
      <div>Sorry, project not found.</div>
      <p>Check out some of my others...</p>
    </header>
  </article>
</template>

<style lang="scss" scoped>
.container {
  &__project {
    @include container-max-width;
    @include container-responsive-padding;
    display: flex;
    flex-flow: column;
    padding-top: convertRem(80px); // do not change this value at any breakpoint
    padding-bottom: convertRem(80px);
    row-gap: convertRem(80px);
  }

  &__header {
    display: inherit;
    flex-flow: inherit;
    row-gap: convertRem(80px);

    &__inner {
      @include container-inner-grid;
      row-gap: convertRem(40px);

      section {
        display: grid;
        grid-column: 1 / -1;
        grid-template-columns: subgrid;

        &:last-of-type {
          align-items: end;
        }
      }
    }

    p {
      @include text-style(big, regular, normal);
      color: $primary__color--text--muted;
      grid-column: span 9;
    }
  }

  &__main-content {
    @include container-inner-grid;
    grid-template-areas: 'nav main-content';
  }

  &__content {
    p {
      @include text-style(p, regular, normal);
      color: $primary__color--text--muted;
    }
  }

  &__media {
    display: unset;

    &--hero {
      display: flex;
      flex-flow: column;
    }
  }

  &__feature-images {
    display: grid;
    place-items: start;
    grid-template-columns: repeat(3, minmax(convertRem(240px), 1fr));
    column-gap: convertRem(16px);
    margin: convertRem(40px) 0;
  }

  &--stacked {
    display: flex;
    flex-direction: column;
    gap: convertRem(40px);
  }
}

.header {
  &__meta {
    @include text-style(p, regular, ui);

    &__item {
      display: flex;
      flex-flow: column;
      row-gap: convertRem(8px);
      grid-column: span 3;

      > :nth-child(2) {
        padding-block: convertRem(4px);
      }
    }

    &__title {
      min-width: convertRem(80px);
      color: $primary__color--text--darker;
    }

    &__value {
      text-transform: capitalize;
    }

    .tag {
      padding-top: 0;
      padding-bottom: 0;
    }

    &__action {
      grid-column: span 3;
    }

    em {
      @include text-style(small, bold, ui);
    }
  }

  &__goals {
    display: flex;
    flex-flow: column;
    width: 100%;
    align-self: center;
    margin-top: convertRem(32px);
    row-gap: convertRem(8px);

    + p {
      margin-top: convertRem(32px);
    }
  }

  &__goal {
    padding: convertRem(24px);
    background-color: $primary__color--background--darker;
    border-radius: convertRem(16px);
    @include text-style(p, book, base);

    div {
      display: flex;
      flex-flow: row;
      column-gap: convertRem(16px);
      place-items: center;

      &:nth-of-type(2) {
        margin-top: convertRem(16px);
        border-top: convertRem(2px) solid $primary__color--background;
        padding-top: convertRem(16px);

        em {
          color: $primary__color--accent;
        }
      }
    }

    em {
      min-width: convertRem(64px);
      text-transform: capitalize;
      color: $primary__color--text--darker;
    }

    span {
      text-transform: none;
    }
  }
}

.main-content {
  &__nav {
    display: flex;
    flex-flow: column;
    grid-area: nav;
    grid-column: span 3;

    nav {
      display: flex;
      flex-flow: column;
      justify-content: space-between;
      align-items: flex-start;
      min-height: convertRem(240px);
      height: 100%;
      position: relative;
      @include text-style(p, medium, ui);
      color: $primary__color--text--darker;
      z-index: 1;
    }

    ul {
      display: flex;
      flex-flow: column;
      row-gap: convertRem(8px);
      list-style: none;
      width: 100%;
      position: sticky;
      top: convertRem(40px);
      padding-bottom: convertRem(80px);
    }

    li {
      display: inline-flex;
      align-items: baseline;
      gap: 0;
      text-transform: none;
    }
  }

  &__inner {
    grid-area: main-content;
    display: flex;
    flex-flow: column;
    grid-column: span 9;
    row-gap: convertRem(80px);
  }
}

.nav {
  &__action {
    position: sticky;
    padding-top: convertRem(240px);
    bottom: convertRem(40px);
    z-index: -1;
  }
}

figure {
  &:not(figure svg) {
    background-color: transparent;
  }

  &:has(video) + figure:has(video) {
    // temporary hack to address stacked content
  }

  picture {
    img {
      border-radius: convertRem(16px);
    }
  }

  img,
  img:not(picture img) {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    background-color: $base__color--neutral--250;
  }

  picture,
  video {
    height: 100%;
    width: 100%;
    border-radius: inherit;
  }

  figcaption {
    margin-top: convertRem(8px);
    @include text-style(small, regular, base);
    text-align: center;
  }
}

.media {
  &__img {
    &--hero,
    &--feature,
    &--zoom {
      border-radius: convertRem(16px);
      position: relative;

      button {
        position: absolute;
        bottom: convertRem(40px);
        right: convertRem(40px);
      }
    }

    &--hero {
      display: flex;
      flex-flow: column;
    }

    &--feature {
    }

    &--zoom {
      height: 100%;
      width: 100%;
      max-width: convertRem(1280px);
    }

    &--hasCaption {
      p {
        margin-top: convertRem(32px);
      }
    }
  }

  &__video {
    &--feature {
      padding: convertRem(40px);
      background-color: #f5f5f5;
      background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.2));
      border-radius: convertRem(16px);

      video {
        max-height: convertRem(640px);
      }
    }

    &--hasCaption {
      padding-bottom: convertRem(32px);

      figcaption {
        margin-top: convertRem(32px);
      }
    }
  }
}

.caption {
  &--floating {
    p {
      @include text-style(small, regular, base);
      text-align: center;
    }
  }

  &--dark {
    color: $primary__color--text--invert;
  }

  &--light {
    color: $primary__color--text--darker;
  }
}

h4 {
  display: flex;
  flex-flow: column;
  margin-bottom: convertRem(24px);
  color: $primary__color--text--darker;
}

p {
  display: flex;
  flex-flow: column;

  + p {
    margin-top: convertRem(16px);
  }
}

ul {
}

li {
  text-transform: lowercase;

  &:first-letter {
    text-transform: uppercase;
  }

  span {
    &:first-letter {
      text-transform: uppercase;
    }
  }
}
</style>
