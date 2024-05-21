// src/main.js
import { createApp } from 'vue';
import App from './AppSidebar.vue';
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css';

createApp(App).use(router).mount('#app');
