// Constant for your student ID 
const studentId = "1263736";

// Change background color based on the users custom number input.
// Also displays the student id in the <p> tag.
function changeCustomColor() {
  const inputEl = document.getElementById("customNumber");
  const inputVal = inputEl.value;
  const number = Number(inputVal);
  let backgroundColor = "";

  // Check if input is a valid number
  if (isNaN(number)) {
    alert("Please enter a valid number.");
    return;
  }

  // Set color based on conditions:
  if (number < 0 || number > 100) {
    backgroundColor = "red";
  } else if (number >= 0 && number < 20) {
    backgroundColor = "green";
  } else if (number >= 20 && number < 40) {
    backgroundColor = "blue";
  } else if (number >= 40 && number < 60) {
    backgroundColor = "orange";
  } else if (number >= 60 && number < 80) {
    backgroundColor = "purple";
  } else if (number >= 80 && number <= 100) {
    backgroundColor = "yellow";
  }

  // Update the background color
  document.body.style.backgroundColor = backgroundColor;
  // Display the student ID
  document.getElementById("myStudentId").textContent =
    "Student ID: " + studentId;
}

// Change background color based on a randomly generated number (1-100)
// The same color conditions are applied.
function changeRandomColor() {
  // Generate random number between 1 and 100
  const randomNumber = Math.floor(Math.random() * 100) + 1;
  let backgroundColor = "";

  // Apply the same conditions:
  if (randomNumber < 0 || randomNumber > 100) {
    backgroundColor = "red"; 
  } else if (randomNumber >= 0 && randomNumber < 20) {
    backgroundColor = "green";
  } else if (randomNumber >= 20 && randomNumber < 40) {
    backgroundColor = "blue";
  } else if (randomNumber >= 40 && randomNumber < 60) {
    backgroundColor = "orange";
  } else if (randomNumber >= 60 && randomNumber < 80) {
    backgroundColor = "purple";
  } else if (randomNumber >= 80 && randomNumber <= 100) {
    backgroundColor = "yellow";
  }

  // Update the background color
  document.body.style.backgroundColor = backgroundColor;
  document.getElementById("customNumber").value = randomNumber;
}

// Generate options for the select list using an array of images.
// Ensure options are added only once.
function addList() {
  const select = document.getElementById("imageSelect");
  // Check to avoid adding duplicate options (default option is always there)
  if (select.options.length > 1) return;

  // Array of images (update these with your image names and paths)
  const imagesArr = [
    { name: "Field", src: "./img/img1.jpg" },
    { name: "Tree", src: "./img/img2.jpg" },
    { name: "Mountain", src: "./img/img3.jpg" },
    { name: "Deer", src: "./img/img4.jpg" },
    { name: "Forest", src: "./img/img5.jpg" }
  ];

  // Loop through the array and create an option for each image
  imagesArr.forEach((image) => {
    const option = document.createElement("option");
    option.value = image.src;
    option.textContent = image.name;
    select.appendChild(option);
  });
}

// Update the image element to display the selected image.
function changeImage() {
  const select = document.getElementById("imageSelect");
  const imgEl = document.getElementById("images");
  imgEl.src = select.value;
  imgEl.alt = select.options[select.selectedIndex].text;
}

// Set up event listeners once the DOM content is loaded.
document.addEventListener("DOMContentLoaded", function () {
  // Populate the select list with image options.
  addList();

  // Event listener for the "Change custom color" button.
  document
    .querySelector(".custColor")
    .addEventListener("click", changeCustomColor);

  // Event listener for the "Change random color" button.
  document
    .querySelector(".randColor")
    .addEventListener("click", changeRandomColor);

  // Event listener for when a new image is selected.
  document
    .getElementById("imageSelect")
    .addEventListener("change", changeImage);
});

