var express = require('express');
var path = require('path');
var logger = require('morgan');
var http = require('http');

//var table = require('./mongo.js')
var mongojs = require('mongojs');
var db = mongojs('foodlist', ['foodlist']);
var bodyParser = require('body-parser');

var app = express();

//look for html, css, js, img files
app.use(express.static(__dirname + "/Client"));
app.use(bodyParser.json());

app.get('/foodlist', function(req, res) {
  db.foodlist.find(function(err,data) {
    res.json(data);
  });
});

app.post('/foodlist', function(req, res) {
  console.log(req.body);
  db.foodlist.insert(req.body, function(err, data) {
    res.json(data);
  })
});

// app.delete('/foodlist/:id', function(req, res) {
//   var id = req.params.id;
//   console.log(id);
// })

var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log("server running on ", port);
});
