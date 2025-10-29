// ================================
// Destructuring Assignment in JavaScript
// ================================
// Destructuring => ES6 feature to extract values from arrays or objects into distinct variables easily

// --------------------
// 1. Array Destructuring
// --------------------
const numbers = [1, 2, 3, 4];
// const [first, second] = numbers; // assign first two elements
// console.log(first, second); // 1 2

// Skipping elements
// const [,, third, forth] = numbers;
// console.log(third); // 3

// Default values
const [a = 10, b = 20, c = 30, d = 40, e = 50] = numbers;
// console.log(a); // 50 because array has only 4 elements

// Swapping variables
let x = 5, y = 10;
[x, y] = [y, x];
// console.log([x, y]); // 10 5

// --------------------
// 2. Object Destructuring
// --------------------
const person = {name: "Alice", age: 25, city: "London"};
const {name, age} = person; // extract by key
// console.log(name, age); // Alice 25

// Renaming variables
const {name: fullName, city: location} = person;
console.log(fullName, location); // Alice London

// Default values
const {country = "UK"} = person;
// console.log(country); // UK

// Nested object destructuring
const user = {id: 1, info: {email: "alice@example.com", phone: "12345"}};
const {info: {email, phone}} = user;
// console.log(email, phone); // alice@example.com 12345

// --------------------
// 3. Function Parameter Destructuring
// --------------------
function greet({name, age}) {
  console.log(`Hello ${name}, you are ${age} years old`);
}
// greet(person); // Hello Alice, you are 25 years old

// Array in parameters
function sum([a, b]) { return a + b; }
// console.log(sum([5, 10])); // 15

// --------------------
// 4. Spread and Rest in Destructuring
// --------------------
const arr = [1, 2, 3, 4];
const [head, ...tail] = arr; // rest operator
console.log(head, tail); // 1 [2,3,4]

const obj = {a: 1, b: 2, c: 3};
const {a: firstVal, ...restObj} = obj;
console.log(firstVal, restObj); // 1 {b:2, c:3}

// --------------------
// 5. Benefits
// --------------------
// - Cleaner and shorter syntax
// - Easy access to nested structures
// - Useful in function parameters
// - Combines with default values, spread/rest

// --------------------
// 6. Limitations
// --------------------
// - Destructuring undefined or null throws error
// - Default values only used when undefined
// - Object keys must match unless renamed

// --------------------
// 7. Interview Questions
// --------------------
// Q: What is destructuring in JS?
// A: A syntax to unpack arrays or objects into variables.
// Q: Can you destructure nested objects?
// A: Yes, using nested pattern matching with { } or [ ].
// Q: How do default values work in destructuring?
// A: If the property/element is undefined, default is assigned.
// Q: How to rename variable during object destructuring?
// A: Use {key: newVariableName} syntax.
// Q: Can you destructure function parameters?
// A: Yes, function({prop1, prop2}) or function([a,b]).
// Q: Difference between spread and rest in destructuring?
// A: Rest collects remaining elements/keys; spread copies elements/keys.
