// =========================================================
// 🌟 JavaScript Nullish Coalescing Operator (??)
// =========================================================

// =========================================================
// 🔸 1. Basic Example
// =========================================================
// The nullish coalescing operator (??) returns the right-hand value 
// only when the left-hand value is null or undefined (NOT falsy like 0 or "")
let username = null;
let displayName = username ?? "Guest";
// console.log(displayName); // "Guest"

// =========================================================
// 🔸 2. Difference between || (OR) and ?? (Nullish)
// =========================================================
let value1 = 0 || 100;   // OR treats 0 as falsy → returns 100
let value2 = 0 ?? 100;   // ?? ignores 0 (not null/undefined) → returns 0
// console.log(value1, value2); // 100, 0

// =========================================================
// 🔸 3. Nested Nullish Coalescing
// =========================================================
let first = null;
let second = undefined;
let third = "Valid";
let result = first ?? second ?? third;
// console.log(result); // "Valid"

// =========================================================
// 🔸 4. Practical Example: Default Settings
// =========================================================
function setup(options) {
  const theme = options.theme ?? "light";
  const language = options.language ?? "en";
  // console.log(`Theme: ${theme}, Language: ${language}`);
}
setup({ theme: null }); // Theme: light, Language: en

// =========================================================
// 🔸 5. Chaining ?? with Optional Chaining (?.)
// =========================================================
const user = { profile: { name: null } };
const userName = user?.profile?.name ?? "Anonymous";
// console.log(userName); // "Anonymous"

// =========================================================
// 🔸 6. Avoiding TypeError
// =========================================================
const config = null;
const retryCount = config?.maxRetries ?? 3;
// console.log(retryCount); // 3

// =========================================================
// 🔸 7. Logical Example: Fallback API Data
// =========================================================
const apiResponse = { status: "ok", data: null };
const data = apiResponse.data ?? "No Data Available";
// console.log(data); // "No Data Available"

// =========================================================
// 🔸 8. Nullish Assignment (??=)
// =========================================================
// Shorthand for: if (x is null or undefined) then assign new value
let retries = null;
retries ??= 5;
// console.log(retries); // 5

let limit = 0;
limit ??= 10; // stays 0 because it's not null or undefined
// console.log(limit); // 0

// =========================================================
// 🔸 9. Real-world Example: Environment Variables
// =========================================================
const PORT = process.env.PORT ?? 5000;
// console.log(`Server running on port ${PORT}`);

// =========================================================
// 🔸 10. Combining ?? and &&
// =========================================================
// Safe conditional logic
const configObj = { debug: false };
const debugMode = configObj.debug ?? true;
// console.log(debugMode); // false (since debug is defined)

// =========================================================
// 🔸 11. Logical Challenge Example
// =========================================================
function getDiscount(user) {
  const discount = user?.membership?.discount ?? 0;
  return `Discount: ${discount}%`;
}

const userA = { membership: { discount: 20 } };
const userB = { membership: { discount: null } };
const userC = {};

getDiscount(userA); // "Discount: 20%"
getDiscount(userB); // "Discount: 0%"
getDiscount(userC); // "Discount: 0%"

// =========================================================
// 🔸 12. Edge Cases
// =========================================================
// 0, false, and '' are not nullish → kept as-is
let a = 0 ?? 10; // 0
let b = false ?? true; // false
let c = "" ?? "default"; // ""
// console.log(a, b, c);

// =========================================================
// 🧠 THEORY SECTION
// =========================================================
/*
🔹 The Nullish Coalescing Operator (??)
   - Introduced in ES2020 (ES11)
   - Used to provide a default value ONLY when the left side is null or undefined.

🔹 Difference with Logical OR (||)
   - || considers 0, '', false as falsy → replaces them
   - ?? ignores 0, '', false (only reacts to null or undefined)

🔹 Common Use-Cases:
   1️⃣ Defaulting API or user input values
   2️⃣ Safe fallbacks for environment variables
   3️⃣ Handling optional properties without overwriting valid falsy values
   4️⃣ Combine with optional chaining for safe access

🔹 Syntax:
   result = leftExpr ?? rightExpr;
   result = leftExpr ?? (rightExpr ?? defaultValue);

🔹 Nullish Assignment (??=)
   variable ??= value;
   // Assigns only if variable is null or undefined
*/

// =========================================================
// 🧠 INTERVIEW QUESTIONS (Basic → Advanced)
// =========================================================
/*
🔸 BASIC
1️⃣ What does the nullish coalescing operator (??) do in JavaScript?
2️⃣ How is ?? different from the logical OR (||) operator?
3️⃣ What values are considered “nullish”?
4️⃣ What is the output of: let x = 0 ?? 100?

🔸 INTERMEDIATE
5️⃣ Why would you use ?? over || when setting defaults?
6️⃣ How does ?? work with optional chaining (?.)?
7️⃣ What is the purpose of the ??= operator?
8️⃣ When is ?? useful in real-world applications like configuration or API responses?

🔸 ADVANCED / LOGICAL
9️⃣ Write a function that safely retrieves deeply nested object properties using ?? and ?.
🔟 Combine ?? and Promise results to handle default values if an API fails.
11️⃣ Explain how ?? avoids overwriting legitimate falsy values in input validation.
12️⃣ How does JavaScript internally evaluate ?? — what short-circuiting behavior does it follow?
13️⃣ Why can’t you mix ?? directly with || or && without parentheses?
14️⃣ What’s the output of:
    console.log(null || 0 ?? 'A'); // ?
    console.log((null || 0) ?? 'A'); // ?
    // Understanding operator precedence
*/

// =========================================================
// 🧩 ADVANCED LOGICAL CHALLENGE
// =========================================================
function safeConfig(config) {
  return {
    host: config?.host ?? "localhost",
    port: config?.port ?? 8080,
    secure: config?.secure ?? false,
  };
}

const cfg1 = { host: "api.com", secure: true };
const cfg2 = { port: 3000 };
const cfg3 = null;

safeConfig(cfg1); // {host:'api.com', port:8080, secure:true}
safeConfig(cfg2); // {host:'localhost', port:3000, secure:false}
safeConfig(cfg3); // {host:'localhost', port:8080, secure:false}
