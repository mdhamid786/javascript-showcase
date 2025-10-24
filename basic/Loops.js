/**
 * ===============================
 * 📘 JavaScript Loops — Master File
 * ===============================
 * Covers: for, while, do-while, for...in, for...of
 * Includes: theory, practical exercises, logical/tricky problems
 * From: Basic → Intermediate → Advanced
 */

/* =====================================================
   THEORY: Loop Types & When to Use
===================================================== */
/*
1️⃣ For Loop
   - Use when you know the number of iterations
   - Syntax: for(initialization; condition; increment) { ... }

2️⃣ While Loop
   - Use when the condition needs to be checked before execution
   - Syntax: while(condition) { ... }

3️⃣ Do-While Loop
   - Use when the loop must execute at least once
   - Syntax: do { ... } while(condition);

4️⃣ For...in Loop
   - Iterates over object keys (properties)
   - Syntax: for(let key in object) { ... }

5️⃣ For...of Loop
   - Iterates over iterable values (arrays, strings, sets)
   - Syntax: for(let value of iterable) { ... }

6️⃣ Break & Continue
   - break → exit loop completely
   - continue → skip current iteration
*/

/* =====================================================
   1️⃣ For Loop — Basic → Advanced
===================================================== */

console.log("\n=== For Loop Examples ===");

// Basic iteration

// for (let i = 1; i <= 5; i++) {
//     console.log(i);
    
// }


// Sum 1 to 10

// let sum  = 0;

// for (let i = 1; i <= 10; i++) {
//      sum+=i
// }
// console.log(sum);

// Multiplication table

// let num = 5

// for(let i = 1; i<=10; i++){
//     console.log(`${num} x ${i}  = ${i*num}`);
    
// }
// Reverse iteration

// for(let i = 10; i>=3; i--){
//    console.log(i);
   
    
// }

// Nested loops (patterns)
// let num1 = 1
// let num = 2
// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         console.log(`Nested i=${i}, j=${j}`);
//     }
// }

// for(let i=0;i<=3;i++) {
//     let row =""
//     for(let j=1; j<=3;j++) {
//         // console.log(`${i} ${j}`);
//          row += (i * j) + " ";
        
//     }
//     console.log(row); 
// }


// Multiple variables in loop
// for (let i = 0, j = 10; i < 5; i++, j--) 
//     console.log("i,j =", i, j);

// for(let i = 0, j = 10 ; i<5; i++,  j++){
//      console.log("i,j=", i,j);
     
// }

// Tricky Interview Qs:
// outerLoop:
// for(let i=1;i<=3;i++){
//     for(let j=1;j<=3;j++){
//         if(i*j===4){ console.log("Breaking outer loop"); break outerLoop; }
//         console.log(i,j);
//     }
// }


/* =====================================================
   2️⃣ While Loop — Basic → Advanced
===================================================== */

console.log("\n=== While Loop ===");

// let count = 1;
// while(count <= 5){ 
//     console.log("Count =", count); count++; 

// }



// Reverse number
// let numRev = 1234, reversed = 0;
// while(numRev > 0){
//     reversed = reversed*10 + numRev%10;
//     numRev = Math.floor(numRev/10);
// }
// console.log("Reversed Number:", reversed);

// Factorial
// let n = 5, fact = 1;
// while(n > 0){ fact *= n; n--; }
// console.log("Factorial 5:", fact);

// Sum of digits
// let number = 456, digitSum=0;

// while(number>0) {
//     digitSum+= number%10
//     number = Math.floor(number/10)
// }
// while(number>0){
//     digitSum += number%10;
//     number=Math.floor(number/10);
// }
// console.log("Sum of digits:", digitSum);

/* =====================================================
   3️⃣ Do-While Loop — Ensures At Least Once
===================================================== */

console.log("\n=== Do-While Loop ===");

// let x=0;
// do{
//     console.log("Executes at least once, x =", x);
//     x++;
// }while(x<0);




// Fibonacci series using do-while
// let a=0,b=1,next, i=1;
// do{
//     console.log("Fibonacci:", a);
//     next=a+b;
//     a=b;
//     b=next;
//     i++;
// }while(i<=10);


/* =====================================================
   4️⃣ For...in Loop (Objects)
===================================================== */

console.log("\n=== For...in Loop ===");

// const student = {name:"Ali", age:25, grade:"A"};
// for(let key in student){
//     console.log(`${key}: ${student[key]}`);
// }



// Sum numeric values
// const scores = {math:50, eng:60, sci:70};
// let totalScore = 0;
// for(let key in scores) {
//      totalScore += scores[key]
// }
// console.log("Total Score:", totalScore);
/* =====================================================
   5️⃣ For...of Loop (Arrays / Strings)
===================================================== */

console.log("\n=== For...of Loop ===");

// const arr = [10,20,30];

// for(let item of arr){
//     console.log(`Value ${item}`);
    
// }

// Sum of array
// let arrSum = 0;

// for(let item of arr){
//       arrSum+=item
// }
// console.log(`sum of array is ${arrSum}`);


// String iteration
// for(let char of "JavaScript") process.stdout.write(char+" ");
// console.log();

// let name = "mdhamidali";
// for (let item of name) {
// item.split("").join("")
// }
// console.log(name.split("").reverse().join(" "));


/* =====================================================
   6️⃣ Break & Continue
===================================================== */
/*
console.log("\n=== Break & Continue ===");

// Break
for(let i=1;i<=5;i++){
    if(i===3){ console.log("Breaking at", i); break; }
    console.log("i =", i);
}

// Continue
for(let i=1;i<=5;i++){
    if(i===3){ console.log("Skipping", i); continue; }
    console.log("i =", i);
}

// Nested break with label
outer:
for(let i=1;i<=2;i++){
    for(let j=1;j<=3;j++){
        if(j===2) break outer;
        console.log(`Nested i=${i}, j=${j}`);
    }
}
*/

/* =====================================================
   7️⃣ Patterns / Nested Loops
===================================================== */
/*
let rows=5;
for(let i=1;i<=rows;i++){
    let str='';
    for(let j=1;j<=i;j++) str+='* ';
    console.log(str);
}

for(let i=1;i<=5;i++){
    let line='';
    for(let j=1;j<=i;j++) line+=j+' ';
    console.log(line);
}
*/

/* =====================================================
   8️⃣ Advanced Logical / Interview Qs
===================================================== */

// Reverse array
// const arr2=[1,2,3,4,5];
// for(let i=arr2.length-1;i>=0;i--) console.log("Reverse arr2[i] =", arr2[i]);

// Fibonacci with for loop
// let p=0,q=1,r;
// for(let i=1;i<=10;i++){
//     console.log("Fibonacci:", p);
//     r=p+q;
//     p=q;
//     q=r;
// }

// Infinite loop with break

// let k = 0
// while(true) {
//     console.log("Loop is ", k);
//     k++;
//     if(k>3){
//         break;
//     }
    
// }
// Modify array values (tricky)
// const arr3=[1,2,3];
// for(let n of arr3) n*=2; // won't affect original
// console.log("Array after for...of:", arr3);

// Armstrong number (3-digit)
// let arm=153, sumArm=0,tempArm=arm;
// while(tempArm>0){ let dig=tempArm%10; sumArm+=dig**3; tempArm=Math.floor(tempArm/10); }
// console.log(`${arm} is Armstrong?`, sumArm===arm);

// GCD of 2 numbers
// let m=12,n2=18;
// let a1=m,b1=n2;
// while(b1!==0){ let temp=b1; b1=a1%b1; a1=temp; }
// console.log("GCD:", a1);

// LCM of 2 numbers
// let lcm=(m*n2)/a1;
// console.log("LCM:", lcm);

// Count vowels in string
// let text="HEllo World123", digits=0;
// for(let char of text.toLowerCase()) if("aeiou".includes(char)) vowels++;
// for(let item of text.toLocaleLowerCase()) {
//     console.log(item);
//     if("aeiou".includes(item)) {
//         vowels++
//     }
    
// }



// for(let item in text.toLocaleLowerCase()) {
//     console.log(item);
//       if (/[0-9]/.test(item)) {
//         digits++;
//     }
// }
// console.log("Constant count:", digits);


let consonants = 0;
for (let ch of text.toLowerCase()) {
    if (/[a-z]/.test(ch) && !"aeiou".includes(ch)) consonants++;
}
console.log("Consonants:", consonants)

console.log("\n✅ Loops Master File Complete! Basic → Advanced with Theory, Practice, Tricky Qs, Logical Exercises.");

