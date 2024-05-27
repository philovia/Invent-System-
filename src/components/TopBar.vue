<template>
    <header class="topbar">
        <div class="topbar-left">
        <h1>Welcome to Admin Dashboard</h1>
        </div>
        <div class="topbar-right">
        <i class="fas fa-bell"></i>
        <i class="fas fa-cog"></i>
        <i class="fas fa-user-circle"></i>
        </div>
    </header>
    </template>

    <style scoped>
    .topbar {
    height: 60px;
    background-color: #34495e;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
    color: #ecf0f1;
    position: fixed;
    top: 0;
    left: 250px;
    right: 0;
    z-index: 1000;
    }

    .topbar-left h1 {
    margin: 0;
    font-size: 24px;
    }

    .topbar-right i {
    margin-left: 20px;
    cursor: pointer;
    }
    </style>
