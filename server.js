/*
 * Kevin Wu, Darian Shi, Sj Jin Bang, Viwing Zheng
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

// Landing page
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, filePath, "login.html"));
});

// Sign-up page
app.get("/signup", (req, res) => {
  res.sendFile(path.join(__dirname, filePath, "signup.html"));
});

// Handle check in
app.get("/checkin", (req, res) => {
  let eventID = req.query.eventID;
  res.send(eventID);
  console.log(eventID);
});

// Handle account sign up
app.post("/signup", (req, res) => {
  let username = req.body.username;
  let password = req.body.password;

  console.log("Username: " + username);
  console.log("Password: " + password);
});

