// console.log("Hello world");

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

// const friends = ["Anik", "Asraful", "Rayhan"];
// console.log(friends); // ['Anik', 'Asraful', 'Rayhan']

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

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];

const [, num2, , , num5, num6, , num8] = numbers;
console.log(num2);
console.log(num5);
console.log(num6);
console.log(num8);
*/

// Nested Array :
/*
const numbers = [1, 2, 3, 4, 5, [6, 7, 8, 9]];
// const six = numbers[5];
// console.log(six); //  [6, 7, 8, 9]
// const eight = six[2];
// console.log(eight); // 8

// destructuring
const [one, two, three, four, five, [six, seven, eight, nine]] = numbers;
console.log(one);
console.log(three);
console.log(six);
console.log(two);
console.log(nine);
*/

// Rest Parameter:

// Note : rest parameter always use last element
/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const [num1, num2, ...rest] = numbers;
console.log(num1); // 1
console.log(num2); // 2
console.log(rest); // [3, 4, 5, 6, 7, 8]
*/

// Spread Parameterr :

/*
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8]
const copyNumbers = [...numbers];
console.log(copyNumbers); // [1, 2, 3, 4, 5, 6, 7, 8]

console.log(numbers === copyNumbers); // false
*/
// note: when we use spread operater , spread opareter return new value

// Destructuring use cases in JavaScript :
// how to swap values with destructuring
// let sad = "😔";
// let happy = "🙂";
// [happy, sad] = [sad, happy];
// console.log(happy); // "😔"
// console.log(sad); // "🙂"

// let num1 = 1;
// let num2 = 2;
// [num2, num1] = [num1, num2];
// console.log(num1); // 2
// console.log(num2); // 1

// how to merge arrays
// const emotion = ["🙂", "😔"];
// const veggies = ["🥦", "🥒", "🌽", "🥕"];

// const emotionVeggies = [emotion, veggies];
// console.log(emotionVeggies); // (2) [Array(2), Array(4)]
// const emotionVeggies2 = [...emotion, ...veggies];
// console.log(emotionVeggies2); // ['🙂', '😔', '🥦', '🥒', '🌽', '🥕']

// Array Length Property :

/*
const array1 = [1, 2, 3, 4, 5];
const array2 = new Array(5);

console.log(array1); // [1, 2, 3, 4, 5]
console.log(array2); //  [empty × 5]

// array maximum length  2 ** 32; // 4294967296
// array lenght can't negetive number

const array3 = [1, 2, 3, 4, 5];
console.log(array3.length); // 5
array3.length = 2;
console.log(array3.length); // 2
console.log(array3); //  [1, 2]
array3.length = 0;
console.log(array3.length); // 0
console.log(array3); // []


// Non-Modifiable Length Property
{
    const ages = [21, 12, 73, 41, 67];
    Object.defineProperty(ages, "length", { writable: false });
    ages[5] = 6; 
    ages.push(5); 
  }
*/

// concat () method :
/*
const num1 = [1, 2, 3, 4, 5];
const num2 = [6, 7, 8, 9, 10];
const num3 = [11, 12, 13, 14, 15];

const merge = num1.concat(num2);
console.log(merge); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const mergeAgain = num1.concat(num2, num3);
console.log(mergeAgain); //  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
*/

/*
// join () method :
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers); // [1, 2, 3, 4, 5, 6]
const join = numbers.join();
console.log(join); // 1,2,3,4,5,6
const joinAgain = numbers.join("$ ");
console.log(joinAgain); // 1$ 2$ 3$ 4$ 5$ 6

// Note : when we use join method in empty array then join method always return empty string ('')
//  Exmple :
console.log([].join("$")); //  ''
*/

