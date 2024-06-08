<template>
  <div>
    <!-- TopBar -->
    <header class="topbar">
      <div class="topbar-left">
        <h2>Inventory System</h2>
      </div>
      <div class="topbar-right">
        <div class="search-container">
          <i class="fas fa-search search-icon" @click="focusSearchInput"></i>
          <input type="text" class="search-input" placeholder="Search" ref="searchInput">
        </div>
        <router-link to="/notifications">
          <i class="fas fa-bell"></i>
        </router-link>
        <router-link to="/settings">
          <i class="fas fa-cog"></i>
        </router-link>
        <router-link to="/profile">
          <i class="fas fa-user-circle"></i>
        </router-link>
      </div>
    </header>

    <!-- Sidebar -->
    <nav class="sidebar">
      <div class="logo-container">
        <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
      </div>
      <ul>
      <li class="nav-item">
          <router-link to="/products" class="nav-link">
          <i class="fas fa-box-open"></i>
          <span>Products</span>
          </router-link>
      </li>
      <li class="nav-item">
          <router-link to="/sales" class="nav-link">
          <i class="fas fa-chart-line"></i>
          <span>Orders</span>
          </router-link>
      </li>
      <li class="nav-item">
          <router-link to="/purchases" class="nav-link">
          <i class="fas fa-shopping-cart"></i>
          <span>Updates</span>
          </router-link>
      </li>
      </ul>
    </nav>
  </div>
</template>

<script>
export default {
  name: 'SidebarTopBar',
  methods: {
    focusSearchInput() {
      this.$refs.searchInput.focus();
    }
  }
};
</script>

<style scoped>
/* TopBar styles */
.topbar {
  height: 90px;
  background-color: #496a8b;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  color: #ecf0f1;
  position: fixed;
  top: 0;
  left: 160px; /* Adjust for sidebar width */
  right: 0;
  z-index: 1000;
}

.topbar-left h2 {
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
  left: 180px;
  top: 50%;
  transform: translateY(-50%);
  color: #3f3838;
}

.topbar-right i {
  margin-left: 20px;
  cursor: pointer;
}

/* Sidebar styles */
.sidebar {
  width: 160px; /* Default width */
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
  size: 0dvh;
}

/* Responsive styles */
@media only screen and (max-width: 768px) {
  .topbar {
    left: 0;
  }
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