/**
 * @author Charlie
 */

describe("mycontrollertest", function() {'use strict';
    var myController = null;    
    var $httpBackend = null;
    
    beforeEach(function() {
        module("mikeTestApp");
    });
    
    beforeEach(inject(function($rootScope, $controller) {        
        myController = $rootScope.$new();
        $controller('MyController', { $scope: myController }); 
    }));
    
    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));
    
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

    it("Test DB hint", function() {
        expect(myController.hint).toEqual("<p>Start with <strong>node server.js</strong> to retrieve JSON from Server</p>");
    });    
    
    it("Hero DB name Test", function() {
        //$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/Foo?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/mydatabase/collections/heros?apiKey=A6kZnZN14asztvoFCTSZ3yji_4FHHkob')
        .respond([
            {name: "HeroFromDB", 
            health: 20, 
            hitPoints: 20, 
            damage: 2 },
          ]);
          
        myController.loadHeros();
        $httpBackend.flush();
        expect(myController.heros[0].name).toEqual('HeroFromDB');
    });
    
    it("Hero DB health Test", function() {
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/mydatabase/collections/heros?apiKey=A6kZnZN14asztvoFCTSZ3yji_4FHHkob')
        .respond([
            {name: "HeroFromDB", 
            health: 20, 
            hitPoints: 20, 
            damage: 2 },
          ]);
          
          
        myController.loadHeros();
        $httpBackend.flush();
        expect(myController.heros[0].health).toEqual(20);
    });
    
    it("Hero DB hitPoints Test", function() {
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/mydatabase/collections/heros?apiKey=A6kZnZN14asztvoFCTSZ3yji_4FHHkob')
        .respond([
            {name: "HeroFromDB", 
            health: 20, 
            hitPoints: 20, 
            damage: 2 },
          ]);
          
          
        myController.loadHeros();
        $httpBackend.flush();
        expect(myController.heros[0].hitPoints).toEqual(20);
    });
    
    it("Hero DB damage Test", function() {
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/mydatabase/collections/heros?apiKey=A6kZnZN14asztvoFCTSZ3yji_4FHHkob')
        .respond([
            {name: "HeroFromDB", 
            health: 20, 
            hitPoints: 20, 
            damage: 2 },
          ]);
          
          
        myController.loadHeros();
        $httpBackend.flush();
        expect(myController.heros[0].damage).toEqual(2);
    });
});

