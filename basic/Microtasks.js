// ====================================================
// 🧠 Microtasks vs Macrotasks in JavaScript (Basic → Advanced)
// ====================================================

/*
🔹 JavaScript is Single-Threaded.
It uses an Event Loop to manage task execution.

🔸 Task Queues:
  - Macrotask Queue → setTimeout, setInterval, setImmediate (Node.js), I/O, UI rendering
  - Microtask Queue → Promise callbacks (.then/.catch/.finally), process.nextTick (Node.js), MutationObserver

🔸 Rule:
  - JS executes synchronous (main stack) code first.
  - Then, all Microtasks in queue.
  - Then, 1 Macrotask → then again Microtasks → then next Macrotask, and so on.
*/

// ====================================================
// 🧩 Basic Example — setTimeout vs Promise
// ====================================================

console.log("Start");

setTimeout(() => {
  console.log("Macrotask → setTimeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Microtask → Promise.then");
});

console.log("End");

/*
🧭 Output Order:
1. Start
2. End
3. Microtask → Promise.then
4. Macrotask → setTimeout
Because Microtasks run before Macrotasks after main code.
*/

// ====================================================
// 🧩 Example 2 — Multiple Microtasks vs Macrotasks
// ====================================================

console.log("\n--- Example 2 ---");

setTimeout(() => console.log("Macrotask 1"), 0);

Promise.resolve()
  .then(() => console.log("Microtask 1"))
  .then(() => console.log("Microtask 2"));

setTimeout(() => console.log("Macrotask 2"), 0);

/*
🔹 Execution Flow:
1️⃣ Main code → sync logs
2️⃣ Run all Microtasks in order (Microtask 1, Microtask 2)
3️⃣ Then first Macrotask (Macrotask 1)
4️⃣ After that next Macrotask (Macrotask 2)
*/

// ====================================================
// 🧩 Example 3 — Inside Macrotask create new Microtask
// ====================================================

console.log("\n--- Example 3 ---");

setTimeout(() => {
  console.log("Macrotask → setTimeout");
  Promise.resolve().then(() => console.log("Microtask inside Macrotask"));
}, 0);

/*
🧭 Output:
Macrotask executes → logs first line,
then its internal Microtask runs immediately after
(before next Macrotask).
*/

// ====================================================
// 🧩 Example 4 — Node.js Specific (if run in Node)
// ====================================================

/*
In Node.js, we have:
  process.nextTick()  → Microtask (executed before Promises)
  setImmediate()      → Macrotask (executed after I/O)
*/

if (typeof process !== "undefined") {
  console.log("\n--- Example 4 (Node.js only) ---");

  setImmediate(() => console.log("Macrotask → setImmediate"));
  setTimeout(() => console.log("Macrotask → setTimeout"), 0);

  Promise.resolve().then(() => console.log("Microtask → Promise"));
  process.nextTick(() => console.log("Microtask → nextTick"));
}

/*
🧭 Node.js Execution Order:
1. process.nextTick()
2. Promise.then()
3. setTimeout()
4. setImmediate()
*/

// ====================================================
// 🧩 Example 5 — Event Loop Visualization (Interview Trick)
// ====================================================

console.log("\n--- Example 5 ---");

console.log("Script Start");

setTimeout(() => console.log("setTimeout 1"), 0);

Promise.resolve()
  .then(() => console.log("Promise 1"))
  .then(() => console.log("Promise 2"));

console.log("Script End");

/*
🧭 Expected Output:
Script Start
Script End
Promise 1
Promise 2
setTimeout 1
*/

// ====================================================
// 🎯 INTERVIEW QUESTIONS SUMMARY
// ====================================================

/*
✅ Q1: Difference between Microtask and Macrotask?
   → Microtasks (Promise, process.nextTick) run before Macrotasks (setTimeout, setInterval).
     After each Macrotask, all Microtasks are cleared before moving to the next Macrotask.

✅ Q2: What is the order of execution in Event Loop?
   1️⃣ Execute main (synchronous) stack
   2️⃣ Process all Microtasks
   3️⃣ Execute first Macrotask
   4️⃣ Repeat (Microtasks → Macrotask → ...)

✅ Q3: What happens if a Microtask creates another Microtask?
   → The new Microtask will be queued and run before moving to the next Macrotask.

✅ Q4: Why Promises execute before setTimeout?
   → Because Promise callbacks go to the Microtask Queue,
     while setTimeout goes to the Macrotask Queue.

✅ Q5: What’s the priority in Node.js?
   process.nextTick() > Promises > setTimeout() > setImmediate()

✅ Q6: Does async/await affect microtasks?
   → Yes. ‘await’ internally uses Promises, so code after ‘await’ is a Microtask.
*/

// ====================================================
// 🧠 ADVANCED LOGIC DEMO — async/await under the hood
// ====================================================

console.log("\n--- Example 6 (Async/Await) ---");

async function test() {
  console.log("1. Inside async start");
  await null; // same as Promise.resolve()
  console.log("2. After await (microtask)");
}
test();

console.log("3. Outside async");

/*
🧭 Output:
1. Inside async start
3. Outside async
2. After await (microtask)
*/

// ====================================================
// 🔚 END — Microtask vs Macrotask Master Summary
// ====================================================

/*
📘 Summary Table:

| Task Type  | Examples                              | Priority Order |
|-------------|----------------------------------------|----------------|
| Microtask   | Promise.then, process.nextTick         | Higher          |
| Macrotask   | setTimeout, setInterval, setImmediate  | Lower           |

🧩 Rule: 
After each Macrotask → run all Microtasks → then next Macrotask
*/

