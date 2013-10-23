/**
 * @author Mike
 */


describe("mycontrollertest", function() {'use strict';
    var $mockScope = null;
    var pc = null;
    var $dialog = null;

    beforeEach(inject(function($rootScope, $controller) {
        $mockScope = $rootScope.$new();
        pc = $controller('NPCController', { $scope: $mockScope, $dialog: $dialog }); 
    }));

    it("TestNP-Cname", function() {
        //expect($mockScope.hint).toEqual("This is my hint");
        expect($mockScope.npcs[0].name).toEqual("Lucy");
    });
    
    it("TestNPC-hitPoints", function() {
        //expect($mockScope.hint).toEqual("This is my hint");
        expect($mockScope.npcs[0].hitPoints).toEqual(25);
    });
    
    it("TestNPC-health", function() {
        //expect($mockScope.hint).toEqual("This is my hint");
        expect($mockScope.npcs[0].health).toEqual(32);
    });
    
    it("TestNPC-totalMoves", function() {
        //expect($mockScope.hint).toEqual("This is my hint");
        expect($mockScope.npcs[0].totalMoves).toEqual(0);
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