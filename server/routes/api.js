const express = require('express');
const router = express.Router();
const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "drc_generator"
});

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {
  connection.query("SELECT * FROM drc_users;", function (err, result) {
    if (err) throw err;
    console.log("Result: " + result);
    response.data = result;
    res.json(response);
  });
});

module.exports = router;
