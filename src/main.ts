import '@scss/main.scss'
import '@data/constants.ts'

import { createApp } from 'vue'
import App from './App.vue'
import VueImageZoomer from 'vue-image-zoomer'
import 'vue-image-zoomer/dist/style.css'
import router from './router'

// experimental things...
import icon from '@util/Icon.vue'

const app = createApp(App)

app.use(router)
app.use(VueImageZoomer)
app.component('icon', icon)

app.mount('#app')