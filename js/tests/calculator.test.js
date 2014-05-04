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
        expect(testfunc.equal()).toEqual(0);
    });

    /* ADD() */ 
    describe("Add() ::", function() {
        it("Zero and One Should Be One", function(){
        testfunc.add(1);
            expect(testfunc.equal()).toEqual(1);
        });

        it("One and One Should Be Two", function(){
            testfunc.add(1);
            testfunc.add(1);
            expect(testfunc.equal()).toEqual(2);
        });

        it("One and One And One Should Be Three", function(){
            testfunc.add(1);
            testfunc.add(1);
            testfunc.add(1);
            expect(testfunc.equal()).toEqual(3);
        });

        it("Zero and Neg One Should Be Neg One", function(){
            testfunc.add(-1);
            expect(testfunc.equal()).toEqual(-1);
        });

        it("Neg One and One Should Be Zero", function(){
            testfunc.add(-1);
            testfunc.add(1);
            expect(testfunc.equal()).toEqual(0);
        });

        it("One and Neg One Should Be Zero", function(){
            testfunc.add(1);
            testfunc.add(-1);
            expect(testfunc.equal()).toEqual(0);
        });

        it("Two and Three Should Be Five", function(){
            testfunc.add(2);
            testfunc.add(3);
            expect(testfunc.equal()).toEqual(5);
        });

        it("Three and Two Should Be Five", function(){
            testfunc.add(3);
            testfunc.add(2);
            expect(testfunc.equal()).toEqual(5);
        });
    }); // End Add()

    /* SUBTRACT() */ 
    describe("Subtract() ::", function() {
        it("Zero subtract One Should Be Neg One", function(){
        testfunc.subtract(1);
            expect(testfunc.equal()).toEqual(-1);
        });

        it("Subtract One subtract One Should Be Zero", function(){
            testfunc.subtract(1);
            testfunc.subtract(1);
            expect(testfunc.equal()).toEqual(-2);
        });

        it("Subtract One subtract One subtract One Should Be Neg 3", function(){
            testfunc.subtract(1);
            testfunc.subtract(1);
            testfunc.subtract(1);
            expect(testfunc.equal()).toEqual(-3);
        });

        it("Zero subtract Neg One Should Be One", function(){
            testfunc.subtract(-1);
            expect(testfunc.equal()).toEqual(1);
        });

        it("Subtract Neg One subtract One Should Be Zero", function(){
            testfunc.subtract(-1);
            testfunc.subtract(1);
            expect(testfunc.equal()).toEqual(0);
        });

        it("Subtract One subtract Neg One Should Be Zero", function(){
            testfunc.subtract(1);
            testfunc.subtract(-1);
            expect(testfunc.equal()).toEqual(0);
        });

        it("Subtract Neg Two subtract Three Should Be Neg One", function(){
            testfunc.subtract(-2);
            testfunc.subtract(3);
            expect(testfunc.equal()).toEqual(-1);
        });

        it("Subtract Neg Three subtract Two Should Be One", function(){
            testfunc.subtract(-3);
            testfunc.subtract(2);
            expect(testfunc.equal()).toEqual(1);
        });
    }); // End Subtract()


});
