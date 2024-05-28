<template>
    <div class="dashboard-container">
        <MainSidebar />
        <TopBar />
        <div class="content">
            <h1 class="center">Welcome to Admin Dashboard</h1>
        <div class="card-container">
            <div class="card" v-for="card in cards" :key="card.title">
            <i :class="card.icon"></i>
            <p>{{ card.title }}</p>
            </div>
        </div>
        </div>
    </div>
    </template>

    <script>
    import MainSidebar from '@/components/MainSidebar.vue';
    import TopBar from '@/components/TopBar.vue';

    export default {
    name: 'DashboardView',
    components: {
        MainSidebar,
        TopBar,
    },
    data() {
        return {
        cards: [
            { title: 'Sales Activity', icon: 'fas fa-chart-line' },
            { title: 'Sales Order', icon: 'fas fa-shopping-cart' },
            { title: 'Purchase Order Status', icon: 'fas fa-truck' },
            { title: 'Top Selling Item', icon: 'fas fa-star' },
            { title: 'Inventory Summary', icon: 'fas fa-boxes' },
            { title: 'Product Details', icon: 'fas fa-info-circle' },
        ],
        };
    },
    };
    </script>

    <style scoped>
    .dashboard-container {
    display: flex;
    }

    .content {
    margin-left: 160px;
    padding: 80px 20px 55px 20px;
    flex-grow: 1;
    background-color: #ecf0f1;
    min-height: 80vh;
    }

    .card-container {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    }

    .card {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    flex-basis: calc(33.333% - 40px);
    }

    .card i {
    font-size: 40px;
    margin-bottom: 10px;
    color: #2c3e50;
    }

    .card p {
    margin: 0;
    font-size: 18px;
    color: #2c3e50;
    }
    </style>
