// routes/cashierRoutes.js
const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

const router = express.Router();
const SECRET_KEY = 'your_secret_key';

router.post('/register', async (req, res) => {
  const { username, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query('INSERT INTO cashiers (username, password) VALUES ($1, $2)', [username, hashedPassword]);

    res.status(201).json({ message: 'Cashier registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const result = await db.query('SELECT * FROM cashiers WHERE username = $1', [username]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = result.rows[0];
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: 'cashier' }, SECRET_KEY, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
