/**
 * @author MIKE
 */
//Line below will control the polution of Global namespace
angular.module('mikeApp', [])
.controller('diceRolls', function($scope) {
	$scope.diceScoreStr = "";
	$scope.total = 0;
	
	$scope.setDiceRolls = function(numbDice, numbSides) {	
		$scope.diceScoreStr = setScoreStr(numbDice, numbSides);
		$scope.total = 0;	
		for(var i= 0; i < numbDice; i++){
			var diceFace =	$scope.dice1 = rollDice(numbSides);
			$scope.diceScoreStr = $scope.diceScoreStr + diceFace + ", ";
			$scope.total = $scope.total + diceFace;
		}
	};
});

var rollDice = function(numbSides) {
    return Math.floor(Math.random() * numbSides) + 1;
};

var setScoreStr = function(numbDice, numbSides){
	return  numbDice + " Dice with " + numbSides +" sides Rolled: ";
};
