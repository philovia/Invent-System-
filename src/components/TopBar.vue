<template>
    <header class="topbar">
        <div class="topbar-left">
        <h2>Inventory System</h2>
        </div>
        <div class="topbar-right">
            <div class="search-container">
                <i class="fas fa-search search-icon" click="focusSearchInput"></i>
                <input type="text" class="search-input" placeholder="Search" ref="searchInput">
            </div>
        <router-link to="/notifications">
                <i class="fas fa-bell"></i>
            </router-link>
            <router-link to="/settings">
                <i class="fas fa-cog"></i>
            </router-link>
            <router-link to="/profile">
                <i class="fas fa-user-circle"></i>
            </router-link>
        </div>
    </header>
    </template>

<script>
export default {
    name: 'TopBar',
    methods: {
        focusSearchInput() {
            this.$refs.searchInput.focus();
        }
    }
};
</script>

    <style scoped>
    .topbar {
    height: 90px;
    background-color: #496a8b;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: #ecf0f1;
    position: fixed;
    top: 0;
    left: 160px;
    right: 0;
    z-index: 1000;
    }

    .topbar-left h2 {
    margin: 0;
    font-size: 24px;
    }

    .topbar-right {
    display: flex;
    align-items: center;
    }

    .search-container {
    position: relative;
    margin-right: 20px;
    }

    .search-input {
    padding: 5px 10px 5px 30px; /* Adjust padding to make room for the icon */
    border: none;
    border-radius: 4px;
    font-size: 16px;
    }

    .topbar-right .search-input {
    margin-right: 20px;
    padding: 5px 10px;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    }

    .search-icon {
    position: absolute;
    left: 165px;
    top: 50%;
    transform: translateY(-50%);
    color: #3f3838; /* Adjust color as needed */
    }

    .topbar-right i {
    margin-left: 20px;
    cursor: pointer;
    }

    /* Icon specific colors */
    .topbar-right .fa-bell {
    color: #ec6036; /* same color for notifications */
    }

    .topbar-right .fa-cog {
    color: #ec6036; /* same color for settings */
    }

    .topbar-right .fa-user-circle {
    color: #ec6036; /* Same color for profile */
    }

    </style>
