import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.useAttrs(VueRouter);

const routes = [
    // Define routes her
    //Example:
    // {path: '/' component: Home },
    // {path: '/about', component: About },
];

const router = new VueRouter({
    routes,
    mode: 'history', // Use HTML5 History API for clean URLs (optional)
});