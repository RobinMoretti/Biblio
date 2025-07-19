import './assets/main.scss'

import VueLazyload from 'vue-lazyload'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'
import localization from './assets/localization'

const i18n = createI18n(localization);


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(i18n)
app.use(createPinia())
app.use(router)
app.use(VueLazyload);

app.mount('#app')
