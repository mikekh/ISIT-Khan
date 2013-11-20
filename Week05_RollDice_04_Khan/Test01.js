/**
 * @author  Charlie Calvert
 */

describe("diecontrollertest", function() {'use strict';
	var diceRolls = null;	

	beforeEach(module('mikeApp'));

	beforeEach(inject(function($rootScope, $controller) {
		diceRolls = $rootScope.$new();
		$controller('diceRolls', { $scope : diceRolls });
	}));

	it("TestD6", function() {
		for (var i = 0; i <= 250; i++) {			
			diceRolls.setDiceRolls(1, 6);
			expect(diceRolls.total).toBeLessThan(7);
			expect(diceRolls.total).toBeGreaterThan(0);
		};
	});
	
	beforeEach(inject(function($rootScope, $controller) {
		diceRolls = $rootScope.$new();
		$controller('diceRolls', { $scope : diceRolls });
	}));
	
	it("Test2D6", function() {
		for (var i = 0; i <= 500; i++) {			
			diceRolls.setDiceRolls(2, 6);
			expect(diceRolls.total).toBeLessThan(13);
			expect(diceRolls.total).toBeGreaterThan(0);
		};
	});
	
	beforeEach(inject(function($rootScope, $controller) {
		diceRolls = $rootScope.$new();
		$controller('diceRolls', { $scope : diceRolls });
	}));
	
	it("Test3D6", function() {
		for (var i = 0; i <= 750; i++) {			
			diceRolls.setDiceRolls(1, 6);
			expect(diceRolls.total).toBeLessThan(19);
			expect(diceRolls.total).toBeGreaterThan(0);
		};
	});
	
	beforeEach(inject(function($rootScope, $controller) {
		diceRolls = $rootScope.$new();
		$controller('diceRolls', { $scope : diceRolls });
	}));
	
	it("TestD4", function() {
		for (var i = 0; i <= 250; i++) {			
			diceRolls.setDiceRolls(1, 4);
			expect(diceRolls.total).toBeLessThan(5);
			expect(diceRolls.total).toBeGreaterThan(0);
		};
	});
	
	beforeEach(inject(function($rootScope, $controller) {
		diceRolls = $rootScope.$new();
		$controller('diceRolls', { $scope : diceRolls });
	}));
	
	it("TestD10", function() {
		for (var i = 0; i <= 1250; i++) {			
			diceRolls.setDiceRolls(1, 10);
			expect(diceRolls.total).toBeLessThan(11);
			expect(diceRolls.total).toBeGreaterThan(0);
		};
	});
	
	beforeEach(inject(function($rootScope, $controller) {
		diceRolls = $rootScope.$new();
		$controller('diceRolls', { $scope : diceRolls });
	}));
	
	it("TestD20", function() {
		for (var i = 0; i <= 2250; i++) {			
			diceRolls.setDiceRolls(1, 20);
			expect(diceRolls.total).toBeLessThan(21);
			expect(diceRolls.total).toBeGreaterThan(0);
		};
	});
});

(function() {'use strict';
	var jasmineEnv = jasmine.getEnv();
	jasmineEnv.updateInterval = 1000;

	var reporter = new jasmine.HtmlReporter();

	jasmineEnv.addReporter(reporter);

	jasmineEnv.specFilter = function(spec) {
		return reporter.specFilter(spec);
	};

	var currentWindowOnload = window.onload;

	window.onload = function() {
		if (currentWindowOnload) {
			currentWindowOnload();
		}
		execJasmine();
	};

	function execJasmine() {
		jasmineEnv.execute();
	}

})();

/*describe('MainCtrl', function(){
 var scope;//we'll use this scope in our tests

 //mock Application to allow us to inject our own dependencies
 beforeEach(angular.mock.module('Application'));
 //mock the controller for the same reason and include $rootScope and $controller
 beforeEach(angular.mock.inject(function($rootScope, $controller){
 //create an empty scope
 scope = $rootScope.$new();
 //declare the controller and inject our empty scope
 $controller('MainCtrl', {$scope: scope});
 });
 // tests start here
 });
 */
