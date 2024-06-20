const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const db = require('../db');

const router = express.Router();

// Register admin
router.post('/register', async (req, res) => {
  const { username, password, admin_code } = req.body;


    //sample query
/*  {
  "username": "Admin1",
  "password": "Adminpassword",
  "admin_code": "Admincode"
}*/

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db.query('INSERT INTO admins (username, password, admin_code) VALUES ($1, $2, $3)', [username, hashedPassword, admin_code]);

    res.status(201).json({ message: 'Admin registered successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

// Admin login
router.post('/login', async (req, res) => {
  const { username, admin_code } = req.body;

  try {
    const result = await db.query('SELECT * FROM admins WHERE username = $1', [username]);

    if (result.rows.length === 0) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const user = result.rows[0];

    if (admin_code !== user.admin_code) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }

    const token = jwt.sign({ id: user.id, role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({ message: 'Login successful', token });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

module.exports = router;
