import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import i18n from './i18n'
import globalComponent from './plugins/global-components'
require('waypoints/lib/noframework.waypoints.min')

const app = createApp(App)
app.use(i18n)
app.use(store)
app.use(router)
app.use(globalComponent)
app.mount('#app')

export { app }
