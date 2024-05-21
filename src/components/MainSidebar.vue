<template>
    <div class="sidebar">
        <div class="logo">Logo</div>
        <nav>
            <ul>
                <li><router-link to="/dashboard">Dashboard</router-link></li>
                <li><router-link to="/users">Users</router-link></li>
                <li><router-link to="/product">Product</router-link></li>
                <li><router-link to="/sales">Sales</router-link></li>
                <li><router-link to="/invoices">Invoices</router-link></li>
                <li><router-link to="/reports">Reports</router-link></li>
            </ul>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'MainSedibar'
};
</script>

<style scoped>
.sidebar {
    width: 200px;
    background-color: #2c3e50;
    padding: 20px;
    display: flex;
    flex-direction: column;
    color: white;
}

.logo {
    text-align: center;
    margin-bottom: 20px;
    font-size: 1.5em;
    font-weight: bold;
}

nav ul {
    list-style: none;
    padding: 0;
}

nav ul li {
    margin: 10px 0;
}

nav ul li a {
    color: white;
    text-decoration: none;
    display: block;
    padding: 10px;
    border-radius: 5px;
    transition: background-color 0.3s;
}

nav ul li a:hover,
nav ul li a.router-link-active {
    background-color: #1abc9c;
}
</style>