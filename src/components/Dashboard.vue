<template>
    <div class="dashboard">
        <h1>Welcome to Admin Dashboard</h1>
    <div class="cards">
    <router-link to="/dashboard/sales-acticity" class="card">Sales Activity</router-link>
    <router-link to="/dashboard/sales-order" class="card"> Sales Order</router-link>
    <router-link to="/dashboard/purchase-order-status" class="card"> Purchase Order Status</router-link>
    <router-link to="/dashboard/top-selling-item" class="card"> Top Selling Item</router-link>
    <router-link to="/dashboard/inventory-summary" class="card"> Inventory Summary</router-link>
    <router-link to="/dashboard/product-details" class="card"> Product Details</router-link>
    </div>
</div>
</template>

<script>
export default {
    name: 'Dashboard'
};
</script>

<style>
.dashboard {
    text-align: center;
}

.cards {
display: flex;
justify-content: space-around;
flex-wrap: wrap;
margin-top: 20px;
}

.card {
    background-color: #ecf0f1;
    border: 1px solid #bdc3c7;
    border-radius: 10px;
    padding: 20px;
    margin: 10px;
    text-align: center;
    width: 200px;
    text-decoration: none;
    color: #2c3e50;
}

.card:hover {
    background-color: #bdc3c7;
}
</style>