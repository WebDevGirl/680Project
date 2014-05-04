if (typeof Calculator == 'undefined') { Calculator = {}; }
 
Calculator.calc = {
    init: function init() {
       _input_value = 0;
       Calculator.method.init();
    },
    input_value: function input_value() {
       return _input_value
    },
    reset: function reset() {
        _input_value = 0;
    },
    add: function add(value) {
        _input_value += parseInt(value);
        return _input_value
    },
    subtract: function subtract(value) {
        _input_value -=  parseInt(value);
        return _input_value
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

