// 1. JSON.stringify() → Convert Object → JSON String

// JSON.stringify(value, replacer, space);


// const user = {
//     name:"Ali",
//     age:26,
//     active: true
// }

// // 
// const converToJson = JSON.stringify(user)
// console.log(converToJson);


// Use Cases:
// Send data to a server (via fetch or axios)
// Store data in localStorage or cookies

// localStorage.setItem("user", JSON.stringify(user));




// 2. JSON.parse() → Convert JSON String → Object
// const jsonString = '{"name":"Ali","age":25,"active":true}';

// const user = JSON.parse(jsonString);
// console.log(user); // "Ali"



// Use Cases:
// Receive JSON from APIs
// Read JSON from storage
// Convert configuration or data files


// const user = JSON.parse(localStorage.getItem("user"));



// | Operation     | Method             | Converts        | Example     | Output      |
// | ------------- | ------------------ | --------------- | ----------- | ----------- |
// | **Stringify** | `JSON.stringify()` | Object → String | `{a:1}`     | `'{"a":1}'` |
// | **Parse**     | `JSON.parse()`     | String → Object | `'{"a":1}'` | `{a:1}`     |



// Object to store
// const settings = { theme: "dark", fontSize: 16 };

// // Convert to JSON and save
// localStorage.setItem("settings", JSON.stringify(settings));

// // Retrieve and parse back to object
// const savedSettings = JSON.parse(localStorage.getItem("settings"));

// console.log(savedSettings.theme); // "dark"
