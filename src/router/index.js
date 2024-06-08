import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import AdminPage from '@/pages/AdminPage.vue';
import CashierPage from '@/pages/CashierPage.vue';
import SupplierPage from '@/pages/SupplierPage.vue';
import SupplierLogin from '@/components/SupplierLogin.vue';
import SupplierRegister from '@/components/SupplierRegister.vue';
import TopBar from '@/components/TopBar.vue';
// Import the CashierPage component

const routes = [

            { path: '/', component: HomePage },
            {

                path: '/admin',
                component: AdminPage,
                children: [
                    { path: '/top-bar', component: TopBar }
                ]
                },

            { path: '/cashier', component: CashierPage },
            {
                path: '/supplier',
                component: SupplierPage,
                children: [
                    { path: 'login', component: SupplierLogin },
                    { path: 'register', component: SupplierRegister }
                ]
            },

];

    const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;





// //src/router/index.js
// import Vue from 'vue';
// import Router from 'vue-router';
// import HomePage from '../components/HomePage.vue';
// import AboutUs from '../components/AboutUs.vue';
// import LoginAdmin from '../components/LoginAdmin.vue';
// import LoginCashier from '../components/LoginCashier.vue';
// import RegisterSupplier from '../components/RegisterSupplier.vue';
// import AdminDashboard from '../components/AdminDashboard.vue';
// import CashierDashboard from '../components/CashierDashboard.vue';
// import SupplierDashboard from '../components/SupplierDashboard.vue';

// Vue.use(Router);

// export default new Router({
//     mode: 'history',
//     routes: [
//     { path: '/', component: HomePage },
//     { path: '/about', component: AboutUs },
//     { path: '/login-admin', component: LoginAdmin },
//     { path: '/login-cashier', component: LoginCashier },
//     { path: '/register-supplier', component: RegisterSupplier },
//     {
//         path: '/admin-dashboard',
//         component: AdminDashboard,
//         children: [
//         { path: '', component: () => import('../pages/AdminDashboard.vue') },
//         // { path: 'suppliers', component: () => import('../pages/AdminSuppliers.vue') },
//         // { path: 'products', component: () => import('../pages/AdminProducts.vue') },
//         // { path: 'purchases', component: () => import('../pages/AdminPurchases.vue') },
//         // { path: 'invoices', component: () => import('../pages/AdminInvoices.vue') },
//         // { path: 'reports', component: () => import('../pages/AdminReports.vue') },
//         ]
//     },
//     {
//         path: '/cashier-dashboard',
//         component: CashierDashboard,
//         children: [
//         { path: '', component: () => import('../pages/CashierDashboard.vue') },
//         // { path: 'products', component: () => import('../pages/CashierProducts.vue') },
//         // { path: 'purchases', component: () => import('../pages/CashierPurchases.vue') },
//         ]
//     },
//     {
//         path: '/supplier-dashboard',
//         component: SupplierDashboard,
//         children: [
//         { path: '', component: () => import('../pages/SupplierDashboard.vue') },
//         // { path: 'products', component: () => import('../pages/SupplierProducts.vue') },
//         // { path: 'orders', component: () => import('../pages/SupplierOrders.vue') },
//         ]
//     }
//     ]
//     });

// // import { createRouter, createWebHistory } from 'vue-router';
// // import DashboardView from '../views/DashboardView.vue';
// // import UsersView from '../views/UserManagementView.vue';
// // import ProductView from '../views/ProductDashboardView.vue';
// // import SalesView from '../views/SalesOverviewView.vue';
// // import InvoicesView from '../views/InvoiceListView.vue';
// // import ReportsView from '../views/SalesReportsView.vue';
// // import PurchasesView from  '../views/PurchasesView.vue';

// // const routes = [
// //     { path: '/', name: 'Dashboard', views: DashboardView },
// //     { path: '/users', name: 'Users', views: UsersView },
// //     { path: '/products', name: 'Products', views: ProductView },
// //     { path: '/sales', name: 'Sales', views: SalesView },
// //     { path: '/invoices', name: 'Invoices', views: InvoicesView },
// //     { path: '/reports', name: 'Reports', views: ReportsView },
// //     { path: '/purchases', name: 'Purchases', views: PurchasesView },
// // ];

// // const router = createRouter({
// //     history: createWebHistory(process.env.BASE_URL),
// //     routes,
// // });

// // export default router;
