console.log('Hello world');
let message = 'Hello World';
console.log(message);
console.log("hi");

let x = 10;
const title = 'angular 7';
console.log(title);
let isBeginner: boolean = true;
let total: number = 10;
let name: string = 'Manusri';
let sentence: string = `My name is ${name} I am a beginner in Typescript at a pace ${total}`;
console.log(sentence);

let n: null = null;
let u: undefined = undefined;

let isNew: Boolean = null;
let myName: String = undefined;

let list1: number[] = [1, 2, 3];
let list2: Array<number> = [1, 2, 3];

let person1: [string, number] = ['Sonu', 22];

enum color { red=9, green, blue };

let c: color = color.green;
console.log(c);

let randomvalue: any = 10;
randomvalue = true;
randomvalue = 'Manusri';

let a;
a = 10;
a = true;

let b = 10;

let multitype : number | boolean;
multitype = 10;
multitype = true;

let anytype: any;
anytype = 20;
anytype = true;

function add(num1: number, num2: number=10):number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}

console.log(add(5, 10));
console.log(add(5));

function add1(num1: number, num2?: number): number {
    if (num2)
        return num1 + num2;
    else
        return num1;
}

console.log(add1(5, 10));
console.log(add1(5));
