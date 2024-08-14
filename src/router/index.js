import { createRouter, createWebHistory } from 'vue-router';

// Import views and components for routing pages
import LoginRegister from '@/views/LoginRegister.vue';
import AdminPage from '@/views/AdminPage.vue';
import CashierPage from '@/views/CashierPage.vue';
import SupplierPage from '@/views/SupplierPage.vue';

// Admin Views
// import AdminSales from '@/components/admin/AdminSales.vue';
// import AdminPurchases from '@/components/admin/AdminPurchases.vue';
import AllSupplies from '@/components/admin/AllSupplies.vue';
// import AdminOrders from '@/components/admin/AdminOrders.vue';

// Cashier Views
// import CashierAllSupplies from '@/components/cashier/CashierAllSupplies.vue';
// import CashierOrders from '@/components/cashier/CashierOrders.vue';
// import CashierSales from '@/components/cashier/CashierSales.vue';
// import CashierPurchases from '@/components/cashier/CashierPurchases.vue';
// import CashierUpdateOrders from '@/components/cashier/CashierUpdateOrders.vue';
// import CashierOnSales from '@/components/ashier/cashierOnSales.vue';

// Supplier Views
// import SupplierMyProducts from '@/components/supplier/SupplierMyProducts.vue';
// import SupplierEditProducts from '@/components/supplier/SupplierEditProducts.vue';
// import SupplierMyOrders from '@/components/supplier/SupplierMyOrders.vue';
// import SupplierConfirmation from '@/components/supplier/SupplierConfirmation.vue';
// import SupplierTransactions from '@/components/supplier/SupplierTransactions.vue';
// import SupplierMyOnSales from '@/components/supplier/SupplierMyOnSales.vue';



const routes = [

            { path: '/',
            component: LoginRegister }, // Main login/register page

            {

                path: '/admin',
                component: AdminPage,
                children: [
                    // { path: '/admin-sales', component: AdminSales },
                //     { path: '/purchases', component: AdminPurchases },
                    { path: '/all-supplies', component: AllSupplies },
                //     { path: '/orders', component: AdminOrders },
                  ],
                },

            { path: '/cashier',
                component: CashierPage,
                // children: [
                //     { path: '/all-supplies', component: CashierAllSupplies },
                //     { path: '/orders', component: CashierOrders },
                //     { path: '/sales', component: CashierSales },
                //     { path: '/purchases', component: CashierPurchases },
                //     { path: '/update-orders', component: CashierUpdateOrders },
                //     { path: '/on-sales', component: CashierOnSales },
                //   ],
                },
            {
                path: '/supplier',
                component: SupplierPage,
                // children: [
                //     { path: '/my-products', component: SupplierMyProducts },
                //     { path: '/edit-products/:id', component: SupplierEditProducts, props: true },
                //     { path: '/my-orders', component: SupplierMyOrders },
                //     { path: '/confirmation/:id', component: SupplierConfirmation, props: true },
                //     { path: '/transactions', component: SupplierTransactions },
                //     { path: '/my-on-sales', component: SupplierMyOnSales },
                //   ],
            },

];

    const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;