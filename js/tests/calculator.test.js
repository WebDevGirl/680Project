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

        it("2.5 + 2 = 4.5", function(){
            testfunc.add(2.5);
            testfunc.add(2);
            expect(testfunc.equal()).toEqual(4.5);
        });

        it("2.5 + 2.5 = 0", function(){
            testfunc.add(2.5);
            testfunc.add(2.5);
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

        it("2.5 - 2 = .5", function(){
            testfunc.add(2.5);
            testfunc.subtract(2);
            expect(testfunc.equal()).toEqual(0.5);
        });

        it("2.5 - 2.5 = 0", function(){
            testfunc.add(2.5);
            testfunc.subtract(2.5);
            expect(testfunc.equal()).toEqual(0);
        });

    }); // End Subtract()
    
     /* MULTIPLY() */ 
    describe("Multiply() ::", function() {
        it("Zero times One is zero", function(){
            testfunc.multiply(1);
            expect(testfunc.equal()).toEqual(0);
        });

        it("Zero times One is zero", function(){
            testfunc.multiply(1);
            expect(testfunc.equal()).toEqual(0);
        });
        it("One times One is One", function(){
            testfunc.add(1);
            testfunc.multiply(1);
            expect(testfunc.equal()).toEqual(1);
        });

        it("Two times Two is Four", function(){
            testfunc.add(2);
            testfunc.multiply(2);
            expect(testfunc.equal()).toEqual(4);
        });

        it("Two times Neg Two is Neg Four", function(){
            testfunc.add(2);
            testfunc.multiply(-2);
            expect(testfunc.equal()).toEqual(-4);
        });

        it("Neg two times Two is Neg Four", function(){
            testfunc.add(2);
            testfunc.multiply(-2);
            expect(testfunc.equal()).toEqual(-4);
        });

        it("Neg Two times Neg Two is Four", function(){
            testfunc.add(-2);
            testfunc.multiply(-2);
            expect(testfunc.equal()).toEqual(4);
        });

        it("Two times Three Should Be 6", function(){
            testfunc.add(2);
            testfunc.multiply(3);
            expect(testfunc.equal()).toEqual(6);
        });

        it("Three times Two Should Be 6", function(){
            testfunc.add(3);
            testfunc.multiply(2);
            expect(testfunc.equal()).toEqual(6);
        });

        it("Three times Two times 10 Should Be 60", function(){
            testfunc.add(3);
            testfunc.multiply(2);
            testfunc.multiply(10);
            expect(testfunc.equal()).toEqual(60);
        });

        it("2.5 * 2 = 5", function(){
            testfunc.add(2.5);
            testfunc.multiply(2);
            expect(testfunc.equal()).toEqual(5);
        });

        it("2.5 * 2.5 = 6.25", function(){
            testfunc.add(2.5);
            testfunc.multiply(2.5);
            expect(testfunc.equal()).toEqual(6.25);
        });

    }); // End Multiply()

     /* DIVIDE() */ 
    describe("Divide() ::", function() {
        it("Zero divided by One is zero", function(){
            testfunc.divide(0);
            expect(testfunc.equal()).toEqual(0);
        });

        it("Zero divided by Zero is zero", function(){
            testfunc.divide(0);
            expect(testfunc.equal()).toEqual(0);
        });

        it("One divided by Zero is ERROR", function(){
            testfunc.add(1);
            expect( function(){ testfunc.divide(0); } ).toThrow(new Error("Can Not Divide By Zero"));
        });

        it("Zero divided by One is zero", function(){
            testfunc.divide(1);
            expect(testfunc.equal()).toEqual(0);
        });

        it("One divided by One is One", function(){
            testfunc.add(1);
            testfunc.divide(1);
            expect(testfunc.equal()).toEqual(1);
        });

        it("Two divided by Two is One", function(){
            testfunc.add(2);
            testfunc.divide(2);
            expect(testfunc.equal()).toEqual(1);
        });

        it("Two divided by Neg Two is Neg One", function(){
            testfunc.add(2);
            testfunc.divide(-2);
            expect(testfunc.equal()).toEqual(-1);
        });

        it("Neg two divided by Two is Neg One", function(){
            testfunc.add(2);
            testfunc.divide(-2);
            expect(testfunc.equal()).toEqual(-1);
        });

        it("Neg Two divided by Neg Two is One", function(){
            testfunc.add(-2);
            testfunc.divide(-2);
            expect(testfunc.equal()).toEqual(1);
        });

        it("Two divided by Three Should Be 0.6666666666666666", function(){
            testfunc.add(2);
            testfunc.divide(3);
            expect(testfunc.equal()).toEqual(0.6666666666666666);
        });

        it("Three divided by Two Should Be 6", function(){
            testfunc.add(3);
            testfunc.divide(2);
            expect(testfunc.equal()).toEqual(1.5);
        });
    }); // End Divide()
});
