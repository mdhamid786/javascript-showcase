// **Key Differences:**

// function add(a, b) {
//   return a + b;
// }
// console.log(add(1,3));

// Function Expression
// const multiply = function (a, b) {
//   return a * b;
// };
// console.log(multiply(5,2));

// const divide = (a, b) => a / b;

// console.log(2,1);
// function createCounter() {
//   let count = 0;
//   return function () {
//     count++;
//     return count;
//   };
// }

// const createCounter = () => {
//     let count = 0;
//      return function () {
//         count++;
//         return count
//      }
// }

// const conter = createCounter()

// console.log(conter());
// for (let i = 1; i <= 10; i++) {
//   setTimeout(() => console.log(i), i * 1000);
// }

// function leaky() {
//   let bigArray = new Array(1000000).fill("leak");
//   return function() {
//     console.log(bigArray[0]);
//   };
// }

// const leakyFn = leaky();
// // bigArray stays in memory as long as leakyFn exists → memory leak

// const bankAccount = (initialBalance) => {
//     let balance = initialBalance;

//     return {
//         deposit: (amount) => balance+=amount,
//         withdraw : (amount) => balance-=amount,
//         getbalance : () => balance
//     }
// }

// const account  = bankAccount(200)

// console.log(account.deposit(100));
// for (const i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i); // 3, 3, 3 (not 0, 1, 2)
//   }, 100);
// }
// Interview Question 8: IIFE usage
// (function () {
//   var privateVar = "I'm private";
//   console.log(privateVar);
// })();

// console.log(privateVar); // ReferenceError
// const obj1 = { name: "John", age: 25 };
// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }
// const obj2 = new Person("Jane", 30);

// const obj = Object.create({
//     name:"hamid",
//     age:23
// });

// console.log(obj);

// const numbers = [1, 2, 3, 4, 5,1];

// numbers.push(6)
// numbers.pop(6)

// numbers.unshift(0)
// numbers.shift(0)
// numbers.splice(5,1)
// const sum =numbers.reduce((a,b)=>a+b,0)
// const map = numbers.map((item) => item * 2)
// const map = numbers.filter((item) => item === 1)
// const map = numbers.find((item) => item === 1)

// const map = numbers.map((item) => {
//    return item *2
// })

// console.log(map);

// Shallow vs Deep Copy
// const hamid = {
//     name:"hamid",
//     fname:"haidar ali",
//     motherName:"ishrat",
//     address: {
//         word:8,
//         pincode:847423,
//         city:"Darbhnag",
//         state:"Bihar"
//     }
// }

// console.log(hamid);
// Shallow
// const shallow = {...hamid}
// console.log(shallow.address.city = "Darbhanga");

//  Deep Copy

// const deep = JSON.parse(JSON.stringify(hamid))

// console.log(deep.name);

// console.log("1");

// setTimeout(() => console.log("2"), 0);

// Promise.resolve().then(() => console.log("3"));

// console.log("4");

// const promise1 = new Promise ((resolve, reject)=> {

//      setTimeout(() => {
//         resolve("First")
//      }, 100);
// })

// const promise2 = promise1.then((result)=> {
// const  a = 10
// const a = 20
//     console.log(result);
//     console.log("second");

// }).catch((error)=> {
//     console.log(error);

// })

// const fetchData =  () => {
  
//      fetch("https://jsonplaceholder.typicode.com/posts")
//      .then((response)=>response.json())
//      .then((data)=>{
//         console.log(data);
        
//      })

// };

// fetchData();
// setTimeout(() => console.log("setTimeout"), 0);
// setImmediate(() => console.log("setImmediate"));
// process.nextTick(() => console.log("nextTick"));
// Promise.resolve().then(() => console.log("Promise"));


// const user = {
//   id: 1,
//   name: "John",
//   address: {
//     street: "123 Main St",
//     city: "NYC",
//   },
//   hobbies: ["reading", "coding"],
// };
 
// const {id, name, age=12,address} = user;

// console.log(id,name,age);

// const [first, second, ...rest] = user.hobbies;

// console.log(...user);

// function highlight(strings, ...values) {
//   return strings.reduce((result, string, i) => {
//     return result + string + (values[i] ? `<strong>${values[i]}</strong>` : "");
//   }, "");
// }

// const highlighted = highlight`Name: ${name}, Age: ${age}`;
// let nums = [1,2,3,4,5];

// // forEach
// // nums.forEach(n => console.log(n));

// // map
// let doubled = nums.forEach(n => n*2); // [2,4,6,8,10]

// // filter
// let evens = nums.filter(n => n%2===0); // [2,4]

// // reduce
// let sum = nums.reduce((acc,n) => acc+n, 0); // 15

// // some (at least one true?)
// console.log(nums.some(n => n>3)); // true

// // every (all true?)
// console.log(nums.every(n => n>0)); // true

// // find
// console.log(nums.find(n => n>3)); // 4

// // findIndex
// console.log(nums.findIndex(n => n===3)); // 2

// clearTimeout
// let timeout = setTimeout(() => console.log("Not printed"), 2000);
// clearTimeout(timeout); // cancels timeout

// let count = 12;
// let interval = setInterval(()=>{
  
//     console.log(count++);
//     if(count>4 && count-2) {
//         console.log("*");
//         clearInterval(interval)
//     }
// },100)


// . Callbacks & Callback Hell

// const getData = (id, Callback) => {
//     setTimeout(() => {
//           console.log("Data for id:", id); 
//           Callback()
//     }, 100);
// }

// getData(1,()=>{
//     getData(2,()=>{
//         getData(3,()=> {
//             console.log("All is Done");
            
//         })
//     })
// })

// Promises

// let promise = new Promise ((resolve, reject) => {

//     let success = false;

//     setTimeout(()=> {
//         success ? resolve("Task Done") : reject("Task Failed")
//     },100)
// })

// promise.then((result) => {
//     console.log(result);
    
// }).catch((error)=> {
//     console.log(error);
    
// }).finally(()=>{
//     console.log("End");
    
// })


// function fetchData() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Data received"), 1000);
//   });
// }

// async function run() {
//   console.log("Start");
//   const data = await fetchData();
//   console.log(data); // Data received
//   console.log("End");
// }
// run();
// console.log("Start");

// setTimeout(() => console.log("Timeout"), 0);  // Macrotask
// Promise.resolve().then(() => console.log("Promise")); // Microtask

// console.log("End");

// // Output:
// // Start
// // End
// // Promise
// // Timeout
// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");
// Promise.resolve(10)
//   .then(num => {
//     console.log(num); // 10
//     return num * 2;
//   })
//   .then(num => {
//     console.log(num); // 20
//     throw new Error("Something went wrong");
//   })
//   .catch(err => {
//     console.log("Error:", err.message);
//     return 50; // recover and continue chain
//   })
//   .then(num => console.log(num)); // 50
// Synchronous
// console.log("Task 1");
// console.log("Task 2");
// console.log("Task 3");

// // Asynchronous
// console.log("Task 1");
// setTimeout(() => console.log("Task 2"), 1000);
// console.log("Task 3");
// By ID
// Leak example
// let arr = [];
// setInterval(() => {
//   arr.push(); // grows forever if not cleared
// }, 1000);
// console.log(arr);


// const rightTriangle = (n) => {
//     for (let i = 1; i < n; i++) {
//       console.log("*".repeat(i));
      
        
//     }
// }
// rightTriangle(5);


// const rightTriangle = (n) => {
//     for(let i = n;i>=1;i--) {
//         console.log("*".repeat(i));
        
//     }
// }

// rightTriangle(5)

// 3. Pyramid

// const Pyramid = (n) => {
//    for(let i = 1; i<n; i++) {
   
//     console.log(" ".repeat(n-i) + "* " .repeat(i));
    
    
//    }
// }

// Pyramid(5)

