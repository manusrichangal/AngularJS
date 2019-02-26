"use strict";
function greetPerson(name) {
    var greet;
    if (name === "Manusri") {
        greet = "Hello Manusri";
    }
    else {
        greet = "Hi there";
    }
    console.log(greet);
}
greetPerson("Manusri");
var a = 1;
var b = 2;
if (a === 1) {
    var a = 10;
    var b_1 = 20;
    console.log(a);
    console.log(b_1);
}
console.log(a);
console.log(b);
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, 1000);
};
for (var i = 1; i <= 5; i++) {
    _loop_1(i);
}
var num1;
var num2 = 5;
console.log(num2);
var obj1 = {
    name: "ManSon"
};
console.log(obj1.name);
obj1.name = "SonMan";
console.log(obj1.name);
var getRegValue = function () {
    return 10;
};
console.log(getRegValue());
var getArrowValue = function (m, n) { return 11 * m * n; };
console.log(getArrowValue(5, 10));
console.log(typeof getArrowValue);
var employee = {
    id: 1,
    print: function () {
        var _this = this;
        setTimeout(function () { console.log(_this.id); }, 2000);
    }
};
employee.print();
var getValue = function (value, bonus) {
    if (value === void 0) { value = 10; }
    if (bonus === void 0) { bonus = value * 0.1; }
    console.log(value + bonus);
    console.log(arguments.length);
};
getValue();
getValue(20);
getValue(20, 30);
getValue(undefined, 30);
var displayColors = function (message) {
    var Colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        Colors[_i - 1] = arguments[_i];
    }
    console.log(message);
    console.log(Colors);
    console.log(arguments.length);
    for (var i in Colors) {
        console.log(Colors[i]);
    }
};
var message = "List of Colors";
var colorArray = ['Orange', 'Yellow', 'Indigo'];
displayColors.apply(void 0, [message].concat(colorArray));
displayColors('Red');
displayColors('Red', 'Blue');
displayColors('Red', 'Blue', 'Green');
//# sourceMappingURL=demo.js.map