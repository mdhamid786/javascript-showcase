// ================================
// Comments & Code Formatting in JavaScript
// ================================
// Comments explain code, improve readability, and help debugging.
// JavaScript supports two types: single-line (//) and multi-line (/* */).
// Best practice: prefer single-line for clarity, avoid excessive or outdated comments.

// Example of single-line comment:
let x = 10; // store initial value

// Multi-line comment (not recommended in interviews, use sparingly):
// let y = 20;
/*
console.log(x + y);
*/

// --------------------
// Why Comments Matter
// --------------------
// - Explain WHY not WHAT (code should explain itself, comments give reasoning).
// - Useful for TODO, FIXME, or temporary notes.
// - Interview point: clean code > too many comments.

// Example of TODO and FIXME:
 // TODO: Optimize this function for large datasets
 // FIXME: Handle null input case

// --------------------
// Code Formatting Basics
// --------------------
// - Indentation: 2 or 4 spaces (consistent across project).
// - Naming: camelCase for variables/functions, PascalCase for classes, SCREAMING_SNAKE_CASE for constants.
// - Semicolons: optional in JS but recommended for consistency.
// - Curly braces: keep consistent (same line vs next line depends on team style).

// Example formatting:
function calculateTotal(price, qty) {
  if (!price || !qty) return 0;
  return price * qty; // simple multiplication
}

// --------------------
// Best Practices for Comments & Formatting
// --------------------
// - Keep code self-explanatory; don’t write obvious comments.
// - Use comments to explain complex logic, not every line.
// - Keep lines short (<80-100 chars).
// - Use consistent indentation & spacing.
// - Follow ESLint/Prettier or project-specific guidelines.
// - Remove dead code and unnecessary comments before production.

// --------------------
// Interview Perspective
// --------------------
// Q: Why are comments important?
// A: For readability, maintainability, onboarding new developers.
// Q: What’s better: self-explanatory code or comments?
// A: Self-explanatory code; comments are secondary.
// Q: What tools enforce formatting?
// A: ESLint, Prettier.
// Q: Should comments explain logic or implementation?
// A: Explain logic (why), not just implementation (what).
// Q: How do you maintain clean comments in a team?
// A: Code reviews, linting rules, and regular cleanup.

// --------------------
// Example: Good vs Bad Commenting
// --------------------
// Bad: let a = 5; // set a to 5
// Good: let retryLimit = 5; // max retry attempts before locking user
