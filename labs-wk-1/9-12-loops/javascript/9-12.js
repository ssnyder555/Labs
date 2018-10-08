//console.log('working js');

// Write a for loop that will iterate from 50 to 20. For each iteration,
// if the current number is a multiple of 3, console.log the value.


// for (let i = 1; i < presidents.length; i++) {
    // console.log(presidents[i]);
//  }



// Write out an "infinite loop" below. Don't run the loop in your console
// unless you are prepared to force quit your browser!! Check with the instructor
// to see if it is, or live dangerously and crash your browser!

//for (var i=0; i<Infinity; i++) {}

// Loop through this array and print every other value, starting with the second.

// const presidents = ["Donald", "Barack", "George Jr", "Bill", "George", "Ronald",
 // "Jimmy", "Gerald", "Richard", "Lyndon", "John", "Dwight", "Harry", "Franklin",
 // "Herbert", "Calvin", "Warren", "Woodrow", "William", "Theodore"];



// Create a new array with the gluten-free options from this menu:
//const menu = [{name: "pizza", glutenFree: false},{name: "salad", glutenFree: true},
//{name: "donut", glutenFree: false},{name: "steak", glutenFree: true},
// {name: "chicken", glutenFree: true},{name: "cheeseburger", glutenFree: false}];

 // let array = [];

// for (let i = 0; i < menu.length; i++) {
  // if(menu[i].glutenFree === true){
    // array.push(menu[i]);
  // }
// }
// console.log(array);

const mixedArray = [1, 2, 3, 'taco', 4, 5, 6, 'burrito', 7, 8, 9,
 'Whats the deal with airplane peanuts', 3.14, {barry: "Mannilow",},
  6, 55, null, "Old " + "Crow " + " Medicine Show", 3, 2,
   "I want the calzone from pizanos", "Death blow", "Firestorm", "48", 30]



// Loop through the following array and push the
// items that are not numbers into a seperate array

let array1 = []

for (let i=0; i < mixedArray.length; i++){

  if(typeof mixedArray[i] === 'string' || typeof mixedArray[i] === 'object'){
    array1.push(mixedArray[i]);
  }
}
console.log(array1);
