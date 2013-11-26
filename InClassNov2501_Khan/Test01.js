describe("Area Tests", function() {'use strict';

    var circle = null;

    beforeEach(function() {
        module('CircleMod');
    });

    beforeEach(inject(function($injector) {
        circle = $injector.get('circleFactory');
    }));

    it("Get Circle Area", function() {
        expect(circle.getAreaOfCircle(3)).toEqual(28.259999999999998);
    });
    
    it("Get Circle Cumference", function() {
        expect(circle.getCumferenceOfCircle(3)).toEqual(18.84);
    });
});


describe("Tringle Tests", function() {'use strict';

    var triangle = null;

    beforeEach(function() {
        module('TriangleMod');
    });

    beforeEach(inject(function($injector) {
        triangle = $injector.get('triangleFactory');
    }));

    it("Get Triangle Long side", function() {
        expect(triangle.getLongSide(3, 4)).toEqual(5);
    });

});
