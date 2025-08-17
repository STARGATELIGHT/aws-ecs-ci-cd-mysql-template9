const express = require('express');
const mysql = require('mysql2/promise');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (req, res) => res.send('OK'));

app.get('/db-check', async (req, res) => {
  try {
    const conn = await mysql.createConnection({
      host: process.env.DB_HOST || 'mysql',
      user: process.env.DB_USER || 'root',
      password: process.env.DB_PASSWORD || 'password',
      database: process.env.DB_NAME || 'testdb'
    });
    const [rows] = await conn.query('SELECT NOW() as now');
    res.json({ time: rows[0].now });
    await conn.end();
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(PORT, () => console.log(`App running on port ${PORT}`));
