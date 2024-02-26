var userData = localStorage.getItem('user');
if (userData) {
    var user = JSON.parse(userData);
    
    // storing the data from local storage to display 
    document.getElementById('firstName').value = user.firstName;
    document.getElementById('lastName').value = user.lastName;
    document.getElementById('dob').value = user.dob;
    document.getElementById('gender').value = user.gender;
}