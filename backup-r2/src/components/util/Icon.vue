<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
})

const svg = defineAsyncComponent(() => import(`@svg/2026/${props.name}.svg`))
</script>

<template>
  <component :is="svg" :debug="name" :debug-type="type" />
</template>
