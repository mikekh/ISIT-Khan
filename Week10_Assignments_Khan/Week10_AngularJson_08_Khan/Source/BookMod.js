
angular.module('bookMod', [])
.factory('bookFactory', function($http) {
	
	console.log('musicFactory called');

    return {

		getDataJson : function(){
			return $http.get('Data/book.json');
		},
  	
    	getAuthorFromBook : function(arryObjs, bookName) {
    		console.log('getAuthorFromBook called');
    		
    		for (x in arryObjs){
    			if (arryObjs[x].title == bookName){
    				console.log("Found the Author");
    				return arryObjs[x].author;
    			};
    		};
            return null;
        },

        getBookFromAuthor : function(arryObjs, authorName) {
            console.log('getBookFromAuthor called');
    		
    		for (x in arryObjs){
    			if (arryObjs[x].author == authorName){
    				console.log("Found a Book");
    				return arryObjs[x].title;
    			};
    		};
            return null;
        }
    };
});

