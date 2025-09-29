// ==========================================
//  JavaScript Data Types (Theory + Examples)
// ==========================================

// ------------------------------
// 1. Primitive Data Types
// ------------------------------
// Primitive types are immutable and stored by value.

let str = "Hello";          // String
let num = 42;               // Number
let bigInt = 12345678901234567890n; // BigInt
let isTrue = true;          // Boolean
let undef;                  // Undefined
let nothing = null;         // Null
let sym = Symbol("id");     // Symbol

console.log(typeof str);     // string
console.log(typeof num);     // number
console.log(typeof bigInt);  // bigint
console.log(typeof isTrue);  // boolean
console.log(typeof undef);   // undefined
console.log(typeof nothing); // object (JS quirk)
console.log(typeof sym);     // symbol


// ------------------------------
// 2. Non-Primitive (Reference) Data Types
// ------------------------------
// These are objects and stored by reference.

let arr = [1, 2, 3];              // Array
let obj = { name: "Hamid", age: 25 }; // Object
function greet() { return "Hi"; } // Function

console.log(typeof arr);  // object
console.log(typeof obj);  // object
console.log(typeof greet);// function


// ==========================================
//  Interview Questions & Examples
// ==========================================

// Q1: Difference between `null` and `undefined`
let a;
let b = null;
console.log(a); // undefined → declared but not assigned
console.log(b); // null → explicitly set to "nothing"


// Q2: What will this print?
console.log(typeof null);      // "object" (bug in JS design)
console.log(null === undefined); // false
console.log(null == undefined);  // true (loose equality)


// Q3: Difference between "==" and "==="
console.log(5 == "5");  // true (only value checked)
console.log(5 === "5"); // false (value + type checked)


// Q4: Number + String coercion
console.log(1 + "2");   // "12" (number → string)
console.log("2" - 1);   // 1 (string → number)
console.log("10" * "2");// 20 (string → number)


// Q5: typeof NaN?
console.log(typeof NaN); // "number"
console.log(NaN === NaN);// false (NaN is never equal to itself)


// Q6: Truthy & Falsy values
// Falsy: false, 0, "", null, undefined, NaN
if ("") console.log("Truthy"); 
else console.log("Falsy"); // Falsy


// Q7: Object vs Array check
console.log(Array.isArray([1,2,3])); // true
console.log(typeof [1,2,3]); // object


// Q8: Pass by Value vs Reference
let p1 = 10;
let p2 = p1;
p2 = 20;
console.log(p1, p2); // 10, 20 → primitives copy by value

let obj1 = { x: 10 };
let obj2 = obj1;
obj2.x = 20;
console.log(obj1.x, obj2.x); // 20, 20 → objects copy by reference


// Q9: Deep vs Shallow Copy
let objA = { a: 1, b: { c: 2 } };
let shallow = { ...objA };
shallow.b.c = 100;
console.log(objA.b.c); // 100 (changed in original)

let deep = JSON.parse(JSON.stringify(objA));
deep.b.c = 500;
console.log(objA.b.c); // 100 (deep copy not affected)


// Q10: What is Symbol used for?
let s1 = Symbol("id");
let s2 = Symbol("id");
console.log(s1 === s2); // false (unique always)


// ==========================================
//  Logical Practice Questions
// ==========================================

// Check if variable is array
function isArray(val) {
  return Array.isArray(val);
}
console.log(isArray([1,2,3])); // true
console.log(isArray("test"));  // false


// Find type manually (better than typeof)
function getType(value) {
  return Object.prototype.toString.call(value).slice(8, -1);
}
console.log(getType([]));      // Array
console.log(getType({}));      // Object
console.log(getType(null));    // Null
console.log(getType(123));     // Number
console.log(getType(undefined));// Undefined


// Convert different values
console.log(Number("123"));   // 123
console.log(Number("abc"));   // NaN
console.log(Boolean(0));      // false
console.log(Boolean("Hi"));   // true
console.log(String(100));     // "100"


// Check if number is integer
console.log(Number.isInteger(10));   // true
console.log(Number.isInteger(10.5)); // false


// Check safe integer limit
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991


// ==========================================
// Quick Revision Summary
// ==========================================
// ✅ Primitive: String, Number, BigInt, Boolean, Undefined, Null, Symbol
// ✅ Reference: Object, Array, Function, Date, etc.
// ✅ typeof null → object (quirk)
// ✅ NaN → type "number"
// ✅ "==" (loose), "===" (strict)
// ✅ Objects & Arrays → reference type
// ✅ Shallow copy vs Deep copy
// ✅ Falsy values: false, 0, "", null, undefined, NaN
// ✅ Symbol → unique identifier
