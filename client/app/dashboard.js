'use strict';

var angular = require('angular');
var Controller = require('./controllers/dashboard');

angular
  .module('boilerplate', ['templates', "highcharts-ng"])
  .controller('DashboardController', ['$http', Controller])
  .run(($http) => {
    $http.defaults.headers.get = {'Accept': 'application/json'};
  });

angular.bootstrap(document, ['boilerplate']);
