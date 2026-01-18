<script setup lang="ts"></script>

<template>
  <header>
    <article>
      <section class="header__welcome">
        <h2>Selected works<span class="highlight">.</span></h2>
      </section>
      <section class="header__intro">
        <p class="text--big">
          I’ve worked with some great teams to improve complex data management experiences, expose
          valuable insights by simplifying how admins and support interact with data, and built
          systems to improve product design and development velocity and communication.
        </p>
        <p class="text--big">
          Interested in hearing more?
          <a
            href="mailto:zach.freed+inquiry@gmail.com?subject=%27Sup."
            target="_blank"
            class="link link--inline"
            >Drop a line</a
          >
          and let's chat about all the things.
        </p>
      </section>
    </article>
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
  padding-bottom: convertRem(80px);

  @media (max-width: 680px) {
    padding-top: convertRem(80px);
    padding-bottom: convertRem(40px);
  }
}

article {
  display: grid;
  grid-column: 1 / -1;
  grid-template-rows: 1fr;
  row-gap: convertRem(40px);
  grid-template-columns: subgrid;

  @media (max-width: 980px) {
    row-gap: convertRem(32px);
  }

  @media (max-width: 480px) {
    row-gap: convertRem(24px);
  }
}

section {
  grid-column: inherit;

  &.header__welcome {
    display: flex;
    flex-direction: column;
  }

  &.header__intro {
    display: flex;
    flex-direction: column;
    grid-column: col-start / span 8;

    @media (max-width: 680px) {
      grid-column: 1 / -1;
    }
  }
}

h2 {
  font-weight: $text__font-weight--medium;

  @supports (font-variation-settings: normal) {
    font-variation-settings: 'wght' $text__font-weight--medium;
  }
}

p {
  @include text-style(big, regular, ui);
  color: $primary__color--text--muted;

  @media (max-width: 680px) {
    @include text-style(p, regular, ui);
  }

  + p {
    margin-top: convertRem(24px);
  }
}
</style>
