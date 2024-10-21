const express = require("express");
const mysql = require("mysql");
const cors = require("cors");

const app = express();
app.use(cors()); // Allow cross-origin requests from React
app.use(express.json()); // Parse JSON request bodies

// MySQL connection setup
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "", // Replace with your MySQL password
  database: "react_test", // Replace with your database name
});

db.connect((err) => {
  if (err) {
    console.error("Error connecting to MySQL:", err);
    return;
  }
  console.log("Connected to MySQL");
});

// API route to fetch data from MySQL
app.get("/api/data", (req, res) => {
  const query = "SELECT * FROM employee_list"; // Replace with your table
  db.query(query, (err, results) => {
    if (err) {
      res.status(500).send("Error fetching data");
    } else {
      res.json(results);
    }
  });
});

// Start the server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
