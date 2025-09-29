// ================================
// let & const vs var in JavaScript
// ================================
// var = old way (function-scoped, hoisted, can be redeclared).
// let = modern way (block-scoped, not redeclarable in same scope).
// const = block-scoped constant (cannot be reassigned, must be initialized).

// --------------------
// 1. Scope
// --------------------
// var is function-scoped: visible within entire function.
// let/const are block-scoped: visible only inside { }.

if (true) {
  var a = 10;
  let b = 20;
  const c = 30;
}
console.log(a); // works (10)
// console.log(b); // error (b is block-scoped)
// console.log(c); // error (c is block-scoped)

// --------------------
// 2. Hoisting
// --------------------
// var is hoisted and initialized with undefined (can be used before declaration).
// let/const are hoisted but in "temporal dead zone" until declaration.

console.log(x); // undefined (var hoisted)
var x = 5;
// console.log(y); // ReferenceError (temporal dead zone)
// let y = 10;

// --------------------
// 3. Redeclaration & Reassignment
// --------------------
// var can be redeclared and reassigned.
// let cannot be redeclared in same scope but can be reassigned.
// const cannot be redeclared or reassigned.

var p = 1;
var p = 2; // allowed
let q = 3;
// let q = 4; // error (cannot redeclare)
q = 4; // allowed (reassign)
const r = 5;
// r = 6; // error (cannot reassign)

// --------------------
// 4. Const with Objects/Arrays
// --------------------
// const prevents reassignment of variable, but object/array contents are mutable.

const obj = { name: "Ali" };
obj.name = "Hamid"; // allowed (mutating property)
// obj = {}; // error (cannot reassign object)

// --------------------
// 5. Global Object Binding
// --------------------
// var attaches to window/global object in browsers.
// let/const do not attach to global object.

var g1 = "hello";
let g2 = "world";
console.log(window.g1); // "hello"
console.log(window.g2); // undefined

// --------------------
// 6. Best Practices
// --------------------
// - Avoid var (causes scope & hoisting issues).
// - Use const by default for safety.
// - Use let when reassignment is required.
// - Helps write predictable and clean code.

// --------------------
// 7. Interview Questions
// --------------------
// Q: Difference between var, let, and const?
// A: var is function-scoped, hoisted with undefined, redeclarable.
//    let/const are block-scoped, hoisted but in temporal dead zone, not redeclarable.
//    const also cannot be reassigned.
// Q: Why prefer let/const over var?
// A: To avoid hoisting bugs, accidental redeclaration, and global pollution.
// Q: When to use const vs let?
// A: Use const for values that don’t change; let for variables that will be reassigned.
// Q: What is temporal dead zone?
// A: The period between hoisting and actual declaration where accessing let/const throws error.
