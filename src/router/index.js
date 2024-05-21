import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Dashboard from '../components/Dashboard.vue';
import UserManagement from '../components/UserManagement.vue';
import ProductDashboard from '../components/ProductDashboard.vue';
import Sales from '../components/Sales.vue';
import Invoices from '../components/Invoices.vue';
import Reports from '../components/Reports.vue';

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
        children: [
            {
                path: 'dashboard',
                component: Dashboard
            },
            {
                path: 'users',
                component: UserManagement
            },
            {
                path: 'product',
                component: ProductDashboard
            },
            {
                path: 'sales',
                component: Sales
            },
            {
                path: 'invoices',
                component: Invoices
            },
            {
                path: 'reports',
                component: Reports
            },
        ]
    }
];

const router = new createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes
});

export default router;