// =============================================
// 🔹 GENERATORS IN JAVASCRIPT – COMPLETE GUIDE
// =============================================

// ---------------------------------------------
// 🔸 1. WHAT IS A GENERATOR?
/**
 * A generator is a special function that can pause and resume
 * its execution using the `yield` keyword.
 *
 * Defined using: function* name() { ... }
 * It returns an iterator-like object.
 */

function* basicGen() {
  yield 1;
  yield 2;
  yield 3;
}

const gen = basicGen();
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }

// ---------------------------------------------
// 🔸 2. DIFFERENCE BETWEEN NORMAL FUNCTION VS GENERATOR
/**
 * ✅ Normal function → runs completely once called.
 * ✅ Generator → can pause (yield) and resume (next()) multiple times.
 */

// ---------------------------------------------
// 🔸 3. USING FOR...OF WITH GENERATORS

function* colors() {
  yield "red";
  yield "green";
  yield "blue";
}

for (const c of colors()) console.log(c);
// red, green, blue

// ---------------------------------------------
// 🔸 4. PASSING VALUES BACK INTO GENERATOR

function* twoWay() {
  const name = yield "What’s your name?";
  yield `Hello, ${name}!`;
}

const convo = twoWay();
console.log(convo.next().value); // "What’s your name?"
console.log(convo.next("Ali").value); // "Hello, Ali!"

// ---------------------------------------------
// 🔸 5. GENERATOR RETURN VALUE

function* numbers() {
  yield 1;
  yield 2;
  return 3; // ends iteration
}

const nums = numbers();
console.log(nums.next()); // { value: 1, done: false }
console.log(nums.next()); // { value: 2, done: false }
console.log(nums.next()); // { value: 3, done: true }

// ---------------------------------------------
// 🔸 6. GENERATORS WITH LOOPS

function* rangeGen(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

for (const num of rangeGen(1, 5)) console.log(num); // 1 2 3 4 5

// ---------------------------------------------
// 🔸 7. INFINITE GENERATORS (LOGICAL USE CASE)

function* infiniteCounter() {
  let count = 1;
  while (true) yield count++;
}

const counter = infiniteCounter();
console.log(counter.next().value); // 1
console.log(counter.next().value); // 2
console.log(counter.next().value); // 3
// (never ends unless stopped manually)

// ---------------------------------------------
// 🔸 8. GENERATORS + ITERATORS COMBINATION

function* arrayIterator(arr) {
  for (const item of arr) yield item;
}

const arrGen = arrayIterator(["a", "b", "c"]);
console.log(arrGen.next()); // { value: 'a', done: false }

// ---------------------------------------------
// 🔸 9. DELEGATING GENERATORS USING yield*

function* genA() {
  yield 1;
  yield 2;
}

function* genB() {
  yield* genA(); // delegates to genA
  yield 3;
}

for (const val of genB()) console.log(val); // 1 2 3

// ---------------------------------------------
// 🔸 10. ERROR HANDLING IN GENERATORS

function* errorGen() {
  try {
    yield "Start";
    yield "Still running";
  } catch (err) {
    console.log("Caught inside generator:", err);
  }
}

const eGen = errorGen();
console.log(eGen.next().value); // "Start"
console.log(eGen.throw(new Error("Something went wrong"))); // catches inside generator

// ---------------------------------------------
// 🔸 11. PRACTICAL EXAMPLE: PAGINATION SIMULATION

function* paginate(array, pageSize) {
  for (let i = 0; i < array.length; i += pageSize) {
    yield array.slice(i, i + pageSize);
  }
}

const data = [1, 2, 3, 4, 5, 6, 7];
const pageGen = paginate(data, 3);

console.log(pageGen.next().value); // [1,2,3]
console.log(pageGen.next().value); // [4,5,6]
console.log(pageGen.next().value); // [7]

// ---------------------------------------------
// 🔸 12. ASYNC-LIKE FLOW USING GENERATORS (MANUAL ASYNC)

function* fetchData() {
  console.log("Fetching user...");
  yield "user fetched";
  console.log("Fetching orders...");
  yield "orders fetched";
  console.log("Done!");
}

const fetchGen = fetchData();
console.log(fetchGen.next());
console.log(fetchGen.next());
console.log(fetchGen.next());

// ---------------------------------------------
// 🔸 13. GENERATORS AND ASYNC/AWAIT RELATION
/**
 * Async/await is syntactic sugar over generators + promises.
 *
 * function* → async function
 * yield → await
 */

// Example equivalence:
async function asyncFunc() {
  const data = await Promise.resolve("Hello");
  return data;
}

function* genFunc() {
  const data = yield Promise.resolve("Hello");
  return data;
}

// ---------------------------------------------
// 🔸 14. ADVANCED: CUSTOM ASYNC RUNNER USING GENERATOR

function run(genFn) {
  const it = genFn();

  function handle(result) {
    if (result.done) return Promise.resolve(result.value);
    return Promise.resolve(result.value).then(
      (res) => handle(it.next(res)),
      (err) => handle(it.throw(err))
    );
  }

  return handle(it.next());
}

run(function* () {
  const data = yield Promise.resolve("✅ Data fetched!");
  console.log(data);
});

// ---------------------------------------------
// 🔸 15. GENERATORS IN PRACTICAL USE CASES
/**
 * ✅ Lazy evaluation (generate values on demand)
 * ✅ Infinite sequences (e.g., counters, Fibonacci)
 * ✅ Data streaming
 * ✅ Custom async control flow
 * ✅ Replacing callbacks (before async/await)
 */

// Example: Fibonacci Sequence
function* fibonacci(n) {
  let a = 0, b = 1;
  for (let i = 0; i < n; i++) {
    yield a;
    [a, b] = [b, a + b];
  }
}

for (const num of fibonacci(7)) console.log(num); // 0 1 1 2 3 5 8

// ---------------------------------------------
// 🔸 16. COMMON INTERVIEW QUESTIONS
/**
 * 1️⃣ What is a generator?
 *     → Function that can pause (yield) and resume execution.
 *
 * 2️⃣ What does yield do?
 *     → Pauses the function and returns a value.
 *
 * 3️⃣ Difference between return and yield?
 *     → return ends function; yield pauses it and saves state.
 *
 * 4️⃣ What type does a generator function return?
 *     → Returns an iterator object.
 *
 * 5️⃣ What’s the difference between generator and iterator?
 *     → Generator auto-creates an iterator; iterator must be built manually.
 *
 * 6️⃣ What is the use of yield*?
 *     → Delegates control to another generator.
 *
 * 7️⃣ How can you pass values into a generator?
 *     → By passing arguments to next(value).
 *
 * 8️⃣ How are generators related to async/await?
 *     → async/await is built on top of generators + promises.
 *
 * 9️⃣ What happens when you call .throw() on a generator?
 *     → Injects an error inside the generator.
 *
 * 🔟 Real-world use case?
 *     → Lazy loading data, pagination, data streaming, async control flow.
 */

// ---------------------------------------------
// 🔸 17. KEY TAKEAWAYS
/**
 * ✅ Generators use `function*` and `yield`.
 * ✅ Can pause/resume execution at any point.
 * ✅ Return iterator automatically.
 * ✅ yield* delegates to another generator.
 * ✅ Useful for async-like control, data streams, lazy evaluation.
 * ✅ async/await evolved from generator concepts.
 */
