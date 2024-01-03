document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
    const errorMessage = document.getElementById('errorMessage');

    errorMessage.textContent = '';

    emailInput.classList.remove('valid', 'invalid');

    if (email.length < 4) {
        errorMessage.textContent = 'Email should be at least 4 characters long.';
        emailInput.classList.add('invalid');
        return;
    }

    if (!email.includes('@')) {
        errorMessage.textContent = 'Email should contain @ symbol.';
        emailInput.classList.add('invalid');
        return;
    }

    emailInput.classList.add('valid');
    console.log('Subscribed with email:', email);
});