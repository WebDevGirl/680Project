describe("Calculator ::", function() {
    var testfunc = Calculator.calc;

    beforeEach(function(){
        spyOn(testfunc, 'init').andCallThrough();
    });
 
    afterEach(function() {
        testfunc.reset();
    });
 
    it("should be able to initialize", function() {
        expect(testfunc.init).toBeDefined();
        testfunc.init();
        expect(testfunc.init).toHaveBeenCalled();
    });
 
    it("Should init input_value to zero", function(){
        testfunc.init();
        expect(testfunc.input_value()).toEqual(0);
    });

    /* ADD() */ 
    describe("Add() ::", function() {
        it("Zero and One Should Be One", function(){
        testfunc.add(1);
            expect(testfunc.input_value()).toEqual(1);
        });

        it("One and One Should Be Two", function(){
            testfunc.add(1);
            testfunc.add(1);
            expect(testfunc.input_value()).toEqual(2);
        });
    });
});
