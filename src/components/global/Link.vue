<script setup lang="ts">
  
  defineProps([
    'label',
    'href',
    'target',
    'type',
    'size',
    'hasIcon',
    'iconName'
  ])
</script>

<template>
  <a :href="href" :target="target" :class="'link link--' + type">{{ label }}</a>
</template>

<style scoped>
  a {
    text-decoration: none;
    text-decoration-color: white;
    text-decoration-thickness: unset;
    text-decoration-skip-ink: none;
    transition: color 80ms ease-in-out,
                text-decoration 80ms ease-in-out,
                transform 80ms ease-in-out;
  }

  a,
  a:active,
  a:link,
  a:visited {
    color: unset;
  }

  a:hover {
    color: inherit;
    text-decoration: revert;
    text-decoration-style: solid;
    text-decoration-color: inherit;
    text-decoration-thickness: from-font;
    text-underline-offset: -1%;
  }

  a:focus,
  a:focus-within
  a:focus-visible {
    box-shadow: 0 0.25rem 2rem var(--base__color--blue-3);
    transform: scale(1.025); 
  }

  a:focus-visible {
    outline: 0.25rem solid var(--base__color--blue-3);
  }

  @supports (font-variation-settings: normal) {
    a:hover {
      text-decoration-thickness: inherit;
    }
  }

  .link,
  .link:active,
  .link:link,
  .link:visited {
    color: var(--primary__color--theme);
  }

  .link--default:hover {
    color: var(--primary__color--theme);
    text-decoration-color: var(--base__color--blue-3);
  }
</style>