// =============================================
// 🔹 DOM MANIPULATION – COMPLETE GUIDE
// =============================================

// ---------------------------------------------
// 🔸 1. WHAT IS THE DOM?
/**
 * DOM (Document Object Model) represents the HTML structure as
 * a tree of nodes that JavaScript can manipulate dynamically.
 *
 * The browser creates it from HTML, allowing JS to:
 * ✅ Select elements
 * ✅ Modify content / styles / attributes
 * ✅ Add / remove elements
 * ✅ Handle user events
 */

// ---------------------------------------------
// 🔸 2. SELECTING ELEMENTS

// ✅ By ID
const heading = document.getElementById("mainTitle");

// ✅ By class name
const items = document.getElementsByClassName("list-item");

// ✅ By tag name
const paragraphs = document.getElementsByTagName("p");

// ✅ By CSS selector (recommended)
const btn = document.querySelector(".btn");
const allBtns = document.querySelectorAll(".btn");

// ---------------------------------------------
// 🔸 3. MODIFYING ELEMENT CONTENT

heading.textContent = "Welcome to JavaScript!";
heading.innerText = "Updated Heading Text";
heading.innerHTML = "<span style='color:red'>Dynamic Text</span>";

// ---------------------------------------------
// 🔸 4. MODIFYING ATTRIBUTES & STYLES

btn.setAttribute("data-status", "active");
console.log(btn.getAttribute("data-status")); // "active"
btn.removeAttribute("data-status");

// Inline style manipulation
btn.style.backgroundColor = "blue";
btn.style.padding = "10px";

// CSS class manipulation
btn.classList.add("highlight");
btn.classList.remove("disabled");
btn.classList.toggle("active");

// ---------------------------------------------
// 🔸 5. CREATING & APPENDING ELEMENTS

const newDiv = document.createElement("div");
newDiv.textContent = "I’m new here!";
document.body.appendChild(newDiv);

const list = document.querySelector("#list");
const newItem = document.createElement("li");
newItem.textContent = "New list item";
list.appendChild(newItem);

// Insert before a specific element
const firstItem = list.firstElementChild;
list.insertBefore(newItem, firstItem);

// ---------------------------------------------
// 🔸 6. REMOVING ELEMENTS

// ✅ Modern
newItem.remove();

// ✅ Older (for compatibility)
list.removeChild(list.lastElementChild);

// ---------------------------------------------
// 🔸 7. TRAVERSING THE DOM TREE

const container = document.querySelector(".container");

console.log(container.parentElement); // parent node
console.log(container.children); // HTMLCollection
console.log(container.firstElementChild);
console.log(container.lastElementChild);
console.log(container.nextElementSibling);
console.log(container.previousElementSibling);

// ---------------------------------------------
// 🔸 8. EVENT HANDLING

const clickBtn = document.querySelector("#clickMe");

clickBtn.addEventListener("click", () => {
  console.log("Button clicked!");
});

clickBtn.addEventListener("mouseover", (e) => {
  e.target.style.backgroundColor = "lightgreen";
});

clickBtn.addEventListener("mouseout", (e) => {
  e.target.style.backgroundColor = "";
});

// ---------------------------------------------
// 🔸 9. EVENT DELEGATION (ADVANCED)
/**
 * Instead of attaching listeners to every child,
 * attach one to the parent and use event.target.
 */

document.querySelector("#parentList").addEventListener("click", (e) => {
  if (e.target && e.target.matches("li.item")) {
    console.log("Clicked:", e.target.textContent);
  }
});

// ---------------------------------------------
// 🔸 10. FORM HANDLING

const form = document.querySelector("#myForm");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.querySelector("#name").value;
  console.log("Submitted name:", name);
});

// ---------------------------------------------
// 🔸 11. DOM PERFORMANCE OPTIMIZATION

// Avoid reflow/repaint multiple times
const fragment = document.createDocumentFragment();

for (let i = 1; i <= 1000; i++) {
  const p = document.createElement("p");
  p.textContent = `Line ${i}`;
  fragment.appendChild(p);
}

document.body.appendChild(fragment);

// ---------------------------------------------
// 🔸 12. ADVANCED: DYNAMIC ELEMENT CREATION (LOGICAL EXAMPLE)

function createCard(title, description) {
  const card = document.createElement("div");
  card.className = "card";

  const h3 = document.createElement("h3");
  h3.textContent = title;

  const p = document.createElement("p");
  p.textContent = description;

  card.append(h3, p);
  document.body.appendChild(card);
}

createCard("JavaScript", "Powerful scripting language for the web!");

// ---------------------------------------------
// 🔸 13. DOMContentLoaded vs load
/**
 * DOMContentLoaded → Fires when HTML is fully parsed (faster)
 * load → Fires after images, CSS, and all resources load
 */

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM is ready!");
});

window.addEventListener("load", () => {
  console.log("Everything loaded!");
});

// ---------------------------------------------
// 🔸 14. DEEP CLONING ELEMENTS

const clonedCard = document.querySelector(".card").cloneNode(true);
document.body.appendChild(clonedCard);

// ---------------------------------------------
// 🔸 15. COMMON INTERVIEW QUESTIONS
/**
 * 1️⃣ What is the DOM?
 *     → It’s an object-based representation of the HTML structure.
 *
 * 2️⃣ Difference between innerText, textContent, innerHTML?
 *     → innerText respects CSS and layout.
 *       textContent returns all text (faster).
 *       innerHTML parses HTML inside.
 *
 * 3️⃣ Difference between querySelector() and getElementById()?
 *     → querySelector() uses CSS selectors and works for any element.
 *       getElementById() is faster but only by ID.
 *
 * 4️⃣ What is event bubbling & capturing?
 *     → Bubbling: event travels from target → parent → top.
 *       Capturing: event goes top → target (use capture = true).
 *
 * 5️⃣ What is event delegation?
 *     → Handle events on parent and detect child via e.target.
 *
 * 6️⃣ What’s the difference between DOMContentLoaded and load?
 *     → DOMContentLoaded runs earlier, after DOM parsing.
 *
 * 7️⃣ What is reflow and repaint?
 *     → Reflow: recalculating layout.
 *       Repaint: redrawing pixels on screen.
 *       → Avoid by batching DOM updates.
 *
 * 8️⃣ How to improve DOM performance?
 *     → Use DocumentFragment, avoid heavy DOM loops,
 *       use requestAnimationFrame for animations.
 *
 * 9️⃣ Can you explain how Virtual DOM differs from Real DOM?
 *     → Virtual DOM (used in React) is an in-memory representation
 *       that updates efficiently by diffing instead of full re-rendering.
 *
 * 🔟 How to clone an element including its children?
 *     → element.cloneNode(true)
 */

// ---------------------------------------------
// 🔸 16. KEY TAKEAWAYS
/**
 * ✅ DOM = interface to access & manipulate HTML structure.
 * ✅ Select → Modify → Create → Remove → Handle Events.
 * ✅ Prefer querySelector/querySelectorAll.
 * ✅ Use event delegation for dynamic content.
 * ✅ Optimize reflows/repaints using fragments.
 * ✅ innerText vs textContent vs innerHTML matters.
 * ✅ DOMContentLoaded fires earlier than load.
 */
