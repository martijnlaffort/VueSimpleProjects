import { createApp } from 'vue'

import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.min'
import router from "./router";
import VueCookies from 'vue3-cookies'

import axios from "axios";
axios.defaults.baseURL = process.env.API_BASE_URL || 'http://localhost:3000';
window.axios = axios;

createApp(App)
    .use(router, VueCookies)
    .mount('#app')
