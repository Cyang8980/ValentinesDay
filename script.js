var noButton = document.getElementById("noButton");

noButton.addEventListener("click", function() {
    // Get the window width and height
    var windowWidth = window.innerWidth;
    var windowHeight = window.innerHeight;

    // Calculate a random position for the button within the window
    var randomLeft = Math.random() * (windowWidth - 100); // Subtract button width
    var randomTop = Math.random() * (windowHeight - 50); // Subtract button height

    // Update the button's position
    noButton.style.position = "absolute";
    noButton.style.left = randomLeft + "px";
    noButton.style.top = randomTop + "px";

    // Reduce the size of the "No" button
    var currentNoFontSize = parseFloat(window.getComputedStyle(noButton).fontSize);
    var currentYesFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    var newNoFontSize = currentNoFontSize - 1;
    var newYesFontSize = currentYesFontSize + 2;
    // Update the font size of the "No" button
    noButton.style.fontSize = newNoFontSize + "px";

    // Increase the size of the "Yes" button
    yesButton.style.fontSize = newYesFontSize + "px";

    // Array of random button text options
    var buttonTextOptions = ["Nope", "That's mean", "Whyyyyyy", "Not Today", "You can't do that", "But the Eevee is so cute", 
    "Think About Tobi", "You don't have to do this", ">:("];

    // Generate a random index to select text from the array
    var randomIndex = Math.floor(Math.random() * buttonTextOptions.length);

    // Update the button text with the randomly selected text
    noButton.textContent = buttonTextOptions[randomIndex];
});

var yesButton = document.getElementById("yesButton");

// Add a click event listener to the "Yes" button
yesButton.addEventListener("click", function() {
    // Change the window location to the desired URL
    window.location.href = "yes.html";
});