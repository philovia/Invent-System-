<template>
  <div class="chart-card">
    <div class="chart-container">
      <line-chart :chart-data="datacollection" :options="options" />
    </div>
    <div class="chart-info">
      <h3>Daily Sales</h3>
      <p><span class="percentage">↑ 55%</span> increase in today's sales</p>
      <p class="update-info">updated 4 minutes ago</p>
    </div>
  </div>
</template>

<script>
import { Line } from 'vue-chartjs';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

export default {
  name: 'DailySalesChart',
  components: {
    LineChart: Line,
  },
  data() {
    return {
      datacollection: {
        labels: ['M', 'T', 'W', 'T', 'F', 'S', 'S'],
        datasets: [
          {
            label: 'Sales',
            backgroundColor: '#4caf50',
            borderColor: '#fff',
            data: [10, 20, 30, 40, 20, 30, 40],
            fill: false,
            borderWidth: 2,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          x: {
            grid: {
              display: false,
            },
          },
          y: {
            grid: {
              display: true,
            },
            beginAtZero: true,
          },
        },
        plugins: {
          legend: {
            display: false,
          },
        },
      },
    };
  },
};
</script>

<style scoped>
.chart-card {
  background-color: #4caf50;
  padding: 20px;
  border-radius: 10px;
  color: white;
  position: relative;
  max-width: 600px;
  margin: 20px auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.chart-container {
  height: 200px;
}

.chart-info {
  background: white;
  padding: 10px 20px;
  border-radius: 10px;
  color: #4caf50;
  text-align: center;
  margin-top: -20px;
  position: relative;
  z-index: 1;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.chart-info h3 {
  margin: 10px 0;
}

.percentage {
  color: #4caf50;
  font-weight: bold;
}

.update-info {
  color: gray;
  font-size: 12px;
}
</style>


<!-- <template> this is the code directly if I add products
  <div id="app">
    <button @click="showAddProduct">Add New Product</button>
    <component :is="currentComponent" />
    <DailySalesChart v-if="showChart" />
  </div>
</template>

<script>
import ManageProduct from './components/ManageProduct.vue';
import AddProduct from './components/AddProduct.vue';
import DailySalesChart from './components/DailySalesChart.vue';

export default {
  name: 'App',
  data() {
    return {
      selectedCategory: '',
      showChart: true, // set to true to show the chart initially
    };
  },
  computed: {
    currentComponent() {
      return this.selectedCategory === 'addProduct' ? 'AddProduct' : 'ManageProduct';
    },
  },
  methods: {
    showAddProduct() {
      this.selectedCategory = 'addProduct';
    },
  },
  components: {
    ManageProduct,
    AddProduct,
    DailySalesChart,
  },
};
</script>

<style>
/* Add your styles here */
button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style> -->
