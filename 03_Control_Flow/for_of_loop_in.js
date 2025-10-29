// ====================================================
// 🔹 FOR...OF LOOP – COMPLETE INTERVIEW GUIDE
// ====================================================

// ---------------------------------------------
// 🔸 1. INTRODUCTION
/**
 * for...of is used to iterate over *iterable objects*.
 * Works with: Arrays, Strings, Maps, Sets, Generators, etc.
 * 
 * ✅ Syntax:
 * for (const item of iterable) {
 *   // code block
 * }
 */

// ---------------------------------------------
// 🔸 2. BASIC USAGE WITH ARRAYS

const fruits = ["apple", "banana", "mango"];

for (const fruit of fruits) {
  console.log(fruit);
}
// apple
// banana
// mango

// ---------------------------------------------
// 🔸 3. ITERATING OVER STRINGS

const str = "ALI";
for (const ch of str) {
  console.log(ch); // A L I
}

// ---------------------------------------------
// 🔸 4. ITERATING OVER SETS (Unique values)

const colors = new Set(["red", "green", "blue", "red"]);
for (const color of colors) {
  console.log(color); // red green blue
}

// ---------------------------------------------
// 🔸 5. ITERATING OVER MAPS (Key–Value Pairs)

const map = new Map([
  ["name", "Ali"],
  ["age", 25],
  ["role", "Developer"],
]);

for (const [key, value] of map) {
  console.log(`${key}: ${value}`);
}
// name: Ali
// age: 25
// role: Developer

// ---------------------------------------------
// 🔸 6. COMPARISON: for...of vs for...in

const arr = ["x", "y", "z"];

console.log("🔹 for...in:");
for (const i in arr) console.log(i); // keys/indexes -> 0 1 2

console.log("🔹 for...of:");
for (const v of arr) console.log(v); // values -> x y z

/**
 * 🔑 Key Difference:
 * - for...in → iterates over keys (indexes in arrays, property names in objects)
 * - for...of → iterates over values of *iterable* objects
 */

// ---------------------------------------------
// 🔸 7. WORKING WITH GENERATORS

function* numberGen() {
  yield 10;
  yield 20;
  yield 30;
}

for (const n of numberGen()) console.log(n); // 10 20 30

// ---------------------------------------------
// 🔸 8. ITERATING OVER CUSTOM ITERABLE OBJECTS

const customIterable = {
  data: [100, 200, 300],
  *[Symbol.iterator]() {
    for (const val of this.data) yield val;
  },
};

for (const val of customIterable) console.log(val); // 100 200 300

// ---------------------------------------------
// 🔸 9. LOGICAL EXAMPLE – SUM OF NUMBERS

const nums = [10, 20, 30, 40];
let total = 0;

for (const num of nums) total += num;
console.log("Total:", total); // 100

// ---------------------------------------------
// 🔸 10. NESTED for...of LOOPS

const matrix = [
  [1, 2],
  [3, 4],
  [5, 6],
];

for (const row of matrix) {
  for (const col of row) {
    console.log(col);
  }
}
// 1 2 3 4 5 6

// ---------------------------------------------
// 🔸 11. BREAK AND CONTINUE IN for...of

const values = [1, 2, 3, 4, 5];

for (const v of values) {
  if (v === 3) continue; // skip 3
  if (v === 5) break; // stop loop
  console.log(v);
}
// 1 2 4

// ---------------------------------------------
// 🔸 12. ITERATING OVER DOM COLLECTIONS (Browser Only)
/**
 * const buttons = document.querySelectorAll("button");
 * for (const btn of buttons) {
 *   btn.style.color = "blue";
 * }
 */

// ---------------------------------------------
// 🔸 13. ITERATING OVER ARGUMENTS OBJECT (Old school)

function printArgs() {
  for (const arg of arguments) {
    console.log(arg);
  }
}
printArgs("JS", "Node", "React");

// ---------------------------------------------
// 🔸 14. ITERATING OVER ASYNC DATA (with async generators)

async function* asyncNumbers() {
  yield 1;
  yield 2;
  yield 3;
}

(async () => {
  for await (const n of asyncNumbers()) {
    console.log("Async:", n);
  }
})();
// Async: 1
// Async: 2
// Async: 3

// ---------------------------------------------
// 🔸 15. REAL-WORLD USE CASES
/**
 * ✅ Looping through API results (arrays)
 * ✅ Looping through DOM elements
 * ✅ Looping through file streams
 * ✅ Looping through sets/maps for unique data
 * ✅ Working with custom iterators & generators
 */

// Example: Find all even numbers from an array
const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = [];

for (const n of numbers) {
  if (n % 2 === 0) evenNumbers.push(n);
}
console.log("Even numbers:", evenNumbers);

// ---------------------------------------------
// 🔸 16. ADVANCED – BUILDING CUSTOM RANGE ITERATOR

function range(start, end) {
  return {
    *[Symbol.iterator]() {
      for (let i = start; i <= end; i++) yield i;
    },
  };
}

for (const n of range(1, 5)) console.log("Range:", n);
// Range: 1
// Range: 2
// Range: 3
// Range: 4
// Range: 5

// ---------------------------------------------
// 🔸 17. INTERVIEW QUESTIONS
/**
 * 1️⃣ What is for...of used for?
 *     → To iterate over iterable objects like arrays, strings, sets, maps.
 *
 * 2️⃣ How is it different from for...in?
 *     → for...in → keys; for...of → values.
 *
 * 3️⃣ Can you use for...of on objects?
 *     ❌ No, because plain objects are not iterable by default.
 *     ✅ You can make them iterable by defining Symbol.iterator.
 *
 * 4️⃣ Can you use break/continue in for...of?
 *     ✅ Yes, both are supported.
 *
 * 5️⃣ What happens when you use for...of on Map?
 *     → Returns [key, value] pairs.
 *
 * 6️⃣ Can for...of be used with async iterables?
 *     ✅ Yes, using for await...of.
 *
 * 7️⃣ Is order guaranteed in for...of?
 *     ✅ For arrays and strings, yes.
 *     ✅ For sets, insertion order is preserved.
 *
 * 8️⃣ When would you prefer for...of over forEach?
 *     → When you need break/continue or async/await support.
 */

// ---------------------------------------------
// 🔸 18. TRICKY QUESTIONS / EDGE CASES

// ❓ Using for...of on non-iterable (error)
try {
  for (const val of { name: "Ali" }) console.log(val);
} catch (e) {
  console.log("❌ Error:", e.message); // object is not iterable
}

// ✅ Fix by making it iterable:
const iterableObj = {
  name: "Ali",
  age: 25,
  *[Symbol.iterator]() {
    yield this.name;
    yield this.age;
  },
};

for (const v of iterableObj) console.log(v); // Ali 25

// ---------------------------------------------
// 🔸 19. SUMMARY / TAKEAWAYS
/**
 * ✅ for...of is used for iterable objects.
 * ✅ Works with Arrays, Strings, Sets, Maps, Generators.
 * ✅ Gives values (not keys/indexes).
 * ✅ Supports break/continue and async iteration.
 * ✅ Cannot directly iterate over plain objects (unless made iterable).
 * ✅ Great for clean, readable iteration logic.
 */
