// var x = 5;
// console.log(x);
// var x;

// ✅ Output: 5
// Because var x is hoisted, and reassignment doesn’t affect value.
//:::::::::::::::::::::::::::::::::


// console.log(a);
// var a = 10;
// console.log(a);
//:::::::::::::::::::::::::::::::::


// console.log(x);
// let x = 10;

// Answer:
// ❌ ReferenceError
// x is hoisted but in the Temporal Dead Zone (TDZ).

//:::::::::::::::::::::::::::::::::


// function sayHi() {
//   console.log("Hi");
// }
// sayHi();


// Answer:
// ✅ Hi — Function declarations are fully hoisted.


//:::::::::::::::::::::::::::::::::
// sayHello();
// const sayHello = function() {
//   console.log("Hello");
// };
// ❌ TypeError: sayHello is not a function
// Variable is hoisted but assigned undefined before initialization.