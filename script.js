// ================================
// Part 1: Variables and Conditionals
// ================================
let name = "Wangui";
let age = 25;

if (age >= 18) {
    console.log(`${name} is an adult.`);
} else {
    console.log(`${name} is a minor.`);
}

// ================================
// Part 2: Custom Functions
// ================================

// Greet user
function greet(userName) {
    alert("Hello, " + userName + "!");
}

// Calculate square
function square(num) {
    return num * num;
}

// Example greeting
greet(name);

// ================================
// Part 3: Loop Examples
// ================================

// For loop: log numbers 1-5
for (let i = 1; i <= 5; i++) {
    console.log("For loop iteration:", i);
}

// While loop: log numbers 1-3
let count = 1;
while (count <= 3) {
    console.log("While loop iteration:", count);
    count++;
}

// ================================
// Part 4: DOM Interactions
// ================================

// Interaction 1: Change heading text
const title = document.getElementById("main-title");
title.textContent = "Interactive JS Assignment Demo";

// Interaction 2: Change paragraph text on button click
const demoParagraph = document.getElementById("demo-paragraph");
const changeTextBtn = document.getElementById("change-text-btn");
changeTextBtn.addEventListener("click", () => {
    demoParagraph.textContent = "The paragraph text has been updated dynamically!";
});

// Interaction 3: Add a random item to the list on button click
const addItemBtn = document.getElementById("add-item-btn");
const itemList = document.getElementById("item-list");
const sampleItems = ["Banana", "Apple", "Mango", "Orange", "Grapes"];

addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    const randomItem = sampleItems[Math.floor(Math.random() * sampleItems.length)];
    newItem.textContent = randomItem;
    itemList.appendChild(newItem);
});

// Interaction 4: Calculate square from input and alert result
const calculateBtn = document.getElementById("calculate-btn");
const numberInput = document.getElementById("number-input");

calculateBtn.addEventListener("click", () => {
    const num = Number(numberInput.value);
    if (!isNaN(num)) {
        alert(`The square of ${num} is ${square(num)}`);
    } else {
        alert("Please enter a valid number.");
    }
});
