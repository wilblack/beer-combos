'use strict';

/**
 * @ngdoc function
 * @name beerCombosApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the beerCombosApp
 */
angular.module('beerCombosApp')
.controller('MainCtrl', function ($scope) {

    $scope.numBeers = 15;
    $scope.letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    $scope.totalCombos = 0;

    function fact(N){
        var rval = 1;
        for (var i=2; i <= N; i++)
            rval = rval * i;
        return rval;
    }

    $scope.combos = function(N, k){
        var top = fact(N);
        var bot = fact(N-k) * fact(k);
        return top/bot;
    }

    $scope.total = function(){
        var total = 0;
        for (var i=1; i <= $scope.numBeers; i++){
            total += $scope.combos($scope.numBeers, i);
        }
        return total;
    }

    $scope.$watch('numBeers', function(newVal){
        if (newVal === null) return;
        $scope.totalCombos = $scope.total();
    })
});
