// ======================================================
// 📌 JavaScript Variables: var, let, const
// ======================================================

// ------------------------------
// 1. var
// ------------------------------
// ✅ Function-scoped
// ✅ Can be re-declared
// ✅ Can be updated
// ✅ Hoisted (initialized with undefined)

function varExample() {
  console.log(a); // undefined (hoisting)
  var a = 10;
  console.log(a); // 10
}
varExample();

// Redeclaration allowed
var x = 5;
var x = 15; 
console.log(x); // 15

// ------------------------------
// 2. let
// ------------------------------
// ✅ Block-scoped
// ✅ Cannot be re-declared in same scope
// ✅ Can be updated
// ✅ Hoisted but in Temporal Dead Zone (TDZ)

function letExample() {
  // console.log(b); // ❌ ReferenceError (TDZ)
  let b = 20;
  console.log(b); // 20
}
letExample();

// Cannot redeclare in same scope
let y = 50;
// let y = 60; ❌ Error

// ------------------------------
// 3. const
// ------------------------------
// ✅ Block-scoped
// ✅ Cannot be re-declared
// ✅ Cannot be updated (value fixed)
// ✅ Hoisted but in TDZ
// ✅ Objects & arrays can be mutated

const PI = 3.14;
// PI = 3.1415; ❌ Error

const obj = { name: "Hamid" };
obj.name = "Ali"; // ✅ mutation allowed
console.log(obj);

const arr = [1, 2, 3];
arr.push(4); // ✅ mutation allowed
console.log(arr);


// ======================================================
// 📌 Interview Questions
// ======================================================

// Q1: Difference between var, let, const?
// - var: function-scoped, redeclarable, hoisted with undefined
// - let: block-scoped, no redeclare, hoisted (TDZ)
// - const: block-scoped, no redeclare, no reassignment

// Q2: Hoisting behavior
console.log(foo); // undefined
var foo = 10;

// console.log(bar); // ❌ ReferenceError
let bar = 20;

// console.log(baz); // ❌ ReferenceError
const baz = 30;

// Q3: Can const hold objects/arrays?
const obj1 = { lang: "JS" };
obj1.lang = "TypeScript"; // ✅ allowed
console.log(obj1);

// obj1 = {}; ❌ reassignment not allowed

// Q4: var inside loop
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log("var i:", i), 100);
}
// Output: var i: 3 (three times)

// Q5: let inside loop
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log("let j:", j), 100);
}
// Output: 0, 1, 2


// ======================================================
// 📌 Logical Coding Exercises
// ======================================================

// 1. Temporal Dead Zone Example
function tdzDemo() {
  // console.log(myVar); ❌ ReferenceError
  let myVar = 100;
  console.log(myVar); // 100
}
tdzDemo();

// 2. Re-declaration test
function redeclareDemo() {
  var a = 10;
  var a = 20; // ✅ works
  console.log("var:", a);

  let b = 30;
  // let b = 40; ❌ Error
  console.log("let:", b);

  const c = 50;
  // const c = 60; ❌ Error
  console.log("const:", c);
}
redeclareDemo();

// 3. Closures with var vs let
function closureVar() {
  for (var i = 1; i <= 3; i++) {
    setTimeout(() => console.log("var closure:", i), 100);
  }
}
closureVar(); // 4, 4, 4

function closureLet() {
  for (let i = 1; i <= 3; i++) {
    setTimeout(() => console.log("let closure:", i), 100);
  }
}
closureLet(); // 1, 2, 3


// ======================================================
// 📌 Quick Revision Summary
// ======================================================
// var
//  - Function-scoped
//  - Can re-declare
//  - Hoisted with undefined
//  - Problematic in loops

// let
//  - Block-scoped
//  - Cannot re-declare in same scope
//  - Hoisted but TDZ

// const
//  - Block-scoped
//  - Cannot re-declare or reassign
//  - Objects/arrays → mutable, but reference fixed
