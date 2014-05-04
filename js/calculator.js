if (typeof Calculator == 'undefined') { Calculator = {}; }
 
Calculator.calc = {
    init: function init() {
       _value = 0;
       Calculator.method.init();
    },
    equal: function equal() {
       return _value;
    },
    reset: function reset() {
        _value = 0;
    },
    add: function add(value) {
        _value += parseFloat(value);
        return _value
    },
    subtract: function subtract(value) {
        _value -=  parseFloat(value);
        return _value
    },
    multiply: function multiply(value) {
        _value *=  parseFloat(value);
        return _value
    },
    divide: function divide(value) {
        if (value == 0 && _value != 0) throw new Error("Can Not Divide By Zero");
        if (value == 0 && _value == 0) return 0; 

        _value /=  parseFloat(value);
        return _value
    },
};

Calculator.method = {
    init: function init() {
       _current = "add";
    },
    get: function get() {
        return _current;
    },
    set: function set(value) {
        _current = value;
        return _current;
    },
};
 
Calculator.calc.init();

