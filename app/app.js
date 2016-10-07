'use strict';

var myApp = angular.module('myApp', []);
var CustomerModule = angular.module('CustomerModule', ['myApp']) //customerModule depends on myApp

