// Remove the <main> element with the id 'main'
const mainElement = document.getElementById("main");
mainElement.remove();

// Create an <h1> element and assign it to the 'newHeader' variable
const newHeader = document.createElement("h1");

// Set the id of your <h1> to 'victory'
newHeader.id = "victory";

// Set the text content of your <h1> with id 'victory' to "Paula is the champion"
newHeader.textContent = "Paula is the champion";

// Append the <h1> element to the document's body or any other desired location
document.body.appendChild(newHeader);