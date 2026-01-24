<script setup lang="ts"></script>

<template>
  <section class="process__container">
    <div class="tag tag--accent">
      <span>How I work</span>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'sass:math';

.process {
  &__container {
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
  }
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
  // display: flex;
  // flex-direction: column;
  // gap: convertRem(32px);
  // grid-column: span 8;
  // order: 1;

  // @media (max-width: 1280px) {
  //   grid-column: span 5;
  // }

  // @media (max-width: 680px) {
  //   grid-column: 1 / -1;
  //   order: 2;
  // }
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
</style>
