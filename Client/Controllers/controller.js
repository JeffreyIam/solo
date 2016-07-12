//connnect controller with index.html file
var myFood = angular.module('myFood',[]);
myFood.controller('FoodCtrl',function($scope, $http) {
  console.log("Hey! It's me from controller!");


var refresh = function() {
  $http.get('/foodlist').success(function(res,req) {
    console.log("got data req");
    $scope.foodlist = res;
    $scope.food = "";
  });
};

refresh();

  $scope.addFood = function() {
    console.log("ahhhh", $scope.food);
    $http.post('/foodlist', $scope.food).success(function(res,req) {
      console.log(res);
      refresh();
    });
  };

  $scope.remove = function(id) {
    console.log(id);
    $http.delete('/foodlist/' + id).success(function(res,req) {
      console.log(res);
      refresh();
    })
  };


});