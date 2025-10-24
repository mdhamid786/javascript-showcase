// ==============================
// Strict Mode in JavaScript
// ==============================

// ---------- 1. Enabling Strict Mode ----------
// At the top of the file
"use strict";

// Or inside a function (applies only inside that function)
// function test() {
//   "use strict";
// }


// ---------- 2. Prevents Undeclared Variables ----------
try {
  undeclaredVar = 10; // ❌ ReferenceError
} catch (e) {
  console.log("Undeclared var error:", e.message);
}


// ---------- 3. Duplicate Parameters Not Allowed ----------
try {
  function dupParams(a, a) { // ❌ SyntaxError
    return a + a;
  }
} catch (e) {
  console.log("Duplicate params error:", e.message);
}


// ---------- 4. Assignment to Read-only Properties ----------
try {
  const obj = {};
  Object.defineProperty(obj, "x", { value: 10, writable: false });
  obj.x = 20; // ❌ TypeError
} catch (e) {
  console.log("Read-only property error:", e.message);
}


// ---------- 5. Deleting Variables/Functions Not Allowed ----------
// try {
//   var x = 5;
//   delete x; // ❌ SyntaxError
// } catch (e) {
//   console.log("Delete variable error:", e.message);
// }


// ---------- 6. Octal Literals Not Allowed ----------


// ---------- 7. Safer `this` ----------
function normalFunc() {
  console.log("this in function:", this); // ❌ undefined (not window/global)
}
normalFunc();


// ---------- 8. With Statement Not Allowed ----------
// try {
//   with (Math) { // ❌ SyntaxError
//     console.log(sin(2));
//   }
// } catch (e) {
//   console.log("with error:", e.message);
// }


// ---------- 9. Reserved Keywords ----------
try {
  // let public = 10; // ❌ SyntaxError in strict mode
} catch (e) {
  console.log("Reserved keyword error:", e.message);
}


// ---------- 10. Logical Interview Question ----------
function tricky() {
  "use strict";
  var a = 10;
  function inner() {
    console.log("this in inner:", this); // ❌ undefined
  }
  inner();
}
tricky();
