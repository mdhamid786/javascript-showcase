// =========================================================
// 🌟 JavaScript Async / Await — Basic to Advanced
// =========================================================
//
// 🧠 THEORY OVERVIEW
// ---------------------------------------------------------
// 🔹 async/await is built on top of Promises
// 🔹 async function always returns a Promise
// 🔹 await pauses async function until the Promise settles
// 🔹 try/catch handles rejections cleanly
// 🔹 await only works inside async functions (or top-level ES2022)
// 🔹 Execution continues after await in microtask queue
// 🔹 Use Promise.all() for parallel, sequential awaits for dependent tasks
// 🔹 await in loops runs sequentially; prefer Promise.all() for concurrency
// 🔹 Async functions improve readability & maintainability of async code
//
// =========================================================
// 🔸 1. Basic Example
// =========================================================

function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("✅ Data loaded"), 1000);
  });
}

async function getData() {
  // console.log("Fetching...");
  const result = await fetchData();
  // console.log(result);
}

getData();

// =========================================================
// 🔸 2. How async functions work
// =========================================================

async function example() {
  return 42; // Returns a Promise that resolves with 42
}

example().then(
  // console.log
);

// =========================================================
// 🔸 3. Error Handling (try/catch)
// =========================================================

async function fetchUserData() {
  try {
    const response = await Promise.reject("❌ Network error");
    // console.log(response);
  } catch (error) {
    // console.error("Caught Error:", error);
  } finally {
    // console.log("Finally block always runs");
  }
}

fetchUserData();

// =========================================================
// 🔸 4. Sequential vs Parallel Execution
// =========================================================

async function sequentialExample() {
  const a = await Promise.resolve("A done");
  const b = await Promise.resolve("B done");
  // console.log(a, b);
}

async function parallelExample() {
  const [a, b] = await Promise.all([
    Promise.resolve("A done"),
    Promise.resolve("B done"),
  ]);
  // console.log(a, b);
}

sequentialExample();
parallelExample();

// =========================================================
// 🔸 5. Async in Loops
// =========================================================

const items = [1, 2, 3];

async function wrongLoop() {
  items.forEach(async (item) => {
    await new Promise((r) => setTimeout(r, 500));
    // console.log("Wrong:", item);
  });
}

async function correctLoop() {
  for (const item of items) {
    await new Promise((r) => setTimeout(r, 500));
    // console.log("Correct:", item);
  }
}

wrongLoop();
correctLoop();

// =========================================================
// 🔸 6. Using await with Fetch API (simulated)
// =========================================================

async function fetchUser() {
  try {
    const data = await new Promise((resolve) =>
      setTimeout(() => resolve({ name: "Ali", age: 25 }), 1000)
    );
    // console.log("User:", data);
  } catch (err) {
    // console.error("Error:", err);
  }
}

fetchUser();

// =========================================================
// 🔸 7. await inside non-async functions ❌
// =========================================================

(async () => {
  const result = await Promise.resolve("✅ Works inside async IIFE");
  // console.log(result);
})();

// =========================================================
// 🔸 8. Async/Await with try/catch and finally
// =========================================================

async function processPayment() {
  try {
    const status = await Promise.resolve("💰 Payment successful");
    // console.log(status);
  } catch (err) {
    // console.error("❌ Payment failed:", err);
  } finally {
    // console.log("🧾 Closing payment session");
  }
}

processPayment();

// =========================================================
// 🔸 9. Combining async/await with Promise utilities
// =========================================================

async function handleTasks() {
  const results = await Promise.allSettled([
    Promise.resolve("✅ Done"),
    Promise.reject("❌ Failed"),
  ]);
  // console.log(results);
}

handleTasks();

// =========================================================
// 🔸 10. Real-World Example — Retry Logic
// =========================================================

async function fetchWithRetry(task, retries = 3) {
  while (retries > 0) {
    try {
      const result = await task();
      return result;
    } catch (err) {
      // console.warn(`Retrying... (${retries - 1} left)`);
      retries--;
      if (retries === 0) throw err;
    }
  }
}

const unstableTask = () =>
  new Promise((resolve, reject) =>
    Math.random() > 0.5 ? resolve("✅ Success") : reject("❌ Random fail")
  );

fetchWithRetry(unstableTask)
  .then(
    // console.log
  )
  .catch(
    // console.error
  );

// =========================================================
// 🔸 11. Logical Example — Timeout Wrapper
// =========================================================

async function timeoutPromise(promise, ms) {
  const timeout = new Promise((_, reject) =>
    setTimeout(() => reject("⏰ Timeout"), ms)
  );
  return Promise.race([promise, timeout]);
}

(async () => {
  try {
    const data = await timeoutPromise(
      new Promise((resolve) =>
        setTimeout(() => resolve("✅ Fast Response"), 500)
      ),
      1000
    );
    // console.log(data);
  } catch (err) {
    // console.error(err);
  }
})();

// =========================================================
// 🔸 12. Microtask Queue Behavior
// =========================================================

async function microtaskExample() {
  // console.log("1");
  await null;
  // console.log("2");
}
microtaskExample();
// console.log("3");

// =========================================================
// 🔸 13. Nested Async/Await (Dependency chain)
// =========================================================

async function getUser() {
  return { id: 1, name: "Ali" };
}
async function getOrders(userId) {
  return [`Order for user ${userId}`];
}
async function getSummary() {
  const user = await getUser();
  const orders = await getOrders(user.id);
  // console.log("Summary:", user.name, orders);
}

getSummary();

// =========================================================
// 🔸 14. Common Mistakes
// =========================================================
//
// ❌ Using await in forEach()
// ❌ Forgetting try/catch
// ❌ Blocking sequential awaits unnecessarily
// ❌ Returning values without await in dependent async tasks
// ❌ Ignoring Promise rejections
//

// =========================================================
// 🔸 15. Challenge — Sequential API Simulation
// =========================================================

async function fetchProfile() {
  await new Promise((r) => setTimeout(r, 1000));
  return "👤 Profile loaded";
}

async function fetchPosts() {
  await new Promise((r) => setTimeout(r, 1000));
  return "📝 Posts loaded";
}

async function dashboardLoad() {
  // console.time("Load Time");
  const profile = await fetchProfile();
  const posts = await fetchPosts();
  // console.log(profile, posts);
  // console.timeEnd("Load Time");
}

dashboardLoad();

async function dashboardParallel() {
  // console.time("Parallel Load Time");
  const [profile, posts] = await Promise.all([fetchProfile(), fetchPosts()]);
  // console.log(profile, posts);
  // console.timeEnd("Parallel Load Time");
}

dashboardParallel();


// =========================================================
// 🧠 INTERVIEW QUESTIONS (Basic → Advanced)
// =========================================================

// ✅ BASIC
// 1️⃣ What is async/await in JS?
// 2️⃣ What does an async function always return?
// 3️⃣ Can await be used outside an async function?
// 4️⃣ How do you handle errors in async functions?
// 5️⃣ Difference between async/await and Promise.then?
// 6️⃣ Why use async/await?
// 7️⃣ What happens if you forget to use await?
// 8️⃣ Can async/await be mixed with .then()? When?

// ✅ INTERMEDIATE
// 9️⃣ Difference between sequential and parallel awaits?
// 🔟 How does await work inside loops?
// 11️⃣ Why doesn’t await work inside forEach()?
// 12️⃣ Explain microtask queue and async function order.
// 13️⃣ What happens when an awaited Promise rejects?
// 14️⃣ How can you use await for timeout handling?
// 15️⃣ How can async/await improve callback-based APIs?

// ✅ ADVANCED
// 16️⃣ Explain Promise.all() vs Promise.allSettled() vs Promise.any().
// 17️⃣ What is top-level await? Where is it used?
// 18️⃣ How to retry async operations on failure?
// 19️⃣ How to cancel async operations? (AbortController)
// 20️⃣ How to limit concurrency with async/await?
// 21️⃣ How to run dependent async tasks in sequence?
// 22️⃣ Explain concurrency vs parallelism in JS async model.
// 23️⃣ How does async/await interact with event loop & microtasks?
// 24️⃣ Is async/await blocking the main thread?
// 25️⃣ Can async be used with constructors?

// ✅ LOGICAL / CODING
// 💡 Implement sequential and parallel API calls.
// 💡 Write retry logic for failed async tasks.
// 💡 Create a timeoutPromise wrapper using Promise.race.
// 💡 Build async queue runner with concurrency control.
// 💡 Simulate async tasks that depend on each other.
// 💡 Compare execution time between sequential vs parallel async code.
//
// ---------------------------------------------------------
// 🏁 END OF FILE
// =========================================================
