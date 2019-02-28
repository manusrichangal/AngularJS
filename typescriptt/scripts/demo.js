"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var j = 1000;
var _loop_1 = function (i) {
    setTimeout(function () { console.log(i); }, j);
    j = j + 1000;
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
        setTimeout(function () { console.log(_this.id); }, 1000);
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
displayColors(message, 'Red');
displayColors(message, 'Red', 'Blue');
displayColors(message, 'Red', 'Blue', 'Green');
var colorArray = ['Orange', 'Yellow', 'Indigo'];
displayColors.apply(void 0, [message].concat(colorArray));
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
var arr = ["Chandler", "Bing", "Male"];
var fname = arr[0], el = arr.slice(1);
console.log(fname);
console.log(el);
//console.log(gender);
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
var person1 = /** @class */ (function () {
    function person1(name) {
        this.name = name;
        console.log(this.name + " " + "Construtor - Construtor Method");
    }
    person1.staticMethod = function (a) {
        console.log(a + " " + "I am a Static Method - Static Method");
    };
    person1.prototype.greetPerson = function (b) {
        console.log(b + " " + this.name + " " + "-Prototype Method");
    };
    person1.prototype.getID = function () {
        return 10;
    };
    return person1;
}());
var p1 = new person1("Manu");
person1.staticMethod("hi");
p1.greetPerson("Hello");
var child1 = /** @class */ (function (_super) {
    __extends(child1, _super);
    function child1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    child1.prototype.greetChild = function () {
        console.log(this.name + " " + "I am a prototype method CHILD");
    };
    child1.prototype.getID = function () {
        return _super.prototype.getID.call(this);
    };
    return child1;
}(person1));
var c1 = new child1("Sonu");
c1.greetChild();
console.log(c1.getID());
var info;
info = "hi";
info = 10;
info = true;
console.log(info);
var eyeColor;
(function (eyeColor) {
    eyeColor[eyeColor["brown"] = 10] = "brown";
    eyeColor[eyeColor["black"] = 20] = "black";
    eyeColor[eyeColor["blue"] = 30] = "blue";
})(eyeColor || (eyeColor = {}));
;
var myeyeColor = eyeColor.blue;
console.log(myeyeColor);
console.log(eyeColor[myeyeColor]);
var myTup = ["tuple", 878];
console.log(myTup[0]);
console.log(myTup[1]);
//# sourceMappingURL=demo.js.map