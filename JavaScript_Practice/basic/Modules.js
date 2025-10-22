// ======================== Modules: Import and Export ========================
// Modules allow splitting JS code into reusable files (ES6+ feature)

// 1. Exporting values from a module
// file: mathUtils.js
export const PI = 3.14159 // named export
export function add(a, b) { return a + b } // named export
export function subtract(a, b) { return a - b }

// 2. Importing named exports
// file: app.js
import { PI, add, subtract } from './mathUtils.js' // import specific exports
console.log(add(5, 3)) // 8
console.log(PI) // 3.14159

// 3. Import all as an object
import * as MathUtils from './mathUtils.js'
console.log(MathUtils.subtract(10, 4)) // 6

// 4. Default exports (one per module)
export default class Calculator { // default export
  multiply(a, b) { return a * b }
}

// import default export
import CalculatorClass from './mathUtils.js'
const calc = new CalculatorClass()
console.log(calc.multiply(4, 5)) // 20

// 5. Renaming imports and exports
import { add as sum } from './mathUtils.js'
console.log(sum(2, 3)) // 5

export { subtract as minus } // rename export
import { minus } from './mathUtils.js'
console.log(minus(10, 6)) // 4

// 6. Dynamic imports (code splitting, returns Promise)
async function loadModule() {
  const module = await import('./mathUtils.js')
  console.log(module.add(1, 2)) // 3
}
loadModule()

// 7. Node.js CommonJS vs ES6 modules
// CommonJS: module.exports / require()
// ES6: export / import
// Node.js supports ES6 modules with "type": "module" in package.json

// ======================== Interview Points ========================
// - Named exports: multiple per file, must import by same name (or alias)
// - Default export: one per file, can import with any name
// - Dynamic import: lazy loading, returns a promise
// - Benefits: modularity, reusability, maintainability, avoids global scope pollution
// - Difference from CommonJS: ES6 modules are static (compile-time), CommonJS is dynamic (runtime)
// - Always mention tree-shaking (unused exports eliminated) in interviews
// - Use import/export to structure large JS apps or frontend frameworks (React, Next.js, Node.js)

// ======================== Practical Example ========================
// file: stringUtils.js
export const greet = (name) => `Hello, ${name}`
export default function shout(msg) { return msg.toUpperCase() }

// file: app.js
import shout, { greet } from './stringUtils.js'
console.log(greet("Alice")) // Hello, Alice
console.log(shout("hello world")) // HELLO WORLD
