import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import "@/assets/css/libs.min.css"
import "@/assets/css/hope-ui.css?v=1.0.2"

createApp(App).use(router).mount('#app')
