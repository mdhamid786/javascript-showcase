// =========================================================
// 🌟 Reflect API in JavaScript — Basic to Advanced
// =========================================================

/*
🔹 What is Reflect?
Reflect is a built-in global object introduced in ES6.
It provides static methods to perform object-level operations 
(like get, set, delete, construct, apply, etc.)
in a consistent and functional way.

Reflect is mainly used for:
✅ Meta-programming (working with objects' structure)
✅ Safe operations (returns true/false instead of throwing)
✅ Used together with Proxy for traps (handler methods)
*/

// =========================================================
// 🔸 1. Basic Reflect Methods
// =========================================================

const user = { name: "Ali", age: 25 };

// ✅ Reflect.get(target, property)
console.log(Reflect.get(user, "name")); // Ali

// ✅ Reflect.set(target, property, value)
Reflect.set(user, "age", 26);
console.log(user.age); // 26

// ✅ Reflect.has(target, property)  → like 'in'
console.log(Reflect.has(user, "name")); // true

// ✅ Reflect.deleteProperty(target, property)
Reflect.deleteProperty(user, "age");
console.log(user); // { name: 'Ali' }

// ✅ Reflect.ownKeys(target)
const example = { a: 1, [Symbol("id")]: 99 };
console.log(Reflect.ownKeys(example)); // ['a', Symbol(id)]


// =========================================================
// 🔸 2. Reflect.defineProperty & getOwnPropertyDescriptor
// =========================================================

const person = {};
Reflect.defineProperty(person, "name", {
  value: "Hamid",
  writable: true,
  configurable: true,
  enumerable: true,
});
console.log(person.name); // Hamid

const descriptor = Reflect.getOwnPropertyDescriptor(person, "name");
console.log(descriptor);
// { value: 'Hamid', writable: true, configurable: true, enumerable: true }


// =========================================================
// 🔸 3. Reflect.apply() — Safe function call
// =========================================================

function greet(greeting, punctuation) {
  return `${greeting}, ${this.name}${punctuation}`;
}
const userObj = { name: "Ali" };
console.log(Reflect.apply(greet, userObj, ["Hello", "!"])); // Hello, Ali!


// =========================================================
// 🔸 4. Reflect.construct() — Like 'new' operator
// =========================================================

function Student(name) {
  this.name = name;
}
const s = Reflect.construct(Student, ["Hamid"]);
console.log(s instanceof Student); // true
console.log(s.name); // Hamid


// =========================================================
// 🔸 5. Reflect.preventExtensions() & isExtensible()
// =========================================================

const obj = { x: 1 };
Reflect.preventExtensions(obj);
console.log(Reflect.isExtensible(obj)); // false
obj.y = 10; // No effect since object is not extensible
console.log(obj); // { x: 1 }


// =========================================================
// 🔸 6. Reflect with Proxy — Common Interview Concept
// =========================================================

const handler = {
  get(target, prop, receiver) {
    console.log(`Getting ${prop}`);
    return Reflect.get(target, prop, receiver); // delegate safely
  },
  set(target, prop, value, receiver) {
    console.log(`Setting ${prop} = ${value}`);
    return Reflect.set(target, prop, value, receiver);
  },
};

const proxyUser = new Proxy({ name: "Ali" }, handler);
proxyUser.name;  // Logs: Getting name
proxyUser.age = 30; // Logs: Setting age = 30


// =========================================================
// 🔸 7. Logical Example — Safe Getter Function
// =========================================================

function safeGet(obj, key, defaultValue = "N/A") {
  return Reflect.has(obj, key) ? Reflect.get(obj, key) : defaultValue;
}

console.log(safeGet({ a: 10 }, "a", 0)); // 10
console.log(safeGet({ a: 10 }, "b", 0)); // 0


// =========================================================
// 🔸 8. Logical Example — Validation with Reflect
// =========================================================

const product = {
  name: "Laptop",
  price: 1000,
};

const validatedProduct = new Proxy(product, {
  set(target, prop, value) {
    if (prop === "price" && value < 0) {
      throw new Error("❌ Price cannot be negative!");
    }
    return Reflect.set(target, prop, value);
  },
});

validatedProduct.price = 1500; // ✅ OK
// validatedProduct.price = -10; // ❌ Error: Price cannot be negative


// =========================================================
// 🔸 9. Advanced — Reflect + Proxy Logging System
// =========================================================

const logHandler = {
  get(target, prop, receiver) {
    console.log(`[LOG] Accessed: ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`[LOG] Updated: ${prop} = ${value}`);
    return Reflect.set(target, prop, value, receiver);
  },
};

const userProfile = new Proxy({ name: "Ali", age: 25 }, logHandler);
userProfile.name; // [LOG] Accessed: name
userProfile.age = 26; // [LOG] Updated: age = 26


// =========================================================
// 🧠 Interview Questions (Basic → Advanced)
// =========================================================

/*
Q1️⃣ What is the Reflect API?
A: Reflect is a built-in ES6 object that provides static methods
   for performing common object operations in a consistent and safe way.

Q2️⃣ Why was Reflect introduced?
A: To standardize object manipulation methods and work seamlessly with Proxy traps.

Q3️⃣ Difference between Reflect and Object?
A:
| Reflect                      | Object                         |
|------------------------------|--------------------------------|
| Meta-programming focus       | Structure/data focus            |
| Returns boolean instead of errors | May throw errors               |
| Works directly with Proxy    | Doesn’t integrate with Proxy     |

Q4️⃣ What is Reflect.apply() used for?
A: To safely call a function with a given 'this' context and arguments list.

Q5️⃣ What is Reflect.construct()?
A: It works like the 'new' operator but allows dynamic class creation.

Q6️⃣ How does Reflect work with Proxy?
A: Proxy traps often use Reflect methods to preserve default behavior 
   while adding custom logic (logging, validation, etc.)

Q7️⃣ What happens if Reflect.set() fails?
A: It returns `false` instead of throwing an exception.

Q8️⃣ Why is Reflect more predictable than Object methods?
A: Because it always returns a boolean or the intended result,
   without unexpected errors or prototype interference.

Q9️⃣ Is Reflect a constructor?
A: ❌ No. You cannot use `new Reflect()` — it’s a static utility object.

Q🔟 How can Reflect be used in real projects?
A: Validation, access control, debugging/logging, and 
   simplifying meta-level Proxy logic.
*/


// =========================================================
// 🔸 10. Challenge — Controlled Object Access
// =========================================================

const secureHandler = {
  get(target, prop, receiver) {
    if (prop.startsWith("_")) {
      throw new Error("🚫 Access denied to private property!");
    }
    return Reflect.get(target, prop, receiver);
  },
};

const secureObj = new Proxy({ _token: "secret123", user: "Ali" }, secureHandler);

console.log(secureObj.user); // ✅ Ali
// console.log(secureObj._token); // ❌ Error: Access denied
