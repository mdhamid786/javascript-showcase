/**
 * JavaScript Type Conversion (Type Casting)
 * Interview Questions (Theory + Practical)
 */

// =============================
// 1. What is Type Conversion?
// =============================

/**
 * Q1: Explain type conversion in JavaScript.
 *
 * Answer:
 * - Implicit Conversion (Type Coercion): JS automatically converts types.
 * - Explicit Conversion: Developer manually converts types using functions like Number(), String(), Boolean().
 */


// =============================
// 2. Implicit Conversion (Type Coercion)
// =============================

/**
 * Q2: What is type coercion? Give examples.
 */

console.log("5" + 2);   // "52" (number -> string, concatenation)
console.log("5" - 2);   // 3   (string -> number, subtraction)
console.log("5" * "2"); // 10  (string -> number)
console.log("10" / 2);  // 5   (string -> number)

console.log(1 + true);  // 2 (true -> 1)
console.log(1 + false); // 1 (false -> 0)

console.log("10" == 10);  // true (== does coercion)
console.log("10" === 10); // false (strict equality, no coercion)


// =============================
// 3. Explicit Conversion
// =============================

/**
 * Q3: How do you explicitly convert between types?
 */

console.log(Number("123"));      // 123
console.log(Number("123abc"));   // NaN
console.log(parseInt("123.45")); // 123
console.log(parseFloat("123.45")); // 123.45

console.log(String(123));        // "123"
console.log((123).toString());   // "123"

console.log(Boolean(0));         // false
console.log(Boolean(""));        // false
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true
console.log(Boolean({}));        // true


// =============================
// 4. Falsy vs Truthy
// =============================

/**
 * Q4: What are falsy values in JS?
 *
 * Answer:
 * - 0
 * - "" (empty string)
 * - null
 * - undefined
 * - NaN
 * - false
 *
 * Everything else is truthy.
 */

console.log(Boolean(0));       // false
console.log(Boolean(""));      // false
console.log(Boolean(null));    // false
console.log(Boolean(undefined)); // false
console.log(Boolean(NaN));     // false
console.log(Boolean(false));   // false
console.log(Boolean(" "));     // true (non-empty string)


// =============================
// 5. Special Cases
// =============================

/**
 * Q5: Explain some tricky conversion cases.
 */

console.log([] + []);        // "" (empty string)
console.log([] + {});        // "[object Object]"
console.log({} + []);        // 0 (in some contexts, treated as block + array)
console.log("5" - - "2");    // 7 (both strings -> numbers, minus minus = addition)


// =============================
// 6. Logical Interview Questions
// =============================

/**
 * Q6: What will be the output?
 */
console.log(null + 1);   // 1 (null -> 0)
console.log(undefined + 1); // NaN (undefined -> NaN)
console.log(true + false); // 1 (true=1, false=0)

/**
 * Q7: What will these evaluate to?
 */
console.log("0" == false);  // true ("0" -> 0, false -> 0)
console.log("0" === false); // false (different types)
console.log([] == false);   // true ([] -> 0, false -> 0)
console.log([] == 0);       // true ([] -> 0)
console.log([1] == 1);      // true ([1] -> "1" -> 1)


/**
 * Q8: Predict the output.
 */
console.log(Number(null));      // 0
console.log(Number(undefined)); // NaN
console.log(Number(true));      // 1
console.log(Number(false));     // 0

/**
 * Q9: Predict the output.
 */
console.log(+"100"); // 100 (string to number using unary +)
console.log(+"");    // 0
console.log(+true);  // 1
console.log(+false); // 0


// =============================
// 7. Best Practices
// =============================

/**
 * Q10: What are best practices for type conversion?
 *
 * Answer:
 * - Use === instead of == to avoid unintended coercion.
 * - Use explicit conversions (Number(), String(), Boolean()).
 * - Avoid relying on implicit coercion for clarity.
 */

