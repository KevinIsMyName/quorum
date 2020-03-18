/*
 * Kevin Wu, Darian Shi, Su Jin Bang, Viwing Zheng
 * CS375/Quorum/server.js
 */

// Imports
const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const path = require("path");

// Initialize server
const app = express();
app.use(bodyParser.json());
let filePath = "public";
app.use(express.static(filePath));

// Start server
const portNum = 8080;
app.listen(portNum, () => {
    console.log("Listening on port " + portNum);
});

// Create connection to MySql Server
const con = mysql.createConnection({
    host: "localhost",
    user: "quorum",
    password: "quorum",
    database: "quorum"
});

// Landing page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, filePath, "login.html"));
});

/* Sign-up page to catch POST request
 * This should get the profile information and upload it to the MySQL database
 */
app.post("/registered?", (req, res) => {
    console.log("\n\nAt /registered");
    res.sendFile(path.join(__dirname, filePath, "register.html"));
    console.log("POST request received at /registered?");
    let data = req.body;
    console.log(data);
    res.send("Server has handled POST request.");

    // Extract user info from clientJSON
    let username = data.user.username;
    let password =data.user.password;
    let firstName = data.user.firstName;
    let lastName = data.user.lastName;
    let age = data.user.age.toString();
    let gender = data.user.gender;
    let gradDate = data.user.graduation;
    let major = data.user.major;
    let emerName = data.emerCont.name;
    let emerPhone = data.emerCont.phoneNum;
    let emerRel = data.emerCont.relat;


    // Insert new user info into the userProfiles table
    con.connect(function(err) {
        if (err) throw err;
        let sql = "INSERT INTO userprofiles " +
            "(username, password, firstName, lastName, age, gender, gradDate, major, emergencyName, emergencyPhone, emergencyRelationship) " +
            "VALUES " +
            "(\"" + username + "\", \"" + password + "\", \"" + firstName  + "\", \"" + lastName + "\", " + age + ", \"" + gender + "\", \"" + gradDate + "\", \"" + major + "\", \"" + emerName + "\", \"" + emerPhone + "\", \"" + emerRel + "\");";
        con.query(sql, function (err, result) {
            if (err) throw err;
            console.log("Successfully added user!");
        });
    });
});

// Handle check in
app.get("/checkedin?", (req, res) => {
    console.log("\n\nAt /checkedin");
    let sendData = {};
    let eventCode = req.query.eventCode;
    sendData.error = isNaN(eventCode) || eventCode === "";
    console.log("My response: " + sendData);
    console.log("Event code: " + eventCode);
    res.json(sendData);
});

// Handle log in
app.post("/loggedin", (req, res) => {
    console.log("\n\nAt /loggedin");
    console.log(req.body);
    // TODO: DO SQL Stuff to check if valid user

    // TODO: Tell user that he is logged in
});
