/**
 * Created by rdas on 30/08/2016.
 */

'use strict';

(function () {
    console.log("self executing anonymous function");
}());

// 1. declare angular module
// the second parameter is needed to declare for the first time.
var app = angular.module("AngExpApp", []);

var displayClass = {
    message: "Hello World, Angular Express",
    username: "angular",
    repos:[]
};

//2. add a controller : add to the module variable
app.controller("mainController", function ($scope, $log) {

    $scope.data = displayClass;

    $log.debug("in main controller with" + JSON.stringify($scope.data));
});

