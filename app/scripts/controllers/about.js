'use strict';

/**
 * @ngdoc function
 * @name beerCombosApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the beerCombosApp
 */
angular.module('beerCombosApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
