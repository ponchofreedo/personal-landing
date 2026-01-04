<script setup lang="ts"></script>

<template>
  <header>
    <h1>Selected<span class="highlight"> works.</span></h1>
    <p>
      A sampling of work that had complex problems to solve and delivered real results...kind of
      like that time you, or a friend, went to a brewery before knowing the difference between an
      IPA and a lager, but ended up making friends with at least one crew member before you left.
    </p>
    <p>
      <a
        href="mailto:zach.freed+inquiry@gmail.com?subject=%27Sup."
        target="_blank"
        class="link link--inline"
        >Drop a messge</a
      >
      if you'd like to discuss anything that is labeled
      <icon class="link link--display" type="icon" name="iconPrivate" /><span
        class="link link--display"
        >Private</span
      >.
    </p>
  </header>
</template>

<style lang="scss" scoped>
@use 'sass:math';

header {
  @include container-inner-grid;
  margin: convertRem(120px) 0;
  justify-content: center;

  h1 {
    font-weight: $text__font-weight--medium;
    margin-bottom: convertRem(16px);

    @supports (font-variation-settings: normal) {
      font-variation-settings: 'wght' $text__font-weight--medium;
    }
  }

  p {
    @include text-style(h3, regular, ui);
    color: $primary__color--text--muted;
    width: clamp(convertRem(480px), 72%, 100%);

    + p {
      margin-top: convertRem(16px);
    }
  }
}

a {
  display: inline-flex;
  align-items: center;
  gap: convertRem(4px);
  color: inherit;
}

svg {
  display: inline-flex;
  vertical-align: text-top;
  height: convertRem(24px);
  width: auto;
  margin-top: convertRem(1px);
  margin-right: convertRem(2px);
}
</style>
