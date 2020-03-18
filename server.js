/*
 * Kevin Wu, Darian Shi, Su Jin Bang, Viwing Zheng
 * CS375/Quorum/server.js
 */

// Import mysql
const mysql = require("mysql");

// Initialize server

const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
app.use(bodyParser.json());
let filePath = "public";
app.use(express.static(filePath));

// Initialize cookie
var sessions = require("client-sessions");
app.use(sessions({
    cookieName: "quorum",
    secret: "poop",
    duration: 60 * 60 * 1000,
    activeDuration: 15 * 60 * 1000,
}));

// Start server
const portNum = 8080;
app.listen(portNum, () => {
    console.log("Listening on port " + portNum);
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
    let password = data.user.password;
    let firstName = data.user.firstName;
    let lastName = data.user.lastName;
    let age = data.user.age;
    let gender = data.user.gender;
    let gradDate = data.user.graduation;
    let major = data.user.major;
    let emerName = data.emerCont.name;
    let emerPhone = data.emerCont.phoneNum;
    let emerRel = data.emerCont.relat;

    // Create connection to MySql Server
    let con = mysql.createConnection({
        host: "localhost",
        user: "quorum",
        password: "quorum",
        database: "quorum"
    });

    // Insert new user info into the userProfiles table
    con.connect(function (err) {
        if (err) throw err;

        // TODO: check if another user with the same USERNAME or EMAIL exists, if yes, respond with error, else continue

        // Insert register.html page information as a new user into MySQL database
        let sql = "INSERT INTO userprofiles " +
          "(username, password, firstName, lastName, age, gender, gradDate, major, emergencyName, emergencyPhone, emergencyRelationship) " +
          "VALUES " +
          "(\"" + username + "\", \"" + password + "\", \"" + firstName + "\", \"" + lastName + "\", " + age + ", \"" + gender + "\", \"" + gradDate + "\", \"" + major + "\", \"" + emerName + "\", \"" + emerPhone + "\", \"" + emerRel + "\");";
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

    let username = req.body.user;
    let password = req.body.pass;

    Create connection to MySql Server
    let con = mysql.createConnection({
        host: "localhost",
        user: "quorum",
        password: "quorum",
        database: "quorum"
    });

    let valid = false;
    let userID = NaN;

    con.connect(function (err) {
        if (err) throw err;
        // Insert register.html page information as a new user into MySQL database
        let sql = "SELECT userID, username, password FROM userprofiles;";
        con.query(sql, function (err, result) {
            if (err) throw err;
            for (let i = 0; i < result.length; i++) {
                let row = result[i];
                let tempUser = row.username;
                let tempPass = row.password;
                if (username === tempUser && password === tempPass) {
                    valid = true;
                    userID = row.userID;
                    break;
                }
            }
            if (valid) {
                // TODO: send the user dashboard.html, and send them their userID to keep on client side
                res.send({error: false});
                res.sendFile(path.join(__dirname, filePath, "dashboard.html"));
            }
            else {
                // TODO: tell the user they have bad info
                res.send({error: true});
            }
        });
    });
});
