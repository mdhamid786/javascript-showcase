// Rest and Spread Operators in JavaScript (All perspectives: Interview, Logical, Theoretical)

// Rest operator (...) is used to collect multiple elements into an array
// Spread operator (...) is used to unpack elements from arrays or objects

// ================== Rest Operator ==================
// Used in function parameters to capture remaining arguments


// function sum(...numbers) { // numbers becomes an array of arguments
//   return numbers.reduce((total, n) => total + n, 0)
// }
// console.log(sum(1, 2, 3, 4)) // 10


// Rest with destructuring arrays
const arr = [1, 2, 3, 4, 5]
// const [first, second, ...rest] = arr
// console.log(first, second) // 1 2
// console.log(rest)          // [3,4,5]


// Rest with destructuring objects
const obj = { a: 1, b: 2, c: 3 }
const { a, ...others } = obj
// console.log(a)      // 1
// console.log(others) // { b: 2, c: 3 }

// ================== Spread Operator ==================
// Used to unpack array elements or object properties

// Spread in arrays
const arr1 = [1, 2]
const arr2 = [3, 4]
// const combined = [...arr1, ...arr2]
// console.log(combined) // [1,2,3,4]

// Copying arrays to avoid reference issues
const original = [1, 2]
const copy = [...original]
copy.push(3)
// console.log(original) // [1,2]
// console.log(copy)     // [1,2,3]

// Spread in objects
const user = { name: "Ali", age: 25 }
const userCopy = {...user, role:"admin"}
// console.log(userCopy) // { name: 'Ali', age: 25, role: 'admin' }

// Spread in function calls
const nums = [5, 10, 15]
// console.log(Math.max(...nums)) // 15
// console.log(Math.max(...nums));


// ================== Interview Questions & Key Points ==================
// 1. Difference between rest and spread:
//    - Rest collects multiple elements into a single array/object
//    - Spread unpacks elements from array/object
// 2. Can rest and spread be used together? Yes, but rest must be last in parameters
function demo(a, b, ...rest) { return [a, b, rest] }
console.log(demo(1,2,3,4)) // [1,2,[3,4]]
// 3. Spread copies shallow only, nested objects still share references
const nested = [{ x: 1 }]
const nestedCopy = [...nested]
nestedCopy[0].x = 99
console.log(nested[0].x) // 99
// 4. Rest is not allowed in non-final parameter positions
// function wrong(...rest, a) {} // ❌ SyntaxError

// ================== Practical uses ==================
// Merge arrays
const arrA = [1,2]
const arrB = [3,4]
const merged = [...arrA, ...arrB]
console.log(merged) // [1,2,3,4]

// Merge objects
const objA = { a: 1 }
const objB = { b: 2 }
const mergedObj = { ...objA, ...objB }
console.log(mergedObj) // { a:1, b:2 }

// Function arguments
function multiply(x, y, z) { return x*y*z }
const numbers = [2,3,4]
console.log(multiply(...numbers)) // 24
