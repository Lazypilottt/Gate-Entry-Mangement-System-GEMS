const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize Express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',       // Replace with your MySQL username
  password: '',       // Replace with your MySQL password
  database: 'entry_exit_db',  // Replace with your database name
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Could not connect to MySQL:', err);
    process.exit(1);
  } else {
    console.log('Connected to MySQL database');
  }
});

// Route to add entry
app.post('/add-entry', (req, res) => {
  const { name, ID, category, date_time_of_arrival } = req.body;

  const query = 'INSERT INTO entries (name, ID, category, date_time_of_arrival) VALUES (?, ?, ?, ?)';
  db.query(query, [name, ID, category, date_time_of_arrival], (err, result) => {
    if (err) {
      console.error('Error adding entry:', err);
      res.status(500).json({ message: 'Failed to add entry' });
    } else {
      res.status(200).json({ message: 'Entry added successfully!' });
    }
  });
});

// Route to get entries
app.get('/get-entries', (req, res) => {
  const query = 'SELECT * FROM entries';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching entries:', err);
      res.status(500).json({ message: 'Failed to fetch entries' });
    } else {
      res.status(200).json(results);
    }
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
