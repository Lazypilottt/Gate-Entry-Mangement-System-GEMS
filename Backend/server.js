const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL connection setup
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // Replace with your MySQL username
    password: 'password', // Replace with your MySQL password
    database: 'entry_exit_db', // Replace with your database name
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

// Endpoint to add data to the database
app.post('/add-entry', (req, res) => {
    const { name, roll_no, category, date_time_of_arrival } = req.body;
    const query = `INSERT INTO entries (name, roll_no, category, date_time_of_arrival) VALUES (?, ?, ?, ?)`;
    db.query(query, [name, roll_no, category, date_time_of_arrival], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }
        res.send('Entry added successfully');
    });
});

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
