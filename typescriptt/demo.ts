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

for(let i=1;i<=5;i++)
{
setTimeout(function(){console.log(i);},1000)
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
        
       setTimeout(() => {console.log(this.id)},2000); 
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

let colorArray=['Orange','Yellow','Indigo'];

displayColors(message, ...colorArray);
displayColors('Red');
displayColors('Red','Blue');
displayColors('Red','Blue','Green');


