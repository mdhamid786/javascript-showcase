//hoisting =>  You can use variables and functions before they are declared in your code.


// Hoisting of Functions
// 1. Function Declarations

// Fully hoisted. You can call the function before it’s defined.


// sayHello(); // ✅ Works fine

// function sayHello() {
//   console.log("Hello!");
// }



// 2. Function Expressions

// If a function is assigned to a variable, only the variable gets hoisted, not the function itself.

// greet(); // ❌ TypeError: greet is not a function

// var greet = function () {
//   console.log("Hi there!");
// };




// | Declaration Type     | Hoisted?          | Initialized? | Accessible before declaration? | Example Output |
// | -------------------- | ----------------- | ------------ | ------------------------------ | -------------- |
// | `var`                | ✅ Yes             | ❌ No         | ✅ undefined                    | `undefined`    |
// | `let`                | ✅ Yes             | ❌ No (TDZ)   | ❌ ReferenceError               | Error          |
// | `const`              | ✅ Yes             | ❌ No (TDZ)   | ❌ ReferenceError               | Error          |
// | Function Declaration | ✅ Yes             | ✅ Yes        | ✅ Works fine                   | Works          |
// | Function Expression  | ✅ (variable only) | ❌ No         | ❌ TypeError                    | Error          |
