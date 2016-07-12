//connnect controller with index.html file
var myFood = angular.module('myFood',[]);
myFood.controller('FoodCtrl',function($scope, $http) {
  console.log("Hey! It's me from controller!");
});