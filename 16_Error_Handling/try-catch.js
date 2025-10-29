// ====================================================
// ⚙️ JavaScript Error Handling — try / catch / finally
// (Basic → Advanced + Interview Concepts)
// ====================================================

/*
🔹 Definition:
  try...catch...finally handles runtime (not syntax) errors.
  It prevents program crash and allows graceful fallback.

Syntax:
try {
   // Code that may throw an error
} catch (error) {
   // Handle the error
} finally {
   // Always executes (success or failure)
}
*/

// ====================================================
// 🧩 BASIC EXAMPLE
// ====================================================

console.log("--- Example 1: Basic ---");

try {
  console.log("Start of try block");
  let result = 10 / 0; // No error (Infinity)
  console.log("Result:", result);
  JSON.parse("{ invalid json }"); // Throws error
  console.log("This line never runs");
} catch (error) {
  console.log("Caught error:", error.message);
} finally {
  console.log("Finally always runs");
}

/*
🧭 Output:
Start of try block
Result: Infinity
Caught error: Unexpected token i in JSON at position 2
Finally always runs
*/

// ====================================================
// 🧩 Example 2 — Using try/catch for function error control
// ====================================================

console.log("\n--- Example 2: Function Error Handling ---");

function divide(a, b) {
  try {
    if (b === 0) throw new Error("Cannot divide by zero");
    return a / b;
  } catch (err) {
    console.log("Error:", err.message);
    return null;
  } finally {
    console.log("Division attempted.");
  }
}

console.log("Result 1:", divide(10, 2));
console.log("Result 2:", divide(5, 0));

/*
🧭 Output:
Result 1: 5
Result 2: null
Finally executes each time
*/

// ====================================================
// 🧩 Example 3 — try...catch works only for runtime errors
// ====================================================

console.log("\n--- Example 3: Syntax vs Runtime ---");

try {
  // SyntaxError cannot be caught if it happens before execution
  // eval("function () {}"); // Uncomment → will break before running
  let a = undefinedVariable; // runtime error
} catch (e) {
  console.log("Caught:", e.name); // ReferenceError
}

/*
🧠 Note:
try...catch can only catch errors *during execution*, 
not at parse/compile time (like invalid syntax).
*/

// ====================================================
// 🧩 Example 4 — Nested try/catch/finally
// ====================================================

console.log("\n--- Example 4: Nested Try/Catch ---");

try {
  console.log("Outer try start");
  try {
    throw new Error("Inner Error");
  } catch (inner) {
    console.log("Inner caught:", inner.message);
    throw new Error("Outer Error");
  } finally {
    console.log("Inner finally executed");
  }
} catch (outer) {
  console.log("Outer caught:", outer.message);
} finally {
  console.log("Outer finally executed");
}

/*
🧭 Output:
Outer try start
Inner caught: Inner Error
Inner finally executed
Outer caught: Outer Error
Outer finally executed
*/

// ====================================================
// 🧩 Example 5 — Error Object Properties
// ====================================================

console.log("\n--- Example 5: Error Object ---");

try {
  throw new TypeError("Invalid type provided");
} catch (err) {
  console.log("Name:", err.name);       // TypeError
  console.log("Message:", err.message); // Invalid type provided
  console.log("Stack:", err.stack);     // Stack trace (useful in debugging)
}

/*
🧠 Common Error Types:
- ReferenceError: using undefined variable
- TypeError: invalid type operation
- SyntaxError: invalid code syntax (not caught at runtime)
- RangeError: invalid range (like recursion limit)
- EvalError, URIError (rare)
*/

// ====================================================
// 🧩 Example 6 — Custom Error Class (Advanced)
// ====================================================

console.log("\n--- Example 6: Custom Error Class ---");

class ValidationError extends Error {
  constructor(message, code) {
    super(message);
    this.name = "ValidationError";
    this.code = code;
  }
}

function validateUser(user) {
  try {
    if (!user.name) throw new ValidationError("Name required", 400);
    if (user.age < 18) throw new ValidationError("Underage", 401);
    console.log("User valid ✅");
  } catch (err) {
    if (err instanceof ValidationError) {
      console.log(`Validation Failed: ${err.message} (Code: ${err.code})`);
    } else {
      console.log("Unknown error:", err.message);
    }
  } finally {
    console.log("Validation attempt complete");
  }
}

validateUser({ name: "", age: 22 });
validateUser({ name: "Hamid", age: 15 });
validateUser({ name: "Ali", age: 25 });

/*
🧠 Use Case:
Custom errors are useful in API/Business Logic validation
to differentiate between system and validation issues.
*/

// ====================================================
// 🧩 Example 7 — async/await with try/catch
// ====================================================

console.log("\n--- Example 7: Async/Await Error Handling ---");

async function fetchData() {
  try {
    console.log("Fetching...");
    throw new Error("Network Error");
  } catch (err) {
    console.log("Caught async error:", err.message);
  } finally {
    console.log("Cleanup (async) complete");
  }
}
fetchData();

/*
🧠 Interview Tip:
Always use try/catch inside async functions to handle promise rejections.
Alternatively, use `.catch()` after a Promise.
*/

// ====================================================
// 🧩 Example 8 — finally behavior and return override
// ====================================================

console.log("\n--- Example 8: finally overrides return ---");

function testReturn() {
  try {
    return "From try";
  } catch {
    return "From catch";
  } finally {
    return "From finally"; // overrides both above
  }
}
console.log("Output:", testReturn());

/*
🧭 Output: From finally
🧠 Tip:
If `finally` has a return, it overrides any previous return values.
Avoid returning inside finally — it hides real results/errors.
*/

// ====================================================
// 🎯 INTERVIEW QUESTIONS SUMMARY
// ====================================================

/*
✅ Q1: What does finally do?
   → Executes always (whether error thrown or not).

✅ Q2: Can finally block modify return value?
   → Yes, it overrides previous return values.

✅ Q3: Does try/catch handle syntax errors?
   → No, only runtime errors.

✅ Q4: How to handle async errors?
   → Use try/catch inside async function or `.catch()` after Promise.

✅ Q5: Can we create custom error classes?
   → Yes, by extending the built-in Error class.

✅ Q6: Order of execution if all three exist?
   → try → (error?) catch → finally → (continue/exit)
*/

// ====================================================
// 🔚 END — Master Error Handling Summary
// ====================================================

/*
📘 Summary Table:

| Block     | Purpose                                  |
|------------|-------------------------------------------|
| try        | Test a block of code for errors           |
| catch      | Handle the error if occurs                |
| finally    | Execute cleanup code (always runs)        |

🧠 Key Tip:
- Avoid swallowing errors silently.
- Use meaningful messages.
- Keep finally lightweight (no return/throw).
*/
