import Vue from 'vue';
import App from './App.vue';
import router from './router'; // Import vue router instance

Vue.config.productionTip = false;

new Vue ({
    router, // use vue router instance
    render: h => h (App),
}).$mount('#app');