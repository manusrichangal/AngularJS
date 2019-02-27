"use strict";
var _a;
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
var fn = "M";
var ln = "C";
var p = {
    fn: fn,
    ln: ln
};
function CreatePerson(fn, ln, age) {
    var fullname = fn + " " + ln;
    return {
        fn: fn,
        ln: ln,
        fullname: fullname,
        isSenior: function () {
            return age > 60;
        }
    };
}
var pf = CreatePerson("R", "G", 62);
console.log(pf.fn);
console.log(pf.ln);
console.log(pf.fullname);
console.log(pf.isSenior());
//console.log(p.fn);
//console.log(p.ln);
var lnn = "last name";
var person = (_a = {
        "first name": "C"
    },
    _a[lnn] = "B",
    _a);
console.log(person);
var arr = ["Chandler", "Bing", "22"];
var x = arr[0], y = arr[1], g = arr[2];
console.log(x);
console.log(y);
console.log(g);
var colors = ['red', 'blue', 'green'];
for (var a_1 in colors) {
    console.log(colors[a_1]);
}
var colors1 = ['red1', 'blue1', 'green1'];
for (var _i = 0, colors1_1 = colors1; _i < colors1_1.length; _i++) {
    var color = colors1_1[_i];
    console.log(color);
}
var letters = "ABC";
for (var _b = 0, letters_1 = letters; _b < letters_1.length; _b++) {
    var letter = letters_1[_b];
    console.log(letter);
}
//# sourceMappingURL=demo.js.map