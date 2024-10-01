<script>
	import { defineAsyncComponent } from 'vue'

	export default {
		name: 'icon',
		props: {
			name: {
				type: String,
				required: true
			}
		},
		data() {
			return {
				icons: import.meta.glob('@/**/*.svg'),
			};
		},
		computed: {
			icon() {
				console.log(this.icons);
				console.log(this.icons['@svg/**/*/${this.name}.svg']);
				return defineAsyncComponent(() => this.icons['@/**/*/${this.name}.svg']()
				);
			}
		}
	}

	// computed: {
	// 	dynamicSvg(){
	// 		const name = this.name
	// 		return defineAsyncComponent (() =>
	// 			import('@svg/icons/${name}.svg?component'))
	// 	}
	// }

	// const icon = defineAsyncComponent(() =>
	// 	import('@svg/icons/IconArrowDown.svg?component')
	// )
</script>

<template>
	<component :is="icon" :name="name" />
</template>