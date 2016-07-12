var mongodb = require('mongodb');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var port = process.env.MONGODB_URI || "mongodb://localhost/solodolo";
mongoose.connect(port);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection errors: '));
db.once('open', function() {
  console.log("Mongodb connection open");
});

var foodList = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  weight: {
    type: Number,
    required: true
  },
  calories: {
    type: Number,
    required: true
  }
});

var Food = mongoose.model('foodList', foodList);

module.exports = Food;
new Food({name: "Chicken", weight: 32, calories: 355}).save(function() {
  console.log('successfully saved chicken')
});
new Food({name: "Turkey", weight: 32, calories: 355}).save(function() {
  console.log('successfully saved turkey')
});

