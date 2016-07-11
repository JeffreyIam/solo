var express = require('express');
var path = require('path');
var logger = require('morgan');
var http = require('http');


var app = express();

port = process.env.PORT || 1337;

var server = http.createServer(function(req,res){
  res.writeHeader(200,{"Content-Type": "text/plain"});
  res.write("Heyooo");
  res.end();
});
server.listen(port);
console.log("server running on ", port )