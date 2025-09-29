/**
 * JS Functions – Topic-wise Theory + Practice + Interview Logic
 * Fully commented version with theory for each section
 */

// =============================
// 1. Basics
// =============================
//console.log("=== 1. Basics ===");

/**
 * Function Declaration:
 * - A named block of code.
 * - Can be called before declaration (hoisted).
 * - Reusable and easy to read.
 */

function greet(name) {
  return `Hello ${name}`;
}

// Call the function
// console.log(greet("Ali"));        // Output: Hello, Ali!

// Function properties
//console.log("Parameters:", greet.length); // Number of declared parameters: 1
//console.log("Function Name:", greet.name); // Name of the function: greet

// =============================
// 2. Function Types
// =============================
//console.log("\n=== 2. Function Types ===");

/**
 * 1. Function Declaration:
 * - Hoisted, can call before definition
 */
function add(a, b) {
  return a + b;
}
//console.log("Declaration:", add(2,3)); // Output: 5

/**
 * 2. Function Expression:
 * - Assigned to a variable
 * - Not hoisted
 */
const multiply = function (a, b) {
  return a * b;
};
//console.log("Expression:", multiply(2,3)); // Output: 6

/**
 * 3. Arrow Function:
 * - Concise syntax
 * - Does not have its own 'this'
 */
const subtract = (a, b) => a - b;
//console.log("Arrow:", subtract(5,2)); // Output: 3

/**
 * 4. IIFE – Immediately Invoked Function Expression
 * - Executes immediately after creation
 * - Often used to create private scope
 */
(function () {
  // console.log("IIFE executed!");
})();

// =============================
// 3. Parameters & Arguments
// =============================
//console.log("\n=== 3. Parameters & Arguments ===");

/**
 * Default Parameters:
 * - Provide default values if arguments are missing
 */
function welcome(name = "Guest") {
  return `Welcome, ${name}`;
}
// console.log("Default Param:", welcome()); // Output: Welcome, Guest

/**
 * Rest Parameters:
 * - Collect all remaining arguments into an array
 * - Useful for variable number of arguments
 */
function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}
// console.log("Rest Params:", sum(1,2,3,4)); // Output: 10

/**
 * Arguments Object:
 * - Array-like object holding all arguments
 * - Only in regular functions, not arrow functions
 */
function showArgs() {
  console.log("Arguments object:", arguments);
}
// showArgs(1,2,3); // Output: [1,2,3]

// =============================
// 4. Advanced Functions
// =============================
//console.log("\n=== 4. Advanced Functions ===");

/**
 * Callback Function:
 * - Function passed as argument to another function
 * - Executes after some action
 */

// function fetchData(callback) {
//   setTimeout(() => callback("Data"), 500);
// }
// fetchData(data =>
//      console.log("callback", data)
// )
/**
 * Higher-Order Function:
 * - Returns another function or takes function as argument
 */
// function greetUser(name) {
//   return (msg) => console.log(`${name}, ${msg}`);
// }
// greetUser("Ali")("Good Morning!")

/**
 * Closure:
 * - Inner function remembers variables of outer function
 * - Used to maintain private state
 */
function counter() {
  let count = 0;
  return () => ++count;
}
const increment = counter();
// console.log("Closure increment:", increment(), increment()); // 1,2

/**
 * Currying:
 * - Transform function with multiple arguments into a series of functions
 */
const multiplyCurried = (a) => (b) => a * b;
//console.log("Currying:", multiplyCurried(2)(3)); // Output: 6

/**
 * Recursion:
 * - Function calls itself
 * - Commonly used in algorithms like factorial, Fibonacci
 */
function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
//console.log("Factorial 5:", factorial(5)); // 120

function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}
//console.log("Fibonacci 6:", fibonacci(6)); // 8

// =============================
// 5. Tricky Interview Logic
// =============================
//console.log("\n=== 5. Tricky Logic ===");

/**
 * Type coercion edge cases:
 * - JavaScript converts types automatically in some operations
 */
//console.log("[] + [] =", [] + []);        // "" (empty string)
//console.log("[] + {} =", [] + {});        // "[object Object]"
//console.log("{} + [] =", {} + []);        // 0 in some contexts
//console.log('"5" - - "2" =', "5" - - "2"); // 7 (double negative = addition)

/**
 * 'this' behavior:
 * - Regular functions: 'this' refers to object calling it
 * - Arrow functions: 'this' from outer scope
 */
// const obj = {
//   a:10,
//   regular:function(){ console.log("this in regular:", this.a); },
//   arrow:()=>console.log("this in arrow:", this.a)
// };
// obj.regular(); // 10
// obj.arrow();   // undefined

/**
 * Function as object:
 * - Functions are objects and can have properties
 */
function fn() {}
fn.type = "Demo";
//console.log("Function as object:", fn.type); // Demo

/**
 * Swap variables without temp using array destructuring
 */
let a = 5,
  b = 10;
[a, b] = [b, a];
//console.log("Swap:", a,b); // 10,5

// =============================
// 6. Best Practices
// =============================
//console.log("\n=== 6. Best Practices ===");
/**
 * - Always use === to avoid type coercion bugs
 * - Use explicit conversions: Number(), String(), Boolean()
 * - Prefer arrow functions for concise syntax
 * - Use closures/IIFE to avoid polluting global scope
 * - Prefer const for function expressions
 * - Understand 'this' context carefully
 */

// =============================
// 7. Practice Exercises
// =============================
//console.log("\n=== 7. Practice Exercises ===");
/**
 * Exercise ideas:
 * 1. Counter closure: create increment & decrement functions
 * 2. Reverse a string using recursion
 * 3. Currying function to add 3 numbers: add(2)(3)(5)
 * 4. Higher-order function: filter odd numbers from array
 * 5. IIFE: instantly print numbers 1–5
 */
