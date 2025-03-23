// Student info 
const studentID = "1263736";
const studentName = "Alex Walker";

// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Dynamically add student info to the page
  const studentInfoElement = document.getElementById("student-info");
  studentInfoElement.textContent = `Student ID: ${studentID} | Name: ${studentName}`;
  
  // Attach form submit event listener
  const form = document.getElementById("pizza-form");
  form.addEventListener("submit", handleOrder);
});

class Pizza {
  constructor(size, crust, toppings, instructions) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.instructions = instructions;
  }
  
  getDescription() {
    let description = `You ordered a ${this.size} pizza with ${this.crust} crust`;
    if (this.toppings.length > 0) {
      description += `, topped with ${this.toppings.join(", ")}`;
    }
    if (this.instructions.trim() !== "") {
      description += `. Special instructions: ${this.instructions}`;
    }
    return description;
  }
}

function handleOrder(event) {
  event.preventDefault(); 

  // Capture form input values
  const size = document.getElementById("size").value;
  const crust = document.getElementById("crust").value;
  const toppingsElements = document.querySelectorAll("input[name='toppings']:checked");
  const toppings = Array.from(toppingsElements).map(el => el.value);
  const instructions = document.getElementById("instructions").value;

  // Create a new Pizza object
  const pizza = new Pizza(size, crust, toppings, instructions);
  
  // Display the pizza order summary on the page
  displayOrderSummary(pizza);
}

function displayOrderSummary(pizza) {
  const summarySection = document.getElementById("order-summary");
  summarySection.innerHTML = `<h2>Order Summary</h2><p>${pizza.getDescription()}</p>`;
}
