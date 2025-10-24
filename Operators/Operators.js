// ==========================================
// 1. Increment / Decrement Operators
// ==========================================
let a = 5;
console.log(++a); // 6 → increment first, then print
console.log(a++); // 6 → print first, then increment
console.log(a);   // 7

let x = 5;
let y = x++ + ++x;
console.log(y); // 12


// ==========================================
// 2. Odd / Even Check
// ==========================================
const oddEven = (n) => {
    return n % 2 === 0 ? "Even" : "Odd";
};
console.log(oddEven(1)); // Odd


// ==========================================
// 3. Swap Two Numbers Without Third Variable
// ==========================================
let num1 = 10, num2 = 20;
num1 = num1 + num2;
num2 = num1 - num2;
num1 = num1 - num2;
console.log(num1, num2); // 20 10


// ==========================================
// 4. Assignment Operators
// ==========================================
let val = 10;
val += 5;  // 15
val -= 3;  // 12
val *= 2;  // 24
val /= 4;  // 6
val %= 5;  // 1
val **= 3; // 1
console.log(val);


// ==========================================
// 5. Comparison Operators
// ==========================================
console.log(5 == "5");    // true (value only)
console.log(5 === "5");   // false (value + type)
console.log(10 != "10");  // false
console.log(10 !== "10"); // true
console.log(7 > 5);       // true
console.log(5 < 2);       // false
console.log(5 >= 5);      // true
console.log(3 <= 2);      // false
console.log(true == 1);   // true
console.log(true === 1);  // false
console.log(false == 0);  // true
console.log(false === 0); // false


// ==========================================
// 6. Conditional (if-else)
// ==========================================
let age = 15;
if (age > 18) console.log("Eligible for vote");
else console.log("Not eligible for vote");


// ==========================================
// 7. Logical Operators
// ==========================================
console.log(1 < 2 && 1 < 2); // true
console.log(1 > 2 || 3 > 2); // true
console.log(!(1 > 0));       // false
console.log(false && "Hello"); // false
console.log(true || "Hello");  // true


// ==========================================
// 8. Example: Access Control
// ==========================================
const isLoggedIn = true;
const hasToken = false;
if (isLoggedIn && hasToken) {
    console.log("Access the Dashboard");
} else {
    console.log("Access Denied");
}


// ==========================================
// 9. Default Value using OR (||)
// ==========================================
let user = "";
let name = user || "Hamid";
console.log(name); // Hamid


// ==========================================
// 10. Ternary Operator
// ==========================================
let isAdmin = true;
isAdmin ? console.log("Welcome Admin") : "";


// ==========================================
// 11. Complex Logical Evaluations
// ==========================================
console.log(0 || 1 && 2);   // 2
console.log(null || "default"); // default
let ageCheck = 20;
console.log(ageCheck >= 18 && ageCheck <= 15); // false
console.log(false && "hi" || "bye"); // bye


// ==========================================
// 12. Bitwise Operators
// ==========================================
let m = 5;  // 0101
let n = 3;  // 0011
console.log(m & n);   // 1
console.log(m | n);   // 7
console.log(m ^ n);   // 6
console.log(~m);      // -6
console.log(m << 1);  // 10
console.log(m >> 1);  // 2
console.log(-5 >>> 1); // 2147483645


// ==========================================
// 13. Grading System
// ==========================================
let marks = 85;
let grade = (marks >= 90) ? "A+"
           : (marks >= 75) ? "A"
           : (marks >= 50) ? "B"
           : "Fail";
console.log(grade); // A


// ==========================================
// 14. Another Grading Example
// ==========================================
let score = 72;
let grade2 = (score >= 90) ? "A+"
            : (score >= 70) ? "B+"
            : (score >= 50) ? "C"
            : (score <= 40) ? "Need improvement"
            : "Fail";
console.log(grade2);


// ==========================================
// 15. Ternary vs If-Else
// ==========================================
let checkA = 10;
let checkB = (checkA > 5) ? 100 : 200; // Ternary
console.log(checkB);


// ==========================================
// 16. Positive or Negative Check
// ==========================================
let num = -5;
let checkNum = (num >= 0) ? "Positive Number" : "Negative Number";
console.log(checkNum);


// ==========================================
// 17. Even or Odd
// ==========================================
let number = 12;
let evenOdd = (number % 2 === 0) ? "Even Number" : "Odd Number";
console.log(evenOdd);


// ==========================================
// 18. Greater of Two Numbers
// ==========================================
let g1 = 10, g2 = 20;
let greater = (g1 > g2) ? `${g1} is greater` : `${g2} is greater`;
console.log(greater);


// ==========================================
// 19. Greatest of Three Numbers
// ==========================================
let p = 15, q = 25, r = 20;
const max = (p > q) ? (p > r ? p : r) : (q > r ? q : r);
console.log(max); // 25


// ==========================================
// 20. Nullish Coalescing Operator (??)
// ==========================================
let username = null;
let displayUser = username ?? "Guest";
console.log(displayUser); // Guest
