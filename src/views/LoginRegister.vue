<template>
  <div class="app-container">
    <div class="topbar">
      <div class="logo-container">
        <img src="@/assets/images/logo.png" alt="Small Logo" class="small-logo" />
        <h3>Dolores OTOP.PH</h3>
      </div>
      <h2>Inventory System</h2>
    </div>
    <div class="main-content">
      <div class="image-container">
        <img src="@/assets/images/side-image.png" alt="Store" />
      </div>
      <div class="login-container">
        <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
        <h6>“One Town, One Product”</h6>
        <h2 v-if="isLogin">LOGIN</h2>
        <h2 v-else>REGISTER</h2>
        <form @submit.prevent="submitForm">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          <input v-if="!isLogin" type="text" placeholder="Full Name" required />
          <button type="submit">{{ isLogin ? 'Log In' : 'Sign Up' }}</button>
        </form>
        <div class="links">
          <a href="#" @click.prevent="toggleForm">{{ isLogin ? 'Sign Up' : 'Log In' }}</a>
        </div>
      </div>
    </div>
  </div>



    <!-- Add similar container sections for other categories -->
    </template>

    <script>

    export default {
    data() {
    return {
      isLogin: true,
        // dropdownVisible: false,
    };
    },

    methods: {

      toggleForm() {
      this.isLogin = !this.isLogin;
    },
    submitForm() {
      // Handle form submission for login or register
    },
      login() {
      // Handle login logic here
    },
    selectCategory(category) {
      this.selectedCategory = category;
    },
    // selectCategory(category) {
    //     this.selectedCategory = category;
    //     this.dropdownVisible = false; // Hide the dropdown after selection
    // },
    // toggleDropdown(event) {
    // event.preventDefault();
    // this.dropdownVisible = !this.dropdownVisible;
    // },

    // login() {
    //   // Assuming login is successful
    // this.$store.dispatch('login'); // Dispatch login action
    // this.$router.push('/admin');
    // this.$router.push('/cashier');
    // this.$router.push('/supplier');
    //   // Redirect to the Admin Page
    // },
    },
};
    </script>

<style scoped>
/* General Styles */
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #f5f5f5;
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
  padding: 20px 40px;
  background-color: rgba(87, 120, 163, 0.5);
  color: white;
  text-align: center;
  z-index: 10;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo-container {
  display: flex;
  align-items: center;
}

.small-logo {
  width: 45px; /* Adjust size as needed */
  margin-right: 10px;
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


.main-content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 20px;
}

.image-container {
  flex: 1;
  padding: 20px;
}

.image-container img {
  width: 100%;
  height: 480px;
  border-radius: 10px;
}

.login-container {
  flex: 1;
  max-width: 400px;
  padding: 5px  25px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: height 0.3s ease;
}

.logo {
  width: 100px;
  margin-bottom: 20px;
}

h2 {
  margin-bottom: 20px;
  color: #333333;
}

h3 {
  margin-bottom: 20px;
  color: #000000;
}

form {
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

input[type="email"],
input[type="password"],
input[type="text"] {
  padding: 10px;
  margin-bottom: 15px;
  border: 1px solid #cccccc;
  border-radius: 4px;
  font-size: 16px;
}

button {
  padding: 10px;
  background-color: #336699;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
}

button:hover {
  background-color: #274c73;
}

.links {
  display: flex;
  justify-content: center;
  margin-top: 15px;
}

.links a {
  color: #336699;
  text-decoration: none;
  padding: 5px;
}

.links a:hover {
  text-decoration: underline;
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

}

@media screen and (max-width: 480px) {
  .topbar h2 {
    font-size: 1.2rem;
  }

  .topbar h3 {
    font-size: 1rem;
  }

  .image-container {
    padding: 0;
  }

  .login-container {
    max-width: 90%;
    padding: 20px;
  }
}
</style>