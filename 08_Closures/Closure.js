// 1. What is a Closure? (Basic Definition)
// A closure is the combination of a function and its lexical environment (the scope in which it was created).
// In simple terms:
// A closure gives you access to variables from an outer function scope, even after that outer function has returned.\

// function outer() {
//   let count = 0;

//   function inner() {
//     count++;
//     console.log(count);
//   }

//   return inner;
// }

// const counter = outer();

// counter();
// counter();
// counter();
// counter();
// counter();

// 2. How Closures Work (Conceptual Explanation)
// When a function is created in JS, it carries a reference to its lexical scope.
// That scope chain stays alive as long as the inner function exists.
// So closures allow:
// Data encapsulation (protecting variables)
// Persistent state
// Functional programming techniques

// function createCounter() {
//   let count = 0;

//   return {
//       increment: function() {count++; return count},
//       decrement: function() { count--; return count},
//       getCount: function () { return count}
//   }

// }

// const counter = createCounter();

// console.log(counter.increment()); // 1
// console.log(counter.increment()); // 2
// console.log(counter.getCount());  // 2
// console.log(counter.decrement()); // 1

// Example 2: Using Closures in Loops (Common Interview Gotcha)

// for(let i =0; i<3; i++) {
//     setTimeout(()=>console.log(i), 1000)
// }

// for(var i =0; i<3; i++) {
//     setTimeout(()=>console.log(i), 1000)
// }

// 5. Advanced Interview Questions
// ❓Q1: What is a closure used for?
// Answer:
// To preserve state between function calls, create private variables, and manage memory efficiently.
// ❓Q2: What happens if the outer function variables are large objects?
// Answer:
// Closures keep those variables in memory as long as the inner function exists — which can cause memory leaks if not managed.
// ❓Q3: What is a closure inside a closure?

// function outer() {
//   let a = 10;

//   function mid() {
//     let b = 20;

//     function inner() {
//       console.log(a + b);
//     }

//     return inner;
//   }
//   return mid();
// }

// const fn = outer();
// fn();


// function secretPassword() {
//     let password = "12345"

//     return {
//         guess(pwd) {
//             return pwd === password
//         }
//     }
// }

// const game = secretPassword()
// console.log(game.guess("12345"));
// console.log(game.password); // 

function multiply(x) {
  return function(y) {
    return x * y;
  };
}

const double = multiply(2);
console.log(double(5)); // 10

const triple = multiply(3);
console.log(triple(5)); // 15

// | Concept       | Example                                 | Use                     |
// | ------------- | --------------------------------------- | ----------------------- |
// | Basic closure | Inner function accessing outer variable | Maintain state          |
// | Data privacy  | Return object with methods              | Hide private data       |
// | Loop fix      | IIFE or `let`                           | Correct closure capture |
// | Currying      | `multiply(x)(y)`                        | Reusable functions      |
// | Memoization   | Cache via closure                       | Optimize performance    |
