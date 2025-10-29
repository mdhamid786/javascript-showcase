//hoisting =>  You can use variables and functions before they are declared in your code.


// hoisting of Variables
// 1. Using var

// When you declare a variable with var, it is hoisted but not initialized.

// console.log(a); // ❌ Output: undefined (not ReferenceError)
// var a = 10;


// var a;      // declaration hoisted
// console.log(a); // undefined
// a = 10;     // initialization



// var a;      // declaration hoisted
// console.log(a); // undefined
// a = 10;     // initialization



// 2. Using let or const

// Variables declared with let and const are also hoisted,
// but they are in a temporal dead zone (TDZ) — meaning you cannot access them before declaration.


// console.log(b); // ❌ ReferenceError
// let b = 20;

// console.log(c); // ❌ ReferenceError
// const c = 30;
