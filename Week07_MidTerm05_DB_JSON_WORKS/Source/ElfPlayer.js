 /**
 * @author Charlie Calvert
 */

 /* jshint devel: true */
//Charlie-- I am stuck here
//angular.module('elfPlayer', ['elfGameMod'])
angular.module('elfPlayer', ['elfGameMod', 'herosMod'])
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


//.controller('ElfController', function($scope, gameEventService, elfgame, heros) {
.controller('ElfController', function($scope, gameEventService, elfgame, heros) {	
	$scope.name = "ElfPlayer";
	$scope.eventNote = "no messages";
	$scope.crazyFoo = "";
	$scope.debugMessages = [];
	$scope.moveMessages = [];
	
	elfgame.start();
/*	
	 $scope.heros = heros.query({}, function(users) {
      $scope.herosLength = $scope.heros.length;
      console.log($scope.herosLength);
      console.log("Name: " + $scope.heros[0].name);
      console.log("Health: " + $scope.heros[0].health);
      console.log("HitPoints: " + $scope.heros[0].hitPoints);
      console.log("Damage: " + $scope.heros[0].damage);
    });
*/

   

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

/*
angular.module('herosMod', ['ngResource'])
.factory('heros', function($resource) {
	console.log('heros factory called');
	//var Presidents = $resource('https://api.mongolab.com/api/1/databases/elvenlab01/collections/Foo/:id', {      
      //apiKey:'qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy',    
      
                 //My Mongo database
	var Heros = $resource('https://api.mongolab.com/api/1/databases/mydatabase/collections/heros/:id', {
      apiKey:'A6kZnZN14asztvoFCTSZ3yji_4FHHkob',  
    });

    Heros.prototype.getHeroName = function() {
      return this.name;
    };
    
    Heros.prototype.getHeroHealth = function() {
    	return this.health;
    };
    
    return Heros;    

});
*/
// ElfPlayer.$inject = ['$scope', 'gameEventService'];

