document.addEventListener("DOMContentLoaded", () => {
  const loginForm = document.getElementById("loginForm");
  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");
  const note = document.getElementById("notification");

  // Show/Hide password toggle logic
  togglePassword.addEventListener("click", () => {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.textContent = type === "password" ? "👁️" : "🙈";
  });

  // Handle Form Validation and Submission
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault(); // Stop page from refreshing natively

    const user = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const pass = passwordInput.value.trim();

    // Strict Gmail pattern
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;

    if (!user) {
      showNotification("⚠ Username cannot be empty!", "error");
    } else if (!gmailPattern.test(email)) {
      showNotification("⚠ Please enter a valid Gmail ID!", "error");
    } else if (pass.length < 6) {
      showNotification("⚠ Password must be at least 6 characters!", "error");
    } else {
      showNotification("✔ Login successful! Redirecting...", "success");
      
      // Redirect to a dashboard page after 1.5 seconds
      setTimeout(() => {
        window.location.href = "dashboard.html";
      }, 1500);
    }
  });

  function showNotification(message, type) {
    note.innerText = message;
    note.style.display = "block";
    note.className = type === "error" ? "error-msg" : "success-msg";
  }
});
