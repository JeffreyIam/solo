var express = require('express');
var bodyParser = require('body-parser');
var request = require('request');


var app = express();

var port = process.env.PORT || 1337;

app.use(bodyParser.json());

app.listen(port);

console.log("server running on ", port )

app.get('/', function(req, res) {
  res.send("hi! from server.js")
});