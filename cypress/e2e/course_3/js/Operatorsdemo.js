let x=10,y=20;

// Arithmetic operators  + - * / % **  ++ --
console.log(x+y);//30
console.log(y-x);
console.log(x*y);
console.log(y%x); //0
console.log(y/x); //2
console.log(5**2);//25

//x=x+1;
//x++; //post increment
++x; //pre-increment
console.log(x);//11

y=20;
//y=y-1;
//y--; //post decrement
--y; //pre-decrement
console.log(y);//19

//Assignment operators

x=100;
y=50
console.log(x); //100

x+=y;  //x=x+y;
console.log(x);//150

console.log(x-=y); //x=x-y
console.log(x*=y); // x=x*y
console.log(x/=y); // x=x/y
console.log(x%=y); // x=x%y

//Relational/comparison operators
//always return a boolean value true/false
//< >  <=  >= !=
x=10;
y=20;

console.log(x>y); //false
console.log(x<y); //true

console.log(x>=y); //false
console.log(x<=y); //true

console.log(x!=y);

//ternary operator   ?
console.log(x<y?x:y); //return x value 10
console.log(y>x?y:x); //return y value 20

//Logical operators
// && || !

let a=true;
let b=false;

console.log(a && b); //false
console.log(a || b); 
console.log(!a);









