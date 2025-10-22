// ========================
// 1. Basic Promise
// ========================

// THEORY:
// A Promise represents an async operation that may succeed (resolve) or fail (reject).
// States: pending → fulfilled/rejected, immutable after settlement.
// Useful for handling async tasks instead of callbacks.

// Basic Promise :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// const basicPromise = new Promise((resolve, reject) => {
//     console.log("Promise Started");
//     setTimeout(() => {
//         const success = true;
//          if(success) {
//           resolve("✅ tasks completed")
//          } else {
//             reject("❌ Task failed")
//          }
//     }, 100);
// });

// basicPromise.then((result)=> {
//     console.log(result);
// }).catch((error)=> {
//     console.log(error);

// }).finally(()=> {
//     console.log("end");

// })
// Basic Promise :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// INTERVIEW Q:
// Q1: What happens if both resolve() and reject() are called?
// A: Only the first call counts; Promise state is immutable.
// Q2: Why use .finally()?
// A: To run code regardless of success or failure (cleanup).
// Chaining Promises :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ========================
// 2. Chaining Promises
// ========================

// THEORY:
// Each .then() returns a new Promise. Returning a value passes it to the next .then().
// Helps avoid "callback hell".

// Promise.resolve(5).then((result)=> {
//     console.log("step 1 ",result);

//     return result*2

// }).then((result)=> {
//     console.log("step -2 ", result);
//        return result*3
// }).then((result)=> {
//     console.log("step-3" , result);

// }).catch((error)=> {
//     console.log(error);

// })

// INTERVIEW Q:
// Q: What if you throw an error in a .then()?
// A: The next .then() is skipped, and the chain jumps to the nearest .catch().

// Chaining Promises :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ========================
// 3. Returning Promises in .then()
// ========================

//  Returning Promises :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Promise.resolve(10)
//   .then((x) => new Promise((res) => setTimeout(() => res(x + 5), 500)))
//   .then((result) => console.log("Returned Promise result:", result)); // 15

// THEORY:
// Returning a Promise inside .then() makes the next .then() wait for it to resolve.

//  Returning Promises :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//  Error Handling :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// ========================
// 4. Error Handling
// ========================
// THEORY:
// Errors propagate down the chain until caught with .catch().
// .finally() runs regardless of outcome.

// INTERVIEW Q:
// Q: What happens if .catch() is missing?
// A: Unhandled promise rejection occurs (warning in browser, crash in Node).

// Promise.resolve()
//   .then(() => {
//     throw new Error("this is error");
//   })
//   .catch((err) => {
//     console.log(err.message);
//   })
//   .finally(() => {
//     console.log("Cleanup");
//   });
//  Error Handling :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


//  Microtask & Event Loop :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ========================
// 5. Microtask & Event Loop
// THEORY:
// Promises run in the microtask queue, which executes after synchronous code, before macrotasks (setTimeout).
// ========================
// console.log("Sync start");

// Promise.resolve().then(()=> {
//     console.log("promise miscrotask");
// })

// setTimeout(() => {
//     console.log("setTimeout macrotask");
    
// }, 0);
// INTERVIEW Q:
// Q: What will be the output order?  
// A: Sync start → Sync end → Promise microtask → setTimeout macrotask


// console.log("Sync end");
//  Microtask & Event Loop :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ========================
// 6. Promise Combinators
// ========================







// Promise.all
// const p1 = Promise.resolve("Task 1 done");
// const p2 = Promise.resolve("Task 2 done");
// const p3 = Promise.reject("Task 3 failed");

// Waits for all promises to fulfill.
// If any promise rejects, the whole thing rejects immediately (“fails fast”).
// When all tasks are required to succeed — e.g., loading multiple API responses that depend on each other.

// Promise.all([p1,p2,p3])
// .then((result)=> console.log("result", result))
// .catch((error)=>console.log(error))


// :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// 2. Promise.race()

// Returns the first promise that settles (either resolves or rejects).
// Doesn’t wait for the rest.
// When you only care about the fastest response — like racing multiple servers.
//  const p1 = new Promise(resolve=> {
//     setTimeout(()=> {
//    resolve("Fast");
   
//     },100)
//  })

//  const p2 = new Promise(resolve=> {
//     setTimeout(()=> {
//    resolve("Slow!");
   
//     },500)
//  })


// fail first 
// const p1 = new Promise((_, reject) => setTimeout(() => reject("Failed first"), 100));
// const p2 = new Promise(resolve => setTimeout(() => resolve("Second done"), 200));

// Promise.race([p1, p2])
//   .catch(err => console.error(err)); // "Failed first"


//  Promise.race([p1, p2]).then((result)=>  {
//     console.log(result);
    
//  }).catch((error)=>{
//     console.log(error);
    
//  })
 // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// 3. Promise.allSettled()

// Waits for all promises to settle (either fulfilled or rejected).
// Never fails; always resolves with an array describing each result.
// When you want all outcomes, even if some fail (like showing partial results in UI).

// const p1 = Promise.resolve("Success");
// const p2 = Promise.reject("Error");
// const p3 = Promise.resolve("Done");


// Promise.allSettled([p1,p2,p3]).then((result)=> {
//     console.log(result);
    
// })
 // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// Promise.any()
// Resolves as soon as one promise fulfills.
// Ignores rejections unless all fail — then it rejects with AggregateError.

// const p1 = Promise.reject("❌ Server A down");
// const p2 = Promise.resolve("✅ Server B responded");
// const p3 = Promise.reject("❌ Server C down");


// Promise.any([p1,p2,p3]).then((result)=>{
//     console.log(result);
    
// })


 // :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ======================================================
// 📋 QUICK INTERVIEW POINTS SUMMARY
// ======================================================

/*
🔹 Promise → Object representing an eventual async result (success or failure)

🔹 States:
   - Pending → initial state, not yet completed
   - Fulfilled → operation completed successfully
   - Rejected → operation failed

🔹 Transition Rules:
   - Once fulfilled or rejected → cannot change again (immutable)
   - Only first call to resolve() or reject() is considered

🔹 Key Methods:
   - then(onFulfilled, onRejected)
   - catch(onRejected)
   - finally(onFinally)

🔹 Chaining:
   - Each .then() returns a new Promise
   - Enables sequential async flow
   - Return values from .then() are passed to the next .then()

🔹 Error Handling:
   - Use .catch() for rejections
   - .catch() at the end handles all previous rejections in the chain
   - Errors thrown inside .then() are treated as Promise rejections
   - You can also use .then(success, error) but not recommended for clarity

🔹 finally():
   - Runs regardless of success or failure
   - Does not receive arguments
   - Commonly used for cleanup (close connection, hide loader, etc.)

🔹 Nested Promises:
   - If a Promise is resolved with another Promise, it adopts that Promise’s state and value

🔹 Promise Flattening:
   - Promises automatically flatten (resolve(Promise.resolve(5)) → Promise.resolve(5))

🔹 Common Patterns:
   - Promise.race() used for timeout handling
   - Promise.all() used for parallel async operations
   - Promise.allSettled() used for batch tasks (collect all outcomes)
   - Promise.any() used for getting the first success (ignoring failures)

🔹 Promise.all():
   - Waits for all Promises to fulfill
   - Rejects immediately if any fail (fail-fast)
   - Best for "all-or-nothing" tasks

🔹 Promise.race():
   - Returns the first settled (fulfilled or rejected) Promise
   - Useful for "fastest response" logic

🔹 Promise.allSettled():
   - Waits for all to settle (fulfilled/rejected)
   - Never rejects
   - Returns status + value/reason array

🔹 Promise.any():
   - Resolves on first fulfilled Promise
   - Ignores rejections
   - Rejects only if all fail → AggregateError

🔹 Async/Await:
   - Syntactic sugar over Promises
   - await pauses execution until resolved
   - async function always returns a Promise
   - Use try/catch for error handling
   - Great for writing cleaner sequential async code

🔹 Microtask Queue:
   - Promise callbacks (then/catch/finally) run in the microtask queue
   - Always executed before macrotasks (setTimeout, setInterval)

🔹 Event Loop Order:
   - Synchronous code → Microtasks (Promises) → Macrotasks (Timers, I/O)

🔹 Creating a Promise:
   new Promise((resolve, reject) => {
      // async operation
      if (success) resolve(value);
      else reject(error);
   });

🔹 Resolving vs Rejecting:
   - resolve(value) → marks fulfilled
   - reject(error) → marks rejected

🔹 Unhandled Rejection:
   - If a rejected Promise has no .catch(), Node.js/browser logs a warning

🔹 Converting Callbacks to Promises:
   - Wrap callback in new Promise()
   - Node.js also provides util.promisify()

🔹 Parallel Execution:
   - Use Promise.all() to run multiple async functions concurrently

🔹 Sequential Execution:
   - Use chaining or async/await with loops

🔹 AggregateError:
   - Special error type thrown by Promise.any() when all Promises reject

🔹 Canceling Promises:
   - Promises can’t be canceled once started
   - Workaround: AbortController or manual flag check

🔹 Common Interview Scenarios:
   1. Promise.all() failure behavior
   2. Microtask vs Macrotask execution order
   3. async/await error handling with try/catch
   4. Difference between race() and any()
   5. Implementing custom delay(ms)
   6. Chaining multiple async functions
   7. Handling mixed success/failure tasks

🔹 Performance Tip:
   - For independent tasks, always use Promise.all() instead of awaiting sequentially
   - For dependent tasks, use async/await in sequence

🔹 Advanced:
   - Promise combinators allow concurrency control
   - Promise.resolve() / Promise.reject() create immediately settled Promises
   - Always return Promises inside async functions to maintain chainability

*/