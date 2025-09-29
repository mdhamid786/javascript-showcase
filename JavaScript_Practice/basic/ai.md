# Complete JavaScript Interview Questions Guide: Basic to Advanced

## Table of Contents

1. [Module 1: JavaScript Basics](#module-1-javascript-basics)
2. [Module 2: JavaScript Functions & Closures](#module-2-javascript-functions--closures)
3. [Module 3: Objects & Arrays](#module-3-objects--arrays)
4. [Module 4: Asynchronous JavaScript](#module-4-asynchronous-javascript)
5. [Module 5: ES6+ Features](#module-5-es6-features)
6. [Module 6: DOM & Browser APIs](#module-6-dom--browser-apis)
7. [Module 7: Advanced JavaScript Concepts](#module-7-advanced-javascript-concepts)
8. [Module 8: JavaScript Patterns & Best Practices](#module-8-javascript-patterns--best-practices)
9. [Module 9: Most Asked Interview Questions](#module-9-most-asked-interview-questions)

## Module 1: JavaScript Basics

**Goal:** Understand syntax, data types, operators, and basic programming logic.

### Core Topics:

#### 1. Variables: var, let, const

```javascript
// Interview Question 1: What will be the output?
console.log(x); // undefined (hoisting)
var x = 5;

console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 15;
```

**Key Differences:**

- `var`: Function-scoped, hoisted with `undefined`
- `let`: Block-scoped, hoisted but in temporal dead zone
- `const`: Block-scoped, must be initialized, immutable binding

#### 2. Data Types: string, number, boolean, undefined, null, symbol, bigint

```javascript
// Interview Question 2: Identify data types
console.log(typeof 42); // "number"
console.log(typeof "hello"); // "string"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (famous JavaScript quirk!)
console.log(typeof Symbol()); // "symbol"
console.log(typeof 123n); // "bigint"
```

#### 3. Type Conversion

```javascript
// Interview Question 3: Predict the outputs
console.log(String(123)); // "123"
console.log(Number("456")); // 456
console.log(Boolean(0)); // false
console.log(Boolean("")); // false
console.log(Boolean("0")); // true
console.log(+"123"); // 123 (implicit conversion)
console.log("" + 123); // "123" (implicit conversion)
```

#### 4. Operators and Comparisons

```javascript
// Interview Question 4: Tricky comparisons
console.log(0 == false); // true
console.log(0 === false); // false
console.log("" == false); // true
console.log("" === false); // false
console.log(null == undefined); // true
console.log(null === undefined); // false
```

#### 5. Pre-increment vs Post-increment

```javascript
// Interview Question 5: What's the difference?
let a = 5;
console.log(a++); // 5 (returns current value, then increments)
console.log(a); // 6

let b = 5;
console.log(++b); // 6 (increments first, then returns value)
console.log(b); // 6
```

### Tricky Logic Areas:

1. **NaN === NaN is false** - NaN is not equal to anything, including itself
2. **0.1 + 0.2 !== 0.3** - Floating point precision issues
3. **typeof null === "object"** - Historical JavaScript bug
4. **Falsy values:** `false`, `0`, `-0`, `0n`, `""`, `null`, `undefined`, `NaN`

## Module 2: JavaScript Functions & Closures

**Goal:** Master functions, closures, and execution context.

### Core Topics:

#### 1. Function Types

```javascript
// Function Declaration
function add(a, b) {
  return a + b;
}

// Function Expression
const multiply = function (a, b) {
  return a * b;
};

// Arrow Function
const divide = (a, b) => a / b;
```

#### 2. Closures

```javascript
// Interview Question 6: Famous closure question
function createCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2
```

```javascript
// Interview Question 7: Loop closure problem
for (var i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // 3, 3, 3 (not 0, 1, 2)
  }, 100);
}

// Solution 1: Use let
for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i); // 0, 1, 2
  }, 100);
}

// Solution 2: Use IIFE
for (var i = 0; i < 3; i++) {
  (function (j) {
    setTimeout(function () {
      console.log(j); // 0, 1, 2
    }, 100);
  })(i);
}
```

#### 3. IIFE (Immediately Invoked Function Expression)

```javascript
// Interview Question 8: IIFE usage
(function () {
  var privateVar = "I'm private";
  console.log(privateVar);
})();

// console.log(privateVar); // ReferenceError
```

#### 4. Call, Apply, Bind

```javascript
// Interview Question 9: this binding
const person = {
  name: "John",
  greet: function (greeting, punctuation) {
    return `${greeting}, I'm ${this.name}${punctuation}`;
  },
};

const anotherPerson = { name: "Jane" };

// call: arguments individually
console.log(person.greet.call(anotherPerson, "Hello", "!"));

// apply: arguments as array
console.log(person.greet.apply(anotherPerson, ["Hi", "."]));

// bind: creates new function
const boundGreet = person.greet.bind(anotherPerson);
console.log(boundGreet("Hey", "?"));
```

## Module 3: Objects & Arrays

**Goal:** Deep understanding of objects, arrays, and their manipulation.

### Core Topics:

#### 1. Object Creation Methods

```javascript
// Object literal
const obj1 = { name: "John", age: 25 };

// Constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}
const obj2 = new Person("Jane", 30);

// Object.create()
const obj3 = Object.create({ species: "human" });
obj3.name = "Bob";
```

#### 2. this Keyword in Objects

```javascript
// Interview Question 10: this behavior
const obj = {
  name: "Alice",
  regularFunction: function () {
    console.log(this.name); // 'Alice'
  },
  arrowFunction: () => {
    console.log(this.name); // undefined (arrow functions don't bind this)
  },
};

obj.regularFunction(); // 'Alice'
obj.arrowFunction(); // undefined
```

#### 3. Array Methods

```javascript
// Interview Question 11: Array method differences
const numbers = [1, 2, 3, 4, 5];

// Mutating methods
numbers.push(6); // Modifies original array
numbers.splice(0, 1); // Modifies original array

// Non-mutating methods
const doubled = numbers.map((x) => x * 2); // Returns new array
const filtered = numbers.filter((x) => x > 2); // Returns new array
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
```

#### 4. Shallow vs Deep Copy

```javascript
// Interview Question 12: Copy behavior
const original = {
  name: "John",
  address: { city: "NYC", zip: "10001" },
};

// Shallow copy
const shallow = { ...original };
shallow.address.city = "LA";
console.log(original.address.city); // 'LA' (original affected!)

// Deep copy
const deep = JSON.parse(JSON.stringify(original));
deep.address.city = "Chicago";
console.log(original.address.city); // Still 'LA'
```

## Module 4: Asynchronous JavaScript

**Goal:** Handle async operations correctly.

### Core Topics:

#### 1. Event Loop Understanding

```javascript
// Interview Question 13: Event loop execution order
console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");

// Output: 1, 4, 3, 2
// Explanation: Microtasks (Promises) have higher priority than macrotasks (setTimeout)
```

#### 2. Promises

```javascript
// Interview Question 14: Promise chaining
const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => resolve("First"), 1000);
});

const promise2 = promise1
  .then((result) => {
    console.log(result); // 'First'
    return "Second";
  })
  .then((result) => {
    console.log(result); // 'Second'
    throw new Error("Oops!");
  })
  .catch((error) => {
    console.log(error.message); // 'Oops!'
    return "Third";
  })
  .then((result) => {
    console.log(result); // 'Third'
  });
```

#### 3. Async/Await

```javascript
// Interview Question 15: Async/await vs Promises
// Promise version
function fetchDataPromise() {
  return fetch("/api/data")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    })
    .catch((error) => {
      console.error(error);
      throw error;
    });
}

// Async/await version
async function fetchDataAsync() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
```

#### 4. Microtasks vs Macrotasks

```javascript
// Interview Question 16: Execution order
setTimeout(() => console.log("setTimeout"), 0);
setImmediate(() => console.log("setImmediate"));
process.nextTick(() => console.log("nextTick"));
Promise.resolve().then(() => console.log("Promise"));

// Node.js output: nextTick, Promise, setTimeout, setImmediate
// Browser output: Promise, setTimeout
```

## Module 5: ES6+ Features

**Goal:** Modern JS syntax and best practices.

### Core Topics:

#### 1. Arrow Functions vs Regular Functions

```javascript
// Interview Question 17: this binding differences
const obj = {
  name: "John",
  regularMethod: function () {
    setTimeout(function () {
      console.log(this.name); // undefined (this is window/global)
    }, 1000);
  },
  arrowMethod: function () {
    setTimeout(() => {
      console.log(this.name); // 'John' (arrow function inherits this)
    }, 1000);
  },
};
```

#### 2. Destructuring Assignment

```javascript
// Interview Question 18: Advanced destructuring
const user = {
  id: 1,
  name: "John",
  address: {
    street: "123 Main St",
    city: "NYC",
  },
  hobbies: ["reading", "coding"],
};

// Object destructuring with renaming and defaults
const {
  name: userName,
  age = 25,
  address: { city },
} = user;

// Array destructuring with rest
const [first, second, ...rest] = user.hobbies;
```

#### 3. Template Literals

```javascript
// Interview Question 19: Template literal features
const name = "John";
const age = 25;

// Multi-line strings and expression interpolation
const message = `
    Hello, my name is ${name}.
    I am ${age} years old.
    Next year I'll be ${age + 1}.
`;

// Tagged template literals
function highlight(strings, ...values) {
  return strings.reduce((result, string, i) => {
    return result + string + (values[i] ? `<strong>${values[i]}</strong>` : "");
  }, "");
}

const highlighted = highlight`Name: ${name}, Age: ${age}`;
```

#### 4. Classes and Inheritance

```javascript
// Interview Question 20: Class inheritance
class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return `${this.name} makes a sound`;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  speak() {
    return `${this.name} barks`;
  }
}

const dog = new Dog("Rex", "German Shepherd");
console.log(dog.speak()); // 'Rex barks'
```

## Module 6: DOM & Browser APIs

**Goal:** Manipulate HTML and handle browser events.

### Core Topics:

#### 1. DOM Manipulation

```javascript
// Interview Question 21: DOM methods
// Selecting elements
const element1 = document.getElementById("myId");
const element2 = document.querySelector(".myClass");
const elements = document.querySelectorAll("div");

// Creating and modifying elements
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
newDiv.innerHTML = "<strong>Hello World</strong>";
document.body.appendChild(newDiv);
```

#### 2. Event Handling

```javascript
// Interview Question 22: Event delegation
// Instead of attaching event to each button
document.addEventListener("click", function (event) {
  if (event.target.matches(".delete-btn")) {
    // Handle delete button click
    event.target.parentElement.remove();
  }
});
```

#### 3. Event Bubbling and Capturing

```javascript
// Interview Question 23: Event propagation
document.getElementById("parent").addEventListener("click", function () {
  console.log("Parent clicked");
});

document.getElementById("child").addEventListener("click", function (event) {
  console.log("Child clicked");
  event.stopPropagation(); // Stops bubbling to parent
});
```

## Module 7: Advanced JavaScript Concepts

**Goal:** Prepare for senior-level interviews.

### Core Topics:

#### 1. Prototypes and Prototype Chain

```javascript
// Interview Question 24: Prototype inheritance
function Person(name) {
  this.name = name;
}

Person.prototype.greet = function () {
  return `Hello, I'm ${this.name}`;
};

function Developer(name, language) {
  Person.call(this, name);
  this.language = language;
}

// Set up prototype chain
Developer.prototype = Object.create(Person.prototype);
Developer.prototype.constructor = Developer;

Developer.prototype.code = function () {
  return `${this.name} codes in ${this.language}`;
};

const dev = new Developer("John", "JavaScript");
console.log(dev.greet()); // 'Hello, I'm John'
console.log(dev.code()); // 'John codes in JavaScript'
```

#### 2. Debounce and Throttle

```javascript
// Interview Question 25: Implement debounce
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Usage
const debouncedSearch = debounce(function (query) {
  console.log(`Searching for: ${query}`);
}, 300);

// Interview Question 26: Implement throttle
function throttle(func, limit) {
  let inThrottle;
  return function () {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}
```

#### 3. Currying

```javascript
// Interview Question 27: Function currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function (...args2) {
        return curried.apply(this, args.concat(args2));
      };
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
```

## Module 8: JavaScript Patterns & Best Practices

**Goal:** Clean, maintainable, and efficient code.

### Core Topics:

#### 1. Module Pattern

```javascript
// Interview Question 28: Module pattern
const UserModule = (function () {
  // Private variables
  let users = [];

  // Private methods
  function validateUser(user) {
    return user.name && user.email;
  }

  // Public API
  return {
    addUser: function (user) {
      if (validateUser(user)) {
        users.push(user);
        return true;
      }
      return false;
    },

    getUsers: function () {
      return [...users]; // Return copy, not reference
    },

    getUserCount: function () {
      return users.length;
    },
  };
})();
```

#### 2. Observer Pattern

```javascript
// Interview Question 29: Observer pattern
class EventEmitter {
  constructor() {
    this.events = {};
  }

  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  emit(event, data) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(data));
    }
  }

  off(event, listenerToRemove) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter(
        (listener) => listener !== listenerToRemove
      );
    }
  }
}
```

## Module 9: Most Asked Interview Questions

### Logical and Tricky Questions:

#### Question 30: What is NaN === NaN?

```javascript
console.log(NaN === NaN); // false
console.log(Number.isNaN(NaN)); // true
console.log(Object.is(NaN, NaN)); // true
```

#### Question 31: Implement deep clone

```javascript
function deepClone(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    return obj.map((item) => deepClone(item));
  }

  if (typeof obj === "object") {
    const clonedObj = {};
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        clonedObj[key] = deepClone(obj[key]);
      }
    }
    return clonedObj;
  }
}
```

#### Question 32: Flatten nested array

```javascript
function flattenArray(arr) {
  return arr.reduce((acc, curr) => {
    return acc.concat(Array.isArray(curr) ? flattenArray(curr) : curr);
  }, []);
}

// ES6 version
const flatten = (arr) => arr.flat(Infinity);
```

#### Question 33: Reverse string without built-in methods

```javascript
function reverseString(str) {
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Recursive version
function reverseStringRecursive(str) {
  if (str === "") return "";
  return reverseStringRecursive(str.substr(1)) + str.charAt(0);
}
```

#### Question 34: Check for palindrome

```javascript
function isPalindrome(str) {
  const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}
```

#### Question 35: Implement Promise.all

```javascript
function promiseAll(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Expected an array"));
    }

    if (promises.length === 0) {
      return resolve([]);
    }

    const results = [];
    let completed = 0;

    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((value) => {
          results[index] = value;
          completed++;
          if (completed === promises.length) {
            resolve(results);
          }
        })
        .catch(reject);
    });
  });
}
```

### Common Output-Based Questions:

#### Question 36: Variable hoisting

```javascript
var x = 1;
function foo() {
  x = 10;
  return;
  function x() {}
}
foo();
console.log(x); // 1 (function x is hoisted and creates local scope)
```

#### Question 37: setTimeout in loop

```javascript
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 3, 3, 3
}

for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 1000); // 0, 1, 2
}
```

#### Question 38: Object property access

```javascript
const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

console.log(obj.b?.d?.e); // 3 (optional chaining)
console.log(obj.b?.f?.e); // undefined
console.log(obj.x ?? "default"); // 'default' (nullish coalescing)
```

### Performance and Optimization Questions:

#### Question 39: Memory leaks prevention

```javascript
// Common memory leak patterns and solutions

// 1. Event listeners
function addEventListeners() {
  const button = document.getElementById("button");
  const handler = () => console.log("clicked");

  button.addEventListener("click", handler);

  // Clean up
  return () => {
    button.removeEventListener("click", handler);
  };
}

// 2. Closures holding references
function createClosure() {
  const largeData = new Array(1000000).fill("data");

  return function (index) {
    return largeData[index]; // largeData stays in memory
  };
}
```

#### Question 40: Algorithm complexity

```javascript
// Time complexity examples

// O(1) - Constant time
function getFirstElement(arr) {
  return arr[0];
}

// O(n) - Linear time
function findElement(arr, target) {
  return arr.find((el) => el === target);
}

// O(n²) - Quadratic time
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```

## Key Interview Tips:

1. **Understand the fundamentals:** Don't just memorize syntax, understand the why behind JavaScript's behavior
2. **Practice output-based questions:** These test your deep understanding of JavaScript mechanics
3. **Know the event loop:** Critical for explaining asynchronous behavior
4. **Understand this binding:** One of the most confusing aspects of JavaScript
5. **Be familiar with ES6+ features:** Modern JavaScript is expected knowledge
6. **Practice problem-solving:** Implement common algorithms and data structures
7. **Explain your thinking:** Walk through your thought process out loud
8. **Ask clarifying questions:** Don't assume requirements, ask for clarification
9. **Test your code:** Consider edge cases and test scenarios
10. **Know browser APIs:** Understand DOM manipulation and web APIs

## Additional Resources for Practice:

- **LeetCode:** Algorithm and data structure problems
- **HackerRank:** JavaScript-specific challenges
- **Codewars:** Kata problems for skill building
- **MDN Web Docs:** Comprehensive JavaScript documentation
- **JavaScript.info:** Modern JavaScript tutorial
- **You Don't Know JS:** Book series for deep understanding

This guide covers the essential JavaScript concepts and interview questions from basic to advanced levels. Focus on understanding the underlying concepts rather than memorizing answers, and practice implementing solutions to build confidence for your interviews.
