<script setup>
	import { defineAsyncComponent } from 'vue'

	const props = defineProps({
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			required: true
		}
	})

	const icon = defineAsyncComponent(() =>
    	import(`@svg/icons/${props.name}.svg`)
  	);
  	const svg = defineAsyncComponent(() =>
    	import(`@svg/${props.name}.svg`)
  	);
</script>

<template>
	<component v-if="type === 'icon'" :is="icon" :debug="name" :debug-type="type" />
	<component v-else-if="type === 'svg'" :is="svg" :debug="name" :debug-type="type" />
</template>