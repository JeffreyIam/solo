//connnect controller with index.html file
var myFood = angular.module('myFood',[]);
myFood.controller('FoodCtrl',function($scope, $http) {
  console.log("Hey! It's me from controller!");


var refresh = function() {
  // $http.get('/foodlist')
  return $http({
    method: 'GET',
    url: '/foodlist'
    }).success(function(res) {
    console.log("refreshed from controller");
    $scope.foodlist = res;
    $scope.food = "";
  });
};

refresh();

  $scope.addFood = function(food) {
    console.log("addFood from controller", $scope.food);
     $http({
      method: 'POST',
      url: '/foodlist',
      data: {food: $scope.food, weight: $scope.weight, calories:$scope.calories}
    // $http.post('/foodlist', $scope.food).success(function(res) {
      // console.log(res);
      // console.log('hi from controller')
    });
    console.log('sent post request');
    refresh();
  };

  $scope.remove = function(id) {
    console.log(id);
    $http.delete('/foodlist/' + id).success(function(res) {
      console.log(res);
      refresh();
    })
  };

  $scope.edit = function(id) {
    $http.get('/foodlist/' + id).success(function(res) {
      $scope.food = res;
    });
  }

  $scope.update = function() {
    console.log($scope);
    console.log($scope.food._id + "from controller");
    console.log('updating from controller');
    $http.put('foodlist/' + $scope.food._id, $scope.food).success(function(res) {
      refresh();
    })
  }
  //need to add to fix problem with editing food..
  $scope.unselect = function() {
    $scope.food = "";
  }

  $scope.total = function() {
  var total = 0;
  angular.forEach($scope.foodlist, function(food) {
    //if(food.active) {
      total += food.calories;
   // }
  });
  return total;
  }


});