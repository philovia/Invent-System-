<template>
    <div class="container">
        <!-- TopBar and Sidebar code... -->
        <main class="main-content" :class="{ 'drawer-open': isDrawerOpen }">
        <div class="v-content">
            <div class="v-content__wrap">
            <section id="manage-product" class="container-fluid">
                <div class="row">
                <h2>Manage Product</h2>
                <div class="table-container">
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
                      <!-- Add more rows as needed -->
                    </tbody>
                  </table>
                </div>
                <button class="add-product-btn" @click="showAddProductModal = true">Add New Product</button>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <!-- Add Product Modal -->
      <div v-if="showAddProductModal" class="modal-overlay" @click="closeModal">
        <div class="modal-content" @click.stop>
          <h3>Add New Product</h3>
          <form @submit.prevent="addProduct">
            <div>
              <label for="title">Product Title</label>
              <input type="text" id="title" v-model="newProduct.title" required />
            </div>
            <div>
              <label for="description">Product Description</label>
              <textarea id="description" v-model="newProduct.description" required></textarea>
            </div>
            <div>
              <label for="quantity">Quantity</label>
              <input type="number" id="quantity" v-model="newProduct.quantity" required />
            </div>
            <div>
              <label for="price">Price</label>
              <input type="number" id="price" v-model="newProduct.price" required />
            </div>
            <div>
              <label>Product Category</label>
              <div>
                <input type="radio" id="food" value="Food" v-model="newProduct.category" />
                <label for="food">Food</label>
              </div>
              <div>
                <input type="radio" id="nonfood" value="Non-Food" v-model="newProduct.category" />
                <label for="nonfood">Non-Food</label>
              </div>
            </div>
            <button type="submit" class="save-btn">Save</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ManageProduct',
    data() {
      return {
        isDrawerOpen: false,
        showAddProductModal: false,
        newProduct: {
          title: '',
          description: '',
          quantity: '',
          price: '',
          category: '',
        },
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
      },
      closeModal() {
        this.showAddProductModal = false;
      },
      addProduct() {
        // Logic to add product
        // For example, you can push the newProduct object to an array of products
  
        // After adding the product, close the modal and reset the form
        this.closeModal();
        this.newProduct = {
          title: '',
          description: '',
          quantity: '',
          price: '',
          category: '',
        };
      },
    },
  };
  </script>
  
  <style scoped>
  .container {
    height: 100vh;
    display: flex;
  }
  
  /* .topbar {
    /* styles... */
  /* } */
  
  /* .sidebar { */
    /* styles... */
  /* } */ */
  
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
    max-width: 100%;
    border-collapse: collapse;
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
  
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .modal-content {
    background: white;
    padding: 20px;
    border-radius: 10px;
    width: 80%;
    max-width: 500px;
  }
  
  .modal-content h3 {
    margin-top: 0;
  }
  
  .modal-content form > div {
    margin-bottom: 15px;
  }
  
  .modal-content label {
    display: block;
    margin-bottom: 5px;
  }
  
  .modal-content input,
  .modal-content textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .modal-content .save-btn {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #496a8b;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .modal-content .save-btn:hover {
    background-color: #345a7b;
  }
  
  @media (max-width: 768px) {
    .responsive-table, .add-product-btn {
      width: 80%;
    }
  
    .add-product-btn {
      padding: 8px 16px;
    }
  }
  
  @media (max-width: 480px) {
    .responsive-table, .add-product-btn {
      width: 100%;
    }
  
    .add-product-btn {
      padding: 6px 12px;
    }
  }
  </style>
  