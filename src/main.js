//main.js/src
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bootstrap/dist/css/bootstrap.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './assets/styles.css';
// import vuetify from './plugins/vuetify'; // Path to vuetify export
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';
// import 'chartist/dist/chartist.min.css';

createApp(App).use(router).use(store).mount('#app');





// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// import store from './store';
// import '@fortawesome/fontawesome-free/css/all.css';
// import './assets/styles.css';

// createApp(App).use(router).use(store).mount('#app');



// // src/main.js
// import { createApp } from 'vue';
// import App from './App.vue';
// import router from './router';
// import '@fortawesome/fontawesome-free/css/all.css';

// createApp(App).use(router).mount('#app');
