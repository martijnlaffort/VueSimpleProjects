import { createApp } from 'vue'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'
import router from "./router";
import VueCookies from 'vue3-cookies'

createApp(App)
    .use(router, VueCookies)
    .mount('#app')
