<template>
    <div>
    <div class="topbar">
        <h3>Dolores OTOP.PH</h3>
        <h2>Inventory System</h2>
        <div class="nav-container">
        <nav>
        <router-link to="/" @click="selectCategory('home')" class="nav-link">Home</router-link>
        <a href="#"  @click="selectCategory('about')" class="nav-link">About Us</a>
        <div class="dropdown">
            <a href="#" @click="toggleDropdown" class="nav-link dropdown-toggle">
            Login As
            </a> <div v-if="dropdownVisible" class="dropdown-menu">
            <a href="#" @click="selectCategory('admin')" class="dropdown-item">Login as Admin</a>
            <a href="#" @click="selectCategory('cashier')" class="dropdown-item">Login as Cashier</a>
            <a href="#" @click="selectCategory('supplier-register')" class="dropdown-item">Register as Supplier</a>
            <a href="#" @click="selectCategory('supplier-login')" class="dropdown-item">Login as Supplier</a>
            </div>
        </div>
        </nav>
    </div>
    </div>
    <div class="background-image"></div>
    <div class="container" v-if="selectedCategory === 'home'">
        <div class="content">
        <h1>Welcome to the Inventory System</h1>
        <p>Your one-stop solution for managing inventory efficiently.</p>
        </div>
    </div>
    <div class="container" v-if="selectedCategory === 'about'">
        <div class="content">
        <h1>About Us</h1>
        <p>Information about the Inventory System.</p>
        </div>
    </div>
    <AdminLogin v-if="selectedCategory === 'admin'" />
    <CashierLogin v-if="selectedCategory === 'cashier'" />
    <SupplierRegister v-if="selectedCategory === 'supplier-register'" />
    <SupplierLogin v-if="selectedCategory === 'supplier-login'" />
</div>
    <!-- Add similar container sections for other categories -->
    </template>

    <script>

    import AdminLogin from '@/components/AdminLogin.vue';
    import CashierLogin from '@/components/CashierLogin.vue';
    import SupplierLogin from '@/components/SupplierLogin.vue';
    import SupplierRegister from '@/components/SupplierRegister.vue';

    export default {
    data() {
    return {
        selectedCategory: 'home',
        dropdownVisible: false,
    };
    },

    components:  {
    AdminLogin,
    CashierLogin,
    SupplierLogin,
    SupplierRegister
    },

    methods: {
    selectCategory(category) {
        this.selectedCategory = category;
        this.dropdownVisible = false; // Hide the dropdown after selection
    },
    toggleDropdown(event) {
    event.preventDefault();
    this.dropdownVisible = !this.dropdownVisible;
    },

    login() {
      // Assuming login is successful
    this.$store.dispatch('login'); // Dispatch login action
    this.$router.push('/admin');
    this.$router.push('/cashier');
    this.$router.push('/supplier');
      // Redirect to the Admin Page
    },
    },
};
    </script>

<style scoped>
/* General Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

/* Topbar Styles */
.topbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  text-align: center;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.topbar h2 {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  margin: 0;
  font-size: 2rem; /* Adjusted for better responsiveness */
}

.topbar h3 {
  margin: 0;
  font-size: 1.5rem; /* Adjusted for better responsiveness */
}

.nav-container {
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

nav {
  display: flex;
  align-items: center;
}

.nav-link {
  margin: 20px 40px;
  color: white;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
  display: flex;
  align-items: center;
}

.nav-link:hover {
  color: #ffc107; /* Change the color on hover */
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-toggle::after {
  display: flex;
  align-items: center;
}

.dropdown-menu {
  display: block;
  position: absolute;
  top: 100%;
  left: 0;
  background-color: rgba(56, 54, 54, 0.53);
  color: white;
  min-width: 160px;
  z-index: 20;
  border-radius: 4px;
  box-shadow: 0 8px 16px rgba(83, 81, 81, 0.2);
}

.dropdown-item {
  padding: 12px 16px;
  text-decoration: none;
  display: block;
  color: white;
  cursor: pointer;
}

.dropdown-item:hover {
  background-color: rgba(227, 211, 211, 0.425);
}

.background-image {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('@/assets/images/side-image.png') no-repeat center center;
  background-size: cover; /* Ensure the background image covers the entire container */
  z-index: -1; /* Place the background behind other content */
}

/* Container Styles */
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 600px;
  background-color: rgba(245, 238, 238, 0.516);
  border-radius: 8px;
  margin: 150px auto;
  box-shadow: 0 2px 10px rgba(228, 165, 93, 0.432);
  padding: 50px;
}

.content {
  text-align: center;
  word-wrap: break-word;
}

/* Media queries for responsive design */
@media screen and (max-width: 768px) {
  .topbar {
    flex-direction: column;
    align-items: center;
    padding: 10px;
  }

  .topbar h2 {
    font-size: 1.5rem;
    position: static;
    transform: none;
    margin-bottom: 10px;
  }

  .topbar h3 {
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  .nav-container {
    justify-content: center;
  }

  .nav-link {
    margin: 10px 20px;
  }

  .container {
    width: 90%; /* Set width to 90% for smaller screens */
  }
}

@media screen and (max-width: 480px) {
  .topbar h2 {
    font-size: 1.2rem;
  }

  .topbar h3 {
    font-size: 1rem;
  }

  .container {
    width: 95%; /* Set width to 95% for even smaller screens */
  }
}
</style>