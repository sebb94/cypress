let cars = ["Saab", "Volvo", "BMW"];
//let cars = new Array("Saab", "Volvo", "BMW");

//accessing array element
console.log(cars[0]);

//change array element
cars[0]="Opel";
console.log(cars[0]);

//Access the Full Array
console.log(cars);

//we can have variables of different types in the same Array.
let myarray1=[100,"welcome",10.5,true];
console.log(myarray1);

//we can have objects in an Array.
let person1={name:"John", age:30};
let person2={name:"David", age:40};
let myarray2=[person1,person2];
console.log(myarray2);
console.log(myarray2[1]);

//length of an array
let fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length); 

//Looping array elements
for(i=0;i<fruits.length;i++)
{
    console.log(fruits[i]);
}
//for of loop
for(ele of fruits)
{
    console.log(ele);
}


//Recognize an Array
console.log(typeof fruits); //The typeof operator returns object because a JavaScript array is an object.
console.log(Array.isArray(fruits));//true







//JavaScript Array Methods
//**************************************** */

let fruits = ["Banana", "Orange", "Apple", "Mango"];

//toString() & join()
console.log(fruits.toString());//converts an array to a string of (comma separated) array values.
console.log(fruits.join("*")); //It behaves just like toString(), but in addition you can specify the separator:

//pop() - Removes the last element ("Mango") from fruits.
//pop() method returns the value that was "popped out":
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.pop()); 
console.log(fruits);

//push() -The push() method adds a new element to an array (at the end):
//The push() method returns the new array length
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.push("Kiwi")); 
console.log(fruits);

//shift()- removes the first array element and "shifts" all other elements to a lower index
//The shift() method returns the string that was "shifted out":
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.shift());  // Removes the first element "Banana" from fruits

//unshift()- adds a new element to an array (at the beginning), and "unshifts" older elements
//The unshift() method returns the new array length.
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.unshift("Lemon"));    // Adds a new element "Lemon" to fruits

//Deleting Elements
fruits = ["Banana", "Orange", "Apple", "Mango"];
delete fruits[0];         // Changes the first element in fruits to empty item
console.log(fruits);

//concat() - method creates a new array by merging (concatenating) existing arrays:
let arr1 = [10, 20];
let arr2 = ["A", "B", "C"];
console.log(arr1.concat(arr2));   // Concatenates (joins)

let arr3 = ["X", "Y", "Z"];
console.log(arr1.concat(arr2, arr3));   // Concatenates arr1 with arr2 and arr3

//slice()-method slices out a piece of an array into a new array.
//The slice() method creates a new array. It does not remove any elements from the source array.
fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
console.log(fruits.slice(1));
console.log(fruits.slice(2));

//sort() Method
fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.sort());
let nums = [100, 500, 200, 150];
console.log(nums.sort());

//reverse()
//Note: this method will change the original array.
fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.reverse();
console.log(fruits);
