<template>
    <div class="main-content">
      <div class="table-container">
        <h3 class="table-title">Orders</h3>
        <table class="inventory-table">
          <thead>
            <tr>
              <th>Category</th>
              <th>Supplier</th>
              <th>Date</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Food</td>
              <td>Supplier 1</td>
              <td>7/7/2024</td>
              <td>5</td>
              <td>PHP 500</td>
              <td class="success">Success</td>
            </tr>
            <tr>
              <td>Food</td>
              <td>Supplier 2</td>
              <td>7/7/2024</td>
              <td>5</td>
              <td>PHP 500</td>
              <td class="return">Return</td>
            </tr>
            <tr>
              <td>Non-food</td>
              <td>Supplier 3</td>
              <td>7/7/2024</td>
              <td>5</td>
              <td>PHP 500</td>
              <td class="success">Success</td>
            </tr>
            <tr>
              <td>Food</td>
              <td>Supplier 3</td>
              <td>7/7/2024</td>
              <td>5</td>
              <td>PHP 500</td>
              <td class="success">Success</td>
            </tr>
            <tr>
              <td>Non-food</td>
              <td>Supplier 4</td>
              <td>7/7/2024</td>
              <td>5</td>
              <td>PHP 500</td>
              <td class="success">Success</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>

<style scoped>
.main-content {
  display: flex;
  flex-direction: center;
  flex-grow: 1;
  padding: 20px;
  transition: margin-left 0.3s ease;
}

.table-container {
  width: 100%;
  height: calc(70vh - 100px); /* Adjust this value if your top bar height is different */
  overflow: auto;
  background-color: #676c72;
  border-radius: 10px;
  padding: 20px;
}

.table-title {
  text-align: left;
  margin-bottom: 10px;
  font-size: 1.5em;
  color: white;
}

.inventory-table {
  width: 100%;
  border-collapse: collapse;
  background-color: #c5c7c9;
}

.inventory-table th,
.inventory-table td {
  padding: 10px;
  border: 1px solid #ccc;
}

.inventory-table th {
  background-color: #676c72;
  color: white;
}

.success {
  background-color: #dff7e2;
  color: #2ca45d;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
}

.return {
  background-color: #ffe7e7;
  color: #d9534f;
  padding: 5px;
  border-radius: 5px;
  text-align: center;
}

.sidebar-open .main-content {
  margin-left: 160px; /* Adjust based on your sidebar width */
}

.sidebar-closed .main-content {
  margin-left: 0;
}
</style>
  