/**
 * ================================
 *   JavaScript Interview Q&A
 *   Topic: Control Structures
 *   Focus: if, else, else if, switch
 * ================================
 */

// ----------------------------
// Q1: What is an "if" statement in JavaScript?
// ----------------------------
// A: "if" is a conditional statement that executes a block of code if a given condition is true.

let num = 10;

if (num > 0) {
  console.log("The number is positive ");
} else {
  console.log("The number is not positive");
}

// ----------------------------
// Q2: Difference between if, else if, and else?
// ----------------------------
// - if → checks the first condition.
// - else if → checks another condition if the first one is false.
// - else → executes if none of the conditions are true.

let marks = 75;

if (marks >= 90) {
  console.log("Q2: Grade A");
} else if (marks >= 75) {
  console.log("Q2: Grade B");
} else {
  console.log("Q2: Grade C");
}

// ----------------------------
// Q3: What is a "switch" statement?
// ----------------------------
// A: "switch" is used to perform different actions based on different values of a variable.
// It is often cleaner than writing many "if...else if" statements.

let day = 1;

switch (day) {
  case 1:
    console.log("Monday");
    break;

  case 2:
    console.log("Tuesday");
    break;

  case 3:
    console.log("Wednesday");
    break;

  default:
    console.log("None of these");
}

// ----------------------------
// Q4: When to use "if" vs "switch"?
// ----------------------------
// - Use "if" for range/complex conditions (>, <, &&, ||).
// - Use "switch" when checking a single variable against many fixed values.

let role = "admin";

// Using if
if (role === "admin") {
  console.log("Q4 (if): You have full access");
} else if (role === "editor") {
  console.log("Q4 (if): You can edit content");
} else {
  console.log("Q4 (if): You are a guest");
}

// Using switch
switch (role) {
  case "admin":
    console.log("Q4 (switch): You have full access");
    break;
  case "editor":
    console.log("Q4 (switch): You can edit content");
    break;
  default:
    console.log("Q4 (switch): You are a guest");
}

// ----------------------------
// Q5: Logical Interview Question
// ----------------------------
// Write a program using if/switch to check if a number is even or odd.

let n = 7;

if (n % 2 === 0) {
  console.log("Q5 (if): The number is Even");
} else {
  console.log("Q5 (if): The number is Odd");
}

switch (n % 2) {
  case 0:
    console.log("Q5 (switch): The number is Even");
    break;
  default:
    console.log("Q5 (switch): The number is Odd");
}

// ----------------------------
// Q6: Real-world scenario
// ----------------------------
// Using switch to create a simple calculator

let a = 2;
let b = 3;
let operation = "*";

switch (operation) {
  case "+":
    console.log(`Q6: ${a} + ${b} = ${a + b}`);
    break;
  case "-":
    console.log(`Q6: ${a} - ${b} = ${a - b}`);
    break;
  case "*":
    console.log(`Q6: ${a} * ${b} = ${a * b}`);
    break;

  case "/":
    console.log(`Q6: ${a} / ${b} = ${a / b}`);
    break;

  case "%":
    console.log(`The Moduler values is ${a % b}`);
    break;

  default:
    console.log("Invalid operation");
}
// ----------------------------
// Q7: Theoretical Quick Notes
// ----------------------------
// - "if" is best for complex conditions and ranges.
// - "switch" is best for exact matches (like enums, constants).
// - Both are control structures to control flow of execution.
// - Avoid "switch" without "break" (it will cause fall-through).
// - Ternary operator (?) can be a shorthand for simple if-else.
