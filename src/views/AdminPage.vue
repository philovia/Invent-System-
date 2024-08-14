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
          <!-- <div class="search-container">
            <i class="fas fa-search search-icon" @click="focusSearchInput"></i>
            <input type="text" class="search-input" placeholder="Search" ref="searchInput">
          </div> -->
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
            <router-link to="/sales" class="nav-link" @click="handleCategoryClick('all-supplies')">
              <i class="fas fa-tachometer-alt"></i>
              <span>Dashboard</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/all-supplies" class="nav-link" @click="handleCategoryClick('all-supplies')">
              <i class="fas fa-users"></i>
              <span>Users</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/all-supplies" class="nav-link" @click="handleCategoryClick('all-supplies')">
              <i class="fas fa-box-open"></i>
              <span>Orders</span>
            </router-link>
          </li>
          <li class="nav-item">
            <router-link to="/admin-sales" class="nav-link" @click="handleCategoryClick('admin-sales')">
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
              <div class="row">
                <AllSuppliess />
              </div>

            </section>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
// import AdminSales from '@/components/admin/AdminSales.vue';
import AllSupplies from '@/components/admin/AllSupplies.vue';
export default {
  name: 'SidebarTopBar',
  components: {
    AllSupplies,
    // AdminSales,
  },
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
      this.isDrawerOpen = false;
    },
    selectCategory(category) {
      this.currentCategory = category;
      this.closeDrawer(); // Close sidebar on selection
    },
    handleCategoryClick(category) {
      this.selectCategory(category);
      if (window.innerWidth <= 768) {
        this.closeDrawer(); // Auto-close sidebar on smaller screens
      }
    },
  },
  mounted() {
    // Close the drawer if the screen width is below 768px on load
    if (window.innerWidth <= 768) {
      this.isDrawerOpen = false;
    }
    
    // Listen to resize events to handle dynamic resizing
    window.addEventListener('resize', () => {
      if (window.innerWidth <= 768) {
        this.isDrawerOpen = false;
      }
    });
  }
};
</script>

<style scoped>
.container {
  width: 100vw;
  overflow: auto;
  scrollbar-width: none;
}

.container::-webkit-scrollbar {
  width: 0;
  height: 0;
}

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
  margin-left: 160px;
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
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #3f3838;
}

.topbar-right i {
  margin-left: 20px;
  cursor: pointer;
}

.sidebar {
  width: 160px;
  height: 100%;
  background-color: #496a8b;
  position: fixed;
  top: 0;
  left: -160px;
  transition: left 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  color: #ecf0f1;
  z-index: 999;
  overflow-y: auto;
  scrollbar-width: none;
}

.sidebar::-webkit-scrollbar {
  width: 0;
  height: 0;
}

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

.body {
  background-color: #797070d7; /* Light gray background color */
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif; /* Example font */
  height: 100vh; /* Ensure the body takes up full viewport height */
}



.main-content {
  flex-grow: 1;
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  transition: margin-left 0.3s ease;
}

.main-content.drawer-open {
  margin-left: 160px;
}

.v-content {
  flex-grow: 100%;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  
}

.v-content__wrap {
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  background-color: inherit;
  display: flex;
  flex-direction: column;
  align-items: center;
}


.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}


/* Responsive Design */
@media (max-width: 768px) {
  .topbar {
    flex-direction: column;
    align-items: flex-start;
    height: auto;
    padding: 10px;
  }

  .topbar-left {
    width: 100%;
  }

  .topbar-right {
    width: 100%;
    justify-content: space-between;
  }

  .search-container {
    margin-right: 0;
    width: 100%;
  }

  .search-input {
    width: calc(100% - 40px);
  }

  .main-content {
    margin-left: 0;
    width: 100%;
  }

  .topbar.drawer-open {
    margin-left: 0;
  }

  .sidebar.is-open {
    width: 100%;
    left: 0;
    top: 90px;
  }
}
</style>
