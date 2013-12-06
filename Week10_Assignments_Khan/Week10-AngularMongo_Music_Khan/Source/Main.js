 /**
 * @author Charlie Calvert
 */

 /* jshint devel: true */

angular.module('mainModule', ['mongoModule'])
.controller('mainController', function($scope, mongoData) { 'use strict';

	$scope.name = "mainController";
	
	$scope.toFind = "";
	$scope.retVal = "Search Result";
	
	
	$scope.dataDBLength = 0;
    $scope.userIndexSelection = 0;
    
    $scope.loadData = function() {
        $scope.dataDB = mongoData.query({}, function(dataDB) {
          $scope.dataDBLength = dataDB.length;
          console.log($scope.dataDBLength);
          $scope.userIndexSelection = 0;      
          $('#indexSelection').val("0");
          $scope.indexChange();
        });
    };
    
    $scope.findmusician = function() { 
		console.log('findAlbum called');
		
	//Charlie neither of the calls below work, can figure out how call the function in the factory
		//$scope.retVal = mongoData.getMusicianFromAlbum($scope.toFind);
		//$scope.retVal = $scope.dataDB.getMusicianFromAlbum($scope.toFind);
		
		$scope.retVal = null;
		
		for (var x in $scope.dataDB){
    			if ($scope.dataDB[x].album == $scope.toFind){
    				console.log("Found the Musician");
    				$scope.retVal = $scope.dataDB[x].musician; 
    			}
    		}
		
		$scope.retVal = "Album  " + $scope.toFind + " is by " + $scope.retVal;
		//return 0;
	};
	
	$scope.findAlbum = function() { 
		console.log('findAlbum called');
		
		$scope.retVal = null;
		
	//Charlie neither of the calls  below work, can figure out how call the function in the factory
		//$scope.retVal = musicFactory.getAlbumFromMusician($scope.data, $scope.toFind);
		//$scope.retVal = $scope.toFind + " made an album " + $scope.retVal;
		
		for (var x in $scope.dataDB){
    			if ($scope.dataDB[x].musician == $scope.toFind){
    				console.log("Found an album");
    				$scope.retVal = $scope.dataDB[x].album; 
    			}
    		}
		
		$scope.retVal = "Album  " + $scope.toFind + " is by " + $scope.retVal;
	};
    
    $scope.addRow = function() {
        var pres = new mongoData({
            album: $scope.album,
            musician: $scope.musician,
        });
        pres.$save(function(president, r) {
            $scope.dataDB.push(president);
            $scope.dataDBLength = $scope.dataDB.length;
        });
    };
    
    $scope.deleteRow = function() {
        var userIndexSelection = $scope.userIndexSelection;
        // if (userIndexSelection < $scope.presidents.length) {}
        $scope.dataDB[userIndexSelection].remove(function(deletedObject, headers) {
            $scope.dataDB.splice(userIndexSelection, 1);
            $scope.dataDBLength = $scope.dataDB.length;
        }, function(err) {
            console.log("error: " + err.data.message);  
        });
    };
    
    $scope.updateRow = function() {
        var indexOfItemToUpdate = $scope.userIndexSelection;
        $scope.dataDB[indexOfItemToUpdate].album = $scope.album;
        $scope.dataDB[indexOfItemToUpdate].musician = $scope.musician;

        $scope.dataDB[indexOfItemToUpdate].updateMe(function(data) {            
            console.log("success: " + data);
        }, function(err) {
            console.log("Error Status: " + err.status + ' ' + err.data.message);
        });  
    };
    
    $scope.indexChange = function() {        
        $scope.album = $scope.dataDB[$scope.userIndexSelection].album;
        $scope.musician = $scope.dataDB[$scope.userIndexSelection].musician;
    };
});



