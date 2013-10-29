/**
 * @author MIKE
 */
function diceRolls($scope) {
	$scope.dice1 = null;
	$scope.dice2 = null;
	$scope.dice3 = null;
	$scope.dice4 = null;
	$scope.dice5 = null;
	$scope.dice6 = null;
	
	$scope.total = null;
	
	$scope.rollD6 = function(){
		$scope.dice1 = rollDice(6);
		$scope.total = $scope.dice1;
	};
	
	$scope.roll2D6 = function(){
		$scope.dice1 = rollDice(6);
		$scope.dice2 = rollDice(6);
		$scope.total = $scope.dice1 + $scope.dice2;
	};
	
	$scope.roll3D6 = function(){
		$scope.dice1 = rollDice(6);
		$scope.dice2 = rollDice(6);
		$scope.dice3 = rollDice(6);
		$scope.total = $scope.dice1 + $scope.dice2 + $scope.dice3;
	};
 	
	$scope.rollD4 = function(){
		$scope.dice4 = rollDice(4);
		$scope.total = $scope.dice4;
	};
	
	$scope.rollD10 = function(){
		$scope.dice5 = rollDice(10);
		$scope.total = $scope.dice5;
	};
 	$scope.rollD20 = function(){
		$scope.dice6 = rollDice(20);
		$scope.total = $scope.dice6;
	};
 
};

var rollDice = function(numbSides) {
    return Math.floor(Math.random() * numbSides) + 1;
};


