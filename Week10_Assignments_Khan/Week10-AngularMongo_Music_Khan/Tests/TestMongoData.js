/**
 * @author Mike Khan
 */

describe("DB Music tests", function() {'use strict';
    var mainController = null;    
    var $httpBackend = null;
    
    beforeEach(function() {
        module("mainModule");
        module("mongoModule");
    });
    
    beforeEach(inject(function($rootScope, $controller) {        
        mainController = $rootScope.$new();
        $controller('mainController', { $scope: mainController }); 
    }));
    
    beforeEach(inject(function(_$httpBackend_) {
        $httpBackend = _$httpBackend_;
    }));
    
    afterEach(function() {
        $httpBackend.verifyNoOutstandingExpectation();
        $httpBackend.verifyNoOutstandingRequest();
    });

  
    
    it("Find Musicain test: ", function() {
        //$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/address?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/mydatabase/collections/musicDB?apiKey=A6kZnZN14asztvoFCTSZ3yji_4FHHkob')
        .respond([
            {musician: "Beatles", album: "Yellow Submarine"},
            {musician: "Jefferson Starship", album: "Red Octopus"},
            {musician: "The Doors", album: "L.A. Woman"},
            {musician: "Jimi Hendrix", album: "Kiss the Sky"},
            {musician: "Carlos Santana", album: "Shaman"}
          ]);
        mainController.loadData();
        $httpBackend.flush();
        expect(mainController.dataDB[0].musician).toEqual('Beatles');
    });
    
    it("Find Album test: ", function() {
        //$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/address?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/mydatabase/collections/musicDB?apiKey=A6kZnZN14asztvoFCTSZ3yji_4FHHkob')
        .respond([
            {musician: "Beatles", album: "Yellow Submarine"},
            {musician: "Jefferson Starship", album: "Red Octopus"},
            {musician: "The Doors", album: "L.A. Woman"},
            {musician: "Jimi Hendrix", album: "Kiss the Sky"},
            {musician: "Carlos Santana", album: "Shaman"}
          ]);
        mainController.loadData();
        $httpBackend.flush();
        expect(mainController.dataDB[0].album).toEqual('Yellow Submarine');
    });
    
    
    it("Find Musicain test: ", function() {
        //$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/address?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/mydatabase/collections/musicDB?apiKey=A6kZnZN14asztvoFCTSZ3yji_4FHHkob')
        .respond([
            {musician: "Beatles", album: "Yellow Submarine"},
            {musician: "Jefferson Starship", album: "Red Octopus"},
            {musician: "The Doors", album: "L.A. Woman"},
            {musician: "Jimi Hendrix", album: "Kiss the Sky"},
            {musician: "Carlos Santana", album: "Shaman"}
          ]);
        mainController.loadData();
        $httpBackend.flush();
        expect(mainController.dataDB[1].musician).toEqual('Jefferson Starship');
    });
    
    it("Find Album test: ", function() {
        //$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/address?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/mydatabase/collections/musicDB?apiKey=A6kZnZN14asztvoFCTSZ3yji_4FHHkob')
        .respond([
            {musician: "Beatles", album: "Yellow Submarine"},
            {musician: "Jefferson Starship", album: "Red Octopus"},
            {musician: "The Doors", album: "L.A. Woman"},
            {musician: "Jimi Hendrix", album: "Kiss the Sky"},
            {musician: "Carlos Santana", album: "Shaman"}
          ]);
        mainController.loadData();
        $httpBackend.flush();
        expect(mainController.dataDB[1].album).toEqual('Red Octopus');
    });
    
        it("Find Musicain test: ", function() {
        //$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/address?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/mydatabase/collections/musicDB?apiKey=A6kZnZN14asztvoFCTSZ3yji_4FHHkob')
        .respond([
            {musician: "Beatles", album: "Yellow Submarine"},
            {musician: "Jefferson Starship", album: "Red Octopus"},
            {musician: "The Doors", album: "L.A. Woman"},
            {musician: "Jimi Hendrix", album: "Kiss the Sky"},
            {musician: "Carlos Santana", album: "Shaman"}
          ]);
        mainController.loadData();
        $httpBackend.flush();
        expect(mainController.dataDB[2].musician).toEqual('The Doors');
    });
    
    it("Find Album test: ", function() {
        //$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/address?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/mydatabase/collections/musicDB?apiKey=A6kZnZN14asztvoFCTSZ3yji_4FHHkob')
        .respond([
            {musician: "Beatles", album: "Yellow Submarine"},
            {musician: "Jefferson Starship", album: "Red Octopus"},
            {musician: "The Doors", album: "L.A. Woman"},
            {musician: "Jimi Hendrix", album: "Kiss the Sky"},
            {musician: "Carlos Santana", album: "Shaman"}
          ]);
        mainController.loadData();
        $httpBackend.flush();
        expect(mainController.dataDB[2].album).toEqual('L.A. Woman');
    });
    
        it("Find Musicain test: ", function() {
        //$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/address?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/mydatabase/collections/musicDB?apiKey=A6kZnZN14asztvoFCTSZ3yji_4FHHkob')
        .respond([
            {musician: "Beatles", album: "Yellow Submarine"},
            {musician: "Jefferson Starship", album: "Red Octopus"},
            {musician: "The Doors", album: "L.A. Woman"},
            {musician: "Jimi Hendrix", album: "Kiss the Sky"},
            {musician: "Carlos Santana", album: "Shaman"}
          ]);
        mainController.loadData();
        $httpBackend.flush();
        expect(mainController.dataDB[3].musician).toEqual('Jimi Hendrix');
    });
    
    it("Find Album test: ", function() {
        //$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/address?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/mydatabase/collections/musicDB?apiKey=A6kZnZN14asztvoFCTSZ3yji_4FHHkob')
        .respond([
            {musician: "Beatles", album: "Yellow Submarine"},
            {musician: "Jefferson Starship", album: "Red Octopus"},
            {musician: "The Doors", album: "L.A. Woman"},
            {musician: "Jimi Hendrix", album: "Kiss the Sky"},
            {musician: "Carlos Santana", album: "Shaman"}
          ]);
        mainController.loadData();
        $httpBackend.flush();
        expect(mainController.dataDB[3].album).toEqual('Kiss the Sky');
    });
    
        it("Find Musicain test: ", function() {
        //$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/address?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/mydatabase/collections/musicDB?apiKey=A6kZnZN14asztvoFCTSZ3yji_4FHHkob')
        .respond([
            {musician: "Beatles", album: "Yellow Submarine"},
            {musician: "Jefferson Starship", album: "Red Octopus"},
            {musician: "The Doors", album: "L.A. Woman"},
            {musician: "Jimi Hendrix", album: "Kiss the Sky"},
            {musician: "Carlos Santana", album: "Shaman"}
          ]);
        mainController.loadData();
        $httpBackend.flush();
        expect(mainController.dataDB[4].musician).toEqual('Carlos Santana');
    });
    
    it("Find Album test: ", function() {
        //$httpBackend.expectGET('https://api.mongolab.com/api/1/databases/elvenlab01/collections/address?apiKey=qfSxFoUGHBA1EuUlqhux_op2fy6oF_wy')
        $httpBackend.expectGET('https://api.mongolab.com/api/1/databases/mydatabase/collections/musicDB?apiKey=A6kZnZN14asztvoFCTSZ3yji_4FHHkob')
        .respond([
            {musician: "Beatles", album: "Yellow Submarine"},
            {musician: "Jefferson Starship", album: "Red Octopus"},
            {musician: "The Doors", album: "L.A. Woman"},
            {musician: "Jimi Hendrix", album: "Kiss the Sky"},
            {musician: "Carlos Santana", album: "Shaman"}
          ]);
        mainController.loadData();
        $httpBackend.flush();
        expect(mainController.dataDB[4].album).toEqual('Shaman');
    });
    
    
});