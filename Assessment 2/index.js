function validateForm() {
    // getting the values from html document
    var username = document.getElementById("username").value;
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var dob = document.getElementById("dob").value;
    var password = document.getElementById("password").value;
    var confirmPassword = document.getElementById("confirmPassword").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    // creating the user object to store
    var user = {
        username: username,
        firstName: firstName,
        lastName: lastName,
        dob: dob,
        gender: gender,
        password: password
    };

    // saving the created user object to local storage
    localStorage.setItem('user', JSON.stringify(user));
    window.location.href = 'profile.html';
    
    return false;
}