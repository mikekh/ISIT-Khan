/**
 * @author Charlie Calvert
 */

/* global angular */

angular.module('mongoModule', ['ngResource'])
.constant('CONFIG', {
	DB_NAME: 'mydatabase',
	COLLECTION: 'bookDB',
	API_KEY: 'A6kZnZN14asztvoFCTSZ3yji_4FHHkob'
})
.factory('mongoData', function($resource, CONFIG) { 'use strict';
	console.log('mongoData factory called');

	var BookRecords = $resource(
		'https://api.mongolab.com/api/1/databases/' + CONFIG.DB_NAME +
		'/collections/' + CONFIG.COLLECTION + '/:id', {
		apiKey: CONFIG.API_KEY
	},
	{
		update: {method:'PUT'}
	});
	
	BookRecords.prototype.getAuthorFromTitle = function(title) {
    		console.log('getAuthorFromTitle called');
    		
    		for (x in this.BookRecords){
    			if (this.BookRecords[x].title == title){
    				console.log("Found the Author");
    				return this.BookRecords[x].author;
    			};
            };  
            return null;
       };

     BookRecords.prototype.getTitleFromAuthor = function(author) {
            console.log('getAlbumFromMusician called');
    		
    		for (x in this.BookRecords){
    			if (this.BookRecords[x].author == author){
    				console.log("Found a Book");
    				return this.BookRecords[x].title;
    			};
    		};
            return null;
     };

	BookRecords.prototype.updateMe = function (callback, errorCallback) {
		console.log("update called");
		return BookRecords.update(
			{id:this._id.$oid},
			angular.extend({}, this, {_id:undefined}),
			callback,
			errorCallback);
	};

	BookRecords.prototype.remove = function (cb, errorcb) {
		return BookRecords.remove({id:this._id.$oid}, cb, errorcb);
	};

	BookRecords.prototype['delete'] = function (cb, errorcb) {
		return this.remove(cb, errorcb);
	};

	return BookRecords;


	// return { a: 2 };
});
