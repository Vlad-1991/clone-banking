import {createPinia} from "pinia";
const pinia = createPinia();
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './theme.css'


createApp(App)
    .use(pinia)
    .use(router)
    .mount('#app')
