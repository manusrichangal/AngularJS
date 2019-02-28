function greetPerson(name: string)
{
    let greet;
    if(name === "Manusri"){
        greet="Hello Manusri";
    }
    else{
        greet="Hi there";
    }
    console.log(greet);
    
    
}
greetPerson("Manusri");

var a=1;
var b=2;
if(a===1)
{
    var a=10;
    let b=20;
    console.log(a);
    console.log(b);
}
    console.log(a);
    console.log(b);
    let j =1000;
for(let i=1;i<=5;i++)
{
setTimeout(function(){console.log(i);},j)
j=j+1000;
}

let num1;
const num2=5;
console.log(num2);
const obj1={
    name :"ManSon"
};
console.log(obj1.name);
obj1.name="SonMan";
console.log(obj1.name);

var getRegValue = function(){
    return 10;
}
console.log(getRegValue());

var getArrowValue = (m:number,n:number) => 11*m*n;

console.log(getArrowValue(5,10));
console.log(typeof getArrowValue);

var employee ={
    id:1,
    print : function(){
        
       setTimeout(() => {console.log(this.id)},1000); 
    }
};
employee.print();

let getValue = function(value=10, bonus=value*0.1){
    console.log(value+bonus);
    console.log(arguments.length);
}
getValue();
getValue(20);
getValue(20,30);
getValue(undefined,30);


let displayColors = function(message, ...Colors){

    console.log(message);
    console.log(Colors);
    console.log(arguments.length);

    for(let i in Colors){
        console.log(Colors[i]);
    }
    
}
let message="List of Colors";

displayColors(message,'Red');
displayColors(message,'Red','Blue');
displayColors(message,'Red','Blue','Green');


let colorArray=['Orange','Yellow','Indigo'];

displayColors(message, ...colorArray);


let fn ="M";
let ln="C";

let p ={
    fn,
    ln
};

function CreatePerson(fn,ln, age){
let fullname =fn+" "+ln;
return {
    fn,
    ln,
    fullname,
    isSenior(){
        return age>60;
    }
};
}

let pf = CreatePerson("R","G",62);
console.log(pf.fn);
console.log(pf.ln);
console.log(pf.fullname);
console.log(pf.isSenior());


//console.log(p.fn);
//console.log(p.ln);

let lnn="last name"
let person={
    "first name": "C",
    [lnn]:"B"
};
console.log(person);


let arr=["Chandler","Bing","Male"];
let [fname,...el]=arr;

console.log(fname);
console.log(el);
//console.log(gender);

let colors=['red','blue','green'];
for(let a in colors){
    console.log(colors[a]);
}

let colors1=['red1','blue1','green1'];
for(let color of colors1){
    console.log(color);
}

let letters="ABC";
for(let letter of letters){
    console.log(letter);
}


class person1{
    constructor(name){
        this.name=name;
        console.log(this.name +" "+ "Construtor - Construtor Method");
        
    }
    static staticMethod(a){
        console.log(a +" "+"I am a Static Method - Static Method");
    }
    greetPerson(b){
        console.log(b+" "+this.name +" "+ "-Prototype Method");
    }

    getID(){
            return 10;
        
    }
}

let p1=new person1("Manu");
person1.staticMethod("hi");
p1.greetPerson("Hello");

class child1 extends person1{
greetChild(){
    console.log(this.name+" "+"I am a prototype method CHILD");
}
getID(){
    return super.getID();
}
}

let c1 = new child1("Sonu");
c1.greetChild();
console.log(c1.getID());

var info : any;

info = "hi";
info = 10;
info = true;

console.log(info);

enum eyeColor {brown=10, black=20, blue=30};

let myeyeColor=eyeColor.blue;
console.log(myeyeColor);
console.log(eyeColor[myeyeColor]);

let myTup :[string, number] =["tuple",8];
console.log(myTup[0]);
console.log(myTup[1]);



interface newperson{
    fnam:string;
    lnam:string;
    ag?:number;
}

let emp1 : newperson={
    fnam:"Soniya",
    lnam:"Srinivas",
    ag:17
}
let emp2 : newperson={
    fnam:"Sohan",
    lnam:"Srinivas",
}