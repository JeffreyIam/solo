//connnect controller with index.html file
var myFood = angular.module('myFood',[]);
myFood.controller('FoodCtrl',function($scope, $http) {
  console.log("Hey! It's me from controller!");

  $http.get('/foodlist').success(function(res,req) {
    console.log("got data req");
    $scope.foodlist = res;
  })




});