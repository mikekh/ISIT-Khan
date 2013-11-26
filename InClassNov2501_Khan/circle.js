


angular.module('CircleMod', [])
.factory('circleFactory', function() {
	console.log('circle factory called');
	
	return {
		getAreaOfCircle: function(radius){
		 return  3.14 * radius * radius; 
		},
		getCumferenceOfCircle : function(radius){
			return 3.14 * radius * 2;
		}
	};

});