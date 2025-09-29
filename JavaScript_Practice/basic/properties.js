/**
 * 🟢 Ultimate JS Interactive Cheat Sheet
 * Arrays, Strings, Objects, Functions – all in one table
 */

console.log("=== JS Cheat Sheet ===");

// =============================
// 1. Arrays
// =============================
let arr = [1, 2, 3, 4, 5];
console.log("\n--- Arrays ---");
console.table({
    Original: arr,
    push6: [...arr, 6],
    pop: arr.slice(0, -1),
    shift: arr.slice(1),
    unshift0: [0, ...arr],
    splice: (()=>{ let copy = [...arr]; copy.splice(2,1,9); return copy; })(),
    reverse: [...arr].reverse(),
    sort: [...arr].sort((a,b)=>b-a),
    mapDouble: arr.map(x=>x*2),
    filterGt2: arr.filter(x=>x>2),
    reduceSum: arr.reduce((a,b)=>a+b,0),
    findGt3: arr.find(x=>x>3),
    findIndexGt3: arr.findIndex(x=>x>3),
    includes3: arr.includes(3)
});

// =============================
// 2. Strings
// =============================
let str = " Hello JS! ";
console.log("\n--- Strings ---");
console.table({
    Original: str,
    length: str.length,
    charAt1: str.charAt(1),
    indexOfJS: str.indexOf("JS"),
    lastIndexOfL: str.lastIndexOf("l"),
    includesJS: str.includes("JS"),
    startsWithH: str.startsWith(" H"),
    endsWithExcl: str.endsWith("! "),
    toLower: str.toLowerCase(),
    toUpper: str.toUpperCase(),
    trim: str.trim(),
    padStart20: str.padStart(20,'*'),
    padEnd20: str.padEnd(20,'*'),
    repeat2: str.repeat(2),
    slice1to6: str.slice(1,6),
    substring1to6: str.substring(1,6),
    replaceJSWithWorld: str.replace("JS","World")
});

// =============================
// 3. Objects
// =============================
let obj = {name:"Ali", age:25, city:"Delhi"};
console.log("\n--- Objects ---");
console.table({
    keys: Object.keys(obj),
    values: Object.values(obj),
    entries: Object.entries(obj),
    hasOwnPropAge: obj.hasOwnProperty("age"),
    assignCountry: Object.assign({...obj}, {country:"India"}),
    freezeAttempt: (()=>{ let copy = {...obj}; Object.freeze(copy); copy.age=30; return copy; })()
});

// =============================
// 4. Functions
// =============================
console.log("\n--- Functions ---");

// Declaration
function greet(name){ return `Hello ${name}`; }
// Expression
const add = function(a,b){ return a+b; };
// Arrow
const multiply = (a,b)=>a*b;
// IIFE
(function(){ console.log("IIFE executed"); })();
// Callback
function fetchData(callback){ callback("Data Received"); }
// Closure
function counter(){ let count=0; return ()=>++count; }
const increment = counter();
// Currying
const addCurried = a=>b=>a+b;
// Recursion
function factorial(n){ return n<=1?1:n*factorial(n-1); }

console.table({
    greetAli: greet("Ali"),
    add2and3: add(2,3),
    multiply2and4: multiply(2,4),
    callbackExample: (()=>{ let res=""; fetchData(d=>res=d); return res; })(),
    closureIncrementTwice: [increment(), increment()],
    currying2and3: addCurried(2)(3),
    factorial5: factorial(5)
});

// =============================
// 5. ES6+ Utilities
// =============================
console.log("\n--- ES6+ Utilities ---");
console.table({
    ArrayFromString: Array.from("123"),
    ArrayOfNumbers: Array.of(1,2,3),
    ObjectFromEntries: Object.fromEntries([["a",1],["b",2]])
});

// =============================
// 6. Practice Ideas
// =============================
console.log("\n--- Practice Ideas ---");
console.log(`
1. Filter even numbers from array
2. Reverse a string
3. Counter closure (increment/decrement)
4. Currying for multiple sums
5. IIFE to generate Fibonacci numbers
6. Use map, filter, reduce together
`);
