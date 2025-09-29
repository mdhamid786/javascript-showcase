// // ================================
// // Debugging in JavaScript
// // ================================
// // Debugging = finding and fixing errors (bugs) in code.
// // Two main tools:
// //  1. console methods (quick checks, logging values, errors, timing, tables, etc.)
// //  2. debugger keyword (pause execution in DevTools for step-by-step debugging)

// // --------------------------------
// 1. Console Methods (Practical Use Cases)
// // --------------------------------

// // Basic logging
console.log("Debugging Example Started!");

// // Warnings & errors
// console.warn("This is a warning");
// console.error("This is an error");

// // Info
// console.info("App running in development mode");

// Assert (only logs if condition is false)
// console.assert(2 + 2 === 5, "Assertion failed: 2+2 should equal 4");

// // Group logs together
// console.group("group start")
// console.log("Name: Ali");
// console.log("Role: Developer");
// console.groupEnd();

// // Table (great for arrays/objects)
// const users = [
//   { id: 1, name: "Ali", role: "Dev" },
//   { id: 2, name: "Hamid", role: "Tester" },
// ];
// console.table(users);


// // Count (useful inside loops)
// for (let i = 0; i < 3; i++) {
//   console.count("Loop iteration");
// }

// // Timer (measure execution time)
// console.time("Array creation");
// let arr = Array(1000).fill(0);
// console.timeEnd("Array creation");

// // --------------------------------
// 2. Debugger Keyword (Step-by-step Debugging)
// // --------------------------------
// // - Pauses JS execution in DevTools at that line.
// // - Lets you inspect variables, call stack, and step through code.

// function calculateTotal(a, b) {
//   let sum = a + b;
//   debugger; // Pause here when DevTools is open
//   return sum;
// }
// console.log("Total:", calculateTotal(10, 20));

// // --------------------------------
// // 3. Debugging Best Practices (Interview Theory)
// // --------------------------------
// // - Use console.log for quick checks, but remove before production.
// // - Use console.error/warn/info for better log levels.
// // - Use console.table for structured data.
// // - Use console.time/timeEnd for performance bottlenecks.
// // - Use debugger keyword for step-through debugging in DevTools.
// // - Avoid excessive logging (slows performance, clutters console).
// // - Prefer breakpoints in browser DevTools over too many console.logs.

// // --------------------------------
// // 4. Common Interview Questions
// // --------------------------------
// // Q: Difference between console.log and debugger?
// // A: console.log prints value but doesn’t stop execution.
// //    debugger pauses execution to inspect state in DevTools.
// //
// // Q: How do you debug async code?
// // A: Use async/await + try/catch + console.log, or breakpoints in DevTools.
// //
// // Q: Why prefer debugger over console.log?
// // A: debugger allows step-by-step execution, variable watch, and call stack inspection.
// //
// // Q: What are console.assert and console.table used for?
// // A: assert logs only when condition fails; table prints arrays/objects in table format.
// //
// // Q: How do you measure performance in JS?
// // A: console.time/timeEnd, Performance API, or Lighthouse audits.

// // Example: Debugging async code
// async function fetchData() {
//   try {
//     console.time("Fetch");
//     let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
//     let data = await res.json();
//     console.timeEnd("Fetch");
//     console.log("Fetched Data:", data);
//   } catch (e) {
//     console.error("Error fetching:", e);
//   }
// }
// fetchData();
