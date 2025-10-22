// =========================================================
// 🌟 JavaScript Optional Chaining (?.) — Basic to Advanced
// =========================================================

// =========================================================
// 🔸 1. Basic Usage
// =========================================================
// Accessing nested properties safely without throwing errors
const user = { profile: { name: "Ali" } };

const userName = user?.profile?.name; // "Ali"
const city = user?.address?.city;     // undefined (instead of error)

// =========================================================
// 🔸 2. Optional Function Calls
// =========================================================
const person = {
  greet: (name) => `Hello, ${name}!`
};

const greeting = person.greet?.("Ali"); // "Hello, Ali!"
const missingGreet = person.sayHi?.("Ali"); // undefined (safe)

// =========================================================
// 🔸 3. Optional Array Access
// =========================================================
const items = [10, 20, 30];
const first = items?.[0]; // 10
const tenth = items?.[9]; // undefined

// =========================================================
// 🔸 4. Default Values with ??
// =========================================================
const data = user?.address?.city ?? "No City";
const zip = user?.address?.zip ?? 110001;
// console.log(data, zip);

// =========================================================
// 🔸 5. Optional Chaining in Loops / Functions
// =========================================================
function printUserStreet(userObj) {
  const street = userObj?.address?.street ?? "Street not available";
  // console.log(street);
}

printUserStreet({ address: { street: "MG Road" } }); // MG Road
printUserStreet({}); // Street not available

// =========================================================
// 🔸 6. Real-world Example: API Responses
// =========================================================
const apiResponse = {
  data: {
    user: { profile: { age: 25 } }
  }
};

const userAge = apiResponse?.data?.user?.profile?.age ?? "Age unknown";
// console.log(userAge); // 25

const userEmail = apiResponse?.data?.user?.profile?.email ?? "No Email";
// console.log(userEmail); // No Email

// =========================================================
// 🔸 7. Optional Chaining with Methods
// =========================================================
const obj = {
  hello: () => "Hi!"
};
const val1 = obj.hello?.(); // "Hi!"
const val2 = obj.bye?.();   // undefined

// =========================================================
// 🔸 8. Combination with ?? and ??
// =========================================================
const config = { debug: false, maxRetries: 0 };
const debugMode = config?.debug ?? true;       // false
const retries = config?.maxRetries ?? 3;       // 0

// =========================================================
// 🔸 9. Avoiding Errors
// =========================================================
// Without optional chaining
// const street = user.address.street; // Error if address is undefined

// With optional chaining
const streetSafe = user?.address?.street; // undefined (safe)

// =========================================================
// 🔸 10. Logical Example — Deep Object Access
// =========================================================
const orders = [
  { id: 1, customer: { name: "Ali" } },
  { id: 2 } // customer missing
];

orders.forEach(order => {
  const customerName = order?.customer?.name ?? "Guest";
  // console.log(customerName); // Ali, Guest
});

// =========================================================
// 🧠 THEORY
// =========================================================
/*
1️⃣ Optional Chaining (?.) is used to safely access:
   - Nested object properties
   - Array elements
   - Function/method calls
   - Avoids TypeError when accessing undefined/null

2️⃣ Syntax:
   object?.property
   object?.[expr]
   object?.method()
   
3️⃣ Works well with nullish coalescing (??) to provide defaults

4️⃣ Benefits:
   - Reduces verbose checks: if(obj && obj.prop && ...)
   - Avoids runtime errors
   - Makes code cleaner and safer

5️⃣ Key Points:
   - Returns undefined if the property doesn’t exist
   - Stops evaluation immediately if any part is null/undefined
   - Only short-circuits at the undefined/null value
*/

// =========================================================
// 🧠 INTERVIEW QUESTIONS (Basic → Advanced)
// =========================================================
/*
🔸 BASIC
1️⃣ What is optional chaining (?.) in JavaScript?
2️⃣ How does ?. differ from normal property access?
3️⃣ What happens when you access a missing property using ?.?
4️⃣ Can you use optional chaining with arrays or functions?

🔸 INTERMEDIATE
5️⃣ How does optional chaining work with nullish coalescing (??)?
6️⃣ What is the difference between obj?.prop and obj?.[expr]?
7️⃣ How can optional chaining prevent runtime errors?
8️⃣ Can optional chaining be chained multiple times for deep objects?

🔸 ADVANCED / LOGICAL
9️⃣ Write a function that safely retrieves the nested property: user.profile.address.city
10️⃣ How can you combine ?. and ?? to provide default values in API responses?
11️⃣ How does JavaScript evaluate optional chaining internally?
12️⃣ Can you use optional chaining in combination with destructuring? Explain.
13️⃣ What are some pitfalls or things to avoid when using optional chaining?
14️⃣ Write a safe function call using optional chaining for an optional method: obj.maybeFunc()
*/

// =========================================================
// 🧩 ADVANCED LOGICAL CHALLENGE
// =========================================================
function getNestedValue(obj) {
  return obj?.level1?.level2?.level3 ?? "Default";
}

const test1 = { level1: { level2: { level3: "Found" } } }; // "Found"
const test2 = { level1: { level2: {} } };                   // "Default"
const test3 = null;                                        // "Default"
