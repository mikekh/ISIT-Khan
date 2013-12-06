
angular.module('musicMod', [])
.factory('musicFactory', function($http) {
	
	console.log('musicFactory called');

    return {

	musicData : 
	[
		{
			"musician": "Beatles", 
			"album": "Yellow Submarine"
		},
		{
			"musician": "Jefferson Starship", 
			"album": "Red Octopus"
		},
		{
			"musician": "The Doors", 
			"album": "L.A. Woman"
		},
		{
			"musician": "Jimi Hendrix", 
			"album": "Kiss the Sky"
		},
		{
			"musician": "Carlos Santana", 
			"album": "Shaman"
		}
	],
  	
    	getMusicianFromAlbum : function(albumName) {
    		console.log('getMusicianFromAlbum called');
    		
    		for (x in this.musicData){
    			if (this.musicData[x].album == albumName){
    				console.log("Found the Musician");
    				return this.musicData[x].musician;
    			};
    		};
            return null;
        },

        getAlbumFromMusician : function(musicianName) {
            console.log('getAlbumFromMusician called');
    		
    		for (x in this.musicData){
    			if (this.musicData[x].musician == musicianName){
    				console.log("Found a Album");
    				return this.musicData[x].album;
    			};
    		};
            return null;
        }
    };
});

