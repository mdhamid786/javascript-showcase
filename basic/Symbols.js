// =============================================
// 🔹 SYMBOLS IN JAVASCRIPT – COMPLETE GUIDE
// =============================================

// 🔸 1. BASIC DEFINITION
// Symbol is a primitive data type introduced in ES6.
// It’s used to create unique identifiers for object properties.

const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log(sym1 === sym2); // ❌ false — every Symbol is unique

// Even if they have the same description, they are NOT equal.

// ---------------------------------------------
// 🔸 2. USAGE AS OBJECT KEYS

const user = {
  name: "Ali",
  age: 25,
  [sym1]: "Private ID",
};

console.log(user.name); // Ali
console.log(user[sym1]); // "Private ID"

// Symbols are not included in normal for...in or Object.keys()
for (let key in user) console.log(key); // Only name, age

console.log(Object.keys(user)); // ["name", "age"]
console.log(Object.getOwnPropertySymbols(user)); // [ Symbol(id) ]

// ---------------------------------------------
// 🔸 3. GLOBAL SYMBOL REGISTRY (Symbol.for, Symbol.keyFor)

// Symbol.for() creates/retrieves a symbol from global registry
const globalSym1 = Symbol.for("token");
const globalSym2 = Symbol.for("token");

console.log(globalSym1 === globalSym2); // ✅ true — same global symbol

// Symbol.keyFor() retrieves the key from global registry
console.log(Symbol.keyFor(globalSym1)); // "token"

// Normal symbols are not stored in the global registry
console.log(Symbol.keyFor(sym1)); // undefined

// ---------------------------------------------
// 🔸 4. HIDDEN / PRIVATE-LIKE PROPERTIES

const car = {
  name: "Tesla",
  [Symbol("secret")]: "Electric Engine",
};

// Good for “internal” data — not accessible accidentally
console.log(Object.keys(car)); // ["name"]
console.log(Object.getOwnPropertySymbols(car)); // [ Symbol(secret) ]

// ---------------------------------------------
// 🔸 5. WELL-KNOWN SYMBOLS (BUILT-IN SYMBOLS)

// These let you customize object behavior.
const customObj = {
  [Symbol.toPrimitive](hint) {
    if (hint === "string") return "Custom String";
    if (hint === "number") return 999;
    return "Default";
  },
};

console.log(String(customObj)); // "Custom String"
console.log(+customObj); // 999
console.log(customObj + ""); // "Default"

// Other useful built-in Symbols:
// Symbol.iterator → used for iteration (e.g., for...of)
// Symbol.toStringTag → customize [object Type] output
// Symbol.hasInstance → customize instanceof behavior

// Example:
class MyClass {
  static [Symbol.hasInstance](instance) {
    return instance.flag === true;
  }
}

const obj = { flag: true };
console.log(obj instanceof MyClass); // ✅ true

// ---------------------------------------------
// 🔸 6. SYMBOLS WITH ITERATORS

const iterable = {
  data: [10, 20, 30],
  [Symbol.iterator]() {
    let i = 0;
    return {
      next: () => ({
        value: this.data[i++],
        done: i > this.data.length,
      }),
    };
  },
};

for (const val of iterable) console.log(val); // 10, 20, 30

// ---------------------------------------------
// 🔸 7. SYMBOLS AND CLASSES (PRIVATE-LIKE FIELDS)

const secretKey = Symbol("secret");

class Account {
  constructor(name, balance) {
    this.name = name;
    this[secretKey] = balance;
  }

  getBalance() {
    return this[secretKey];
  }
}

const acc = new Account("Ali", 5000);
console.log(acc.getBalance()); // 5000
console.log(acc.secret); // undefined
console.log(Object.getOwnPropertySymbols(acc)); // [ Symbol(secret) ]

// ---------------------------------------------
// 🔸 8. SYMBOLS IN JSON

const objWithSymbol = {
  visible: "✅ visible",
  [Symbol("hidden")]: "❌ hidden",
};

console.log(JSON.stringify(objWithSymbol)); // {"visible":"✅ visible"}
// Symbol keys are ignored in JSON.stringify

// ---------------------------------------------
// 🔸 9. COMMON INTERVIEW QUESTIONS

/**
 * 1️⃣ What is a Symbol?
 *    → A unique and immutable primitive value often used as object keys.
 *
 * 2️⃣ Why are Symbols unique?
 *    → Each call to Symbol() creates a new unique value, regardless of description.
 *
 * 3️⃣ What’s the difference between Symbol() and Symbol.for()?
 *    → Symbol() creates a local unique symbol.
 *      Symbol.for() accesses a global symbol (shared registry).
 *
 * 4️⃣ Are Symbols enumerable?
 *    → No, they’re skipped in for...in and Object.keys().
 *      Use Object.getOwnPropertySymbols() to access them.
 *
 * 5️⃣ How are Symbols useful in hiding properties?
 *    → Since they are not enumerable, they’re ideal for private-like properties.
 *
 * 6️⃣ Can Symbols be used in JSON?
 *    → No, JSON.stringify ignores Symbol keys.
 *
 * 7️⃣ How do built-in symbols like Symbol.iterator work?
 *    → They define special object behaviors (like making an object iterable).
 *
 * 8️⃣ What is Symbol.toPrimitive used for?
 *    → To define custom conversion logic for objects to string/number.
 *
 * 9️⃣ Why use Symbol.hasInstance?
 *    → To control how “instanceof” behaves for custom classes.
 *
 * 🔟 How to retrieve all symbol keys from an object?
 *    → Object.getOwnPropertySymbols(obj)
 */

// ---------------------------------------------
// 🔸 10. ADVANCED EXAMPLE: Symbol-based registry

const eventRegistry = {
  [Symbol.for("login")]: () => console.log("User logged in"),
  [Symbol.for("logout")]: () => console.log("User logged out"),
};

eventRegistry[Symbol.for("login")](); // User logged in

// ---------------------------------------------
// 🔸 11. KEY TAKEAWAYS
/**
 * ✅ Symbols are unique and immutable.
 * ✅ Great for defining hidden properties.
 * ✅ Not enumerable (excluded from loops/JSON).
 * ✅ Useful for metaprogramming (well-known symbols).
 * ✅ Symbol.for() enables global reuse.
 * ✅ Common in libraries and frameworks internally.
 */
