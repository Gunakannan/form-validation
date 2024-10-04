function validateForm() {
    document.getElementById('usernameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    document.getElementById('passwordError').innerHTML = '';

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    let isValid = true;

    
    if (username.trim() === '') {
        document.getElementById('usernameError').innerHTML = 'Username is required.';
        isValid = false;
    }

    
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!emailPattern.test(email)) {
        document.getElementById('emailError').innerHTML = 'Enter a valid email address.';
        isValid = false;
    }

    
    const passwordPattern = /^(?=.*[0-9]).{8,}$/;
    if (!passwordPattern.test(password)) {
        document.getElementById('passwordError').innerHTML = 'Password must be at least 8 characters long and contain a number.';
        isValid = false;
    }

    
    return isValid;
}  