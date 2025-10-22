// Default Parameters in JavaScript (All perspectives: Interview, Logical, Theoretical)

// Default parameters allow you to set default values for function arguments
// If no value is passed (or undefined is passed), the default will be used

// Example 1: Basic usage
function greet(name = "Guest") {
  return `Hello, ${name}!`
}
// console.log(greet())        // Output: Hello, Guest!
// console.log(greet("Hamid")) // Output: Hello, Hamid!

// Example 2: Multiple default parameters
function calculatePrice(price, tax = 0.05, discount = 0) {
  return price + price * tax - discount
}
// console.log(calculatePrice(100))               // 105
// console.log(calculatePrice(100, 0.1))          // 110
// console.log(calculatePrice(100, 0.1, 10))      // 100

// Example 3: Default parameters with expressions
function createUser(id, name = "Anonymous", role = "user", createdAt = new Date().toDateString()) {
  return { id, name, role, createdAt }
}
console.log(createUser(1))  // Uses defaults for name, role, createdAt

// Example 4: Functions as default values
function generateId() {
  return Math.floor(Math.random() * 10)
}
function createProduct(name, id = generateId()) {
  return { id, name }
}
console.log(createProduct("Laptop"))

// Example 5: Default parameter depends on another parameter
function multiply(a, b = a) {
  return a * b
}
console.log(multiply(5))     // 25 (b takes value of a)
console.log(multiply(5, 2))  // 10

// Interview Questions & Key Points:
// 1. Why are default parameters useful?
//    - Avoids manual checks like `if(value === undefined)`
//    - Makes functions cleaner and more readable
// 2. What happens if null is passed instead of undefined?
//    - Default values only apply if argument is missing or explicitly `undefined`
//    - Passing null overrides the default
console.log(greet(null)) // Output: Hello, null!
// 3. Difference between default parameters and logical OR (||) fallback?
//    - With ||, falsy values (0, "", false) trigger fallback
//    - With default params, only `undefined` triggers fallback
function testFallback(x = 10) { return x }
function testOr(x) { return x || 10 }
console.log(testFallback(0)) // 0
console.log(testOr(0))       // 10

// 4. Can default parameters be non-primitives (like objects/arrays)?
//    - Yes, but they are re-created each call, avoiding shared reference issues
function addItem(item, list = []) {
  list.push(item)
  return list
}
console.log(addItem("A")) // [ 'A' ]
console.log(addItem("B")) // [ 'B' ]
