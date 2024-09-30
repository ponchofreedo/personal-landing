<script setup lang="ts">
  import IconArrowDown from '@svg/icons/IconArrowDown.vue'
  import IconArrowUp from '@svg/icons/IconArrowUp.vue'
  import IconClose from '@svg/icons/IconClose.vue'

  import BrandKlaviyo from '@svg/brands/BrandKlaviyo.vue'
  import BrandOrder from '@svg/brands/BrandOrder.vue'
  import BrandTentrr from '@svg/brands/BrandTentrr.vue'
  import BrandPriceline from '@svg/brands/BrandPriceline.vue'
  import BrandDigitalSurgeons from '@svg/brands/BrandDigitalSurgeons.vue'

  defineProps([
    'label',
    'href',
    'target',
    'type',
    'size',
    'hasBrand',
    'hasIcon',
    'iconName'
  ])

  const customLabel = ['R&eacute;sum&eacute;', 'Resume']
</script>

<template>
  <!-- <a v-if="hasIcon" :href="href" :target="target" :class="'btn btn--' + size + ' btn--emphasis'">
    <span>{{ label }}</span>
    <IconArrowDown v-if="iconName === 'arrow-down'" />
    <IconArrowUp v-else-if="iconName === 'arrow-up'" />
    <IconClose v-else-if="iconName === 'close'" />
  </a> -->

  <a v-if="type === 'iconOnlyButton'" :href="href" :target="target" :class="'btn btn--' + size + ' btn--circle btn--icon'" :debug-type="type">
    <IconArrowDown />
  </a>

  <a v-else :href="href" :target="target" :class="'btn btn--' + size">
    <span v-if="label === 'Resume'" v-html="customLabel[0]"></span>
    <span v-else>{{ label }}</span>
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

  /* button size definitions */
  .btn--sm {
    padding: 14px 20px;
    font-size: var(--text__font-size--small--px);
    font-size: var(--text__font-size--small--rem);
    border-radius: var(--text__font-size--h5--px);
    border-radius: var(--text__font-size--h5--rem);
  }

  .btn--md {
    padding: 16px 24px;
    font-size: var(--text__font-size--p--px);
    font-size: var(--text__font-size--p--rem);
    border-radius: var(--text__font-size--h4--px);
    border-radius: var(--text__font-size--h4--rem);
  }
  
  .btn--lg {
    padding: 16px 24px;
    font-size: var(--text__font-size--h4--px);
    font-size: var(--text__font-size--h4--rem);
    border-radius: var(--text__font-size--h2--px);
    border-radius: var(--text__font-size--h2--rem);
  }

  /* overrides like these need to be below button size definitions to interrupt the cascade */
  .btn--icon {
    padding: 16px;
  }

  .btn--lg svg {
    height: 24px;
    width: 24px;
    color: var(--primary__color--theme);
  }

  .btn--circle {
    border-radius: 50%;
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

  .btn--brand {
    display: flex;
    justify-content: space-around;
    height: 144px;
    width: 144px;
    background-color: #242E32;
  }

  .btn--brand div {
    display: contents!important;
  }

  .btn--brand:hover {
    background-color: var(--primary__color--theme);
  }

  .btn--brand:hover svg {
    fill: var(--primary__color--background);
  }

  .btn--brand svg {
    max-width: 80px;
    max-height: fit-content;
    align-self: center;
    fill: var(--primary__color--text);
  }
</style>