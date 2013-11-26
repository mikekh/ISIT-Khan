
angular.module('TriangleMod', [])
.factory('triangleFactory', function() {
	console.log('triangle factory called');
	
	return {
		getLongSide: function(a, b){
		 var temp = (a * a) + (b * b);
		 return  Math.sqrt(temp); 
		}
	};

});