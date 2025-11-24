// this in JavaScript — complete guide (basic → advanced)

// Great — this is one of the most tested & misunderstood JS topics. I’ll cover what it is, how its value is chosen, common pitfalls,
//  browser + Node nuances, advanced cases, interview questions (with answers) and coding exercises. Read it like an interview crib-sheet:
//   examples, predicted outputs, and short explanations.


// Short definition (one-liner)

// this is a special identifier that refers to the object that a function is being executed for. Its exact value is determined at call time,
//  by how the function is called (not where it is defined), except with arrow functions which use lexical this.


// const obj = {
//   name: 'Hamid',
//   greet() { console.log(this.name); }
// };
// obj.greet(); // "Hamid"  ← `this` is obj (receiver)
// function show() { console.log(this); }
// show(); // non-strict -> window/globalThis ; strict -> undefined



// function Person(name) { this.name = name; }
// const p = new Person('Hamid'); 
// console.log(p.name); // "Hamid"
