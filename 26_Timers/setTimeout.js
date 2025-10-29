// What Are Timers?
// Timers in JavaScript allow you to schedule code execution — either once after a delay or repeatedly at fixed intervals.
// They are part of the Web APIs provided by the browser (not part of the JS engine itself).


// 1. setTimeout()
// Runs a function once after a specified delay (in milliseconds).

// setTimeout(callback , delay , arg1 , arg2 , arg3 );


// setTimeout(()=> {
//   console.log("Runs after 2 seconds");
   
// }, 1000)

// Use case:
// Delaying execution (e.g., showing messages, animations, or loading indicators)
// Executing code after async events


// Cancel setTimeout()
// Use clearTimeout(timerId) to stop it before it runs.


// const timerId = setTimeout(()=> {
//  console.log("Runs after 3 seconds");

// },200)
//  clearTimeout(timerId)




// | Feature     | `setTimeout()`                   | `setInterval()`                |
// | ----------- | -------------------------------- | ------------------------------ |
// | Runs        | Once                             | Repeatedly                     |
// | Cancel with | `clearTimeout()`                 | `clearInterval()`              |
// | Common use  | Delayed execution                | Repeated execution             |
// | Risk        | May run once too late if delayed | Can overlap if task takes long |



// | Function                   | Description                     | Stops with        | Runs                    |
// | -------------------------- | ------------------------------- | ----------------- | ----------------------- |
// | **setTimeout()**           | Executes once after delay       | `clearTimeout()`  | One time                |
// | **setInterval()**          | Executes repeatedly at interval | `clearInterval()` | Repeatedly              |
// | **Recursive setTimeout()** | More precise repeated task      | N/A               | Repeatedly (controlled) |
