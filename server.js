var express = require('express');
var path = require('path');
var logger = require('morgan');
var http = require('http');
var mongojs = require('mongojs');
var db = mongojs('foodlist', ['foodlist']);

var app = express();
port = process.env.PORT || 1337;
//look for html, css, js, img files
app.use(express.static(__dirname + "/Client"));

app.get('/foodlist', function(req, res) {
  console.log("get req");

  db.foodlist.find(function(err,data) {
    console.log(data);
    res.json(data);
  });

});


app.listen(port);
console.log("server running on ", port )