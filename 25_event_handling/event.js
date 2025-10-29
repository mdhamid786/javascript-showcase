// What is Event Handling?
// Event handling means writing code that responds to user actions (events) such as:
// Clicking a button
// Typing in a text box
// Moving the mouse
// Submitting a form
// Loading a page
// In the browser, events are signals that something has happened, and event handlers (listeners) are functions that handle those signals.


// | Category              | Example Events                                                                    |
// | --------------------- | --------------------------------------------------------------------------------- |
// | **Mouse**             | `click`, `dblclick`, `mousedown`, `mouseup`, `mousemove`, `mouseover`, `mouseout` |
// | **Keyboard**          | `keydown`, `keyup`, `keypress`                                                    |
// | **Form**              | `submit`, `change`, `focus`, `blur`, `input`                                      |
// | **Window / Document** | `load`, `resize`, `scroll`, `DOMContentLoaded`                                    |



// child.addEventListener("click", (e) => {
//   e.stopPropagation(); // parent won't be triggered
// });


// parent.addEventListener("click", handler, true); // 'true' = capture phase
// document.body.addEventListener("click", (e) => {
//   if (e.target.matches(".btn")) console.log("A button clicked!");
// });



// | Concept                      | Purpose / Use Case                            |
// | ---------------------------- | --------------------------------------------- |
// | **Inline Handler**           | Quick demos only                              |
// | **DOM Property (`onclick`)** | Simple one-handler scenario                   |
// | **`addEventListener()`**     | Modern standard; supports multiple handlers   |
// | **`event` object**           | Access event info (type, target, etc.)        |
// | **`preventDefault()`**       | Stop default browser behavior                 |
// | **`stopPropagation()`**      | Stop event bubbling or capturing              |
// | **Bubbling**                 | Handle many similar child events efficiently  |
// | **Capturing**                | Handle parent event before children           |
// | **Delegation**               | Efficient event handling for dynamic elements |
// | **removeEventListener()**    | Clean up or disable event listeners           |
