// ============================================================
// 📘 JavaScript — Scope & Hoisting (Theory + Code + Interview)
// ============================================================

// ------------------------------
// 🔹 THEORY: Scope
// ------------------------------
// Scope = where variables/functions are accessible.
// Types:
// 1. Global Scope → accessible everywhere
// 2. Function Scope → created with "var" inside functions
// 3. Block Scope → created with "let" & "const" inside {}
// 4. Lexical Scope → inner functions access outer variables

// ------------------------------
// 1. Global Scope
// ------------------------------
// let globalVar = "I am global";
// function globalTest() {
//   //console.log("Global scope:", globalVar); // ✅ Accessible
// }
// globalTest();
// console.log("Outside function:", globalVar); // ✅ Accessible

// 🎯 Takeaway: Global variables can be accessed anywhere.

// ------------------------------
// 2. Function Scope (var)
// ------------------------------
function funcScope() {
  var funcVar = "I am inside function";
  console.log("Function scope:", funcVar); // ✅
}
funcScope();
// console.log(funcVar); // ❌ ReferenceError

// 🎯 Takeaway: var is limited to function scope.

// ------------------------------
// 3. Block Scope (let, const)
// ------------------------------
// if (true) {
//   var a = "var inside block"; // function-scoped
//   let b = "let inside block"; // block-scoped
//   const c = "const inside block"; // block-scoped
//   //console.log("Inside block:", a, b, c);
// }
// console.log("Outside block (var):", a); // ✅ Works
// console.log(b, c); // ❌ ReferenceError

// 🎯 Takeaway: let & const are block-scoped, var is not.

// ------------------------------
// 4. Lexical Scope (Closure)
// ------------------------------
// Closure = when inner function remembers outer variable
// function makeCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }
// const counter1 = makeCounter();
// console.log("Counter closure:", counter1()); // 1
// console.log("Counter closure:", counter1()); // 2
// console.log("Counter closure:", counter1()); // 3

// 🎯 Takeaway: Closures allow persistent private variables.

// ------------------------------
// 🔹 THEORY: Hoisting
// ------------------------------
// Hoisting = JavaScript moves declarations to the top.
// - var → hoisted, initialized as undefined
// - let/const → hoisted, but in Temporal Dead Zone (TDZ)
// - Functions → declarations hoisted fully
// - Function expressions/arrow → behave like variables

// ------------------------------
// 5. Variable Hoisting
// ------------------------------
console.log("hoistedVar:", hoistedVar); // undefined
var hoistedVar = 5;

try {
  //console.log("hoistedLet:", hoistedLet); // ❌ ReferenceError
} catch (e) {
  //console.log("hoistedLet error:", e.message);
}
let hoistedLet = 10;

// 🎯 Takeaway: var hoists to undefined, let/const stay in TDZ.

// ------------------------------
// 6. Function Hoisting
// ------------------------------
sayHello(); // ✅ Works
function sayHello() {
  console.log("Hello from hoisted function");
}

try {
  sayHi(); // ❌ TypeError
} catch (e) {
  //console.log("sayHi error:", e.message);
}
var sayHi = function () {
  //console.log("Hi from function expression");
};

try {
  arrowFn(); // ❌ ReferenceError
} catch (e) {
  //console.log("arrowFn error:", e.message);
}
const arrowFn = () => {
  //console.log("I am an arrow function");
};
arrowFn(); // ✅ Works after declaration

// 🎯 Takeaway: Only function declarations hoist fully.

// ------------------------------
// 🔹 Interview Logical Questions
// ------------------------------

// Q1: Variable shadowing
var num = 1;
function tricky() {
  //console.log(num); // ❌ undefined (var hoisted inside)
  var num = 2;
  //console.log(num); // ✅ 2
}
tricky();

// Q2: Loops with var vs let
// for (var i = 0; i < 3; i++) {
//   setTimeout(() => console.log("var loop:", i), 1000);
// }
// Output after 1s: var loop: 3, 3, 3

// for (let j = 0; j < 3; j++) {
//   setTimeout(() => console.log("let loop:", j), 1000);
// }
// Output after 1s: let loop: 0, 1, 2

// Q3: TDZ with let
function foo() {
  //console.log(a);   // undefined
  var a = 10;
  //console.log(b);   // ❌ ReferenceError
  let b = 20;
}
// try {
//   foo();
// } catch (e) {
//   console.log("foo error:", e.message);
// }

// Q4: Return before block
function bar() {
  return;
  {
    let x = 100;
  }
}
console.log("Bar:", bar()); // undefined

// Q5: Closure in loops
// function outerLoop() {
//   let funcs = [];
//   for (var i = 0; i < 3; i++) {
//     funcs.push(() => console.log("Closure with var:", i));
//   }
//   return funcs;
// }
// outerLoop().forEach((fn) => fn()); // 3, 3, 3

// function outerLoopFixed() {
//   let funcs = [];
//   for (let i = 0; i < 3; i++) {
//     funcs.push(() => console.log("Closure with let:", i));
//   }
//   return funcs;
// }
// outerLoopFixed().forEach((fn) => fn()); // 0, 1, 2

// ============================================================
// 🎯 INTERVIEW KEY TAKEAWAYS
// ============================================================
// 🔹 Scope
// - var → function scope
// - let, const → block scope
// - Inner functions keep access to outer variables (closure)

// 🔹 Hoisting
// - var → hoisted with undefined
// - let, const → hoisted but in TDZ (ReferenceError if used early)
// - Function declarations → hoisted fully
// - Function expressions & arrow → behave like variables

// 🔹 Common Tricky Questions
// 1. var shadowing (undefined first, then value)
// 2. Loops with var (all print last value), let (prints per iteration)
// 3. let/const in TDZ before declaration
// 4. Closures capturing loop vars (var vs let)
// 5. Execution stops at return, blocks after ignored
