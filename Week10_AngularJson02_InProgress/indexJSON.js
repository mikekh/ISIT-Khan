
var app = angular.module('myApp', ['musicMod']);

app.controller('MyController', function($scope, musicFactory) {
	$scope.hint = "<p>Start with a web server such as <strong>node server.js</strong> to retrieve JSON from Server</p>";
	$scope.toFind;
	$scope.findFrom;
	$scope.retVal;
	$scope.loadJson = function() { 

		var jsonData = musicFactory.getDataJson();
	
		jsonData.success(function(data, status, headers, config)  {
			$scope.data = data;
		});
		
		jsonData.error(function(data, status, headers, config) {
			throw new Error('Oh no! An Error!');
		});
	};
	
	$scope.findmusician = function() { 
		//console.log('findAlbum called');
		$scope.retVal = musicFactory.getMusicianFromAlbum($scope.data, $scope.toFind);
		$scope.retVal = "Album  " + $scope.toFind + " is by " + $scope.retVal;
	};
	
	$scope.findAlbum = function() { 
		//console.log('findAlbum called');
		$scope.retVal = musicFactory.getAlbumFromMusician($scope.data, $scope.toFind);
		$scope.retVal = $scope.toFind + " made an album " + $scope.retVal;
	};
});
