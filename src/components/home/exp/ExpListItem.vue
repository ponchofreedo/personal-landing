<script setup lang="ts">
  import Link from '@global/Link.vue'

  defineProps([
    'id',
    'brand',
    'title',
    'startDate',
    'endDate',
    'location',
    'content'
  ])


</script>

<template>
  <ul>
    <li>
      <section>
        <a v-if="type === 'iconButton'" :href="href" :target="target" :class="'btn btn--' + size + ' btn--icon ' + classes + ' ' + iconName" :debug-type="type">
          <span v-if="label === 'Resume'" v-html="customLabel[0]"></span>
          <span v-else>{{ label }}</span>
          <icon :type="iconType" :name="iconName" />
        </a>
      </section>
    </li>
  </ul>
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
    color: inherit;
    fill: initial;
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
    background-color: initial;
    box-sizing: content-box;
    color: inherit;
    font-size: 1rem;
    font-weight: var(--text__font-weight--medium);
    text-decoration: none;
    height: unset;
    line-height: 1;
    gap: 0.5rem; /* default value, should be overridden lower */
  }

  /* button size definitions */
  .btn--xs {
    padding: 0.5rem 0.75rem;
    border-radius: var(--text__font-size--p--px);
    border-radius: var(--text__font-size--p--rem);
    gap: 0.25rem;
  }

  .btn--sm {
    padding: 0.75rem 1rem;
    font-size: var(--text__font-size--small--px);
    font-size: var(--text__font-size--small--rem);
    border-radius: var(--text__font-size--h5--px);
    border-radius: var(--text__font-size--h5--rem);
    gap: 0.25rem;
  }

  .btn--md {
    padding: 0.5rem 1.25rem;
    border-radius: var(--text__font-size--h3--px);
    border-radius: var(--text__font-size--h3--rem);
    gap: 0.5rem;
  }
  
  .btn--lg {
    padding: 0.5rem 1.25rem; /* -0.25rem for the borders */
    border-radius: var(--text__font-size--h2--px);
    border-radius: var(--text__font-size--h2--rem);
    gap: 0.5rem;
  }

  /* per button span settings */
  [class^="btn"] span {
    line-height: 1.0;
  }

  .btn--xs span {
    font-size: var(--text__font-size--p--px);
    font-size: var(--text__font-size--p--rem);
  }

  .btn--md span {
    font-size: var(--text__font-size--h4--px);
    font-size: var(--text__font-size--h4--rem);
  }

  .btn--lg span {
    font-size: var(--text__font-size--h3--px);
    font-size: var(--text__font-size--h3--rem);
  }

  /* per button svg settings */

  .btn--xs svg {
    height: 1rem;
    width: 1rem;
  }

  .btn--md svg {
    height: 1.25rem;
    width: 1.25rem;
    /* color: red; */ /* just for debugging */
  }

  .btn--lg svg {
    height: 1.5rem;
    width: 1.5rem;
    /* color: red; */ /* just for debugging */
  }

  /* btn style modifier classes */
  .btn--primary {
    background-color: var(--primary__color--theme);
  }

  .btn--primary:hover {}

  .btn--secondary {
    background-color: var(--primary__color--background);
    border-width: 0.25rem;
    border-color: var(--base__color--black-2);
    border-style: solid;
  }

  .btn--tertiary {
    background-color: var(--primary__color--background);
  }

  .btn--secondary svg,
  .btn--tertiary svg {
    color: var(--base__color--gray-1);
  }

  .btn--secondary:hover svg,
  .btn--tertiary:hover svg {
    color: var(--base__color--blue-3);
  }

  /* overrides like these need to be below button size definitions to interrupt the cascade */
  .btn--icon {
    fill: currentColor;
    align-items: center;
  }

  .btn--icon svg {
    fill: inherit;
  }

  /* special color classes and mods for social icons */
  .btn--icon.BrandLinkedIn,
  .btn--icon.BrandFigma,
  .btn--icon.BrandGitHub,
  .btn--icon.BrandDribbble,
  .btn--icon.BrandInstagram {
    background-color: unset;
    padding: 0.75rem;
  }

  .btn--icon.BrandLinkedIn {
    background-color: var(--special__social-color--linkedin);
  }

  .btn--icon.BrandFigma {
    background-color: var(--special__social-color--figma);
  }

  .btn--icon.BrandGitHub {
    background-color: var(--special__social-color--github);
  }

  .btn--icon.BrandDribbble {
    background-color: var(--special__social-color--dribbble);
  }

  .btn--icon.BrandInstagram {
    background-color: var(--special__social-color--instagram);
    background: radial-gradient(circle at 22% 111%, #fcb045 9%, #fd1d1d 47%, #d6249f 64%, #833ab4 90%, #285aeb 98%);
  }

  .btn--circle {
    border-radius: 50%;
  }

  .btn--circle svg {
    height: 32px;
    width: 32px;
    color: var(--primary__color--theme); /* fallback */
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

  /* background-color override classes...just in case ;p */
  .btn--black {
    background-color: var(--base__color--black-1)!important;
    color: var(--base__color--white)!important;
  }

  .btn--blue {
    background-color: var(--base__color--blue-1)!important;
    color: var(--base__color--white)!important;
  }

  /* really special styles that i dont want to write, but have to 
     because i hate inlining */
  .rotated svg {
    transform: rotate(135deg);
  }
</style>