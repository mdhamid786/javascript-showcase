// =========================================================
// 🌟 JavaScript Proxy API — Basic to Advanced
// =========================================================

/*
🔹 What is Proxy?
A Proxy in JavaScript allows you to intercept and customize
operations performed on objects — like reading, writing, deleting,
or calling functions.

It’s part of ES6 (ECMAScript 2015) and is commonly used for:
✅ Data validation
✅ Access control
✅ Logging/debugging
✅ Observing changes
✅ Virtualization (lazy loading)
✅ Framework internals (e.g., Vue.js reactivity)
*/

// =========================================================
// 🔸 1. Basic Syntax
// =========================================================

/*
const proxy = new Proxy(target, handler);

target  → the original object to wrap
handler → object with "traps" (intercept methods)
*/

const user = { name: "Ali", age: 25 };

const proxy1 = new Proxy(user, {
  get(target, prop) {
    console.log(`Getting ${prop}`);
    return target[prop];
  },
});

console.log(proxy1.name); // Getting name → Ali


// =========================================================
// 🔸 2. Intercepting get, set, delete
// =========================================================

const product = { name: "Laptop", price: 1000 };

const proxy2 = new Proxy(product, {
  get(target, prop) {
    console.log(`GET: ${prop}`);
    return prop in target ? target[prop] : "❌ Not Found";
  },
  set(target, prop, value) {
    if (prop === "price" && value < 0) {
      throw new Error("Price cannot be negative!");
    }
    console.log(`SET: ${prop} = ${value}`);
    target[prop] = value;
    return true;
  },
  deleteProperty(target, prop) {
    console.log(`Deleting ${prop}`);
    delete target[prop];
    return true;
  },
});

console.log(proxy2.name); // GET: name → Laptop
proxy2.price = 1500;      // SET: price = 1500
delete proxy2.name;       // Deleting name
// proxy2.price = -10;    // ❌ Error: Price cannot be negative!


// =========================================================
// 🔸 3. Reflect + Proxy (Best Practice)
// =========================================================

const proxy3 = new Proxy(product, {
  get(target, prop, receiver) {
    console.log(`Accessing ${prop}`);
    return Reflect.get(target, prop, receiver);
  },
  set(target, prop, value, receiver) {
    console.log(`Updating ${prop}`);
    return Reflect.set(target, prop, value, receiver);
  },
});

proxy3.price = 2000; // Updating price
console.log(proxy3.price); // Accessing price → 2000


// =========================================================
// 🔸 4. Intercepting function calls (apply trap)
// =========================================================

function greet(name) {
  return `Hello, ${name}!`;
}

const proxyFn = new Proxy(greet, {
  apply(target, thisArg, args) {
    console.log(`Function called with args: ${args}`);
    return Reflect.apply(target, thisArg, args).toUpperCase();
  },
});

console.log(proxyFn("Ali")); // Function called... → HELLO, ALI!


// =========================================================
// 🔸 5. Construct Trap (Intercepting new)
// =========================================================

function Student(name) {
  this.name = name;
}

const StudentProxy = new Proxy(Student, {
  construct(target, args, newTarget) {
    console.log("Creating new student:", args);
    return Reflect.construct(target, args, newTarget);
  },
});

const s1 = new StudentProxy("Hamid"); // Creating new student: ['Hamid']
console.log(s1.name); // Hamid


// =========================================================
// 🔸 6. has() Trap — for `in` operator
// =========================================================

const secureUser = new Proxy({ name: "Ali", password: "12345" }, {
  has(target, prop) {
    if (prop === "password") {
      return false; // hide password property
    }
    return Reflect.has(target, prop);
  },
});

console.log("name" in secureUser); // true
console.log("password" in secureUser); // false


// =========================================================
// 🔸 7. ownKeys() Trap — Control Object.keys()
// =========================================================

const hidden = new Proxy({ a: 1, b: 2, secret: 99 }, {
  ownKeys(target) {
    return Reflect.ownKeys(target).filter(k => k !== "secret");
  },
});

console.log(Object.keys(hidden)); // ['a', 'b']


// =========================================================
// 🔸 8. defineProperty() and deleteProperty()
// =========================================================

const defineProxy = new Proxy({}, {
  defineProperty(target, prop, descriptor) {
    console.log(`Defining ${prop}`);
    return Reflect.defineProperty(target, prop, descriptor);
  },
  deleteProperty(target, prop) {
    console.log(`Deleting property ${prop}`);
    return Reflect.deleteProperty(target, prop);
  },
});

Object.defineProperty(defineProxy, "x", { value: 10 });
delete defineProxy.x;


// =========================================================
// 🔸 9. Real Use Case — Validation Layer
// =========================================================

const userValidator = {
  name: "Hamid",
  age: 25,
};

const validatorProxy = new Proxy(userValidator, {
  set(target, prop, value) {
    if (prop === "age" && typeof value !== "number") {
      throw new TypeError("Age must be a number");
    }
    if (prop === "name" && value.length < 3) {
      throw new Error("Name too short!");
    }
    return Reflect.set(target, prop, value);
  },
});

validatorProxy.name = "Ali";  // ✅ OK
validatorProxy.age = 30;      // ✅ OK
// validatorProxy.age = "twenty"; // ❌ Error: Age must be a number


// =========================================================
// 🔸 10. Advanced — Auto Logger (Reactive Proxy)
// =========================================================

function createLogger(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      console.log(`[GET] ${prop} → ${target[prop]}`);
      return Reflect.get(target, prop);
    },
    set(target, prop, value) {
      console.log(`[SET] ${prop} = ${value}`);
      return Reflect.set(target, prop, value);
    },
  });
}

const settings = createLogger({ theme: "dark", version: 1 });
settings.theme; // [GET] theme → dark
settings.version = 2; // [SET] version = 2


// =========================================================
// 🔸 11. Logical Example — Read-only Proxy
// =========================================================

const config = { appName: "MyApp", version: "1.0" };

const readOnly = new Proxy(config, {
  set() {
    throw new Error("❌ Cannot modify readonly object");
  },
});

console.log(readOnly.appName); // MyApp
// readOnly.appName = "NewApp"; // ❌ Error


// =========================================================
// 🔸 12. Performance Monitor Example
// =========================================================

function createPerfProxy(target) {
  return new Proxy(target, {
    get(target, prop) {
      const start = performance.now();
      const result = Reflect.get(target, prop);
      const end = performance.now();
      console.log(`Access to ${prop} took ${end - start}ms`);
      return result;
    },
  });
}

const perfUser = createPerfProxy({ name: "Ali", age: 25 });
perfUser.name;


// =========================================================
// 🧠 Interview Questions (Basic → Advanced)
// =========================================================

/*
Q1️⃣ What is a Proxy in JS?
A: An ES6 feature that wraps an object/function and allows intercepting 
   and redefining fundamental operations (get, set, apply, etc.)

Q2️⃣ Syntax of Proxy?
A: new Proxy(target, handler)

Q3️⃣ What are traps in Proxy?
A: The handler methods that intercept operations (like get, set, apply).

Q4️⃣ Common Traps:
   - get
   - set
   - has
   - deleteProperty
   - ownKeys
   - defineProperty
   - apply
   - construct

Q5️⃣ What is the difference between Proxy and Reflect?
A: Proxy intercepts operations, Reflect performs default behavior.
   Usually, both are used together.

Q6️⃣ Can you modify a function call using Proxy?
A: Yes, using the 'apply' trap.

Q7️⃣ Real-world uses of Proxy?
   ✅ Validation (type/constraints)
   ✅ Access control (private props)
   ✅ Logging & debugging
   ✅ Reactive UI frameworks (Vue, MobX)
   ✅ Lazy loading

Q8️⃣ What happens if you return false from set trap?
A: Assignment will fail silently in non-strict mode, 
   or throw in strict mode.

Q9️⃣ Difference between Proxy and Object.defineProperty?
A:
| Proxy                      | Object.defineProperty      |
|-----------------------------|-----------------------------|
| Intercepts many operations  | Works on a single property  |
| Runtime interception        | Static descriptor setup     |
| Can intercept methods & keys| Only get/set descriptors    |

Q🔟 Can Proxy be revoked?
A: Yes, using Proxy.revocable(target, handler)
   → returns { proxy, revoke() }
*/

// =========================================================
// 🔸 13. Bonus — Revocable Proxy
// =========================================================

const { proxy, revoke } = Proxy.revocable({ msg: "Hello" }, {
  get(target, prop) {
    return Reflect.get(target, prop);
  },
});

console.log(proxy.msg); // Hello
revoke(); // disable further access
// console.log(proxy.msg); // ❌ TypeError: Cannot perform 'get' on a proxy that has been revoked
