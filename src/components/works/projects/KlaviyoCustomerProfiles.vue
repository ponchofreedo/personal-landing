<script setup lang="ts">
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
  <article v-if="project" class="container__project" :team="company">
    <!-- header start -->
    <header id="header" class="container__header">
      <a :href="project?.company_url" target="_blank" class="header__meta__company">
        <div>
          <icon
            type="svg"
            :name="'logo' + project?.company"
            :class="'logo logo--' + project?.company"
          />
        </div>
        <em>{{ project?.company }}</em>
      </a>
      <h1>{{ project?.title }}</h1>
      <section class="container__header__inner">
        <section>
          <p>{{ project.copy.sections.intro.p1 }}</p>
          <div class="header__meta__action">
            <button
              type="button"
              class="button button--secondary button--has-icon button--icon-right"
              @click="scrollToId('impact')"
            >
              Jump to impact<span class="button__icon-container"
                ><icon type="svg" name="iconArrowDown"
              /></span>
            </button>
          </div>
        </section>
      </section>
      <section class="container__media container__media--hero">
        <figure class="media__img--hero" :team="company">
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
              <RouterLink to="" @click="scrollToId('impact')" class="link link--subtle"
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
        <!-- <section class="container__content" id="context">
          <h4>{{ project?.copy?.sections?.context?.title }}</h4>
          <p>{{ project?.copy?.sections?.context?.p1 }}</p>
          <p>{{ project?.copy?.sections?.context?.p2 }}</p>
          <article class="context__meta">
            <div class="context__meta__item">
              <em class="context__meta__title">Timeline</em>
              <div class="context__timeline__dates">
                {{ project?.meta?.dateStart }} &mdash; {{ project?.meta?.dateEnd }}
              </div>
            </div>
            <div class="context__meta__item">
              <em class="context__meta__title">Team</em>
              <div class="context__meta__value" v-html="project?.team"></div>
            </div>
            <div class="context__meta__item">
              <em class="context__meta__title">Status</em>
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
          </article>
        </section> -->
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
        <!-- <section class="container__content" id="problem">
          <h4>{{ project?.copy?.sections?.problem?.title }}</h4>
          <p>{{ project?.copy?.sections?.problem?.p1 }}</p>
          <ul class="content__goals">
            <li
              class="content__goal"
              v-for="goal in project?.copy?.sections?.goals"
              :key="goal.goal"
            >
              <span>Goal</span>
              <em>{{ goal.goal }}</em>
              <p v-html="goal.goalDetail"></p>
            </li>
          </ul>
          <p>{{ project?.copy?.sections?.problem?.p2 }}</p>
        </section> -->
        <!-- problem end -->
        <!-- challenges start -->
        <!-- <section class="container__content" id="challenges">
          <h4>{{ project?.copy?.sections?.challenges?.title }}</h4>
          <figure
            class="media__container media__video media__video--feature media__video--contained layout--right hasCaption--top"
          >
            <video autoplay muted loop>
              <source
                :src="`/img/works/${company}/${slug}/${project.img[1].fileName}`"
                :alt="project?.img[1].alt"
                type="video/mp4"
              />
            </video>
            <figcaption class="caption--light">
              <span v-for="(caption, index) in project?.img[1].caption" :key="index">{{
                caption
              }}</span>
            </figcaption>
          </figure>
          <article class="challenges__content layout--right">
            <section class="challenges__item">
              <div>
                <em>{{ project?.copy?.sections?.challenges?.p1a }}</em>
                <p>{{ project?.copy?.sections?.challenges?.p1b }}</p>
              </div>
              <div>
                <em>{{ project?.copy?.sections?.challenges?.p2a }}</em>
                <p>{{ project?.copy?.sections?.challenges?.p2b }}</p>
              </div>
              <div>
                <article class="quote quote__card">
                  <span class="quote__caption">
                    {{ project?.copy?.sections?.quotes[0]?.quote }}
                  </span>
                  <span class="quote__attribution">
                    &ndash; {{ project?.copy?.sections?.quotes[0]?.attribution }}
                  </span>
                </article>
              </div>
              <div>
                <em>{{ project?.copy?.sections?.challenges?.p3a }}</em>
                <p>{{ project?.copy?.sections?.challenges?.p3b }}</p>
              </div>
              <div>
                <article class="quote quote__card">
                  <span class="quote__caption">
                    {{ project?.copy?.sections?.quotes[1]?.quote }}
                  </span>
                  <span class="quote__attribution">
                    &ndash; {{ project?.copy?.sections?.quotes[1]?.attribution }}
                  </span>
                </article>
              </div>
              <div>
                <em>{{ project?.copy?.sections?.challenges?.p4a }}</em>
                <p>{{ project?.copy?.sections?.challenges?.p4b }}</p>
              </div>
            </section>
          </article>
          <figure class="media__container media__img--feature layout--left hasCaption--bottom">
            <picture>
              <source :srcset="`/img/works/${company}/${slug}/${project.img[2].fileName}`" />
              <img
                :src="`/img/works/${company}/${slug}/${project.img[2].fileName}`"
                decoding="async"
                loading="lazy"
                sizes=""
              />
            </picture>
            <figcaption class="caption--light">
              <span v-for="(caption, index) in project?.img[2].caption" :key="index">{{
                caption
              }}</span>
            </figcaption>
          </figure>
        </section> -->
        <!-- challenges end -->
        <!-- solving start -->
        <!-- <section class="container__content" id="problem-solving">
          <h4>{{ project?.copy?.sections?.solving?.title }}</h4>
          <p>{{ project?.copy?.sections?.solving?.p1 }}</p>
          <figure
            class="media__container media__img--hero layout--right block__element hasCaption--center"
          >
            <picture>
              <source :srcset="`/img/works/${company}/${slug}/${project.img[3].fileName}`" />
              <img
                :src="`/img/works/${company}/${slug}/${project.img[3].fileName}`"
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
            </picture>
            <figcaption class="caption--light">
              <span v-for="(caption, index) in project?.img[3].caption" :key="index">{{
                caption
              }}</span>
            </figcaption>
          </figure>
          <p>{{ project?.copy?.sections?.solving?.p2 }}</p>
          <p>{{ project?.copy?.sections?.solving?.p3 }}</p>
          <figure
            class="media__container media__img--feature layout--left block__element hasCaption--bottom"
          >
            <picture>
              <source :srcset="`/img/works/${company}/${slug}/${project.img[4].fileName}`" />
              <img
                :src="`/img/works/${company}/${slug}/${project.img[4].fileName}`"
                decoding="async"
                loading="lazy"
                sizes=""
              />
            </picture>
            <figcaption class="caption--light">
              <span v-for="(caption, index) in project?.img[4].caption" :key="index">{{
                caption
              }}</span>
            </figcaption>
          </figure>
        </section>-->
        <!-- solving end -->
        <!-- impact start -->
        <!-- <section class="container__content" id="impact">
          <h4>{{ project?.copy?.sections?.impact?.title }}</h4>
          <p>{{ project?.copy?.sections?.impact?.p1 }}</p>
          <p>{{ project?.copy?.sections?.impact?.p2 }}</p>
          <ul class="content__results">
            <li
              class="content__result"
              v-for="result in project?.copy?.sections?.results"
              :key="result.result"
            >
              <span>Result</span>
              <em>{{ result.result }}</em>
              <p v-html="result.resultDetail"></p>
            </li>
          </ul>
          <p>{{ project?.copy?.sections?.impact?.p3 }}</p>
        </section> -->
        <!-- impact end -->
        <!-- retro start -->
        <!-- <section class="container__content" id="retro">
          <h4>{{ project?.copy?.sections?.retro?.title }}</h4>
          <p>{{ project?.copy?.sections?.retro?.p1 }}</p>
          <p>{{ project?.copy?.sections?.retro?.p2 }}</p>
          <p>{{ project?.copy?.sections?.retro?.p3 }}</p>
          <p>{{ project?.copy?.sections?.retro?.p4 }}</p>
          <p>{{ project?.copy?.sections?.retro?.p5 }}</p>
        </section> -->
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

    &__inner {
      @include container-inner-grid;
      row-gap: convertRem(40px);
      margin-block: convertRem(80px);

      section {
        display: grid;
        grid-column: 1 / -1;
        grid-template-columns: subgrid;

        @media (max-width: 1280px) {
          row-gap: convertRem(32px);
        }

        @media (max-width: 680px) {
          row-gap: convertRem(24px);
        }

        &:last-of-type {
          align-items: end;
        }
      }
    }

    p {
      @include text-style(big, regular, normal);
      color: $primary__color--text--muted;
      grid-column: span 9;

      @media (max-width: 980px) {
        order: 1;
        grid-column: 1 / -1;
      }
    }
  }

  &__main-content {
    @include container-inner-grid;
    grid-template-areas: 'nav main-content';
  }

  &__content {
    display: flex;
    flex-flow: column;

    &:first-child {
      margin-top: 0 !important;
    }

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

    &__company {
      display: inline-flex;
      flex-flow: row;
      width: fit-content;
      align-items: center;
      column-gap: convertRem(8px);
      color: unset;
      text-decoration: none;
      margin-bottom: convertRem(40px);

      &:visited,
      &:link,
      &:hover,
      &:active {
        color: unset;
        text-decoration: none;
      }

      div {
        padding: convertRem(4px);
        background-color: inherit;
        border-radius: convertRem(8px);
        font-size: 0;
        line-height: 0;
      }

      svg {
        @include svgProps(
          $height: convertRem(24px),
          $width: convertRem(24px),
          $scale: 1,
          $color: inherit
        );

        @media (max-width: 980px) {
          @include svgProps($height: convertRem(20px), $width: convertRem(20px));
        }
      }

      em {
        @include text-style(h4, medium, fixed);
        color: inherit;
      }
    }

    &__action {
      grid-column: span 3;
      align-self: center;
      justify-self: center;

      @media (max-width: 1280px) {
        align-self: flex-start;
        justify-self: flex-start;
        order: 2;
        grid-column: 1 / -1;
      }
    }
  }

  &__goals,
  &__results {
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

  &__goal,
  &__result {
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
    margin-top: convertRem(4px); // optical adjustment

    @media (max-width: 1280px) {
      grid-column: span 2;
    }

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
    row-gap: convertRem(160px);

    @media (max-width: 1280px) {
      grid-column: span 6;
      row-gap: convertRem(80px);
    }
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

.content {
  &__goals,
  &__results {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: convertRem(40px);
    margin-block: convertRem(40px);

    @media (max-width: 1280px) {
      grid-template-columns: repeat(2, 1fr);
      gap: convertRem(32px);
    }

    @media (max-width: 980px) {
      // grid-template-columns: 1fr;
      gap: convertRem(24px);
    }
  }

  &__goal,
  &__result {
    display: flex;
    flex-flow: column;
    grid-column: span 1;
    row-gap: convertRem(8px);
    padding: convertRem(32px);
    border-radius: convertRem(16px);
    min-height: convertRem(400px);

    @media (max-width: 1280px) {
      min-height: convertRem(320px);
    }

    @media (max-width: 980px) {
    }

    em {
      @include text-style(h5, bold, ui);
    }

    span {
      &:first-of-type {
        width: fit-content;
        padding: convertRem(8px) convertRem(12px);
        border-radius: convertRem(8px);
        @include text-style(p, medium, fixed);
        margin-bottom: convertRem(24px);
      }
    }
  }

  &__goal {
    border: convertRem(2px) solid $primary__color--border--lighter;

    em {
      color: $primary__color--text;
    }

    span {
      &:first-of-type {
        border: convertRem(2px) solid $primary__color--border--lighter;
        color: $primary__color--text--darker;
      }
    }
  }

  &__result {
    border: convertRem(2px) solid $secondary__color--accent--1;

    em {
      color: $secondary__color--accent--1;
    }

    span {
      &:first-of-type {
        border: convertRem(2px) solid $secondary__color--accent--1;
        color: $secondary__color--accent--1;
      }
    }
  }
}

.context {
  &__meta {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: convertRem(40px);
    margin-block: convertRem(40px) 0;
    @include text-style(p, regular, ui);

    &__item {
      display: flex;
      flex-flow: column;
      row-gap: convertRem(8px);
      grid-column: span 1;

      @media (max-width: 980px) {
        grid-column: 1 / -1;
        row-gap: convertRem(4px);
      }

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

      span {
        &::first-letter {
          text-transform: uppercase;
        }
      }
    }

    &__action {
      grid-column: span 3;
      align-self: center;
      justify-self: center;

      @media (max-width: 1280px) {
        align-self: flex-start;
        justify-self: flex-start;
        order: 2;
        grid-column: 1 / -1;
      }
    }

    em {
      @include text-style(small, bold, ui);
    }
  }
}

.challenges {
  &__content {
    display: grid;
    gap: convertRem(40px);
    grid-template-areas: '. main main';
    margin-block: convertRem(40px);
  }

  &__item {
    grid-area: main;
    display: flex;
    flex-flow: column;
    row-gap: convertRem(40px);

    > div {
      display: flex;
      flex-flow: column;
      row-gap: convertRem(8px);
    }

    em {
      @include text-style(p, bold, normal);
      color: $primary__color--text--darker;
    }
  }
}

figure {
  &:not(figure svg) {
    background-color: transparent;
  }

  // &:has(video) + figure:has(video) {
  //   // temporary hack to address stacked content
  // }

  picture,
  video,
  div {
    // grid-area: content;
    min-height: convertRem(480px);
    height: 100%;
    width: 100%;
    border-radius: inherit;
  }

  picture {
    display: flex;
    flex-flow: column;
    background-color: $base__color--neutral--250;
    border-radius: convertRem(16px);
    justify-content: center;
  }

  img,
  img:not(picture img) {
    display: block;
    height: auto;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
    background-color: $base__color--neutral--250;
  }

  figcaption {
    @include text-style(p, regular, base);

    span {
      display: block;

      & + span {
        margin-top: convertRem(16px);
      }
    }
  }

  // special classes reserved for teams. will move this to something else in the future.
  &[team='klaviyo'] {
    background-color: #f3f2f1;
  }
}

.media {
  &__container {
    display: grid;
    gap: convertRem(40px);
    margin-block: convertRem(16px);

    @media (max-width: 1280px) {
      gap: convertRem(32px);
    }

    @media (max-width: 980px) {
      gap: convertRem(24px);
    }

    &.hasCaption {
      &--top,
      &--bottom,
      &--center {
        figcaption {
          display: flex;
          flex-flow: column;
          // grid-area: caption;
          text-align: left;
        }
      }

      &--top {
        figcaption {
          align-self: flex-start;
          margin-top: convertRem(40px);
        }
      }

      &--bottom {
        figcaption {
          align-self: flex-end;
          margin-bottom: convertRem(40px);
        }
      }

      &--center {
        row-gap: convertRem(16px);

        figcaption {
          align-self: center;
          text-align: center;
        }
      }
    }
  }

  &__img {
    &--hero,
    &--feature,
    &--zoom {
      position: relative;

      picture {
        position: relative;
      }

      button {
        position: absolute;
        bottom: convertRem(40px);
        right: convertRem(40px);
      }
    }

    &--hero {
      display: flex;
      flex-flow: column;
      border-radius: convertRem(48px);

      @media (max-width: 1280px) {
        border-radius: convertRem(24px);
      }

      img {
        background-color: transparent;
      }
    }

    &--feature,
    &--zoom {
      border-radius: convertRem(16px);
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
    video {
    }

    figcaption {
    }

    &--feature {
      // background-image: radial-gradient(transparent, rgba(0, 0, 0, 0.2));

      video {
        padding: convertRem(40px);
        background-color: $primary__color--background--invert;
        border-radius: convertRem(16px);
        max-height: convertRem(640px);
      }
    }

    &.caption {
      &--topLeft {
        align-items: flex-start;
        justify-content: flex-start;
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

.layout {
  &--left,
  &--right {
    grid-template-columns: repeat(3, 1fr);

    video,
    picture {
      grid-area: main;
    }

    figcaption {
      grid-area: side;
    }

    figcaption {
      text-align: left;
    }
  }

  &--left {
    grid-template-areas: 'main main side';
  }

  &--right {
    grid-template-areas: 'side main main';
  }
}

.quote {
  display: flex;
  flex-flow: column;
  gap: convertRem(24px);

  &__card {
    background-color: $primary__color--background--lighter;
    border: convertRem(2px) solid $primary__color--border;
    padding-block: convertRem(32px);
    padding-inline: convertRem(40px);
    border-radius: convertRem(16px);
  }

  &__caption {
    @include text-style(h5, regular, base);
    font-style: italic;
    color: $primary__color--text;
  }

  &__attribution {
    @include text-style(small, medium, base);
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

.block {
  &__element {
    margin-block: convertRem(40px);
  }
  &__inline {
  }
}

[team='klaviyo'] {
  --brand-color: #f96353;
  --secondary-color: #f3f2f1;

  .header__meta__company {
    color: var(--brand-color);

    div {
      background-color: var(--brand-color);

      svg {
        color: var(--secondary-color);
      }
    }
  }
}
</style>
