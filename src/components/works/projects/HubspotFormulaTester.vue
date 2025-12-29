<script setup lang="ts">
import { ref } from 'vue'
import type { Project } from '@interfaces/project.ts'
// @ts-expect-error:next-line
import { VueImageZoomer } from 'vue-image-zoomer'
import 'vue-image-zoomer/dist/style.css'
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
      console.log('I am a project')
    }
  },
}
</script>

<template>
  <section v-if="project" class="container__project">
    <!-- header start -->
    <header class="container__content">
      <h1>{{ project?.title }}</h1>
      <article class="container__content__inner">
        <aside>
          <div class="content__meta">
            <em class="content__meta__title">Company</em>
            <div class="content__meta__value">
              <a :href="project?.company_url" target="_blank" class="link link--inline"
                >{{ project?.company }}<icon type="icon" name="iconArrowSquareUpRight"
              /></a>
            </div>
          </div>
          <div class="content__meta">
            <em class="content__meta__title">Year(s)</em>
            <div class="content__meta__value">{{ project?.meta?.date }}</div>
          </div>
          <div class="content__meta">
            <em class="content__meta__title">Status</em>
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
          <div class="content__meta">
            <em class="content__meta__title">Team</em>
            <div class="content__meta__value" v-html="project?.team"></div>
          </div>
        </aside>
        <section>
          <p class="text--big">{{ project.copy.sections.intro.p1 }}</p>
        </section>
      </article>
    </header>
    <figure class="media__img--hero">
      <img
        :src="`/img/works/${company}/${slug}/${project.img[0].fileName}`"
        decoding="async"
        loading="lazy"
        sizes=""
      />
    </figure>
    <!-- header end -->
    <!-- context start -->
    <section class="container__content">
      <article class="container__content__inner">
        <aside>
          <h2>{{ project?.copy?.sections?.context?.title }}</h2>
        </aside>
        <section>
          <p>{{ project?.copy?.sections?.context?.p1 }}</p>
          <p>{{ project?.copy?.sections?.context?.p2 }}</p>
        </section>
      </article>
    </section>
    <!-- context end -->
    <!-- 3-col image start -->
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
    <!-- 3-col image end -->
    <!-- opportunity start -->
    <section class="container__content">
      <article class="container__content__inner">
        <aside>
          <h2>{{ project?.copy?.sections?.opportunity?.title }}</h2>
        </aside>
        <section>
          <p>{{ project?.copy?.sections?.opportunity?.p1 }}</p>
          <ul class="content__goals">
            <li class="content__goal" v-for="goal in project?.copy?.sections?.goals">
              <div>
                <em>Goal</em>
                <span v-html="goal.goal"></span>
              </div>
            </li>
          </ul>
        </section>
      </article>
    </section>
    <!-- opportunity end -->
    <!-- hero image start -->
    <figure class="media__img--hero">
      <vue-image-zoomer
        :regular="`/img/works/${company}/${slug}/${project.img[4].fileName}`"
        :zoom="`/img/works/${company}/${slug}/${project.img[5].fileName}`"
        img-width="1280"
        img-height="100%"
        img-class="media__img--zoom"
      />
    </figure>
    <!-- hero image end -->
    <!-- creation part 1 start -->
    <section class="container__content">
      <article class="container__content__inner">
        <aside>
          <h2>{{ project?.copy?.sections?.creation?.title }}</h2>
        </aside>
        <section>
          <p>{{ project?.copy?.sections?.creation?.p1 }}</p>
        </section>
      </article>
    </section>
    <!-- creation part 1 end -->
    <!-- creation part 2 start -->
    <section class="container__content">
      <article class="container__content__inner">
        <aside>
          <p>{{ project?.copy?.sections?.creation?.p2 }}</p>
          <p>{{ project?.copy?.sections?.creation?.p3 }}</p>
          <p>{{ project?.copy?.sections?.creation?.p4 }}</p>
        </aside>
        <section class="container--stacked">
          <figure class="media__video--feature media__video--contained media__video--hasCaption">
            <video autoplay muted loop>
              <source
                :src="`/img/works/${company}/${slug}/${project.img[6].fileName}`"
                type="video/mp4"
              />
            </video>
            <figcaption class="caption--dark">{{ project?.img[6].alt }}</figcaption>
          </figure>
          <figure class="media__video--feature media__video--contained media__video--hasCaption">
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
    </section>
    <!-- manage start -->
    <section class="container__content">
      <article class="container__content__inner">
        <aside>
          <h2>{{ project?.copy?.sections?.manage?.title }}</h2>
        </aside>
        <section>
          <p>{{ project?.copy?.sections?.manage?.p1 }}</p>
          <p>{{ project?.copy?.sections?.manage?.p2 }}</p>
        </section>
      </article>
    </section>
    <!-- manage end -->
    <!-- hero image start -->
    <figure class="media__img--hero media__img--hasCaption caption--floating caption--light">
      <vue-image-zoomer
        :regular="`/img/works/${company}/${slug}/${project.img[8].fileName}`"
        :zoom="`/img/works/${company}/${slug}/${project.img[9].fileName}`"
        img-width="1280"
        img-height="100%"
        img-class="media__img--zoom"
      />
      <p>{{ project?.img[8].alt }}</p>
    </figure>
    <!-- hero image end -->
    <!-- retro start -->
    <section class="container__content">
      <article class="container__content__inner">
        <aside>
          <h2>{{ project?.copy?.sections?.retro?.title }}</h2>
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
    </section>
    <!-- retro end -->
  </section>
  <section v-else>
    <header>
      <div>project not found</div>
    </header>
  </section>
</template>

<style lang="scss" scoped>
.container {
  &__project {
    display: flex;
    flex-flow: column;
    width: 100%;
    align-self: center;

    aside {
      @include split-column-layout-side(left);

      p {
        @include text-style(p, medium, base);
      }
    }
  }

  &__content {
    @include inner-flex-container;
    margin: convertRem(80px) 0;

    &__inner {
      @include split-column-layout-container;

      article:first-of-type {
      }
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

.content {
  &__meta {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: left;
    margin-bottom: convertRem(16px);
    gap: convertRem(16px);

    &:last-child {
      margin-bottom: 0;
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

header {
  margin: convertRem(24px) 0 convertRem(64px) !important;
  font-size: convertRem(16px);
  gap: convertRem(40px);

  p {
    margin-top: convertRem(-8px); // optical adjustment
    color: $primary__color--text--muted;
  }
}

h2,
aside p {
  color: $primary__color--text--darker;
}

figure {
  &:not(figure svg) {
    // this is just a test
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

  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    object-position: center center;
    border-radius: inherit;
  }

  picture,
  video {
    border-radius: convertRem(16px);
    height: 100%;
    width: 100%;
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
    }

    &--hero {
      margin: convertRem(40px) 0;
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

p {
  + p {
    margin-top: convertRem(16px);
  }
}

ul {
}

li {
  text-transform: lowercase;

  span {
    &:first-letter {
      text-transform: uppercase;
    }
  }
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
