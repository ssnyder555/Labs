//
// // this is a parent function
//
// function Book(pages, author, type) {
//   this.pages = pages;
//   this.author = author;
//    this.type = type;
//    this.getDetails = function() {
//      return this.type + " writen by " + this.author + " is " + this.pages + " pages long.";
//    }
//  }
// let book = new Book (200, 'L.S. Lewis', 'hardback');
//  let book2 = new Book(300, 'J.k. Rollin', 'softback');
// console.log(book.getDetails());
// console.log(book2.getDetails());
//
// const circle = {
//   radius: 22,
//   area: function() {
//     return Math.PI * this.radius * this.radius;
//   }
// };
//
// console.log(circle.area());


// 1. Print the array of Jupiter's moons to the
// console (no for loop, just print the entire array).
//
//
// 2. Print the name of Neptune's moon "Nereid" to the
// console.
//
// 3. Add a new moon called "Endor" to Venus' moons array.
// Add a Pluto object to the solarSystem array using
// .push. The object should contain Pluto's name,
// ringSystem boolean, and moons array
// (which includes "Charon").
//
// Add a new key value pair to the the Earth object:
// the key should be 'diameter', and the value should
// be Earth's diameter in miles represented as a string.
// Change Mercury's ringSystem boolean to true.
// Change Uranus' moon "Umbriel" to "Oberon"
//
// Iterate through the solarSystem array and print only
// the objects that have a ringSystem (where ringSystem:
//   true), and ignore the others. You want to make a
//   loop that goes over each item in the array,
//   and include an if statement.
//
//
 const solarSystem = [
	{ name: "Mercury", ringSystem: false, moons: [] },
	{ name: "Venus", ringSystem: false, moons: [] },
	{ name: "Earth", ringSystem: false, moons: ["The Moon"] },
	{ name: "Mars", ringSystem: false, moons: ["Phobos", "Deimos"] },
	{ name: "Jupiter", ringSystem: true, moons: ["Europa", "Ganymede", "Io", "Callisto"] },
	{ name: "Saturn", ringSystem: true, moons: ["Titan", "Enceladus", "Rhea", "Mimas"] },
	{ name: "Uranus", ringSystem: true, moons: ["Miranda", "Titania", "Ariel", "Umbriel"] },
	{ name: "Neptune", ringSystem: true, moons: ["Triton", "Nereid"] }
];
//console.log("Europa", "ganymede", "Io");
console.log(solarSystem[1].moons.push('Endor'))
console.log(solarSystem[1])


// const solarSystem = Object.assign({Endor}, object1);

// console.log(object2.c, object2.d);
solarSystem[2].diameter = '7,917.5';

  console.log(solarSystem[2]);
