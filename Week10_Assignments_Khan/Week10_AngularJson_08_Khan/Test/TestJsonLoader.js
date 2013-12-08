/**
 * @author Mike Khan
 */

describe("JSON load tests", function() {'use strict';

    var music = null;
	var $httpBackend = null;
	var x = null;
	
    // Step 1: Create Module
    beforeEach(function() {
        module('musicMod');
    });
    
     beforeEach(inject(function(_$httpBackend_) {
		$httpBackend = _$httpBackend_;
	}));

    // Step 2: Retrieve factory
    beforeEach(inject(function($injector) {
        music = $injector.get('musicFactory');
    }));

    // Step 3: run Test on a method of the factory
    it("Test getMusicianFromAlbum()", function() {
    	$httpBackend.expectGET('\Data\music.json').respond([
            {musician: "Beatles", album: "Yellow Submarine"},
            {musician: "Jefferson Starship", album: "Red Octopus"},
            {musician: "The Doors", album: "L.A. Woman"},
            {musician: "Jimi Hendrix", album: "Kiss the Sky"},
            {musician: "Carlos Santana", album: "Shaman"}
          ]);
          
          
        //Charlie none of these work. At this point I dont konw what I am doing  
        expect((music.getDataJson())[0].musician).toEqual("Beatles");
        
        
        //expect(music.getDataJson().musician).toEqual("Beatles");
        //expect(music[0].musician).toEqual("Beatles");
        //expect(music.getMusicianFromAlbum(x, "Beatles")).toEqual(0);
    });
    
    //write more test after getting this to work
});






/*
describe("mycontrollertest", function() {'use strict';
    var myController = null;
    var $httpBackend = null;
    
    beforeEach(function() {
	    //module('myApp');
	    module('musicMod');
	 });

    beforeEach(inject(function($rootScope, $controller) {
        myController = $rootScope.$new();
        
        //NOTE: MyController is the actual controller in indexJSON.js
        $controller('MyController', { $scope: myController }); 
    }));
    
    beforeEach(inject(function(_$httpBackend_) {
		$httpBackend = _$httpBackend_;
	}));

    it("Test hint", function() {
        expect(myController.hint).toEqual("<p>Start with a web server such as <strong>node server.js</strong> to retrieve JSON from Server</p>");
    });  
 //C:\Users\Dell\Documents\Aptana Studio 3 Workspace\Week10_AngularJson\Data   
    it("Test load json getMusicianFromAlbum()", function() {
    	$httpBackend.expectGET('\Data\music.json').respond({ 
    		"musician": "Beatles", 
			"album": "Yellow Submarine"
		});		
    	myController.loadJson();
    	$httpBackend.flush();
		expect(myController.data.name).toEqual("Json Tower");
    });

});
*/