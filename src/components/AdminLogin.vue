<template>
    <div class="login-container">
        <div class="image-container">
            <img src="@/assets/images/image.png" alt="Side Image" class="side-image" />
        </div>
        <div class="login-form">
        <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
        <h6 class="product-slogan">"One Town, One Product"</h6>
        <h5 class="login-title">Login As Admin</h5>
        <input type="text" placeholder="Username" v-model="username" />
        <div class="password-container">
        <input
            :type="passwordFieldType"
            placeholder="User Code"
            v-model="password"
        />
        <i
            :class="passwordFieldIcon"
            @click="togglePasswordVisibility"
            class="password-icon"
        ></i>
        </div>
        <button @click="navigateToAdminPage">Log In</button>
        </div>
    </div>
    </template>

    <script>
    // import TopBar from '@/components/TopBar.vue';

    export default {
    name: 'LoginView',

    data() {
    return {
        password: "",
        passwordFieldType: "password",
        passwordFieldIcon: "fas fa-eye",
    };
    },

    // components: {
    //     TopBar
    // },
    methods: {
        navigateToAdminPage() {
        this.$router.push('/admin');
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
    background-color: #1e1f1c00;
    width: 87%;
    border-radius: 8px;
    }

    .image-container {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    }

    .side-image {
    width: 100%;
    height: 62vh;
    max-width: 420px; /* Adjust as necessary */
    box-shadow: 0 10px 10px rgba(48, 47, 47, 0.329);
    }

    .login-form {
    padding: 35px;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(48, 47, 47, 0.329);
    text-align: center;
    align-items: center;
    background-color: rgba(245, 238, 238, 0.516);
    }

    .logo {
    width: 150px;
    margin-bottom: 5px;
    }

    .h4 {
    margin-top: 2px;
    }

    .product-slogan {
    color: #0e0b0b; /* Change to your desired color */
    }

    .login-title {
    color: #000000; /* Change to your desired color */
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
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    cursor: pointer;
    color: rgb(202, 64, 4)
    }

    button {
    width: 100%;
    padding: 10px;
    background-color: #f25212;
    border: none;
    color: #ffffff;
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