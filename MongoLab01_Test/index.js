/**
 * @author Charlie Calvert
 */


angular.module('elvenApp', ['herosMod'])
.controller('MyController', function($scope, $http, heros) {
    $scope.hint = "<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>";
    
    //$scope.heros = heros;
    $scope.heros = heros.query({}, function(users) {
      $scope.herosLength = $scope.heros.length;
      console.log($scope.herosLength);
    });
	
	var getDataJson = $http.get('data.json');

	getDataJson.success(function(data, status, headers, config)  {
		$scope.data = data;
	});
	
	getDataJson.error(function(data, status, headers, config) {
		throw new Error('Oh no! An Error!');
	});

});

angular.module('pres', ['ngResource'])
.factory('presidents', function($resource) {
	console.log('Presidents factory called');
	             //Charlies database
	//var Presidents = $resource('https://api.mongolab.com/api/1/databases/elvenlab01/collections/Presidents/:id', {
      //apiKey:'qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy',  
      
                 //My Mongo database
	var Presidents = $resource('https://api.mongolab.com/api/1/databases/mydatabase/collections/presidents/:id', {
      apiKey:'A6kZnZN14asztvoFCTSZ3yji_4FHHkob',       
    });

    Presidents.prototype.getPresidentName = function() {
      return this.presidentName;
    };
    
    Presidents.prototype.getTermStart = function() {
    	return this.termStart;
    };

    return Presidents;    
	 
	// return { a: 2 };		
});


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