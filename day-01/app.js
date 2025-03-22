console.log("Hello world");

// How to create Array in Javascript
/*
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers); // [1, 2, 3, 4, 5, 6];
*/

/*
const friends = ["Anik", "Asraful", "Rayhan"];
console.log(friends); // ['Anik', 'Asraful', 'Rayhan']
*/

// When we create Array with constractor and we pass one element, new Array array give me which number give me blank element
/*
const blankElement = new Array(10);
console.log(blankElement); // (10) [empty × 10]
*/

/*
// Get Array Element :
// access rules
// Array[index]

const numbers = [1, 2, 3, 4, 5, 6];

// how to check number of element in numbers
console.log(numbers.length); // 6
// Note : javascript index always start 0
console.log(numbers[0]); // 1
console.log(numbers[3]); // 4
console.log(numbers[numbers.length - 1]); // 6
*/

/*
// Add Element in Array :
const numbers = [1, 2, 3, 4, 5, 6];
// add last element
numbers.push(7);
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7]
// note : array.push method return array length (total 7 element)

// add first element
numbers.unshift(0);
console.log(numbers); // [0, 1, 2, 3, 4, 5, 6, 7] and return total number of element - 8
*/

/*
// Remove Array Element
const numbers = [1, 2, 3, 4, 5, 6];
// remove last element
numbers.pop();
console.log(numbers); // [1, 2, 3, 4, 5]
// Note : array.pop() return element thats means - 6

// remove first element
numbers.shift();
console.log(numbers); // [2, 3, 4, 5]
// Note : Array.shift method return element , thats means 1

*/

/*
// Copy OR Clone
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers); //  [1, 2, 3, 4, 5, 6]
const numbersCopy = numbers.slice();
console.log(numbersCopy); //  [1, 2, 3, 4, 5, 6]
console.log(numbers === numbersCopy); //  false 
*/

/*
// Determine :
// How to check array is Array or Not
const numbers = [1, 2, 3, 4, 5, 6];
console.log(Array.isArray(numbers)); // True
console.log(Array.isArray("Sonatan")); // false
console.log(Array.isArray(10)); // false
console.log(Array.isArray([])); // True
*/

// Array Destructuring in JavaScript

const friends = ["Anik", "Asraful", "Rayhan"];
console.log(friends); // ['Anik', 'Asraful', 'Rayhan']

/*
const anik = friends[0];
const asraful = friends[1];
const rayhan = friends[2];
console.log(anik, asraful, rayhan); // Anik Asraful Rayhan


const [anik, asraful, rayhan] = friends;
console.log(anik, asraful, rayhan); // Anik Asraful Rayhan
*/

/*
// Assgin a default value :
const [name1, name2 = "mushrum"] = ["tomato"];
console.log(name1, name2);
*/

// Skip a value in Array Destructuring :

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const [, num2, , , num5, num6, , num8] = numbers;
console.log(num2);
console.log(num5);
console.log(num6);
console.log(num8);
