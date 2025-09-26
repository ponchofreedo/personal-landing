import '@css/reset.css'
import '@scss/main.scss'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// experimental things...
import icon from '@util/Icon.vue'

const app = createApp(App)

app.use(router)
app.component('icon', icon)

app.mount('#app')