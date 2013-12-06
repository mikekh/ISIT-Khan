/**
 * @author Charlie Calvert
 */


var app = angular.module('myApp', ['CircleMod', 'TriangleMod']);

/* Set up a simple controller with a few  */
app.controller('AddController', function($scope, circleFactory, triangleFactory) {
// function AddController($scope) {
	$scope.operandA = 17000;
	$scope.operandB = 15000;

	$scope.func = function() {
		return $scope.operandA + $scope.operandB;
	};
	
	$scope.cicleArea = circleFactory.getAreaOfCircle(3);
	$scope.circleCircumference  = circleFactory.getCumferenceOfCircle(3);
	$scope.triangleLongSide = triangleFactory.getLongSide(3, 4);
	
});