//Creating Date Objects -There are 4 ways to create a new date object:

let d=new Date();
console.log(d);

d = new Date(2020, 1, 29, 10, 30, 20, 0);//year, month, day, hour, minute, second, and millisecond 
console.log(d); //JavaScript counts months from 0 to 11.

//Date Object Methods
d=new Date();

console.log(d.getDate()); //Returns the day of the month (from 1-31)
console.log(d.getMonth()); //Returns the day of the month (from 1-31)
console.log(d.getFullYear()); //Returns the year

console.log(d.getDate()+"-"+d.getMonth()+1+"-"+d.getFullYear());

console.log(d.getHours());  //0-23
console.log(d.getMinutes());  //0-59
console.log(d.getSeconds()); //0-59

console.log(d.getHours()+":"+d.getMinutes()+":"+d.getSeconds());



