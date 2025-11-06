<script setup lang="ts">
  import { ref } from 'vue'
  // @ts-expect-error:next-line
  import { VueImageZoomer } from 'vue-image-zoomer'
  import 'vue-image-zoomer/dist/style.css'
  import type { Project } from '@types/project'
</script>

<script lang="ts">
  import json from '@data/projects.json'

  export default {
    data() {
      return {
        projects: json.projects,
        company: this.$route.params.company,
        slug: this.$route.params.slug
      };
    },
    computed: {
      project(): Project | null {
        const company = typeof this.company === 'string' ? this.company : this.company?.[0];
        const slug = typeof this.slug === 'string' ? this.slug : this.slug?.[0];
        
        if (!company || !slug) return null;
        
        const companyProjects = json.projects[company as keyof typeof json.projects];
        if (!companyProjects) return null;
        
        const result = companyProjects[slug as keyof typeof companyProjects];
        return result ? (result as Project) : null;
      }
    },
    created() {
      if (this.project) {
        console.log("I am a project");
      }
    },
  };
</script>

<template>

  <section class="container__project">
    <header>
      <div>project name: {{ project?.title }}</div>
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
      background-color: $primary__color--background--alt;
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
    margin: 0 0 convertRem(64px)!important;
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
    
    &:not(figure svg) { // this is just a test
      background-color: transparent;
    }

    &:has(video) + figure:has(video) { // temporary hack to address stacked content
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
      @include text-style(small, normal, base);
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

      &--hasCaption {;

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
        @include text-style(small, normal, base);
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
