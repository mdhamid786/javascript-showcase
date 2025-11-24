// 1. What is a Callback Function?
// A callback function is a function that is passed as an argument to another function 
// and is executed later, usually after some task is completed.
// In short:
// “A callback is a function called back after another function finishes.”


// function greet (name , callback) {
//    console.log("hello", name);
//    callback()
   
// }

// function nextfunction () {
//     console.log("Welcome to javascript export");
    
// }

// greet("hamid", nextfunction)


// function greet (name, callback) {
//     console.log(`Hi ${name}`);
//     callback();
    
// }

// function sayWelcome () {
//     console.log("Goodbye!");
    
// }
// greet("hamid", sayWelcome)
// Here sayBye is passed as a callback — it runs after greet() completes.


// 2. Why Do We Use Callbacks?

// Callbacks are mainly used to:
// Handle asynchronous operations (like API calls, file reading, DB queries)
// Execute code after an operation finishes
// Control function execution order


// Example 2 (Async Simulation):::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// function fetchData(callback) {
//     console.log("Processing data...");
//     setTimeout(() => {
//     console.log('Data fetched!');
//     callback();
//   }, 2000);
// }

// function processData () {
//       console.log('Data fetch successfully!...');
// }

// fetchData(processData);
// processData runs only after fetchData finishes — thanks to the callback.


// | Type                      | Description                                | Example                                    |
// | ------------------------- | ------------------------------------------ | ------------------------------------------ |
// | **Synchronous Callback**  | Executes **immediately**                   | `Array.map()`, `Array.forEach()`           |
// | **Asynchronous Callback** | Executes **later** (after some async task) | `setTimeout()`, `fs.readFile()`, `fetch()` |


// // Example (Synchronous)
// const numbers = [1, 2, 3];
// numbers.forEach(num => console.log(num));
// // 🧩 Example (Asynchronous)
// setTimeout(() => console.log('Executed after 2 seconds'), 2000);




// 4. Callback Hell (Important Interview Concept)

// When you nest multiple callbacks inside one another,
// it becomes hard to read, debug, and maintain — this is called callback hell.

// Example:


// 5. Avoiding Callback Hell
// 1️⃣ Using Named Functions

// function getUser(callback) {
//   console.log('Got user');
//   callback({ id: 1 });
// }

// function getOrders(user, callback) {
//   console.log(`Got orders for user ${user.id}`);
//   callback(['order1']);
// }

// function getOrderDetails(orders, callback) {
//   console.log(`Details for ${orders[0]}`);
//   callback();
// }

// getUser(function(user) {
//   getOrders(user, function(orders) {
//     getOrderDetails(orders, function() {
//       console.log('Done!');
//     });
//   });
// });



// Using Promises (Modern Way)


// function getUser() {
//   return new Promise(resolve => setTimeout(() => resolve({ id: 1 }), 1000));
// }
// function getOrders(userId) {
//   return new Promise(resolve => setTimeout(() => resolve(['order1']), 1000));
// }
// function getOrderDetails(order) {
//   return new Promise(resolve => setTimeout(() => resolve('order details'), 1000));
// }

// getUser()
//   .then(user => getOrders(user.id))
//   .then(orders => getOrderDetails(orders[0]))
//   .then(details => console.log(details))
//   .catch(console.error);



// 8. Key Interview Questions (Theory)
// ❓Q1: What is a callback function?

// A function passed as an argument to another function, to be executed later.

// ❓Q2: Why are callbacks used in JavaScript?

// Because JavaScript is single-threaded and asynchronous.
// Callbacks help execute code after async operations (like network calls or timers) finish.

// ❓Q3: What is callback hell and how do you avoid it?

// Callback hell happens when callbacks are nested deeply, making code hard to read.
// Avoid it by using Promises, async/await, or modularizing callbacks.

// ❓Q4: Are callbacks synchronous or asynchronous?

// Both —

// Array.map(), Array.forEach() → synchronous

// setTimeout, fetch, fs.readFile → asynchronous

// ❓Q5: What’s the difference between a callback and a promise?
// Callback	Promise
// Function passed as argument	Object representing future value
// Can lead to callback hell	Easier chaining
// Older pattern	Modern pattern
// 🧠 9. Advanced Concept — Higher-Order Functions

// A higher-order function is any function that either:

// takes another function as an argument, or

// returns another function.

// Callbacks make higher-order functions possible.