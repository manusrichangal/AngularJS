console.log('Hello world');
var message = 'Hello World';
console.log(message);
console.log("hi");
var x = 10;
var title = 'angular 7';
console.log(title);
var isBeginner = true;
var total = 10;
var name = 'Manusri';
var sentence = "My name is " + name + " I am a beginner in Typescript at a pace " + total;
console.log(sentence);
var n = null;
var u = undefined;
var isNew = null;
var myName = undefined;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
var person1 = ['Sonu', 22];
var color;
(function (color) {
    color[color["red"] = 9] = "red";
    color[color["green"] = 10] = "green";
    color[color["blue"] = 11] = "blue";
})(color || (color = {}));
;
var c = color.green;
console.log(c);
var randomvalue = 10;
randomvalue = true;
randomvalue = 'Manusri';
var a;
a = 10;
a = true;
var b = 10;
var multitype;
multitype = 10;
multitype = true;
var anytype;
anytype = 20;
anytype = true;
function add(num1, num2) {
    if (num2 === void 0) { num2 = 10; }
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add(5, 10));
console.log(add(5));
function add1(num1, num2) {
    if (num2)
        return num1 + num2;
    else
        return num1;
}
console.log(add1(5, 10));
console.log(add1(5));
//# sourceMappingURL=app.js.map