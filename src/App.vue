<template>
    <div id="app">
        <router-view />
    </div>
    </template>

    <script>
    export default {
    name: 'App',
    };
    </script>

    <style>
    body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: #f5f5f5;
    color: #333;
    }
    </style>









<!-- <template>
    <div id="app">
    <MainSidebar />
    <div class="main-content">
        <router-view></router-view>
    </div>
    </div>
    </template>

    <script>
    import MainSidebar from './components/MainSidebar.vue';

    export default {
    name: 'App',
    components: {
    MainSidebar,
    },
    };
    </script>

    <style>
    #app {
    display: flex;
    }

    .main-content {
    flex: 1;
    padding: 20px;
    }

    @media (max-width: 768px) {
    #app {
    flex-direction: column;
    }

    .main-content {
    padding: 10px;
    }
    }
    </style> -->
