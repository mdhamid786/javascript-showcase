// ================================
// Arrow Functions in JavaScript
// ================================
// Arrow functions => introduced in ES6 for shorter syntax and lexical 'this' binding.

// --------------------
// 1. Syntax
// --------------------
const add = (a, b) => a + b; // concise single-line
const square = n => n * n; // single param doesn't need ()
const sayHi = () => console.log("Hi"); // no param uses ()

// --------------------
// 2. Differences vs Regular Functions
// --------------------
// - No 'this' binding of their own (lexical 'this' from parent scope).
// - Cannot be used as constructors (no 'new').
// - Do not have 'arguments' object (use rest parameters instead).
// - Always anonymous (need to assign to variable if reused).

// --------------------
// 3. 'this' Binding Example
// --------------------
function NormalFn() {
  this.value = 1;
  setTimeout(function () {
    this.value++;
    console.log("Normal:", this.value); // 'this' is global/undefined
  }, 1000);
}
function ArrowFn() {
  this.value = 1;
  setTimeout(() => {
    this.value++;
    console.log("Arrow:", this.value); // 'this' is preserved (lexical)
  }, 1000);
}
new NormalFn();
new ArrowFn();

// --------------------
// 4. No 'arguments' Object
// --------------------
function regular(a, b) {
  console.log(arguments); // works
}
const arrow = (a, b) => {
  // console.log(arguments); // error
};
const arrowRest = (...args) => console.log(args); // use rest operator

// --------------------
// 5. Cannot be Constructors
// --------------------
// const Person = (name) => { this.name = name }; // error with new
function Person(name) { this.name = name; } // use regular function

// --------------------
// 6. Use Cases
// --------------------
// - Short callbacks: array methods like map, filter, reduce
const nums = [1, 2, 3];
const doubled = nums.map(n => n * 2); // cleaner
// - Preserving 'this' in async calls
// - Avoiding boilerplate for small functions

// --------------------
// 7. Limitations
// --------------------
// - Not suitable when 'this' context is dynamic.
// - Can't be used for object methods that need 'this'.
// - Can't use with 'new' keyword.

// --------------------
// 8. Interview Questions
// --------------------
// Q: What is an arrow function?
// A: A shorter ES6 syntax function with lexical 'this' binding.
// Q: How does 'this' differ in arrow vs normal functions?
// A: Normal functions bind 'this' dynamically; arrow functions inherit from parent scope.
// Q: Can arrow functions be used as constructors?
// A: No, they cannot be invoked with 'new'.
// Q: Do arrow functions have 'arguments' object?
// A: No, use rest parameters instead.
// Q: When to use arrow vs normal functions?
// A: Use arrow for callbacks/short functions; use normal when you need 'this', 'arguments', or constructors.
