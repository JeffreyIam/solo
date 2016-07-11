var express = require('express');
var path = require('path');
var logger = require('morgan');
var http = require('http');


var app = express();

port = process.env.PORT || 1337;


app.listen(port);
console.log("server running on ", port )

app.get('/', function(req, res) {
  res.send("hello world from server.js")
});

