import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import UserDashboard from '../components/UserDashboard.vue';
import UserManagement from '../components/UserManagement.vue';
import ProductDashboard from '../components/ProductDashboard.vue';
import SalesOverview from '../components/SalesOverview.vue';
import InvoiceList from '../components/InvoiceList.vue';
import SalesReports from '../components/SalesReports.vue';

const routes = [
    {
        path: '/',
        name: 'Home View',
        component: HomeView,
        children: [
            {
                path: 'dashboard',
                component: UserDashboard
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
                component: SalesOverview
            },
            {
                path: 'invoices',
                component: InvoiceList
            },
            {
                path: 'reports',
                component: SalesReports
            },
        ]
    }
];

const router = new createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes
});

export default router;