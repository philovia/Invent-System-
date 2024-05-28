<template>
    <nav class="sidebar">
        <div class="logo-container">
        <img src="@/assets/images/logo.png" alt="Logo" class="logo" />

        </div>
        <ul>
        <li class="nav-item">
            <router-link to="/dashboard" class="nav-link">
            <i class="fas fa-tachometer-alt"></i>
            <span>Dashboard</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/users" class="nav-link">
            <i class="fas fa-users"></i>
            <span>Users</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/products" class="nav-link">
            <i class="fas fa-box-open"></i>
            <span>Products</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/sales" class="nav-link">
            <i class="fas fa-chart-line"></i>
            <span>Sales</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/invoices" class="nav-link">
            <i class="fas fa-file-invoice"></i>
            <span>Invoices</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/reports" class="nav-link">
            <i class="fas fa-chart-bar"></i>
            <span>Reports</span>
            </router-link>
        </li>
        <li class="nav-item">
            <router-link to="/purchases" class="nav-link">
            <i class="fas fa-shopping-cart"></i>
            <span>Purchases</span>
            </router-link>
        </li>
        </ul>
    </nav>
    </template>

    <style scoped>
    .sidebar {
    width: 160px;
    height: 100vh;
    background-color: #496a8b;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
    color: #ecf0f1;
    }

    .logo-container {
    text-align: center;
    }

    .logo {
    width: 120px;
    margin-bottom: 10px;
    }

    ul {
    list-style: none;
    padding: 0;
    width: 100%;
    }

    li {
    width: 100%;
    }

    a {
    color: #ecf0f1;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 10px 0px   ;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    width: 100%;
    }

    a:hover {
    background-color: #34495e;
    }

    i {
    margin-right: 5px;
    color: #ec6036;
    size: 0dvh;
    }
    </style>







<!-- <template>
    <div class="sidebar">
    <div class="logo-container">
        <img src="@/assets/images/logo.png" alt="Logo" class="sidebar-logo"/>
    </div>
    <nav>
        <ul>
        <li>
            <router-link to="/">
                <i class="fas fa-home"></i>
                <span>Dashboard</span>
            </router-link>
        </li>
        <li>
            <router-link to="/users">
                <i class="fas fa-users"></i>
                <span>Users</span>
            </router-link>
        </li>
        <li>
            <router-link to="/products">
                <i class="fas fa-box"></i>
                <span>Products</span>
            </router-link>
        </li>
        <li>
            <router-link to="/sales">
                <i class="fas fa-chart-line"></i>
                <span>Sales</span>
            </router-link>
        </li>
        <li>
            <router-link to="/invoices">
                <i class="fas fa-file-invoice-dollar"></i>
                <span>Invoices</span>
            </router-link>
        </li>
        <li><router-link to="/reports">
            <i class="fas fa-chart-pie"></i>
            <span>Reports</span>
        </router-link>
        </li>
        <li><router-link to="/purchases">
            <i class="fas fa-shopping-cart"></i>
            <span>Purchases</span>
        </router-link>
        </li>
        </ul>
    </nav>
    </div>
    </template>

    <script>
    export default {
    name: 'MainSidebar',
    };
    </script>

    <style scoped>
    .sidebar {
    width: 180px;
    background-color: #476d94;
    padding: 20px;
    color: white;
    height: 100vh;
    box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    position: fixed;
    }

    .logo-container {
    text-align: center;
    margin-bottom: 20px;
    }

    .sidebar-logo {
    width: 90%;
    height: auto;
}

    .sidebar li {
    margin: 20px 0;
    }

    .sidebar a {
    color: rgb(255, 255, 255);
    text-decoration: none;
    }

    .sidebar a:hover {
    text-decoration:dashed;
    }

    @media (max-width: 768px) {
    .sidebar {
    width: 100%;
    height: auto;
    position: relative;
    }
    }
    </style> -->
