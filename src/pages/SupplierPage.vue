<template>
  <div class="container">
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
          <router-link to="/dashboard" class="nav-link" @click="closeDrawer">
            <i class="fas fa-tachometer-alt"></i>
            <span>Products</span>
          </router-link>
        </li>
        <li class="nav-item">
          <router-link to="/users" class="nav-link" @click="closeDrawer">
            <i class="fas fa-users"></i>
            <span>Orders</span>
          </router-link>
        </li>
      </ul>
    </nav>

    <!-- Main Content -->
    <main class="main-content" :class="{ 'drawer-open': isDrawerOpen }">
      <div class="v-content">
        <div class="v-content__wrap">
          <section :id="currentCategory" class="container-fluid">
            <!-- Row for placing cards or charts -->
            <div class="row">
              <div class="col-md-6">
                <!-- Example card (replace with your content) -->
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Card 1</h5>
                    <p class="card-text">Example card content.</p>
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <!-- Example chart (replace with your content) -->
                <div class="card">
                  <div class="card-body">
                    <h5 class="card-title">Chart 1</h5>
                    <p class="card-text">Example chart content.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'SidebarTopBar',
  data() {
    return {
      isDrawerOpen: false,
      currentCategory: null // To store the currently selected category
    };
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
    }
  }
};
</script>

<style scoped>
.container {
  height: 100vh; /* Full viewport height */
  width: 100vw; /* Full viewport width */
  display: flex;
  overflow: hidden; /* Prevents horizontal scroll */
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
  transition: margin-left 0.3s ease;
  height: 100%; /* Fill entire height */
  width: 100%; /* Fill entire width */
  overflow-y: auto; /* Enable scrolling if content overflows */
}

.main-content.drawer-open {
  margin-left: 160px; /* Adjust for sidebar width */
}

.v-content {
  display: flex;
  padding: 75px 0px 0px 260px; /* Adjust for sidebar width + margin */
  /* transition: padding-left 0.3s ease; */
  max-width: 100%;
  transition: .2s cubic-bezier(.4,0,.2,1);
  flex: 1 0 auto;
}

.v-content.drawer-open {
  padding-left: 420px; /* Adjust for expanded sidebar width + margin */
}

.v-content__wrap {
  padding: 20px;
}

.container-fluid {
  padding: 20px;
}
</style>




<!-- <template>
  <nav class="sidebar">
      <div class="logo-container">
      <img src="@/assets/images/logo.png" alt="Logo" class="logo" />

      </div>
      <ul>
      <li class="nav-item">
          <router-link to="/dashboard" class="nav-link">
          <i class="fas fa-tachometer-alt"></i>
          <span>Dashboard</span>
          </router-link>
      </li>
      <li class="nav-item">
          <router-link to="/users" class="nav-link">
          <i class="fas fa-users"></i>
          <span>Users</span>
          </router-link>
      </li>
      <li class="nav-item">
          <router-link to="/products" class="nav-link">
          <i class="fas fa-box-open"></i>
          <span>Products</span>
          </router-link>
      </li>
      <li class="nav-item">
          <router-link to="/sales" class="nav-link">
          <i class="fas fa-chart-line"></i>
          <span>Sales</span>
          </router-link>
      </li>
      <li class="nav-item">
          <router-link to="/invoices" class="nav-link">
          <i class="fas fa-file-invoice"></i>
          <span>Invoices</span>
          </router-link>
      </li>
      <li class="nav-item">
          <router-link to="/reports" class="nav-link">
          <i class="fas fa-chart-bar"></i>
          <span>Reports</span>
          </router-link>
      </li>
      <li class="nav-item">
          <router-link to="/purchases" class="nav-link">
          <i class="fas fa-shopping-cart"></i>
          <span>Purchases</span>
          </router-link>
      </li>
      </ul>
  </nav>
  </template>

    <! <script>
    import TopBar from '@/components/TopBar.vue';

    export default {
      data () {
        return {
        };
      },

      components: {
            TopBar
          },
        }; -->
<!--  -->

  <!-- <style scoped>
  .sidebar {
  width: 160px;
  height: 100vh;
  background-color: #496a8b;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0;
  color: #ecf0f1;
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

  li {
  width: 100%;
  }

  a {
  color: #ecf0f1;
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 10px 0px   ;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  }

  a:hover {
  background-color: #34495e;
  }

  i {
  margin-right: 5px;
  color: #ec6036;
  size: 0dvh;
  }
  </style> -->