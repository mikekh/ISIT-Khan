/**
 * @author Charlie Calvert
 */

/* global angular */

angular.module('mongoModule', ['ngResource'])
.constant('CONFIG', {
	DB_NAME: 'mydatabase',
	COLLECTION: 'musicDB',
	API_KEY: 'A6kZnZN14asztvoFCTSZ3yji_4FHHkob'
})
.factory('mongoData', function($resource, CONFIG) { 'use strict';
	console.log('Presidents factory called');

	var MusicRecords = $resource(
		'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME +
		'/collections/' + CONFIG.COLLECTION + '/:id', {
		apiKey: CONFIG.API_KEY
	},
	{
		update: {method:'PUT'}
	});
	
	MusicRecords.prototype.getMusicianFromAlbum = function(albumName) {
    		console.log('getMusicianFromAlbum called');
    		
    		for (x in this.MusicRecords){
    			if (this.MusicRecords[x].album == albumName){
    				console.log("Found the Musician");
    				return this.MusicRecords[x].musician;
    			};
            };  
            return null;
       };

     MusicRecords.prototype.getAlbumFromMusician = function(musicianName) {
            console.log('getAlbumFromMusician called');
    		
    		for (x in this.MusicRecords){
    			if (this.MusicRecords[x].musician == musicianName){
    				console.log("Found a Album");
    				return this.MusicRecords[x].album;
    			};
    		};
            return null;
     };

	MusicRecords.prototype.updateMe = function (callback, errorCallback) {
		console.log("update called");
		return MusicRecords.update(
			{id:this._id.$oid},
			angular.extend({}, this, {_id:undefined}),
			callback,
			errorCallback);
	};

	MusicRecords.prototype.remove = function (cb, errorcb) {
		return MusicRecords.remove({id:this._id.$oid}, cb, errorcb);
	};

	MusicRecords.prototype['delete'] = function (cb, errorcb) {
		return this.remove(cb, errorcb);
	};

	return MusicRecords;


	// return { a: 2 };
});
