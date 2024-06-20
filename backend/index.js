const express = require('express');
const dotenv = require('dotenv');
const adminRoutes = require('./routes/adminRoutes');
const cashierRoutes = require('./routes/cashierRoutes');
const supplierRoutes = require('./routes/supplierRoutes');
const bodyParser = require('body-parser'); // If you need to parse JSON bodies
const cors = require('cors');

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 5000;

// Middleware to parse JSON bodies
app.use(express.json());
app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

// Routes
app.use('/admin', adminRoutes);
app.use('/cashier', cashierRoutes);
app.use('/supplier', supplierRoutes);

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});



// const express = require('express');
// const { Pool } = require('pg');

// const app = express();
// const port = 4000;

// // PostgreSQL connection configuration
// const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'InventoryDB',
//   password: 'postgres',
//   port: 5431,
// });

// // Middleware to parse JSON bodies
// app.use(express.json());

// // Test route to check database connection
// app.get('/test', async (req, res) => {
//   try {
//     const client = await pool.connect();
//     const result = await client.query('SELECT NOW()');
//     client.release();
//     res.status(200).json({ time: result.rows[0] });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: 'Database connection failed' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
