console.log("js file is loaded");


// Datatypes


// 1. Numbers
// 2. Strings
// 3. Booleans

// Strings

// Print Hello World
//console.log('Hello World');
//console.log("hello World Double Quotes");


// Variables
// const vs let vs var

// var -old way of declaring Variables
// we will not use var

// all variables are camelCase
const dharmaBums = 'Jack Kerouac';
// const variables cannot be redifined;

//changing the internal value of a const
//delcaration

//definging the array
const someArray = [];

someArray.push('Taco');

//to see if it worked console.log the thing
console.log(someArray, 'this is someArray');


//Always choose const until the interpreter yells at you

//let variables can be redifined
//most commonly used in loops
let numbers = 9;


number = 6;

console.log(number, 'this is a number');

//concatenation and Interpolation

//Concatenation
console.log('Run' + 'Run' + 'Runnn');

//Interpolation

//older way
const adjective = 'beautiful';

console.log('What a ' + adjective + ' day!');

//newer Always
//use `` when using $
console.log(`What a ${adjective} day`);

console.log('please' + ' squeeze' + ' the cheese');

const word = 'belive';
console.log(`please ${word} the cheese`);

//Numbers

//operations

9 + 9
9 * 9
9 / 9
9 - 9
// modulus is really helpful for finding odd and even Numbers
9 % 9 //--> 0, modulus gives us the remainder

// Comparative Operators

//< // Less than
//=== // strictlyequal, thi also compares try
//>= // greater than or equal to
//!== // not equal to

// loops

// What is a loop?
// A loop is a process that repeats itself

//Main principles in programming is to keep your code DRY
// DRY = dont repeat yourself

// intial condition - some variable
 //while(BOOLEAN EXPRESSION){
   //run code in block
 //}

 // intial condition
 //let num = 1;

 //while(num <= 1000){
   //console.log('The number is: ' + num);
   //num = num + 5;
   // num++
   // num += 1


// while(num <= 1000){
   //console.log(num)
   //num ++
// }

// let num = 0
 //while(num <= 5000){
  // console.log('the square is: ' + num * num);

  // num++
// }

//let num = 1000;

//while(num >= 1){
//  num--
//

//for loops

//more concise loop

// count from 1 to 1000
for(let i = 800; i <= 900; i++){
  console.log(i);
}
