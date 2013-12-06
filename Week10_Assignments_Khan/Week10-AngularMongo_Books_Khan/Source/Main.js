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
    
    $scope.findAuthor = function() { 
		console.log('findAlbum called');
		
	//Charlie neither of the calls below work, can figure out how call the function in the factory
		//$scope.retVal = mongoData.getAuthorFromTitle($scope.toFind);
	   //$scope.retVal = $scope.dataDB.getAuthorFromTitle($scope.toFind);
		
		$scope.retVal = null;
		
		for (var x in $scope.dataDB){
    			if ($scope.dataDB[x].title == $scope.toFind){
    				console.log("Found the Author");
    				$scope.retVal = $scope.dataDB[x].author; 
    			}
    		}
		
		$scope.retVal = "Book  " + $scope.toFind + " is written by " + $scope.retVal;
		//return 0;
	};
	
	$scope.findTitle = function() { 
		console.log('findTitle called');
		
		$scope.retVal = null;
		
	//Charlie neither of the calls below work, can figure out how call the function in the factory
		//$scope.retVal = mongoData.getTitleFromAuthor($scope.toFind);
	   //$scope.retVal = $scope.dataDB.getTitleFromAuthor($scope.toFind);
		
		for (var x in $scope.dataDB){
    			if ($scope.dataDB[x].author == $scope.toFind){
    				console.log("Found an book");
    				$scope.retVal = $scope.dataDB[x].title; 
    			}
    		}
		
		$scope.retVal = "Author  " + $scope.toFind + " wrote the book " + $scope.retVal;
	};
    
    $scope.addRow = function() {
        var pres = new mongoData({
            author: $scope.author,
            title: $scope.title,
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
        $scope.dataDB[indexOfItemToUpdate].author = $scope.author;
        $scope.dataDB[indexOfItemToUpdate].title = $scope.title;

        $scope.dataDB[indexOfItemToUpdate].updateMe(function(data) {            
            console.log("success: " + data);
        }, function(err) {
            console.log("Error Status: " + err.status + ' ' + err.data.message);
        });  
    };
    
    $scope.indexChange = function() {        
        $scope.author = $scope.dataDB[$scope.userIndexSelection].author;
        $scope.title = $scope.dataDB[$scope.userIndexSelection].title;
    };
});



