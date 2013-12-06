
var app = angular.module('myApp', ['musicMod', 'bookMod']);

app.controller('MyController', function($scope, musicFactory, bookFactory) {
	$scope.hint = "<p>Start with a web server such as <strong>node server.js</strong> to retrieve JSON from Server</p>";
	$scope.toFind;
	$scope.findFrom;
	$scope.retVal;
	$scope.loadMusic = function() { 

	$scope.data = musicFactory.musicData;
	};
	
	$scope.findmusician = function() { 
		//console.log('findAlbum called');
		$scope.retVal = musicFactory.getMusicianFromAlbum($scope.toFind);
		$scope.retVal = "Album  " + $scope.toFind + " is by " + $scope.retVal;
	};
	
	$scope.findAlbum = function() { 
		//console.log('findAlbum called');
		$scope.retVal = musicFactory.getAlbumFromMusician($scope.toFind);
		$scope.retVal = $scope.toFind + " made an album " + $scope.retVal;
	};
	
	
	$scope.loadBook = function() { 

		$scope.data2 = bookFactory.bookData;
	};
	
	$scope.findTile = function() { 
		//console.log('findAlbum called');
		$scope.retVal = bookFactory.getBookFromAuthor($scope.toFind);
		$scope.retVal = $scope.toFind + " wrote the book " + $scope.retVal;
	};
	
	$scope.findAuthor = function() { 
		//console.log('findAlbum called');
		$scope.retVal = bookFactory.getAuthorFromBook($scope.toFind);
		$scope.retVal = "Book  " + $scope.toFind + " is by " + $scope.retVal;
	};
});
