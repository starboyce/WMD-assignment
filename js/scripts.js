function validateForm() {
    let name = document.getElementById('name').value;
    let id = document.getElementById('idnumber').value;
    let amount = document.getElementById('amount').value;

    if (!name || !id || !amount) {
        alert("Please fill in all required fields.");
        return false;
    }
    alert("Quote request submitted successfully!");
    return true;
}

document.getElementById("feedbackForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Prevent actual form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseDiv = document.getElementById("response");

  if (name === "" || email === "" || message === "") {
    responseDiv.textContent = "Please fill in all fields.";
    responseDiv.className = "";
    responseDiv.classList.add("error");
    return;
  }

  // Simulated successful submission
  responseDiv.textContent = `Thank you for your feedback, ${name}! We will respond to your message at ${email}.`;
  responseDiv.classList.remove("hidden");

  // Reset form
  document.getElementById("feedbackForm").reset();
});

function revealButton() {
  document.getElementById("hiddenBtn").style.display = "inline-block";
}
