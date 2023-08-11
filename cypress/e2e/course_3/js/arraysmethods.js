let fruits=["Banana", "Orange", "Apple", "Mango"];

//toString() & join()

console.log(fruits.toString()); //Banana,Orange,Apple,Mango
console.log(fruits.join("*")); //Banana*Orange*Apple*Mango

//pop()
fruits=["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop())
console.log(fruits)//[ 'Banana', 'Orange', 'Apple' ]

//push()
fruits=["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push("Kiwi"));//5
console.log(fruits); //[ 'Banana', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

//shift()
fruits=["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());//Banana
console.log(fruits);

//unshift()
fruits=["Orange", "Apple", "Mango"];
console.log(fruits.unshift("Lemon"));
console.log(fruits);

//Deleting elements from array
fruits=["Banana", "Orange", "Apple", "Mango"];
delete fruits[1];
console.log(fruits);

//conact() - joining/merging 2 or more arrays
let arr1=[10,20];
let arr2=["A","B","C"];
console.log(arr1.concat(arr2));//[ 10, 20, 'A', 'B', 'C' ]

let arr3=["x","y","z"];
console.log(arr1.concat(arr2,arr3));

//slice()
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1)); //[ 'Orange', 'Lemon', 'Apple', 'Mango' ]
console.log(fruits.slice(2)); //[ 'Lemon', 'Apple', 'Mango' ]

//sort()
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.sort()); //[ 'Apple', 'Banana', 'Lemon', 'Mango', 'Orange' ]

let nums=[100,500,200,800,300];
console.log(nums.sort()); //[ 100, 200, 300, 500, 800 ]

//reverse()
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log("Original array elements:"+fruits); //Banana,Orange,Lemon,Apple,Mango
fruits.reverse();
console.log("After reversing array elements are:"+fruits); //Mango,Apple,Lemon,Orange,Banana
