var express = require("express");
var router = express.Router();
var mysql = require("mysql2");

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "mydb"
});

router.post("/", function(req, res, next) {
    con.connect(function(err) {
        if (err) throw err;
        console.log("Connected!");
        var query_str = "INSERT INTO peoples VALUES ('" + req.body.name + "', " + req.body.id + ", '" + req.body.category + "', '" + req.body.time_of_departure + "', '" + req.body.time_of_arrival + "')";
        con.query(query_str, function (err, result) {
            if (err) throw err;
            console.log("Entry added");
        });
    }); 
    //res.send("API is working properly");
    //console.log(req.body.name);
    //console.log(req.body.ID);
    //console.log(req.body.category);
    //console.log(req.body.date_of_arrival);
    //console.log(req.body.time_of_arrival);
});


module.exports = router;
