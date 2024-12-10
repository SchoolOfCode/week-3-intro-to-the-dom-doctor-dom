console.log("Linked!");

// Ticket 1a: getElementById()
// Use getElementById() to select the element with the id of "title".
// Log the selected element to the console.

console.log(document.getElementById("title"));

// Ticket 1b: getElementsByClassName()
// Use getElementsByClassName() to select elements with the class of "content".
// Log the selected elements to the console.

const etwas = document.getElementsByClassName("content");

for (let i = 0; i < etwas.length; i++) {
    console.log(etwas.item(i));
}

// Ticket 1c: getElementsByTagName()
// Use getElementsByTagName() to select all <li> elements on the page.
// Log the selected elements to the console.

const elements = document.getElementsByTagName("li");

for (let i = 0; i < elements.length; i++) {
    console.log(elements.item(i));
}

// Ticket 1d: querySelector()
// Use querySelector() to select the first element with the class "highlight".
// Log the selected element to the console.

console.log(document.querySelector(".highlight"));

// Ticket 1e: querySelectorAll()
// Use querySelectorAll() to select all elements with the class "highlight".
// Log the selected elements to the console.

const highlight = document.querySelectorAll(".highlight");

for (let i = 0; i < highlight.length; i++) {
    console.log(highlight.item(i));
}
