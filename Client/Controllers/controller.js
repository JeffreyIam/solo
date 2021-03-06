//connnect controller with index.html file
var myFood = angular.module('myFood', []);
myFood.controller('FoodCtrl', function($scope, $http) {
    var refresh = function() {
        return $http({
            method: 'GET',
            url: '/foodlist'
        }).success(function(res) {
            $scope.foodlist = res;
            $scope.food = "";
        });
    };

    refresh();

    $scope.addFood = function(food) {
        $http({
            method: 'POST',
            url: '/foodlist',
            data: $scope.food
        });
        refresh();
    };

    $scope.remove = function(id) {
        $http.delete('/foodlist/' + id).success(function(res) {
            refresh();
        })
    };

    $scope.edit = function(id) {
        $http.get('/foodlist/' + id).success(function(res) {
            $scope.food = res;
        });
    }

    $scope.update = function(food) {
            $http({
            method: 'POST',
            url: '/foodlist/' + $scope.food._id,
            data: $scope.food
        });
            refresh();
        }
    $scope.unselect = function() {
        $scope.food = "";
    }

    $scope.total = function() {
        var total = 0;
        angular.forEach($scope.foodlist, function(food) {
            total += food.calories;
        });
        return total;
    }
    $scope.protein = function() {
        var protein = 0;
        var ppp = {chicken:7.75, turkey: 8, steak: 5,salmon: 5.1, spinich: 0.81, lettuce: 0.24}
        angular.forEach($scope.foodlist, function(food) {
          protein += food.weight * ppp[food.name];
        });
        return protein;
    }
});