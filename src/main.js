import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/styles.css';

createApp(App).use(router).use(store).mount('#app');



// // src/main.js
// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// import '@fortawesome/fontawesome-free/css/all.css';

// createApp(App).use(router).mount('#app');
