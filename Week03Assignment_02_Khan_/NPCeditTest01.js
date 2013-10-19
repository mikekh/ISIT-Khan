/**
 * @author Charlie
 */

describe("mycontrollertest", function() {'use strict';
    var $mockScope = null;
    var pc = null;

    beforeEach(inject(function($rootScope, $controller) {
        $mockScope = $rootScope.$new();
        pc = $controller('NPCController', { $scope: $mockScope }); 
    }));

    it("TestNPCname", function() {
        //expect($mockScope.hint).toEqual("This is my hint");
        expect($mockScope.npcs[0].name).toEqual("Lucy");
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