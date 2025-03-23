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

// fill () method :
// stracture
// fill(replace, source, target)
/*
const numbers = [1, 2, 3, 4, 5];
const replace = numbers.fill(0);
console.log(replace); // [0, 0, 0, 0, 0]
const replaceAgain = numbers.fill(1, 2, 4);
console.log(replaceAgain); // [0, 0, 1, 1, 0]
*/

// includes () method :
/*
const numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers); // [1, 2, 3, 4, 5, 6]
const two = numbers.includes(2);
console.log(two); // true
const ten = numbers.includes(10);
console.log(ten); // false

*/

// indexof and lastIndexof :
/*
const names = ["anik", "rayhan", "asraful"];
console.log(names); // ['anik', 'rayhan', 'asraful']
const rayhan = names.indexOf("rayhan");
console.log(rayhan); // 1
const akash = names.indexOf("akash");
console.log(akash); // -1
*/

/*
// lastIndexOf :
const friends = ["Akash", "Bikash", "Bikash", "Asraful"];
console.log(friends); // ['Akash', 'Bikash', 'Asraful']
const bikash = friends.lastIndexOf("Bikash");
console.log(bikash); //  2
*/
// Note : if array element not exsit then return -1

// reverse () method :
/*
const names = ["Anik", "Rayhan", "Bikash"];
console.log(names); // ['Anik', 'Rayhan', 'Bikash']
const reverseName = names.reverse();
console.log(reverseName); // ['Bikash', 'Rayhan', 'Anik']
*/
// Note : reverse () mutable method

// sort () method :
/*
const names = ["anik", "sonatan", "bikash", "rayhan"];
console.log(names); //  ['anik', 'sonatan', 'bikash', 'rayhan']
// const namesReverse = names.sort();
// console.log(namesReverse); // ['anik', 'bikash', 'rayhan', 'sonatan']

// const namesReverse = names.sort((a, b) => (a === b ? 0 : b > a ? -1 : 1));
// console.log(namesReverse);

const numbers = [1, 5, 4, 6, 8, 11, 6, 5, 11, 1, 2];
console.log(numbers); // [1, 5, 4, 6, 8, 11, 6, 5, 11, 1, 2]
const numberShort = numbers.sort((a, b) => a - b);

console.log(numberShort); // [1, 1, 2, 4, 5, 5, 6, 6, 8, 11, 11]
const numberShort1 = numbers.sort((a, b) => b - a);
console.log(numberShort1); // [11, 11, 8, 6, 6, 5, 5, 4, 2, 1, 1]
*/

// splice method :

/*
const names = ["tom", "jerry", "tapas", "paul", "bob"];
console.log(names); // ['tom', 'jerry', 'tapas', 'paul', 'bob']
const deleteNames = names.splice(1, 3);
console.log(deleteNames); // ['jerry', 'tapas', 'paul']
console.log(names); // ['tom', 'bob']

const updateDelete = names.splice(1, 0, "sonatan", "anik", "asraful");
console.log(updateDelete); // []
console.log(names); //  ['tom', 'sonatan', 'anik', 'asraful', 'bob']
*/

// Array at() method :
// note : array at method works negetive and postitve , negetive index work right side and postive index work right side
/*
const names = ["paul", "anik", "asraful", "rayhan", "tom", "jerry"];
const leftSide = names.at(2);
console.log(leftSide); // asraful
const rightSide = names.at(-3);
console.log(rightSide); // rayhan
*/

// flat () method :

// const numbers = [1, 2, 3, 4, 5, [6, 7]];
// console.log(numbers); //  [1, 2, 3, 4, 5, Array(2)]
// const flatNumbers = numbers.flat();
// console.log(flatNumbers); // [1, 2, 3, 4, 5, 6, 7]
// note : when we nested array using flat method work 1 level,,
// if we use many nested array then using argument like 1,2,3,4,Infinity

const num1 = [1, 2, 3, [4, 5, [6, 7]]];
// console.log(num1); //  [1, 2, 3, Array(3)]
const num1Flat = num1.flat(2);
// console.log(num1Flat); // [1, 2, 3, 4, 5, 6, 7]

const num2 = [1, 2, 3, [4, 5, [6, 7, [8]]]];
const num2Flat = num2.flat(Infinity);
// console.log(num2Flat); // [1, 2, 3, 4, 5, 6, 7, 8]

// copyWithIn () method :
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// console.log(numbers); // [1, 2, 3, 4, 5, 6, 7, 8]

const copyWithInNumber = numbers.copyWithin(0, 3, 5);
// console.log(copyWithInNumber); // [4, 5, 3, 4, 5, 6, 7, 8]

// with() method:
// update element immutabliy
// with method work postive index and negetive index ,, left side postive and right side negetvie and start index 1

const number = [1, 2, 3, 4, 5, 6];
const threeUpdate = number.with(2, 8);
// console.log(threeUpdate); // [1, 2, 8, 4, 5, 6]
const fiveUpdate = number.with(-2, 10);
// console.log(fiveUpdate); // [1, 2, 3, 4, 10, 6]

// Array Static Method
// Array.isArray() method :

// console.log(Array.isArray([])); //  true
// console.log(Array.isArray("sonatan")); // false
// console.log(Array.isArray({})); // false
// console.log(Array.isArray(5)); // false

// Array.of(): create Array :
// literals way
const arr1 = [1, 2, 3, 4, 5];
// console.log(arr1); // [1, 2, 3, 4, 5]
// new keyword way
const arr2 = new Array(1, 2, 3, 4, 5, 6, 7, 8);
// console.log(arr2); // [1, 2, 3, 4, 5, 6, 7, 8]
// array.of method
const arr3 = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9);
// console.log(arr3); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

// Array.from and Array.fromAsync
/*
// Array Like
{
    const array_like = {
        0: 'A',
        1: 'B',
        2: 'C',
        length : 3
    }
    
    array_like[1]
    
    Array.from(array_like)
  
    document.getElementsByTagName('li')
  
    function checkArgs() {
      console.log(arguments.length);// logs 2.
    }
  }
  
  // Array.from()
  {
    const collection = Array.from(document.getElementsByTagName('li'))
  }
  
  // Array.fromAsync()
  {
      Array.fromAsync({
      length: 3,
      0: Promise.resolve('tapaScript'),
      1: Promise.resolve('Google'),
      2: Promise.resolve('Apple'),
    }).then((array) => console.log(array));
  }
  */

//   Array Method Start

// The Customer Array
let customers = [
  {
    id: 1,
    f_name: "Abby",
    l_name: "Thomas",
    gender: "M",
    married: true,
    age: 32,
    expense: 500,
    purchased: ["Shampoo", "Toys", "Book"],
  },
  {
    id: 2,
    f_name: "Jerry",
    l_name: "Tom",
    gender: "M",
    married: true,
    age: 64,
    expense: 100,
    purchased: ["Stick", "Blade"],
  },
  {
    id: 3,
    f_name: "Dianna",
    l_name: "Cherry",
    gender: "F",
    married: true,
    age: 22,
    expense: 1500,
    purchased: ["Lipstik", "Nail Polish", "Bag", "Book"],
  },
  {
    id: 4,
    f_name: "Dev",
    l_name: "Currian",
    gender: "M",
    married: true,
    age: 82,
    expense: 90,
    purchased: ["Book"],
  },
  {
    id: 5,
    f_name: "Maria",
    l_name: "Gomes",
    gender: "F",
    married: false,
    age: 7,
    expense: 300,
    purchased: ["Toys"],
  },
];

// console.log(customers);

// Array Filter() method :

const seniorCitizen = customers.filter((customer) => customer.age >= 60);
// console.log(seniorCitizen); // return (2) [{…}, {…}]
const nonSeniorCitizen = customers.filter((customer) => customer.age < 60);
// console.log(nonSeniorCitizen); // return (3) [{…}, {…}, {…}]

// map() method
{
  // map example - Build Customer Data with title and full name
  const customersWithFullName = customers.map((customer) => {
    let title = "";
    if (customer.gender === "M") {
      title = "Mr.";
    } else if (customer.gender === "F" && customer.married) {
      title = "Mrs.";
    } else {
      title = "Miss";
    }
    customer["full_name"] =
      title + " " + customer.f_name + " " + customer.l_name;
    return customer;
  });
  console.log("[map] Customers With Full Name = ", customersWithFullName);
}
