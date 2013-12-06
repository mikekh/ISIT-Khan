
angular.module('bookMod', [])
.factory('bookFactory', function($http) {
	
	console.log('bookFactory called');

    return {
    	
    	bookData : 
    	[
    		{
				"author": "Charlie Calvert", 
				"title": "Delphi 4 Unleashed"
			},
			{
				"author": "Leo Tolstoy", 
				"title": "War and Peace"
			},
			{
				"author": "Victor Hugo", 
				"title": "Les Miserables"
			},
			{
				"author": "George Bernard Shaw", 
				"title": "The Black Girl in Search of God"
			},
			{
				"author": "Mark Twain", 
				"title": "Roughing It"
			}
    	],
  	
    	getAuthorFromBook : function(bookName) {
    		console.log('getAuthorFromBook called');
    		
    		for (x in this.bookData){
    			if (this.bookData[x].title == bookName){
    				console.log("Found the Author");
    				return this.bookData[x].author;
    			};
    		};
            return null;
        },

        getBookFromAuthor : function(authorName) {
            console.log('getBookFromAuthor called');
    		
    		for (x in this.bookData){
    			if (this.bookData[x].author == authorName){
    				console.log("Found a Book");
    				return this.bookData[x].title;
    			};
    		};
            return null;
        }
    };
});

