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
            placeholder="Admin Code"
            v-model="adminCode"
        />
        <i
            :class="passwordFieldIcon"
            @click="togglePasswordVisibility"
            class="password-icon"
        ></i>
        </div>
        <button @click="navigateToAdminPage">Log In</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        </div>
    </div>
    </template>

    <script>
    // import TopBar from '@/components/TopBar.vue';
    import axios from 'axios';

    export default {
    name: 'LoginView',
    data() {
    return {
        username: '',
        adminCode: '',
        passwordFieldType: 'password',
        passwordFieldIcon: 'fas fa-eye',
        errorMessage: ''
    };
    },

    // components: {
    //     TopBar
    // },
    methods: {

        async login() {
        try {
        const response = await axios.post('http://localhost:5000/admin/login', {
            username: this.username,
            password: this.adminCode,
        });
        const { token } = response.data;
        localStorage.setItem('token', token);
        this.$router.push('/admin');// Redirect to admin page on successful login
            } catch (err) {
        this.errorMessage = 'Invalid username or admin code';
        }
    },
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
/* Basic styles */
.login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: transparent;
    width: 100%;
    border-radius: 8px;
    position: relative;
    z-index: 1;
    padding: 20px; /* Add padding to prevent content from touching edges */
    box-sizing: border-box; /* Ensure padding is included in the width/height calculations */
}

.image-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: -1;
    display: flex;
    justify-content: center;
    align-items: center;
}

.side-image {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    object-fit: cover;
}

.login-form {
    padding: 35px;
    border-radius: 20px;
    box-shadow: 0 2px 10px rgba(48, 47, 47, 0.329);
    text-align: center;
    align-items: center;
    background-color: rgba(245, 238, 238, 0.516);
    z-index: 2;
    position: relative;
    max-width: 400px;
    width: 100%;
}

/* Adjustments for smaller screens */
@media (max-width: 768px) {
    .login-container {
        flex-direction: column;
        height: auto;
        padding: 10px;
    }

    .login-form {
        width: 100%;
        padding: 20px;
    }
}

@media (max-width: 480px) {
    .login-container {
        padding: 5px;
    }

    .login-form {
        padding: 15px;
    }

    input {
        padding: 8px;
        margin: 8px 0;
    }

    button {
        padding: 8px;
    }

    .logo {
        width: 120px;
    }
}

/* Other existing styles */
.logo {
    width: 150px;
    margin-bottom: 5px;
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
    border: 1px solid #ffffff;
}

input::placeholder {
    color: #fff; /* Placeholder text color white */
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
    color: rgb(78, 29, 8);
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
