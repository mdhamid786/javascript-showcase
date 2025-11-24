// ===================== Introduction / Basics (10) ===============================

// 1. Print "Hello World".::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// console.log("Hello World");

// 2. Print numbers 1–100.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// for(let i = 1; i<=100; i++) console.log(i);
// 3. Swap two numbers without temp variable.::::::::::::::::::::::::::::::::::::::::::::::
/* 
// let a =10
// let b = 20
// a = a+b; // a= 10+20 = 30
// b = a-b; // b = 30-20 = 10
// a = a-b; // a = 30-10= 20
// console.log(a,b);

// using temp
// let a = 10
// let b =20
// let temp = a;
// a = b;
// b=temp

// console.log(a,b);
*/
// 4. Find square and cube of a number.::::::::::::::::::::::::::::::::::::::::::::::::::::
/* 
// let n = 2;
// const findSqrCube = (n) => {
//   const sqr = n * n;
//   const cube = n * n * n;

//   return { sqr, cube };
// };
// console.log(findSqrCube(n));
*/
// 5. Convert Celsius to Fahrenheit.:::::::::::::::::::::::::::::::::::::::::::::::::::::::
/* 
// formula is f = (cal*1.8)+32
// let cel = 1;
// const converIntoFahren = (cel) => {
//   const Fahrenheit = cel * 1.8 + 32;
//   return Fahrenheit;
// };
// console.log(converIntoFahren(cel));
*/
// 6. Convert seconds to hh:mm:ss format.::::::::::::::::::::::::::::::::::::::::::::::::::
/* 
// let second = 665;
// const convert = (second) => {
//   //  hh:mm:ss
//   // hours = seconds / 3600
//   // minutes = (seconds % 3600) / 60
//   //seconds = seconds % 60
//   let h = Math.floor(second / 3600)
//     .toString()
//     .padStart(2, "0");
//   let m = Math.floor((second % 3600) / 60)
//     .toString()
//     .padStart(2, 0);
//   let s = Math.floor(second % 60)
//     .toString()
//     .padStart(2, "0");

//   console.log(`${h}:${m}:${s}`);
// };
// console.log(convert(second));
*/
// 7. Reverse digits of a number.:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
/* 
let num = 12345;
let reverse = Number(num.toString().split("").reverse().join(""))
console.log(reverse);
*/
// 8. Check if a number is even/odd.:::::::::::::::::::::::::::::::::::::::::::::::::::::::
/* 
let num = 2;
if (num % 2 === 0) {
  console.log(`The number ${num} is Even Number`);
} else {
  console.log(`The number ${num} is Odd Number`);
}
 */
// 9. Check if a number is positive, negative, or zero.::::::::::::::::::::::::::::::::::::
/* 
let num = -1;
if (num > 0) {
  console.log(`The number ${num} is positive Number`);
} else if (num === 0) {
  console.log(`The number ${num} is zero Number`);
} else {
  console.log(`The number ${num} is Negative Number`);
} 
  */
// 10. Print multiplication table of any number.:::::::::::::::::::::::::::::::::::::::::::

// ===================== Variables & Data Types (10) ===============================

// 11. Create variables with all data types.:::::::::::::::::::::::::::::::::::::::::::::::
/*
// Primitive Data Types
let name = "hamid"
let age = 26;
let isBlocked = true
let useStatus;
let empty = null;
let bigInt = 478478478347834
// Non-Primitive (Reference) Types
let person = {
    name:"hamid",
    age:26
}
let arr = [2,3,4,5,6]

let geet(){
}
*/
// 12. Convert string to number and number to string.::::::::::::::::::::::::::::::::::::::
/*
let str = "123";
let num = Number(str);
console.log(num); // 123
let n = 100;
let str1 = String(n);
console.log(str1); // "100"

*/

// 13. Check type of variable using typeof.::::::::::::::::::::::::::::::::::::::::::::::::
/*
let str = "hamid"
let num = 1
console.log(typeof str);
console.log(typeof num);
*/

// 14. Create constant object and modify its properties.:::::::::::::::::::::::::::::::::::
/*
const person = {
  name: "Hamid",
  age: 25
};
person.age=26
console.log(person);
*/
// 15. Concatenate two strings.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*
let firstName = "Hamid"
let lastName = "Ali"
let fullName = `${firstName} ${lastName}`
console.log(fullName);
*/

// 16. Find length of a string without using .length.:::::::::::::::::::::::::::::::::::::::
/*
let fullName = "Hamid"
console.log(fullName.length);
*/

// 17. Convert string to uppercase without using .toUpperCase().:::::::::::::::::::::::::::
/*
let str = "hello world";
const result = str
  .split(" ")
  .map((word) => word[0].toLocaleUpperCase() + word.slice(1))
  .join(" ");
console.log(result);
*/
// 18. Reverse string without using .reverse().::::::::::::::::::::::::::::::::::::::::::::
// let str = "hamid"
// let reverse =""
// for(let i = str.length-1; i>=0; i++) {
//     reverse+=str[i]
// }

// console.log(reverse);

// 19. Count vowels and consonants in a string.::::::::::::::::::::::::::::::::::::::::::::
/*
const countVowelsAndConsonants = (str) => {
  let latters = "aeiouAEIOU"
  let vowelCount = 0;
  let constantCount = 0;
   for(let char of str) {
     if(/[a-zA-z]/.test(char)) {
       if(latters.includes(char)) {
        vowelCount++
       } else {
        constantCount++
       }
     }
   }
  return {vowelCount, constantCount}
}
console.log(countVowelsAndConsonants("Hello World"));
*/
// 20. Compare two strings ignoring case.::::::::::::::::::::::::::::::::::::::::::::::::::
// const compareStrings = (str1, str2) =>{
//     return str1.toLowerCase() === str2.toLowerCase()
// }

// console.log(compareStrings("Hello Hamid", "Hello Hamid1"));
// ===================== Operators (10) ============================================

// 21. Build simple calculator.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*
const calculator = (n1, n2, operator) => {
  switch (operator) {
    case "+":
      return n1 + n2;

    case "-":
      return n1 - n2;

    case "*":
      return n1 * n2;

    case "/":
      return n1 / n2;

    default:
      return "Invalid Operator";
  }
};
console.log(calculator(1, 2, "+"));
*/
// 22. Find remainder of two numbers.::::::::::::::::::::::::::::::::::::::::::::::::::::::
/*
  const findRemainder = (n1,n2) => {
      return n1%n2
  }
  console.log(findRemainder(17, 5));
  */
// 23. Use bitwise operators to check odd/even.::::::::::::::::::::::::::::::::::::::::::::
/*
    let num = 2
    const check =  num%2===0 ?"Even No":"Odd num"
    console.log(check);
    */
// 24. Find power of number using bitwise shift.:::::::::::::::::::::::::::::::::::::::::::
/*
const powerOfTwo = (n) => {
  return 1 << n;   // 2^n
};

console.log(powerOfTwo(3));  // 8   (2^3)
console.log(powerOfTwo(5));  // 32  (2^5)

*/
// 25. Compare == vs ===.:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

/*
5 == "5"   // true (string converted to number)
null == undefined // true
 0 == false // true
5 === "5"   // false (number vs string)
0 === false // false
null === undefined // false
*/
// 26. Use ternary operator for max of 3 numbers.:::::::::::::::::::::::::::::::::::::::::::
/*
const maxOfThree = (a,b,c) => {
        return a>b ? (a>c ? a : 3) : (b>c  ? b : c)
}

console.log(maxOfThree(1,2,3));
*/


// 27. Implement XOR swap algorithm.:::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 28. Check if two numbers have opposite signs using bitwise.::::::::::::::::::::::::::::
// 29. Toggle a boolean without !.:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 30. Add two binary strings.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ===================== Control Flow (20) ==========================================
//18-19-20
// 31. Print all prime numbers up to n.::::::::::::::::::::::::::::::::::::::::::::::::::::
// 32. Print factorial of a number.::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 33. Print Fibonacci sequence up to n.:::::::::::::::::::::::::::::::::::::::::::::::::::
// 34. Find GCD of two numbers.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 35. Find LCM of two numbers.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 36. Print Armstrong numbers up to n.::::::::::::::::::::::::::::::::::::::::::::::::::::
// 37. Print perfect numbers up to n.::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 38. Sum of digits of a number.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 39. Reverse number and check palindrome.::::::::::::::::::::::::::::::::::::::::::::::::
// 40. Count digits in a number.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 41. Find largest of three numbers using if-else.::::::::::::::::::::::::::::::::::::::::
// 42. Check leap year.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 43. Print pyramid/star patterns.::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 44. Generate random number within range.::::::::::::::::::::::::::::::::::::::::::::::::
// 45. Print all multiples of a number in a range.:::::::::::::::::::::::::::::::::::::::::
// 46. Calculate sum of natural numbers.::::::::::::::::::::::::::::::::::::::::::::::::::::
// 47. Print factors of a number.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 48. Print prime factors of a number.::::::::::::::::::::::::::::::::::::::::::::::::::::
// 49. Convert decimal to binary.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 50. Convert binary to decimal.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// ===================== Functions (20) ============================================
// 21-22-23
// 51. Function to check palindrome string.::::::::::::::::::::::::::::::::::::::::::::::::
// 52. Function to reverse string.:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 53. Function to find factorial.:::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 54. Function to find nth Fibonacci number.:::::::::::::::::::::::::::::::::::::::::::::::
// 55. Function to check prime.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 56. Function to find min and max in array.:::::::::::::::::::::::::::::::::::::::::::::::
// 57. Function to find second largest element.::::::::::::::::::::::::::::::::::::::::::::
// 58. Function to check anagram.::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 59. Function to count frequency of characters in string.:::::::::::::::::::::::::::::::::
// 60. Function to generate random password.::::::::::::::::::::::::::::::::::::::::::::::::
// 61. Function to find sum of array.:::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 62. Function to find product of array.:::::::::::::::::::::::::::::::::::::::::::::::::::
// 63. Function to remove duplicates from array.:::::::::::::::::::::::::::::::::::::::::::
// 64. Function to flatten nested array.::::::::::::::::::::::::::::::::::::::::::::::::::::
// 65. Function to chunk array into groups.::::::::::::::::::::::::::::::::::::::::::::::::
// 66. Function to merge two arrays.:::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 67. Function to rotate array by k.:::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 68. Function to merge two objects.:::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 69. Function to deep clone object.:::::::::::::::::::::::::::::::::::::::::::::::::::::::
// 70. Function to compare two objects deeply.:::::::::::::::::::::::::::::::::::::::::::::
