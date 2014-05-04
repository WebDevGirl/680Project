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
        _input_value += value;
        return _input_value
    },
};

Calculator.method = {
    init: function init() {
       _current = "add";
    },
    current: function current() {
        return _current;
    },
};
 
Calculator.calc.init();

