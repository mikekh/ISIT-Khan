/**
 * @author Mike Khan
 */

describe("mycontrollertest", function() {'use strict';
    var myController = null;
    var $httpBackend = null;

    beforeEach(inject(function($rootScope, $controller) {
        myController = $rootScope.$new();
        $controller('MyController', { $scope: myController }); 
    }));
    
    beforeEach(inject(function(_$httpBackend_) {
		$httpBackend = _$httpBackend_;
	}));

    it("Test hint", function() {
        expect(myController.hint).toEqual("<p>Start with a web server such as <strong>node server.js</strong> to retrieve JSON from Server</p>");
    });  

    it("Test load json name", function() {
    	$httpBackend.expectGET('\Source\DataAccess\JSONdata\data.json').respond({ 
    		"name": "Json Tower",	
    		"health": 10,
    		"hitPoints": 10,
			"damage": 1
		});		
    	myController.loadJson();
    	$httpBackend.flush();
		expect(myController.data.name).toEqual("Json Tower");
    });
    
    it("Test load json health", function() {
    	$httpBackend.expectGET('\Source\DataAccess\JSONdata\data.json').respond({ 
    		"name": "Json Tower",	
    		"health": 10,
    		"hitPoints": 10,
			"damage": 1
		});		
    	myController.loadJson();
    	$httpBackend.flush();
		expect(myController.data.health).toEqual(10);
    });
    
    it("Test load json hitPoints", function() {
    	$httpBackend.expectGET('\Source\DataAccess\JSONdata\data.json').respond({
    		"name": "Json Tower",	
    		"health": 10,
    		"hitPoints": 10,
			"damage": 1
		});	
    	myController.loadJson();
    	$httpBackend.flush();
		expect(myController.data.hitPoints).toEqual(10);
    });
    
    it("Test load json damage", function() {
    	$httpBackend.expectGET('\Source\DataAccess\JSONdata\data.json').respond({
    		"name": "Json Tower",	
    		"health": 10,
    		"hitPoints": 10,
			"damage": 1
		});	
    	myController.loadJson();
    	$httpBackend.flush();
		expect(myController.data.damage).toEqual(1);
    });    
});
