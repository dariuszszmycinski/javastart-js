var app = angular.module('app', []);
 
 app.controller('HelloController', function($scope) {
     $scope.exampleVariable = 'Ten tekst będzie wstawiony w miejsce podwójnych nawiasów klamrowych';
 });