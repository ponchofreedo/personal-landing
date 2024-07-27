<script setup lang="ts">
  import IconArrowDown from './icons/IconArrowDown.vue'
  import IconArrowUp from './icons/IconArrowUp.vue'
  import IconClose from './icons/IconClose.vue'

  defineProps([
    'name',
    'href',
    'location',
    'hasIcon',
    'iconName'
  ])
</script>

<template>
  <a v-if="hasIcon" :href="href" :target="location" class="btn btn--lg btn--emphasis">
    <span>{{ name }}</span>
    <IconArrowDown v-if="iconName === 'arrow-down'" />
    <IconArrowUp v-else-if="iconName === 'arrow-up'" />
    <IconClose v-else-if="iconName === 'close'" />
  </a>

  <a v-else :href="href" :target="location" class="btn btn--lg">
    {{ name }}
  </a>
</template>

<style scoped>
  a,
  svg {
    display: inline-flex;
    color: inherit;
    text-decoration: none;
    display: inline-flex;
    transition: color 0.08s ease-in-out,
                background-color 0.08s ease-in-out,
                border-color 0.08s ease-in-out;
  }

  a span {
    display: inline-flex;
    white-space: nowrap;
    margin-right: 8px;
  }

  svg {
    height: initial;
    width: initial;
  }

  a:hover,
  a:hover svg {
    color: var(--primary__color--background);
  }

  a:hover {
    background-color: var(--primary__color--theme);
    border-color: var(--primary__color--theme);
  }


  /* weird hack needed to render svg contents */

  .btn {
    background-color: #242E32;
    box-sizing: content-box;
    color: inherit;
    font-weight: var(--text__font-weight--semibold);
    text-decoration: none;
    height: unset;
    line-height: 1;
  }

  .btn--lg {
    padding: 16px 24px;
    font-size: var(--text__font-size--h4--px);
    font-size: var(--text__font-size--h4--rem);
    border-radius: var(--text__font-size--h2--px);
    border-radius: var(--text__font-size--h2--rem);
  }

  .btn--lg svg {
    height: 24px;
    width: 24px;
    color: var(--primary__color--theme);
  }

  .btn--emphasis {
    box-sizing: border-box;
    height: max-content; /* just to be safe */
    
    /* its dumb to have to do this, but need to override top and bottom padding to prevent a blow out */
    padding-top: calc(var(--base__multiplier) * 1.5px);
    padding-top: calc((var(--base__multiplier) / var(--base__font-size)) * 1.5rem);
    padding-bottom: calc(var(--base__multiplier) * 1.5px);
    padding-bottom: calc((var(--base__multiplier) / var(--base__font-size)) * 1.5rem);

    border-style: solid;
    border-width: calc(var(--base__multiplier) * 0.5px);
    border-width: calc((var(--base__multiplier) / var(--base__font-size)) * 0.5rem);
    border-color: var(--primary__color--theme);
  }
</style>