var express = require("express");
var router = express.Router();
var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

router.get("/", function(req, res, next) {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        con.query("SELECT * FROM peoples WHERE category = 'Private Support Group'", function (err, result, fields) {
            if (err) throw err;
            res.send(result);
            console.log(result);
        });
    }); 
    //res.send("API is working properly");
    //console.log(req.body.name);
});

module.exports = router;
