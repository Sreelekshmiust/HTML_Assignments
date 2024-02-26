function checkFields() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var submitBtn = document.getElementById("submitBtn");

    if (username.trim() !== "" && password.trim() !== "") {
        submitBtn.disabled = false;
    } else {
        submitBtn.disabled = true;
    }
}

function loginUser() {
    // getting the values from html document
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Retrieving the stored user data from local storage
    var userData = localStorage.getItem('user');
    if (userData) {
        // converting the json string into js object
        var user = JSON.parse(userData);
        if (user.username === username && user.password === password) {
            window.location.href = 'profile.html';
            return false;
        } else {
            alert("Invalid username or password");
            return false;
        }
    } else {
        alert("No user registered. Please sign up first.");
        return false;
    }
}
