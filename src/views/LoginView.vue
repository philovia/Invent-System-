<template>
    <div class="login-container">
        <div class="login-form">
        <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
        <h2>LOGIN</h2>
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button @click="login">Log In</button>
        <router-link to="/register">Sign Up</router-link>
        </div>
    </div>
    </template>

    <script>
    export default {
    name: 'LoginView',
    methods: {
        login() {
        this.$store.dispatch('login');
        this.$router.push('/dashboard');
        },
    },
    };
    </script>

    <style scoped>
    .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #eef2f7;
    }

    .login-form {
    background: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    }

    .logo {
    width: 80px;
    margin-bottom: 20px;
    }

    input {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    border: 1px solid #ccc;
    }

    button {
    width: 100%;
    padding: 10px;
    background-color: #1abc9c;
    border: none;
    color: #fff;
    border-radius: 4px;
    cursor: pointer;
    }

    router-link {
    display: block;
    margin-top: 10px;
    color: #1abc9c;
    text-decoration: none;
    }
    </style>
