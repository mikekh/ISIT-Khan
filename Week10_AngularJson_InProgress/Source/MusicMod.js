
angular.module('musicMod', [])
.factory('musicFactory', function($http) {
	
	console.log('musicFactory called');

    return {

		getDataJson : function(){
			return $http.get('Data/music.json');
		},
  	
    	getMusicianFromAlbum : function(arryObjs, albumName) {
    		console.log('getMusicianFromAlbum called');
    		
    		for (x in arryObjs){
    			if (arryObjs[x].album == albumName){
    				console.log("Found the Musician");
    				return arryObjs[x].musician;
    			};
    		};
            return null;
        },

        getAlbumFromMusician : function(arryObjs, musicianName) {
            console.log('getAlbumFromMusician called');
    		
    		for (x in arryObjs){
    			if (arryObjs[x].musician == musicianName){
    				console.log("Found a Album");
    				return arryObjs[x].album;
    			};
    		};
            return null;
        }
    };
});

