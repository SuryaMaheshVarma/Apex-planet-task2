// Contact Form
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const success = document.getElementById("successMsg");

  if (!name || !email || !message) {
    alert("All fields are required!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Invalid email address.");
    return;
  }

  success.textContent = "Form submitted successfully!";
  this.reset();
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const task = taskInput.value.trim();

  if (!task) {
    alert("Please enter a task.");
    return;
  }

  const li = document.createElement("li");
  li.innerHTML = `
    ${task}
    <button onclick="this.parentElement.remove()">Remove</button>
  `;

  document.getElementById("taskList").appendChild(li);
  taskInput.value = "";
}
