<template>
    <div class="dashboard">
        <h1>WELCOME TO ADMIN DASHBOARD</h1>
        <input type="text" placeholder="Search" class="search-input">
    <div class="cards">
    <router-link to="/dashboard/sales-acticity" class="card">
        <i class="fas fa-chart-line"></i>
        <p>Sales Activity</p>
        </router-link>
    <router-link to="/dashboard/sales-order" class="card">
        <i class="fas fa-file-invoice"></i>
        <p>Sales Order</p>
    </router-link>
    <router-link to="/dashboard/purchase-order-status" class="card">
        <i class="fas fa-shopping-cart"></i>
        <p>Purchase Order Status</p>
    </router-link>
    <router-link to="/dashboard/top-selling-item" class="card">
        <i class="fas fa-star"></i>
        <p>Top Selling Item</p>
    </router-link>
    <router-link to="/dashboard/inventory-summary" class="card">
        <i class="fas fa-warehouse"></i>
        <p>Inventory Summary</p>
    </router-link>
    <router-link to="/dashboard/product-details" class="card">
        <i class="fas fa-box"></i>
        <p>Product Details</p>
    </router-link>
    </div>
</div>
</template>

<script>
export default {
    name: 'UserDashboard'
};
</script>

<style scoped>
.dashboard {
    text-align: center;
    padding: 20px;
}

h1 {
    margin-bottom: 20px;
}

.search-input {
    padding: 10px;
    width: 200px;
    margin-bottom: 20px;
}

.cards {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
    justify-items: center;
}

.card {
    background-color: #ecf0f1;
    border: 2px solid #e74c3c;
    border-radius: 10px;
    padding: 20px;
    text-align: center;
    width: 200px;
    text-decoration: none;
    color: #2c3e50;
    transition: background-color 0.3s;
}

.card:hover {
    background-color: #bdc3c7;
}

.card i {
    font-size: 50px;
    margin-bottom: 10px;
}
</style>