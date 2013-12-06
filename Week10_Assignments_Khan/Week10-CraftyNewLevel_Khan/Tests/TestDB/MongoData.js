/**
 * @author Mike Khan
 */

/* global angular */ 

angular.module('mikeTestApp', ['hero'])
.constant('CONFIG', {
    DB_NAME: 'mydatabase',
    COLLECTION: 'heros',
    API_KEY: 'A6kZnZN14asztvoFCTSZ3yji_4FHHkob'
})
.controller('MyController', function($scope, $http, heros) {
    $scope.hint = "<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>";
    
    $scope.loadHeros = function() {       
        $scope.heros = heros.query({}, function(heros) {
            $scope.herosLength = heros.length;
            console.log($scope.herosLength);
        });
    };
});

angular.module('hero', ['ngResource'])
.factory('heros', function($resource, CONFIG) {
	console.log('Heros factory called');
	
	var Heros = $resource(
        'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME + 
        '/collections/' + CONFIG.COLLECTION + '/:id', {      
        apiKey: CONFIG.API_KEY     
    },
    {
        update: {method:'PUT'}
    }); 
   
   
	//var Presidents = $resource('https://api.mongolab.com/api/1/databases/mydatabase/collections/presidents/:id', {
      //apiKey:'A6kZnZN14asztvoFCTSZ3yji_4FHHkob',  
    //});
    

    return Heros;    
	 
	// return { a: 2 };		
});
