import router from './router'
import {createPinia, Pinia} from "pinia";
const pinia: Pinia = createPinia();
import { createApp } from 'vue'
import App from './App.vue'
import './theme.css'


createApp(App)
    .use(router)
    .use(pinia)
    .mount('#app')
