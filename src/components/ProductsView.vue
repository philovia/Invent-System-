<template>
  <div class="container">
    <!-- TopBar and Sidebar code... -->
    <main class="main-content" :class="{ 'drawer-open': isDrawerOpen }">
      <div class="v-content">
        <div class="v-content__wrap">
          <section id="manage-product" class="container-fluid">
            <div class="row">
              <h2>Manage Product</h2>
              <table class="responsive-table">
                <thead>
                  <tr>
                    <th>Product Name</th>
                    <th>Product Code</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Category</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <!-- Example rows, replace with dynamic rows as needed -->
                  <tr>
                    <td>Product 1</td>
                    <td>001</td>
                    <td>$10</td>
                    <td>100</td>
                    <td>Category A</td>
                    <td><button>Action</button></td>
                  </tr>
                  <tr>
                    <td>Product 2</td>
                    <td>002</td>
                    <td>$20</td>
                    <td>200</td>
                    <td>Category B</td>
                    <td><button>Action</button></td>
                  </tr>
                                    <tr>
                    <td>Product 1</td>
                    <td>001</td>
                    <td>$10</td>
                    <td>100</td>
                    <td>Category A</td>
                    <td><button>Action</button></td>
                  </tr>
                </tbody>
              </table>
              <button class="add-product-btn">Add New Product</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  name: 'ManageProduct',
  data() {
    return {
      isDrawerOpen: false,
      // other data properties...
    };
  },
  methods: {
    // other methods...
    toggleDrawer() {
      this.isDrawerOpen = !this.isDrawerOpen;
    },
    closeDrawer() {
      if (window.innerWidth <= 768) {
        this.isDrawerOpen = false;
      }
    }
  },
};
</script>

<style scoped>
.container {
  height: 100vh;
  display: flex;
}


.main-content {
  flex: 1;
  padding: 20px;
  overflow: auto;
}

.v-content__wrap {
  padding: 20px;
}

.container-fluid {
  padding: 0 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.table-container {
  width: 100%;
  overflow-x: auto;
  display: flex;
  justify-content: center;
  margin-bottom: 1rem;
}

.responsive-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
  overflow-x: auto;
  display: block;
}

th, td {
  padding: 0.75rem;
  text-align: left;
  border: 1px solid #dee2e6;
  white-space: nowrap;
}

.add-product-btn {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #496a8b;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.add-product-btn:hover {
  background-color: #345a7b;
}

@media (max-width: 768px) {
  .responsive-table {
    display: block;
    overflow-x: auto;
    white-space: nowrap;
  }

  th, td {
    white-space: nowrap;
  }

  .add-product-btn {
    width: 100%;
  }
}
</style>
