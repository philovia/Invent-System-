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
// import AdminDashboard from '@/views/AdminDashboard.vue';
// import SupplierDashboard from '@/views/SupplierDashboard.vue';
// Import the CashierPage component

const routes = [

            { path: '/', component: HomePage },
            {

                path: '/admin',
                component: AdminPage,
                children: [
                    // { path: '', component: AdminDashboard },
                    { path: '/top-bar', component: TopBar },
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

            { path: '/cashier', component: CashierPage,
                // children: [
                //     { path: '', component: CashierDashboard }, // Cashier Dashboard
                // ]
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