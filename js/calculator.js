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
        _value += parseInt(value);
        return _value
    },
    subtract: function subtract(value) {
        _value -=  parseInt(value);
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

