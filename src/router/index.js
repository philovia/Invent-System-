import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/pages/HomePage.vue';
import AdminPage from '@/pages/AdminPage.vue';
import CashierPage from '@/pages/CashierPage.vue';
import SupplierPage from '@/pages/SupplierPage.vue';
import SupplierLogin from '@/components/SupplierLogin.vue';
import SupplierRegister from '@/components/SupplierRegister.vue';
import TopBar from '@/components/TopBar.vue';
// import AdminUserView from '@/views/AdminUserView.vue';
import AdminLogin from '@/components/AdminLogin.vue';
// import CashierDashboard from '@/views/CashierDashboard.vue';
import DashBoard from '@/components/DashBoard.vue';
import ProductsView from '@/components/ProductsView.vue';
import UsersView from '@/components/UsersView.vue';
import SalesView from '@/components/SalesView.vue';
import InvoicesView from '@/components/InvoicesView.vue';
import ReportsView from '@/components/ReportsView.vue';
import PurchasesView from '@/components/PurchasesView.vue';
import OrdersView from '@/components/OrdersView.vue';
import CashierProducts from '@/components/CashierProducts.vue';
import UpdatesView from '@/components/UpdatesView.vue';
// import AddProducts from '@/components/AddProducts.vue';
// Import the CashierPage component

const routes = [

            { path: '/', component: HomePage },
            {

                path: '/admin',
                component: AdminPage,
                children: [
                    // { path: '', component: AdminDashboard },
                    { path: '/top-bar', component: TopBar },
                    { path: '/dash-board', component: DashBoard },
                    { path: '/products-view', component: ProductsView },
                    { path: '/users-view', component: UsersView },
                    { path: '/sales-view', component: SalesView },
                    { path: '/invoices-view', component: InvoicesView },
                    { path: '/purchases-view', component: PurchasesView },
                    { path: '/reports-view', component: ReportsView },
                    // { path: '/add-products', component: AddProducts },
                    {
                        path: '/user-view', component: AdminLogin,
                    beforeEnter: (to, from, next) => {
                        const token = localStorage.getItem('token');
                        if (!token) {
                            next('/');
                        } else {
                            next();
                        }
                        },
                },
                ]
                },

            { path: '/cashier',
                component: CashierPage,
                children: [
                    { path: '/orders-view', component: OrdersView },
                    { path: '/cashier-products', component: CashierProducts },
                    { path: '/updates-view', component: UpdatesView },
                ]
                },
            {
                path: '/supplier',
                component: SupplierPage,
                children: [
                    // { path: '', component: SupplierDashboard }, // Supplier Dashboard
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