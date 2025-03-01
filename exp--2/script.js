function validateForm() {
    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let password = document.getElementById("password").value.trim();
    let email = document.getElementById("email").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let address = document.getElementById("address").value.trim();

    let namePattern = /^[A-Za-z]+$/;
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let mobilePattern = /^\d{10}$/;

    if (!firstName.match(namePattern) || firstName.length < 6) {
        alert("First Name must contain only alphabets and be at least 6 characters long.");
        return false;
    }

    if (lastName === "") {
        alert("Last Name cannot be empty.");
        return false;
    }

    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return false;
    }

    if (!email.match(emailPattern)) {
        alert("Enter a valid email (e.g., name@domain.com).");
        return false;
    }

    if (!mobile.match(mobilePattern)) {
        alert("Mobile Number must be exactly 10 digits.");
        return false;
    }

    if (address === "") {
        alert("Address cannot be empty.");
        return false;
    }
    alert("Registration Successful!");
    return false;
}
