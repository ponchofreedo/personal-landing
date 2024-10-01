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
  	const brandIcon = defineAsyncComponent(() =>
    	import(`@svg/brands/${props.name}.svg`)
  	);
  	const socialIcon = defineAsyncComponent(() =>
    	import(`@svg/brands/${props.name}.svg`)
  	);
</script>

<template>
	<component v-if="type === 'icon'" :is="icon" :debug="name" :debug-type="type" />
	<component v-else-if="type === 'brandIcon'" :is="brandIcon" :debug="name" :debug-type="type" />
	<component v-else-if="type === 'socialIcon'" :is="brandIcon" :debug="name" :debug-type="type" />
</template>