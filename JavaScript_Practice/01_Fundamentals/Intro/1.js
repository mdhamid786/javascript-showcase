// // Print "Hello World".

// console.log("hello hamid")

// Print numbers 1–100.
// for(let i =1 ; i<=100;  i++) {
//     console.log(i);
    
// }

// Print multiplication table of a number.

// const printNum = (num) => {
//     for(let i =1; i<=10;i++) {
//         console.log(`The multiplication of  ${num} : ${2} x ${i} = ${num * i}`);
        
//     }
// }

// printNum(2)


// Swap two numbers without temp variable.

// let a = 1;
// let b = 2

// // let temp = a;

// // a = b
// // b = temp

// // ;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;

// a = a+b;
// b = a-b;
// a = a-b

// console.log(a,b);



// console.log(a,b);





// Find square and cube of a number.

// let num  = 5

// console.log(num**2);
// console.log(num**3);


// Convert Celsius to Fahrenheit.

// const cToF = (c) => {
//    return (c*9/5)+32
// }

// console.log(cToF(0));



// 7. Convert seconds to hh:mm:ss format

// const formatTime = (sec) => {
//    let h = Math.floor(sec / 3600)
//    let m = Math.floor((sec % 3600)/60)
//    let s = sec % 60


//    return  `${h.toString().padStart(2,"0")}:${m.toString().padStart(2,"0")}:${s.toString().padStart(2,"0")}`
// }
// console.log(formatTime(3661))


// . Reverse digits of a number

// const reverseNumber = (num) => {
    
//     return parseInt(num.toString().split("").reverse().join(""))
// }


// console.log(reverseNumber(12345));


// 9. Check if a number is even/odd

// const checkNumber = (num) => {
//   return num % 2 ===0 ? "Even Number" : "Odd Number"
// }
// console.log(checkNumber(2));
// const num  = [1,2,3,4,5,5]
// const checkNumber = (num) => {
//   return num.filter((item) => item %2 ===0 )
// }
// console.log(checkNumber(num));


// Check if a number is positive, negative, or zero.

// let number = 0;

// if(number > 0 ) { 
//     console.log("Positive");
    
// } else if(number<0) {
//     console.log("Negative");
    
// } else {
//     console.log("zero");
    
// }

// const checkNum = (number) => {
    
//     if(number>0) {
//         console.log("Positive Number");
        
//     } else if(number<0) {
//         console.log("Negative Number");
        
//     } else {
//         console.log("Zero");
        
//     }
// }

// checkNum(number)



// Variables & Data Types (10)


// let str = "100";

// console.log(Number(str));
// let PI = 3.14;
// PI = 4.1415; // Error: cannot reassign

// console.log(PI);

// let uniqueId = Symbol(133);

// console.log(uniqueId);



// Convert string to number and number to string.

// let str = "123";
// let str1 = 123;

// console.log(Number(str));

// console.log(String(str1));

// Check type of variable using typeof.
// let str = "123";

// console.log(typeof(str));



// Create constant object and modify its properties.


const hamid = {
    name:"hamid",
    age:26,
    profession:"software engineer",
    company:"webtrixz",
    location:"Andheri ",
    address:  {
       village:"kamaluddin tola",
       work:8 ,
       state:"Bihar",
       contry:"India"

    },
}

// hamid.address.state = "maharastra"

// hamid.role = "software engineer"
// hamid.company = "webtrixz "


// const shadowCopy = {...hamid}
// // console.log(shadowCopy);

// const deepCopy = JSON.parse(JSON.stringify(hamid))

// console.log(deepCopy
    
// );


// Iterating Over Deep Objects


// function printKeys(hamid) {
//   for (const key in hamid) {
//     console.log(hamid.address[key]);
    
//     // if (typeof hamid[key] === "object" && hamid[key] !== null) {
//     //   printKeys(hamid[key]); // Recursively go deeper
//     // } else {
//     //   console.log(key, ":", hamid[key]);
//     // }
//   }
// }

// console.log(Object.entries(hamid));


// console.log({...hamid,father:"haidar al"});


// Concatenate two strings.
// const name ="hamid"
// const surname="ali"

// console.log(`${name} ${surname}`);

// console.log(name +"",surname);


// const fullname  = name.concat(" ",surname)

// console.log(fullname);




// Find length of a string without using .length.

// const name ="hamid"

// // console.log(name.length);

// const lengthofStr = (str) => {
//     let count = 0 ;

//     for(const item of str) {
//         count++
//     }
//  return count;
   
// }


// console.log(lengthofStr(name));


// Convert string to uppercase without using .toUpperCase().


// Reverse string without using .reverse().


// const reverseStr = (str) => {
    
//     let reverse = ""
//     for (let i = str.length-1; i>=0; i--) {
//        reverse+= str[i]
//     }
//     return reverse
// }
// console.log(reverseStr("hamid"));

// Count vowels and consonants in string.

// const countVowelsAndConsonants = (str) => {

//     let vowel = 'aeiouAEIOU'
//    let vowelCount  = 0;
//    let constantCount = 0;
     
//      for (let char of str) {
//         if(char === "")
//      }
// }