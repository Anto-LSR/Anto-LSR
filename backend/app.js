const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(express.json());
app.use(cors());

app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/", function(req, res, next) {
    res.json({ msg: "This is CORS-enabled for all origins!" });
});

app.get("/result", function(req, res, next) {
    let token = req.query.token;
    connection.query(
        "SELECT * FROM `lists` WHERE `token` = ?",
        token,
        function(error, results, fields) {
            if (error) throw error;
            res.send(results);
        }
    );

});

app.listen(80, function() {
    console.log("CORS-enabled web server listening on port 80");
});

app.post("/", function(req, res) {
    let list = {
        giver: req.body.giver,
        receiver: req.body.receiver,
        token: req.body.token,
    };
    connection.query(
        "INSERT INTO lists SET ?",
        list,
        function(error, results, fields) {
            if (error) throw error;
        }
    );
    res.send("All good.");
});

app.listen(3000);

const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "8889",
    password: "root",
    database: "secretsantadb",

});
connection.connect((err) => {
    if (err) console.log(err.message);
    else console.log("Connected to DataBase");
});

connection.query("SELECT * FROM `lists`", function(error, results, fields) {
    //test exemple de requète SQL depuis NODEJS
    console.log(results);
});