/**
 * @author MIKE
 */

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