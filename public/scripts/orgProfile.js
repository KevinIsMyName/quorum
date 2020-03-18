/*
+-----------+--------------+------+-----+---------+----------------+
| Field     | Type         | Null | Key | Default | Extra          |
+-----------+--------------+------+-----+---------+----------------+
| orgID     | int          | NO   | PRI | NULL    | auto_increment |
| orgName   | varchar(255) | NO   |     | NULL    |                |
| about     | text         | YES  |     | NULL    |                |
| orgEmail  | varchar(40)  | NO   |     | NULL    |                |
| orgNumber | varchar(20)  | NO   |     | NULL    |                |
+-----------+--------------+------+-----+---------+----------------+
*/

var express = require("express");
var app = express();
var mysql = require("mysql");
var bodyParser = require("body-parser");


