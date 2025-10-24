// ======================== Enhanced Object Literals ========================
// Enhanced Object Literals are improvements in ES6 to define objects more concisely and dynamically

// 1. Shorthand Property Names
const name = "Alice", age = 25
const person = { name, age } // instead of { name: name, age: age }
// console.log(person) // { name: "Alice", age: 25 }

// 2. Method Shorthand
const obj = {
  greet() { // instead of greet: function() {...}
    return `Hello, ${this.name}`
  },
  name: "Bob"
}
// console.log(obj.greet()) // Hello, Bob

// 3. Computed Property Names
const prop = "score"
const student = {
  [prop]: 95, // dynamic key based on variable
  ["level" + (1+1)]: "Intermediate" // evaluates to level2
}
console.log(student) // { score: 95, level2: "Intermediate" }

// 4. Object Destructuring Shorthand
const { name: n, age: a } = person
console.log(n, a) // Alice 25

// 5. Spread in Objects (Related)
const base = { x:1, y:2 }
const extended = { ...base, z:3 } // combines objects
console.log(extended) // { x:1, y:2, z:3 }

// ======================== Interview Points ========================
// - Shorthand properties save typing for key:value pairs when variable name matches key
// - Method shorthand is cleaner than old function syntax
// - Computed property names allow dynamic keys at runtime
// - Works well with destructuring, rest/spread operators
// - Creates more readable, maintainable, and concise code
// - Can be combined with rest/spread for flexible object manipulation

// ======================== Practical Example ========================
const key = "level"
const dynamicObj = {
  name, // shorthand
  greet() { return `Hi, ${this.name}` }, // method shorthand
  [key]: "Advanced", // computed property
  ...{ score: 100 } // spread
}
console.log(dynamicObj) // { name: "Alice", greet: [Function], level: "Advanced", score: 100 }
console.log(dynamicObj.greet()) // Hi, Alice
