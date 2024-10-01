import '@css/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// experimental things...
import icon from '@global/Icon.vue'

const app = createApp(App)

app.use(router)

app.component('icon', icon)

app.mount('#app')
