const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require("path");

const app = express();
app.use(bodyParser.json());
const portNum = 8080;

let filePath = "client/public/";
app.use(express.static(filePath));

app.get("/dummy", (req, res) => {
    res.sendFile(path.resolve(filePath + "dummy.html/"));
});

app.get("/checkin", (req, res) => {
    let eventID = req.query.eventID;
    res.send(eventID);
    console.log(eventID);
});

app.post("/signup", (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    console.log("Username: " + username);
    console.log("Password: " + password);
});

app.listen(portNum,() => {
    console.log("Listening on port " + portNum);
});