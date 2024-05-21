<template>
    <div class="sidebar">
        <router-link to="/dashboard">Dashboard</router-link>
        <router-link to="/users">Users</router-link>
        <router-link to="/product">Product</router-link>
        <router-link to="/sales">Sales</router-link>
        <router-link to="/invoices">Invoices</router-link>
        <router-link to="/reports">Reports</router-link>
    </div>
</template>

<script>
export default {
    name: 'Sedibar'
};
</script>

<style>
.sidebar {
    width: 200px;
    background-color: #2c3e50;
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: white;
}

.sidebar a {
    color: white;
    text-decoration: none;
    margin: 10px 0;
}

.sidebar a.router-link-active{
    font-weight: bold;
}
</style>