"use strict";
function greetPerson(name) {
    var greet;
    if (name === "Manusri") {
        greet = "Hello Manu";
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
    greet: function () {
    }
};
//# sourceMappingURL=demo.js.map