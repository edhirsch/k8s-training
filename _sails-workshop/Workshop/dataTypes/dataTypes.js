// // Summary
// // There are 7 basic data types in JavaScript.

// // 1. 'number' for numbers of any kind: integer or floating-point.
// // 2. 'string' for strings. A string may have one or more characters, there’s no separate single-character type.
// // 3. 'boolean' for true/false.
// // 4. 'null' for unknown values – a standalone type that has a single value null.
// // 5. 'undefined' for unassigned values – a standalone type that has a single value undefined.
// // 6. 'object' for more complex data structures.
// // 7. 'symbol' for unique identifiers.

// // The 'typeof' operator allows us to see which type is stored in a variable.

// // Two forms: 'typeof x' or 'typeof(x)'.
// // Returns a string with the name of the type, like "string".
// // For 'null' returns "object" – this is an error in the language, it’s not actually an object.

// /* ------------------------------------------------------------------------------------------------------------ */

// // Declarations
// var1 = "test"

// var var1 = "test"


// let var1 = "test"
// const var2 = { name: "test2" };
// var2 = {name: "test3"};
// console.log('', var2);
// const arr = [1,2,3,4];
// arr = [1,2];
// console.log(arr);



// // Declaring a variable using the 'var' keyword
// for(var i = 0; i < 5; i++){
//     console.log('inside loop, i = ', i);
// }
// for(var i = 0; i < 5; i++){
//     console.log('test', i)
// }


// // // Declaring a variable using the 'let' keyword
// for(let x = 0; x < 5; x++){
//     console.log('inside loop, x = ', x);
// }
// console.log('outside loop, x = ', x) // => This will return: ReferenceError: x is not defined (because declaring a variable with let, will make it scope based)

// // Declaring a variable using the 'const' keyword
// const PI_VALUE = Math.PI;
// // PI_VALUE = 3.13 // => This will return: TypeError: Assignment to constant variable.

// // This does NOT apply if it is an object
// const player = { name: 'Gheorghe Hagi', hobby: 'Football'};
// console.log('My Player is: ', player);
// player.name = 'Ianis Hagi'; // Object's values can be changed even if it was declared as constant.
// console.log('My New player is: ', player);

// /* ------------------------------------------------------------------------------------------------------------ */

// // Understanding JS Objects
// const myCar = new Object();
// myCar.color = "red";
// myCar['width'] = 1.50;
// console.log('myCar', myCar);

// const myHouse = { color: 'white' };
// myHouse.floors = 2;
// console.log('myHouse', myHouse);

// const myDog = {};
// myDog['breed'] = 'Husky';
// console.log('myDog', myDog)

// // Understanding 'this' keyword
// const complexObject = {
//     name: "Gica",
//     hobby: "Football",
//     test: this.name,
    

//     getHobby: function(){
//         return console.log('basic function this', this);
//     },
//     getName: (costel) => {
//         return console.log('arrow function this', costel, this);
//     }
// }

// complexObject.getHobby();
// complexObject.getName("Gigi")
// complexObject.getHobby();
// complexObject.getName();

// Anonymous Function;
// (function() {
//     console.log('Boostrapping');
// })();


// function execute() {
//     console.log('Bootstrapping');
// }

// execute();