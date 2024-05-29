<template>
    <div class="login-container">
        <div class="image-container">
            <img src="@/assets/images/side-image.png" alt="Side Image" class="side-image" />
        </div>
        <div class="login-form">
        <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
        <h5>"One Town, One Product"</h5>
        <h2>LOGIN</h2>
        <input type="email" placeholder="Email Address" />
        <div class="password-container">
        <input
            :type="passwordFieldType"
            placeholder="Password"
            v-model="password"
        />
        <i
            :class="passwordFieldIcon"
            @click="togglePasswordVisibility"
            class="password-icon"
        ></i>
        </div>
        <button @click="login">Log In</button>
        <router-link to="/register">Sign Up</router-link>
        </div>
    </div>
    </template>

    <script>
    export default {
    name: 'LoginView',

    data() {
    return {
        password: "",
        passwordFieldType: "password",
        passwordFieldIcon: "fas fa-eye",
    };
    },
    methods: {
        login() {
        this.$store.dispatch('login');
        this.$router.push('/dashboard');
        },

        togglePasswordVisibility() {
        if (this.passwordFieldType === "password") {
        this.passwordFieldType = "text";
        this.passwordFieldIcon = "fas fa-eye";
        } else {
        this.passwordFieldType = "password";
        this.passwordFieldIcon = "fas fa-eye-slash";
        }
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
    width: 87%;
    }

    .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .side-image {
    width: 98%;
    height: 70vh;
    max-width: 400px; /* Adjust as necessary */
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .login-form {
    background: #fff;
    padding: 40px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    }

    .logo {
    width: 150px;
    margin-bottom: 5px;
    }

    .h4 {
    margin-top: 2px;
    }

    input {
    display: block;
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 4px;
    border: 1px solid #ccc;
    }

    .password-container {
    position: relative;
    width: 100%;
    }



    .password-icon {
    position: absolute;
    right: 1px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: rgb(202, 64, 4)
    }

    button {
    width: 111%;
    padding: 10px;
    background-color: #f25212;
    border: none;
    color: #ccc;
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
