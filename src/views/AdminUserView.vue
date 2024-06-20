<template>
    <div class="container">
        <div class="glass-container">
        <h1>Welcome to Admin Dashboard</h1>
        <div class="update-form">
            <h5>Update Username and Code</h5>
            <input type="text" placeholder="New Username" v-model="username" />
            <input type="password" placeholder="New Password" v-model="password" />
            <button @click="updateUser">Update</button>
            <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
            <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
        </div>
    </div>
    </template>

    <script>
    // import axios from 'axios';

    export default {
    name: 'AdminUserView',
    data() {
        return {
        username: '',
        password: '',
        successMessage: '',
        errorMessage: ''
        };
    },
    methods: {
        async updateUser() {
        try {
            this.successMessage = 'User updated successfully';
            this.errorMessage = '';
        } catch (err) {
            this.errorMessage = 'Error updating user';
            this.successMessage = '';
        }
        },
    },
    };
    </script>

    <style scoped>
    .container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    }

    .glass-container {
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    padding: 20px;
    backdrop-filter: blur(10px);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
    }

    </style>