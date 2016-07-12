var express = require('express');
var path = require('path');
var logger = require('morgan');
var http = require('http');


var app = express();
port = process.env.PORT || 1337;
//look for html, css, js, img files
app.use(express.static(__dirname + "/Client"));


app.listen(port);
console.log("server running on ", port )