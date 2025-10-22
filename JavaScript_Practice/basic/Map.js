// ======================== Map and Set in JavaScript ========================

// 1. Map: key-value pairs, keys can be any type (object, function, primitive)
// Unlike plain objects, Maps maintain insertion order and size is easily retrievable

const myMap = new Map() // create empty Map
myMap.set('name', 'Alice') // set key-value
myMap.set(1, 'Number one') // numeric key
myMap.set(true, 'Boolean key')

// Retrieve values
// console.log(myMap.get('name')) // Alice
// console.log(myMap.get(1)) // Number one

// Check existence
// console.log(myMap.has(true)) // true
// console.log(myMap.has(false)) // false

// Size
// console.log(myMap.size) // 3

// Iterate Map
// myMap.forEach((value, key) => console.log(key, value)) 
// for (let [key, value] of myMap) console.log(key, value)

// Delete key
// myMap.delete(1)
// console.log(myMap.has(1)) // false

// Clear Map
myMap.clear()
// console.log(myMap.size) // 0

// Use objects as keys
const objKey = { id: 1 }
myMap.set(objKey, 'Object value')
// console.log(myMap.get(objKey)) // Object value

// 2. Set: collection of unique values, no duplicates allowed
const mySet = new Set()
mySet.add(1)
mySet.add(2)
mySet.add(2) // ignored, duplicates not allowed
mySet.add('Hello')

// Check existence
// console.log(mySet.has(2)) // true
// console.log(mySet.has(3)) // false

// Size
// console.log(mySet.size) // 3

// Iterate Set
// mySet.forEach(value => console.log(value))
// for (let value of mySet) console.log(value)

// Delete value
mySet.delete(1)
console.log(mySet.has(1)) // false

// Clear Set
mySet.clear()
console.log(mySet.size) // 0

// Convert Set to Array and vice versa
const arr = [1, 2, 2, 3]
const uniqueSet = new Set(arr) // {1, 2, 3}
const uniqueArray = [...uniqueSet] // [1, 2, 3]

// ======================== Interview Points ========================
// Map vs Object: Map allows keys of any type, preserves order, easy size, iterables
// Object: string/symbol keys only, unordered, harder size calculation
// Set vs Array: Set stores unique values, useful for deduplication
// Array vs Set: Array allows duplicates, supports index-based access
// Common use-cases: caching, frequency counts, unique collection, memoization
// Performance: Map/Set has O(1) insertion, deletion, and lookup
// Remember methods: Map.set, Map.get, Map.has, Map.delete, Map.clear
// Remember methods: Set.add, Set.has, Set.delete, Set.clear
// Can iterate using for..of, forEach, or spread operators
// Use in real-world apps: tracking unique users, keys, or events

// ======================== Practical Example ========================
const users = ['Alice', 'Bob', 'Alice', 'Charlie']
const uniqueUsers = new Set(users) // Set { 'Alice', 'Bob', 'Charlie' }
console.log([...uniqueUsers]) // ['Alice', 'Bob', 'Charlie']

const scoreMap = new Map()
scoreMap.set('Alice', 90)
scoreMap.set('Bob', 85)
console.log(scoreMap.get('Bob')) // 85
