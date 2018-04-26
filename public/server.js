// MongoDB
// Express
// React
// Node
// DA MERN STACK

// ========= ****** From here info is from Lesson 18.2 (video) ****** =========
// Dependencies
var express = require("express");
var mongojs = require("mongojs");

// Initialize express
var app = express();

// Look to the public folder to find the static file
app.use(express.static("public"));

// Database config.
// Save the URL of DB and the name of collection of Data
var databaseUrl = "utsukushi";
// will we put makeup here?
var collections = ""

// Mongojs will hook the DB to the DB Variable
var db = mongojs(databaseUrl, collections);

// Errors logged if mongodb runs into an issue
db.on("error", function(error) {
  console.log("DB Error: ", error);
});


// ROUTES
//first is over ridden, if removed tho, all we would see is the message
app.get("/", function(req, res) {

  res.send("Ay Bay Bay");

});

// Route All - all of the data in the DB
app.get()

// Route by name --- can sort by name with this Route

// Route by ### ---- can sort by ### with this Route
