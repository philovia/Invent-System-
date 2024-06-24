<template>
    <div class="card-container">
      <div class="card" v-for="item in cardItems" :key="item.label">
        <img :src="item.icon" :alt="item.label" class="card-icon" />
        <div class="card-label">{{ item.label }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DashboardCards',
    data() {
      return {
        cardItems: [
          { label: 'Sales Activity', icon: 'path/to/sales-activity-icon.png' },
          { label: 'Sales Order', icon: 'path/to/sales-order-icon.png' },
          { label: 'Purchase Order Status', icon: 'path/to/purchase-order-icon.png' },
          { label: 'Top Selling Item', icon: 'path/to/top-selling-icon.png' },
          { label: 'Inventory Summary', icon: 'path/to/inventory-summary-icon.png' },
          { label: 'Product Details', icon: 'path/to/product-details-icon.png' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .card-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    gap: 20px;
    padding: 20px;
  }
  
  .card {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 20px;
    border: 2px solid #ff7f50;
    border-radius: 10px;
    text-align: center;
  }
  
  .card-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  
  .card-label {
    font-size: 16px;
    font-weight: bold;
  }
  @media (max-width: 768px) {
    .card-container {
      grid-template-columns: 1fr 1fr;
      padding: 10px;
      gap: 15px;
    }
  
    .card {
      padding: 15px;
    }
  
    .card-icon {
      width: 40px;
      height: 40px;
    }
  
    .card-label {
      font-size: 14px;
    }
  }
  
  @media (max-width: 480px) {
    .card-container {
      grid-template-columns: 1fr;
      padding: 5px;
      gap: 10px;
    }
  
    .card {
      padding: 10px;
    }
  
    .card-icon {
      width: 30px;
      height: 30px;
    }
  
    .card-label {
      font-size: 12px;
    }
  }
  </style>
  
  