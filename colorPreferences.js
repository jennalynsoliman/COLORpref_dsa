//Problem 5

// Initialize an array with three colors
let colors = [];

// To prompt the user for colors
function getUserColors() {
    for (let i = 0; i < 3; i++) {
        let color = prompt(Enter color ${i + 1}:);
        colors.push(color);
    }
    console.log("Initial colors:", colors);
}

// To add a new color
function addColor() {
    let newColor = prompt("Enter a new color to add:");
    colors.push(newColor); //to add new color into the array
    console.log("Updated colors:", colors);
}

// Start by getting the user's initial colors
getUserColors();

// Allow user to add new colors
let addMore = true;
while (addMore) {
    addColor();
    addMore = confirm("Do you want to add another color?");
}

// Final list of colors
console.log("Final list of colors:", colors);
