<template>
  <div class="container">
    <!-- Layout Wrapper -->
    <div class="layout-wrapper">
      <!-- TopBar -->
      <header class="topbar" :class="{ 'drawer-open': isDrawerOpen }">
        <!-- Drawer Toggle Button -->
        <button @click="toggleDrawer" class="drawer-toggle">
          <i class="fas fa-bars"></i>
        </button>
        
        <div class="topbar-left">
          <h2 class="title">Inventory System</h2>
        </div>
        <div class="topbar-right">
          <div class="search-container">
            <i class="fas fa-search search-icon" @click="focusSearchInput"></i>
            <input type="text" class="search-input" placeholder="Search" ref="searchInput">
          </div>
          <a href="#" @click="selectCategory('notification')" class="nav-link">
            <i class="fas fa-bell"></i>
          </a>
          <a href="#" @click="selectCategory('notification')" class="nav-link">
            <i class="fas fa-user-circle"></i>
          </a>
        </div>
      </header>

      <!-- Drawer Sidebar -->
      <nav class="sidebar" :class="{ 'is-open': isDrawerOpen }">
        <div class="logo-container">
          <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
        </div>
        <ul>
          <li class="nav-item">
            <router-link to="/my-products" class="nav-link" @click="selectCategory('my-products')">
              <i class="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/edit-products/:id" class="nav-link" @click="selectCategory('edit-products/:id')">
              <i class="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/my-orders" class="nav-link" @click="selectCategory('my-orders')">
              <i class="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/confirmation/:id" class="nav-link" @click="selectCategory('confirmation/:id')">
              <i class="fas fa-users"></i>
              <span>Users</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/transactions" class="nav-link" @click="selectCategory('transactions')">
              <i class="fas fa-box-open"></i>
              <span>Products</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/my-on-sales" class="nav-link" @click="selectCategory('my-on-sales')">
              <i class="fas fa-chart-line"></i>
              <span>Sales</span>
            </router-link>
          </li>
        </ul>
      </nav>

      <!-- Main Content -->
      <main class="main-content" :class="{ 'drawer-open': isDrawerOpen }">
        <div class="v-content">
          <div class="v-content__wrap">
            <section :id="currentCategory" class="container-fluid">
              <div class="row" v-if="currentCategory">
                <component :is="currentCategoryComponent"></component>
              </div>
              <!-- Insert the update user form here -->
              <!-- <div class="update-form-container">
                <h1>Welcome to Admin Dashboard</h1>
                <div class="update-form">
                  <h5>Update Username and Code</h5>
                  <input type="text" placeholder="New Username" v-model="username" />
                  <input type="password" placeholder="New Password" v-model="password" />
                  <button @click="updateUser">Update</button>
                  <p v-if="successMessage" class="success-message">{{ successMessage }}</p>
                  <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
                </div>
              </div> -->
            </section>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
// import axios from 'axios';

// import SupplierMyProducts from '@/components/supplier/SupplierMyProducts.vue';
// import SupplierEditProducts from '@/components/supplier/SupplierEditProducts.vue';
// import SupplierMyOrders from '@/components/supplier/SupplierMyOrders.vue';
// import SupplierConfirmation from '@/components/supplier/SupplierConfirmation.vue';
// import SupplierTransactions from '@/components/supplier/SupplierTransactions.vue';
// import SupplierMyOnSales from '@/components/supplier/SupplierMyOnSales.vue';

export default {
  name: 'SidebarTopBar',
  data() {
    return {
      isDrawerOpen: false,
      currentCategory: null, // To store the currently selected category
      username: '',
      password: '',
      successMessage: '',
      errorMessage: ''
    };
  },

  // components: {
  //   SupplierMyProducts,
  //   SupplierEditProducts,
  //   SupplierMyOrders,
  //   SupplierConfirmation,
  //   SupplierTransactions,
  //   SupplierMyOnSales,
  // },


  computed: {
    currentCategoryComponent() {
      if (!this.currentCategory) return null;
      return this.currentCategory.charAt(0).toUpperCase() + this.currentCategory.slice(1);
    },
  },
  methods: {
    focusSearchInput() {
      this.$refs.searchInput.focus();
    },
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    closeDrawer() {
      if (window.innerWidth <= 768) {
        this.isDrawerOpen = false;
      }
    },
    selectCategory(category) {
      this.currentCategory = category;
    },
    // async updateUser() {
    //   try {
    //     const token = localStorage.getItem('token');
    //     const response = await axios.put(
    //       'https://example.com/api/updateUser', // Replace with your actual URL and endpoint
    //       {
    //         username: this.username,
    //         password: this.password,
    //       },
    //       {
    //         headers: {
    //           Authorization: `Bearer ${token}`,
    //         },
    //       }
    //     );
    //     this.successMessage = 'User updated successfully';
    //     this.errorMessage = '';
    //   } catch (err) {
    //     this.errorMessage = 'Error updating user';
    //     this.successMessage = '';
    //   }
    // },
  }
};
</script>

<style scoped>
.container {
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  display: flex;
  overflow: auto; /* Enable scrolling */
  scrollbar-width: none; /* Hide scrollbar in Firefox */
}
/* Hide scrollbar for WebKit-based browsers (Chrome, Safari) */
.container::-webkit-scrollbar {
  width: 0;
  height: 0;
}

/* Show scrollbar on scroll for WebKit-based browsers (Chrome, Safari) */
.container:hover::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.drawer-toggle {
  background: none;
  border: none;
  color: #ecf0f1;
  font-size: 24px;
  cursor: pointer;
  z-index: 1100;
}

.topbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 90px;
  background-color: #496a8b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #ecf0f1;
  z-index: 1000;
  transition: margin-left 0.3s ease;
}

.topbar.drawer-open {
  margin-left: 160px; /* Adjust for sidebar width */
}

.topbar-left {
  display: flex;
  align-items: center;
}

.title {
  margin: 0;
  font-size: 24px;
  text-align: start;
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
  padding: 5px 10px 5px 30px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}

.search-icon {
  position: absolute;
  left: 190px;
  top: 50%;
  transform: translateY(-50%);
  color: #3f3838;
}

.topbar-right i {
  margin-left: 20px;
  cursor: pointer;
}
.sidebar {
  width: 160px; /* Default sidebar width */
  height: 100%;
  background-color: #496a8b;
  position: fixed;
  top: 0;
  left: -160px; /* Hidden by default */
  transition: left 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  color: #ecf0f1;
  z-index: 999;
  overflow-y: auto; /* Enable scrolling if content exceeds sidebar height */
  scrollbar-width: none; /* Hide scrollbar in Firefox */
}

/* Hide scrollbar for WebKit-based browsers (Chrome, Safari) */
.sidebar::-webkit-scrollbar {
  width: 0;
  height: 0;
}

/* Show scrollbar on scroll for WebKit-based browsers (Chrome, Safari) */
.sidebar:hover::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.sidebar.is-open {
  left: 0;
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

.nav-item {
  width: 100%;
}

.nav-link {
  color: #ecf0f1;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px 0px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
}

.nav-link:hover {
  background-color: #34495e;
}

i {
  margin-right: 5px;
  color: #ec6036;
}

.main-content {
  margin-top: 90px; /* Height of the topbar */
  margin-left: 0;
  padding: 20px;
  width: calc(100% - 250px); /* Adjust based on sidebar width */
  transition: margin-left 0.3s ease, width 0.3s ease;
  display: flex;
  justify-content: center; /* Center content horizontally */
}

/* Hide scrollbar for WebKit-based browsers (Chrome, Safari) */
.main-content::-webkit-scrollbar {
  width: 0;
  height: 0;
}

/* Show scrollbar on scroll for WebKit-based browsers (Chrome, Safari) */
.main-content:hover::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

.main-content.drawer-open {
  margin-left: 160px; /* Adjust for sidebar width */
  margin-left: 0;
  transition: margin-left 0.3s ease;
  height: 100%; /* Fill entire height */
  width: 100%; /* Fill entire width */
  overflow-y: auto; /* Enable scrolling if content overflows */
}

.v-content {
  display: flex;
  padding: 75px 0px 0px 260px; /* Adjust for sidebar width + margin */
  /* transition: padding-left 0.3s ease; */
  max-width: 100%;
  transition: .2s cubic-bezier(.4,0,.2,1);
  flex: 1 0 auto;
}

.main-content.drawer-open {
  margin-left: 160px; /* Adjust for sidebar width */
  width: calc(100% - 160px); /* Adjust based on sidebar width */
}

.v-content.drawer-open {
  padding-left: 420px; /* Adjust for expanded sidebar width + margin */
}

.v-content__wrap {
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-grow: 1; /* Ensure content takes full width */
}
/* .v-content__wrap {
  -webkit-box-flex: 1;
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    max-width: 100%;
    position: relative;
} */

.v-content__wrap .container--fluid {
    padding-left: 30px;
    padding-right: 30px;
}

.container-fluid {
  max-width: 100%;
}

/* Responsive Tables */
table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #dee2e6;
}

.card {
  flex: 1; /* Allow cards to grow and shrink as needed */
  max-width: 300px; /* Limit the maximum width of a card */
  margin: 10px; /* Add margin between cards */
  padding: 20px;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: scale(1.05); /* Slightly enlarge the card on hover */
}

@media (min-width: 960px) {
    .container {
        max-width: 900px;
    }
}

.row {
  display: flex;
  justify-content: center; /* Center the row contents */
}

/* Responsive table */
table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }
  th, td {
    white-space: nowrap;
  }

.update-form-container {
  margin-top: 20px;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.update-form h5 {
  margin-bottom: 15px;
  font-size: 20px;
  color: #333;
}

.update-form input {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.update-form button {
  padding: 10px 20px;
  background: #496a8b;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.update-form .success-message {
  color: green;
  margin-top: 10px;
}

.update-form .error-message {
  color: red;
  margin-top: 10px;
}
</style>