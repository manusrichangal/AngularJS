function greetPerson(name: string)
{
    let greet;
    if(name === "Manusri"){
        greet="Hello Manu";
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
    greet : function(){

    }
}