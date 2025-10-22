// =========================================================
// 🌟 JavaScript BigInt — Basic to Advanced
// =========================================================

// =========================================================
// 🔸 1. Basic Usage
// =========================================================
// BigInt allows representation of integers larger than Number.MAX_SAFE_INTEGER
const big1 = 9007199254740991n; // "n" at the end makes it BigInt
const big2 = BigInt("9007199254740993");

const sum = big1 + big2; // 18014398509481984n
const diff = big2 - big1; // 2n
// console.log(sum, diff);

// =========================================================
// 🔸 2. Operations with BigInt
// =========================================================
const mul = 10n * 3n;   // 30n
const div = 10n / 3n;   // 3n (truncated integer division)
const mod = 10n % 3n;   // 1n

// =========================================================
// 🔸 3. Mixing BigInt with Number ❌
// =========================================================
const num = 5;
// const invalid = big1 + num; // ❌ TypeError
const valid = big1 + BigInt(num); // ✅ 9007199254740996n

// =========================================================
// 🔸 4. Comparison with Numbers
// =========================================================
const isEqual = big1 == 9007199254740991; // true (loose equality)
const isStrictEqual = big1 === 9007199254740991; // false (different types)

// =========================================================
// 🔸 5. Conversion
// =========================================================
const bigStr = big1.toString();  // "9007199254740991"
const bigNum = Number(big1);     // 9007199254740991 (unsafe if > MAX_SAFE_INTEGER)
const fromNum = BigInt(123);     // 123n
const fromStr = BigInt("456");   // 456n

// =========================================================
// 🔸 6. Bitwise Operations
// =========================================================
const a = 8n; // 1000
const b = 3n; // 0011
const and = a & b; // 0n
const or = a | b;  // 11n
const xor = a ^ b; // 11n
const shift = a << 2n; // 32n

// =========================================================
// 🔸 7. BigInt with Math functions ❌
// =========================================================
// Most Math functions don't accept BigInt
// Math.sqrt(big1); // ❌ TypeError
// Use Number(big1) if safe

// =========================================================
// 🔸 8. Logical / Practical Example — Large IDs
// =========================================================
const orderId = 9007199254740995n;
const nextOrderId = orderId + 1n; // Safe large integer increment
// console.log(nextOrderId); // 9007199254740996n

// =========================================================
// 🔸 9. Real-world Example — Safe Timestamps
// =========================================================
const timestamp = 1672531199999n; // BigInt timestamp
const nextSecond = timestamp + 1000n;

// =========================================================
// 🔸 10. Logical Example — Looping BigInt
// =========================================================
let i = 0n;
const limit = 5n;
while (i < limit) {
  // console.log(i);
  i++;
}

// =========================================================
// 🔸 11. Edge Cases
// =========================================================
const zero = 0n;
const neg = -123n;
const largeNum = BigInt(Number.MAX_SAFE_INTEGER) + 1n;

// =========================================================
// 🧠 THEORY
// =========================================================
/*
1️⃣ BigInt is a primitive type for representing integers with arbitrary precision.
2️⃣ Useful when Number type cannot safely store large integers (> 2^53 -1).
3️⃣ Always append `n` to literal numbers or use BigInt() constructor.
4️⃣ BigInt does NOT support decimal/floating point — only integers.
5️⃣ Arithmetic operators (+, -, *, /, %, **) are supported.
6️⃣ Cannot mix BigInt with Number directly; must convert explicitly.
7️⃣ Comparison operators (==, !=, <, >) work as expected; strict equality (===) differs by type.
8️⃣ Bitwise operators work, but Math functions generally do not.
*/

// =========================================================
// 🧠 INTERVIEW QUESTIONS (Basic → Advanced)
// =========================================================
/*
🔸 BASIC
1️⃣ What is BigInt in JavaScript?
2️⃣ Why do we need BigInt instead of Number?
3️⃣ How do you define a BigInt literal?
4️⃣ What happens if you mix Number and BigInt in arithmetic?

🔸 INTERMEDIATE
5️⃣ How does BigInt behave with comparison operators?
6️⃣ How do you convert BigInt to Number safely?
7️⃣ Can you use BigInt with Math functions like Math.sqrt()?
8️⃣ How does BigInt work with bitwise operators?

🔸 ADVANCED / LOGICAL
9️⃣ Write a function to safely increment a very large integer (beyond MAX_SAFE_INTEGER).
10️⃣ How to handle BigInt values returned from APIs for IDs or timestamps?
11️⃣ Explain why BigInt division truncates rather than produces decimals.
12️⃣ Can BigInt be used with JSON.stringify and JSON.parse directly?
13️⃣ How would you loop a BigInt range efficiently?
14️⃣ Discuss potential pitfalls of using BigInt in browser vs Node.js environments.
*/

// =========================================================
// 🧩 ADVANCED LOGICAL CHALLENGE
// =========================================================
function factorialBig(n) {
  let result = 1n;
  for (let i = 2n; i <= n; i++) {
    result *= i;
  }
  return result;
}

const fact50 = factorialBig(50n);
// console.log(fact50); // 30414093201713378043612608166064768844377641568960512000000000000n
