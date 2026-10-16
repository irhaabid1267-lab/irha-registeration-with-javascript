
const form = document.querySelector("#registrationForm");
const message = document.querySelector("#message");

form.addEventListener("submit", function (event) {

    // Stop page reload
    event.preventDefault();

    // Get input values
    const name = document.querySelector("#name").value.trim();
    const email = document.querySelector("#email").value.trim();
    const phone = document.querySelector("#phone").value.trim();
    const password = document.querySelector("#password").value;
    const confirmPassword =
        document.querySelector("#confirmPassword").value;
    const course = document.querySelector("#course").value;

    message.classList.add("d-none");

    // Check empty fields
    if (!name || !email || !phone || !password ||
        !confirmPassword || !course) {

        showMessage("Please fill in all fields.", "danger");

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {

        showMessage("Please enter a valid email address.", "danger");

    } else if (!/^\+?[0-9\s()-]{7,20}$/.test(phone)) {

        showMessage("Please enter a valid phone number.", "danger");

    } else if (password.length < 8) {

        showMessage(
            "Password must be at least 8 characters long.",
            "danger"
        );

    } else if (password !== confirmPassword) {

        showMessage("Passwords do not match!", "danger");

    } else {

        showMessage(
            "Registration successful! Welcome, " + name + "!",
            "success"
        );

        form.reset();
    }
});

// Display success or error message
function showMessage(text, type) {
    message.textContent = text;
    message.className = "alert alert-" + type;
}
