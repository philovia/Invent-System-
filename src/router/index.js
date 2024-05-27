import { createRouter, createWebHistory } from 'vue-router';
import LoginView from '@/views/LoginView.vue';
import RegisterView from '@/views/RegisterView.vue';
import DashboardView from '@/views/DashboardView.vue';
import UserManagementView from '@/views/UserManagementView.vue';
import ProductDashboardView from '@/views/ProductDashboardView.vue';
import SalesOverviewView from '@/views/SalesOverviewView.vue';
import InvoiceListView from '@/views/InvoiceListView.vue';
import SalesReportsView from '@/views/SalesReportsView.vue';
import PurchasesView from '@/views/PurchasesView.vue';

const routes = [
    { path: '/', component: LoginView },
    { path: '/register', component: RegisterView },
    { path: '/dashboard', component: DashboardView },
    { path: '/users', component: UserManagementView },
    { path: '/products', component: ProductDashboardView },
    { path: '/sales', component: SalesOverviewView },
    { path: '/invoices', component: InvoiceListView },
    { path: '/reports', component: SalesReportsView },
    { path: '/purchases', component: PurchasesView },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;



// import { createRouter, createWebHistory } from 'vue-router';
// import DashboardView from '../views/DashboardView.vue';
// import UsersView from '../views/UserManagementView.vue';
// import ProductView from '../views/ProductDashboardView.vue';
// import SalesView from '../views/SalesOverviewView.vue';
// import InvoicesView from '../views/InvoiceListView.vue';
// import ReportsView from '../views/SalesReportsView.vue';
// import PurchasesView from  '../views/PurchasesView.vue';

// const routes = [
//     { path: '/', name: 'Dashboard', views: DashboardView },
//     { path: '/users', name: 'Users', views: UsersView },
//     { path: '/products', name: 'Products', views: ProductView },
//     { path: '/sales', name: 'Sales', views: SalesView },
//     { path: '/invoices', name: 'Invoices', views: InvoicesView },
//     { path: '/reports', name: 'Reports', views: ReportsView },
//     { path: '/purchases', name: 'Purchases', views: PurchasesView },
// ];

// const router = createRouter({
//     history: createWebHistory(process.env.BASE_URL),
//     routes,
// });

// export default router;
