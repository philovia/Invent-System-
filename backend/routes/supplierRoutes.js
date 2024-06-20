const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

const router = express.Router();

// Register supplier
router.post('/register', async (req, res) => {
  const { username, password, email, address, phone_number } = req.body;

    //sample query
/* {
  "username": "supplier1",
  "password": "supplierpassword",
  "email": "supplier@example.com",
  "address": "123 Supplier St",
  "phone_number": "123-456-7890"
}

{
  "username": "supplier1",
  "password": "supplierpassword"
}*/

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query('INSERT INTO suppliers (username, password, email, address, phone_number) VALUES ($1, $2, $3, $4, $5)', [username, hashedPassword, email, address, phone_number]);

    res.status(201).json({ message: 'Supplier registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Supplier login
router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await db.query('SELECT * FROM suppliers WHERE username = $1', [username]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: 'supplier' }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
