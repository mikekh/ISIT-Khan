 /**
 * @author Charlie Calvert
 */

 /* jshint devel: true */

angular.module('elfPlayer', ['elfGameMod'])
.factory('gameEventService', function($rootScope) {
	return {
		message: "",

		towerBroadcast: function(message) {
			this.message = message;
			this.broadcastMessage('towerBroadcast');
		},

		debugBroadcast: function(message) {
			this.message = message;
			this.broadcastMessage('debugBroadcast');
		},

		// encounter between the Hero and a village
		encounterBroadcast: function(message) {
			this.message = message;
			this.broadcastMessage('encounterBroadcast');
		},
		
		//Village's Health message
		encounterVillageHealthBroadcast: function(message) {
			this.message = message;
			this.broadcastMessage('encounterVillageHealthBroadcast');
		},

		//Hero's Health message
		encounterHeroBroadcast: function(message) {
			this.message = message;
			this.broadcastMessage('encounterHeroBroadcast');
		},
		changeDirectionBroadcast: function(message) {
			this.message = message;
			this.broadcastMessage('changeDirectionBroadcast');
		},

		broadcastMessage: function(broadcastType) {
			$rootScope.$broadcast(broadcastType);
		}
	};
})

/*.controller('starter', function() {
	game.start();
}); */

.controller('ElfController', function($scope, gameEventService, elfgame) {

	$scope.name = "ElfPlayer";
	$scope.eventNote = "no messages";
	$scope.crazyFoo = "";
	$scope.debugMessages = [];
	$scope.moveMessages = [];
	
	elfgame.start();

	// This event is fired from inside crafty when a tower is found.
	// We need to call $apply because we are calling from Crafty, not from Angular.
	$scope.$on('towerBroadcast', function() {
		$scope.$apply(function() { $scope.eventNote = gameEventService.message; });
		console.log(gameEventService.message);
	});

	$scope.$on('debugBroadcast', function() {
		$scope.$apply(function() { $scope.debugMessages.unshift(gameEventService.message); });
		console.log(gameEventService.message);
	});

	$scope.$on('changeDirectionBroadcast', function() {
		$scope.eventNote = gameEventService.message;
		$scope.$apply(function() { $scope.moveMessages.unshift(gameEventService.message); });
		console.log(gameEventService.message);
	});

	//Hero has hit a village
	$scope.$on('encounterBroadcast', function() {
		$scope.$apply(function() { $scope.encounterMessage = gameEventService.message; });
		console.log(gameEventService.message);
	}); 
	
	//Village health has changed
	$scope.$on('encounterVillageHealthBroadcast', function() {
		$scope.$apply(function() { $scope.encounterVillageHealthMessage = gameEventService.message; });
		console.log(gameEventService.message);
	});
	
	//Hero's health has changed
	$scope.$on('encounterHeroBroadcast', function() {
		$scope.$apply(function() { $scope.encounterHeroMessage = gameEventService.message; });
		console.log(gameEventService.message);
	});


	$scope.goLeft = function() {
		elfgame.goLeft();
	};

	$scope.stopMove = function() {
		elfgame.stopMove();
	};
});

// ElfPlayer.$inject = ['$scope', 'gameEventService'];

