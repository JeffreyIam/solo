var express = require('express');
var path = require('path');
var logger = require('morgan');
var http = require('http');
var mongoose = require('mongoose');
var table = require('./mongo.js');
// var db = mongojs('foodlist', ['foodlist']);
var bodyParser = require('body-parser');

var app = express();

var foodlist = mongoose.model('foodList',table.Food);

app.use(express.static(__dirname + "/Client"));
app.use(bodyParser.json());

app.get('/foodlist', function(req, res) {
  foodlist.find({},function(err,data) {
    console.log('getting from server.js')
    res.json(data);
  });
});

app.post('/foodlist', function(req, res) {
   //console.log(req.body);
  // console.log('received post request')
  var food = new table(req.body);
   food.save(function(err,data) {
    if(err) {
      console.log(err);
    } else {
   console.log('successfully saved ' + data)
    }
 })
});

app.delete('/foodlist/:id', function(req, res) {
  var id = req.params.id;
  //console.log(id);
  foodlist.remove({_id: id}, function(err, data) {
    res.json(data);
  })
});

app.get('/foodlist/:id', function(req,res) {
  var id = req.params.id;
  //console.log(id);
  foodlist.findOne({_id: id}, function(err, data) {
    res.json(data);
  })
});

app.put('/foodlist/:id', function(req, res) {
  var id = req.params.id;
  console.log("from server" , id);
  foodlist.findOneAndUpdate({query: {_id: id}},
    {$set: {food: req.body.food, weight: req.body.weight, calories: req.body.calories}},
    {new: true}, function(err, data) {
      if(err) {
        console.log(err);
      } else {
        console.log('donezo');
        res.json(data);
      }
    });
});

var port = process.env.PORT || 1337;
app.listen(port, function() {
  console.log("server running on ", port);
});
