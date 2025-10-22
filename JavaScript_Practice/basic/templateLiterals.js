// ================================
// Template Literals in JavaScript
// ================================
// Template literals => introduced in ES6 for easier string interpolation, multi-line strings, and embedded expressions.

// --------------------
// 1. Syntax
// --------------------
const name = "Alice";
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old`; // use backticks ``
console.log(greeting); // Hello, my name is Alice and I am 25 years old

// --------------------
// 2. Multi-line Strings
// --------------------
const multiLine = `This is line 1
This is line 2
This is line 3`;
console.log(multiLine); // preserves line breaks without \n

// --------------------
// 3. Expression Interpolation
// --------------------
const a = 5, b = 10;
console.log(`Sum of ${a} + ${b} = ${a + b}`); // embedded JS expressions

// --------------------
// 4. Tagged Templates
// --------------------
// Tagged templates allow custom processing of template literals
function tag(strings, ...values) {
  console.log(strings); // array of literal segments
  console.log(values); // array of evaluated expressions
  return "Tagged Result";
}
const result = tag`Sum of ${a} + ${b} is ${a + b}`;
console.log(result); // Tagged Result

// --------------------
// 5. Nesting Template Literals
// --------------------
const nested = `Outer ${`Inner ${a + b}`}`;
console.log(nested); // Outer Inner 15

// --------------------
// 6. Benefits over String Concatenation
// --------------------
// - Cleaner syntax without '+' operator
// - Supports multi-line strings
// - Supports embedded expressions
// - Supports tagged templates for custom processing

// --------------------
// 7. Limitations
// --------------------
// - Only works with backticks ``
// - Older browsers need transpilation (ES5) for support
// - Expression evaluation should be safe to avoid code injection

// --------------------
// 8. Interview Questions
// --------------------
// Q: What are template literals in JS?
// A: Strings enclosed in backticks (`) with support for interpolation, multi-line, and tagged templates.
// Q: How to embed variables in template literals?
// A: Using ${variable} syntax inside backticks.
// Q: Can template literals span multiple lines?
// A: Yes, line breaks are preserved without \n.
// Q: What are tagged template literals?
// A: Functions that process template literal strings and values before producing output.
// Q: Why use template literals over normal strings?
// A: Cleaner code, easy interpolation, multi-line support, better readability.
