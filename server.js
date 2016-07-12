var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var logger = require('morgan');
var http = require('http');
var mongojs = require('mongojs');
var bb = mongojs('foodlist', ['foodlist']);


var app = express();
var port = process.env.MONGODB_URI || "mongodb://localhost/solodolo";
//look for html, css, js, img files
app.use(express.static(__dirname + "/Client"));

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection errors: '));
db.once('open', function() {
  console.log("Mongodb connection open");
});


mongoose.connect(port);

app.get('/foodlist', function(req, res) {
  bb.foodlist.find(function(err,data) {
    res.json(data);
  });

});

var pert = process.env.PORT || 1337;
app.listen(pert, function() {
  console.log("server running on ", pert);
});
