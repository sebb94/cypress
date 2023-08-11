let person=
{
firstname:"John",
lastname:"Kenedy",
age:50,
weight:60
}

//Accessing Object Properties
// console.log(person["firstname"])//John
// console.log(person.age);//50

//Add new property the existing object
person["height"]=5.5;  //person.height=5.5
console.log(person["height"]);//5.5

//Update existing property
person["weight"]=65;
console.log(person["weight"]);//65

//Remove the property from the object
delete person["age"];
console.log(person["age"]);//undefined

console.log("************** looping object******************");
//for/in loop
for(let x in person)
{
    //console.log(x);// prints only property names
    //console.log(person[x]);//prints only values of properties
    console.log(x+"  "+person[x]);

}