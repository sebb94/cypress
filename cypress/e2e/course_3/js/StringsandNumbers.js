let s="welcome";
//let s=new String();

//chatAt()
console.log(s.charAt(2)); //l

//concat()
console.log(s.concat(" to javascript programming"));//welcome to javascript programming
console.log(s.concat(" to javascript").concat(" programming")); //welcome to javascript programming

//replace()
s="welcome to javascript";
console.log(s.replace("javascript","java"));//welcome to java

//substring()
s="welcome";

console.log(s.substring(0,3));//wel
console.log(s.substring(3,7));//come

//toLowerCase() & toUpperCase()
s="WELcome";
console.log(s.toLowerCase());//welcome
console.log(s.toUpperCase());//WELCOME

//split()
s="welcome to javascript";
let arr=s.split(' ');

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

//trim()
s="    welcome   ";
console.log(s);
console.log(s.trim());

//Numbers
/////////////////////////////
//let x=100;
//let x= new Number(100);


let x=102; // Integer value
let y=102.7 // decimal
let z=10e2; //exponencial value

console.log(x,y,z);

//isInteger()
x=10;
y=1.8;
z="x";

console.log(Number.isInteger(x)); //true
console.log(Number.isInteger(y)); //false
console.log(Number.isInteger(z)); //false

//parseInt() - converts a string into number
s="12345";
console.log(typeof(s));//string
console.log(typeof(Number.parseInt(s)));//number

//parseFloat()
s="123.567";
console.log(typeof(s));//string
console.log(typeof(Number.parseFloat(s)));//number


//toString()
//let n=1234;
let n=12.34789;

console.log(typeof(n));//number
console.log(typeof(Number.toString(n)));//string
