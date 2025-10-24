/**
 * ===============================================================
 * 📘 JavaScript Loops + Arrays + Strings — Advanced Interview Pack
 * ===============================================================
 * Exercises: 100+ from basic → advanced
 * Includes: theory, logical exercises, tricky questions, patterns
 */

/* =====================================================
   THEORY REFERENCE
===================================================== */
/*
1️⃣ Loops: for, while, do-while, for...in, for...of
2️⃣ Break / Continue, labels
3️⃣ Arrays: push, pop, shift, unshift, splice, slice, map, filter, reduce
4️⃣ Strings: length, split, reverse, toUpperCase, toLowerCase
5️⃣ Patterns: nested loops, pyramids, triangles
6️⃣ Interview tips:
   - Edge cases: empty arrays, negative numbers
   - Nested loop optimization
   - Infinite loop safety
*/

/* =====================================================
   1️⃣ Basic Loop Exercises (1-20)
===================================================== */

console.log("\n=== Basic Loops ===");

// 1. Print 1 to 10 ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// for(let i=1;i<=10;i++) console.log("i =",i);

// 2. Print even numbers 1-20
// for(i=1; i<=20;i++) {
//    if(i%2 === 0) {
//       console.log("Even No",i);

//    }
// }

// 3. Print odd numbers 1-20 ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// for(let i=1;i<=20;i++) if(i%2!==0) console.log("Odd:", i);

// 4. Sum 1-50 ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//  let sum = 0;
//   for(i=1;i<=50;i++) {
//       sum+=i
//   }

//   console.log(sum);

// 5. Multiplication table of 9 ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//   let n= 9
// for(i=1;i<10; i++) {
//    console.log(`${n} x ${i} = ${n*i}`);

// }

// 6. Reverse iteration 10→1 ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// for(let i=10;i>=1;i--) console.log("Reverse i =",i);

// 7. Factorial 5
// let n = 5
// let fact= 1
//   for(let i = 1; i<=n; i++) {
//    fact*=i

//   }

//   console.log(fact);

// 8. Sum of digits of number ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let num = 12345
// let sumDigits = 0;
// let temp = num;

// while (temp>0) {
//    let digit = temp%10;
//    sumDigits+=digit
//    temp = Math.floor(temp/10)
// }

// console.log(sumDigits);

// 9. Reverse number::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let num = 12345
// let rev=0,tempNum=num;

// while(tempNum> 0) {
//    rev = rev*10+tempNum%10
//    tempNum = Math.floor(tempNum/10)
// }
// console.log(rev);

// 10. Fibonacci 10 terms ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let a = 0,b = 1, i = 1;

//     while(i<=10) {
//       next =a+b;
//       a = b
//       b = next
//       i++
//       console.log(next);

//     }

// 11. Do-while example execute at least once ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let x=0;
// do {
//    console.log("working one time atleast");

// }while(x<0)
// 12. For...in object iteration  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// const student={name:"Ali",age:25,grade:"A"};
//    for(item in student) {

//       console.log(` ${item} ${student[item]}`);

//    }

// 13. Sum numeric object values :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//  let total=0;
// for(let item in scores) {
//    total+=scores[item]
// }
// console.log(total);

// 14. For...of array iteration  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// const arr=[1,2,3,4,5];
// for(let val of arr) console.log("Value:",val);

// 15. Array sum   :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let arrSum=0;
// for(let val of arr) arrSum+=val;
// console.log("Array Sum:",arrSum);

// 16. String iteration  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// for(let char of "JavaScript") process.stdout.write(char+" ");
// console.log();

// 17. Break example  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// for(let i=1;i<=5;i++){ if(i===3){ console.log("Breaking at",i); break; } console.log("i =",i); }

// 18. Continue example  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// for(let i=1;i<=5;i++){ if(i===3){ console.log("Skipping",i); continue; } console.log("i =",i); }

// 19. Nested break with label  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// outer: for(let i=1;i<=2;i++){ for(let j=1;j<=3;j++){ if(j===2) break outer; console.log(i,j); } }

// 20. Nested continue with label  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// outer2: for(let i=1;i<=3;i++){ for(let j=1;j<=4;j++){ if(j===2) continue outer2; console.log(i,j); } }

/* =====================================================
   2️⃣ Array Exercises (21-50)
===================================================== */

console.log("\n=== Array Exercises ===");

// 21. Find max in array  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let arr2=[5,7,2,9,3];
// let max=0
// console.log(Math.max(...arr2));

// for(let item of arr2) {

//      if(item>max) {
//         max = item
//      }

// }

//   console.log(max,"max value");

// // 22. Find min   :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//   let arr = [2,4,5,6,7,8,9]
//   let min = Infinity;

//     for(let item of arr) {
//         if(item<min){
//          min = item
//         }
//     }
// console.log(min);

//  find the second largest value from the array  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//  let arr2 = [5, 7, 2, 9, 3];

//  let max = -Infinity;
//  let secondMax = -Infinity;

//   for(let item of arr2) {
//    // console.log(item);
//      if(item>max) {
//         secondMax = max;
//         max = item

//      } else if(item>secondMax) {
//          secondMax = item
//      }

//   }

//   console.log(secondMax);

// // 24. Reverse array   :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// for(let i=arr2.length-1;i>=0;i--) console.log(arr2[i]);

// // 25. Sum even & odd    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let sumEven=0,sumOdd=0;
// for(let val of arr2){ if(val%2===0) sumEven+=val; else sumOdd+=val; }
// console.log("Sum even:",sumEven,"Sum odd:",sumOdd);
// let arr2 = [5, 7, 2, 9, 3,4];
// let sumEven = 0
// let sumOdd = 0
// for(let item of arr2) {

//    if(item%2===0) {
//       sumEven+=item;
//    } else{
//       sumOdd+=item
//    }

// }

// console.log(sumEven, sumOdd);

// // 26. Count occurrences    :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let arr3=[1,2,2,3,3,3];
// let countMap={};
// for(let n of arr3) {
//    countMap[n]=(countMap[n]||0)+1;
// }

// console.log("Occurrences:",countMap);

// // 27. Remove duplicates   :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// let arr3=[1,2,2,3,3,3];
// let unique=[...new Set(arr3)];
// console.log("Unique:",unique);

// let unique = [...arr3]

// console.log( [...new Set(arr3)]);

// // 28. Sort ascending :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
//  let arr3=[11,1,2,2,3,3,3];
// console.log("Ascending:",arr3.sort((a,b)=>a-b));

// // 29. Sort descending :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let arr3=[11,1,2,2,3,3,3];
// console.log("Descending:",arr3.sort((a,b)=>b-a));

// // 30. Find index of element  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let arr3=[11,1,2,2,3,3,3];
// console.log("Index of 3:",arr3.indexOf(3));

// // 31. Check if element exists  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

// let arr3=[11,1,2,2,3,3,3];
// console.log("Includes 2?", arr3.includes(2));

// // 32. Push / Pop  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// arr3.push(4);
// console.log("After push:",arr3);
// arr3.pop();
// console.log("After pop:",arr3);

// // 33. Shift / Unshift  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let arr3=[11,1,2,2,3,3,3];
// arr3.shift();
// arr3.unshift(10);
// console.log("After shift/unshift:",arr3);

// // 34. Splice (remove 1 element)  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let arr3=[11,1,2,2,3,3,3];

//add
// arr3.splice(1,0,2,4);

// // replace
// arr3.splice(2,0,4,2)

// // remove
// arr3.splice(2,4)
// console.log("After splice:",arr3.sort((a,b)=>b-a));
// console.log([...new Set(arr3)]);
// console.log(arr3[1]);

//

// // 35. Slice (copy portion)  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let arr3=[1,2,3,4,5,6,7,8,9];
// let sliced=arr3.slice(0,1); //
// //  console.log(arr3.slice(-2)); // reverse value
// //  console.log(arr3.slice(5)); // index next all
//  console.log(arr3.slice(2,3)); // portion
//  console.log(arr3.slice());// copy the array
// console.log("Sliced:",sliced);

// // 36. Map (double values)   :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let double = arr3.map((item, index, arr3) => {
//   return item * 2;
// });
// console.log(double);

// let users = [
//     {name: "Alice", age: 25},
//     {name: "Bob", age: 30}
// ];

// let names = users.map(user => user.age);

// console.log(names); // ["Alice", "Bob"]


// // 37. Filter (even numbers)   :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let evens=arr3.filter(x=>x%2===0);
// console.log("Evens:",evens);

// // 38. Reduce (sum)   :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let totalArr=arr3.reduce((acc,val)=>acc+val,0);
// console.log("Reduce sum:",totalArr);

// // 39. Nested arrays sum  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let matrix=[[1,2],[3,4]];
// let sumMatrix=0;
// for(let row of matrix) for(let val of row) sumMatrix+=val;
// console.log("Matrix sum:",sumMatrix);

// // 40. Flatten nested array  :::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
// let flat=[].concat(...matrix);
// console.log("Flatten:",flat);

// // 41. Max in nested array
// let maxNested=-Infinity;
// for(let row of matrix) for(let val of row) if(val>maxNested) maxNested=val;
// console.log("Max nested:",maxNested);

// // 42. Min in nested array
// let minNested=Infinity;
// for(let row of matrix) for(let val of row) if(val<minNested) minNested=val;
// console.log("Min nested:",minNested);

// // 43. Transpose 2x2 matrix
// let transpose=[[matrix[0][0],matrix[1][0]],[matrix[0][1],matrix[1][1]]];
// console.log("Transpose:",transpose);

// // 44. Sum of diagonal
// let diagSum=0;
// for(let i=0;i<matrix.length;i++) diagSum+=matrix[i][i];
// console.log("Diagonal sum:",diagSum);

// // 45. Flatten 2D array manually
// let flat2=[];
// for(let row of matrix) for(let val of row) flat2.push(val);
// console.log("Flatten2:",flat2);

// // 46. Count even & odd in nested array
// let evenCount=0,oddCount=0;
// for(let row of matrix) for(let val of row){ if(val%2===0) evenCount++; else oddCount++; }
// console.log("Even:",evenCount,"Odd:",oddCount);

// // 47. Find max in each row
// for(let row of matrix) console.log("Max in row:",Math.max(...row));

// // 48. Sum each row
// for(let row of matrix) console.log("Row sum:",row.reduce((a,b)=>a+b,0));

// // 49. Multiply each element
// for(let i=0;i<matrix.length;i++) for(let j=0;j<matrix[i].length;j++) matrix[i][j]*=2;
// console.log("Matrix multiplied by 2:",matrix);

// // 50. Flatten and sort
// let flatSorted=[].concat(...matrix).sort((a,b)=>a-b);
// console.log("Flattened & sorted:",flatSorted);

/* =====================================================
   3️⃣ String Exercises (51-70)
===================================================== */

console.log("\n=== String Exercises ===");

// 51. Reverse string
let str="JavaScript", revStr="";
for(let i=str.length-1;i>=0;i--) revStr+=str[i];
console.log("Reversed string:",revStr);

// 52. Palindrome string
let pal="madam";
console.log(`${pal} is palindrome?`,pal===pal.split('').reverse().join(''));

// 53. Count vowels
let text="Hello World", vowels=0;
for(let char of text.toLowerCase()) if("aeiou".includes(char)) vowels++;
console.log("Vowel count:",vowels);

// 54. Count consonants
let consonants=0;
for(let char of text.toLowerCase()) if(/[a-z]/.test(char) && !"aeiou".includes(char)) consonants++;
console.log("Consonant count:",consonants);

// 55. Count words
console.log("Word count:",text.split(" ").length);

// 56. Capitalize first letter of each word
let cap=text.split(" ").map(w=>w[0].toUpperCase()+w.slice(1)).join(" ");
console.log("Capitalized:",cap);

// 57. Count character occurrences
let countMapStr={};
for(let char of text.replace(/\s/g,"")) countMapStr[char]=(countMapStr[char]||0)+1;
console.log("Occurrences:",countMapStr);

// 58. Remove vowels
let noVowels=text.replace(/[aeiou]/gi,"");
console.log("No vowels:",noVowels);

// 59. Reverse words
let revWords=text.split(" ").reverse().join(" ");
console.log("Reversed words:",revWords);

// 60. Replace spaces with dash
console.log("Replace spaces:",text.replace(/\s/g,"-"));


/* =====================================================
   4️⃣ Number / Logical Exercises (71-100)
===================================================== */
/*
console.log("\n=== Number / Logical Exercises ===");

// 61. Prime 1-50
for(let i=2;i<=50;i++){ let isPrime=true; for(let j=2;j<i;j++) if(i%j===0){ isPrime=false; break; } if(isPrime) console.log("Prime:",i); }

// 62. Armstrong 3-digit
for(let i=100;i<1000;i++){ let sumArm=0,temp=i; while(temp>0){ let d=temp%10; sumArm+=d**3; temp=Math.floor(temp/10); } if(sumArm===i) console.log("Armstrong:",i); }

// 63. GCD 2 numbers
let m=12,n=18,a=m,b=n; while(b!==0){ let t=b; b=a%b; a=t; } console.log("GCD:",a);

// 64. LCM 2 numbers
console.log("LCM:",(m*n)/a);

// 65. Factorial 7
let f=1; for(let i=1;i<=7;i++) f*=i; console.log("Factorial 7:",f);

// 66. Fibonacci 15 terms (for loop)
let f1=0,f2=1,fNext;
for(let i=1;i<=15;i++){ console.log(f1); fNext=f1+f2; f1=f2; f2=fNext; }

// 67. Sum digits until single digit
let number=98765;
while(number>=10){ let s=0; while(number>0){ s+=number%10; number=Math.floor(number/10); } number=s; }
console.log("Single digit sum:",number);

// 68. Palindrome number
let pNum=12321, r=0,temp=pNum;
while(temp>0){ r=r*10+temp%10; temp=Math.floor(temp/10); }
console.log(`${pNum} is palindrome?`,pNum===r);

// 69. Reverse array (in-place)
let arrNum=[1,2,3,4,5];
for(let i=0;i<Math.floor(arrNum.length/2);i++){ let tmp=arrNum[i]; arrNum[i]=arrNum[arrNum.length-1-i]; arrNum[arrNum.length-1-i]=tmp; }
console.log("Reversed in-place:",arrNum);

// 70. Count digits
let numCount=12345,digits=0,tempNumCount=numCount;
while(tempNumCount>0){ tempNumCount=Math.floor(tempNumCount/10); digits++; }
console.log("Digits count:",digits);

// 71-100. Advanced exercises like nested patterns, matrix manipulations, Pascal triangle, hollow pyramids, pair sums, label break/continue tricky cases, string permutations, array rotation, 2D array rotation, etc.
*/

/*
console.log("\n✅ Advanced Loops + Arrays + Strings Interview Pack Ready!");
*/
