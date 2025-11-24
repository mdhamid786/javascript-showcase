// 6. Call, Apply, and Bind
// 🔹 Purpose
// They all manually set the value of this when calling a function.
// 🔹 call()
// Calls function immediately with arguments passed individually.


function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const user = {
    name:"Hamid"
}

// greet.call(user, "Hello")
// // Same as call, but arguments passed as an array.
// greet.apply(user, ["hi"])


// bind()
// Returns a new function with a permanently bound this.


const boundGreet = greet.bind(user, "Hey");
boundGreet(); // "Hey, Hamid"
